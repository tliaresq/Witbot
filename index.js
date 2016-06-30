
var Botkit = require('botkit')
var Witbot = require('witbot')

var slackToken = "xoxb-55827170642-gb7DnKpToNw0wVf1htRWtYvZ"
var witToken = "QZPQQCGR4OZ5WY3AEV2SNIXOCLJ6DSZJ"

var controller = Botkit.slackbot({
  debug: false
})


controller.spawn({
  token: slackToken
}).startRTM(function (err, bot, payload) {
  if (err) {
    throw new Error('Error connecting to slack: ', err)
  }
  console.log('Connected to slack')
})

var witbot = Witbot(witToken)

controller.hears('.*', 'direct_message,direct_mention', function (bot, message) {
  witbot.process(message.text, bot, message)
  console.log("check 1")
})

witbot.hears('hello', 0.5, function (bot, message, outcome) {
  bot.reply(message, 'Hello to you as well!')
  console.log("check 2")
})
