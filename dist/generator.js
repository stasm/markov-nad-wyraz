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
var tokenize = function tokenize(n, sequence) {
    return map(join.bind(void 0, '|'), ngram(n, sequence));
};
var addTokens = function addTokens(n, markov, line) {
    markov.addTokens(tokenize(n, split(line, /,?\s+/)));
    return markov;
};
var teach = exports.teach = function teach(n, markov, proverbs) {
    return reduce(addTokens.bind(void 0, n), markov, proverbs);
};
var getGenerator = exports.getGenerator = function getGenerator(n) {
    return getProverbs().then(teach.bind(void 0, n, new Markov())).then(void 0, logError);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsIm1hcCIsInJlZHVjZSIsImpvaW4iLCJzcGxpdCIsInNwbGl0TGluZXMiLCJsb2dFcnJvciIsIm5ncmFtIiwiZ2V0UHJvdmVyYnMiLCJleHBvcnRzIiwicHAiLCJ0eHQiLCJyZXNvbHYiLCJ0b2tlbml6ZSIsIm4iLCJzZXF1ZW5jZSIsImFkZFRva2VucyIsIm1hcmtvdiIsImxpbmUiLCJ0ZWFjaCIsInByb3ZlcmJzIiwiZ2V0R2VuZXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7O0lBdUJBLElBQUNBLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSxlQUFKO0FBQUEsUUFBQUMsRyxFQUNFLDJCQURGO0FBQUEsTTs7UUFHMkJDLEdBQUEsRyxjQUFBQSxHO1FBQUlDLE1BQUEsRyxjQUFBQSxNOztRQUNOQyxJQUFBLEcsWUFBQUEsSTtRQUFLQyxLQUFBLEcsWUFBQUEsSztRQUFNQyxVQUFBLEcsWUFBQUEsVTs7Ozs7Ozs7UUFJWkMsUUFBQSxHLFdBQUFBLFE7O1FBQ0RDLEtBQUEsRyxVQUFBQSxLOztBQUV2QixJQUFXQyxXQUFBLEdBQUFDLE9BQUEsQ0FBQUQsV0FBQSxHQUFYLFNBQVdBLFdBQVgsRztpREFDRTtBQUFBLGVBQUNFLEVBQUQsQ0FBSSxVQUFLQyxHQUFMLEVBQ0Y7QUFBQSxtQkFBQ0MsTUFBRCxDQUFTUCxVQUFELENBQWFNLEdBQWIsQ0FBUjtBQUFBLFNBREY7QUFBQSxLO0NBREYsQztBQUlBLElBQU9FLFFBQUEsR0FBUCxTQUFPQSxRQUFQLENBQWlCQyxDQUFqQixFQUFtQkMsUUFBbkIsRUFDRTtBQUFBLFdBQUNkLEdBQUQsQ0FBY0UsSSxLQUFULEMsTUFBQSxFQUFjLEdBQWQsQ0FBTCxFQUF5QkksS0FBRCxDQUFPTyxDQUFQLEVBQVNDLFFBQVQsQ0FBeEI7QUFBQSxDQURGLEM7QUFHQSxJQUFPQyxTQUFBLEdBQVAsU0FBT0EsU0FBUCxDQUFtQkYsQ0FBbkIsRUFBcUJHLE1BQXJCLEVBQTRCQyxJQUE1QixFQUNFO0FBQUEsSUFBWUQsTUFBWCxDQUFDRCxTQUFGLENBQW9CSCxRQUFELENBQVVDLENBQVYsRUFBYVYsS0FBRCxDQUFPYyxJQUFQLEVBQVksT0FBWixDQUFaLENBQW5CO0FBQUEsSUFDQSxPQUFBRCxNQUFBLENBREE7QUFBQSxDQURGLEM7QUFJQSxJQUFNRSxLQUFBLEdBQUFWLE9BQUEsQ0FBQVUsS0FBQSxHQUFOLFNBQU1BLEtBQU4sQ0FBYUwsQ0FBYixFQUFlRyxNQUFmLEVBQXNCRyxRQUF0QixFQUNFO0FBQUEsV0FBQ2xCLE1BQUQsQ0FBaUJjLFMsS0FBVCxDLE1BQUEsRUFBb0JGLENBQXBCLENBQVIsRUFBK0JHLE1BQS9CLEVBQXNDRyxRQUF0QztBQUFBLENBREYsQztBQUdBLElBQU1DLFlBQUEsR0FBQVosT0FBQSxDQUFBWSxZQUFBLEdBQU4sU0FBTUEsWUFBTixDQUFvQlAsQ0FBcEIsRUFDRTtBQUFBLFdBQ0dOLFdBQUQsRSxNQUNTVyxLLEtBQVQsQyxNQUFBLEVBQWVMLENBQWYsRUFBaUIsSSxNQUFBLEVBQWpCLEMsTUFGRixDLE1BQUEsRUFHT1IsUUFIUDtBQUFBLENBREYiLCJzb3VyY2VzQ29udGVudCI6WyJcbihkZWZtYWNybyBiaW5kLWZuXG4gIFtmICYgcGFyYW1zXVxuICBgKC5iaW5kIH5mIG5pbCB+QHBhcmFtcykpXG5cbihkZWZtYWNybyBwcm9taXNpZnlcbiAgW25hbWUgYXJncyAmIGJvZHldXG4gIGAoZGVmbiB+bmFtZSB+YXJnc1xuICAgICAoUHJvbWlzZS4gKGZuIFtyZXNvbHYgcmVqZWN0XSB+QGJvZHkpKSkpXG5cbihkZWZtYWNybyAtPlxuICBcIkNoYWluIHByb21pc2VzXCJcbiAgWyYgb3BlcmF0aW9uc11cbiAgKHJlZHVjZVxuICAgKGZuIFtmb3JtIG9wZXJhdGlvbl1cbiAgICAgKGNvbnMgYC50aGVuXG4gICAgICAgKGlmICh2ZWN0b3I/IG9wZXJhdGlvbilcbiAgICAgICAgIChjb25zIGZvcm0gb3BlcmF0aW9uKVxuICAgICAgICAgKGxpc3QgZm9ybSBvcGVyYXRpb24pKSkpXG4gICBvcGVyYXRpb25zKSlcblxuXG5cbihucyBtbncuZ2VuZXJhdG9yXG4gIFwiQ3JlYXRlIGEgTWFya292IGdlbmVyYXRvclwiXG4gICg6cmVxdWlyZVxuICAgIFt3aXNwLnNlcXVlbmNlIDpyZWZlciBbbWFwIHJlZHVjZV1dXG4gICAgW3dpc3Auc3RyaW5nIDpyZWZlciBbam9pbiBzcGxpdCBzcGxpdC1saW5lc11dXG4gICAgW3Byb21pc2UgOmFzIFByb21pc2VdXG4gICAgW3BvbGlzaC1wcm92ZXJicyA6YXMgcHBdXG4gICAgW21hcmtvZmYgOmFzIE1hcmtvdl1cbiAgICBbbW53LmVycm9ycyA6cmVmZXIgW2xvZ0Vycm9yXV1cbiAgICBbbW53Lm5ncmFtIDpyZWZlciBbbmdyYW1dXSkpXG5cbihwcm9taXNpZnkgZ2V0UHJvdmVyYnMgW11cbiAgKHBwIChmbiBbdHh0XVxuICAgIChyZXNvbHYgKHNwbGl0LWxpbmVzIHR4dCkpKSkpXG5cbihkZWZuLSB0b2tlbml6ZSBbbiBzZXF1ZW5jZV1cbiAgKG1hcCAoYmluZC1mbiBqb2luIFwifFwiKSAobmdyYW0gbiBzZXF1ZW5jZSkpKVxuXG4oZGVmbi0gYWRkLXRva2VucyBbbiBtYXJrb3YgbGluZV1cbiAgKC5hZGRUb2tlbnMgbWFya292ICh0b2tlbml6ZSBuIChzcGxpdCBsaW5lICNcIiw/XFxzK1wiKSkpXG4gIG1hcmtvdilcblxuKGRlZm4gdGVhY2ggW24gbWFya292IHByb3ZlcmJzXVxuICAocmVkdWNlIChiaW5kLWZuIGFkZC10b2tlbnMgbikgbWFya292IHByb3ZlcmJzKSlcblxuKGRlZm4gZ2V0R2VuZXJhdG9yIFtuXVxuICAoLT5cbiAgICAoZ2V0UHJvdmVyYnMpXG4gICAgKGJpbmQtZm4gdGVhY2ggbiAoTWFya292LikpXG4gICAgW25pbCBsb2dFcnJvcl0pKVxuIl19
