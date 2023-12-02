module.exports = (container) => {
    const logger = container.resolve('logger')
    const {httpCode, serverHelper} = container.resolve('config')
    const {notificationHelper} = container.resolve('helper')

    const updateNotification = async (req, res) => {
        try {
            const {id} = req.params
            const body = {hasRead: 1}
            const {statusCode, data, msg} = await notificationHelper.updateNotification(id, body)
            if (statusCode !== httpCode.SUCCESS) {
                return res.status(httpCode.BAD_REQUEST).json(msg)
            }
            res.status(statusCode).json(data)
        } catch (e) {
            logger.e(e)
            res.status(httpCode.UNKNOWN_ERROR).json({msg: 'UNKNOWN ERROR'})
        }
    }


    return {
        updateNotification
    }
}
