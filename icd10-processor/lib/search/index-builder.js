var text2key = require('./text2key-index');
var text2neighbour = require('./text2neighbour');
var commonwords = require('./common-words');

function buildIndex(id, data) {

    data.keywords.forEach(function(keyword, idx, list) {
        if (keyword.length <= 2 || !isNaN(keyword)) {
            return;
        }
        text2key.build(keyword, id);
        var before = list.slice(0, idx).join(' ');
        var after = list.slice(idx + 1).join(' ');

        text2neighbour.build(keyword, {
            'before': before,
            'after': after
        });

    });
}


module.exports.builder = function(events) {
    events.on('new-icd', function(data) {
        if (data && data.keywords) {
            buildIndex(data.id, data);
        }
    });

}