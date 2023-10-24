module.exports = (app, container) => {
  const { serverSettings } = container.resolve('config')
  const { commentController } = container.resolve('controller')
  const { basePath } = serverSettings
  app.put(`${basePath}/comments/:id`, commentController.updateComment)
  app.delete(`${basePath}/comments/:id`, commentController.deleteComment)
  app.post(`${basePath}/comments`, commentController.createComment)
}
