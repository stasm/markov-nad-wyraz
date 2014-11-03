{
    var _ns_ = {
        id: 'mnw.generator',
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImdldFByb3ZlcmJzIiwiZXhwb3J0cyIsInBwIiwidHh0IiwicmVzb2x2Iiwic3BsaXQiLCJyZXNldE1hcmtvdkNoYWluIiwicHJvdmVyYnMiLCJ0aXRsZWdlbiIsImZlZWQiLCJnZXRHZW5lcmF0b3IiXSwibWFwcGluZ3MiOiI7SUFBQSxJQUFDQSxJLEdBQUQ7QUFBQSxRQUFBQyxFLEVBQUksZUFBSjtBQUFBLFFBQUFDLEcsRUFDRSwyQkFERjtBQUFBLE07Ozs7Ozs7QUFRQTtBQUFBLFFBQUNGLEksR0FBRDtBQUFBLFFBQUFDLEUsRUFBSSxZQUFKO0FBQUEsUUFBQUMsRyxFQUNFLFFBREY7QUFBQTtBQUFBLEM7OztBQXFCQSxJQUFXQyxXQUFBLEdBQUFDLE9BQUEsQ0FBQUQsV0FBQSxHQUFYLFNBQVdBLFdBQVgsRztpREFDRTtBQUFBLGVBQUNFLEVBQUQsQ0FBSSxVQUFLQyxHQUFMLEVBQ0Y7QUFBQSxtQkFBQ0MsTUFBRCxDQUFnQkQsR0FBUCxDQUFDRSxLQUFGLENBQVksSUFBWixDQUFSO0FBQUEsU0FERjtBQUFBLEs7Q0FERixDO0FBSUEsSUFBTUMsZ0JBQUEsR0FBQUwsT0FBQSxDQUFBSyxnQkFBQSxHQUFOLFNBQU1BLGdCQUFOLENBQXdCQyxRQUF4QixFQUNFO0FBQUEsSUFBT0MsUUFBTixDQUFDQyxJQUFGLENBQWdCRixRQUFoQjtBQUFBLElBQ0EsT0FBQUMsUUFBQSxDQURBO0FBQUEsQ0FERixDO0FBSUEsSUFBTUUsWUFBQSxHQUFBVCxPQUFBLENBQUFTLFlBQUEsR0FBTixTQUFNQSxZQUFOLEdBQ0U7QUFBQSxXQUFLVixXQUFELEUsS0FBSixDQUFrQk0sZ0JBQWxCO0FBQUEsQ0FERiIsInNvdXJjZXNDb250ZW50IjpbIihucyBtbncuZ2VuZXJhdG9yIFxuICBcIkNyZWF0ZSBhIE1hcmtvdiBnZW5lcmF0b3JcIlxuICAoOnJlcXVpcmUgXG4gICAgW3Byb21pc2UgOmFzIFByb21pc2VdXG4gICAgW3BvbGlzaC1wcm92ZXJicyA6YXMgcHBdXG4gICAgW3RpdGxlZ2VuXSkpXG5cblxuKG5zIG1udy5tYWNyb3MgXG4gIFwiTWFjcm9zXCIpXG5cbihkZWZtYWNybyBwcm9taXNpZnlcbiAgW25hbWUgYXJncyAmIGJvZHldXG4gIGAoZGVmbiB+bmFtZSB+YXJnc1xuICAgICAoUHJvbWlzZS4gKGZuIFtyZXNvbHYgcmVqZWN0XSB+QGJvZHkpKSkpXG5cbihkZWZtYWNybyAtPlxuICBcIkNoYWluIHByb21pc2VzXCJcbiAgWyYgb3BlcmF0aW9uc11cbiAgKHJlZHVjZVxuICAgKGZuIFtmb3JtIG9wZXJhdGlvbl1cbiAgICAgKGNvbnMgYC50aGVuXG4gICAgICAgKGlmICh2ZWN0b3I/IG9wZXJhdGlvbikgXG4gICAgICAgICAoY29ucyBmb3JtIG9wZXJhdGlvbilcbiAgICAgICAgIChsaXN0IGZvcm0gb3BlcmF0aW9uKSkpKVxuICAgb3BlcmF0aW9ucykpXG5cblxuXG4ocHJvbWlzaWZ5IGdldFByb3ZlcmJzIFtdXG4gIChwcCAoZm4gW3R4dF0gXG4gICAgKHJlc29sdiAoLnNwbGl0IHR4dCBcIlxcblwiKSkpKSlcblxuKGRlZm4gcmVzZXRNYXJrb3ZDaGFpbiBbcHJvdmVyYnNdXG4gICguZmVlZCB0aXRsZWdlbiBwcm92ZXJicylcbiAgdGl0bGVnZW4pXG5cbihkZWZuIGdldEdlbmVyYXRvciBbXVxuICAoLT4gKGdldFByb3ZlcmJzKSByZXNldE1hcmtvdkNoYWluKSlcbiJdfQ==
