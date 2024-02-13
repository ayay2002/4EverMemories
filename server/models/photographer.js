const { Schema, model } = require("mongoose");

const photographerSchema = new Schema({
  // photographerId: {
  //   type: Number,
  //   unique: true,
  // },
  image: {
    type: String,
  },
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const Photographer = model("Photographer", photographerSchema);

module.exports = Photographer;
