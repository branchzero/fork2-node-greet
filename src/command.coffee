module.exports = ->
  greet = require("../lib/")
  parseArgs = require("minimist")
  argv = parseArgs(process.argv.slice(2))
  mygreet = greet(process.argv[2], argv.drunk)
  console.log mygreet
  return
