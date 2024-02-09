const { Photographer } = require("../models/photographer");
const { User } = require("../models/user");
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
    users: async () => {
      return User.find();
    },
  },
};

module.exports = resolvers;

