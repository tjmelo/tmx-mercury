"use strict";(self.webpackChunktmx_mercury=self.webpackChunktmx_mercury||[]).push([[730],{730:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var a=n(914),r=n.n(a),s=n(976),o=n(100),c=n(705),l=n(672),i=n(440),d=n(104);const m=()=>{const e=(0,a.useRef)(null),[t,n]=(0,a.useState)(null);return(0,a.useEffect)((()=>{if(e.current){var t;const a=e.current.attachShadow({mode:"open"}),r=new CustomEvent("shadowroot-created");if(e.current.dispatchEvent(r),n(a),a.innerHTML=null!==(t=d.u.LINK_STYLE)&&void 0!==t?t:"",(0,i.W)()){const e=(0,i.W)();e&&a.appendChild(e)}}}),[]),r().createElement(s.Kd,{basename:location.pathname},r().createElement(a.Suspense,{fallback:r().createElement(o.R,null)},r().createElement("section",{id:"tmx-mercury",ref:e},t&&(0,l.createPortal)(r().createElement(c.A,null),t))))}},363:(e,t,n)=>{n.d(t,{A:()=>l});var a=n(914),r=n.n(a),s=n(89);const o=(0,a.lazy)((()=>Promise.all([n.e(83),n.e(713)]).then(n.bind(n,713))));class c extends r().Component{render(){return(0,s.M)(),r().createElement("section",{className:"container"},r().createElement(o,null))}}const l=c},705:(e,t,n)=>{n.d(t,{A:()=>a.A});var a=n(363)},743:(e,t,n)=>{n.d(t,{R:()=>s});var a=n(914),r=n.n(a);const s=()=>r().createElement("div",{className:"container"},r().createElement("div",{className:"my-3 col-xs-12 container alert alert-info",role:"alert"},"Baixando os dados..."))},100:(e,t,n)=>{n.d(t,{R:()=>a.R});var a=n(743)},104:(e,t,n)=>{n.d(t,{u:()=>a});const a={LINK_STYLE:'<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">'}},89:(e,t,n)=>{n.d(t,{M:()=>r});const a=Object.freeze({NOTIFY_DEFAULT:"default",NOTIFY_DENIED:"denied",NOTIFY_GRANTED:"granted",NOTIFY_STORE:"Notification"}),r=()=>{const e=Notification.permission;localStorage.getItem(a.NOTIFY_STORE)||Notification.requestPermission((()=>{e===a.NOTIFY_GRANTED&&localStorage.setItem(a.NOTIFY_STORE,a.NOTIFY_GRANTED),e===a.NOTIFY_DENIED&&localStorage.setItem(a.NOTIFY_STORE,a.NOTIFY_DENIED)}))}},440:(e,t,n)=>{n.d(t,{W:()=>a});const a=()=>null}}]);