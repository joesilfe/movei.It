if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return n[e]||(s=new Promise((async s=>{if("document"in self){const n=document.createElement("script");n.src=e,document.head.appendChild(n),n.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!n[e])throw new Error(`Module ${e} didn’t register its module`);return n[e]}))},s=(s,n)=>{Promise.all(s.map(e)).then((e=>n(1===e.length?e[0]:e)))},n={require:Promise.resolve(s)};self.define=(s,r,a)=>{n[s]||(n[s]=Promise.resolve().then((()=>{let n={};const c={uri:location.origin+s.slice(1)};return Promise.all(r.map((s=>{switch(s){case"exports":return n;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return n.default||(n.default=s),n}))})))}}define("./sw.js",["./workbox-ea903bce"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/U517-7MwMcuD1dVgafkke/_buildManifest.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/U517-7MwMcuD1dVgafkke/_ssgManifest.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.3777901cd5d74413e709.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/framework.e3de07479da4f2477dea.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/main-8a9921318b2d07767e17.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/pages/_app-9fdd8b551dcbe567ce5c.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/pages/_error-55e033d84d7eed4980c7.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/pages/index-a9c79207874572c392b3.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/polyfills-aa54647e89713304033b.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/css/3c02c4494be52e65127c.css",revision:"U517-7MwMcuD1dVgafkke"},{url:"/_next/static/css/8e29d530dbc3409854c6.css",revision:"U517-7MwMcuD1dVgafkke"},{url:"/favicon-192.png",revision:"3e145c958ab4615e15ca3680f96973c6"},{url:"/favicon-512.png",revision:"486e3c6f3c6b0f7779d0586c1b936153"},{url:"/favicon.png",revision:"21ce8434e7837eadaf24ced2b03dd889"},{url:"/icons/body.svg",revision:"18605fdc494015a525f4371b41482be3"},{url:"/icons/check.svg",revision:"b27f091981b49aa113b4559cf78f428c"},{url:"/icons/close.svg",revision:"2404197d1ca6dc10c5479c015bae2f3e"},{url:"/icons/eye.svg",revision:"b85f2bb9620fcdab7ade4224f13379a8"},{url:"/icons/level-up.svg",revision:"7a547044b58e1d764b84be4ef7451179"},{url:"/icons/level.svg",revision:"298947622834f4453f39597afd8bc4a3"},{url:"/icons/levelup.svg",revision:"ec7f18718523d269b9da1ceb775c0a74"},{url:"/icons/twitter.svg",revision:"2e01537ffb20284536243a6e1c6a7f75"},{url:"/logo-full.svg",revision:"0c1b6eb5cf2a1709ecafbf43c69353b6"},{url:"/manifest.json",revision:"8b599f798b5f4cc1fc6ce405e975f143"},{url:"/notification.mp3",revision:"28dadfdff0c916fb9a80d665a37fe93f"},{url:"/robots.txt",revision:"c831130286835bbad31f73ad2ce9b76f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:r})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:mp3|mp4)$/i,new e.StaleWhileRevalidate({cacheName:"static-media-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));