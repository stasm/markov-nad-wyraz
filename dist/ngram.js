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
var bigram = exports.bigram = function bigram(tokens) {
    'Group tokens into bigrams';
    return ngram(2, tokens);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImRlYyIsInZlYyIsInJlZHVjZSIsImZpcnN0IiwicmVzdCIsImxhc3QiLCJjb25zIiwiY29uaiIsInBhZGwiLCJuIiwiaXRlbSIsInJlc3VsdMO4MSIsIm7DuDIiLCJuZ3JhbWl6ZSIsInJlc3VsdCIsIm5ncmFtIiwiZXhwb3J0cyIsInRva2VucyIsImJpZ3JhbSJdLCJtYXBwaW5ncyI6IjtJQUFBLElBQUNBLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSxXQUFKO0FBQUEsUUFBQUMsRyxFQUNFLDJCQURGO0FBQUEsTTs7UUFHMEJDLEdBQUEsRyxhQUFBQSxHOztRQUNDQyxHQUFBLEcsY0FBQUEsRztRQUFJQyxNQUFBLEcsY0FBQUEsTTtRQUFPQyxLQUFBLEcsY0FBQUEsSztRQUFNQyxJQUFBLEcsY0FBQUEsSTtRQUFLQyxJQUFBLEcsY0FBQUEsSTtRQUFLQyxJQUFBLEcsY0FBQUEsSTtRQUFLQyxJQUFBLEcsY0FBQUEsSTs7QUFFM0QsSUFBT0MsSUFBQSxHQUFQLFNBQU9BLElBQVAsQ0FHR0MsQ0FISCxFQUdLQyxJQUhMLEVBSUU7QUFBQSxXOztRQUFPLElBQUFDLFEsR0FBTyxDQUFDRCxJQUFELENBQVAsQztRQUNBLElBQUFFLEcsR0FBRUgsQ0FBRixDOztvQkFDV0csR0FBWixLQUFjLENBQWxCLEdBQ0dYLEdBQUQsQ0FBS1UsUUFBTCxDQURGLEdBRUUsQyxVQUFRTCxJQUFELEMsTUFBQSxFQUFVSyxRQUFWLENBQVAsRSxVQUNRWCxHQUFELENBQUtZLEdBQUwsQ0FEUCxFLElBQUEsQztpQkFKR0QsUSxZQUNBQyxHOztVQURQLEMsSUFBQTtBQUFBLENBSkYsQztBQVdBLElBQU9DLFFBQUEsR0FBUCxTQUFPQSxRQUFQLENBRUdDLE1BRkgsRUFFVUosSUFGVixFQUdFO0FBQUEsV0FBQ0gsSUFBRCxDQUFNTyxNQUFOLEVBQ09QLElBQUQsQ0FBT0gsSUFBRCxDQUFPQyxJQUFELENBQU1TLE1BQU4sQ0FBTixDQUFOLEVBQTJCSixJQUEzQixDQUROO0FBQUEsQ0FIRixDO0FBTUEsSUFBTUssS0FBQSxHQUFBQyxPQUFBLENBQUFELEtBQUEsR0FBTixTQUFNQSxLQUFOLENBRUdOLENBRkgsRUFFS1EsTUFGTCxFQUdFO0FBQUEsV0FBQ2YsTUFBRCxDQUFRVyxRQUFSLEVBQ1EsQ0FBRUwsSUFBRCxDQUFPUixHQUFELENBQUtTLENBQUwsQ0FBTixFQUFlTixLQUFELENBQU9jLE1BQVAsQ0FBZCxDQUFELENBRFIsRUFFU2IsSUFBRCxDQUFNYSxNQUFOLENBRlI7QUFBQSxDQUhGLEM7QUFPQSxJQUFNQyxNQUFBLEdBQUFGLE9BQUEsQ0FBQUUsTUFBQSxHQUFOLFNBQU1BLE1BQU4sQ0FBY0QsTUFBZCxFQUNFO0FBQUE7QUFBQSxJQUNBLE9BQUNGLEtBQUQsQ0FBTyxDQUFQLEVBQVNFLE1BQVQsRUFEQTtBQUFBLENBREYiLCJzb3VyY2VzQ29udGVudCI6WyIobnMgbW53Lm5ncmFtXG4gIFwiR3JvdXAgdG9rZW5zIGludG8gbi1ncmFtc1wiXG4gICg6cmVxdWlyZVxuICAgIFt3aXNwLnJ1bnRpbWUgOnJlZmVyIFtkZWNdXVxuICAgIFt3aXNwLnNlcXVlbmNlIDpyZWZlciBbdmVjIHJlZHVjZSBmaXJzdCByZXN0IGxhc3QgY29ucyBjb25qXV0pKVxuXG4oZGVmbi0gcGFkbFxuICBcIkNyZWF0ZSBhIHZlY3RvciB3aXRoIGl0ZW0gYXMgdGhlIGxhc3QgZWxlbWVudCBhbmQgbiBuaWwgZWxlbWVudHMgcGFkZGVkIFxuICBmcm9tIHRoZSBsZWZ0LlwiXG4gIFtuIGl0ZW1dXG4gIChsb29wIFtyZXN1bHQgW2l0ZW1dXG4gICAgICAgICBuIG5dXG4gICAgKGlmIChpZGVudGljYWw/IG4gMClcbiAgICAgICh2ZWMgcmVzdWx0KVxuICAgICAgKHJlY3VyIChjb25zIG5pbCByZXN1bHQpXG4gICAgICAgICAgICAgKGRlYyBuKSkpKSlcblxuKGRlZm4tIG5ncmFtaXplXG4gIFwiQ3JlYXRlIGEgdmVjdG9yIG9mIG4tZ3JhbSB2ZWN0b3JzLlwiXG4gIFtyZXN1bHQgaXRlbV1cbiAgKGNvbmogcmVzdWx0XG4gICAgICAgIChjb25qIChyZXN0IChsYXN0IHJlc3VsdCkpIGl0ZW0pKSlcblxuKGRlZm4gbmdyYW1cbiAgXCJHcm91cCB0b2tlbnMgaW50byBuLWdyYW1zXCJcbiAgW24gdG9rZW5zXVxuICAocmVkdWNlIG5ncmFtaXplIFxuICAgICAgICAgIFsocGFkbCAoZGVjIG4pIChmaXJzdCB0b2tlbnMpKV1cbiAgICAgICAgICAocmVzdCB0b2tlbnMpKSlcblxuKGRlZm4gYmlncmFtIFt0b2tlbnNdXG4gIFwiR3JvdXAgdG9rZW5zIGludG8gYmlncmFtc1wiXG4gIChuZ3JhbSAyIHRva2VucykpXG4iXX0=
