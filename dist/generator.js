void 0;
void 0;
void 0;
{
    var _ns_ = {
        id: 'mnw.generator',
        doc: 'Create a Markov generator'
    };
    var wisp_sequence = require('wisp/sequence');
    var map = wisp_sequence.map;
    var reduce = wisp_sequence.reduce;
    var wisp_string = require('wisp/string');
    var join = wisp_string.join;
    var split = wisp_string.split;
    var splitLines = wisp_string.splitLines;
    var promise = require('promise');
    var Promise = promise;
    var polishProverbs = require('polish-proverbs');
    var pp = polishProverbs;
    var markoff = require('markoff');
    var Markov = markoff;
    var mnw_errors = require('./errors');
    var logError = mnw_errors.logError;
    var mnw_ngram = require('./ngram');
    var ngram = mnw_ngram.ngram;
}
var getProverbs = exports.getProverbs = function getProverbs() {
    return new Promise(function (resolv, reject) {
        return pp(function (txt) {
            return resolv(splitLines(txt));
        });
    });
};
var tokenize = function tokenize(sequence) {
    return map(join.bind(void 0, '|'), ngram(1, sequence));
};
var feed = function feed(markov, line) {
    markov.addTokens(tokenize(split(line, /,?\s+/)));
    return markov;
};
var teach = exports.teach = function teach(markov, proverbs) {
    return reduce(feed, markov, proverbs);
};
var getGenerator = exports.getGenerator = function getGenerator() {
    return getProverbs().then(teach.bind(void 0, new Markov())).then(void 0, logError);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsIm1hcCIsInJlZHVjZSIsImpvaW4iLCJzcGxpdCIsInNwbGl0TGluZXMiLCJsb2dFcnJvciIsIm5ncmFtIiwiZ2V0UHJvdmVyYnMiLCJleHBvcnRzIiwicHAiLCJ0eHQiLCJyZXNvbHYiLCJ0b2tlbml6ZSIsInNlcXVlbmNlIiwiZmVlZCIsIm1hcmtvdiIsImxpbmUiLCJhZGRUb2tlbnMiLCJ0ZWFjaCIsInByb3ZlcmJzIiwiZ2V0R2VuZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7O0lBdUJBLElBQUNBLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSxlQUFKO0FBQUEsUUFBQUMsRyxFQUNFLDJCQURGO0FBQUEsTTs7UUFHMkJDLEdBQUEsRyxjQUFBQSxHO1FBQUlDLE1BQUEsRyxjQUFBQSxNOztRQUNOQyxJQUFBLEcsWUFBQUEsSTtRQUFLQyxLQUFBLEcsWUFBQUEsSztRQUFNQyxVQUFBLEcsWUFBQUEsVTs7Ozs7Ozs7UUFJWkMsUUFBQSxHLFdBQUFBLFE7O1FBQ0RDLEtBQUEsRyxVQUFBQSxLOztBQUV2QixJQUFXQyxXQUFBLEdBQUFDLE9BQUEsQ0FBQUQsV0FBQSxHQUFYLFNBQVdBLFdBQVgsRztpREFDRTtBQUFBLGVBQUNFLEVBQUQsQ0FBSSxVQUFLQyxHQUFMLEVBQ0Y7QUFBQSxtQkFBQ0MsTUFBRCxDQUFTUCxVQUFELENBQWFNLEdBQWIsQ0FBUjtBQUFBLFNBREY7QUFBQSxLO0NBREYsQztBQUlBLElBQU9FLFFBQUEsR0FBUCxTQUFPQSxRQUFQLENBQWlCQyxRQUFqQixFQUNFO0FBQUEsV0FBQ2IsR0FBRCxDQUFjRSxJLEtBQVQsQyxNQUFBLEVBQWMsR0FBZCxDQUFMLEVBQXlCSSxLQUFELENBQU8sQ0FBUCxFQUFTTyxRQUFULENBQXhCO0FBQUEsQ0FERixDO0FBR0EsSUFBT0MsSUFBQSxHQUFQLFNBQU9BLElBQVAsQ0FBYUMsTUFBYixFQUFvQkMsSUFBcEIsRUFDRTtBQUFBLElBQVlELE1BQVgsQ0FBQ0UsU0FBRixDQUFvQkwsUUFBRCxDQUFXVCxLQUFELENBQU9hLElBQVAsRUFBWSxPQUFaLENBQVYsQ0FBbkI7QUFBQSxJQUNBLE9BQUFELE1BQUEsQ0FEQTtBQUFBLENBREYsQztBQUlBLElBQU1HLEtBQUEsR0FBQVYsT0FBQSxDQUFBVSxLQUFBLEdBQU4sU0FBTUEsS0FBTixDQUFhSCxNQUFiLEVBQW9CSSxRQUFwQixFQUNFO0FBQUEsV0FBQ2xCLE1BQUQsQ0FBUWEsSUFBUixFQUFhQyxNQUFiLEVBQW9CSSxRQUFwQjtBQUFBLENBREYsQztBQUdBLElBQU1DLFlBQUEsR0FBQVosT0FBQSxDQUFBWSxZQUFBLEdBQU4sU0FBTUEsWUFBTixHQUNFO0FBQUEsV0FDR2IsV0FBRCxFLE1BQ1NXLEssS0FBVCxDLE1BQUEsRUFBZSxJLE1BQUEsRUFBZixDLE1BRkYsQyxNQUFBLEVBR09iLFFBSFA7QUFBQSxDQURGIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZGVmbWFjcm8gYmluZC1mblxuICBbZiAmIHBhcmFtc11cbiAgYCguYmluZCB+ZiBuaWwgfkBwYXJhbXMpKVxuXG4oZGVmbWFjcm8gcHJvbWlzaWZ5XG4gIFtuYW1lIGFyZ3MgJiBib2R5XVxuICBgKGRlZm4gfm5hbWUgfmFyZ3NcbiAgICAgKFByb21pc2UuIChmbiBbcmVzb2x2IHJlamVjdF0gfkBib2R5KSkpKVxuXG4oZGVmbWFjcm8gLT5cbiAgXCJDaGFpbiBwcm9taXNlc1wiXG4gIFsmIG9wZXJhdGlvbnNdXG4gIChyZWR1Y2VcbiAgIChmbiBbZm9ybSBvcGVyYXRpb25dXG4gICAgIChjb25zIGAudGhlblxuICAgICAgIChpZiAodmVjdG9yPyBvcGVyYXRpb24pXG4gICAgICAgICAoY29ucyBmb3JtIG9wZXJhdGlvbilcbiAgICAgICAgIChsaXN0IGZvcm0gb3BlcmF0aW9uKSkpKVxuICAgb3BlcmF0aW9ucykpXG5cblxuXG4obnMgbW53LmdlbmVyYXRvclxuICBcIkNyZWF0ZSBhIE1hcmtvdiBnZW5lcmF0b3JcIlxuICAoOnJlcXVpcmVcbiAgICBbd2lzcC5zZXF1ZW5jZSA6cmVmZXIgW21hcCByZWR1Y2VdXVxuICAgIFt3aXNwLnN0cmluZyA6cmVmZXIgW2pvaW4gc3BsaXQgc3BsaXQtbGluZXNdXVxuICAgIFtwcm9taXNlIDphcyBQcm9taXNlXVxuICAgIFtwb2xpc2gtcHJvdmVyYnMgOmFzIHBwXVxuICAgIFttYXJrb2ZmIDphcyBNYXJrb3ZdXG4gICAgW21udy5lcnJvcnMgOnJlZmVyIFtsb2dFcnJvcl1dXG4gICAgW21udy5uZ3JhbSA6cmVmZXIgW25ncmFtXV0pKVxuXG4ocHJvbWlzaWZ5IGdldFByb3ZlcmJzIFtdXG4gIChwcCAoZm4gW3R4dF1cbiAgICAocmVzb2x2IChzcGxpdC1saW5lcyB0eHQpKSkpKVxuXG4oZGVmbi0gdG9rZW5pemUgW3NlcXVlbmNlXVxuICAobWFwIChiaW5kLWZuIGpvaW4gXCJ8XCIpIChuZ3JhbSAxIHNlcXVlbmNlKSkpXG5cbihkZWZuLSBmZWVkIFttYXJrb3YgbGluZV1cbiAgKC5hZGRUb2tlbnMgbWFya292ICh0b2tlbml6ZSAoc3BsaXQgbGluZSAjXCIsP1xccytcIikpKVxuICBtYXJrb3YpXG5cbihkZWZuIHRlYWNoIFttYXJrb3YgcHJvdmVyYnNdXG4gIChyZWR1Y2UgZmVlZCBtYXJrb3YgcHJvdmVyYnMpKVxuXG4oZGVmbiBnZXRHZW5lcmF0b3IgW11cbiAgKC0+XG4gICAgKGdldFByb3ZlcmJzKVxuICAgIChiaW5kLWZuIHRlYWNoIChNYXJrb3YuKSlcbiAgICBbbmlsIGxvZ0Vycm9yXSkpXG4iXX0=
