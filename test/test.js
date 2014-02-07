/* global gt */
gt.module('jshint-solid');

var join = require('path').join;
var solid = require('../index');

gt.test('basics', function () {
  gt.func(solid, 'exports a function');
});

gt.test('.jshintrc', function () {
  var filename = join(__dirname, '../.jshintrc');
  var grade = solid(filename);
  gt.equal(typeof grade, 'number', 'returns number');
  gt.ok(grade > 0 && grade < 100, 'invalid jshint grade', grade);
});
