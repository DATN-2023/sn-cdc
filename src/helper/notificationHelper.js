const axios = require('axios')
module.exports = (container) => {
  const { urlConfig: { notificationUrl }, httpCode } = container.resolve('config')
  const logger = container.resolve('logger')
  const accessToken = process.env.INTERNAL_TOKEN || '123'
  const axios = require('axios')

  const updateNotification = async (id, body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${notificationUrl}/cdc/notifications/${id}`,
        json: true,
        data: body,
        method: 'PUT'
      }
      const { data } = await axios(options)
      return { statusCode: httpCode.SUCCESS, data }
    } catch (e) {
      logger.e(e)
      return { statusCode: httpCode.BAD_REQUEST, msg: '' }
    }
  }
  return {
    updateNotification
  }
}
