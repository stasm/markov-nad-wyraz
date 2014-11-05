{
    var _ns_ = {
        id: 'mnw.index',
        doc: 'Create a Markov generator'
    };
    var wisp_runtime = require('wisp/runtime');
    var dec = wisp_runtime.dec;
    var isNil = wisp_runtime.isNil;
    var wisp_string = require('wisp/string');
    var join = wisp_string.join;
    var split = wisp_string.split;
    var wisp_sequence = require('wisp/sequence');
    var map = wisp_sequence.map;
    var last = wisp_sequence.last;
    var mnw_errors = require('./errors');
    var logError = mnw_errors.logError;
    var mnw_io = require('./io');
    var getFromWiki = mnw_io.getFromWiki;
    var getFromFile = mnw_io.getFromFile;
    var mnw_generator = require('./generator');
    var teach = mnw_generator.teach;
}
void 0;
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
var getProverbs = function getProverbs(filename) {
    return isNil(filename) ? getFromWiki() : getFromFile(filename);
};
var main = exports.main = function main(program) {
    return getProverbs(program.input).then(teach.bind(void 0, program.ngram)).then(printMultiple.bind(void 0, program.count, program.maxlen)).then(void 0, logError);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImRlYyIsImlzTmlsIiwiam9pbiIsInNwbGl0IiwibWFwIiwibGFzdCIsImxvZ0Vycm9yIiwiZ2V0RnJvbVdpa2kiLCJnZXRGcm9tRmlsZSIsInRlYWNoIiwiZmxhdHRlbiIsInRva2VuIiwicHJpbnRNdWx0aXBsZSIsInRvdGFsIiwibWF4bGVuIiwibWFya292IiwiacO4MSIsImNvbnNvbGUiLCJsb2ciLCJjaGFpbiIsImdldFByb3ZlcmJzIiwiZmlsZW5hbWUiLCJtYWluIiwiZXhwb3J0cyIsInByb2dyYW0iLCJpbnB1dCIsIm5ncmFtIiwiY291bnQiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFDQSxJLEdBQUQ7QUFBQSxRQUFBQyxFLEVBQUksV0FBSjtBQUFBLFFBQUFDLEcsRUFDRSwyQkFERjtBQUFBLE07O1FBRzBCQyxHQUFBLEcsYUFBQUEsRztRQUFJQyxLQUFBLEcsYUFBQUEsSzs7UUFDTEMsSUFBQSxHLFlBQUFBLEk7UUFBS0MsS0FBQSxHLFlBQUFBLEs7O1FBQ0hDLEdBQUEsRyxjQUFBQSxHO1FBQUlDLElBQUEsRyxjQUFBQSxJOztRQUNQQyxRQUFBLEcsV0FBQUEsUTs7UUFDSkMsV0FBQSxHLE9BQUFBLFc7UUFBY0MsV0FBQSxHLE9BQUFBLFc7O1FBQ1BDLEtBQUEsRyxjQUFBQSxLOzs7QUFhM0IsSUFBT0MsT0FBQSxHQUFQLFNBQU9BLE9BQVAsQ0FBZ0JDLEtBQWhCLEVBQ0U7QUFBQSxXQUFDTixJQUFELENBQU9GLEtBQUQsQ0FBT1EsS0FBUCxFQUFhLEdBQWIsQ0FBTjtBQUFBLENBREYsQztBQUdBLElBQU9DLGFBQUEsR0FBUCxTQUFPQSxhQUFQLENBQXVCQyxLQUF2QixFQUE2QkMsTUFBN0IsRUFBb0NDLE1BQXBDLEVBQ0U7QUFBQSxXOztRQUFPLElBQUFDLEcsR0FBRUgsS0FBRixDOztvQkFDRUcsR0FBSCxHQUFLLENBQVQsRyxhQUVJO0FBQUEsZ0JBQUFDLE9BQUEsQ0FBUUMsR0FBUixDQUFRaEIsSUFBRCxDQUFNLEdBQU4sRUFBV0UsR0FBRCxDQUFLTSxPQUFMLEVBQXFCSyxNQUFQLENBQUNJLEtBQUYsQ0FBZUwsTUFBZixDQUFiLENBQVYsQ0FBUDtBQUFBLGdCQUNBLE8sVUFBUWQsR0FBRCxDQUFLZ0IsR0FBTCxDQUFQLEUsSUFBQSxDQURBO0FBQUEsYSxDQUFBLEVBRkosRztpQkFES0EsRzs7VUFBUCxDLElBQUE7QUFBQSxDQURGLEM7QUFPQSxJQUFPSSxXQUFBLEdBQVAsU0FBT0EsV0FBUCxDQUFxQkMsUUFBckIsRUFDRTtBQUFBLFdBQUtwQixLQUFELENBQU1vQixRQUFOLENBQUosR0FDR2QsV0FBRCxFQURGLEdBRUdDLFdBQUQsQ0FBZWEsUUFBZixDQUZGO0FBQUEsQ0FERixDO0FBS0EsSUFBTUMsSUFBQSxHQUFBQyxPQUFBLENBQUFELElBQUEsR0FBTixTQUFNQSxJQUFOLENBQVlFLE9BQVosRUFDRTtBQUFBLFdBQ0dKLFdBQUQsQ0FBdUJJLE9BQVQsQ0FBR0MsS0FBakIsQyxNQUNTaEIsSyxLQUFULEMsTUFBQSxFQUF3QmUsT0FBVCxDQUFHRSxLQUFsQixDLE9BQ1NkLGEsS0FBVCxDLE1BQUEsRUFBaUNZLE9BQVQsQ0FBR0csS0FBM0IsRUFBb0RILE9BQVYsQ0FBR1YsTUFBN0MsQyxNQUhGLEMsTUFBQSxFQUlPUixRQUpQO0FBQUEsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbIihucyBtbncuaW5kZXhcbiAgXCJDcmVhdGUgYSBNYXJrb3YgZ2VuZXJhdG9yXCJcbiAgKDpyZXF1aXJlXG4gICAgW3dpc3AucnVudGltZSA6cmVmZXIgW2RlYyBuaWw/XV1cbiAgICBbd2lzcC5zdHJpbmcgOnJlZmVyIFtqb2luIHNwbGl0XV1cbiAgICBbd2lzcC5zZXF1ZW5jZSA6cmVmZXIgW21hcCBsYXN0XV1cbiAgICBbbW53LmVycm9ycyA6cmVmZXIgW2xvZ0Vycm9yXV1cbiAgICBbbW53LmlvIDpyZWZlciBbZ2V0LWZyb20td2lraSBnZXQtZnJvbS1maWxlXV1cbiAgICBbbW53LmdlbmVyYXRvciA6cmVmZXIgW3RlYWNoXV0pKVxuXG4oZGVmbWFjcm8gLT5cbiAgXCJDaGFpbiBwcm9taXNlc1wiXG4gIFsmIG9wZXJhdGlvbnNdXG4gIChyZWR1Y2VcbiAgIChmbiBbZm9ybSBvcGVyYXRpb25dXG4gICAgIChjb25zIGAudGhlblxuICAgICAgIChpZiAodmVjdG9yPyBvcGVyYXRpb24pXG4gICAgICAgICAoY29ucyBmb3JtIG9wZXJhdGlvbilcbiAgICAgICAgIChsaXN0IGZvcm0gb3BlcmF0aW9uKSkpKVxuICAgb3BlcmF0aW9ucykpXG5cbihkZWZuLSBmbGF0dGVuIFt0b2tlbl1cbiAgKGxhc3QgKHNwbGl0IHRva2VuIFwifFwiKSkpXG5cbihkZWZuLSBwcmludC1tdWx0aXBsZSBbdG90YWwgbWF4bGVuIG1hcmtvdl1cbiAgKGxvb3AgW2kgdG90YWxdXG4gICAgKGlmICg+IGkgMClcbiAgICAgIChkb1xuICAgICAgICAocHJpbnQgKGpvaW4gXCIgXCIgKG1hcCBmbGF0dGVuICguY2hhaW4gbWFya292IG1heGxlbikpKSlcbiAgICAgICAgKHJlY3VyIChkZWMgaSkpKSkpKVxuXG4oZGVmbi0gZ2V0LXByb3ZlcmJzIFtmaWxlbmFtZV1cbiAgKGlmIChuaWw/IGZpbGVuYW1lKVxuICAgIChnZXQtZnJvbS13aWtpKVxuICAgIChnZXQtZnJvbS1maWxlIGZpbGVuYW1lKSkpXG5cbihkZWZuIG1haW4gW3Byb2dyYW1dXG4gICgtPlxuICAgIChnZXQtcHJvdmVyYnMgKC4taW5wdXQgcHJvZ3JhbSkpXG4gICAgKGJpbmQtZm4gdGVhY2ggKC4tbmdyYW0gcHJvZ3JhbSkpXG4gICAgKGJpbmQtZm4gcHJpbnQtbXVsdGlwbGUgKC4tY291bnQgcHJvZ3JhbSkgKC4tbWF4bGVuIHByb2dyYW0pKVxuICAgIFtuaWwgbG9nRXJyb3JdKSlcbiJdfQ==
