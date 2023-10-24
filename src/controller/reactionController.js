module.exports = (container) => {
  const logger = container.resolve('logger')
  const { httpCode, serverHelper } = container.resolve('config')
  const { reactionHelper } = container.resolve('helper')

  const createReaction = async (req, res) => {
    try {
      const body = req.body
      const { statusCode, data, msg } = await reactionHelper.createReaction(body)
      if (statusCode !== httpCode.SUCCESS) {
        return res.status(httpCode.BAD_REQUEST).json(msg)
      }
      res.status(statusCode).json(data)
    } catch (e) {
      logger.e(e)
      res.status(httpCode.UNKNOWN_ERROR).json({ msg: 'UNKNOWN ERROR' })
    }
  }

  const updateReaction = async (req, res) => {
    try {
      const { id } = req.params
      const body = req.body
      const { statusCode, data, msg } = await reactionHelper.updateReaction(id, body)
      if (statusCode !== httpCode.SUCCESS) {
        return res.status(httpCode.BAD_REQUEST).json(msg)
      }
      res.status(statusCode).json(data)
    } catch (e) {
      logger.e(e)
      res.status(httpCode.UNKNOWN_ERROR).json({ msg: 'UNKNOWN ERROR' })
    }
  }

  const deleteReaction = async (req, res) => {
    try {
      const { id } = req.params
      const { statusCode, data, msg } = await reactionHelper.deleteReaction(id)
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
    createReaction,
    updateReaction,
    deleteReaction
  }
}
