module.exports = function(name) {
  const ret = require('path').resolve(`./node_modules/gitignore-templates/gitignore/${name}.gitignore`);
  return ret;
}
