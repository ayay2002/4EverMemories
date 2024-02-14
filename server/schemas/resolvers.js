const Photographer = require("../models/photographer");
const User = require("../models/user");
const { signToken } = require("../utils/auth");
const { AuthenticationError } = require("../controllers/authControllers");

const resolvers = {
  Query: {
    photographers: async (parent, args, context) => {
      if (context.photographer) {
        const photographerData = await Photographer.findOne({
          _id: context.photographer._id,
        }).select("-__v -password");

        return photographerData;
      }

      throw new AuthenticationError("Photographer is not authenticated");
    },
    users: async () => async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw new AuthenticationError("User is not authenticated");
    },
  },
  Mutation: {
    addPhotographer: async (parent, args) => {
      const photographer = await Photographer.create(args);
      const token = signToken(photographer);

      return { token, photographer };
    },
    photographerLogin: async (parent, { email, password }) => {
      const photographer = await Photographer.findOne({ email });

      if (!photographer) {
        throw AuthenticationError;
      }

      const correctPw = await photographer.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(photographer);
      return { token, photographer };
    },
    addAlbum: async (parent, { albumData }, context) => {
      if (context.photographer) {
        const updatedPhotographer = await Photographer.findByIdAndUpdate(
          { _id: context.photographer._id },
          { $push: { addAlbum: albumData } },
          { new: true }
        );

        return updatedPhotographer;
      }

      throw AuthenticationError;
    },
    removeAlbum: async (parent, { albumId }, context) => {
      if (context.photographer) {
        const updatedPhotographer = await Photographer.findOneAndUpdate(
          { _id: context.photographer._id },
          { $pull: { savedAlbums: { albumId } } },
          { new: true }
        );

        return updatedPhotographer;
      }

      throw AuthenticationError;
    },
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    userLogin: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);
      return { token, user };
    },
    addPhotographerProfile: async (parent, { name, image }, context) => {
      if (!context.user) {
        throw new AuthenticationError("User is not authenticated");
      }

      try {
        const newPhotographer = new Photographer({
          name,
          image,
        });

        const savedPhotographer = await newPhotographer.save();

        return savedPhotographer;
      } catch (error) {
        throw error;
      }
    },
    removePhotographer: async (parent, { photographerId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedPhotographers: { photographerId } } },
          { new: true }
        );

        return updatedUser;
      }

      throw AuthenticationError;
    },
  },
};
module.exports = resolvers;
