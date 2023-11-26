module.exports = (app, container) => {
  const { serverSettings } = container.resolve('config')
  const { userGroupController } = container.resolve('controller')
  const { basePath } = serverSettings
  app.put(`${basePath}/userGroups/:id`, userGroupController.updateUserGroup)
  app.delete(`${basePath}/userGroups`, userGroupController.deleteUserGroupByUserAndGroup)
  app.delete(`${basePath}/userGroups/:id`, userGroupController.deleteUserGroup)
  app.post(`${basePath}/userGroups`, userGroupController.createUserGroup)
}
