const CACHE='prag-reise-v1-20260830-v110';
const CORE=['./','./index.html','./styles.css?v=1.1.0','./trip-data.js?v=1.1.0','./app.js?v=1.1.0','./manifest.json','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 if(url.origin===location.origin){
   e.respondWith(fetch(e.request).then(r=>{const clone=r.clone();caches.open(CACHE).then(c=>c.put(e.request,clone));return r;}).catch(()=>caches.match(e.request).then(hit=>hit||caches.match('./index.html'))));
 }
});
