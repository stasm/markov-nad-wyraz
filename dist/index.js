{
    var _ns_ = {
        id: 'mnw.index',
        doc: 'Create a Markov generator'
    };
    var mnw_generator = require('./generator');
    var getGenerator = mnw_generator.getGenerator;
}
void 0;
void 0;
var printMultiple = function printMultiple(total, gen) {
    return function loop() {
        var recur = loop;
        var iø1 = total;
        do {
            recur = iø1 > 0 ? (function () {
                console.log(gen());
                return loop[0] = iø1 - 1, loop;
            })() : void 0;
        } while (iø1 = loop[0], recur === loop);
        return recur;
    }.call(this);
};
var getGenerator = exports.getGenerator = getGenerator;
var main = exports.main = function main(program) {
    return getGenerator().then(printMultiple.bind(void 0, program.count));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImdldEdlbmVyYXRvciIsInByaW50TXVsdGlwbGUiLCJ0b3RhbCIsImdlbiIsImnDuDEiLCJjb25zb2xlIiwibG9nIiwiZXhwb3J0cyIsIm1haW4iLCJwcm9ncmFtIiwiYmluZCIsImNvdW50Il0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQ0EsSSxHQUFEO0FBQUEsUUFBQUMsRSxFQUFJLFdBQUo7QUFBQSxRQUFBQyxHLEVBQ0UsMkJBREY7QUFBQSxNOztRQUcyQkMsWUFBQSxHLGNBQUFBLFk7Ozs7QUFxQjNCLElBQU9DLGFBQUEsR0FBUCxTQUFPQSxhQUFQLENBQXNCQyxLQUF0QixFQUE0QkMsR0FBNUIsRUFDRTtBQUFBLFc7O1FBQU8sSUFBQUMsRyxHQUFFRixLQUFGLEM7O29CQUNFRSxHQUFILEdBQUssQ0FBVCxHLGFBRUk7QUFBQSxnQkFBQUMsT0FBQSxDQUFRQyxHQUFSLENBQVFILEdBQUQsRUFBUDtBQUFBLGdCQUNBLE8sVUFBVUMsR0FBSCxHQUFLLENBQVosRSxJQUFBLENBREE7QUFBQSxhLENBQUEsRUFGSixHO2lCQURLQSxHOztVQUFQLEMsSUFBQTtBQUFBLENBREYsQztBQU9BLElBQUtKLFlBQUEsR0FBQU8sT0FBQSxDQUFBUCxZQUFBLEdBQWFBLFlBQWxCLEM7QUFFQSxJQUFNUSxJQUFBLEdBQUFELE9BQUEsQ0FBQUMsSUFBQSxHQUFOLFNBQU1BLElBQU4sQ0FBWUMsT0FBWixFQUNFO0FBQUEsV0FDR1QsWUFBRCxFLEtBREYsQ0FFU0MsYUFBTixDQUFDUyxJQUFGLEMsTUFBQSxFQUFrQ0QsT0FBVCxDQUFHRSxLQUE1QixDQUZGO0FBQUEsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbIihucyBtbncuaW5kZXggXG4gIFwiQ3JlYXRlIGEgTWFya292IGdlbmVyYXRvclwiXG4gICg6cmVxdWlyZSBcbiAgICBbbW53LmdlbmVyYXRvciA6cmVmZXIgW2dldEdlbmVyYXRvcl1dKSlcblxuXG4oZGVmbWFjcm8gcHJvbWlzaWZ5XG4gIFtuYW1lIGFyZ3MgJiBib2R5XVxuICBgKGRlZm4gfm5hbWUgfmFyZ3NcbiAgICAgKFByb21pc2UuIChmbiBbcmVzb2x2IHJlamVjdF0gfkBib2R5KSkpKVxuXG4oZGVmbWFjcm8gLT5cbiAgXCJDaGFpbiBwcm9taXNlc1wiXG4gIFsmIG9wZXJhdGlvbnNdXG4gIChyZWR1Y2VcbiAgIChmbiBbZm9ybSBvcGVyYXRpb25dXG4gICAgIChjb25zIGAudGhlblxuICAgICAgIChpZiAodmVjdG9yPyBvcGVyYXRpb24pIFxuICAgICAgICAgKGNvbnMgZm9ybSBvcGVyYXRpb24pXG4gICAgICAgICAobGlzdCBmb3JtIG9wZXJhdGlvbikpKSlcbiAgIG9wZXJhdGlvbnMpKVxuXG5cblxuKGRlZm4tIHByaW50TXVsdGlwbGUgW3RvdGFsIGdlbl1cbiAgKGxvb3AgW2kgdG90YWxdXG4gICAgKGlmICg+IGkgMClcbiAgICAgIChkb1xuICAgICAgICAocHJpbnQgKGdlbikpXG4gICAgICAgIChyZWN1ciAoLSBpIDEpKSkpKSlcblxuKGRlZiBnZXRHZW5lcmF0b3IgZ2V0R2VuZXJhdG9yKVxuXG4oZGVmbiBtYWluIFtwcm9ncmFtXVxuICAoLT5cbiAgICAoZ2V0R2VuZXJhdG9yKVxuICAgICguYmluZCBwcmludE11bHRpcGxlIG5pbCAoLi1jb3VudCBwcm9ncmFtKSkpKVxuIl19
