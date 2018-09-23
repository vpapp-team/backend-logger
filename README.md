# backend-logger

[![Greenkeeper badge](https://badges.greenkeeper.io/vpapp-team/backend-logger.svg)](https://greenkeeper.io/)

# class Logger
> howto:
> ```
> before using any of the method, u have to use the functions in is to set which module is used
> ```
> e.g.:
> ```
> const L = new (require('backend-logger'))().is.LOGGER();
> L.log('some log', {foo: 'bar'})
> ```
>
> ## methods
> * log(txt, ...data)
> * debug(txt, ...data)
> * error(txt, ...data)
>
> ## parameter
> * is: object getter
> * is.BACKEND: function()
> * is.API: function()
> * is.DATA: function()
> * is.PROXY: function()
> * is.TYPES: function()
> * is.UTIL: function()
> * is.CDN: function()
> * is.LOGGER: function()
