import express from 'express'
import User from '../models/User.js'
import {
    SignIn,
    SignUp,
} from '../controllers/auth.controller.js'

import authMiddleware from '../middlewares/auth.middleware.js'

const router = express.Router();

router.post("/signin", SignIn)
router.post("/signup", SignUp)

export default router