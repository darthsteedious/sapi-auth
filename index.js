var PACKAGE = './package.json';

var handler = require('./handler');

module.exports = function(namespaces, config) {

    const register = function(server, options, next) {
        namespaces = Array.prototype.slice.apply(namespaces);

        namespaces.forEach(nsp => {

        });
    };

    register.attributes = {
        pkg: require(PACKAGE)
    };

    return register;
};