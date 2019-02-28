importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1009e79e046c9c4355e2.js",
    "revision": "8606090ee8214e98579b102db657705d"
  },
  {
    "url": "/_nuxt/19c6e882d1fbe9a396b7.js",
    "revision": "edd0c100dbae962638c57a34d37059c8"
  },
  {
    "url": "/_nuxt/6b0f0e23d9f4fc74a176.js",
    "revision": "7b77f30ccda70d648628e02912f01931"
  },
  {
    "url": "/_nuxt/9da05b09b40df6ebb7a9.js",
    "revision": "8a8c058bae9fe7aec692bd790e11cc6b"
  }
], {
  "cacheId": "portfolio",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
