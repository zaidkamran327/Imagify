import express from 'express';
import cors from 'cors';
import 'dotenv/config';

import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';
import imageRouter from './routes/imageRoute.js';


const PORT = process.env.PORT || 4000;
const app = express();

const corsconfig = {
    origin: "*",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
};

app.options('*', cors(corsconfig));
app.use(express.json());
app.use(cors(corsconfig));

   

const startServer = async () => {
    await connectDB();
    
    app.use('/api/user' , userRouter);
    app.use('/api/image' , imageRouter);

    app.get('/', (req, res) => {
        res.send('Api Working');
    });

    app.listen(PORT, () => console.log('Server is Running on Port: ' + PORT));
};

startServer().catch(err => {
    console.error('Failed to start server:', err);
    process.exit(1);
});

export default app;


