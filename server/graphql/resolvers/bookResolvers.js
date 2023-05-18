const { User } = require('../../models');

const bookResolvers = {
  Mutation: {
    saveBook: async (parent, { userId, bookId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $addToSet: { savedBooks: bookId } },
        { new: true, runValidators: true }
      );
    },
    deleteBook: async (parent, { userId, bookId }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: bookId } },
        { new: true }
      );
    },
  },
};

module.exports = bookResolvers;
