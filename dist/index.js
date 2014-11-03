{
    var _ns_ = {
        id: 'mnw.index',
        doc: 'Create a Markov generator'
    };
    var promise = require('promise');
    var Promise = promise;
    var polishProverbs = require('polish-proverbs');
    var pp = polishProverbs;
    var titlegen = require('titlegen');
}
{
    var _ns_ = {
        id: 'mnw.macros',
        doc: 'Macros'
    };
}
void 0;
void 0;
var getProverbs = exports.getProverbs = function getProverbs() {
    return new Promise(function (resolv, reject) {
        return pp(function (txt) {
            return resolv(txt.split('\n'));
        });
    });
};
var resetMarkovChain = exports.resetMarkovChain = function resetMarkovChain(proverbs) {
    titlegen.feed(proverbs);
    return titlegen;
};
var getGenerator = exports.getGenerator = function getGenerator() {
    return getProverbs().then(resetMarkovChain);
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImdldFByb3ZlcmJzIiwiZXhwb3J0cyIsInBwIiwidHh0IiwicmVzb2x2Iiwic3BsaXQiLCJyZXNldE1hcmtvdkNoYWluIiwicHJvdmVyYnMiLCJ0aXRsZWdlbiIsImZlZWQiLCJnZXRHZW5lcmF0b3IiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFDQSxJLEdBQUQ7QUFBQSxRQUFBQyxFLEVBQUksV0FBSjtBQUFBLFFBQUFDLEcsRUFDRSwyQkFERjtBQUFBLE07Ozs7Ozs7QUFRQTtBQUFBLFFBQUNGLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSxZQUFKO0FBQUEsUUFBQUMsRyxFQUNFLFFBREY7QUFBQTtBQUFBLEM7OztBQXFCQSxJQUFXQyxXQUFBLEdBQUFDLE9BQUEsQ0FBQUQsV0FBQSxHQUFYLFNBQVdBLFdBQVgsRztpREFDRTtBQUFBLGVBQUNFLEVBQUQsQ0FBSSxVQUFLQyxHQUFMLEVBQ0Y7QUFBQSxtQkFBQ0MsTUFBRCxDQUFnQkQsR0FBUCxDQUFDRSxLQUFGLENBQVksSUFBWixDQUFSO0FBQUEsU0FERjtBQUFBLEs7Q0FERixDO0FBSUEsSUFBTUMsZ0JBQUEsR0FBQUwsT0FBQSxDQUFBSyxnQkFBQSxHQUFOLFNBQU1BLGdCQUFOLENBQXdCQyxRQUF4QixFQUNFO0FBQUEsSUFBT0MsUUFBTixDQUFDQyxJQUFGLENBQWdCRixRQUFoQjtBQUFBLElBQ0EsT0FBQUMsUUFBQSxDQURBO0FBQUEsQ0FERixDO0FBSUEsSUFBTUUsWUFBQSxHQUFBVCxPQUFBLENBQUFTLFlBQUEsR0FBTixTQUFNQSxZQUFOLEdBQ0U7QUFBQSxXQUFLVixXQUFELEUsS0FBSixDQUFrQk0sZ0JBQWxCO0FBQUEsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbIihucyBtbncuaW5kZXggXG4gIFwiQ3JlYXRlIGEgTWFya292IGdlbmVyYXRvclwiXG4gICg6cmVxdWlyZSBcbiAgICBbcHJvbWlzZSA6YXMgUHJvbWlzZV1cbiAgICBbcG9saXNoLXByb3ZlcmJzIDphcyBwcF1cbiAgICBbdGl0bGVnZW5dKSlcblxuXG4obnMgbW53Lm1hY3JvcyBcbiAgXCJNYWNyb3NcIilcblxuKGRlZm1hY3JvIHByb21pc2lmeVxuICBbbmFtZSBhcmdzICYgYm9keV1cbiAgYChkZWZuIH5uYW1lIH5hcmdzXG4gICAgIChQcm9taXNlLiAoZm4gW3Jlc29sdiByZWplY3RdIH5AYm9keSkpKSlcblxuKGRlZm1hY3JvIC0+XG4gIFwiQ2hhaW4gcHJvbWlzZXNcIlxuICBbJiBvcGVyYXRpb25zXVxuICAocmVkdWNlXG4gICAoZm4gW2Zvcm0gb3BlcmF0aW9uXVxuICAgICAoY29ucyBgLnRoZW5cbiAgICAgICAoaWYgKHZlY3Rvcj8gb3BlcmF0aW9uKSBcbiAgICAgICAgIChjb25zIGZvcm0gb3BlcmF0aW9uKVxuICAgICAgICAgKGxpc3QgZm9ybSBvcGVyYXRpb24pKSkpXG4gICBvcGVyYXRpb25zKSlcblxuXG5cbihwcm9taXNpZnkgZ2V0UHJvdmVyYnMgW11cbiAgKHBwIChmbiBbdHh0XSBcbiAgICAocmVzb2x2ICguc3BsaXQgdHh0IFwiXFxuXCIpKSkpKVxuXG4oZGVmbiByZXNldE1hcmtvdkNoYWluIFtwcm92ZXJic11cbiAgKC5mZWVkIHRpdGxlZ2VuIHByb3ZlcmJzKVxuICB0aXRsZWdlbilcblxuKGRlZm4gZ2V0R2VuZXJhdG9yIFtdXG4gICgtPiAoZ2V0UHJvdmVyYnMpIHJlc2V0TWFya292Q2hhaW4pKVxuIl19
