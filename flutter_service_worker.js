'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "e40b7bd1621c8fcfa6661beb3495013b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c04cb103046d3da9f10a7efb2487af26",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5c0fe8e59f32cd1302572d14b23e260a",
".git/logs/refs/heads/main": "0b6a313d341059e5a1b0ac7df2554d99",
".git/logs/refs/remotes/origin/main": "fc2852286a6892b7d97b58c8c071f750",
".git/objects/00/a3caca724b223da89a48fc5f67a18302655bab": "b4bae21568131791bdc1dbd062e4607d",
".git/objects/04/11ce14cdb56e48385edb9e694b681f0f0a1311": "112a6c57da4d5fd9971d3f92d94df567",
".git/objects/0d/676811c52bd978cc8dd7550810554ea1a19fec": "9bb651eb758a990dde750fe15b8d9dc2",
".git/objects/12/a2c2c8eef5a0e794b25c33db627752c16b72fa": "bf486896f94ee9230d6e4f6a677e6f22",
".git/objects/18/6b6a4a9dfa306ecb7dcb2b0cc67326f3ca65f5": "ca23744c899d60d21bb6fcd565d138e2",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/24/3919516f449240847a9217142a0c5724977933": "158690aecfa6bd39bf484aa5519e29bd",
".git/objects/27/146e6e3678d1b37c8f6e200e5fceb7ab28b488": "32f3b001d6d7d16fa688531fe22a0506",
".git/objects/29/0288c3990d05f6f300ef4b901b9c7f1d06be44": "da3a2edefeb4dd083fe81bd1354e0cf3",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/31/64090df572adaa2999c21b2054f9c2a7981057": "1da5e024bfef227803d8b0735b16c4ca",
".git/objects/31/fb3575bdcc13f2f98d9bcb86f0057c45be9c75": "071423074f96363d646593b08cf827e6",
".git/objects/39/42b2e0e71b3ed251db1192acc134b25548bd3d": "7fcf176a25bf65637c1c7bb8b7f1e228",
".git/objects/39/b3474fb23676f616e5ae45d9a32da46d6ea312": "ad5773835016b2a035828b819c7cd47e",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/41/259d8b1f18fc0df2b4cbf5f3dbc5511c38eb45": "907f6c20c24b3108538fc84e7f893b2b",
".git/objects/45/e96bbdbac17b671d9e96ba0663329865953153": "5f4eda2c42014aafdd64bc17522264a8",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d8eb09a0ef7fd501b0570c2380a18de341b7fa": "9c2b2334682fddebb3a4067216709e07",
".git/objects/48/ee21383d48dbf3f6fe54a2445bddadd4081394": "bf1202510a057302303a777087baa0a1",
".git/objects/50/dda940e4cfb24560e69724647302cd562df26d": "6dd4ed2ca4d6ce70fcd377bce7b3db7f",
".git/objects/5e/9bb4d86d02dbd067dbababc799f3497d16df8d": "28fa9467ae6b27357f62ee224c66b922",
".git/objects/79/47af64587e99eacf5dc714a1c132b0040e846c": "e3b56e75f1f95515380ffd8ed90df197",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7d/df61844cc05e17067bb5a91788f088f873eacd": "5ff492f0c6c0e9568c83d36b60471118",
".git/objects/81/5f6abace1939880bee56f9254178573dfa291c": "51b9a09521ab1fe78a0f3fd2855bd937",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/4708a9c3c0f93fd27f2e40eb72582544888097": "2acf5ed65e2362ebf813304c49b1767b",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/a7b6e6c733244317a67471b8ec50b5ee58e46e": "ad2796b5628ef150ea7ab17cd5cd8b0a",
".git/objects/b5/ab953235c69b8525214eb4921dba21b6f1327a": "a2e8f456f3e00dbcb322f687db6927b9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/d1fef609b87885b9dc3cc370afd52893ace8e4": "14df14b985ec02e526def2022d8eca6c",
".git/objects/fc/caf61c97f1e31f18c0a2fb1341722be764662b": "784c7935ee51f8e69f6ad5f7bd42b1e0",
".git/refs/heads/main": "ade6debf6f4f8261f1631741a795381e",
".git/refs/remotes/origin/main": "ade6debf6f4f8261f1631741a795381e",
"assets/AssetManifest.json": "6ebf2a5586d137391524cb148b18475d",
"assets/assets/images/%25C3%25AEs%25C3%25AFs.png": "f77f39fd7f735e42d374987b1655337d",
"assets/assets/images/isis.png": "2c6ad2770b5f58a3a0f8e8d719fa2c8f",
"assets/assets/images/m%25C3%25A2%25C3%25A4t.png": "256904f3e66671d79c6b3a8ec2813d4e",
"assets/assets/images/splash.png": "75953064934c001061fd49ed11fcef27",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "195b7a257456df7c172a635c84bf68a7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "572112ff9fdb68298e432d2e249fe7ea",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "efe5481a2a625dc89ec7bb9516e97728",
"/": "efe5481a2a625dc89ec7bb9516e97728",
"main.dart.js": "f4fa01bc06077ad8fce9749c28be49ee",
"manifest.json": "35db9cdb0fcc79989691dab0c138134a",
"splash/img/dark-1x.png": "4b05143543272f3a46cf07c4dcc301a3",
"splash/img/dark-2x.png": "f9d35cbceb7613ebf315cae8225103da",
"splash/img/dark-3x.png": "85b4dbbea2d637d7dbf2e38e505d9893",
"splash/img/dark-4x.png": "f4f2b66b89c7715de4e406bec2636ef9",
"splash/img/light-1x.png": "4b05143543272f3a46cf07c4dcc301a3",
"splash/img/light-2x.png": "f9d35cbceb7613ebf315cae8225103da",
"splash/img/light-3x.png": "85b4dbbea2d637d7dbf2e38e505d9893",
"splash/img/light-4x.png": "f4f2b66b89c7715de4e406bec2636ef9",
"splash/splash.js": "d6c41ac4d1fdd6c1bbe210f325a84ad4",
"splash/style.css": "b321edf5fead3ac924047fd4790a798e",
"version.json": "9d3b57a7f80a7a6fce65385227582f14"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
