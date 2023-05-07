import express from "express";
import { forgotPasswordController, loginController, registerController, testController } from "../controllers/authController.js"
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
 * POST
 * forgot password
*/
router.post('/forgot-password', forgotPasswordController)

/**
 * GET
 * protected user route
*/
router.get('/user-auth', requireSignIn, (req, res) => { res.status(200).send({ ok: true }) })

/**
 * GET
 * protected admin route
*/
router.get('/admin-auth', requireSignIn, isAdmin, (req, res) => { res.status(200).send({ ok: true }) })


// test route
router.get('/test', requireSignIn, isAdmin, testController)


export default router;