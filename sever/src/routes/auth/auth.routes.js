import { Router } from "express";
import { check } from "express-validator";


const router = Router();

const authValidator = [
    check("email", "Enter a Valid Email Address").isEmail(),
    check("password", "password must be at least 6 characters").isLength({
        min: 6
    })
]

router.post("/login", authValidator, authBodyValidator, async(req, res) => {});

router.post("/register", authValidator, authBodyValidator, async (req, res) => {});

export default router;