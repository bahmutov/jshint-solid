#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
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
  var filename = path.join(__dirname, 'allJsHintSettings.js');
  var allSettingsSrc = fs.readFileSync(filename, 'utf-8');
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

function printMessage(quality, filename) {
  console.assert(quality >= 0 && quality <= 100, 'invalid quality value ' + quality);

  filename = filename || '';
  console.log('jshint %s covers %d% of all possible settings',
    filename, quality);
  if (quality < 75) {
    console.log('see all possible settings at\n' +
      'https://raw.github.com/jshint/jshint/master/examples/.jshintrc');
  }
}

function jshintQuality(filename) {
  var jshintFilename = filename || './.jshintrc';
  if (!fs.existsSync(jshintFilename)) {
    check.verifyUnemptyString(jshintFilename, 'expected jshint filename');
    throw new Error('Cannot find jshint settings file ' + jshintFilename);
  }
  var settings = JSON.parse(fs.readFileSync(jshintFilename, 'utf-8'));
  check.verifyObject(settings, 'expected jshint settings object');

  var quality = settingsPercentage(settings);
  console.assert(quality >= 0 && quality <= 100, 'invalid quality value ' + quality);

  printMessage(quality, jshintFilename);
  return quality;
}

if (module.parent) {
  module.exports = jshintQuality;
} else {
  jshintQuality(process.argv[2]);
}

