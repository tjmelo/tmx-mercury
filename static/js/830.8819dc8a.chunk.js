"use strict";(self.webpackChunktmx_mercury=self.webpackChunktmx_mercury||[]).push([[830],{830:(e,s,t)=>{t.r(s),t.d(s,{default:()=>j});var a=t(914),n=t(376),o=t(584);const r=t(686).A.create({baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades/",headers:{"X-Custom-Header":"tmx-mercury"}}),i=e=>{const[s,t]=(0,a.useState)([]);return(0,a.useEffect)((()=>{(async()=>{const{data:s}=await r.get(e);t(s)})()}),[]),s};var l=t(723);const c=(0,a.lazy)((()=>Promise.all([t.e(221),t.e(76)]).then(t.bind(t,76)))),d=(0,a.lazy)((()=>t.e(238).then(t.bind(t,238)))),m=(0,a.lazy)((()=>t.e(852).then(t.bind(t,852)))),u=()=>{const e=i("estados"),[s,t]=(0,a.useState)([]),n=e=>(0,l.jsx)(c,{nome:e.nome,sigla:e.sigla,regiao:e.regiao.nome,link:()=>e},e.id);e.sort(((e,s)=>e.nome<s.nome?-1:((e,s)=>e.nome>s.nome?1:0)(e,s)));const r=e.map((e=>n(e)));(0,a.useEffect)((()=>t(r)),[e]);return(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(o.R,{}),children:[(0,l.jsx)("h1",{className:"py-3","data-testid":"title-list-state",children:"Estados do Brasil"}),(0,l.jsx)(d,{search:s=>{const a=e.filter((e=>{const t=new RegExp(s.target.value,"gi"),a=e.nome;return t.test(a)}));return t(a.map((e=>n(e))))}}),(0,l.jsx)(m,{children:null!==s&&void 0!==s&&s.length?s:(0,l.jsx)(o.R,{})})]})};var h=t(891);const x=(0,a.lazy)((()=>t.e(225).then(t.bind(t,225)))),p=()=>{const{estado:e}=(0,n.g)(),s=i("estados/".concat(e,"/municipios")).map((e=>(0,l.jsx)(x,{nome:e.nome,mesorregiao:e.microrregiao.nome},e.id)));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h1",{className:"mt-3",children:["Munc\xedpios do ",null===e||void 0===e?void 0:e.toUpperCase()]}),(0,l.jsx)(h.N_,{to:"/",className:"btn btn-link mb-3",children:"Voltar para os estados"}),null!==s&&void 0!==s?s:(0,l.jsx)(o.R,{})]})},j=()=>(0,l.jsxs)(n.BV,{children:[(0,l.jsx)(n.qh,{path:"/",element:(0,l.jsx)(u,{})}),(0,l.jsx)(n.qh,{path:"/estado/:estado",element:(0,l.jsx)(p,{})})]})}}]);
//# sourceMappingURL=830.8819dc8a.chunk.js.map