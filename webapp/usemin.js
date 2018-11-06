'use strict'

var usemin = require('usemin'),
  fs = require('fs');

console.log('running usemin');

usemin('./index.html', 'dist/', {
  htmlmin: true,
  output: 'dist/index.html'
});

//  usemin contactus.html -d dist --htmlmin -o dist/contactus.html
