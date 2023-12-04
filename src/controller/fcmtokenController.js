module.exports = (container) => {
  const logger = container.resolve('logger')
  const { httpCode, serverHelper } = container.resolve('config')
  const { fcmtokenHelper } = container.resolve('helper')

  const createFcmtoken = async (req, res) => {
    try {
      const body = req.body
      const { statusCode, data, msg } = await fcmtokenHelper.createFcmtoken(body)
      if (statusCode !== httpCode.SUCCESS) {
        return res.status(httpCode.BAD_REQUEST).json(msg)
      }
      res.status(statusCode).json(data)
    } catch (e) {
      logger.e(e)
      res.status(httpCode.UNKNOWN_ERROR).json({ msg: 'UNKNOWN ERROR' })
    }
  }

  const updateFcmtoken = async (req, res) => {
    try {
      const { id } = req.params
      const body = req.body
      const { statusCode, data, msg } = await fcmtokenHelper.updateFcmtoken(id, body)
      if (statusCode !== httpCode.SUCCESS) {
        return res.status(httpCode.BAD_REQUEST).json(msg)
      }
      res.status(statusCode).json(data)
    } catch (e) {
      logger.e(e)
      res.status(httpCode.UNKNOWN_ERROR).json({ msg: 'UNKNOWN ERROR' })
    }
  }

  const deleteFcmtoken = async (req, res) => {
    try {
      const body = req.body
      const { statusCode, data, msg } = await fcmtokenHelper.deleteFcmtoken(body)
      if (statusCode !== httpCode.SUCCESS) {
        return res.status(httpCode.BAD_REQUEST).json(msg)
      }
      res.status(statusCode).json(data)
    } catch (e) {
      logger.e(e)
      res.status(httpCode.UNKNOWN_ERROR).json({ msg: 'UNKNOWN ERROR' })
    }
  }

  return {
    createFcmtoken,
    updateFcmtoken,
    deleteFcmtoken
  }
}
