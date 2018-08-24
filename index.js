module.exports = function(name) {
  return ret require('path').join(__dirname, `/gitignore/${name}.gitignore`);
}
