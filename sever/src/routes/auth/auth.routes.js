import { Router } from "express";
import { check } from "express-validator";
import authBodyValidator from '../../middlewares/auth/authBodyValidator';

const router = Router();

const authValidator = [
    check("email", "Enter a Valid Email Address").isEmail(),
    check("password", "password must be at least 6 characters").isLength({
        min: 6
    })
];

router.post("/login", authValidator, authBodyValidator, async () => {});

router.post("/register", authValidator, authBodyValidator, async () => {});

export default router;