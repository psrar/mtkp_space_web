'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"main.dart.js": "27c1d58f47fa5399d4fb329edd2a2ee9",
"version.json": "a8e296e876d6c6e20ee42d1f0dc1822d",
"assets/assets/building_plan/building_plan.jpg": "25a1516d07d1aa4be3bd05882865b405",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "e7006a0a033d834ef9414d48db3be6fc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/AssetManifest.json": "8c15b5108f9e8b37e292c973599007cc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/NOTICES": "ab7b33640dce43de98e7c4002ea4514f",
"icons/Icon-512.png": "f27a52d2c89e9b7b3df6f8206bd7dcef",
"icons/Icon-192.png": "49751e4409ec50b03d3992744f104bfa",
"index.html": "3504f6be85d8bbb568a029c231659638",
"/": "3504f6be85d8bbb568a029c231659638",
"manifest.json": "ae45181a54d5c61967f5f90fa211c832",
".git/hooks/applypatch-msg.sample": "4e33b997d7d5d5274c56bbf61f0c0bf9",
".git/hooks/commit-msg.sample": "89cb67435d2c1b9503e32d599d72713c",
".git/hooks/post-update.sample": "be48e56d8b9f9108aa4ecb32dd12d435",
".git/hooks/pre-applypatch.sample": "1f6a74774ee63312b4ad8a8c6ec7f2e8",
".git/hooks/pre-commit.sample": "3ba41bb5b6fe126be0c04c17ceb564ff",
".git/hooks/pre-merge-commit.sample": "f9d3ac247a941cf41ceb86048c699cfe",
".git/hooks/pre-push.sample": "a5a56d58c7133331b00b520ea5548074",
".git/hooks/pre-receive.sample": "c5e60ee055ef7b920a10b2871b1790a2",
".git/hooks/push-to-checkout.sample": "d8204d74ffd9ca215d1687eaca1e9e5b",
".git/hooks/update.sample": "edce28be0c66a0a19729dc76f8143916",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-rebase.sample": "0d4f0a0a63c6a1cbbf0a8b410b9e3c59",
".git/hooks/prepare-commit-msg.sample": "529551eb02ce07d5a84df03a8361e155",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/heads/master": "122fcac1fead22e4668416a5a411fcdf",
".git/refs/remotes/origin/master": "122fcac1fead22e4668416a5a411fcdf",
".git/objects/06/76c69c06e727682614bf1440b642f074b86720": "9d67397c2947063a0ce6fc04c50efbf0",
".git/objects/06/af50097daf3f90ca590ed7161ad30bacefac63": "cbfcd867d8b870883ea2c0a7df211f62",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/3a/28787c786d666891a2e167ff717fa4e41db527": "d12aba9698ba40a46da6bd4d322892a5",
".git/objects/40/f809a5035f19e3cb179903f8340cfe81727bb8": "312306d74bb57f6c999f1df5fff8241a",
".git/objects/40/dae83d47d9f4cdfe6412c87fcf0968864df22e": "0a5aa0ce18768e8dbcd2b37959c0986b",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/2d/0471ef9f12c9641643e7de6ebf25c440812b41": "d92fd35a211d5e9c566342a07818e99e",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/ac/dff003233d90b91aebe67dcd38d5049aacda7b": "6fea100e06e06948e49143e92be1a8dd",
".git/objects/ac/29899a7a84ea6d23ac55a3d6ad20c7a26bc61d": "ce09e3942d643a7b0956d58b5f557870",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/24/3e27f3caee3fe294c1e30604d378dc14b7c69e": "f9151a1950e5a1266edc4d55e76cadf6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/5a/c5efa3b02f0c92754b8726c3e0525c03c01f31": "7bcadd5f2f5de84c0a78b301ddcdfb25",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/79faa9447bb3fa9f36e4190b64762a0e6deee3": "c3a0a6202d5fe743bef549f078a24385",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bd/67b1638bd037deb609aba5170b0652a6edcd54": "130d16997cbc56eb46c394c09e053159",
".git/objects/bd/ce5b19c78edcceb2be57da6a5b496a5d734e69": "c0248056e8dd631b334636e7b43ab323",
".git/objects/b4/421b0bae6934a3e6f5ada2ce61cadde5a148e8": "32810dde3b6cb0e2802fcfc9ffc12fb4",
".git/objects/ad/a179c16a7a4c871121110db606eafb46affb06": "35f2133cf8b620bc0999847fdb4757ec",
".git/objects/a2/bc42583ef1334bd999ca5a9059df520339a749": "5b3273ad3a6e2c1e315f52cf0f716832",
".git/objects/d7/8f121e5dd69ad7219d892b3dc47dbf91d44540": "a34ba7718e16356e8f562fc7e910ba4d",
".git/objects/d7/72cd768922c4996e0f8a1f306cab8a0fa08bee": "9c23807754c78ed5ca16795a6cb075e4",
".git/objects/2b/40d870b825ce78968bfc5514d8857a6166a858": "edd94f15c0aaa2f0865ecaeb75b1f701",
".git/objects/2b/0673e1e820cb912f2afa95453028a89bd0ea80": "7ab799eeadbdb1647838699094bc7024",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/3c/b3b53a24ee4712b8463133dca203ddd72fb43b": "c3066eae2c84f5465b93f0624f5ecfa6",
".git/objects/11/ebe0abf0e894a859e0fb58e7eae195cda45183": "a448adc1da0456db701dc50d773d932a",
".git/objects/8e/6ede544b38eaf3cd1d83e8c1169cafaa383610": "24c49e087356b284770a21e2c6209841",
".git/objects/f2/776baac29d1c646946a28e7573caf9d305d1a6": "f876d2cdb26b26ab6cd27f1f16661e44",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/4c/42b126ddeba96c262fbf43dba686e1eac0629c": "cfdb287565c9b98e67fa1016ec50c42f",
".git/objects/9b/696294c3fe76e4c1c53e509ddfd87a9567aa39": "8a9d01bc4b98e8cf45321772562520c6",
".git/objects/9b/7198982c217bee02bf52826bfee33e33537c93": "8f72aa5959a7d53c0223cc4cbfa74e36",
".git/objects/a9/df44525dd0ba017e07ab834c86a1d2b89c6aa9": "d3b976771742a12636a725a72c829719",
".git/objects/a9/fcf5d15841ed476a9b4f62d4ac6ea1d566f67c": "269d3caa4bccc0e626723255ac82b3c1",
".git/objects/43/81c8b4c24e9261bc75195bc0b1dc9f5872b542": "3dbc5efc621688262eab8c42f569a63b",
".git/objects/78/2cf9a5d3a7b38f42bf8ed4e0226b59d2d32944": "7cba542bf2e5f3213d57edf4a39fcf14",
".git/objects/a0/88aaa2fb9fa92664662bd3df95f6062f3b432a": "a338ea5f1edba01821e43743693aa8f6",
".git/objects/8c/fde3551349a10872632d3528666b18e499989d": "b8627b1f4a566c5daa92f6e76e205d9c",
".git/objects/7e/2d7457feeba058ae03ea52630fbb6719a5d965": "207f4c7d2bdb7e758681699af020b7c1",
".git/objects/2f/33dd0b375bdd0598c22c4e5d03a8f98c262f6b": "3a0680324963e7e929c24e95ccdba5a0",
".git/objects/2f/a14b0844813747abd89d32fa467bcf36ecf427": "f37774f382059c9ad54c529985d38c31",
".git/objects/ec/7a1240c7e0ea034f29a935adaee5277bc84a19": "27eb7ab7531f0cd8ed11d0c29b0c88a9",
".git/objects/da/49d30311882605edd46566fc79f2da3d2c0975": "b9b30b79c5e8d2af21d3653bba513800",
".git/objects/91/2b211c6c3e0876d06e5ca2cfea8fe426c42835": "93cec4531fe523703db400cb87d3336f",
".git/objects/db/c001a315922a57366d167815079805617a2d56": "fd01f74b0a5121da858954204abdaacd",
".git/objects/72/955e1617d192c9db9b5e7ffd071ced4f69702a": "809c3c69734b3de51af5bed336cec2a5",
".git/objects/13/b450774de804ca612e00bb5b3b1c9b4ac81b57": "e4214113c5c69df40cefd3b495a4a1d3",
".git/objects/c9/ef40426aa1b162bfd96aa568f2c78102dd9f42": "a573ae9d57c27f6eb90bfa60d85a47cc",
".git/objects/02/adef32c3d1ba93bdd045f9439c19ff600e59be": "52e62611f8ced7790de53f2f82179667",
".git/objects/f7/3a5c02c7b03de8f2d8c96370805568930d3b09": "0e6bb84861efd517b836e3b8ba4047e6",
".git/objects/6c/1a0b529d2e851edf3a813486054eaaa0eef0f3": "ac3990d494e78437c059a3866c6c258b",
".git/objects/79/a3f818aa118e395182a55e0d78b431194fd33d": "201a75af98790d06fc5b2e0348f5b70d",
".git/objects/ab/3a3263d0cc7a2b2f2775e4bdee95bbe0884c63": "8bcbe1cca9afd272b0fdbc35b9b497e4",
".git/objects/dd/8cd1478db9a65115fcdc9871d541ec8651e6ee": "d7ab5b281fe0101d2e012af980b4e475",
".git/objects/6a/b57a1dc95fe828e2dd7581ebd14dc19bbc88e0": "e159462a6e0975098aece5ad2810969d",
".git/objects/e4/ce0c21f1e3bcaa4614d2e353a3e61847eb2273": "3ea4a120f57a974ca95881a60d1bf7db",
".git/objects/47/043ef84ba461b3d4344d67615d27ca697dc2d1": "146fa78476f10dc5ff718de87fee79d6",
".git/objects/d4/2923414cb17c1491cdd6a6fab7d84f4765e7be": "1cc6a86dc88e7307c496969251ca41b6",
".git/objects/a7/6356b6f53b26133914f48912203296504343c9": "74accdbaf53ac994efab34917394257a",
".git/objects/a7/40f9cb8f34dcc5e2adaa8569692eb69b51d0a7": "f8dcc04358262e4e8b3417ae8d354c2b",
".git/objects/c5/541482230075d4b4800ebbb7ac42fad29e5133": "2dbef2c7d7d4a340f138a10876c31d29",
".git/objects/0c/21fe6fe9980bd78b3118058435b4599a4b0acd": "2cb54670ca500ad3c61031ae3c6b597e",
".git/objects/0c/8beae1022eb33595dba70027648ee2550cde31": "01530c2c69e55e0c2b6ffe445bac8e6c",
".git/objects/19/8ab4cc60fbd435fba1e4e2fad23eaa99855463": "96e01a4d695e2ea19f93ea51bb7218f2",
".git/objects/44/f08f3426947a3b732d221435c2609ae04e8b26": "d45bb19761f6b92eee918627d7ae100f",
".git/objects/b8/37897b40f97fa41622f95273e15ae6e280f21c": "67f0264649ea772e983452ce0ce58a62",
".git/objects/b8/fb78dba32766af9588a6e54ad236abedc8676e": "bc1279a2ac758157461b5c8e98d0bcb7",
".git/objects/01/5f4bfd5112459ee83f0e5fc296b275d2c2135c": "4fa5af75562a9657c0ba04eb4f4bf549",
".git/objects/05/8709db273b1fc676029dbb3a83b117bb01125c": "133dfdddace28751835f7dc630e166b0",
".git/objects/05/56494ff9051baa40c750ca0c5d796738f0a96d": "8d09b05f7fa23ff19e5c74fa544f61bf",
".git/objects/7a/fd6ac80d69cb4a3fe29f898ef0b3105992c546": "8aaf4c56e18aac75df5da08a0e622604",
".git/objects/69/61cfcd027b18bfdacb4ac4d93250e567ea3211": "8e7154e81cfa7057f0ca0610ce60ab14",
".git/objects/77/1c967847431d8517b3938f8898bf68fda00970": "4d53b682395fd31cfed21b08b47b90ac",
".git/objects/d9/635db5947500454edee0abb731986cc286843e": "b0b4c74bbde85950232b76243152f216",
".git/objects/c3/1ffc2fbbef300f9c10c4a20932cf83b58ab48e": "c8e142ca690613cf001723b001371310",
".git/objects/58/0efd4e96fd3984dbf1d2b0098ec65e46293c19": "231e23a29e45785a861486413d6d3ae3",
".git/objects/d1/958e099e363506f1ce00f49181a3064b9d436b": "0f117f6ef524e11d10e352e276f61a55",
".git/objects/83/bcd1a1349f9aa060a6e5950645dee6018c58c5": "a6f7c1869084f866e85b467e358f9ee2",
".git/objects/95/3789d86ba76965d942ac357009b075618bf2a7": "fdd4a40af675268e434a0e9c56cf30cb",
".git/objects/23/4b32510d6fa318a08915413ac57539b99f4940": "de9d72f63019e3f008a3bb614762d6cd",
".git/objects/37/5716199e1e72aac60fc395908cd049299254e1": "1038984fe56e98d4ec7b02c06c1376f2",
".git/objects/96/f555d5adfc2dc82ad561cd17e83e0b4addd753": "5daa36880d2a639668edd9b2090cc2f8",
".git/objects/25/6806f892bd11a77462afa892fc0714753a0ade": "6a72e76423f595e692e3eebb19217901",
".git/objects/1a/76fae3a2b8643eb5ed808dc4fcfdca82c4a39b": "dbf9ceb161c1c70e4eda319abbc309eb",
".git/objects/4f/d840aae8a1cbb66372346d3c35857242bb7828": "937b6d9de7bf86903dad59243b92ad7f",
".git/objects/46/3d1ccd4eae42cd0803d5c791e146fc4d3a9838": "29036055dd7bafdbc8d5cb73c68dda00",
".git/objects/ae/4f45d43c67f616eb486505c303c32750eb7e17": "9471bf9fa3f7d039ac48956ade19a024",
".git/objects/ed/0ca95edb07fe3f7a6c52623d32222366f8c2d1": "f675dd274c1f907888e7e738526dcd5c",
".git/objects/1c/aefddd2d55c08f699920e366011c681961ae89": "8e27bba2f9c9375a65060aad6b79e9f4",
".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/logs/HEAD": "baa0c280b8eec1e9b712b99b91dd9141",
".git/logs/refs/heads/master": "7fc40c06f1199b3a1b10247ae3fb45d0",
".git/logs/refs/remotes/origin/master": "6ae13237f0e54bea6f9bce1969906a6b",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/config": "1f5ffb10c29091a56cff7112720ca5f7",
".git/index": "8797bc5241489b06bb838fbfaec18d2b",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
"favicon.ico": "9dc67709d3c3950fb6d55d356bf39470"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
