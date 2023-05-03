import express from "express";
import { loginController, registerController } from "../controllers/authController.js"

// router object
const router = express.Router();


// routing
/**
 * POST
 * Register
 */
router.post('/register', registerController)

/**
 * POST
 * Login
*/
router.post('/login', loginController)


export default router;