import express from "express";
import connectDB from './config/database';
import Auth from './routes/auth/auth.routes';

const app = express();

const PORT = process.env.PORT || 5200;

connectDB();
app.use("/api/auth", Auth);

app.listen(PORT, () => {
    console.log(`App Started at PORT ${PORT}`);
});