module.exports = (app, container) => {
  const { serverSettings } = container.resolve('config')
  const { userController } = container.resolve('controller')
  const { basePath } = serverSettings
  app.put(`${basePath}/users/:id`, userController.updateUser)
  app.delete(`${basePath}/users/:id`, userController.deleteUser)
  app.post(`${basePath}/users`, userController.createUser)
  app.put(`${basePath}/friends/:id`, userController.updateFriend)
  app.delete(`${basePath}/friends/:id`, userController.deleteFriend)
  app.post(`${basePath}/friends`, userController.createFriend)
}
