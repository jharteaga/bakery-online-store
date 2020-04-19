parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"shdG":[function(require,module,exports) {
module.exports="brownie.95cab8f6.jpg";
},{}],"Q6Lr":[function(require,module,exports) {
module.exports="choco-mint.88436558.jpg";
},{}],"LBQW":[function(require,module,exports) {
module.exports="cheesecake.ec7a2771.jpg";
},{}],"hQzm":[function(require,module,exports) {
module.exports="dolly.7eee0f04.jpg";
},{}],"ffhd":[function(require,module,exports) {
module.exports="lemon-cake.9d95620d.jpg";
},{}],"Gcxk":[function(require,module,exports) {
module.exports="lemon-cupcake.d4218b34.jpg";
},{}],"vQRw":[function(require,module,exports) {
module.exports="pecan.7dc176eb.jpg";
},{}],"ZnJl":[function(require,module,exports) {
module.exports="rhubarb.e8e14c3a.jpg";
},{}],"cFyD":[function(require,module,exports) {
module.exports={brownie:require("./brownie.jpg"),"choco-mint":require("./choco-mint.jpg"),cheesecake:require("./cheesecake.jpg"),dolly:require("./dolly.jpg"),"lemon-cake":require("./lemon-cake.jpg"),"lemon-cupcake":require("./lemon-cupcake.jpg"),pecan:require("./pecan.jpg"),rhubarb:require("./rhubarb.jpg")};
},{"./brownie.jpg":"shdG","./choco-mint.jpg":"Q6Lr","./cheesecake.jpg":"LBQW","./dolly.jpg":"hQzm","./lemon-cake.jpg":"ffhd","./lemon-cupcake.jpg":"Gcxk","./pecan.jpg":"vQRw","./rhubarb.jpg":"ZnJl"}],"YFby":[function(require,module,exports) {
module.exports="brasileiro.fca38682.jpg";
},{}],"BH8I":[function(require,module,exports) {
module.exports="caramelirish.adef3078.jpg";
},{}],"dnmD":[function(require,module,exports) {
module.exports="caribbean.3e16482f.jpg";
},{}],"qQoG":[function(require,module,exports) {
module.exports="irish.88a6a56b.jpg";
},{}],"N28Q":[function(require,module,exports) {
module.exports="irishwinter.ab334003.jpg";
},{}],"uVMj":[function(require,module,exports) {
module.exports="italian.9d6ec222.jpg";
},{}],"yqHW":[function(require,module,exports) {
module.exports="kentucky.9d229351.jpg";
},{}],"Khzp":[function(require,module,exports) {
module.exports="pecanlatte.023cafd7.jpg";
},{}],"c4nd":[function(require,module,exports) {
module.exports="spanish.a9bea9e1.jpg";
},{}],"LN1x":[function(require,module,exports) {
module.exports={brasileiro:require("./brasileiro.jpg"),caramelirish:require("./caramelirish.jpg"),caribbean:require("./caribbean.jpg"),irish:require("./irish.jpg"),irishwinter:require("./irishwinter.jpg"),italian:require("./italian.jpg"),kentucky:require("./kentucky.jpg"),pecanlatte:require("./pecanlatte.jpg"),spanish:require("./spanish.jpg")};
},{"./brasileiro.jpg":"YFby","./caramelirish.jpg":"BH8I","./caribbean.jpg":"dnmD","./irish.jpg":"qQoG","./irishwinter.jpg":"N28Q","./italian.jpg":"uVMj","./kentucky.jpg":"yqHW","./pecanlatte.jpg":"Khzp","./spanish.jpg":"c4nd"}],"MgTz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.addCounter=t,exports.substractCounter=o,exports.addCheckOut=r;var e=document.querySelector(".header__counter");function t(){localStorage.setItem("counter",Number(localStorage.getItem("counter"))+1),e.setAttribute("data-value",localStorage.getItem("counter"))}function o(){localStorage.setItem("counter",Number(localStorage.getItem("counter"))-1),e.setAttribute("data-value",localStorage.getItem("counter"))}function r(e){var t=JSON.parse(localStorage.getItem("checkOut"));t.push(e),localStorage.setItem("checkOut",JSON.stringify(t))}
},{}],"gCXL":[function(require,module,exports) {
"use strict";var t=n(require("../assets/img/bakery/*.jpg")),e=n(require("../assets/img/drinks/*.jpg")),r=require("./utils");function n(t){return t&&t.__esModule?t:{default:t}}function o(t,e){return l(t)||u(t,e)||a(t,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function a(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,o=!1,c=void 0;try{for(var a,i=t[Symbol.iterator]();!(n=(a=i.next()).done)&&(r.push(a.value),!e||r.length!==e);n=!0);}catch(u){o=!0,c=u}finally{try{n||null==i.return||i.return()}finally{if(o)throw c}}return r}}function l(t){if(Array.isArray(t))return t}var s=document.querySelector(".checkout__body");function f(){d(),y(document.querySelectorAll(".checkout__remove"))}function d(){var r="",n=JSON.parse(localStorage.getItem("checkOut"));n.length>0?n.forEach(function(n){r+='\n        <tr class="table-responsive-sm">\n            <td><img src="'.concat("bakery"===n.type?t.default[n.image]:e.default[n.image],'" alt="Product Image" /></td>\n            <td>').concat(n.name,"</td>\n            <td>$").concat(n.price,'</td>\n            <td><i id="').concat(n.type,"-").concat(n.id,'" class="checkout__trash fas fa-trash-alt"></i><button class="btn btn-sm btn-danger checkout__remove" id="').concat(n.type,"-").concat(n.id,'">Remove</button></td>\n        </tr>        \n        ')}):r+='\n    <tr>\n        <td class="checkout__empty" colspan="4">Cart Empty</td>\n    </tr>        \n    ',s.innerHTML=r}function y(t){t.forEach(function(t){t.addEventListener("click",function(){var e=JSON.parse(localStorage.getItem("checkOut")),n=o(t.id.split("-"),2),c=n[0],a=n[1],i=e.filter(function(t){return t.type==c&&t.id==a});localStorage.setItem("checkOut",JSON.stringify(e.filter(function(t){return JSON.stringify(t)!==JSON.stringify(i[0])}))),f(),(0,r.substractCounter)()})})}f();
},{"../assets/img/bakery/*.jpg":"cFyD","../assets/img/drinks/*.jpg":"LN1x","./utils":"MgTz"}]},{},["gCXL"], null)
//# sourceMappingURL=checkOut.412badee.js.map