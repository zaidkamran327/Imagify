import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

export const generateImage = async (req, res) => {
  try {
    const { userId, prompt } = req.body;

    // Validate request details
    if (!userId || !prompt) {
      return res.json({ success: false, message: "Missing Details" });
    }

    // Find user
    const user = await userModel.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "User not found" });
    }

    // Check credit balance
    if (!user.creditBalance || user.creditBalance <= 0) {
      return res.json({
        success: false,
        message: "No Credit Balance",
        creditBalance: user.creditBalance,
      });
    }

    // Prepare FormData
    const formData = new FormData();
    formData.append("prompt", prompt);

    // Generate image using external API
    const { data } = await axios.post(
      "https://clipdrop-api.co/text-to-image/v1",
      formData,
      {
        headers: {
          "x-api-key": process.env.CLIPDROP_API,
        },
        responseType: "arraybuffer",
      }
    );

    // Convert image to base64 format
    const base64Image = Buffer.from(data, "binary").toString("base64");
    const resultImage = `data:image/png;base64,${base64Image}`;

    // Deduct 1 credit and update user
    const updatedBalance = user.creditBalance - 1;
    await userModel.findByIdAndUpdate(user._id, {
      creditBalance: updatedBalance,
    });

    // Respond with success
    res.json({
      success: true,
      message: "Image Generated",
      creditBalance: updatedBalance,
      resultImage
    });
  } catch (error) {
    console.error("Error generating image:", error);
    res.json({ success: false, message: "An error occurred", error: error.message });
  }
};
