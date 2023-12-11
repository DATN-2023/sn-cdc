module.exports = container => {
    const feedHelper = require('./feedHelper')(container)
    const commentHelper = require('./commentHelper')(container)
    const reactionHelper = require('./reactionHelper')(container)
    const userHelper = require('./userHelper')(container)
    const groupHelper = require('./groupHelper')(container)
    const userGroupHelper = require('./userGroupHelper')(container)
    const modHelper = require('./modHelper')(container)
    const fcmtokenHelper = require('./fcmtokenHelper')(container)
    const notificationHelper = require('./notificationHelper')(container)
    const chatHelper = require('./chatHelper')(container)
    return {
        feedHelper,
        commentHelper,
        reactionHelper,
        userHelper,
        groupHelper,
        userGroupHelper,
        modHelper,
        fcmtokenHelper,
        notificationHelper,
        chatHelper
    }
}
