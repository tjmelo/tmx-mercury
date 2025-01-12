/*! For license information please see 289.51f541f0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktmx_mercury=self.webpackChunktmx_mercury||[]).push([[289],{83:(e,t,r)=>{function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},n.apply(this,arguments)}var a;r.d(t,{AO:()=>h,Gh:()=>B,HS:()=>D,Oi:()=>l,Rr:()=>p,pX:()=>A,pb:()=>U,rc:()=>a,tH:()=>W,ue:()=>v,yD:()=>j,zR:()=>i}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(a||(a={}));const o="popstate";function i(e){return void 0===e&&(e={}),d((function(e,t){let{pathname:r,search:n,hash:a}=e.location;return c("",{pathname:r,search:n,hash:a},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:h(t)}),null,e)}function l(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function s(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(r){}}}function u(e,t){return{usr:e.state,key:e.key,idx:t}}function c(e,t,r,a){return void 0===r&&(r=null),n({pathname:"string"===typeof e?e:e.pathname,search:"",hash:""},"string"===typeof t?p(t):t,{state:r,key:t&&t.key||a||Math.random().toString(36).substr(2,8)})}function h(e){let{pathname:t="/",search:r="",hash:n=""}=e;return r&&"?"!==r&&(t+="?"===r.charAt(0)?r:"?"+r),n&&"#"!==n&&(t+="#"===n.charAt(0)?n:"#"+n),t}function p(e){let t={};if(e){let r=e.indexOf("#");r>=0&&(t.hash=e.substr(r),e=e.substr(0,r));let n=e.indexOf("?");n>=0&&(t.search=e.substr(n),e=e.substr(0,n)),e&&(t.pathname=e)}return t}function d(e,t,r,i){void 0===i&&(i={});let{window:s=document.defaultView,v5Compat:p=!1}=i,d=s.history,f=a.Pop,v=null,m=g();function g(){return(d.state||{idx:null}).idx}function y(){f=a.Pop;let e=g(),t=null==e?null:e-m;m=e,v&&v({action:f,location:w.location,delta:t})}function b(e){let t="null"!==s.location.origin?s.location.origin:s.location.href,r="string"===typeof e?e:h(e);return r=r.replace(/ $/,"%20"),l(t,"No window.location.(origin|href) available to create URL for href: "+r),new URL(r,t)}null==m&&(m=0,d.replaceState(n({},d.state,{idx:m}),""));let w={get action(){return f},get location(){return e(s,d)},listen(e){if(v)throw new Error("A history only accepts one active listener");return s.addEventListener(o,y),v=e,()=>{s.removeEventListener(o,y),v=null}},createHref:e=>t(s,e),createURL:b,encodeLocation(e){let t=b(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){f=a.Push;let n=c(w.location,e,t);r&&r(n,e),m=g()+1;let o=u(n,m),i=w.createHref(n);try{d.pushState(o,"",i)}catch(l){if(l instanceof DOMException&&"DataCloneError"===l.name)throw l;s.location.assign(i)}p&&v&&v({action:f,location:w.location,delta:1})},replace:function(e,t){f=a.Replace;let n=c(w.location,e,t);r&&r(n,e),m=g();let o=u(n,m),i=w.createHref(n);d.replaceState(o,"",i),p&&v&&v({action:f,location:w.location,delta:0})},go:e=>d.go(e)};return w}var f;!function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"}(f||(f={}));new Set(["lazy","caseSensitive","path","id","index","children"]);function v(e,t,r){return void 0===r&&(r="/"),m(e,t,r,!1)}function m(e,t,r,n){let a=U(("string"===typeof t?p(t):t).pathname||"/",r);if(null==a)return null;let o=g(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let r=e.length===t.length&&e.slice(0,-1).every(((e,r)=>e===t[r]));return r?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(o);let i=null;for(let l=0;null==i&&l<o.length;++l){let e=k(a);i=P(o[l],e,n)}return i}function g(e,t,r,n){void 0===t&&(t=[]),void 0===r&&(r=[]),void 0===n&&(n="");let a=(e,a,o)=>{let i={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:a,route:e};i.relativePath.startsWith("/")&&(l(i.relativePath.startsWith(n),'Absolute route path "'+i.relativePath+'" nested under path "'+n+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),i.relativePath=i.relativePath.slice(n.length));let s=D([n,i.relativePath]),u=r.concat(i);e.children&&e.children.length>0&&(l(!0!==e.index,'Index routes must not have child routes. Please remove all child routes from route path "'+s+'".'),g(e.children,t,u,s)),(null!=e.path||e.index)&&t.push({path:s,score:O(s,e.index),routesMeta:u})};return e.forEach(((e,t)=>{var r;if(""!==e.path&&null!=(r=e.path)&&r.includes("?"))for(let n of y(e.path))a(e,t,n);else a(e,t)})),t}function y(e){let t=e.split("/");if(0===t.length)return[];let[r,...n]=t,a=r.endsWith("?"),o=r.replace(/\?$/,"");if(0===n.length)return a?[o,""]:[o];let i=y(n.join("/")),l=[];return l.push(...i.map((e=>""===e?o:[o,e].join("/")))),a&&l.push(...i),l.map((t=>e.startsWith("/")&&""===t?"/":t))}const b=/^:[\w-]+$/,w=3,x=2,R=1,S=10,E=-2,C=e=>"*"===e;function O(e,t){let r=e.split("/"),n=r.length;return r.some(C)&&(n+=E),t&&(n+=x),r.filter((e=>!C(e))).reduce(((e,t)=>e+(b.test(t)?w:""===t?R:S)),n)}function P(e,t,r){void 0===r&&(r=!1);let{routesMeta:n}=e,a={},o="/",i=[];for(let l=0;l<n.length;++l){let e=n[l],s=l===n.length-1,u="/"===o?t:t.slice(o.length)||"/",c=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:s},u),h=e.route;if(!c&&s&&r&&!n[n.length-1].route.index&&(c=_({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},u)),!c)return null;Object.assign(a,c.params),i.push({params:a,pathname:D([o,c.pathname]),pathnameBase:F(D([o,c.pathnameBase])),route:h}),"/"!==c.pathnameBase&&(o=D([o,c.pathnameBase]))}return i}function _(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[r,n]=function(e,t,r){void 0===t&&(t=!1);void 0===r&&(r=!0);s("*"===e||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were "'+e.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+e.replace(/\*$/,"/*")+'".');let n=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,r)=>(n.push({paramName:t,isOptional:null!=r}),r?"/?([^\\/]+)?":"/([^\\/]+)")));e.endsWith("*")?(n.push({paramName:"*"}),a+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r?a+="\\/*$":""!==e&&"/"!==e&&(a+="(?:(?=\\/|$))");let o=new RegExp(a,t?void 0:"i");return[o,n]}(e.path,e.caseSensitive,e.end),a=t.match(r);if(!a)return null;let o=a[0],i=o.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:n.reduce(((e,t,r)=>{let{paramName:n,isOptional:a}=t;if("*"===n){let e=l[r]||"";i=o.slice(0,o.length-e.length).replace(/(.)\/+$/,"$1")}const s=l[r];return e[n]=a&&!s?void 0:(s||"").replace(/%2F/g,"/"),e}),{}),pathname:o,pathnameBase:i,pattern:e}}function k(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return s(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}function U(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let r=t.endsWith("/")?t.length-1:t.length,n=e.charAt(r);return n&&"/"!==n?null:e.slice(r)||"/"}function L(e,t,r,n){return"Cannot include a '"+e+"' character in a manually specified `to."+t+"` field ["+JSON.stringify(n)+"].  Please separate it out to the `to."+r+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function T(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function j(e,t){let r=T(e);return t?r.map(((e,t)=>t===r.length-1?e.pathname:e.pathnameBase)):r.map((e=>e.pathnameBase))}function B(e,t,r,a){let o;void 0===a&&(a=!1),"string"===typeof e?o=p(e):(o=n({},e),l(!o.pathname||!o.pathname.includes("?"),L("?","pathname","search",o)),l(!o.pathname||!o.pathname.includes("#"),L("#","pathname","hash",o)),l(!o.search||!o.search.includes("#"),L("#","search","hash",o)));let i,s=""===e||""===o.pathname,u=s?"/":o.pathname;if(null==u)i=r;else{let e=t.length-1;if(!a&&u.startsWith("..")){let t=u.split("/");for(;".."===t[0];)t.shift(),e-=1;o.pathname=t.join("/")}i=e>=0?t[e]:"/"}let c=function(e,t){void 0===t&&(t="/");let{pathname:r,search:n="",hash:a=""}="string"===typeof e?p(e):e,o=r?r.startsWith("/")?r:function(e,t){let r=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?r.length>1&&r.pop():"."!==e&&r.push(e)})),r.length>1?r.join("/"):"/"}(r,t):t;return{pathname:o,search:$(n),hash:N(a)}}(o,i),h=u&&"/"!==u&&u.endsWith("/"),d=(s||"."===u)&&r.endsWith("/");return c.pathname.endsWith("/")||!h&&!d||(c.pathname+="/"),c}const D=e=>e.join("/").replace(/\/\/+/g,"/"),F=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),$=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",N=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";class W extends Error{}function A(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}const H=["post","put","patch","delete"],I=(new Set(H),["get",...H]);new Set(I),new Set([301,302,303,307,308]),new Set([307,308]);Symbol("deferred")},891:(e,t,r)=>{r.d(t,{Kd:()=>h,N_:()=>f});var n=r(914),a=r(672),o=r(376),i=r(83);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);const u=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(g){}new Map;const c=n.startTransition;a.flushSync,n.useId;function h(e){let{basename:t,children:r,future:a,window:l}=e,s=n.useRef();null==s.current&&(s.current=(0,i.zR)({window:l,v5Compat:!0}));let u=s.current,[h,p]=n.useState({action:u.action,location:u.location}),{v7_startTransition:d}=a||{},f=n.useCallback((e=>{d&&c?c((()=>p(e))):p(e)}),[p,d]);return n.useLayoutEffect((()=>u.listen(f)),[u,f]),n.useEffect((()=>(0,o.V8)(a)),[a]),n.createElement(o.Ix,{basename:t,children:r,location:h.location,navigationType:h.action,navigator:u,future:a})}const p="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement,d=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f=n.forwardRef((function(e,t){let r,{onClick:a,relative:c,reloadDocument:h,replace:f,state:v,target:m,to:y,preventScrollReset:b,viewTransition:w}=e,x=s(e,u),{basename:R}=n.useContext(o.jb),S=!1;if("string"===typeof y&&d.test(y)&&(r=y,p))try{let e=new URL(window.location.href),t=y.startsWith("//")?new URL(e.protocol+y):new URL(y),r=(0,i.pb)(t.pathname,R);t.origin===e.origin&&null!=r?y=r+t.search+t.hash:S=!0}catch(g){}let E=(0,o.$P)(y,{relative:c}),C=function(e,t){let{target:r,replace:a,state:l,preventScrollReset:s,relative:u,viewTransition:c}=void 0===t?{}:t,h=(0,o.Zp)(),p=(0,o.zy)(),d=(0,o.x$)(e,{relative:u});return n.useCallback((t=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(t,r)){t.preventDefault();let r=void 0!==a?a:(0,i.AO)(p)===(0,i.AO)(d);h(e,{replace:r,state:l,preventScrollReset:s,relative:u,viewTransition:c})}}),[p,h,d,a,l,r,e,s,u,c])}(y,{replace:f,state:v,target:m,preventScrollReset:b,relative:c,viewTransition:w});return n.createElement("a",l({},x,{href:r||E,onClick:S||h?a:function(e){a&&a(e),e.defaultPrevented||C(e)},ref:t,target:m}))}));var v,m;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(v||(v={})),function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"}(m||(m={}))},376:(e,t,r)=>{r.d(t,{$P:()=>p,BV:()=>F,Ix:()=>D,V8:()=>j,Zp:()=>m,g:()=>g,jb:()=>s,qh:()=>B,x$:()=>y,zy:()=>f});var n=r(914),a=r(83);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}const i=n.createContext(null);const l=n.createContext(null);const s=n.createContext(null);const u=n.createContext(null);const c=n.createContext({outlet:null,matches:[],isDataRoute:!1});const h=n.createContext(null);function p(e,t){let{relative:r}=void 0===t?{}:t;d()||(0,a.Oi)(!1);let{basename:o,navigator:i}=n.useContext(s),{hash:l,pathname:u,search:c}=y(e,{relative:r}),h=u;return"/"!==o&&(h="/"===u?o:(0,a.HS)([o,u])),i.createHref({pathname:h,search:c,hash:l})}function d(){return null!=n.useContext(u)}function f(){return d()||(0,a.Oi)(!1),n.useContext(u).location}function v(e){n.useContext(s).static||n.useLayoutEffect(e)}function m(){let{isDataRoute:e}=n.useContext(c);return e?function(){let{router:e}=P(C.UseNavigateStable),t=k(O.UseNavigateStable),r=n.useRef(!1);return v((()=>{r.current=!0})),n.useCallback((function(n,a){void 0===a&&(a={}),r.current&&("number"===typeof n?e.navigate(n):e.navigate(n,o({fromRouteId:t},a)))}),[e,t])}():function(){d()||(0,a.Oi)(!1);let e=n.useContext(i),{basename:t,future:r,navigator:o}=n.useContext(s),{matches:l}=n.useContext(c),{pathname:u}=f(),h=JSON.stringify((0,a.yD)(l,r.v7_relativeSplatPath)),p=n.useRef(!1);return v((()=>{p.current=!0})),n.useCallback((function(r,n){if(void 0===n&&(n={}),!p.current)return;if("number"===typeof r)return void o.go(r);let i=(0,a.Gh)(r,JSON.parse(h),u,"path"===n.relative);null==e&&"/"!==t&&(i.pathname="/"===i.pathname?t:(0,a.HS)([t,i.pathname])),(n.replace?o.replace:o.push)(i,n.state,n)}),[t,o,h,u,e])}()}function g(){let{matches:e}=n.useContext(c),t=e[e.length-1];return t?t.params:{}}function y(e,t){let{relative:r}=void 0===t?{}:t,{future:o}=n.useContext(s),{matches:i}=n.useContext(c),{pathname:l}=f(),u=JSON.stringify((0,a.yD)(i,o.v7_relativeSplatPath));return n.useMemo((()=>(0,a.Gh)(e,JSON.parse(u),l,"path"===r)),[e,u,l,r])}function b(e,t,r,i){d()||(0,a.Oi)(!1);let{navigator:l}=n.useContext(s),{matches:h}=n.useContext(c),p=h[h.length-1],v=p?p.params:{},m=(p&&p.pathname,p?p.pathnameBase:"/");p&&p.route;let g,y=f();if(t){var b;let e="string"===typeof t?(0,a.Rr)(t):t;"/"===m||(null==(b=e.pathname)?void 0:b.startsWith(m))||(0,a.Oi)(!1),g=e}else g=y;let w=g.pathname||"/",x=w;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+w.replace(/^\//,"").split("/").slice(e.length).join("/")}let R=(0,a.ue)(e,{pathname:x});let S=E(R&&R.map((e=>Object.assign({},e,{params:Object.assign({},v,e.params),pathname:(0,a.HS)([m,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:(0,a.HS)([m,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),h,r,i);return t&&S?n.createElement(u.Provider,{value:{location:o({pathname:"/",search:"",hash:"",state:null,key:"default"},g),navigationType:a.rc.Pop}},S):S}function w(){let e=function(){var e;let t=n.useContext(h),r=_(O.UseRouteError),a=k(O.UseRouteError);if(void 0!==t)return t;return null==(e=r.errors)?void 0:e[a]}(),t=(0,a.pX)(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),r=e instanceof Error?e.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o};return n.createElement(n.Fragment,null,n.createElement("h2",null,"Unexpected Application Error!"),n.createElement("h3",{style:{fontStyle:"italic"}},t),r?n.createElement("pre",{style:i},r):null,null)}const x=n.createElement(w,null);class R extends n.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?n.createElement(c.Provider,{value:this.props.routeContext},n.createElement(h.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function S(e){let{routeContext:t,match:r,children:a}=e,o=n.useContext(i);return o&&o.static&&o.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=r.route.id),n.createElement(c.Provider,{value:t},a)}function E(e,t,r,o){var i;if(void 0===t&&(t=[]),void 0===r&&(r=null),void 0===o&&(o=null),null==e){var l;if(!r)return null;if(r.errors)e=r.matches;else{if(!(null!=(l=o)&&l.v7_partialHydration&&0===t.length&&!r.initialized&&r.matches.length>0))return null;e=r.matches}}let s=e,u=null==(i=r)?void 0:i.errors;if(null!=u){let e=s.findIndex((e=>e.route.id&&void 0!==(null==u?void 0:u[e.route.id])));e>=0||(0,a.Oi)(!1),s=s.slice(0,Math.min(s.length,e+1))}let c=!1,h=-1;if(r&&o&&o.v7_partialHydration)for(let n=0;n<s.length;n++){let e=s[n];if((e.route.HydrateFallback||e.route.hydrateFallbackElement)&&(h=n),e.route.id){let{loaderData:t,errors:n}=r,a=e.route.loader&&void 0===t[e.route.id]&&(!n||void 0===n[e.route.id]);if(e.route.lazy||a){c=!0,s=h>=0?s.slice(0,h+1):[s[0]];break}}}return s.reduceRight(((e,a,o)=>{let i,l=!1,p=null,d=null;var f;r&&(i=u&&a.route.id?u[a.route.id]:void 0,p=a.route.errorElement||x,c&&(h<0&&0===o?(f="route-fallback",!1||U[f]||(U[f]=!0),l=!0,d=null):h===o&&(l=!0,d=a.route.hydrateFallbackElement||null)));let v=t.concat(s.slice(0,o+1)),m=()=>{let t;return t=i?p:l?d:a.route.Component?n.createElement(a.route.Component,null):a.route.element?a.route.element:e,n.createElement(S,{match:a,routeContext:{outlet:e,matches:v,isDataRoute:null!=r},children:t})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===o)?n.createElement(R,{location:r.location,revalidation:r.revalidation,component:p,error:i,children:m(),routeContext:{outlet:null,matches:v,isDataRoute:!0}}):m()}),null)}var C=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(C||{}),O=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(O||{});function P(e){let t=n.useContext(i);return t||(0,a.Oi)(!1),t}function _(e){let t=n.useContext(l);return t||(0,a.Oi)(!1),t}function k(e){let t=function(){let e=n.useContext(c);return e||(0,a.Oi)(!1),e}(),r=t.matches[t.matches.length-1];return r.route.id||(0,a.Oi)(!1),r.route.id}const U={};const L={};const T=(e,t,r)=>{var n;L[n="\u26a0\ufe0f React Router Future Flag Warning: "+t+". You can use the `"+e+"` future flag to opt-in early. For more information, see "+r+"."]||(L[n]=!0,console.warn(n))};function j(e,t){void 0===(null==e?void 0:e.v7_startTransition)&&T("v7_startTransition","React Router will begin wrapping state updates in `React.startTransition` in v7","https://reactrouter.com/v6/upgrading/future#v7_starttransition"),void 0!==(null==e?void 0:e.v7_relativeSplatPath)||t&&t.v7_relativeSplatPath||T("v7_relativeSplatPath","Relative route resolution within Splat routes is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath"),t&&(void 0===t.v7_fetcherPersist&&T("v7_fetcherPersist","The persistence behavior of fetchers is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist"),void 0===t.v7_normalizeFormMethod&&T("v7_normalizeFormMethod","Casing of `formMethod` fields is being normalized to uppercase in v7","https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod"),void 0===t.v7_partialHydration&&T("v7_partialHydration","`RouterProvider` hydration behavior is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_partialhydration"),void 0===t.v7_skipActionErrorRevalidation&&T("v7_skipActionErrorRevalidation","The revalidation behavior after 4xx/5xx `action` responses is changing in v7","https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation"))}n.startTransition;function B(e){(0,a.Oi)(!1)}function D(e){let{basename:t="/",children:r=null,location:i,navigationType:l=a.rc.Pop,navigator:c,static:h=!1,future:p}=e;d()&&(0,a.Oi)(!1);let f=t.replace(/^\/*/,"/"),v=n.useMemo((()=>({basename:f,navigator:c,static:h,future:o({v7_relativeSplatPath:!1},p)})),[f,p,c,h]);"string"===typeof i&&(i=(0,a.Rr)(i));let{pathname:m="/",search:g="",hash:y="",state:b=null,key:w="default"}=i,x=n.useMemo((()=>{let e=(0,a.pb)(m,f);return null==e?null:{location:{pathname:e,search:g,hash:y,state:b,key:w},navigationType:l}}),[f,m,g,y,b,w,l]);return null==x?null:n.createElement(s.Provider,{value:v},n.createElement(u.Provider,{children:r,value:x}))}function F(e){let{children:t,location:r}=e;return b($(t),r)}new Promise((()=>{}));n.Component;function $(e,t){void 0===t&&(t=[]);let r=[];return n.Children.forEach(e,((e,o)=>{if(!n.isValidElement(e))return;let i=[...t,o];if(e.type===n.Fragment)return void r.push.apply(r,$(e.props.children,i));e.type!==B&&(0,a.Oi)(!1),e.props.index&&e.props.children&&(0,a.Oi)(!1);let l={id:e.props.id||i.join("-"),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:null!=e.props.ErrorBoundary||null!=e.props.errorElement,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(l.children=$(e.props.children,i)),r.push(l)})),r}},9:(e,t,r)=>{var n=r(914),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,r){var n,o={},u=null,c=null;for(n in void 0!==r&&(u=""+r),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)i.call(t,n)&&!s.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:a,type:e,key:u,ref:c,props:o,_owner:l.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},723:(e,t,r)=>{e.exports=r(9)}}]);
//# sourceMappingURL=289.51f541f0.chunk.js.map