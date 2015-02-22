var events = require('events').EventEmitter;
var emitter = new events();
require('./search/index-builder').builder(emitter);
var icdentity = require('../data-store/icd-entity');

function icd10() {
    this.code;
    this.text;
    this.description;
}

icd10.prototype = {
    save: function() {
        icdentity.add(this.code, this);
        emitter.emit('new-icd', {
            id: this.code,
            keywords: this.description.split(' ')
        });
    }
}

module.exports.icd = function() {
    var obj = new icd10();
    return obj;
};

module.exports.all = function(callback) {
    icdentity.all(callback);
}