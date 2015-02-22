var textToKeyIndex = {};
var commonwords = require('./common-words');

module.exports = {
    build: function(key, value) {
        if (key && value && !commonwords.iscommon(key)) {
            if (!textToKeyIndex[key]) {
                textToKeyIndex[key] = [];
            }
            textToKeyIndex[key] = [];
            textToKeyIndex[key].push(value);
        }
    },
    all: function(callback) {
        callback(null, textToKeyIndex);
    }
};