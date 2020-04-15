// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"assets/data/bakery.json":[function(require,module,exports) {
module.exports = [{
  "id": "1",
  "name": "Brownie",
  "description": "Sliced baked brownies on foiled tray! you won't resist it!",
  "price": "4.99",
  "stock": 10,
  "image": "brownie"
}, {
  "id": "2",
  "name": "Chocolate-Mint Bars",
  "description": "You'll love these thin chocolate-mint girl scout cookies or Andes candies!",
  "price": "3.45",
  "stock": 15,
  "image": "choco-mint"
}, {
  "id": "3",
  "name": "Lemon-Bluberry Cupcake",
  "description": "Studded with plump, juicy fresh berries. Fun cupcakes for any special occasions!",
  "price": "2.25",
  "stock": 12,
  "image": "lemon-cupcake"
}, {
  "id": "4",
  "name": "Bourbon-Pecan Tart",
  "description": "Pecan pie is often purely sweet with no undertones, but the bourbon!",
  "price": "6.00",
  "stock": 8,
  "image": "pecan"
}, {
  "id": "5",
  "name": "Raspberry-Rhubarb Pie",
  "description": "Though a beloved pie classic, rhubarb has a strong tartness that sometimes needs moderating!",
  "price": "6.50",
  "stock": 6,
  "image": "rhubarb"
}, {
  "id": "6",
  "name": "Nathan's Lemon Cake",
  "description": "Wonderful texture, assertive lemon flavor, just enough richness and just enough icing!",
  "price": "8.75",
  "stock": 6,
  "image": "lemon-cake"
}, {
  "id": "7",
  "name": "Hello Dolly Bars",
  "description": "The perfect dessert for taking along, well, just about anywhere!",
  "price": "3.50",
  "stock": 16,
  "image": "dolly"
}, {
  "id": "8",
  "name": "Vanilla Cheesecake",
  "description": "The seeds flavor the cheesecake, and the bean halves flavor the topping!",
  "price": "5.99",
  "stock": 9,
  "image": "cheesecake"
}];
},{}],"assets/img/bakery/brownie.jpg":[function(require,module,exports) {
module.exports = "/brownie.a38349e7.jpg";
},{}],"assets/img/bakery/cheesecake.jpg":[function(require,module,exports) {
module.exports = "/cheesecake.22f42629.jpg";
},{}],"assets/img/bakery/choco-mint.jpg":[function(require,module,exports) {
module.exports = "/choco-mint.e143d795.jpg";
},{}],"assets/img/bakery/dolly.jpg":[function(require,module,exports) {
module.exports = "/dolly.d05551f9.jpg";
},{}],"assets/img/bakery/lemon-cake.jpg":[function(require,module,exports) {
module.exports = "/lemon-cake.1bc7f292.jpg";
},{}],"assets/img/bakery/lemon-cupcake.jpg":[function(require,module,exports) {
module.exports = "/lemon-cupcake.90ddd1b1.jpg";
},{}],"assets/img/bakery/pecan.jpg":[function(require,module,exports) {
module.exports = "/pecan.0f9d5faf.jpg";
},{}],"assets/img/bakery/rhubarb.jpg":[function(require,module,exports) {
module.exports = "/rhubarb.cb47400b.jpg";
},{}],"assets/img/bakery/*.jpg":[function(require,module,exports) {
module.exports = {
  "brownie": require("./brownie.jpg"),
  "cheesecake": require("./cheesecake.jpg"),
  "choco-mint": require("./choco-mint.jpg"),
  "dolly": require("./dolly.jpg"),
  "lemon-cake": require("./lemon-cake.jpg"),
  "lemon-cupcake": require("./lemon-cupcake.jpg"),
  "pecan": require("./pecan.jpg"),
  "rhubarb": require("./rhubarb.jpg")
};
},{"./brownie.jpg":"assets/img/bakery/brownie.jpg","./cheesecake.jpg":"assets/img/bakery/cheesecake.jpg","./choco-mint.jpg":"assets/img/bakery/choco-mint.jpg","./dolly.jpg":"assets/img/bakery/dolly.jpg","./lemon-cake.jpg":"assets/img/bakery/lemon-cake.jpg","./lemon-cupcake.jpg":"assets/img/bakery/lemon-cupcake.jpg","./pecan.jpg":"assets/img/bakery/pecan.jpg","./rhubarb.jpg":"assets/img/bakery/rhubarb.jpg"}],"js/bakery.js":[function(require,module,exports) {
"use strict";

var _bakery = _interopRequireDefault(require("../assets/data/bakery.json"));

var _ = _interopRequireDefault(require("../assets/img/bakery/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bakeryContainer = document.querySelector('.bakery');

var addBakery = function addBakery() {
  var output = '';

  _bakery.default.forEach(function (bakery) {
    output += "\n        <div class=\"bakery__box\">\n        <img\n          src=\"".concat(_.default[bakery.image], "\"\n          alt=\"Dessert Image\"\n          class=\"bakery__img\"\n        />\n        <h4 class=\"bakery__name\">").concat(bakery.name, "</h4>\n        <p class=\"bakery__description\">\n          ").concat(bakery.description, "\n        </p>\n        <div class=\"bakery__row\">\n          <span class=\"bakery__price\">$").concat(bakery.price, "</span>\n          <span class=\"bakery__cart\"><i class=\"fas fa-cart-plus\"></i></span>\n        </div>\n      </div>");
  });

  bakeryContainer.innerHTML = output;
};

addBakery();
},{"../assets/data/bakery.json":"assets/data/bakery.json","../assets/img/bakery/*.jpg":"assets/img/bakery/*.jpg"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "58862" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/bakery.js"], null)
//# sourceMappingURL=/bakery.3ec730f6.js.map