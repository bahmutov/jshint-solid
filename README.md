# jshint-solid

How solid is your jshint settings file? Does it specify all settings?

[![NPM][jshint-solid-icon]][jshint-solid-url]

[![Build status][jshint-solid-ci-image]][jshint-solid-ci-url]
[![Coverage Status][jshint-solid-coverage-image]][jshint-solid-coverage-url]
[![dependencies][jshint-solid-dependencies-image]][jshint-solid-dependencies-url]
[![devdependencies][jshint-solid-devdependencies-image]][jshint-solid-devdependencies-url]
[![endorse][endorse-image]][endorse-url]

## Installation and use

Requires [node](http://nodejs.org/)

    npm install -g jshint-solid

    jshint-solid
    // prints how solid .jshintrc is inside the current project

    jshint-solid customJshintSettings.json
    // prints how solid settings in customJshintSettings.json are

Using from external projects

    npm install jshint-solid --save
    var measure = require('jshint-solid');
    var quality = measure('./jshintrc');
    // quality is between 0 and 100

There is a [grunt-jshint-solid](https://github.com/bahmutov/grunt-jshint-solid) plugin.

## Why?

See my [Tightening JsHint](http://bahmutov.calepin.co/tightening-jshint.html) blog post.

## Small print

Author: Gleb Bahmutov &copy; 2013

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[jshint-solid-icon]: https://nodei.co/npm/jshint-solid.png?downloads=true
[jshint-solid-url]: https://npmjs.org/package/jshint-solid
[jshint-solid-ci-image]: https://travis-ci.org/bahmutov/jshint-solid.png?branch=master
[jshint-solid-ci-url]: https://travis-ci.org/bahmutov/jshint-solid
[jshint-solid-coverage-image]: https://coveralls.io/repos/bahmutov/jshint-solid/badge.png
[jshint-solid-coverage-url]: https://coveralls.io/r/bahmutov/jshint-solid
[jshint-solid-dependencies-image]: https://david-dm.org/bahmutov/jshint-solid.png
[jshint-solid-dependencies-url]: https://david-dm.org/bahmutov/jshint-solid
[jshint-solid-devdependencies-image]: https://david-dm.org/bahmutov/jshint-solid/dev-status.png
[jshint-solid-devdependencies-url]: https://david-dm.org/bahmutov/jshint-solid#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
