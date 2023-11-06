module.exports = (container) => {
  const feedController = require('./feedController')(container)
  const commentController = require('./commentController')(container)
  const reactionController = require('./reactionController')(container)
  const userController = require('./userController')(container)
  return { feedController, commentController, reactionController, userController }
}
