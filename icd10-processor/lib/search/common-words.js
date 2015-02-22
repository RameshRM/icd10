var commonwords = {
    'is': 'is',
    'was': 'was',
    'this': 'this',
    'that': 'that',
    'due': 'due',
    'to': 'to',
    'and': 'and',
    'other': 'other',
    'of': 'of',
    'a': 'a',
    'are': 'are',
    'were': 'were',
    'the': 'the',
    'where': 'where',
    'be': 'be',
    'because': 'because',
    'he': 'he',
    'she': 'she',
    'it': 'it',
    'unspecified':'unspecified'
};

module.exports = {
    iscommon: function(word) {
        return commonwords[word.toLowerCase()];
    }
}