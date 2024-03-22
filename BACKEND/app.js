import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { dbconnect } from './databseconnect/dbconnect.js';
import { errorMiddleware } from './middlewares/error.js';
import reservation from './route/reservation.js';

const app = express(); // Use express() to create an instance of Express application
dotenv.config({ path: "./config/config.env" });

app.use(cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use("/api/v1/reservation", reservation);

dbconnect();

app.use(errorMiddleware);

export default app;
