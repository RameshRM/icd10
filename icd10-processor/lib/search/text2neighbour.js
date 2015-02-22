var text2neighbours = {};
var commonwords = require('./common-words');
var first;

module.exports = {
    build: function(key, value) {
        if (value && (value.before !== '' || value.after !== '')) {
            if (key && value && !commonwords.iscommon(key)) {
                if (!text2neighbours[key]) {
                    text2neighbours[key] = [];
                    text2neighbours[key].push(value);
                } else {
                    var isnew = text2neighbours[key].some(function(neighbour) {
                        if ((neighbour.before !== value.before) || (neighbour.after !== value.after)) {
                            return true;
                        }
                        return false;
                    });
                    if (isnew) {
                        value.key = key;
                        text2neighbours[key].push(value);
                    }
                }
            }
        }
    },
    all: function(callback) {
        callback(null, text2neighbours);
    }
};