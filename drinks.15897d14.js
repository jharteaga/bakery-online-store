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
})({"assets/data/drinks.json":[function(require,module,exports) {
module.exports = [{
  "id": "1",
  "name": "Irish Coffee",
  "description": "It comes straight from 1940s Ireland and has set a huge standard!",
  "price": "4.25",
  "stock": 30,
  "image": "irish"
}, {
  "id": "2",
  "name": "Caramel Irish Coffee",
  "description": "When you are in the mood for a creamy-textured, sweet, and delicious modern take on the Irish coffee!",
  "price": "3.75",
  "stock": 25,
  "image": "caramelirish"
}, {
  "id": "3",
  "name": "Irish Winter",
  "description": "For this hot cocktail, pour a shot of Jameson and accent it with equal pours of Kahlúa and your favorite Irish cream.",
  "price": "4.00",
  "stock": 20,
  "image": "irishwinter"
}, {
  "id": "4",
  "name": "Flaming Spanish Coffee",
  "description": "Have your coffee and liqueur of choice ready to pour. Then light an overproof rum on fire inside your glass and let it burn!",
  "price": "4.99",
  "stock": 5,
  "image": "spanish"
}, {
  "id": "5",
  "name": "Brasileiro Coffee",
  "description": "Have you ever considered spiking your coffee with the Brazillian spirit cachaça? It's actually a fabulous idea!",
  "price": "3.00",
  "stock": 19,
  "image": "brasileiro"
}, {
  "id": "6",
  "name": "Caribbean Coffee",
  "description": "The recipe spikes the best cup of coffee you can brew with rum and amaretto!",
  "price": "5.75",
  "stock": 12,
  "image": "caribbean"
}, {
  "id": "7",
  "name": "Italian Coffee",
  "description": "Strega is a golden-colored, herbal liqueur that has a completely unique flavor!",
  "price": "3.99",
  "stock": 15,
  "image": "italian"
}, {
  "id": "8",
  "name": "Kentucky Coffee",
  "description": "it's Wild Turkey 101, a whiskey that will not go unnoticed in your coffee!",
  "price": "6.25",
  "stock": 10,
  "image": "kentucky"
}];
},{}],"assets/img/drinks/brasileiro.jpg":[function(require,module,exports) {
module.exports = "/brasileiro.6bb5f7bd.jpg";
},{}],"assets/img/drinks/caramelirish.jpg":[function(require,module,exports) {
module.exports = "/caramelirish.25d48a91.jpg";
},{}],"assets/img/drinks/caribbean.jpg":[function(require,module,exports) {
module.exports = "/caribbean.4623f39d.jpg";
},{}],"assets/img/drinks/irish.jpg":[function(require,module,exports) {
module.exports = "/irish.89ead94e.jpg";
},{}],"assets/img/drinks/irishwinter.jpg":[function(require,module,exports) {
module.exports = "/irishwinter.6d7629c4.jpg";
},{}],"assets/img/drinks/italian.jpg":[function(require,module,exports) {
module.exports = "/italian.4ce0fb94.jpg";
},{}],"assets/img/drinks/kentucky.jpg":[function(require,module,exports) {
module.exports = "/kentucky.3de01a2b.jpg";
},{}],"assets/img/drinks/pecanlatte.jpg":[function(require,module,exports) {
module.exports = "/pecanlatte.f204a0fa.jpg";
},{}],"assets/img/drinks/spanish.jpg":[function(require,module,exports) {
module.exports = "/spanish.f67c46cf.jpg";
},{}],"assets/img/drinks/*.jpg":[function(require,module,exports) {
module.exports = {
  "brasileiro": require("./brasileiro.jpg"),
  "caramelirish": require("./caramelirish.jpg"),
  "caribbean": require("./caribbean.jpg"),
  "irish": require("./irish.jpg"),
  "irishwinter": require("./irishwinter.jpg"),
  "italian": require("./italian.jpg"),
  "kentucky": require("./kentucky.jpg"),
  "pecanlatte": require("./pecanlatte.jpg"),
  "spanish": require("./spanish.jpg")
};
},{"./brasileiro.jpg":"assets/img/drinks/brasileiro.jpg","./caramelirish.jpg":"assets/img/drinks/caramelirish.jpg","./caribbean.jpg":"assets/img/drinks/caribbean.jpg","./irish.jpg":"assets/img/drinks/irish.jpg","./irishwinter.jpg":"assets/img/drinks/irishwinter.jpg","./italian.jpg":"assets/img/drinks/italian.jpg","./kentucky.jpg":"assets/img/drinks/kentucky.jpg","./pecanlatte.jpg":"assets/img/drinks/pecanlatte.jpg","./spanish.jpg":"assets/img/drinks/spanish.jpg"}],"js/drinks.js":[function(require,module,exports) {
"use strict";

var _drinks = _interopRequireDefault(require("../assets/data/drinks.json"));

var _ = _interopRequireDefault(require("../assets/img/drinks/*.jpg"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var drinksContainer = document.querySelector('.drinks');

var addDrinks = function addDrinks() {
  var output = '';

  _drinks.default.forEach(function (drink) {
    output += "\n        <div class=\"drinks__box\">\n        <img\n          src=\"".concat(_.default[drink.image], "\"\n          alt=\"Dessert Image\"\n          class=\"drinks__img\"\n        />\n        <h4 class=\"drinks__name\">").concat(drink.name, "</h4>\n        <p class=\"drinks__description\">\n          ").concat(drink.description, "\n        </p>\n        <div class=\"drinks__row\">\n          <span class=\"drinks__price\">$").concat(drink.price, "</span>\n          <span class=\"drinks__cart\"><i class=\"fas fa-cart-plus\"></i></span>\n        </div>\n      </div>");
  });

  drinksContainer.innerHTML = output;
};

addDrinks();
},{"../assets/data/drinks.json":"assets/data/drinks.json","../assets/img/drinks/*.jpg":"assets/img/drinks/*.jpg"}],"../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
},{}]},{},["../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/drinks.js"], null)
//# sourceMappingURL=/drinks.15897d14.js.map