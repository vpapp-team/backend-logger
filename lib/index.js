/* eslint-disable no-console, max-len */
const CLUSTER = require('cluster');

class Logger {
  constructor() {
    this._MODULE = 'unknown module';
  }

  get is() {
    return {
      BACKEND: () => {
        this._MODULE = 'backend';
        return this;
      },
      API: () => {
        this._MODULE = 'backend-api';
        return this;
      },
      DATA: () => {
        this._MODULE = 'backend-data';
        return this;
      },
      PROXY: () => {
        this._MODULE = 'backend-proxy';
        return this;
      },
      TYPES: () => {
        this._MODULE = 'backend-types';
        return this;
      },
      UTIL: () => {
        this._MODULE = 'backend-util';
        return this;
      },
      CDN: () => {
        this._MODULE = 'backend-cdn';
        return this;
      },
      LOGGER: () => {
        this._MODULE = 'backend-logger';
        return this;
      },
    };
  }

  log(txt, ...args) {
    if (this._MODULE === 'unknown module') throw new Error('module not yet set');
    console.log(`${(new Date()).toISOString()}|${this._MODULE}|${CLUSTER.isMaster ? 'Master' : 'Worker'}|${txt}|`, ...args);
    return this;
  }

  debug(txt, ...args) {
    if (this._MODULE === 'unknown module') throw new Error('module not yet set');
    console.debug(`${(new Date()).toISOString()}|${this._MODULE}|${CLUSTER.isMaster ? 'Master' : 'Worker'}|${txt}|`, ...args);
    return this;
  }

  error(txt, ...args) {
    if (this._MODULE === 'unknown module') throw new Error('module not yet set');
    console.error(`${(new Date()).toISOString()}|${this._MODULE}|${CLUSTER.isMaster ? 'Master' : 'Worker'}|${txt}|`, ...args);
    return this;
  }
}
module.exports = Logger;
