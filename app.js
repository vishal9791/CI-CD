// simple module + CLI
function add(a, b) {
  return a + b;
}

if (require.main === module) {
  console.log('Hello, world!');
} else {
  module.exports = { add };
}
