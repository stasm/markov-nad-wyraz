#!/usr/bin/env node
var util = require('util');
var program = require('commander');

var getGenerator = require('../src/index.js').getGenerator;

program
  .version('0.0.1')
  .option(
    '-c, --count <n>', 'Number of proverbs to generate (default: 1)', toInt, 1)
  .parse(process.argv);

function toInt(str) {
  return parseInt(str, 10);
}

getGenerator().then(function(gen) {
  for (var i = 0; i < program.count; i++) {
    util.puts(gen());
  }
});
