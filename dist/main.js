!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=2)}([function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function c(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function s(n,e){for(var r={},t=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],l=r[s]||0,u="".concat(s," ").concat(l);r[s]=l+1;var d=c(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==d?(a[d].references++,a[d].updater(f)):a.push({identifier:u,updater:y(f,e),references:1}),t.push(u)}return t}function l(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var u,d=(u=[],function(n,e){return u[n]=e,u.filter(Boolean).join("\n")});function f(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=d(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function p(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var m=null,h=0;function y(n,e){var r,t,o;if(e.singleton){var i=h++;r=m||(m=l(e)),t=f.bind(null,r,i,!1),o=f.bind(null,r,i,!0)}else r=l(e),t=p.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=c(r[t]);a[o].references--}for(var i=s(n,e),l=0;l<r.length;l++){var u=c(r[l]);0===a[u].references&&(a[u].updater(),a.splice(u,1))}r=i}}}},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,s;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(r&&(s[2]?s[2]="".concat(r," and ").concat(s[2]):s[2]=r),e.push(s))}},e}},function(n,e,r){"use strict";r.r(e);r(3),r(5);const t=document.getElementById("submitButton"),o=document.getElementById("temperatureUnitToggleButton"),i=document.getElementById("fahrenheitSection"),a=document.getElementById("celciusSection");async function c(n){try{const e=await fetch(`https://pixabay.com/api/?key=17494952-7ba69cb878fdde07f0062d300&q=${n}&image_type=photo`,{mode:"cors"});!function(n){const e=document.getElementById("weatherImage"),r=document.getElementById("imageCredit");e.src=n.hits[0].webformatURL,r.innerHTML=n.hits[0].user,r.href=n.hits[0].pageURL}(await e.json()),document.getElementById("imageContent").style.display="block"}catch(n){imageContent.style.display="block"}}function s(){o.innerHTML="Switch to Fahrenheit",i.style.display="none",a.style.display="block"}t.addEventListener("click",n=>{n.preventDefault(),async function(){const n=document.getElementById("weatherContent"),e=document.getElementById("searchInput").value;try{const r=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e}&appid=3641b5ddba4c5e7e535bdd072b5d7da4&units=metric`,{mode:"cors"}),t=await r.json(),o=t.weather[0].main,i=t.main.temp;!function(e,r){const t=document.getElementById("weatherSummaryContainer"),o=document.getElementById("celciusContainer"),i=document.getElementById("fahrenheitContainer");o.innerHTML=r,i.innerHTML=function(n){const e=1.8*n+32;return Math.round(10*e)/10}(r),s(),t.innerHTML=e,n.style.display="block",errorMessage.style.display="none"}(o,i),c(o)}catch(e){document.getElementById("errorMessage").style.display="block",n.style.display="none",c("earth")}}()}),o.addEventListener("click",(function(){"none"===i.style.display?(o.innerHTML="Switch to Celcius",i.style.display="block",a.style.display="none"):s()}))},function(n,e,r){var t=r(0),o=r(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(t(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,r){(e=r(1)(!1)).push([n.i,"html,\r\nbody,\r\ndiv,\r\nspan,\r\napplet,\r\nobject,\r\niframe,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np,\r\nblockquote,\r\npre,\r\na,\r\nabbr,\r\nacronym,\r\naddress,\r\nbig,\r\ncite,\r\ncode,\r\ndel,\r\ndfn,\r\nem,\r\nimg,\r\nins,\r\nkbd,\r\nq,\r\ns,\r\nsamp,\r\nsmall,\r\nstrike,\r\nstrong,\r\nsub,\r\nsup,\r\ntt,\r\nvar,\r\nb,\r\nu,\r\ni,\r\ncenter,\r\ndl,\r\ndt,\r\ndd,\r\nol,\r\nul,\r\nli,\r\nfieldset,\r\nform,\r\nlabel,\r\nlegend,\r\ntable,\r\ncaption,\r\ntbody,\r\ntfoot,\r\nthead,\r\ntr,\r\nth,\r\ntd,\r\narticle,\r\naside,\r\ncanvas,\r\ndetails,\r\nembed,\r\nfigure,\r\nfigcaption,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\noutput,\r\nruby,\r\nsection,\r\nsummary,\r\ntime,\r\nmark,\r\naudio,\r\nvideo {\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n/* HTML5 display-role reset for older browsers */\r\narticle,\r\naside,\r\ndetails,\r\nfigcaption,\r\nfigure,\r\nfooter,\r\nheader,\r\nhgroup,\r\nmenu,\r\nnav,\r\nsection {\r\n    display: block;\r\n}\r\n\r\nbody {\r\n    line-height: 1;\r\n}\r\n\r\nol,\r\nul {\r\n    list-style: none;\r\n}\r\n\r\nblockquote,\r\nq {\r\n    quotes: none;\r\n}\r\n\r\nblockquote:before,\r\nblockquote:after,\r\nq:before,\r\nq:after {\r\n    content: '';\r\n    content: none;\r\n}\r\n\r\ntable {\r\n    border-collapse: collapse;\r\n    border-spacing: 0;\r\n}",""]),n.exports=e},function(n,e,r){var t=r(0),o=r(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1},a=(t(o,i),o.locals?o.locals:{});n.exports=a},function(n,e,r){(e=r(1)(!1)).push([n.i,'#weatherContent {\r\n  display: none;\r\n}\r\n\r\n#imageContent {\r\n  display: none;\r\n}\r\n\r\n#errorMessage {\r\n  display: none;\r\n}\r\n\r\n#container {\r\n  padding: 1em;\r\n  text-align: center;\r\n}\r\n\r\n:root {\r\n  background-color: #e9eff5;\r\n  font-family: "Indie Flower", cursive;\r\n}\r\n\r\nbutton {\r\n  font-family: inherit;\r\n  background-color: blanchedalmond;\r\n  border-radius: 25%;\r\n  font-weight: bold;\r\n  font-size: 0.5em;\r\n}\r\n\r\nlabel {\r\n  font-weight: bold;\r\n}\r\n\r\nimg {\r\n  border-radius: 5%;\r\n  width: 300px;\r\n  height: 200px;\r\n}\r\n\r\np {\r\n  font-size: 2em;\r\n}\r\n\r\nform {\r\n  font-size: 2em;\r\n}\r\n\r\n#temperatureUnitToggleButton {\r\n  font-size: 1em;\r\n}\r\n',""]),n.exports=e}]);