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
  jshintSolid(process.argv[2]);
}

