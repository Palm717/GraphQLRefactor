const { User } = require("../../models");

const userResolvers = {
  Query: {
    users: async () => {
      return User.find({}).populate("savedBooks");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("savedBooks");
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      return User.create({ username, email, password });
    },
  },
};

module.exports = userResolvers;
