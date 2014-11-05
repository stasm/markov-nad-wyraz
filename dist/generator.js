{
    var _ns_ = {
        id: 'mnw.generator',
        doc: 'Create a Markov generator'
    };
    var wisp_string = require('wisp/string');
    var join = wisp_string.join;
    var split = wisp_string.split;
    var wisp_sequence = require('wisp/sequence');
    var map = wisp_sequence.map;
    var reduce = wisp_sequence.reduce;
    var markoff = require('markoff');
    var Markov = markoff;
    var mnw_errors = require('./errors');
    var logError = mnw_errors.logError;
    var mnw_ngram = require('./ngram');
    var ngram = mnw_ngram.ngram;
}
void 0;
var tokenize = function tokenize(n, sequence) {
    return map(join.bind(void 0, '|'), ngram(n, sequence));
};
var addTokens = function addTokens(n, markov, line) {
    markov.addTokens(tokenize(n, split(line, /,?\s+/)));
    return markov;
};
var teach = exports.teach = function teach(n, proverbs) {
    console.log(proverbs.length);
    return reduce(addTokens.bind(void 0, n), new Markov(), proverbs);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImpvaW4iLCJzcGxpdCIsIm1hcCIsInJlZHVjZSIsImxvZ0Vycm9yIiwibmdyYW0iLCJ0b2tlbml6ZSIsIm4iLCJzZXF1ZW5jZSIsImFkZFRva2VucyIsIm1hcmtvdiIsImxpbmUiLCJ0ZWFjaCIsImV4cG9ydHMiLCJwcm92ZXJicyIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFDQSxJLEdBQUQ7QUFBQSxRQUFBQyxFLEVBQUksZUFBSjtBQUFBLFFBQUFDLEcsRUFDRSwyQkFERjtBQUFBLE07O1FBR3lCQyxJQUFBLEcsWUFBQUEsSTtRQUFLQyxLQUFBLEcsWUFBQUEsSzs7UUFDSEMsR0FBQSxHLGNBQUFBLEc7UUFBSUMsTUFBQSxHLGNBQUFBLE07Ozs7UUFFUEMsUUFBQSxHLFdBQUFBLFE7O1FBQ0RDLEtBQUEsRyxVQUFBQSxLOzs7QUFLdkIsSUFBT0MsUUFBQSxHQUFQLFNBQU9BLFFBQVAsQ0FFR0MsQ0FGSCxFQUVLQyxRQUZMLEVBR0U7QUFBQSxXQUFDTixHQUFELENBQWNGLEksS0FBVCxDLE1BQUEsRUFBYyxHQUFkLENBQUwsRUFBeUJLLEtBQUQsQ0FBT0UsQ0FBUCxFQUFTQyxRQUFULENBQXhCO0FBQUEsQ0FIRixDO0FBS0EsSUFBT0MsU0FBQSxHQUFQLFNBQU9BLFNBQVAsQ0FFR0YsQ0FGSCxFQUVLRyxNQUZMLEVBRVlDLElBRlosRUFHRTtBQUFBLElBQVlELE1BQVgsQ0FBQ0QsU0FBRixDQUFvQkgsUUFBRCxDQUFVQyxDQUFWLEVBQWFOLEtBQUQsQ0FBT1UsSUFBUCxFQUFZLE9BQVosQ0FBWixDQUFuQjtBQUFBLElBQ0EsT0FBQUQsTUFBQSxDQURBO0FBQUEsQ0FIRixDO0FBTUEsSUFBTUUsS0FBQSxHQUFBQyxPQUFBLENBQUFELEtBQUEsR0FBTixTQUFNQSxLQUFOLENBRUdMLENBRkgsRUFFS08sUUFGTCxFQUdFO0FBQUEsSUFBQUMsT0FBQSxDQUFRQyxHQUFSLENBQWlCRixRQUFWLENBQUdHLE1BQVY7QUFBQSxJQUNBLE9BQUNkLE1BQUQsQ0FBaUJNLFMsS0FBVCxDLE1BQUEsRUFBb0JGLENBQXBCLENBQVIsRUFBK0IsSSxNQUFBLEVBQS9CLEVBQXlDTyxRQUF6QyxFQURBO0FBQUEsQ0FIRiIsInNvdXJjZXNDb250ZW50IjpbIihucyBtbncuZ2VuZXJhdG9yXG4gIFwiQ3JlYXRlIGEgTWFya292IGdlbmVyYXRvclwiXG4gICg6cmVxdWlyZVxuICAgIFt3aXNwLnN0cmluZyA6cmVmZXIgW2pvaW4gc3BsaXRdXVxuICAgIFt3aXNwLnNlcXVlbmNlIDpyZWZlciBbbWFwIHJlZHVjZV1dXG4gICAgW21hcmtvZmYgOmFzIE1hcmtvdl1cbiAgICBbbW53LmVycm9ycyA6cmVmZXIgW2xvZ0Vycm9yXV1cbiAgICBbbW53Lm5ncmFtIDpyZWZlciBbbmdyYW1dXSkpXG5cbihkZWZtYWNybyBiaW5kLWZuIFtmICYgcGFyYW1zXVxuICBgKC5iaW5kIH5mIG5pbCB+QHBhcmFtcykpXG5cbihkZWZuLSB0b2tlbml6ZVxuICBcIkdyb3VwIGlucHV0IHZlY3RvciBpbnRvIHN0cmluZ2lmaWVkIG4tZ3JhbXNcIlxuICBbbiBzZXF1ZW5jZV1cbiAgKG1hcCAoYmluZC1mbiBqb2luIFwifFwiKSAobmdyYW0gbiBzZXF1ZW5jZSkpKVxuXG4oZGVmbi0gYWRkLXRva2Vuc1xuICBcIkFkZCBhIHNpbmdsZSBwcm92ZXJiIHRvIGEgTWFya292IGNoYWluXCJcbiAgW24gbWFya292IGxpbmVdXG4gICguYWRkVG9rZW5zIG1hcmtvdiAodG9rZW5pemUgbiAoc3BsaXQgbGluZSAjXCIsP1xccytcIikpKVxuICBtYXJrb3YpXG5cbihkZWZuIHRlYWNoXG4gIFwiQ3JlYXRlIGEgbmV3IE1hcmtvdiBjaGFpbiBhbmQgZmVlZCBpdCBwcm92ZXJic1wiXG4gIFtuIHByb3ZlcmJzXVxuICAocHJpbnQgKC4tbGVuZ3RoIHByb3ZlcmJzKSlcbiAgKHJlZHVjZSAoYmluZC1mbiBhZGQtdG9rZW5zIG4pIChNYXJrb3YuKSBwcm92ZXJicykpXG4iXX0=
