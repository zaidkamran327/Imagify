import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';


const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use('/api/user' , userRouter);
app.use('/api/image' , imageRouter);

app.get('/', (req, res) => {
    res.send('Api Working');
});

if (process.env.NODE_ENV !== 'production') {
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => console.log('Server is Running on Port: ' + PORT));
}

export default app;


