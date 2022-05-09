(()=>{"use strict";var e={588:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(933),a=n.n(r),o=n(476),c=n.n(o)()(a());c.push([e.id,"body{\n    text-align: center;\n}\ntextarea {\n    width:880px;\n    display: block;\n    margin: 50px auto 0 auto;\n    height: 140px;\n}\n\n.keyboard {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    width: 880px;\n    background-color: #DDDDDD;\n    margin: 50px auto 0 auto;\n    grid-gap: 10px;\n}\n.btn {\n    border: none;\n    animation-name: button;\n    animation-duration: .2s;\n    border-radius: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 50px;\n    height: 50px;\n    background-color: #F42A23;\n    transform: .5s;\n    user-select: none;\n}\n.btnFunk{\n    background-color: #ed140c;\n}\n.btn:nth-child(14){\n    width: 100px;\n}\n.btn:nth-child(15){\n    width: 70px;\n}\n.btn:nth-child(29){\n    width: 80px;\n}\n.btn:nth-child(42){\n    width: 70px;\n}\n.btn:nth-child(43){\n    width: 100px;\n}\n.btn:nth-child(55){\n    width: 110px;\n}\n.btn:nth-child(59){\n    width: 400px;\n}\n.btn:hover{\n    cursor: pointer;\n    background-color: #f42a236a;\n}\n\n.keyboard .press {\n    border: none;\n    animation-name: active-button;\n    animation-duration: .2s;\n    border-radius: 30px;\n    background-color: #910500 ;\n}\n@keyframes active-button{\n    from{\n        border-radius: 0;\n        background-color: #f42a236a;\n    };\n    to{\n        border-radius: 30px;\n        background-color: #910500 ;\n    }\n}\n@keyframes button{\n    from{border-radius: 30px};\n    to{border-radius: 0}\n}",""]);const i=c},476:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var c={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(c[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);r&&c[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),a&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=a):d[4]="".concat(a)),t.push(d))}},t}},933:e=>{e.exports=function(e){return e[1]}},892:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},c=[],i=0;i<e.length;i++){var s=e[i],l=r.base?s[0]+r.base:s[0],d=o[l]||0,u="".concat(l," ").concat(d);o[l]=d+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)t[p].references++,t[p].updater(f);else{var h=a(f,r);r.byIndex=i,t.splice(i,0,{identifier:u,updater:h,references:1})}c.push(u)}return c}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var c=0;c<o.length;c++){var i=n(o[c]);t[i].references--}for(var s=r(e,a),l=0;l<o.length;l++){var d=n(o[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}o=s}}},311:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},60:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},192:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},760:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},865:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=class{constructor(e){this.code=e}code},t=class extends e{constructor(e,t,n,r,a,o=!1,c=!1){super(e),this.val=t,this.belVal=r,this.shiftVal=n,this.belShiftVal=a,this.isLetter=o,this.isBelLetter=c}val;shiftVal;belVal;belShiftVal;isLetter;isBelLetter},r=class extends e{constructor(e,t=e){super(e),this.name=t}name};var a=n(892),o=n.n(a),c=n(760),i=n.n(c),s=n(311),l=n.n(s),d=n(192),u=n.n(d),p=n(60),f=n.n(p),h=n(865),w=n.n(h),y=n(588),m={};m.styleTagTransform=w(),m.setAttributes=u(),m.insert=l().bind(null,"head"),m.domAPI=i(),m.insertStyleElement=f(),o()(y.Z,m),y.Z&&y.Z.locals&&y.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=[new t("Backquote","`","~","ё","Ё",!0,!0),new t("Digit1","1","!","1","!"),new t("Digit2","2","@","2",'"'),new t("Digit3","3","#","3","№"),new t("Digit4","4","$","4",";"),new t("Digit5","5","%","5","%"),new t("Digit6","6","^","6",":"),new t("Digit7","7","&","7","?"),new t("Digit8","8","*","8","*"),new t("Digit9","9","(","9","("),new t("Digit0","0",")","0",")"),new t("Minus","-","_","-","_"),new t("Equal","=","+","=","+"),new r("Backspace"),new r("Tab"),new t("KeyQ","q","Q","й","Й",!0,!0),new t("KeyW","w","W","ц","Ц",!0,!0),new t("KeyE","e","E","у","К",!0,!0),new t("KeyR","r","R","к","У",!0,!0),new t("KeyT","t","T","е","Е",!0,!0),new t("KeyY","y","Y","н","Н",!0,!0),new t("KeyU","u","U","г","Г",!0,!0),new t("KeyI","i","I","ш","Ш",!0,!0),new t("KeyO","o","O","ў","Ў",!0,!0),new t("KeyP","p","P","з","З",!0,!0),new t("BracketLeft","[","{","х","Х",!1,!0),new t("BracketRight","]","}","ъ","Ъ",!1,!0),new r("Delete"),new r("CapsLock","Caps"),new t("KeyA","a","A","ф","Ф",!0,!0),new t("KeyS","s","S","ы","Ы",!0,!0),new t("KeyD","d","D","в","В",!0,!0),new t("KeyF","f","F","а","А",!0,!0),new t("KeyG","g","G","п","П",!0,!0),new t("KeyH","h","H","р","Р",!0,!0),new t("KeyJ","j","J","о","О",!0,!0),new t("KeyK","k","K","л","Л",!0,!0),new t("KeyL","l","L","д","Д",!0,!0),new t("Semicolon",";",":","ж","Ж",!1,!0),new t("Quote","'",'"',"э","Э",!1,!0),new t("Backslash","\\","|","\\","/"),new r("Enter"),new r("ShiftLeft","Shift"),new t("KeyZ","z","Z","я","Я",!0,!0),new t("KeyX","x","X","ч","Ч",!0,!0),new t("KeyC","c","C","с","С",!0,!0),new t("KeyV","v","V","м","М",!0,!0),new t("KeyB","b","B","і","І",!0,!0),new t("KeyN","n","N","т","Т",!0,!0),new t("KeyM","m","M","ь","Ь",!0,!0),new t("Comma",",","<","б","Б",!1,!0),new t("Period",".",">","ю","Ю",!1,!0),new t("Slash","/","?",".",","),new t("ArrowUp","▲","▲","▲","▲"),new r("ShiftRight","Shift"),new r("ControlLeft","Ctrl"),new r("MetaLeft","Win"),new r("AltLeft","Alt"),new t("Space"," "," "," "," "),new r("AltRight","Alt"),new t("ArrowLeft","◄","◄","◄","◄"),new t("ArrowDown","▼","▼","▼","▼"),new t("ArrowRight","►","►","►","►"),new r("ControlRight","Ctrl")];let n=null===window.localStorage.getItem("eng")||"true"===window.localStorage.getItem("eng"),a=!1,o=null;const c=new Map;function i(e){const t=document.querySelector("textarea"),n=t.selectionStart;t.value=`${t.value.slice(0,t.selectionStart)}${e}${t.value.slice(t.selectionStart)}`,t.selectionStart=n+1,t.selectionEnd=n+1}function s(e){e.preventDefault();let n=null;if("keydown"===e.type)n=e.code;else{if(void 0===e.target.dataset.code)return;n=e.target.dataset.code}const r=document.querySelector(`[data-code=${n}]`);null!=r&&"CapsLock"!==n&&(o=r,r.classList.add("press"),c.get(n)instanceof t&&i(r.innerHTML))}function l(e){!1===e&&!1===a?[...document.querySelectorAll(".btn")].forEach((e=>{const r=e,a=c.get(r.dataset.code);a instanceof t&&(r.innerHTML=n?a.val:a.belVal)})):!0===e&&!1===a?[...document.querySelectorAll(".btn")].forEach((e=>{const r=e,a=c.get(r.dataset.code);a instanceof t&&(r.innerHTML=n?a.shiftVal:a.belShiftVal)})):!1===e&&!0===a?n?[...document.querySelectorAll(".btn")].forEach((e=>{const n=e,r=c.get(n.dataset.code);r.isLetter?n.innerHTML=r.shiftVal:r instanceof t&&!r.isLetter&&(n.innerHTML=r.val)})):[...document.querySelectorAll(".btn")].forEach((e=>{const n=e,r=c.get(n.dataset.code);r.isBelLetter?n.innerHTML=r.belShiftVal:r instanceof t&&!r.isBelLetter&&(n.innerHTML=r.belVal)})):!0===e&&!0===a&&(n?[...document.querySelectorAll(".btn")].forEach((e=>{const n=e,r=c.get(n.dataset.code);r.isLetter?n.innerHTML=r.val:r instanceof t&&!r.isLetter&&(n.innerHTML=r.shiftVal)})):[...document.querySelectorAll(".btn")].forEach((e=>{const n=e,r=c.get(n.dataset.code);r.isLetter?n.innerHTML=r.belVal:r instanceof t&&!r.isBelLetter&&(n.innerHTML=r.belShiftVal)})))}function d(e){if("keyup"===e.type){const t=document.querySelector(`[data-code=${e.code}]`);null!=t&&"CapsLock"!==e.code&&t.classList.remove("press"),"ShiftRight"!==e.code&&"ShiftLeft"!==e.code||l(!1)}else null!==o&&(o.classList.remove("press"),"ShiftRight"!==o.dataset.code&&"ShiftLeft"!==o.dataset.code||l(!1),o=null)}function u(e){const t=document.querySelector("textarea"),n=t.selectionStart;switch("keydown"===e.type?e.code:e.target.dataset.code){case"Enter":i("\n");break;case"Tab":i("\t");break;case"Backspace":if(0===t.selectionStart)return;t.value=t.value.slice(0,t.selectionStart-1)+t.value.slice(t.selectionStart),t.selectionStart=n-1,t.selectionEnd=n-1;break;case"Delete":if(t.selectionStart===t.value.length)return;t.value=t.value.slice(0,t.selectionStart)+t.value.slice(t.selectionStart+1),t.selectionStart=n,t.selectionEnd=n;break;case"CapsLock":a=!a,a?document.querySelector("[data-code=CapsLock]").classList.add("press"):document.querySelector("[data-code=CapsLock]").classList.remove("press"),l(!1);break;case"ShiftRight":case"ShiftLeft":l(!0)}}const p=document.createElement("div");p.id="keyboard",p.classList.add("keyboard"),e.forEach((e=>{c.set(e.code,e),p.append(function(e){const{code:r}=e,a=document.createElement("button");return a.setAttribute("data-code",r),a.classList.add("btn"),e instanceof t?a.innerHTML=n?e.val:e.belVal:(a.classList.add("btnFunk"),a.innerHTML=e.name),a}(e))}));const f=document.createElement("textarea");f.id="textarea";const h=document.createElement("h1");h.innerHTML="RSS Virtual Keyboard";const w=document.createElement("p");w.innerHTML="Keyboard was created on Windows OS";const y=document.createElement("p");y.innerHTML="For change language use ctrl + alt";const m=document.querySelector("body");m.append(h),m.append(f),m.append(p),m.append(w),m.append(y),document.addEventListener("keydown",s),document.addEventListener("keydown",u),document.addEventListener("keydown",(function(e){e.ctrlKey&&e.altKey&&(n=!n,window.localStorage.setItem("eng",n),l(!1))})),document.addEventListener("keyup",d),p.addEventListener("mousedown",s),p.addEventListener("mousedown",u),p.addEventListener("mouseup",d)}))})()})();