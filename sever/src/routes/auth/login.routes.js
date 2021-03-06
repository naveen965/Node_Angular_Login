import { Router } from "express";
import { model } from "mongoose";
import { check } from "express-validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import authBodyValidator from '../../middlewares/auth/authBodyValidator';

const User = model("users");

const router = Router();

const authValidator = [
    check("email", "Enter a Valid Email Address").isEmail(),
    check("password", "password must be at least 6 characters").isLength({
        min: 8
    })
];

router.post("/login", authValidator, authBodyValidator, async (req, res) => {
    try {
        let { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: [{ msg: "No User Found on That Email" }] });
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password);
        if (!isPasswordMatched) {
            return res.status(400).json({ error: [{ msg: "Invalid Password" }] });
        }

        const payload = {
            email: user.email,
            image: user.image,
            _id: user._id
        };

        jwt.sign(payload, "jwtsecrect", { expiresIn: 60 * 60 * 24 }, (err, token) => {
            if (err) {
                return res.status(400).json({ errors: [{ msg: "Something went wrong please try again" }] });
            }
            return res.status(200).json(token);
        });

    } catch (err) {
        console.error(err.message);
        return res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
    }
});

export default router;