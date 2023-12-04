const axios = require('axios')
module.exports = (container) => {
  const { urlConfig: { notificationUrl }, httpCode } = container.resolve('config')
  const logger = container.resolve('logger')
  const accessToken = process.env.INTERNAL_TOKEN || '123'
  const axios = require('axios')

  const createFcmtoken = async (body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${notificationUrl}/cdc/fcmtokens`,
        json: true,
        data: body,
        method: 'POST'
      }
      const { data } = await axios(options)
      return { statusCode: httpCode.SUCCESS, data }
    } catch (e) {
      logger.e(e)
      return { statusCode: httpCode.BAD_REQUEST, msg: '' }
    }
  }
  const updateFcmtoken = async (id, body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${notificationUrl}/cdc/fcmtokens/${id}`,
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
  const deleteFcmtoken = async (body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${notificationUrl}/cdc/fcmtokens`,
        json: true,
        data: body,
        method: 'DELETE'
      }
      const { data } = await axios(options)
      return { statusCode: httpCode.SUCCESS, data }
    } catch (e) {
      logger.e(e)
      return { statusCode: httpCode.BAD_REQUEST, msg: '' }
    }
  }
  return {
    createFcmtoken,
    updateFcmtoken,
    deleteFcmtoken
  }
}
