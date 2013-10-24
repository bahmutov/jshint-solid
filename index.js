var fs = require('fs');
var check = require('check-types');

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
