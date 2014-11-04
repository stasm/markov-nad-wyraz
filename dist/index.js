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
    return getGenerator(program.ngram).then(printMultiple.bind(void 0, program.count, program.maxlen)).then(void 0, logError);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImRlYyIsImpvaW4iLCJzcGxpdCIsIm1hcCIsImxhc3QiLCJsb2dFcnJvciIsImdldEdlbmVyYXRvciIsImZsYXR0ZW4iLCJ0b2tlbiIsInByaW50TXVsdGlwbGUiLCJ0b3RhbCIsIm1heGxlbiIsIm1hcmtvdiIsImnDuDEiLCJjb25zb2xlIiwibG9nIiwiY2hhaW4iLCJleHBvcnRzIiwibWFpbiIsInByb2dyYW0iLCJuZ3JhbSIsImNvdW50Il0sIm1hcHBpbmdzIjoiOzs7O0lBdUJBLElBQUNBLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSxXQUFKO0FBQUEsUUFBQUMsRyxFQUNFLDJCQURGO0FBQUEsTTs7UUFHMEJDLEdBQUEsRyxhQUFBQSxHOztRQUNEQyxJQUFBLEcsWUFBQUEsSTtRQUFLQyxLQUFBLEcsWUFBQUEsSzs7UUFDSEMsR0FBQSxHLGNBQUFBLEc7UUFBSUMsSUFBQSxHLGNBQUFBLEk7O1FBQ1BDLFFBQUEsRyxXQUFBQSxROztRQUNHQyxZQUFBLEcsY0FBQUEsWTs7QUFFM0IsSUFBT0MsT0FBQSxHQUFQLFNBQU9BLE9BQVAsQ0FBZ0JDLEtBQWhCLEVBQ0U7QUFBQSxXQUFDSixJQUFELENBQU9GLEtBQUQsQ0FBT00sS0FBUCxFQUFhLEdBQWIsQ0FBTjtBQUFBLENBREYsQztBQUdBLElBQU9DLGFBQUEsR0FBUCxTQUFPQSxhQUFQLENBQXNCQyxLQUF0QixFQUE0QkMsTUFBNUIsRUFBbUNDLE1BQW5DLEVBQ0U7QUFBQSxXOztRQUFPLElBQUFDLEcsR0FBRUgsS0FBRixDOztvQkFDRUcsR0FBSCxHQUFLLENBQVQsRyxhQUVJO0FBQUEsZ0JBQUFDLE9BQUEsQ0FBUUMsR0FBUixDQUFRZCxJQUFELENBQU0sR0FBTixFQUFXRSxHQUFELENBQUtJLE9BQUwsRUFBcUJLLE1BQVAsQ0FBQ0ksS0FBRixDQUFlTCxNQUFmLENBQWIsQ0FBVixDQUFQO0FBQUEsZ0JBQ0EsTyxVQUFRWCxHQUFELENBQUthLEdBQUwsQ0FBUCxFLElBQUEsQ0FEQTtBQUFBLGEsQ0FBQSxFQUZKLEc7aUJBREtBLEc7O1VBQVAsQyxJQUFBO0FBQUEsQ0FERixDO0FBT0EsSUFBS1AsWUFBQSxHQUFBVyxPQUFBLENBQUFYLFlBQUEsR0FBYUEsWUFBbEIsQztBQUVBLElBQU1ZLElBQUEsR0FBQUQsT0FBQSxDQUFBQyxJQUFBLEdBQU4sU0FBTUEsSUFBTixDQUFZQyxPQUFaLEVBQ0U7QUFBQSxXQUNHYixZQUFELENBQXVCYSxPQUFULENBQUdDLEtBQWpCLEMsTUFDU1gsYSxLQUFULEMsTUFBQSxFQUFnQ1UsT0FBVCxDQUFHRSxLQUExQixFQUFtREYsT0FBVixDQUFHUixNQUE1QyxDLE1BRkYsQyxNQUFBLEVBR09OLFFBSFA7QUFBQSxDQURGIiwic291cmNlc0NvbnRlbnQiOlsiXG4oZGVmbWFjcm8gYmluZC1mblxuICBbZiAmIHBhcmFtc11cbiAgYCguYmluZCB+ZiBuaWwgfkBwYXJhbXMpKVxuXG4oZGVmbWFjcm8gcHJvbWlzaWZ5XG4gIFtuYW1lIGFyZ3MgJiBib2R5XVxuICBgKGRlZm4gfm5hbWUgfmFyZ3NcbiAgICAgKFByb21pc2UuIChmbiBbcmVzb2x2IHJlamVjdF0gfkBib2R5KSkpKVxuXG4oZGVmbWFjcm8gLT5cbiAgXCJDaGFpbiBwcm9taXNlc1wiXG4gIFsmIG9wZXJhdGlvbnNdXG4gIChyZWR1Y2VcbiAgIChmbiBbZm9ybSBvcGVyYXRpb25dXG4gICAgIChjb25zIGAudGhlblxuICAgICAgIChpZiAodmVjdG9yPyBvcGVyYXRpb24pXG4gICAgICAgICAoY29ucyBmb3JtIG9wZXJhdGlvbilcbiAgICAgICAgIChsaXN0IGZvcm0gb3BlcmF0aW9uKSkpKVxuICAgb3BlcmF0aW9ucykpXG5cblxuXG4obnMgbW53LmluZGV4XG4gIFwiQ3JlYXRlIGEgTWFya292IGdlbmVyYXRvclwiXG4gICg6cmVxdWlyZVxuICAgIFt3aXNwLnJ1bnRpbWUgOnJlZmVyIFtkZWNdXVxuICAgIFt3aXNwLnN0cmluZyA6cmVmZXIgW2pvaW4gc3BsaXRdXVxuICAgIFt3aXNwLnNlcXVlbmNlIDpyZWZlciBbbWFwIGxhc3RdXVxuICAgIFttbncuZXJyb3JzIDpyZWZlciBbbG9nRXJyb3JdXVxuICAgIFttbncuZ2VuZXJhdG9yIDpyZWZlciBbZ2V0R2VuZXJhdG9yXV0pKVxuXG4oZGVmbi0gZmxhdHRlbiBbdG9rZW5dXG4gIChsYXN0IChzcGxpdCB0b2tlbiBcInxcIikpKVxuXG4oZGVmbi0gcHJpbnRNdWx0aXBsZSBbdG90YWwgbWF4bGVuIG1hcmtvdl1cbiAgKGxvb3AgW2kgdG90YWxdXG4gICAgKGlmICg+IGkgMClcbiAgICAgIChkb1xuICAgICAgICAocHJpbnQgKGpvaW4gXCIgXCIgKG1hcCBmbGF0dGVuICguY2hhaW4gbWFya292IG1heGxlbikpKSlcbiAgICAgICAgKHJlY3VyIChkZWMgaSkpKSkpKVxuXG4oZGVmIGdldEdlbmVyYXRvciBnZXRHZW5lcmF0b3IpXG5cbihkZWZuIG1haW4gW3Byb2dyYW1dXG4gICgtPlxuICAgIChnZXRHZW5lcmF0b3IgKC4tbmdyYW0gcHJvZ3JhbSkpXG4gICAgKGJpbmQtZm4gcHJpbnRNdWx0aXBsZSAoLi1jb3VudCBwcm9ncmFtKSAoLi1tYXhsZW4gcHJvZ3JhbSkpXG4gICAgW25pbCBsb2dFcnJvcl0pKVxuIl19
