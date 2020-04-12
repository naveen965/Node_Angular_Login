import { Router } from "express";

const router = Router();

const authValidator = [
    check("email", "Enter a Valid Email Address").isEmail(),
    check("password", "password must be at least 6 characters").isLength({
        min: 6
    })
]

router.post("/login", async (req, res) => {
    const
});

router.post("/register", authValidator, async (req, res) => {
    const error = validationResult(req)
});

export default router;