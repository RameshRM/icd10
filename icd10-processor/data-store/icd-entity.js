var entities = {};

module.exports = {
    add: function(key, entity) {
        entities[key] = entity;
    },
    all: function(callback) {
        return callback(null, entities);
    }
};