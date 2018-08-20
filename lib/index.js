/* eslint-disable no-console */

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
    console.log(`${(new Date()).toISOString()}|${this._MODULE}|${txt}|`, ...args);
    return this;
  }

  debug(txt, ...args) {
    console.debug(`${(new Date()).toISOString()}|${this._MODULE}|${txt}|`, ...args);
    return this;
  }

  error(txt, ...args) {
    console.error(`${(new Date()).toISOString()}|${this._MODULE}|${txt}|`, ...args);
    return this;
  }
}
module.exports = Logger;
