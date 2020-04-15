parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"jk8E":[function(require,module,exports) {
module.exports=[{id:"1",name:"Irish Coffee",description:"It comes straight from 1940s Ireland and has set a huge standard!",price:"4.25",stock:30,image:"irish"},{id:"2",name:"Caramel Irish Coffee",description:"When you are in the mood for a creamy-textured, sweet, and delicious modern take on the Irish coffee!",price:"3.75",stock:25,image:"caramelirish"},{id:"3",name:"Irish Winter",description:"For this hot cocktail, pour a shot of Jameson and accent it with equal pours of Kahlúa and your favorite Irish cream.",price:"4.00",stock:20,image:"irishwinter"},{id:"4",name:"Flaming Spanish Coffee",description:"Have your coffee and liqueur of choice ready to pour. Then light an overproof rum on fire inside your glass and let it burn!",price:"4.99",stock:5,image:"spanish"},{id:"5",name:"Brasileiro Coffee",description:"Have you ever considered spiking your coffee with the Brazillian spirit cachaça? It's actually a fabulous idea!",price:"3.00",stock:19,image:"brasileiro"},{id:"6",name:"Caribbean Coffee",description:"The recipe spikes the best cup of coffee you can brew with rum and amaretto!",price:"5.75",stock:12,image:"caribbean"},{id:"7",name:"Italian Coffee",description:"Strega is a golden-colored, herbal liqueur that has a completely unique flavor!",price:"3.99",stock:15,image:"italian"},{id:"8",name:"Kentucky Coffee",description:"it's Wild Turkey 101, a whiskey that will not go unnoticed in your coffee!",price:"6.25",stock:10,image:"kentucky"}];
},{}],"YFby":[function(require,module,exports) {
module.exports="/brasileiro.fca38682.jpg";
},{}],"BH8I":[function(require,module,exports) {
module.exports="/caramelirish.adef3078.jpg";
},{}],"dnmD":[function(require,module,exports) {
module.exports="/caribbean.3e16482f.jpg";
},{}],"N28Q":[function(require,module,exports) {
module.exports="/irishwinter.ab334003.jpg";
},{}],"qQoG":[function(require,module,exports) {
module.exports="/irish.88a6a56b.jpg";
},{}],"uVMj":[function(require,module,exports) {
module.exports="/italian.9d6ec222.jpg";
},{}],"yqHW":[function(require,module,exports) {
module.exports="/kentucky.9d229351.jpg";
},{}],"Khzp":[function(require,module,exports) {
module.exports="/pecanlatte.023cafd7.jpg";
},{}],"c4nd":[function(require,module,exports) {
module.exports="/spanish.a9bea9e1.jpg";
},{}],"LN1x":[function(require,module,exports) {
module.exports={brasileiro:require("./brasileiro.jpg"),caramelirish:require("./caramelirish.jpg"),caribbean:require("./caribbean.jpg"),irishwinter:require("./irishwinter.jpg"),irish:require("./irish.jpg"),italian:require("./italian.jpg"),kentucky:require("./kentucky.jpg"),pecanlatte:require("./pecanlatte.jpg"),spanish:require("./spanish.jpg")};
},{"./brasileiro.jpg":"YFby","./caramelirish.jpg":"BH8I","./caribbean.jpg":"dnmD","./irishwinter.jpg":"N28Q","./irish.jpg":"qQoG","./italian.jpg":"uVMj","./kentucky.jpg":"yqHW","./pecanlatte.jpg":"Khzp","./spanish.jpg":"c4nd"}],"CEcI":[function(require,module,exports) {
"use strict";var n=a(require("../assets/data/drinks.json")),s=a(require("../assets/img/drinks/*.jpg"));function a(n){return n&&n.__esModule?n:{default:n}}var i=document.querySelector(".drinks"),r=function(){var a="";n.default.forEach(function(n){a+='\n        <div class="drinks__box">\n        <img\n          src="'.concat(s.default[n.image],'"\n          alt="Dessert Image"\n          class="drinks__img"\n        />\n        <h4 class="drinks__name">').concat(n.name,'</h4>\n        <p class="drinks__description">\n          ').concat(n.description,'\n        </p>\n        <div class="drinks__row">\n          <span class="drinks__price">$').concat(n.price,'</span>\n          <span class="drinks__cart"><i class="fas fa-cart-plus"></i></span>\n        </div>\n      </div>')}),i.innerHTML=a};r();
},{"../assets/data/drinks.json":"jk8E","../assets/img/drinks/*.jpg":"LN1x"}]},{},["CEcI"], null)
//# sourceMappingURL=/drinks.680c04b3.js.map