function hello(str) {
    return `Hello,  ${str}!`.replace(/[,!]/g, '')
};

module.exports = hello;