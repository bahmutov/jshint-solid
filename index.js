var fs = require('fs');
var check = require('check-types');
var S = require('string');

function removeComments(src) {
  var lines = S(src).lines();
  lines = lines.map(function (line) {
    return line.replace(/\/\/\ [\w\W]*/, '').trim();
  });
  return lines.join('\n');
}

function getAllSettings() {
  var allSettingsSrc = fs.readFileSync('./allJsHintSettings.js', 'utf-8');
  var withoutComments = removeComments(allSettingsSrc);
  check.verifyUnemptyString(withoutComments, 'expected string without comments');
  var allSettings = JSON.parse(withoutComments);
  return allSettings;
}

var allSettings = getAllSettings();
check.verifyObject(allSettings, 'could not get all jshint settings');

// returns percent 0 - no valid settings, 100 - all settings specified
function settingsPercentage(projectJshintSettings) {
  check.verifyObject(projectJshintSettings, 'expected jshint object');

  return 50;
}

var jshintFilename = './.jshintrc';
if (!fs.existsSync(jshintFilename)) {
  check.verifyUnemptyString(jshintFilename, 'expected jshint filename');
  throw new Error('Cannot find jshint settings file ' + jshintFilename);
}
