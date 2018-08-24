module.exports = function(name) {
  return require('path').join(__dirname, `/gitignore/${name}.gitignore`);
}
