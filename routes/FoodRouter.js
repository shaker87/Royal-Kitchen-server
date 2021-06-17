const express = require("express");
const { upload, fileUpload } = require("../Controllers/FileController");
const router = express.Router();

const {
  foodCreate,
  foodGetAll,
  foodGetById,
  foodUpdateById,
  foodDeleteById,
} = require("../Controllers/FoodController");

// router.post("/file", upload.single("image"), fileUpload);

router.post("/create", upload.single("image"), foodCreate);
router.get("/get-all", foodGetAll);
router.get("/get-ById/:id", foodGetById);
router.patch("/update-ById/:id", upload.single("image"), foodUpdateById);
router.delete("/delete-ById/:id", foodDeleteById);

module.exports = router;
