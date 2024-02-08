const mongoose = require("mongoose");
const { Schema } = mongoose;

const photographerSchema = require("./photographer");

const userSchema = new Schema({
  userId: {
    type: Number,
    unique: true,
  },
  name: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },

  savedPhotographers: [photographerSchema],
});

const UserModel = mongoose.model("User", userSchema);

module.exports = UserModel;
