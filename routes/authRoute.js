import express from "express";
import { loginController, registerController, testController } from "../controllers/authController.js"
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";

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

/**
 * GET
 * protected rout
*/
router.get('/user-auth', requireSignIn, (req, res) => { res.status(200).send({ ok: true }) })


// test route
router.get('/test', requireSignIn, isAdmin, testController)


export default router;