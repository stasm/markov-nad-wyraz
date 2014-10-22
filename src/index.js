var Promise = require('promise');

var pp = require('polish-proverbs');
var titlegen = require('titlegen');

function getProverbs() {
  return new Promise(function(resolve) {
    pp(function(txt) {
      resolve(txt.split('\n'));
    });
  });
}

function resetMarkovChain(proverbs) {
  titlegen.feed(proverbs);
  return titlegen;
}

exports.getGenerator = function() {
  return getProverbs().then(resetMarkovChain);
};

