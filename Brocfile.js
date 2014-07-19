var jade = require('broccoli-jade');
var mergeTrees = require('broccoli-merge-trees');
var compileSass = require('broccoli-sass');
var autoprefixer = require('broccoli-autoprefixer');
var assetRev = require('broccoli-asset-rev');
var env = require('broccoli-env').getEnv();

var html = jade('templates', {
  basedir: 'templates'
});

var css = compileSass(['styles'], 'main.scss', 'style.css', {
  outputStyle: 'compressed'
});

css = autoprefixer(css);

var assets = 'public';

var tree = mergeTrees([html, css, assets]);

if (env === 'production') {
  tree = assetRev(merged, {
    extensions: ['js', 'css', 'png', 'jpg', 'gif'],
    replaceExtensions: ['html', 'js', 'css'],
  });
}

module.exports = tree;
