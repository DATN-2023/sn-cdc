const axios = require('axios')
module.exports = (container) => {
  const { urlConfig: { feedUrl }, httpCode } = container.resolve('config')
  const logger = container.resolve('logger')
  const accessToken = process.env.INTERNAL_TOKEN || '123'
  const axios = require('axios')

  const createReaction = async (body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${feedUrl}/cdc/reactions`,
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
  const updateReaction = async (id, body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${feedUrl}/cdc/reactions/${id}`,
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
  const deleteReaction = async (id, body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${feedUrl}/cdc/reactions/${id}`,
        json: true,
        method: 'DELETE',
        data: body
      }
      const { data } = await axios(options)
      return { statusCode: httpCode.SUCCESS, data }
    } catch (e) {
      logger.e(e)
      return { statusCode: httpCode.BAD_REQUEST, msg: '' }
    }
  }
  return {
    createReaction,
    updateReaction,
    deleteReaction
  }
}
