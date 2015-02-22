var text2key = require('./text2key-index');
var text2neighbour = require('./text2neighbour');
var events = require('events').EventEmitter;
var commonwords = require('./common-words');
events = new events();

var first;

function buildIndex(id, data) {
    data.keywords.forEach(function(keyword, idx, list) {

        text2key.build(keyword, id);
        var before = list.filter(function(el, elIdx) {
            return idx > elIdx && !commonwords.iscommon(el);
        });
        var after = list.filter(function(el, elIdx) {
            return elIdx > elIdx && !commonwords.iscommon(el);
        });
        if (before.length || after.length) {
            text2neighbour.build(keyword, {
                'before': before,
                'after': after
            });
        }

    });
    if (!first) {
        first = 1;
    }
}


module.exports.builder = function(events) {
    events.on('new-icd', function(data) {
        if (data && data.keywords) {
            buildIndex(data.id, data);
        }
    });

}