const { User } = require('../models');
const { signToken } = require('../utils/auth');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (!context.user)
        throw new AuthenticationError('You need to be logged in!');
      return User.findOne({ _id: context.user._id });
    },
  },
  Mutation: {
    // create a new user
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);

      return { token, user };
    },
    // logs user in
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) throw new AuthenticationError('Incorrect username/password');

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw)
        throw new AuthenticationError('Incorrect username/password');

      const token = signToken(user);
      return { token, user };
    },
    // saves book to user
    saveBook: async (parent, { book }, context) => {
      if (!context.user)
        throw new AuthenticationError('You need to be logged in!');
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $addToSet: { savedBooks: book } },
        { new: true, runValidators: true }
      );

      return user;
    },
    // deletes book from user
    removeBook: async (parent, { bookId }, context) => {
      if (!context.user)
        throw new AuthenticationError('You need to be logged in!');
      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { $pull: { savedBooks: { bookId } } },
        { new: true }
      );

      return user;
    },
  },
};

module.exports = resolvers;
