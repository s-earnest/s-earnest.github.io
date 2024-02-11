const resource = [
  /* --- CSS --- */
  '/halloween/assets/css/jekyll-theme-chirpy.css',

  /* --- PWA --- */
  '/halloween/app.js',
  '/halloween/sw.js',

  /* --- HTML --- */
  '/halloween/index.html',
  '/halloween/404.html',

  
    '/halloween/categories/',
  
    '/halloween/tags/',
  
    '/halloween/archives/',
  
    '/halloween/about/',
  

  /* --- Favicons & compressed JS --- */
  
  
    '/halloween/assets/img/favicons/android-chrome-192x192.png',
    '/halloween/assets/img/favicons/android-chrome-512x512.png',
    '/halloween/assets/img/favicons/apple-touch-icon.png',
    '/halloween/assets/img/favicons/favicon-16x16.png',
    '/halloween/assets/img/favicons/favicon-32x32.png',
    '/halloween/assets/img/favicons/favicon.ico',
    '/halloween/assets/img/favicons/mstile-150x150.png',
    '/halloween/assets/img/favicons/site.webmanifest',
    '/halloween/assets/js/dist/categories.min.js',
    '/halloween/assets/js/dist/commons.min.js',
    '/halloween/assets/js/dist/home.min.js',
    '/halloween/assets/js/dist/misc.min.js',
    '/halloween/assets/js/dist/page.min.js',
    '/halloween/assets/js/dist/post.min.js'
];

/* The request url with below domain will be cached */
const allowedDomains = [
  

  'localhost:4000',

  

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [];

