import express from "express";

const app = express();

const PORT = process.env.PORT / 5200;

app.listen(PORT, () => {
    console.log(`App Started at PORT ${PORT}`);
});