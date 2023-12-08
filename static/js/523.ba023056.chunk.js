/*! For license information please see 523.ba023056.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktmx_mercury=self.webpackChunktmx_mercury||[]).push([[523],{1523:(e,t,n)=>{n.d(t,{Z:()=>V});const i=function(e){return"object"===typeof window.Node?e instanceof window.Node:null!==e&&"object"===typeof e&&"number"===typeof e.nodeType&&"string"===typeof e.nodeName};const r=function(e){var t=Object.prototype.toString.call(e);return"object"===typeof window.NodeList?e instanceof window.NodeList:null!==e&&"object"===typeof e&&"number"===typeof e.length&&/^\[object (HTMLCollection|NodeList|Object)\]$/.test(t)&&(0===e.length||i(e[0]))};const o=function(e,t){if(void 0===t&&(t=document),e instanceof Array)return e.filter(i);if(i(e))return[e];if(r(e))return Array.prototype.slice.call(e);if("string"===typeof e)try{var n=t.querySelectorAll(e);return Array.prototype.slice.call(n)}catch(o){return[]}return[]};function s(e){if(e.constructor!==Array)throw new TypeError("Expected array.");if(16===e.length)return e;if(6===e.length){var t=a();return t[0]=e[0],t[1]=e[1],t[4]=e[2],t[5]=e[3],t[12]=e[4],t[13]=e[5],t}throw new RangeError("Expected array with either 6 or 16 values.")}function a(){for(var e=[],t=0;t<16;t++)t%5==0?e.push(1):e.push(0);return e}function c(e,t){for(var n=s(e),i=s(t),r=[],o=0;o<4;o++)for(var a=[n[o],n[o+4],n[o+8],n[o+12]],c=0;c<4;c++){var l=4*c,u=[i[l],i[l+1],i[l+2],i[l+3]],d=a[0]*u[0]+a[1]*u[1]+a[2]*u[2]+a[3]*u[3];r[o+l]=d}return r}function l(e){if("string"===typeof e){var t=e.match(/matrix(3d)?\(([^)]+)\)/);if(t)return s(t[2].split(", ").map(parseFloat))}return a()}function u(e){var t=Math.PI/180*e,n=a();return n[0]=n[5]=Math.cos(t),n[1]=n[4]=Math.sin(t),n[4]*=-1,n}function d(e,t){var n=a();return n[0]=e,n[5]="number"===typeof t?t:e,n}var f=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout((function(){return f(t)}),0)}}();const h=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||f;var p={delay:0,distance:"0",duration:600,easing:"cubic-bezier(0.5, 0, 0, 1)",interval:0,opacity:0,origin:"bottom",rotate:{x:0,y:0,z:0},scale:1,cleanup:!1,container:document.documentElement,desktop:!0,mobile:!0,reset:!1,useDelay:"always",viewFactor:0,viewOffset:{top:0,right:0,bottom:0,left:0},afterReset:function(){},afterReveal:function(){},beforeReset:function(){},beforeReveal:function(){}};var m={success:function(){document.documentElement.classList.add("sr"),document.body?document.body.style.height="100%":document.addEventListener("DOMContentLoaded",(function(){document.body.style.height="100%"}))},failure:function(){return document.documentElement.classList.remove("sr"),{clean:function(){},destroy:function(){},reveal:function(){},sync:function(){},get noop(){return!0}}}};function v(e){return null!==e&&e instanceof Object&&(e.constructor===Object||"[object Object]"===Object.prototype.toString.call(e))}function y(e,t){if(v(e))return Object.keys(e).forEach((function(n){return t(e[n],n,e)}));if(e instanceof Array)return e.forEach((function(n,i){return t(n,i,e)}));throw new TypeError("Expected either an array or object literal.")}function g(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(this.constructor.debug&&console){var i="%cScrollReveal: "+e;t.forEach((function(e){return i+="\n \u2014 "+e})),console.log(i,"color: #ea654b;")}}function b(){var e=this,t={active:[],stale:[]},n={active:[],stale:[]},i={active:[],stale:[]};try{y(o("[data-sr-id]"),(function(e){var n=parseInt(e.getAttribute("data-sr-id"));t.active.push(n)}))}catch(r){throw r}y(this.store.elements,(function(e){-1===t.active.indexOf(e.id)&&t.stale.push(e.id)})),y(t.stale,(function(t){return delete e.store.elements[t]})),y(this.store.elements,(function(e){-1===i.active.indexOf(e.containerId)&&i.active.push(e.containerId),e.hasOwnProperty("sequence")&&-1===n.active.indexOf(e.sequence.id)&&n.active.push(e.sequence.id)})),y(this.store.containers,(function(e){-1===i.active.indexOf(e.id)&&i.stale.push(e.id)})),y(i.stale,(function(t){var n=e.store.containers[t].node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate),delete e.store.containers[t]})),y(this.store.sequences,(function(e){-1===n.active.indexOf(e.id)&&n.stale.push(e.id)})),y(n.stale,(function(t){return delete e.store.sequences[t]}))}var w=function(){var e={},t=document.documentElement.style;function n(n,i){if(void 0===i&&(i=t),n&&"string"===typeof n){if(e[n])return e[n];if("string"===typeof i[n])return e[n]=n;if("string"===typeof i["-webkit-"+n])return e[n]="-webkit-"+n;throw new RangeError('Unable to find "'+n+'" style property.')}throw new TypeError("Expected a string.")}return n.clearCache=function(){return e={}},n}();function E(e){var t=window.getComputedStyle(e.node),n=t.position,i=e.config,r={},o=(e.node.getAttribute("style")||"").match(/[\w-]+\s*:\s*[^;]+\s*/gi)||[];r.computed=o?o.map((function(e){return e.trim()})).join("; ")+";":"",r.generated=o.some((function(e){return e.match(/visibility\s?:\s?visible/i)}))?r.computed:o.concat(["visibility: visible"]).map((function(e){return e.trim()})).join("; ")+";";var s=parseFloat(t.opacity),f=isNaN(parseFloat(i.opacity))?parseFloat(t.opacity):parseFloat(i.opacity),h={computed:s!==f?"opacity: "+s+";":"",generated:s!==f?"opacity: "+f+";":""},p=[];if(parseFloat(i.distance)){var m="top"===i.origin||"bottom"===i.origin?"Y":"X",v=i.distance;"top"!==i.origin&&"left"!==i.origin||(v=/^-/.test(v)?v.substr(1):"-"+v);var y=v.match(/(^-?\d+\.?\d?)|(em$|px$|%$)/g),g=y[0];switch(y[1]){case"em":v=parseInt(t.fontSize)*g;break;case"px":v=g;break;case"%":v="Y"===m?e.node.getBoundingClientRect().height*g/100:e.node.getBoundingClientRect().width*g/100;break;default:throw new RangeError("Unrecognized or missing distance unit.")}"Y"===m?p.push(function(e){var t=a();return t[13]=e,t}(v)):p.push(function(e){var t=a();return t[12]=e,t}(v))}i.rotate.x&&p.push(function(e){var t=Math.PI/180*e,n=a();return n[5]=n[10]=Math.cos(t),n[6]=n[9]=Math.sin(t),n[9]*=-1,n}(i.rotate.x)),i.rotate.y&&p.push(function(e){var t=Math.PI/180*e,n=a();return n[0]=n[10]=Math.cos(t),n[2]=n[8]=Math.sin(t),n[2]*=-1,n}(i.rotate.y)),i.rotate.z&&p.push(u(i.rotate.z)),1!==i.scale&&(0===i.scale?p.push(d(2e-4)):p.push(d(i.scale)));var b={};if(p.length){b.property=w("transform"),b.computed={raw:t[b.property],matrix:l(t[b.property])},p.unshift(b.computed.matrix);var E=p.reduce(c);b.generated={initial:b.property+": matrix3d("+E.join(", ")+");",final:b.property+": matrix3d("+b.computed.matrix.join(", ")+");"}}else b.generated={initial:"",final:""};var j={};if(h.generated||b.generated.initial){j.property=w("transition"),j.computed=t[j.property],j.fragments=[];var k=i.delay,T=i.duration,O=i.easing;h.generated&&j.fragments.push({delayed:"opacity "+T/1e3+"s "+O+" "+k/1e3+"s",instant:"opacity "+T/1e3+"s "+O+" 0s"}),b.generated.initial&&j.fragments.push({delayed:b.property+" "+T/1e3+"s "+O+" "+k/1e3+"s",instant:b.property+" "+T/1e3+"s "+O+" 0s"}),j.computed&&!j.computed.match(/all 0s|none 0s/)&&j.fragments.unshift({delayed:j.computed,instant:j.computed});var x=j.fragments.reduce((function(e,t,n){return e.delayed+=0===n?t.delayed:", "+t.delayed,e.instant+=0===n?t.instant:", "+t.instant,e}),{delayed:"",instant:""});j.generated={delayed:j.property+": "+x.delayed+";",instant:j.property+": "+x.instant+";"}}else j.generated={delayed:"",instant:""};return{inline:r,opacity:h,position:n,transform:b,transition:j}}function j(e,t){t.split(";").forEach((function(t){var n=t.split(":"),i=n[0],r=n.slice(1);i&&r&&(e.style[i.trim()]=r.join(":"))}))}function k(e){var t,n=this;try{y(o(e),(function(e){var i=e.getAttribute("data-sr-id");if(null!==i){t=!0;var r=n.store.elements[i];r.callbackTimer&&window.clearTimeout(r.callbackTimer.clock),j(r.node,r.styles.inline.generated),e.removeAttribute("data-sr-id"),delete n.store.elements[i]}}))}catch(i){return g.call(this,"Clean failed.",i.message)}if(t)try{b.call(this)}catch(i){return g.call(this,"Clean failed.",i.message)}}function T(){var e=this;y(this.store.elements,(function(e){j(e.node,e.styles.inline.generated),e.node.removeAttribute("data-sr-id")})),y(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.removeEventListener("scroll",e.delegate),n.removeEventListener("resize",e.delegate)})),this.store={containers:{},elements:{},history:[],sequences:{}}}function O(e){for(var t=[],n=arguments.length-1;n-- >0;)t[n]=arguments[n+1];if(v(e))return y(t,(function(t){y(t,(function(t,n){v(t)?(e[n]&&v(e[n])||(e[n]={}),O(e[n],t)):e[n]=t}))})),e;throw new TypeError("Target must be an object literal.")}function x(e){return void 0===e&&(e=navigator.userAgent),/Android|iPhone|iPad|iPod/i.test(e)}var q=function(){var e=0;return function(){return e++}}();function A(){var e=this;b.call(this),y(this.store.elements,(function(e){var t=[e.styles.inline.generated];e.visible?(t.push(e.styles.opacity.computed),t.push(e.styles.transform.generated.final),e.revealed=!0):(t.push(e.styles.opacity.generated),t.push(e.styles.transform.generated.initial),e.revealed=!1),j(e.node,t.filter((function(e){return""!==e})).join(" "))})),y(this.store.containers,(function(t){var n=t.node===document.documentElement?window:t.node;n.addEventListener("scroll",e.delegate),n.addEventListener("resize",e.delegate)})),this.delegate(),this.initTimeout=null}function P(e,t){void 0===t&&(t={});var n=t.pristine||this.pristine,i="always"===e.config.useDelay||"onload"===e.config.useDelay&&n||"once"===e.config.useDelay&&!e.seen,r=e.visible&&!e.revealed,o=!e.visible&&e.revealed&&e.config.reset;return t.reveal||r?R.call(this,e,i):t.reset||o?L.call(this,e):void 0}function R(e,t){var n=[e.styles.inline.generated,e.styles.opacity.computed,e.styles.transform.generated.final];t?n.push(e.styles.transition.generated.delayed):n.push(e.styles.transition.generated.instant),e.revealed=e.seen=!0,j(e.node,n.filter((function(e){return""!==e})).join(" ")),M.call(this,e,t)}function L(e){var t=[e.styles.inline.generated,e.styles.opacity.generated,e.styles.transform.generated.initial,e.styles.transition.generated.instant];e.revealed=!1,j(e.node,t.filter((function(e){return""!==e})).join(" ")),M.call(this,e)}function M(e,t){var n=this,i=t?e.config.duration+e.config.delay:e.config.duration,r=e.revealed?e.config.beforeReveal:e.config.beforeReset,o=e.revealed?e.config.afterReveal:e.config.afterReset,s=0;e.callbackTimer&&(s=Date.now()-e.callbackTimer.start,window.clearTimeout(e.callbackTimer.clock)),r(e.node),e.callbackTimer={start:Date.now(),clock:window.setTimeout((function(){o(e.node),e.callbackTimer=null,e.revealed&&!e.config.reset&&e.config.cleanup&&k.call(n,e.node)}),i-s)}}function I(e,t){if(void 0===t&&(t=this.pristine),!e.visible&&e.revealed&&e.config.reset)return P.call(this,e,{reset:!0});var n=this.store.sequences[e.sequence.id],i=e.sequence.index;if(n){var r=new z(n,"visible",this.store),o=new z(n,"revealed",this.store);if(n.models={visible:r,revealed:o},!o.body.length){var s=n.members[r.body[0]],a=this.store.elements[s];if(a)return F.call(this,n,r.body[0],-1,t),F.call(this,n,r.body[0],1,t),P.call(this,a,{reveal:!0,pristine:t})}if(!n.blocked.head&&i===[].concat(o.head).pop()&&i>=[].concat(r.body).shift())return F.call(this,n,i,-1,t),P.call(this,e,{reveal:!0,pristine:t});if(!n.blocked.foot&&i===[].concat(o.foot).shift()&&i<=[].concat(r.body).pop())return F.call(this,n,i,1,t),P.call(this,e,{reveal:!0,pristine:t})}}function N(e){var t=Math.abs(e);if(isNaN(t))throw new RangeError("Invalid sequence interval.");this.id=q(),this.interval=Math.max(t,16),this.members=[],this.models={},this.blocked={head:!1,foot:!1}}function z(e,t,n){var i=this;this.head=[],this.body=[],this.foot=[],y(e.members,(function(e,r){var o=n.elements[e];o&&o[t]&&i.body.push(r)})),this.body.length&&y(e.members,(function(e,r){var o=n.elements[e];o&&!o[t]&&(r<i.body[0]?i.head.push(r):i.foot.push(r))}))}function F(e,t,n,i){var r=this,o=["head",null,"foot"][1+n],s=e.members[t+n],a=this.store.elements[s];e.blocked[o]=!0,setTimeout((function(){e.blocked[o]=!1,a&&I.call(r,a,i)}),e.interval)}function C(e,t,n){var i=this;void 0===t&&(t={}),void 0===n&&(n=!1);var r,s=[],a=t.interval||p.interval;try{a&&(r=new N(a));var c=o(e);if(!c.length)throw new Error("Invalid reveal target.");var l=c.reduce((function(e,n){var a={},c=n.getAttribute("data-sr-id");c?(O(a,i.store.elements[c]),j(a.node,a.styles.inline.computed)):(a.id=q(),a.node=n,a.seen=!1,a.revealed=!1,a.visible=!1);var l=O({},a.config||i.defaults,t);if(!l.mobile&&x()||!l.desktop&&!x())return c&&k.call(i,a),e;var u,d=o(l.container)[0];if(!d)throw new Error("Invalid container.");return d.contains(n)?(u=function(e){var t=[],n=arguments.length-1;for(;n-- >0;)t[n]=arguments[n+1];var i=null;return y(t,(function(t){y(t,(function(t){null===i&&t.node===e&&(i=t.id)}))})),i}(d,s,i.store.containers),null===u&&(u=q(),s.push({id:u,node:d})),a.config=l,a.containerId=u,a.styles=E(a),r&&(a.sequence={id:r.id,index:r.members.length},r.members.push(a.id)),e.push(a),e):e}),[]);y(l,(function(e){i.store.elements[e.id]=e,e.node.setAttribute("data-sr-id",e.id)}))}catch(u){return g.call(this,"Reveal failed.",u.message)}y(s,(function(e){i.store.containers[e.id]={id:e.id,node:e.node}})),r&&(this.store.sequences[r.id]=r),!0!==n&&(this.store.history.push({target:e,options:t}),this.initTimeout&&window.clearTimeout(this.initTimeout),this.initTimeout=window.setTimeout(A.bind(this),0))}function D(){var e=this;y(this.store.history,(function(t){C.call(e,t.target,t.options,!0)})),A.call(this)}var S=Math.sign||function(e){return(e>0)-(e<0)||+e};function W(e,t){var n=t?e.node.clientHeight:e.node.offsetHeight,i=t?e.node.clientWidth:e.node.offsetWidth,r=0,o=0,s=e.node;do{isNaN(s.offsetTop)||(r+=s.offsetTop),isNaN(s.offsetLeft)||(o+=s.offsetLeft),s=s.offsetParent}while(s);return{bounds:{top:r,right:o+i,bottom:r+n,left:o},height:n,width:i}}function Y(e){var t,n;return e.node===document.documentElement?(t=window.pageYOffset,n=window.pageXOffset):(t=e.node.scrollTop,n=e.node.scrollLeft),{top:t,left:n}}function $(e){void 0===e&&(e={});var t=this.store.containers[e.containerId];if(t){var n=Math.max(0,Math.min(1,e.config.viewFactor)),i=e.config.viewOffset,r=e.geometry.bounds.top+e.geometry.height*n,o=e.geometry.bounds.right-e.geometry.width*n,s=e.geometry.bounds.bottom-e.geometry.height*n,a=e.geometry.bounds.left+e.geometry.width*n,c=t.geometry.bounds.top+t.scroll.top+i.top,l=t.geometry.bounds.right+t.scroll.left-i.right,u=t.geometry.bounds.bottom+t.scroll.top-i.bottom,d=t.geometry.bounds.left+t.scroll.left+i.left;return r<u&&o>d&&s>c&&a<l||"fixed"===e.styles.position}}function H(e,t){var n=this;void 0===e&&(e={type:"init"}),void 0===t&&(t=this.store.elements),h((function(){var i="init"===e.type||"resize"===e.type;y(n.store.containers,(function(e){i&&(e.geometry=W.call(n,e,!0));var t=Y.call(n,e);e.scroll&&(e.direction={x:S(t.left-e.scroll.left),y:S(t.top-e.scroll.top)}),e.scroll=t})),y(t,(function(e){(i||void 0===e.geometry)&&(e.geometry=W.call(n,e)),e.visible=$.call(n,e)})),y(t,(function(e){e.sequence?I.call(n,e):P.call(n,e)})),n.pristine=!1}))}var B,U,X,_,Z,G,J,K;function Q(e){var t;if(void 0===e&&(e={}),"undefined"===typeof this||Object.getPrototypeOf(this)!==Q.prototype)return new Q(e);if(!Q.isSupported())return g.call(this,"Instantiation failed.","This browser is not supported."),m.failure();try{t=O({},G||p,e)}catch(n){return g.call(this,"Invalid configuration.",n.message),m.failure()}try{if(!o(t.container)[0])throw new Error("Invalid container.")}catch(n){return g.call(this,n.message),m.failure()}return!(G=t).mobile&&x()||!G.desktop&&!x()?(g.call(this,"This device is disabled.","desktop: "+G.desktop,"mobile: "+G.mobile),m.failure()):(m.success(),this.store={containers:{},elements:{},history:[],sequences:{}},this.pristine=!0,B=B||H.bind(this),U=U||T.bind(this),X=X||C.bind(this),_=_||k.bind(this),Z=Z||D.bind(this),Object.defineProperty(this,"delegate",{get:function(){return B}}),Object.defineProperty(this,"destroy",{get:function(){return U}}),Object.defineProperty(this,"reveal",{get:function(){return X}}),Object.defineProperty(this,"clean",{get:function(){return _}}),Object.defineProperty(this,"sync",{get:function(){return Z}}),Object.defineProperty(this,"defaults",{get:function(){return G}}),Object.defineProperty(this,"version",{get:function(){return"4.0.9"}}),Object.defineProperty(this,"noop",{get:function(){return!1}}),K||(K=this))}Q.isSupported=function(){return function(){var e=document.documentElement.style;return"transform"in e||"WebkitTransform"in e}()&&function(){var e=document.documentElement.style;return"transition"in e||"WebkitTransition"in e}()},Object.defineProperty(Q,"debug",{get:function(){return J||!1},set:function(e){return J="boolean"===typeof e?e:J}}),Q();const V=Q}}]);
//# sourceMappingURL=523.ba023056.chunk.js.map