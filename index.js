#!/usr/bin/env node

(function checkForUpdates() {
  var updateNotifier = require('update-notifier');
  var notifier = updateNotifier();
  if (notifier.update) {
    notifier.notify();
  }
}());

var jshintSolid = require('./src/jshint-solid');

if (module.parent) {
  module.exports = jshintSolid;
} else {
  var exists = require('fs').existsSync;
  var jshintrc = process.argv[2];
  if (!process.argv[2]) {
    console.log('trying .jshintrc filename');
    jshintrc = '.jshintrc';
    if (!exists(jshintrc)) {
      var pkg = require('./package.json');
      console.error('usage', pkg.name, '<.jshintrc filename>');
      process.exit(-1);
    }
  }
  jshintSolid(process.argv[2]);
}

