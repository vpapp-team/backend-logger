/* eslint-disable no-console */

const main = module.exports = MODULE => ({
  log: (txt, ...args) => {
    console.log(`${(new Date()).toISOString()}|${MODULE}|${txt}|`, ...args);
  },
  debug: (txt, ...args) => {
    console.debug(`${(new Date()).toISOString()}|${MODULE}|${txt}|`, ...args);
  },
  error: (txt, ...args) => {
    console.error(`${(new Date()).toISOString()}|${MODULE}|${txt}|`, ...args);
  },
});
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
