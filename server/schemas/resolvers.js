const { User, Photographer } = require("../models");
const {
  signToken,
  AuthenticationError,
} = require("../controllers/authControllers");

const resolvers = {
  Query: {
    photographers: async () => {
      return Photographer.find();
    },

    photographer: async (parent, { photographerId }) => {
      return Photographer.findOne({ _id: photographerId });
    },
  },
};
