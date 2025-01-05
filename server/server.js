import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';


const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
const corsOptions = {
    origin: 'https://imagify-zs.vercel.app', // Replace with your frontend domain
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true, // Enable if using cookies or authorization headers
};

// Apply CORS middleware
app.use(cors(corsOptions));

await connectDB();
app.use('/api/user' , userRouter);
app.use('/api/image' , imageRouter);


app.get('/', (req, res) => {
    res.send('Api Working');
});

app.listen(PORT, () => console.log('Server is Running on Port: ' + PORT));


