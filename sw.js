// Service worker minimo: rende l'app installabile. Nessuna cache offline per ora.
self.addEventListener("install", (e) => self.skipWaiting());
self.addEventListener("activate", (e) => self.clients.claim());
self.addEventListener("fetch", () => {});
