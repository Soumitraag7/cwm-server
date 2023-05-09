import express from 'express';
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';
import {
	categoryController,
	createCategoryController,
	deleteCategoryController,
	singleCategoryController,
	updateCategoryController
} from '../controllers/categoryController.js';

const router = express.Router();

/**
 * POST
 * Create Category
 */
router.post(
	'/create-category',
	requireSignIn,
	isAdmin,
	createCategoryController
);

/**
 * PUT
 * Update Create Category
 */
router.put(
	'/update-category/:id',
	requireSignIn,
	isAdmin,
	updateCategoryController
);

/**
 * GET
 * Get all Category
 */
router.get('/get-category', categoryController);

/**
 * GET
 * Get single Category
 */
router.get('/single-category/:slug', singleCategoryController);

/**
 * DELETE
 *  Delete Category
 */
router.delete(
	'/delete-category/:id',
	requireSignIn,
	isAdmin,
	deleteCategoryController
);

export default router;
