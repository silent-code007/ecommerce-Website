import express, { Router } from "express";

import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryCOntroller,
} from "./../controllers/categoryController.js";

const router = express.Router();

// routes
//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//uodate category

router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// get all category

router.get("/get-category", categoryController);

//single category
router.get("/single-category/:slug", singleCategoryController);
export default router;

//delete category
router.delete(
  "/delete-category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);