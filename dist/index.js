{
    var _ns_ = {
        id: 'mnw.index',
        doc: 'Create a Markov generator'
    };
    var mnw_generator = require('./generator');
    var getGenerator = mnw_generator.getGenerator;
}
{
    var _ns_ = {
        id: 'mnw.macros',
        doc: 'Macros'
    };
}
void 0;
void 0;
var printMultiple = exports.printMultiple = function printMultiple(total, gen) {
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
var main = exports.main = function main(program) {
    return getGenerator().then(printMultiple.bind(void 0, program.count));
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImdldEdlbmVyYXRvciIsInByaW50TXVsdGlwbGUiLCJleHBvcnRzIiwidG90YWwiLCJnZW4iLCJpw7gxIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJwcm9ncmFtIiwiYmluZCIsImNvdW50Il0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQ0EsSSxHQUFEO0FBQUEsUUFBQUMsRSxFQUFJLFdBQUo7QUFBQSxRQUFBQyxHLEVBQ0UsMkJBREY7QUFBQSxNOztRQUcyQkMsWUFBQSxHLGNBQUFBLFk7O0FBRzNCO0FBQUEsUUFBQ0gsSSxHQUFEO0FBQUEsUUFBQUMsRSxFQUFJLFlBQUo7QUFBQSxRQUFBQyxHLEVBQ0UsUUFERjtBQUFBO0FBQUEsQzs7O0FBcUJBLElBQU1FLGFBQUEsR0FBQUMsT0FBQSxDQUFBRCxhQUFBLEdBQU4sU0FBTUEsYUFBTixDQUFxQkUsS0FBckIsRUFBMkJDLEdBQTNCLEVBQ0U7QUFBQSxXOztRQUFPLElBQUFDLEcsR0FBRUYsS0FBRixDOztvQkFDRUUsR0FBSCxHQUFLLENBQVQsRyxhQUVJO0FBQUEsZ0JBQUFDLE9BQUEsQ0FBUUMsR0FBUixDQUFRSCxHQUFELEVBQVA7QUFBQSxnQkFDQSxPLFVBQVVDLEdBQUgsR0FBSyxDQUFaLEUsSUFBQSxDQURBO0FBQUEsYSxDQUFBLEVBRkosRztpQkFES0EsRzs7VUFBUCxDLElBQUE7QUFBQSxDQURGLEM7QUFPQSxJQUFNRyxJQUFBLEdBQUFOLE9BQUEsQ0FBQU0sSUFBQSxHQUFOLFNBQU1BLElBQU4sQ0FBWUMsT0FBWixFQUNFO0FBQUEsV0FDR1QsWUFBRCxFLEtBREYsQ0FFU0MsYUFBTixDQUFDUyxJQUFGLEMsTUFBQSxFQUFrQ0QsT0FBVCxDQUFHRSxLQUE1QixDQUZGO0FBQUEsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbIihucyBtbncuaW5kZXggXG4gIFwiQ3JlYXRlIGEgTWFya292IGdlbmVyYXRvclwiXG4gICg6cmVxdWlyZSBcbiAgICBbbW53LmdlbmVyYXRvciA6cmVmZXIgW2dldEdlbmVyYXRvcl1dKSlcblxuXG4obnMgbW53Lm1hY3JvcyBcbiAgXCJNYWNyb3NcIilcblxuKGRlZm1hY3JvIHByb21pc2lmeVxuICBbbmFtZSBhcmdzICYgYm9keV1cbiAgYChkZWZuIH5uYW1lIH5hcmdzXG4gICAgIChQcm9taXNlLiAoZm4gW3Jlc29sdiByZWplY3RdIH5AYm9keSkpKSlcblxuKGRlZm1hY3JvIC0+XG4gIFwiQ2hhaW4gcHJvbWlzZXNcIlxuICBbJiBvcGVyYXRpb25zXVxuICAocmVkdWNlXG4gICAoZm4gW2Zvcm0gb3BlcmF0aW9uXVxuICAgICAoY29ucyBgLnRoZW5cbiAgICAgICAoaWYgKHZlY3Rvcj8gb3BlcmF0aW9uKSBcbiAgICAgICAgIChjb25zIGZvcm0gb3BlcmF0aW9uKVxuICAgICAgICAgKGxpc3QgZm9ybSBvcGVyYXRpb24pKSkpXG4gICBvcGVyYXRpb25zKSlcblxuXG5cbihkZWZuIHByaW50TXVsdGlwbGUgW3RvdGFsIGdlbl1cbiAgKGxvb3AgW2kgdG90YWxdXG4gICAgKGlmICg+IGkgMClcbiAgICAgIChkb1xuICAgICAgICAocHJpbnQgKGdlbikpXG4gICAgICAgIChyZWN1ciAoLSBpIDEpKSkpKSlcblxuKGRlZm4gbWFpbiBbcHJvZ3JhbV1cbiAgKC0+IFxuICAgIChnZXRHZW5lcmF0b3IpXG4gICAgKC5iaW5kIHByaW50TXVsdGlwbGUgbmlsICguLWNvdW50IHByb2dyYW0pKSkpXG4iXX0=
