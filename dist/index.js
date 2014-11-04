void 0;
void 0;
void 0;
{
    var _ns_ = {
        id: 'mnw.index',
        doc: 'Create a Markov generator'
    };
    var wisp_runtime = require('wisp/runtime');
    var dec = wisp_runtime.dec;
    var wisp_string = require('wisp/string');
    var join = wisp_string.join;
    var split = wisp_string.split;
    var wisp_sequence = require('wisp/sequence');
    var map = wisp_sequence.map;
    var last = wisp_sequence.last;
    var mnw_errors = require('./errors');
    var logError = mnw_errors.logError;
    var mnw_generator = require('./generator');
    var getGenerator = mnw_generator.getGenerator;
}
var flatten = function flatten(token) {
    return last(split(token, '|'));
};
var printMultiple = function printMultiple(total, maxlen, markov) {
    return function loop() {
        var recur = loop;
        var iø1 = total;
        do {
            recur = iø1 > 0 ? (function () {
                console.log(join(' ', map(flatten, markov.chain(maxlen))));
                return loop[0] = dec(iø1), loop;
            })() : void 0;
        } while (iø1 = loop[0], recur === loop);
        return recur;
    }.call(this);
};
var getGenerator = exports.getGenerator = getGenerator;
var main = exports.main = function main(program) {
    return getGenerator().then(printMultiple.bind(void 0, program.count, program.maxlen)).then(void 0, logError);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImRlYyIsImpvaW4iLCJzcGxpdCIsIm1hcCIsImxhc3QiLCJsb2dFcnJvciIsImdldEdlbmVyYXRvciIsImZsYXR0ZW4iLCJ0b2tlbiIsInByaW50TXVsdGlwbGUiLCJ0b3RhbCIsIm1heGxlbiIsIm1hcmtvdiIsImnDuDEiLCJjb25zb2xlIiwibG9nIiwiY2hhaW4iLCJleHBvcnRzIiwibWFpbiIsInByb2dyYW0iLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7OztJQXVCQSxJQUFDQSxJLEdBQUQ7QUFBQSxRQUFBQyxFLEVBQUksV0FBSjtBQUFBLFFBQUFDLEcsRUFDRSwyQkFERjtBQUFBLE07O1FBRzBCQyxHQUFBLEcsYUFBQUEsRzs7UUFDREMsSUFBQSxHLFlBQUFBLEk7UUFBS0MsS0FBQSxHLFlBQUFBLEs7O1FBQ0hDLEdBQUEsRyxjQUFBQSxHO1FBQUlDLElBQUEsRyxjQUFBQSxJOztRQUNQQyxRQUFBLEcsV0FBQUEsUTs7UUFDR0MsWUFBQSxHLGNBQUFBLFk7O0FBRTNCLElBQU9DLE9BQUEsR0FBUCxTQUFPQSxPQUFQLENBQWdCQyxLQUFoQixFQUNFO0FBQUEsV0FBQ0osSUFBRCxDQUFPRixLQUFELENBQU9NLEtBQVAsRUFBYSxHQUFiLENBQU47QUFBQSxDQURGLEM7QUFHQSxJQUFPQyxhQUFBLEdBQVAsU0FBT0EsYUFBUCxDQUFzQkMsS0FBdEIsRUFBNEJDLE1BQTVCLEVBQW1DQyxNQUFuQyxFQUNFO0FBQUEsVzs7UUFBTyxJQUFBQyxHLEdBQUVILEtBQUYsQzs7b0JBQ0VHLEdBQUgsR0FBSyxDQUFULEcsYUFFSTtBQUFBLGdCQUFBQyxPQUFBLENBQVFDLEdBQVIsQ0FBUWQsSUFBRCxDQUFNLEdBQU4sRUFBV0UsR0FBRCxDQUFLSSxPQUFMLEVBQXFCSyxNQUFQLENBQUNJLEtBQUYsQ0FBZUwsTUFBZixDQUFiLENBQVYsQ0FBUDtBQUFBLGdCQUNBLE8sVUFBUVgsR0FBRCxDQUFLYSxHQUFMLENBQVAsRSxJQUFBLENBREE7QUFBQSxhLENBQUEsRUFGSixHO2lCQURLQSxHOztVQUFQLEMsSUFBQTtBQUFBLENBREYsQztBQU9BLElBQUtQLFlBQUEsR0FBQVcsT0FBQSxDQUFBWCxZQUFBLEdBQWFBLFlBQWxCLEM7QUFFQSxJQUFNWSxJQUFBLEdBQUFELE9BQUEsQ0FBQUMsSUFBQSxHQUFOLFNBQU1BLElBQU4sQ0FBWUMsT0FBWixFQUNFO0FBQUEsV0FDR2IsWUFBRCxFLE1BQ1NHLGEsS0FBVCxDLE1BQUEsRUFBZ0NVLE9BQVQsQ0FBR0MsS0FBMUIsRUFBbURELE9BQVYsQ0FBR1IsTUFBNUMsQyxNQUZGLEMsTUFBQSxFQUdPTixRQUhQO0FBQUEsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbIlxuKGRlZm1hY3JvIGJpbmQtZm5cbiAgW2YgJiBwYXJhbXNdXG4gIGAoLmJpbmQgfmYgbmlsIH5AcGFyYW1zKSlcblxuKGRlZm1hY3JvIHByb21pc2lmeVxuICBbbmFtZSBhcmdzICYgYm9keV1cbiAgYChkZWZuIH5uYW1lIH5hcmdzXG4gICAgIChQcm9taXNlLiAoZm4gW3Jlc29sdiByZWplY3RdIH5AYm9keSkpKSlcblxuKGRlZm1hY3JvIC0+XG4gIFwiQ2hhaW4gcHJvbWlzZXNcIlxuICBbJiBvcGVyYXRpb25zXVxuICAocmVkdWNlXG4gICAoZm4gW2Zvcm0gb3BlcmF0aW9uXVxuICAgICAoY29ucyBgLnRoZW5cbiAgICAgICAoaWYgKHZlY3Rvcj8gb3BlcmF0aW9uKVxuICAgICAgICAgKGNvbnMgZm9ybSBvcGVyYXRpb24pXG4gICAgICAgICAobGlzdCBmb3JtIG9wZXJhdGlvbikpKSlcbiAgIG9wZXJhdGlvbnMpKVxuXG5cblxuKG5zIG1udy5pbmRleFxuICBcIkNyZWF0ZSBhIE1hcmtvdiBnZW5lcmF0b3JcIlxuICAoOnJlcXVpcmVcbiAgICBbd2lzcC5ydW50aW1lIDpyZWZlciBbZGVjXV1cbiAgICBbd2lzcC5zdHJpbmcgOnJlZmVyIFtqb2luIHNwbGl0XV1cbiAgICBbd2lzcC5zZXF1ZW5jZSA6cmVmZXIgW21hcCBsYXN0XV1cbiAgICBbbW53LmVycm9ycyA6cmVmZXIgW2xvZ0Vycm9yXV1cbiAgICBbbW53LmdlbmVyYXRvciA6cmVmZXIgW2dldEdlbmVyYXRvcl1dKSlcblxuKGRlZm4tIGZsYXR0ZW4gW3Rva2VuXVxuICAobGFzdCAoc3BsaXQgdG9rZW4gXCJ8XCIpKSlcblxuKGRlZm4tIHByaW50TXVsdGlwbGUgW3RvdGFsIG1heGxlbiBtYXJrb3ZdXG4gIChsb29wIFtpIHRvdGFsXVxuICAgIChpZiAoPiBpIDApXG4gICAgICAoZG9cbiAgICAgICAgKHByaW50IChqb2luIFwiIFwiIChtYXAgZmxhdHRlbiAoLmNoYWluIG1hcmtvdiBtYXhsZW4pKSkpXG4gICAgICAgIChyZWN1ciAoZGVjIGkpKSkpKSlcblxuKGRlZiBnZXRHZW5lcmF0b3IgZ2V0R2VuZXJhdG9yKVxuXG4oZGVmbiBtYWluIFtwcm9ncmFtXVxuICAoLT5cbiAgICAoZ2V0R2VuZXJhdG9yKVxuICAgIChiaW5kLWZuIHByaW50TXVsdGlwbGUgKC4tY291bnQgcHJvZ3JhbSkgKC4tbWF4bGVuIHByb2dyYW0pKVxuICAgIFtuaWwgbG9nRXJyb3JdKSlcbiJdfQ==
