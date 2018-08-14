/* eslint-disable no-console */

const main = module.exports = {
  _MODULE: 'unknown module',
  init: function init(MODULE) {
    this._MODULE = MODULE;
  },
  log: function log(txt, ...args) {
    console.log(`${(new Date()).toISOString()}|${this._MODULE}|${txt}|`, ...args);
  },
  debug: function debug(txt, ...args) {
    console.debug(`${(new Date()).toISOString()}|${this._MODULE}|${txt}|`, ...args);
  },
  error: function error(txt, ...args) {
    console.error(`${(new Date()).toISOString()}|${this._MODULE}|${txt}|`, ...args);
  },
};
main.CONSTS = {
  BACKEND: 'backend',
  API: 'backend-api',
  DATA: 'backend-data',
  PROXY: 'backend-proxy',
  TYPES: 'backend-types',
  UTIL: 'backend-util',
  CDN: 'backend-cdn',
  LOGGER: 'backend-logger',
};
