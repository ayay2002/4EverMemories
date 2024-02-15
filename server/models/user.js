const { Schema, model } = require("mongoose");
const bcrypt = require('bcrypt');

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

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.virtual("photographerCount").get(function () {
  return this.savedPhotographers.length;
});

const User = model("User", userSchema);

module.exports = User;
