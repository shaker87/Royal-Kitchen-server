const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const foodSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    details: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      trim: true,
    },
    rating: {
      type: Number,
      trim: true,
    },
    image: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("foods", foodSchema);
