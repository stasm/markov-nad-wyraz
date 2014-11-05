{
    var _ns_ = {
        id: 'mnw.io',
        doc: 'Fetch the list of proverbs'
    };
    var wisp_runtime = require('wisp/runtime');
    var isNil = wisp_runtime.isNil;
    var wisp_string = require('wisp/string');
    var splitLines = wisp_string.splitLines;
    var fs = require('fs');
    var promise = require('promise');
    var Promise = promise;
    var polishProverbs = require('polish-proverbs');
    var pp = polishProverbs;
}
void 0;
var getFromWiki = exports.getFromWiki = function getFromWiki() {
    return new Promise(function (resolv, reject) {
        return pp(function (txt) {
            return resolv(splitLines(txt));
        });
    });
};
var getFromFile = exports.getFromFile = function getFromFile(filename) {
    return new Promise(function (resolv, reject) {
        return fs.readFile(filename, { 'encoding': 'utf-8' }, function (err, data) {
            return !isNil(err) ? reject(err) : resolv(splitLines(data));
        });
    });
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFub255bW91cy53aXNwIl0sIm5hbWVzIjpbIl9uc18iLCJpZCIsImRvYyIsImlzTmlsIiwic3BsaXRMaW5lcyIsImdldEZyb21XaWtpIiwiZXhwb3J0cyIsInBwIiwidHh0IiwicmVzb2x2IiwiZ2V0RnJvbUZpbGUiLCJmaWxlbmFtZSIsImZzIiwicmVhZEZpbGUiLCJlcnIiLCJkYXRhIiwicmVqZWN0Il0sIm1hcHBpbmdzIjoiO0lBQUEsSUFBQ0EsSSxHQUFEO0FBQUEsUUFBQUMsRSxFQUFJLFFBQUo7QUFBQSxRQUFBQyxHLEVBQ0UsNEJBREY7QUFBQSxNOztRQUcwQkMsS0FBQSxHLGFBQUFBLEs7O1FBQ0RDLFVBQUEsRyxZQUFBQSxVOzs7Ozs7OztBQVV6QixJQUFXQyxXQUFBLEdBQUFDLE9BQUEsQ0FBQUQsV0FBQSxHQUFYLFNBQVdBLFdBQVgsRztpREFDRTtBQUFBLGVBQUNFLEVBQUQsQ0FBSSxVQUFLQyxHQUFMLEVBQ0Y7QUFBQSxtQkFBQ0MsTUFBRCxDQUFTTCxVQUFELENBQWFJLEdBQWIsQ0FBUjtBQUFBLFNBREY7QUFBQSxLO0NBREYsQztBQUlBLElBQVdFLFdBQUEsR0FBQUosT0FBQSxDQUFBSSxXQUFBLEdBQVgsU0FBV0EsV0FBWCxDQUEwQkMsUUFBMUIsRTtpREFDRTtBQUFBLGVBQVdDLEVBQVYsQ0FBQ0MsUUFBRixDQUFjRixRQUFkLEVBQXVCLEUsWUFBVyxPQUFYLEVBQXZCLEVBQ0UsVUFBS0csR0FBTCxFQUFVQyxJQUFWLEVBQ0U7QUFBQSxtQkFBSSxDQUFNWixLQUFELENBQU1XLEdBQU4sQ0FBVCxHQUNHRSxNQUFELENBQVFGLEdBQVIsQ0FERixHQUVHTCxNQUFELENBQVNMLFVBQUQsQ0FBYVcsSUFBYixDQUFSLENBRkY7QUFBQSxTQUZKO0FBQUEsSztDQURGIiwic291cmNlc0NvbnRlbnQiOlsiKG5zIG1udy5pb1xuICBcIkZldGNoIHRoZSBsaXN0IG9mIHByb3ZlcmJzXCJcbiAgKDpyZXF1aXJlXG4gICAgW3dpc3AucnVudGltZSA6cmVmZXIgW25pbD9dXVxuICAgIFt3aXNwLnN0cmluZyA6cmVmZXIgW3NwbGl0LWxpbmVzXV1cbiAgICBbZnNdXG4gICAgW3Byb21pc2UgOmFzIFByb21pc2VdXG4gICAgW3BvbGlzaC1wcm92ZXJicyA6YXMgcHBdKSlcblxuKGRlZm1hY3JvIHByb21pc2lmeVxuICBbbmFtZSBhcmdzICYgYm9keV1cbiAgYChkZWZuIH5uYW1lIH5hcmdzXG4gICAgIChQcm9taXNlLiAoZm4gW3Jlc29sdiByZWplY3RdIH5AYm9keSkpKSlcblxuKHByb21pc2lmeSBnZXQtZnJvbS13aWtpIFtdXG4gIChwcCAoZm4gW3R4dF1cbiAgICAocmVzb2x2IChzcGxpdC1saW5lcyB0eHQpKSkpKVxuXG4ocHJvbWlzaWZ5IGdldC1mcm9tLWZpbGUgW2ZpbGVuYW1lXVxuICAoLnJlYWRGaWxlIGZzIGZpbGVuYW1lIHs6ZW5jb2RpbmcgXCJ1dGYtOFwifVxuICAgIChmbiBbZXJyLCBkYXRhXVxuICAgICAgKGlmIChub3QgKG5pbD8gZXJyKSlcbiAgICAgICAgKHJlamVjdCBlcnIpXG4gICAgICAgIChyZXNvbHYgKHNwbGl0LWxpbmVzIGRhdGEpKSkpKSlcbiJdfQ==
