#!/usr/bin/env node
var greet = require("../");
var parseArgs = require('minimist');
var argv = parseArgs(process.argv.slice(2));
var mygreet = greet(process.argv[2], argv.drunk);
console.log(mygreet);
