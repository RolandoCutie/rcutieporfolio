'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "33f358bfe4cab301102fda11fba8b813",
"index.html": "6043a4c5f1d497fe4760110ede754397",
"/": "6043a4c5f1d497fe4760110ede754397",
"main.dart.js": "7f257e6f945674d2d22f65a6dd3f66ea",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "e5a9b04ff7132e6a0d22cf779e838798",
".git/config": "63c4b26946c159e891a8527fe11c1ebd",
".git/objects/92/8d5a41a73af8b8353dae49e701743fd119db07": "37bd566792f8983bdfc5f436a81025a2",
".git/objects/0c/2ee5039531c9d487a75cc747e9eb2bdba5ba6f": "66a45a228fe1c13fbe84244b925594b9",
".git/objects/57/f96f623af8e568c014b81725fb63a2858eadf8": "a930069e14612b8b276653f545fc3403",
".git/objects/3b/6837656f8130e6789fda9a6144cc15c1b682a1": "1356c697fc7580bf114b7a3e36fd41f0",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/35/4f6ab91f88a1084a4384b8a19600649096780d": "4e63f95b0282d29e9fa001b342488fc2",
".git/objects/51/317ce46c81a36d5cd625ce853e704bef24401c": "51f0edb714301cddb52301108916fcb1",
".git/objects/67/76917da0889c8d5811416c8eeba68f119cd428": "3b8699fda5b94510cdf723cabc37cbd3",
".git/objects/67/2a371f7854ce54d92fa2736fe0a99808f75367": "1cce1f29a17ff2377d4f87e867257897",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/5a/317009b44c95029f05dd4a03a18705b8749096": "8eceeb8aec396c8750d957fda5ae3386",
".git/objects/b5/4ec38cb83c86695efc99d2e6af7511c61ac637": "b515158a7910e1ab2ae2276d232799a0",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/da/645b75fa1f56e67d1b4198fed7e386d5779b1d": "5564328865984c744b020ff8d8cf3f06",
".git/objects/da/7a00a9dfb57e2479385804c42120a8fe282805": "22b885c8f1d509784eecda4b999e39f1",
".git/objects/a2/46d93c4f29e9314492f8eab0203840b65096c7": "0aac5a5a82c550352ae688c3992023df",
".git/objects/a5/92813e171c27ad85f934f1adf4f4496bb26b1e": "a5950611483e5b85f17a8de17f089f32",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/7dde98f9260cba3ac47550e14332af91601533": "e112e775f9e7a0fd045bfd4632ce277e",
".git/objects/f4/c86fdb4c8211df8c1039a7f97ad283db862765": "e78609ca97cbf06b6f3b1ad24d2d1003",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/3b611dfc86c7d13785680a63414a8d5021b523": "47ddebd910db8b097ab2326944c2967e",
".git/objects/c0/2e994ea6a5242b48a5a5ceb5274c9f59ba5f05": "63a7064c93e04240c9f62e47e84fdf66",
".git/objects/ee/d1d70ce89022a907a69e076126b523fc0e3e46": "c00aad39dc93787a20217f909b2bee5c",
".git/objects/e3/bf3afb1b94ec73ff56395d5f0426b4d21981eb": "e604be2fec2233ee395b718a91cbec71",
".git/objects/c8/83992d320645491d66852f6c6c368dc0335040": "20d3667240bc40974ad879deae24e60b",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/4b/08c92a6448f807045994c6de22d8ee9093aaab": "73d0aae290bed3c22142aa1a7a3ba56f",
".git/objects/4b/6a8aebbab94acee7a622384c5fb58a033399f5": "55bb80431ab4b56a318fa8ae63f73245",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/11/800d8ca5dde85bf50d8ca1adac83895bbb8b55": "67c0afdb22fab2fd61bfdceefc8de727",
".git/objects/8f/0c1f80a10e9975e3a8486dabee4bd1c1838cd3": "ae0175df91a7932f443a33443482c999",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/10/40d8edc52a3cc7e13f8b5fe3f91a95e3c85047": "01c4682c4b933a628cd1f04fe53ceb2e",
".git/objects/21/b14f06c3a51196329a57ca80b0d111fd485483": "f5e12ea923a478f0a308a9c52e896933",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/5c/c6b490a6d2abcb3104cd22d8091b93110b3719": "d4c8ffaa5603b7e1787b74cceb0cd761",
".git/objects/31/454a15886d59051b6dc3c45d96e4719c578097": "27a92a785ab534587efe62dda7dfc682",
".git/objects/96/e7ad7df312b8d26dcfdac72fdd5de0dc98cb81": "f74f3a95967f5e045eb1a909337c0dd0",
".git/objects/54/ddd96fb94ec507634cafb02774c78f6d10a431": "b1763b5c7ff1668eaafbc20df93f22c5",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/0a/06b53edf6e350548a09e1f1f075486b33f716e": "191c74a451eda520c4fe669f9efbf4ae",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/b8/7b6abcce9b2afd5c370826521cfcadc70510e8": "9e72b5e1e9b1ce41d5479c8065c87204",
".git/objects/dc/330a01320f2e7e8a118c0732123b5233f3bd31": "001a71c601a767dcf5c5279422a53832",
".git/objects/d5/29151d18e8f4b8d248117ed0ee4817f98c5d1f": "2c0842d4252dc8ea2c479c475bcef43a",
".git/objects/af/7cb72eccf128fc144ad697a90bd501a700a15c": "99bb500d8f2b1355edb4a75633daae4c",
".git/objects/af/171614897be1795604d29838e84f8eaaef3fbd": "1b7500a02ea6bf4bed57035b78ab453e",
".git/objects/af/a5a2dca81d32aa8e67582c57280ea6dff3f5bb": "359d21767e1914da9876451c4708e246",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/f2e177341a215197fe89bc9cc68f1e57de224f": "5a2d40d7f2479493820ce50973c10ba0",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/beb8a8623f037c9fb2bda19577b26cabb5e79a": "40f6138d388719efae45248d6dc2edf2",
".git/objects/c4/43231be79b2540daa0c432af4e8b271d8a3413": "eb2079a3cf8098dbfb16992482d048df",
".git/objects/cd/4ef4f970ad79494b0683c8a2c67bcd1c51550f": "bb2315e906f570e7be39358af603cbcd",
".git/objects/cd/17d3cf546db1773d0bc827ac38f5f11463d2af": "48e4b206252821397dfd30e02725a8fc",
".git/objects/cc/33ace3c9f6138be19859cde4c295037764030e": "487f572306e0301e9ff686a8678fdc75",
".git/objects/e6/449b6eab50ec6ae766bc3507b756e2078fc20a": "cf64564f7051513195ea9ea6241f9477",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/f0/0a1d82407f3da4503125a891f020f26b02243e": "25bbe88f82681278332f56762f030201",
".git/objects/f0/001e65ce0b7370ebe17fc63dc93c36efef8d83": "17ac12884ad0bc91d1d2934b636c12d7",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/c2/b2f4b5bf1aeb12e4d94072584177e0a4640ef8": "50f6d1e682e3930ac8ca541c1394f76d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/a9ce052b145e2ff964e214a1e7f48056bed303": "c5d0ea12cb0124ce55def467c92d10b1",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/48/8e78b9eff0f6670e6459f6dc3523a4b42b227a": "4bb3402fc41116734e31fb1ba676094d",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/8d/49d220a79f2e32a3e3a3d8821bf4d054071fb3": "06ea564a40d066c53a4c904d11f57f9f",
".git/objects/1c/9536ac9b571e4927a50e1199a187f311b2d89c": "77ed42e2356ee4928d15e6853d0c50cb",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ead609878ba6c8e0e48d1050a6c096b8",
".git/logs/refs/heads/main": "65273bdf2e7bfe88a2a6f3bd9daa2754",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "8bb63c94ea0f452a2f965e513b3855be",
".git/index": "950a7780075b9bd61435786545e8ba4a",
".git/COMMIT_EDITMSG": "64d42024f1a77ee5e61e4096bdebac78",
"assets/AssetManifest.json": "9d3acf986aa4d31a1d9938c3fd4b8f3e",
"assets/NOTICES": "4d78d6961d8c96355fa345b9884f30af",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/AssetManifest.bin.json": "4fa8b029ee9c28a06b28e20ad10a9c7c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "58bceaa5961579e8580eba464e20807a",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "43a945ecd1b7723dd99eadbb6a907661",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/assets/images/picfinal.jpg": "e7aedc9d53199923f279a47bb66664c4",
"assets/assets/logos/welltrax.png": "0833ce3d75d707ba289871e4cb21ac47",
"assets/assets/logos/ataja.jpg": "b6c7ebede5d4d53238a3adaa0d98f9e3",
"assets/assets/logos/goheavylogo.webp": "fb0afb9c494b92ac8497aa7b111ce906",
"assets/assets/logos/goheavy.webp": "02e68d994aa1fbb60d779f0aa5482587",
"assets/assets/logos/alivi.jpg": "903cd0e356239c27509184eca1768685",
"assets/assets/icons/service-icon2.png": "233237a0ea968e3515ef77663f78be36",
"assets/assets/icons/service-icon3.png": "16b55727c209fc8ff9da0df5731f1c11",
"assets/assets/icons/service-icon1.png": "2eaf1a87ec016307ba42e0bc65101f8b",
"assets/assets/icons/service-icon4.png": "2f29e0088963f8ae125b6d2622d74c0f",
"assets/assets/icons/service-icon5.png": "d2a756ff6ae67476d6d102fa82ef1a3c",
"assets/assets/icons/whatssapp.png": "5e9b879ef564d25e7f0168872416767d",
"assets/assets/icons/instagram.png": "4a8c23476a7c20c5bee2a752a6f96e9e",
"assets/assets/icons/github.png": "1b9b9f71269e504156ce9d89a00f2551",
"assets/assets/icons/tik-tok.png": "e30e4714ecadc84324ee6e65ae93d669",
"assets/assets/icons/logo.jpg": "d16d86d2c1c66d4cd6fc3f4ba8524b54",
"assets/assets/icons/globe.png": "cd69dac8f7824c22c16bddf9cbc83ba8",
"assets/assets/icons/twitter.png": "3e8e7ee8666a9f4e2946f39ff2f806e3",
"assets/assets/icons/linkedin.png": "efdb74ff3631151062095b0c9b228c21",
"assets/assets/icons/youtube.png": "642bfb077a5c99b6564f979578900c53",
"assets/assets/icons/googlePlayLogo.webp": "700448921a61cad11ed2ccba389e65fc",
"assets/assets/icons/appleStoreLogo.jpg": "760e1a248997cf99e23ae0fed4d70bf0",
"assets/assets/cv/CV.pdf": "8d7d9712c0ef3048a94ca599a043b6e6",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
