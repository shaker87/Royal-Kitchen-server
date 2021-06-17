const FoodModel = require("../Model/FoodModel");

const food_create = (food) => {
  return FoodModel.create(food);
};

const food_get_all = () => {
  return FoodModel.find({});
};

const food_get_by_id = (id) => {
  return FoodModel.findOne({ _id: id });
};

const food_update_by_id = (id, food) => {
  return FoodModel.findByIdAndUpdate(id, food, { new: true });
};

const food_delete_by_id = (id) => {
  return FoodModel.deleteOne({ _id: id });
};

module.exports = {
  food_create,
  food_get_all,
  food_get_by_id,
  food_update_by_id,
  food_delete_by_id,
};
