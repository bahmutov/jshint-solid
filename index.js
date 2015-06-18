#!/usr/bin/env node

var pkg = require('./package.json');

(function checkForUpdates() {
  var updateNotifier = require('update-notifier');
  updateNotifier({
    pkg: pkg,
    name: pkg.name,
    version: pkg.version
  }).notify();
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
      console.error('usage', pkg.name, '<.jshintrc filename>');
      process.exit(-1);
    }
  }
  jshintSolid(process.argv[2]);
}

