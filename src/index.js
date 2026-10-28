function greet(name = 'world') {
  return `Hello, ${name}!`;
}

if (require.main === module) {
  console.log(greet(process.argv[2]));
}

module.exports = { greet };
