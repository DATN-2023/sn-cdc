module.exports = (app, container) => {
  const { serverSettings } = container.resolve('config')
  const { groupController } = container.resolve('controller')
  const { basePath } = serverSettings
  app.put(`${basePath}/groups/:id`, groupController.updateGroup)
  app.delete(`${basePath}/groups/:id`, groupController.deleteGroup)
  app.post(`${basePath}/groups`, groupController.createGroup)
}
