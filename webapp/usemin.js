'use strict'

var usemin = require('usemin'),
  fs = require('fs'),
  glob = require("glob");

if (!fs.existsSync('dist/templates')){
  fs.mkdirSync('dist/templates', {recursive: true});
}

// options is optional
glob("{.,templates}/*.html", {}, function (er, files) {

  console.log(files);
  for (var i = 0; i < files.length; i++) {

    var f = files[i];

    console.log(files[i]);
    usemin(f, 'dist/', {
      htmlmin: true,
      config: {

        uglifyjs: {
        },
        cleancss: {
        },
        htmlminifier: {
            removeComments: true,
            collapseWhitespace: true,
            removeEmptyAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            minifyJS: true,
            minifyCSS: true,
        },

      },
      output: 'dist/' + f
    });
  }
});

//  usemin contactus.html -d dist --htmlmin -o dist/contactus.html
