module.exports = (app, container) => {
  require('./feedApi')(app, container)
  require('./commentApi')(app, container)
  require('./reactionApi')(app, container)
  require('./groupApi')(app, container)
  require('./userGroupApi')(app, container)
  require('./modApi')(app, container)
  require('./userApi')(app, container)
  require('./fcmtokenApi')(app, container)
}
