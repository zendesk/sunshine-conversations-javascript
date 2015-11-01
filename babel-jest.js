var babel = require("babel-core");

module.exports = {
  process: function (src, path) {
    if (path.indexOf('node_modules') === -1 &&  babel.util.canCompile(path)) {
      return babel.transform(src, {
        filename: path
      }).code;
    }

    return src;
  }
};
