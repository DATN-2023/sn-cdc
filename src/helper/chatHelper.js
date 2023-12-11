const axios = require('axios')
module.exports = (container) => {
    const { urlConfig: { chatUrl }, httpCode } = container.resolve('config')
    const logger = container.resolve('logger')
    const accessToken = process.env.INTERNAL_TOKEN || '123'
    const axios = require('axios')

    const createChannel = async (body) => {
        try {
            const options = {
                headers: { 'x-access-token': accessToken },
                url: `${chatUrl}/cdc/channels`,
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
    const updateChannel = async (id, body) => {
        try {
            const options = {
                headers: { 'x-access-token': accessToken },
                url: `${chatUrl}/cdc/channels/${id}`,
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
    const deleteChannel = async (id) => {
        try {
            const options = {
                headers: { 'x-access-token': accessToken },
                url: `${chatUrl}/cdc/channels/${id}`,
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
    return {
        createChannel,
        updateChannel,
        deleteChannel
    }
}
