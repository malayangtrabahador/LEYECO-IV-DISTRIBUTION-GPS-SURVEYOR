# LEYECO IV GPS Surveyor — PWA (v0.1)
Vanilla HTML/JS, no build step, no CDN, IndexedDB + service worker. Brand #2d3a24.

## Deploy (GitHub Desktop → Pages)
1. New repo (e.g. `leyeco4-surveyor`), copy these 5 files to the repo root: `index.html, sw.js, manifest.json, icon-192.png, icon-512.png`.
2. Commit + push. Repo → Settings → Pages → Deploy from branch `main` / root.
3. Open `https://<user>.github.io/<repo>/` on the phone (HTTPS is required for GPS), then "Add to Home Screen". Open it once online so the shell caches.
4. After changing files, bump `V` in `sw.js` (e.g. `v2`) or phones keep the old cache.

## What works
GPS HUD with accuracy bands (configurable) and 0,0 blocking · pan/zoom map with crosshair and GPS marker · waypoint capture at GPS or crosshair (low-accuracy confirm) · two-tap line tool (LVSD/LV/MV, phase, conductor) with straight-line geodesic length · import legacy TXT (multi-file, raw lines preserved) · export legacy TXT / GeoJSON / CSV / JSON backup · review list (0,0, zero-length, duplicate, >250 m span) with delete · offline storage.

## Known limits (v0.1)
- Photos, equipment/transformer forms, route vertices, HVLine/MVSDLine, server sync: **not built**.
- Basemap is a configurable tile URL (default OSM, for light use). Tiles are cached only as viewed; choose a licensed source for real field use.
- Legacy export of *new* lines fills the unknown fields with the values constant in all 1,749 sample lines, and code 23/26/27 from relations observed in those files. Lines with conductor/phase values outside the observed set (e.g. ABN) are left out of the TXT and you are warned. Set 2 conductor = set 1 (12+ sample lines differ).
- New records get the export time as the file date/time stamp. Not yet tested by loading an export into the original JAED.MAPPS app.
