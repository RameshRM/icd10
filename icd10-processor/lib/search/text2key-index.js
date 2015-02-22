var textToKeyIndex = {};
var commonwords = require('./common-words');

module.exports = {
    build: function(key, value, isdebug) {
        if (key && value && !commonwords.iscommon(key)) {
            if (!textToKeyIndex[key]) {
                textToKeyIndex[key] = [];
            }
            // textToKeyIndex[key] = [];
            textToKeyIndex[key].push(value);
            if(isdebug){
                console.log(textToKeyIndex);
            }
        }
    },
    all: function(callback) {
        callback(null, textToKeyIndex);
    }
};