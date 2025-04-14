// Package imports
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

// Database import
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


const app = express();
const PORT = process.env.PORT || 5000;
dotenv.config();

app.use(express.json()); // extract the fields from the body
app.use(cookieParser());
app.use("/api/auth", authRoutes) // Middleware
app.use("/api/messages", messageRoutes) // Middleware
app.use("/api/users", userRoutes) // Middleware

app.get('/', (req, res) => {
    res.send('Server is running!'); 
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
