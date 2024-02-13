const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    // userId: {
    //   type: Number,
    //   unique: true,
    // },
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
    savedPhotographers: [{ type: Schema.Types.ObjectId, ref: "Photographer" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual("photographerCount").get(function () {
  return this.savedPhotographers.length;
});

const User = model("User", userSchema);

module.exports = User;
