if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,i,c)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=c(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/alarm.2acb4a12.js",revision:"af25f9fc5bc94a0da6d53b3e2b5b3eea"},{url:"assets/clockApp.315bee0d.css",revision:"50d8b22947a9e906713f0640bd10cd21"},{url:"assets/clockApp.c0ab4d26.js",revision:"965643c78e13f2ccc74b48b6bb845d47"},{url:"assets/contacts.936239ec.js",revision:"6b223e742277e1b8ce8885750614cbea"},{url:"assets/conversation.3807f01e.js",revision:"417ab88f8b7f6ff84e224f760f530caf"},{url:"assets/conversation.bca019f2.css",revision:"088f3cf2ca465a1259602562c0f5c731"},{url:"assets/conversations.6fd26c36.js",revision:"e9b618b9b46fcbf214742edb286467d5"},{url:"assets/conversations.ef33f0cd.css",revision:"f39b1a960a40e1eda088dfc83155dd6a"},{url:"assets/favorites.00888571.js",revision:"4999f99f7902570272df643da9332047"},{url:"assets/homeScreen.deb849fb.css",revision:"8df2b70af72e0fb6f01eb861cfb6bf99"},{url:"assets/homeScreen.fbccbbc5.js",revision:"cd78c84e09e10f631edc8c4658e3028c"},{url:"assets/index.0c644f28.css",revision:"028a64e8b0993d771562e7e62b3f981e"},{url:"assets/keypad.011cffb3.css",revision:"c295925f9ffccd2f48f312178b682a79"},{url:"assets/keypad.afc73554.js",revision:"b7e17b0d62ef12532e9ee6c1e8769224"},{url:"assets/listView.8a034540.css",revision:"874ed9466017c3f8ae2edc83f1609041"},{url:"assets/listView.b01ee7bf.js",revision:"973941525d08deb0d68fdef83c3a189b"},{url:"assets/lockScreen.20eb367d.js",revision:"6c3f92e71937dc20bcfb1f3a6a6c7e79"},{url:"assets/lockScreen.e14cb2dd.css",revision:"dc05054ccd7e8846910310e6e64a9dc6"},{url:"assets/navigationBarButton.75291d21.js",revision:"86e7cee71ae4d33bdf91d92dc07f47e0"},{url:"assets/navigationBarButton.766a3a49.css",revision:"bae286bd5ad43b68d47f4df5f5639310"},{url:"assets/phoneApp.3bfe082c.css",revision:"3d4bbf3898a76853aca49ad530ba18d0"},{url:"assets/phoneApp.6d683247.js",revision:"8a2c1cf6636e707cfab6d0849d91e3d8"},{url:"assets/recents.97db26b2.css",revision:"bcf1d9b5561cdacabde92aa2ba2ae7a2"},{url:"assets/recents.b8732b2e.js",revision:"b62e3e772de52f16f96e046b06c765dd"},{url:"assets/stopwatch.65d66111.js",revision:"c350c0a6cdd50513352aa4b8f21c3a5e"},{url:"assets/store.1ff14714.js",revision:"c3c5f7e1717749a75228109fa7ffb392"},{url:"assets/tabBar.2d73dccd.css",revision:"04f43a2f98ca8d1e49d369850bec665d"},{url:"assets/tabBar.4413e255.js",revision:"29d2b29ac3c16e9c7de51a311b575c7b"},{url:"assets/textApp.e447e67d.js",revision:"55a63578148a301dee7ce5595435dacd"},{url:"assets/timer.9d316f4a.js",revision:"5d18f2a214b797ef19fcc618df0d0e25"},{url:"assets/vendor.4a6d3ba9.js",revision:"984625f90b9d0463b14c96d8fa12fe8a"},{url:"assets/voicemail.8422b8db.js",revision:"7a2e06ae2cbc99530cfd67a775a9c46d"},{url:"assets/worldClock.0a04049e.css",revision:"9001912dfb1a25028172598cf503b229"},{url:"assets/worldClock.a53d409f.js",revision:"1e0fd07e15a7f05adcf46a8d25632b76"},{url:"index.html",revision:"90d3173631a43320cd6c60f2e5237d1f"},{url:"./img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/apple-touch-icon.png",revision:"ae72f7f9f9f1cc48c313b14913da98ee"},{url:"img/icons/favicon-16x16.png",revision:"92ea6336e6d67a974802ec5b8283e6ff"},{url:"img/icons/favicon-32x32.png",revision:"6f79a94f77176070f1f7daf3f6e954fe"},{url:"img/icons/favicon.ico",revision:"5741e8ccc8d9cdf36d3347397bac54a2"},{url:"img/icons/favicon.svg",revision:"031de8aa6aa4f132dedb49deb178e41b"},{url:"img/icons/mstile-150x150.png",revision:"91262d49507df6454290d448acee0ae2"},{url:"img/icons/safari-pinned-tab.svg",revision:"885d5f46c84d53fe4e432c435e838547"},{url:"img/apps/calculatorApp.png",revision:"0f412b280914ec10c4f057fd9e429a40"},{url:"img/apps/calendarApp.png",revision:"e9c8d434713cf4492507fb9bb0dabe57"},{url:"img/apps/cameraApp.png",revision:"a34c52d00d8291aa1b33ac58b5fc080f"},{url:"img/apps/clockApp.png",revision:"54b6cd8dacfca5c5fce4e120e9bea377"},{url:"img/apps/iPodApp.png",revision:"d8475dfd0d13b8a196141c4531b34345"},{url:"img/apps/mailApp.png",revision:"9ad6ea136de10a62218f4f4e1fe2aba9"},{url:"img/apps/mapsApp.png",revision:"c50bba2bc8ba941675d5f0684c6fe7a7"},{url:"img/apps/notesApp.png",revision:"f205f90ed11a27e7eed6c3c786f03bd4"},{url:"img/apps/phoneApp.png",revision:"245b6163a0bffd1419f3a4f80e5de167"},{url:"img/apps/photosApp.png",revision:"6d75f63f61b1e7dd05cbec5ef6b31798"},{url:"img/apps/safariApp.png",revision:"1b7629b356c487980aa13ace51693b69"},{url:"img/apps/settings.png",revision:"da2a7f0775f8598d484416a6b29dc66a"},{url:"img/apps/stocksApp.png",revision:"8ef74e2b37b60d07a8aa2e8de502d84c"},{url:"img/apps/textApp.png",revision:"6c3b1430fa4b5047c0ff6964fe2db1bc"},{url:"img/apps/weatherApp.png",revision:"e71c2a7070db47219db3e61f67313b1c"},{url:"img/apps/youTubeApp.png",revision:"c98f912a736ad07c1e95193e9a1d4aee"},{url:"img/ui/dock.jpg",revision:"a41d649f5c2b81449f8380b781f7736d"},{url:"img/wallpapers/001.jpg",revision:"f03c02bde09cca9507cf04853e17d190"},{url:"img/wallpapers/002.png",revision:"d848622469339b1170484c712290d645"},{url:"img/wallpapers/planet.jpg",revision:"b819ee328f88c1689da3017d6a6c8b5f"},{url:"manifest.webmanifest",revision:"8fbaa5c819ed2445a8f4e59a3cf5f892"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
