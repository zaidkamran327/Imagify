import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';


const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "https://imagify-zs.vercel.app"], // Allow both local and deployed frontends
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "token"] // Add 'token' to allowed headers
  }));

await connectDB();
app.use('/api/user' , userRouter);
app.use('/api/image' , imageRouter);


app.get('/', (req, res) => {
    res.send('Api Working');
});

app.listen(PORT, () => console.log('Server is Running on Port: ' + PORT));


