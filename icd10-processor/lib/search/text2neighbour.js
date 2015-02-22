var text2neighbours = {};
var commonwords = require('./common-words');

module.exports = {
    build: function(key, value) {
        if (key && value) {
            text2neighbours[key] = value;
        }
    },
    all: function(callback) {
        callback(null, text2neighbours);
    }
};