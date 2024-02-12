const { User, Photographer } = require("../models");
const {
  signToken,
  AuthenticationError,
} = require("../controllers/authControllers");

const resolvers = {
  Query: {
    photographers: async (parent, args, context) => {
      if (context.photographer) {
        const photographerData = await Photographer.findOne({
          _id: context.photographer._id,
        }).select("-__v -password");

        return photographerData;
      }

      throw AuthenticationError;
    },
    users: async () => async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );

        return userData;
      }

      throw AuthenticationError;
    },
  },
  PhotographerMutation: {
    addPhotographer: async (parent, args) => {
      const photographer = await Photographer.create(args);
      const token = signToken(photographer);

      return { token, photographer };
    },
    login: async (parent, { email, password }) => {
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
  },
};
