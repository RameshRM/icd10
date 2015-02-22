var path = require('path');
var fs = require('fs');
var os = require('os');
var icdCodes = [];
var icd;
var icdModel = icd = require('./icd');
var searchIndex = require('./search/text2key-index');
var neighbour = require('./search/text2neighbour');

function processLines(lines) {
    lines.forEach(function(line) {
        if (line) {
            icd = require('./icd').icd();
            icd.code = getIcdAttrPerLine(line, {
                start: 6,
                end: 13
            });
            icd.text = getIcdAttrPerLine(line, {
                start: 16,
                end: 75
            });
            icd.description = getIcdAttrPerLine(line, {
                start: 77,
                end: 376
            });
            icd.save();
        }
    });

    icdModel.all(function(err, result) {
        var outputpath = path.join(__dirname, '../resources/icd-codes.json');
        fs.writeFile(outputpath, JSON.stringify(result), function(err, result) {
            if (err) {
                console.error('unable to save');
            } else {
                console.info('Download file to location:', outputpath);
            }

        });
    });

    searchIndex.all(function(err, result) {
        var outputpath = path.join(__dirname, '../resources/icd-search-index.json');
        fs.writeFile(outputpath, JSON.stringify(result), function(err, result) {
            if (err) {
                console.error('unable to save');
            } else {
                console.info('Download file to location:', outputpath);
            }

        });
    });

    neighbour.all(function(err, result) {
        var outputpath = path.join(__dirname, '../resources/icd-neighbours.json');
        fs.writeFile(outputpath, JSON.stringify(result), function(err, result) {
            if (err) {
                console.error('unable to save');
            } else {
                console.info('Download file to location:', outputpath);
            }

        });
    });

}

function getIcdAttrPerLine(line, pos) {
    return line ? line.substring(pos.start, pos.end).trim() : undefined;
}

module.exports = {
    process: function(fileName) {
        fs.readFile(fileName, function(err, data) {
            processLines(data.toString().split(os.EOL));
        });
    }
}