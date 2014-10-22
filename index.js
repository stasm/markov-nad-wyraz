var Promise = require('promise');
var util = require('util');
var pp = require('polish-proverbs');
var titlegen = require('titlegen');

function getProverbs() {
  return new Promise(function(resolve) {
    pp(function(txt) {
      resolve(txt.split('\n'));
    });
  });
}

function generateRandom(proverbs) {
  titlegen.feed(proverbs);
  return titlegen();
}

getProverbs().then(generateRandom).then(util.puts);
