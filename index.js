#!/usr/bin/env node

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

// returns percent 0 - no valid settings, 100 - all settings specified
function settingsPercentage(projectJshintSettings) {
  check.verifyObject(projectJshintSettings, 'expected jshint object');

  //console.log('looking at jshint settings\n' +
  //  JSON.stringify(projectJshintSettings, null, 2));

  var allSettings = getAllSettings();
  check.verifyObject(allSettings, 'could not get all jshint settings');
  var totalSettings = Object.keys(allSettings).length;
  check.verifyPositiveNumber(totalSettings, 'epected all settings to have properties');

  Object.keys(projectJshintSettings).forEach(function (key) {
    if (typeof allSettings[key] === 'undefined') {
      console.error('unknown setting', key, projectJshintSettings[key]);
    }
  });

  var specifiedSettings = Object.keys(projectJshintSettings).length;

  return (specifiedSettings / totalSettings * 100).toPrecision(2);
}

var jshintFilename = './.jshintrc';
if (!fs.existsSync(jshintFilename)) {
  check.verifyUnemptyString(jshintFilename, 'expected jshint filename');
  throw new Error('Cannot find jshint settings file ' + jshintFilename);
}
var settings = JSON.parse(fs.readFileSync(jshintFilename, 'utf-8'));
check.verifyObject(settings, 'expected jshint settings object');

var quality = settingsPercentage(settings);
console.assert(quality >= 0 && quality <= 100, 'invalid quality value ' + quality);
console.log('jshint', jshintFilename, 'covers', quality + '% of all possible settings');
if (quality < 75) {
  console.log('see all possible settings at\n' +
    'https://raw.github.com/jshint/jshint/master/examples/.jshintrc');
}
