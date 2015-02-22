var searchIdx = require('../resources/icd-search-index');
var icdCodes = require('../resources/icd-codes');
var keyword = process.argv.pop();

var indexKeys = [];
if (indexKeys.length === 0) {
    for (var key in searchIdx) {
        indexKeys.push(key.toLowerCase());
    }
}

function getSuggestions(keyword) {
    keyword = keyword.toLowerCase();
    var filtered = indexKeys.filter(function(key) {
        return key.substr(0, keyword.length) === keyword;
    });
    var result = [];
    filtered.forEach(function(name, idx) {
        result = result.concat(searchIdx[name]);
    });
    return result.map(function(key, idx) {
        return icdCodes[key].text;
    });
}

module.exports = {
    suggest: function(keyword) {
        keyword = keyword.toLowerCase();
        var filtered = indexKeys.filter(function(key) {
            return key.indexOf(keyword) >= 0;
        });
        console.log(indexKeys);
    }
}

console.log(getSuggestions(keyword));