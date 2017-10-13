const fs = require('fs');
const path = require('path');

function WebpackPerformOnBuildPlugin(options) {
  this.start = new Date();
  this.src = options.src;
  this.filesToRemove = options.filesToRemove;
}

WebpackPerformOnBuildPlugin.prototype.apply = function (compiler) {
  compiler.plugin('emit', function onBuild(compilation, callback) {
    const unlinked = [];
    console.log('Files to remove: ', path.resolve(this.src));
    fs.readdir(path.resolve(this.src), function (err, files) {
      if (!files) {
        return console.log('Empty directory');
      }
      files.forEach(file => {
        if (this.filesToRemove.filter(i => file.indexOf(i) >= 0).length) {
          fs.unlink(path.resolve(this.src, file));
          unlinked.push(file);
        }
      });
      if (unlinked.length > 0) {
        console.log('Removed old assets: ', unlinked);
      }
    }.bind(this));
    callback();
  }.bind(this));
}

module.exports = WebpackPerformOnBuildPlugin;