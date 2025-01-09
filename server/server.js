import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';


const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
const allowedOrigins = process.env.NODE_ENV === 'production'
    ? ["https://imagify-zs.vercel.app"]
    : ["http://localhost:5173"];

app.use(cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization", "token"]
}));

await connectDB();
app.use('/api/user' , userRouter);
app.use('/api/image' , imageRouter);


app.get('/', (req, res) => {
    res.send('Api Working');
});

app.listen(PORT, () => console.log('Server is Running on Port: ' + PORT));


