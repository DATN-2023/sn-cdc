module.exports = (container) => {
  const logger = container.resolve('logger')
  const { httpCode, serverHelper } = container.resolve('config')
  const { testHelper } = container.resolve('helper')

  const create = async (req, res) => {
    try {
      const body = req.body
      const { statusCode, data, msg } = await testHelper.create(body)
      if (statusCode !== httpCode.SUCCESS) {
        return res.status(httpCode.BAD_REQUEST).send(msg)
      }
      res.status(statusCode).send(data)
    } catch (e) {
      logger.e(e)
      res.status(httpCode.UNKNOWN_ERROR).json({ msg: 'UNKNOWN ERROR' })
    }
  }

  return {
    create
  }
}
