const axios = require('axios')
module.exports = (container) => {
  const { urlConfig: { groupUrl }, httpCode } = container.resolve('config')
  const logger = container.resolve('logger')
  const accessToken = process.env.INTERNAL_TOKEN || '123'
  const axios = require('axios')

  const createUserGroup = async (body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${groupUrl}/cdc/userGroups`,
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
  const updateUserGroup = async (id, body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${groupUrl}/cdc/userGroups/${id}`,
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
  const deleteUserGroup = async (id) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${groupUrl}/cdc/userGroups/${id}`,
        json: true,
        method: 'DELETE'
      }
      const { data } = await axios(options)
      return { statusCode: httpCode.SUCCESS, data }
    } catch (e) {
      logger.e(e)
      return { statusCode: httpCode.BAD_REQUEST, msg: '' }
    }
  }
  const deleteUserGroupByUserAndGroup = async (body) => {
    try {
      const options = {
        headers: { 'x-access-token': accessToken },
        url: `${groupUrl}/cdc/userGroups`,
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
    createUserGroup,
    updateUserGroup,
    deleteUserGroup,
    deleteUserGroupByUserAndGroup
  }
}
