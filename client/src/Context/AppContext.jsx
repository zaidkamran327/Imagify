
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
    const [user, setUser] = useState(null)
    const [showLogin, setShowLogin] = useState(false)
    const [token, setToken] = useState(localStorage.getItem('token'))
    const [credit, setCredit] = useState(false)
    const navigate = useNavigate()

    const backendurl = import.meta.env.VITE_BACKEND_URL;


    const loadCreditsData = async () => {
        try {
            console.log("Fetching credits data...");
            const { data } = await axios.get(`${backendurl}/api/user/credits`, {
                headers: { token }
            });
    
            if (data.success) {
                console.log("Credits data loaded successfully:", data);
                setCredit(data.credits);
                setUser(data.user);
            } else {
                toast.error("Failed to load credits data.");
            }
        } catch (error) {
            if (error.response) {
                console.error("Server Error:", error.response.data);
                toast.error(error.response.data.message || "Server error occurred.");
            } else if (error.request) {
                console.error("No response received from the server:", error.request);
                toast.error("Network Error: Unable to connect to the server.");
            } else {
                console.error("Error:", error.message);
                toast.error(`Error: ${error.message}`);
            }
        }
    };
    


    const generateImage = async (prompt) => {
        try {
            const { data } = await axios.post(backendurl + '/api/image/generate-image', { prompt }, { headers: { token } });

            if (data.success) {
                loadCreditsData();
                return data.resultImage;
            }

            if (data.creditBalance === 0) {
                navigate('/buy');
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    };




    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null)

    }

    useEffect(() => {
        if (token) {
            const fetchCredits = async () => {
                try {
                    await loadCreditsData();
                } catch (error) {
                    console.error("Error loading credits:", error);
                }
            };
            fetchCredits();
        }
    }, [token]);
    



    const value = {
        user,
        setUser,
        showLogin,
        setShowLogin,
        backendurl,
        token,
        setToken,
        credit,
        setCredit,
        loadCreditsData,
        logout,
        generateImage
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}
export default AppContextProvider