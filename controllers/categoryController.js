import slugify from 'slugify';

import categoryModel from '../models/categoryModel.js';

// Create Category Controller

export const createCategoryController = async (req, res) => {
	try {
		const { name } = req.body;

		if (!name) {
			return res.status(401).send({ message: 'Name is required' });
		}

		const existingCategory = await categoryModel.findOne({ name });

		if (existingCategory) {
			return res.status(200).send({
				success: true,
				message: 'Category Already Existist'
			});
		}

		const category = await new categoryModel({
			name,
			slug: slugify(name)
		}).save();

		res.status(201).send({
			success: true,
			message: 'New Category Created',
			category
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: 'Error in Category',
			error
		});
	}
};

// Update Category Controller

export const updateCategoryController = async (req, res) => {
	try {
		const { name } = req.body;
		const { id } = req.params;

		const category = await categoryModel.findByIdAndUpdate(
			id,
			{
				name,
				slug: slugify(name)
			},
			{ new: true }
		);

		res.status(200).send({
			success: true,
			message: 'Category Updated Successfully',
			category
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: 'Error while Updating Category'
		});
	}
};

// Get all Catagoey Controller

export const categoryController = async (req, res) => {
	try {
		const category = await categoryModel.find({});

		res.status(200).send({
			success: true,
			message: 'All Catagories List',
			category
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: 'Error while Getting All Category',
			error
		});
	}
};

// Get single Catagoey Controller

export const singleCategoryController = async (req, res) => {
	try {
		const category = await categoryModel.findOne({ slug: req.params.slug });

		res.status(200).send({
			success: true,
			message: 'Get Single Catagories Successfully',
			category
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: 'Error while Getting Single Category',
			error
		});
	}
};

// Delete Catagoey Controller

export const deleteCategoryController = async (req, res) => {
	try {
		const { id } = req.params;

		const category = await categoryModel.findByIdAndDelete(id);

		res.status(200).send({
			success: true,
			message: 'Get Single Catagories Successfully'
			// category
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({
			success: false,
			message: 'Error while Deleting Category',
			error
		});
	}
};
