if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise((async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]}))},s=(s,a)=>{Promise.all(s.map(e)).then((e=>a(1===e.length?e[0]:e)))},a={require:Promise.resolve(s)};self.define=(s,c,r)=>{a[s]||(a[s]=Promise.resolve().then((()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(c.map((s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}}))).then((e=>{const s=r(...e);return a.default||(a.default=s),a}))})))}}define("./sw.js",["./workbox-ac8ffed3"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/alarm.9d5100f0.js",revision:"58aa37479cd4b798eefed74a48cd4d37"},{url:"assets/appState.78af13dd.js",revision:"d169de0331411ca89665b6a35a9a3a2a"},{url:"assets/authenticatedLayer.6713f7f7.css",revision:"afc78f68156bf39828d37712e4b4ecf2"},{url:"assets/authenticatedLayer.a2035043.js",revision:"a6779c1eae06dd17dda634374b986887"},{url:"assets/calling.77001039.css",revision:"bd3dc628a3f2bf26e3c0cd2d758bd978"},{url:"assets/calling.9765a796.js",revision:"28c6924cdc88ad776f8e767b5cded1f7"},{url:"assets/clockApp.00b64049.css",revision:"2c43eef25b92c1158b9835a074a1b036"},{url:"assets/clockApp.73026ef4.js",revision:"2a2b92e30a8df2f8673eb8d310a864de"},{url:"assets/comingSoon.69ea7e00.js",revision:"6cf3beb6e69a895586780c5867abceda"},{url:"assets/contact.20936168.js",revision:"1b6bdf941a412bf36d0dac10f861891c"},{url:"assets/contact.a55006c6.css",revision:"44ce4056b7787615f2d518767e0ea318"},{url:"assets/contacts.5ace418a.js",revision:"53b613d9664a5ab60595b59c3628bfbb"},{url:"assets/conversation.60998dd2.js",revision:"d309893b3802c817d1c66133504babe7"},{url:"assets/conversation.db9c80af.css",revision:"68e2324a83cf9d40137e06c5ca7c4f54"},{url:"assets/conversations.7511f499.css",revision:"d0bd10cb11730c5d26516b48861bd95d"},{url:"assets/conversations.8f5a398d.js",revision:"d328f3fc484955e1ed97cec93f5dfc1a"},{url:"assets/deviceState.a78d056a.js",revision:"1cb45247e6369a5251dea4b9049aad99"},{url:"assets/entryLayer.27a8f0f4.css",revision:"1d9eba0b04a668b24a208f1c6f13ea1c"},{url:"assets/entryLayer.673a7fae.js",revision:"c3f79cfc32064c286d6f592590d178f3"},{url:"assets/favorites.fe8c45fc.js",revision:"ce10563fe4fe7b8d9d6afa105c18c784"},{url:"assets/homeScreen.ac9a15cf.css",revision:"a718127cfa04bd0283b09dcb3ea37f7d"},{url:"assets/homeScreen.bc697649.js",revision:"0349d019500f53c71fca6d4767b647dd"},{url:"assets/index.6b3ea888.js",revision:"2f94aad2fad69f293a30e9c996e35367"},{url:"assets/index.b9151320.css",revision:"8264a763539f8e27b0c5f017512754d3"},{url:"assets/index.cc4b6a56.js",revision:"a98412d4c51b69621901858b289c4538"},{url:"assets/installationLayer.31c07662.css",revision:"9e1731515d21a076717f8a6b26bb2b5c"},{url:"assets/keypad.0a5bc83a.js",revision:"8ecbfb7b06bdb355b81283801b937525"},{url:"assets/keypad.5e1e940a.css",revision:"943c7f7cb730bc55cf4c248ae3165560"},{url:"assets/listView.81559676.js",revision:"ca5d888b3591aa9cc29287a1076ecfc6"},{url:"assets/listView.d505a2fd.css",revision:"6af22fd2ce1f685d8ec5441af489f43e"},{url:"assets/navigationBarButton.5a5c9bb2.css",revision:"0e219bad96ff59fe09b90bf33f144df5"},{url:"assets/navigationBarButton.b6626f70.js",revision:"680fcf55f326e365db9228c3659eb1db"},{url:"assets/phoneApp.14e3668f.css",revision:"64d5e15a2ffe92dc3b8899dec34208fa"},{url:"assets/phoneApp.535d2882.js",revision:"c9b995bacd5ee2d7ae8a6621260fbc09"},{url:"assets/recents.1bd79811.js",revision:"b06a25997ec8f10c64210025a4d0d2d5"},{url:"assets/recents.cb65037d.css",revision:"65b79c85e3c133c234ba2ec88443cc81"},{url:"assets/stopwatch.91a8abf7.js",revision:"c197072c8dc13061bec7c0b0ab0ddd5e"},{url:"assets/store.16625c72.js",revision:"3d6a36e51a5f6134f72d75ed26c1d54e"},{url:"assets/tabBar.2d73dccd.css",revision:"04f43a2f98ca8d1e49d369850bec665d"},{url:"assets/tabBar.a07a837f.js",revision:"a7f59ef1c263d7e62b9c046c5cf60abe"},{url:"assets/textApp.29801468.css",revision:"fcbae7376611c275efec69b02e25da47"},{url:"assets/textApp.a111f1f5.js",revision:"71a49c90553a51abbc7d37361938c0aa"},{url:"assets/timer.944f11d9.js",revision:"e103a1ce5df8e5ccdc9080ae6ad2ed84"},{url:"assets/toggleButton.3e946e0f.js",revision:"3946b7c669228fb3f1720b0a5518653f"},{url:"assets/toggleButton.973ed10c.css",revision:"92961c2ac0b253edb375840c54878b4f"},{url:"assets/unauthenticatedLayer.96c2393e.css",revision:"7c4c89ce8cbbe2d2c1494eaa4c7c4e30"},{url:"assets/unauthenticatedLayer.9bdeaf81.js",revision:"3210c58ceb9c14d12e40736f1b69a0ef"},{url:"assets/vendor.1c3aff63.js",revision:"7d59fe6934979cef364317e282b88c51"},{url:"assets/voicemail.bd820ebd.js",revision:"bc7c6709ab13597d5e003cadf0739b1c"},{url:"assets/workbox-window.prod.es5.28eaf433.js",revision:"18cc6448dbf32c3b09762fea87235c8f"},{url:"assets/worldClock.51781e80.js",revision:"f18ed20289bab2de70f24e7aca28d8c6"},{url:"assets/worldClock.8ab548b4.css",revision:"6ed649caf2df9bb74ed0ce075e31d0bd"},{url:"index.html",revision:"824f9d0b5c0d54c2439e274daccec71d"},{url:"./img/icons/android-chrome-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"./img/icons/android-chrome-maskable-192x192.png",revision:"988f463f87e8225b7c0a055ba1f1bc78"},{url:"./img/icons/android-chrome-maskable-512x512.png",revision:"bea17c258ca8f429c0c0bb1d98d6b7d9"},{url:"img/wallpapers/planet.webp",revision:"e95b332a3eec8587557fc3deebe8079a"},{url:"manifest.webmanifest",revision:"8fbaa5c819ed2445a8f4e59a3cf5f892"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map
