import express from "express";
import cors from 'cors';
import connectDB from './config/database';
import "./model/User";
import Login from './routes/auth/login.routes';
import Register from './routes/auth/register.routes';

const app = express();

app.use(express.json({ extends: true }));
app.use(cors());

const PORT = process.env.PORT || 5100;

connectDB();
app.use("/api/auth", Login);
app.use("/api/auth", Register)

app.listen(PORT, () => {
    console.log(`App Started at PORT ${PORT}`);
});