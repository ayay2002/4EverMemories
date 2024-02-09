const mongoose = require("mongoose");
const { Schema } = mongoose;

const albumsSchema = new Schema(
  {
    title: String,
    author: {
      type: Schema.Types.ObjectId,
      ref: "photographer",
    },
    image: [String],
    viewers: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

albumsSchema.virtual("viewersCount").get(function () {
  return this.viewers.length;
});

const albumsModel = mongoose.model("album", albumsSchema);

module.exports = albumsModel;
