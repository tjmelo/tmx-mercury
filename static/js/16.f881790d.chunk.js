"use strict";(self.webpackChunktmx_mercury=self.webpackChunktmx_mercury||[]).push([[16],{1016:(e,s,t)=>{t.r(s),t.d(s,{default:()=>g});var a=t(2791),n=t(7689),o=t(4569);const r=t.n(o)().create({baseURL:"https://servicodados.ibge.gov.br/api/v1/localidades/",headers:{"X-Custom-Header":"tmx-mercury"}});var i=t(4473),l=t(184);const c=(0,a.lazy)((()=>Promise.all([t.e(523),t.e(345)]).then(t.bind(t,9345)))),d=(0,a.lazy)((()=>t.e(894).then(t.bind(t,2894)))),m=(0,a.lazy)((()=>t.e(567).then(t.bind(t,2567)))),u=()=>{const[e,s]=(0,a.useState)([]),[t,n]=(0,a.useState)([]),o=e=>(0,l.jsx)(c,{nome:e.nome,sigla:e.sigla,regiao:e.regiao.nome,link:()=>e},e.id);(0,a.useEffect)((()=>{(async()=>{const{data:e}=await r.get("estados");s(e),e.sort(((e,s)=>e.nome<s.nome?-1:e.nome>s.nome?1:0)),n(e.map((e=>o(e))))})()}),[]);return(0,l.jsxs)(a.Suspense,{fallback:(0,l.jsx)(i.g,{}),children:[(0,l.jsxs)("h1",{className:"py-3","data-testid":"title-list-state",children:[" ","Estados do Brasil"," "]}),(0,l.jsx)(d,{search:s=>{const t=e.filter((e=>{const t=new RegExp(s.target.value,"gi"),a=e.nome;return t.test(a)}));n(t.map((e=>o(e))))}}),(0,l.jsx)(m,{children:t.length?t:(0,l.jsx)(i.v,{})})]})};var h=t(1087);const x=(0,a.lazy)((()=>t.e(512).then(t.bind(t,512)))),p=()=>{const[e,s]=(0,a.useState)(null),{estado:t}=(0,n.UO)();return(0,a.useEffect)((()=>{(async()=>{const{data:e}=await r.get("estados/".concat(t,"/municipios"));s(e.map((e=>(0,l.jsx)(x,{nome:e.nome,mesorregiao:e.microrregiao.nome},e.id))))})()}),[t]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)("h1",{className:"mt-3",children:["Munc\xedpios do ",null===t||void 0===t?void 0:t.toUpperCase()]}),(0,l.jsx)(h.rU,{to:"/",className:"btn btn-link mb-3",children:"Voltar para os estados"}),e||(0,l.jsx)(i.g,{})]})},g=()=>(0,l.jsxs)(n.Z5,{children:[(0,l.jsx)(n.AW,{path:"/",element:(0,l.jsx)(u,{})}),(0,l.jsx)(n.AW,{path:"/estado/:estado",element:(0,l.jsx)(p,{})})]})}}]);
//# sourceMappingURL=16.f881790d.chunk.js.map