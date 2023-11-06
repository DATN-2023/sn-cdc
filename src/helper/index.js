module.exports = container => {
  const feedHelper = require('./feedHelper')(container)
  const commentHelper = require('./commentHelper')(container)
  const reactionHelper = require('./reactionHelper')(container)
  const userHelper = require('./userHelper')(container)
  return { feedHelper, commentHelper, reactionHelper, userHelper }
}
