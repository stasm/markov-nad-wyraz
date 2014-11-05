#!/usr/bin/env node
var program = require('commander');

program
  .version('0.0.1')
  .option(
    '-c, --count <n>',
    'Number of proverbs to generate (default: 1)', toInt, 1)
  .option(
    '-m, --maxlen <n>',
    'Maximum length of a proverb (default: 7)', toInt, 7)
  .option(
    '-n, --ngram <n>',
    'Split input into n-grams (default: 1)', toInt, 1)
  .option(
    '-i, --input <filename>',
    'Optional path to a file with proverbs to be used')
  .parse(process.argv);

function toInt(str) {
  return parseInt(str, 10);
}

require('wisp/engine/node');
require('../src/macros');
require('../src/index').main(program);
