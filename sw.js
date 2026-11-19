const V="leyeco4-surveyor-v1",SHELL=["./","index.html","manifest.json","icon-192.png","icon-512.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V&&x!=="tiles-v1").map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const u=new URL(e.request.url);if(e.request.method!=="GET")return;
 if(u.origin===location.origin){e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));return}
 // map tiles: cache what the surveyor has viewed so it shows offline later
 e.respondWith(caches.open("tiles-v1").then(c=>c.match(e.request).then(h=>h||fetch(e.request).then(r=>{if(r.ok||r.type==="opaque")c.put(e.request,r.clone());return r}).catch(()=>h))))});
