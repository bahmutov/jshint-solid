# jshint-solid

How solid is your jshint settings file? Does it specify all settings?

[![NPM info][nodei.co]](https://npmjs.org/package/jshint-solid)

[![Build status][ci-image]][ci-url]
[![dependencies][dependencies-image]][dependencies-url]
[![devdependencies][devdependencies-image]][devdependencies-url]
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

## Small print

Author: Gleb Bahmutov &copy; 2013

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet / open issue on Github

[ci-image]: https://travis-ci.org/bahmutov/jshint-solid.png?branch=master
[ci-url]: https://travis-ci.org/bahmutov/jshint-solid
[nodei.co]: https://nodei.co/npm/jshint-solid.png?downloads=true
[dependencies-image]: https://david-dm.org/bahmutov/jshint-solid.png
[dependencies-url]: https://david-dm.org/bahmutov/jshint-solid
[devdependencies-image]: https://david-dm.org/bahmutov/jshint-solid/dev-status.png
[devdependencies-url]: https://david-dm.org/bahmutov/jshint-solid#info=devDependencies
[endorse-image]: https://api.coderwall.com/bahmutov/endorsecount.png
[endorse-url]: https://coderwall.com/bahmutov
