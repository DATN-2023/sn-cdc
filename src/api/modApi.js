module.exports = (app, container) => {
  const { serverSettings } = container.resolve('config')
  const { modController } = container.resolve('controller')
  const { basePath } = serverSettings
  app.put(`${basePath}/mods/:id`, modController.updateMod)
  app.delete(`${basePath}/mods/:id`, modController.deleteMod)
  app.post(`${basePath}/mods`, modController.createMod)
}
