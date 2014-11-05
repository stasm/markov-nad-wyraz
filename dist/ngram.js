{
    var _ns_ = {
        id: 'mnw.ngram',
        doc: 'Group tokens into n-grams'
    };
    var wisp_runtime = require('wisp/runtime');
    var dec = wisp_runtime.dec;
    var wisp_sequence = require('wisp/sequence');
    var vec = wisp_sequence.vec;
    var reduce = wisp_sequence.reduce;
    var first = wisp_sequence.first;
    var rest = wisp_sequence.rest;
    var last = wisp_sequence.last;
    var cons = wisp_sequence.cons;
    var conj = wisp_sequence.conj;
}
var padl = function padl(n, item) {
    return function loop() {
        var recur = loop;
        var resultø1 = [item];
        var nø2 = n;
        do {
            recur = nø2 === 0 ? vec(resultø1) : (loop[0] = cons(void 0, resultø1), loop[1] = dec(nø2), loop);
        } while (resultø1 = loop[0], nø2 = loop[1], recur === loop);
        return recur;
    }.call(this);
};
var ngramize = function ngramize(result, item) {
    return conj(result, conj(rest(last(result)), item));
};
var ngram = exports.ngram = function ngram(n, tokens) {
    return reduce(ngramize, [padl(dec(n), first(tokens))], rest(tokens));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImRlYyIsInZlYyIsInJlZHVjZSIsImZpcnN0IiwicmVzdCIsImxhc3QiLCJjb25zIiwiY29uaiIsInBhZGwiLCJuIiwiaXRlbSIsInJlc3VsdMO4MSIsIm7DuDIiLCJuZ3JhbWl6ZSIsInJlc3VsdCIsIm5ncmFtIiwiZXhwb3J0cyIsInRva2VucyJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUNBLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSxXQUFKO0FBQUEsUUFBQUMsRyxFQUNFLDJCQURGO0FBQUEsTTs7UUFHMEJDLEdBQUEsRyxhQUFBQSxHOztRQUNDQyxHQUFBLEcsY0FBQUEsRztRQUFJQyxNQUFBLEcsY0FBQUEsTTtRQUFPQyxLQUFBLEcsY0FBQUEsSztRQUFNQyxJQUFBLEcsY0FBQUEsSTtRQUFLQyxJQUFBLEcsY0FBQUEsSTtRQUFLQyxJQUFBLEcsY0FBQUEsSTtRQUFLQyxJQUFBLEcsY0FBQUEsSTs7QUFFM0QsSUFBT0MsSUFBQSxHQUFQLFNBQU9BLElBQVAsQ0FHR0MsQ0FISCxFQUdLQyxJQUhMLEVBSUU7QUFBQSxXOztRQUFPLElBQUFDLFEsR0FBTyxDQUFDRCxJQUFELENBQVAsQztRQUNBLElBQUFFLEcsR0FBRUgsQ0FBRixDOztvQkFDV0csR0FBWixLQUFjLENBQWxCLEdBQ0dYLEdBQUQsQ0FBS1UsUUFBTCxDQURGLEdBRUUsQyxVQUFRTCxJQUFELEMsTUFBQSxFQUFVSyxRQUFWLENBQVAsRSxVQUNRWCxHQUFELENBQUtZLEdBQUwsQ0FEUCxFLElBQUEsQztpQkFKR0QsUSxZQUNBQyxHOztVQURQLEMsSUFBQTtBQUFBLENBSkYsQztBQVdBLElBQU9DLFFBQUEsR0FBUCxTQUFPQSxRQUFQLENBRUdDLE1BRkgsRUFFVUosSUFGVixFQUdFO0FBQUEsV0FBQ0gsSUFBRCxDQUFNTyxNQUFOLEVBQ09QLElBQUQsQ0FBT0gsSUFBRCxDQUFPQyxJQUFELENBQU1TLE1BQU4sQ0FBTixDQUFOLEVBQTJCSixJQUEzQixDQUROO0FBQUEsQ0FIRixDO0FBTUEsSUFBTUssS0FBQSxHQUFBQyxPQUFBLENBQUFELEtBQUEsR0FBTixTQUFNQSxLQUFOLENBRUdOLENBRkgsRUFFS1EsTUFGTCxFQUdFO0FBQUEsV0FBQ2YsTUFBRCxDQUFRVyxRQUFSLEVBQ1EsQ0FBRUwsSUFBRCxDQUFPUixHQUFELENBQUtTLENBQUwsQ0FBTixFQUFlTixLQUFELENBQU9jLE1BQVAsQ0FBZCxDQUFELENBRFIsRUFFU2IsSUFBRCxDQUFNYSxNQUFOLENBRlI7QUFBQSxDQUhGIiwic291cmNlc0NvbnRlbnQiOlsiKG5zIG1udy5uZ3JhbVxuICBcIkdyb3VwIHRva2VucyBpbnRvIG4tZ3JhbXNcIlxuICAoOnJlcXVpcmVcbiAgICBbd2lzcC5ydW50aW1lIDpyZWZlciBbZGVjXV1cbiAgICBbd2lzcC5zZXF1ZW5jZSA6cmVmZXIgW3ZlYyByZWR1Y2UgZmlyc3QgcmVzdCBsYXN0IGNvbnMgY29ual1dKSlcblxuKGRlZm4tIHBhZGxcbiAgXCJDcmVhdGUgYSB2ZWN0b3Igd2l0aCBpdGVtIGFzIHRoZSBsYXN0IGVsZW1lbnQgYW5kIG4gbmlsIGVsZW1lbnRzIHBhZGRlZCBcbiAgZnJvbSB0aGUgbGVmdC5cIlxuICBbbiBpdGVtXVxuICAobG9vcCBbcmVzdWx0IFtpdGVtXVxuICAgICAgICAgbiBuXVxuICAgIChpZiAoaWRlbnRpY2FsPyBuIDApXG4gICAgICAodmVjIHJlc3VsdClcbiAgICAgIChyZWN1ciAoY29ucyBuaWwgcmVzdWx0KVxuICAgICAgICAgICAgIChkZWMgbikpKSkpXG5cbihkZWZuLSBuZ3JhbWl6ZVxuICBcIkNyZWF0ZSBhIHZlY3RvciBvZiBuLWdyYW0gdmVjdG9ycy5cIlxuICBbcmVzdWx0IGl0ZW1dXG4gIChjb25qIHJlc3VsdFxuICAgICAgICAoY29uaiAocmVzdCAobGFzdCByZXN1bHQpKSBpdGVtKSkpXG5cbihkZWZuIG5ncmFtXG4gIFwiR3JvdXAgdG9rZW5zIGludG8gbi1ncmFtc1wiXG4gIFtuIHRva2Vuc11cbiAgKHJlZHVjZSBuZ3JhbWl6ZSBcbiAgICAgICAgICBbKHBhZGwgKGRlYyBuKSAoZmlyc3QgdG9rZW5zKSldXG4gICAgICAgICAgKHJlc3QgdG9rZW5zKSkpXG4iXX0=
