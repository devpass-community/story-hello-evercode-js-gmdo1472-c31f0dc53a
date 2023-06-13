const hello = require('./hello');

const name = "Evercode";
const helloMessage = hello(name);
module.exports = helloMessage
console.log(helloMessage);