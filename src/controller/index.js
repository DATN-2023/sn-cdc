module.exports = (container) => {
  const feedController = require('./feedController')(container)
  const commentController = require('./commentController')(container)
  const reactionController = require('./reactionController')(container)
  const userController = require('./userController')(container)
  const groupController = require('./groupController')(container)
  const userGroupController = require('./userGroupController')(container)
  const modController = require('./modController')(container)
  const fcmtokenController = require('./fcmtokenController')(container)
  const notificationController = require('./notificationController')(container)
  const chatController = require('./chatController')(container)
  return {
    feedController,
    commentController,
    reactionController,
    userController,
    groupController,
    userGroupController,
    modController,
    fcmtokenController,
    notificationController,
    chatController
  }
}
