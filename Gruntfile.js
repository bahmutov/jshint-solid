'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: [
        '*.js', 'src/*.js', 'test/*.js'
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
    },

    'nice-package': {
      all: {
        options: {
          blankLine: true
        }
      }
    }
  });

  var plugins = require('matchdep').filterDev('grunt-*');
  plugins.forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['deps-ok', 'jshint', 'nice-package']);
};
