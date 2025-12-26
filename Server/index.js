import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import  route from './routes/userRoutes.js';
import cors from 'cors';


const app = express();

app.use(cors({
    origin: "http://localhost:5173",   // allow Vite frontend
    methods: "GET,POST,PUT,DELETE,OPTIONS",
    credentials: true
}));

app.use(bodyParser.json());
dotenv.config();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI ;

mongoose.connect(MONGO_URI).then(() => {
    console.log('Database connected successfully');
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}   ).catch((error) => {
    console.log(error);
});

app.use('/api/user', route);

app.use(express.json());
