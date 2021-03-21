const { HttpPublisher } = require("electron-publish/out/publisher");
const { httpExecutor } = require("builder-util/out/nodeHttpExecutor");
const mime = require("mime");
const { configureRequestOptions } = require("builder-util-runtime");
const { Arch } = require("builder-util");
const { createReadStream, stat } = require("fs-extra-p");
const { basename, join } = require("path");

console.debug = function(...args) {
  if(process.env.DEBUG) console.log(`\x1b[33m[DEBUG] \x1b[0m`, ...args);
}

class Publisher extends HttpPublisher {
  async upload(task) {
    console.debug(task);
  }
}
  
module.exports = {
  default: Publisher
};
