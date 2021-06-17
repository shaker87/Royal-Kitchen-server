const multer = require("multer");
const {
  food_create,
  food_get_all,
  food_get_by_id,
  food_update_by_id,
  food_delete_by_id,
} = require("../Service/FoodService");

const foodCreate = async (req, res, next) => {
  try {
    const info = req.body;
    const file = req.file;
    const filePath = `${req.get("host")}/${file.path}`;
    const finalInfo = { ...info, image: filePath };
    console.log(finalInfo);
    const food = await food_create(finalInfo);
    const foodObject = JSON.parse(JSON.stringify(food));
    return res.status(200).json({
      error: false,
      food: foodObject,
      message: "Food Created successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      food: null,
      message: "Food not create! something went wrong",
    });
  }
};

const foodGetAll = async (req, res, next) => {
  try {
    const food = await food_get_all();
    const foodObject = JSON.parse(JSON.stringify(food));
    return res.status(200).json({
      error: false,
      food: foodObject,
      message: "Food get successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      food: null,
      message: "Food not get! something went wrong",
    });
  }
};

const foodGetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const food = await food_get_by_id(id);
    const foodObject = JSON.parse(JSON.stringify(food));
    return res.status(200).json({
      error: false,
      food: foodObject,
      message: "Food get successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      food: null,
      message: "Food not get! something went wrong",
    });
  }
};

const foodUpdateById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const info = req.body;
    const file = req.file;
    const filePath = `${req.get("host")}/${file.path}`;
    const finalInfo = { ...info, image: filePath };
    console.log(finalInfo);
    const food = await food_update_by_id(id, finalInfo);
    const foodObject = JSON.parse(JSON.stringify(food));
    return res.status(200).json({
      error: false,
      food: foodObject,
      message: "Food update successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      food: null,
      message: "Food not update! something went wrong",
    });
  }
};

const foodDeleteById = async (req, res, next) => {
  try {
    const { id } = req.params;
    console.log(id);
    const foodDelete = await food_delete_by_id(id);
    if (!foodDelete) {
      return res.status(400).json({
        error: true,
        food: null,
        message: "Food not delete!",
      });
    }
    const food = await food_get_all();
    const foodObject = JSON.parse(JSON.stringify(food));
    return res.status(200).json({
      error: false,
      food: foodObject,
      message: "Food delete successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: true,
      food: null,
      message: "Food not delete! something went wrong",
    });
  }
};

module.exports = {
  foodCreate,
  foodGetAll,
  foodGetById,
  foodUpdateById,
  foodDeleteById,
};
