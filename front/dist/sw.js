if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,i)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const r={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return r;default:return e(s)}}))).then((e=>{const s=i(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/calculatorApp.8e46971e.js",revision:"c6b66ce066003554836bf8ea963e1991"},{url:"assets/calendarApp.254479b5.js",revision:"4dca46148a4e986862130c775157772a"},{url:"assets/calendarApp.a7e13ac3.js",revision:"e39a016ca67e396c340da79154040eff"},{url:"assets/calendarApp.afbf515c.css",revision:"cfec7b576cf38c929a32f1f2fd5dd3ff"},{url:"assets/cameraApp.1f7d8b24.js",revision:"4a6015d2867e6db11a6f54fb6cc36ce4"},{url:"assets/clockApp.53d9a313.js",revision:"c6b66ce066003554836bf8ea963e1991"},{url:"assets/clockApp.a1f3aacf.js",revision:"1836ebcfa00f1d4da158816e847a7e9d"},{url:"assets/clockApp.c32e7b48.css",revision:"ec92711f78fb9a0ea2adc73f0f4059f3"},{url:"assets/homeScreen.26c6b06a.js",revision:"14478463038c6ae1c3ecaed37c236f23"},{url:"assets/homeScreen.37bb8a43.css",revision:"5b27c740510be30f4ffa48dc99182c14"},{url:"assets/iconGlare.7d60661e.css",revision:"94010441911f79b1c4eb30dfb83b6a2e"},{url:"assets/iconGlare.8d8d820e.js",revision:"afc956e722399c1ba24a9b23324f41cd"},{url:"assets/iconHead.4171a6f3.js",revision:"5965e0cf74a9ad36acc617cbc8d5068f"},{url:"assets/iconHead.5d09e63a.css",revision:"cdc9ce15682743849affa5cc9378bcc5"},{url:"assets/index.1358b134.css",revision:"87ad4b93ee2f1a8fd948d1654cde2fbc"},{url:"assets/index.2d45fc20.css",revision:"549c1e371cd9cc2376490fe950d493b7"},{url:"assets/index.344f38b5.js",revision:"d59109d6d51df27291682899888972c3"},{url:"assets/index.4f7e148e.js",revision:"7f0c8b7a9a9202846ba2132f8a3644dd"},{url:"assets/iPodApp.36b69d97.js",revision:"9370899d9ec133b320287b542761a25b"},{url:"assets/iPodApp.4ea2c559.js",revision:"97c843f7662f4cbaf16fa8b6e0108110"},{url:"assets/iPodApp.642a3a2a.css",revision:"62070f663f611044fbd029ad0a5e3b2a"},{url:"assets/mailApp.db80e474.js",revision:"9f5918a8974bf2a1ca3975867a5f6b87"},{url:"assets/mapsApp.f53c5539.js",revision:"78d8b239940ef3a7605ab78470af129b"},{url:"assets/notesApp.34401b67.js",revision:"630d13bf26ba46201d48c8a10193347b"},{url:"assets/notesApp.f3d44f6c.css",revision:"5f7ca55d25a25d2e59fc8699c7b58579"},{url:"assets/noteScreen.33885cdb.js",revision:"70b0e448a29a461747b78bc9edd5f386"},{url:"assets/noteScreen.7a985b07.css",revision:"5b2e1999784ce996c98de119ce6bf01c"},{url:"assets/phoneApp.0bbae9e1.js",revision:"2f4ab3f28248dd346e1588831c3497d6"},{url:"assets/phoneApp.2b99d60b.css",revision:"42cf1d22cb35ffe2f9fe251ad140c92a"},{url:"assets/phoneApp.724a8587.js",revision:"aae6a691c75b560445fb81ee0dadaa50"},{url:"assets/photosApp.d737f545.js",revision:"bab74dd94ce789f75d2b1fa0694e05f6"},{url:"assets/safariApp.6b49b3ca.js",revision:"38ae5969519f0238adcdc145a4c8531b"},{url:"assets/settings.3ce15e46.js",revision:"c6b66ce066003554836bf8ea963e1991"},{url:"assets/startScreen.6f351972.js",revision:"66be03e8d375a3db1411381c22440884"},{url:"assets/startScreen.76257b3d.css",revision:"62af575d57063e1a7367d754cec482c7"},{url:"assets/stocksApp.1f1ebe29.js",revision:"7d85c947aee4f777566c80fc9f800f84"},{url:"assets/tempIcon.b76dcd65.js",revision:"3a7bb94bd2878c1801f334bd647e7cc8"},{url:"assets/textApp.1502a202.js",revision:"e031aedb486e81770b2b23fef16e9d58"},{url:"assets/textApp.1881b8dc.js",revision:"3a5c1e9d757df728f5ac8690d3128dbc"},{url:"assets/textApp.8839ca57.css",revision:"c8b6addc7b1ec5a63f4f3fe05d4ab406"},{url:"assets/textApp.d29d1dbd.css",revision:"a19f035b3a020fcf68f85a598ffe7c42"},{url:"assets/vendor.41e2d907.js",revision:"6e874b47d82e1b13ed8a5223cba647aa"},{url:"assets/weatherApp.5e60ce80.js",revision:"cc3c33ff7fe242ee2b856300a84960a9"},{url:"assets/youTubeApp.44b02b3f.js",revision:"1e78efdecacc7e1c3df48efa556bf24b"},{url:"index.html",revision:"b677db775514e77e7a38847bdff0074e"},{url:"./img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/apps/calculatorApp.png",revision:"0f412b280914ec10c4f057fd9e429a40"},{url:"img/apps/calendarApp.png",revision:"e9c8d434713cf4492507fb9bb0dabe57"},{url:"img/apps/cameraApp.png",revision:"a329d656cb0b44d16b26eaea20df75ea"},{url:"img/apps/clockApp.png",revision:"667a6e6b8c02e540be947b241ebbfd6e"},{url:"img/apps/iPodApp.png",revision:"d8475dfd0d13b8a196141c4531b34345"},{url:"img/apps/mailApp.png",revision:"9ad6ea136de10a62218f4f4e1fe2aba9"},{url:"img/apps/mapsApp.png",revision:"c50bba2bc8ba941675d5f0684c6fe7a7"},{url:"img/apps/notesApp.png",revision:"f320ebe6f95ad0806cd308ea6198e462"},{url:"img/apps/phoneApp.png",revision:"245b6163a0bffd1419f3a4f80e5de167"},{url:"img/apps/photosApp.png",revision:"6d75f63f61b1e7dd05cbec5ef6b31798"},{url:"img/apps/safariApp.png",revision:"1b7629b356c487980aa13ace51693b69"},{url:"img/apps/settings.png",revision:"da2a7f0775f8598d484416a6b29dc66a"},{url:"img/apps/stocksApp.png",revision:"8ef74e2b37b60d07a8aa2e8de502d84c"},{url:"img/apps/textApp.png",revision:"6c3b1430fa4b5047c0ff6964fe2db1bc"},{url:"img/apps/weatherApp.png",revision:"e71c2a7070db47219db3e61f67313b1c"},{url:"img/apps/youTubeApp.png",revision:"c98f912a736ad07c1e95193e9a1d4aee"},{url:"img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/icons/apple-touch-icon.png",revision:"ae72f7f9f9f1cc48c313b14913da98ee"},{url:"img/icons/favicon-16x16.png",revision:"92ea6336e6d67a974802ec5b8283e6ff"},{url:"img/icons/favicon-32x32.png",revision:"6f79a94f77176070f1f7daf3f6e954fe"},{url:"img/icons/favicon.ico",revision:"5741e8ccc8d9cdf36d3347397bac54a2"},{url:"img/icons/favicon.svg",revision:"031de8aa6aa4f132dedb49deb178e41b"},{url:"img/icons/mstile-150x150.png",revision:"91262d49507df6454290d448acee0ae2"},{url:"img/icons/safari-pinned-tab.svg",revision:"885d5f46c84d53fe4e432c435e838547"},{url:"img/ui/dock.jpg",revision:"a41d649f5c2b81449f8380b781f7736d"},{url:"img/ui/dock.png",revision:"548b82300f5d08ebe89d56728e842027"},{url:"img/wallpapers/001.jpg",revision:"f03c02bde09cca9507cf04853e17d190"},{url:"manifest.webmanifest",revision:"8fbaa5c819ed2445a8f4e59a3cf5f892"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
