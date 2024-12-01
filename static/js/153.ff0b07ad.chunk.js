"use strict";(self.webpackChunkreact_redux_dashboard=self.webpackChunkreact_redux_dashboard||[]).push([[153],{534:(e,t,r)=>{r.r(t),r.d(t,{default:()=>z});var n=r(43),o=r(3);function s(e){if("function"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected a function, instead received "+typeof e)}var i=e=>Array.isArray(e)?e:[e];function l(e){const t=Array.isArray(e[0])?e[0]:e;return function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected all items to be functions, instead received the following types: ";if(!e.every((e=>"function"===typeof e))){const r=e.map((e=>"function"===typeof e?`function ${e.name||"unnamed"}()`:typeof e)).join(", ");throw new TypeError(`${t}[${r}]`)}}(t,"createSelector expects all input-selectors to be functions, but received the following types: "),t}Symbol(),Object.getPrototypeOf({});var a="undefined"!==typeof WeakRef?WeakRef:class{constructor(e){this.value=e}deref(){return this.value}};function d(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r={s:0,v:void 0,o:null,p:null};const{resultEqualityCheck:n}=t;let o,s=0;function i(){let t=r;const{length:i}=arguments;for(let e=0,r=i;e<r;e++){const r=arguments[e];if("function"===typeof r||"object"===typeof r&&null!==r){let e=t.o;null===e&&(t.o=e=new WeakMap);const n=e.get(r);void 0===n?(t={s:0,v:void 0,o:null,p:null},e.set(r,t)):t=n}else{let e=t.p;null===e&&(t.p=e=new Map);const n=e.get(r);void 0===n?(t={s:0,v:void 0,o:null,p:null},e.set(r,t)):t=n}}const l=t;let d;if(1===t.s)d=t.v;else if(d=e.apply(null,arguments),s++,n){const e=o?.deref?.()??o;null!=e&&n(e,d)&&(d=e,0!==s&&s--);o="object"===typeof d&&null!==d||"function"===typeof d?new a(d):d}return l.s=1,l.v=d,d}return i.clearCache=()=>{r={s:0,v:void 0,o:null,p:null},i.resetResultsCount()},i.resultsCount=()=>s,i.resetResultsCount=()=>{s=0},i}function c(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];const o="function"===typeof e?{memoize:e,memoizeOptions:r}:e,a=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];let n,a=0,c=0,p={},u=t.pop();"object"===typeof u&&(p=u,u=t.pop()),s(u,`createSelector expects an output function after the inputs, but received: [${typeof u}]`);const h={...o,...p},{memoize:f,memoizeOptions:y=[],argsMemoize:x=d,argsMemoizeOptions:v=[],devModeChecks:b={}}=h,g=i(y),m=i(v),j=l(t),w=f((function(){return a++,u.apply(null,arguments)}),...g);const k=x((function(){c++;const e=function(e,t){const r=[],{length:n}=e;for(let o=0;o<n;o++)r.push(e[o].apply(null,t));return r}(j,arguments);return n=w.apply(null,e),n}),...m);return Object.assign(k,{resultFunc:u,memoizedResultFunc:w,dependencies:j,dependencyRecomputations:()=>c,resetDependencyRecomputations:()=>{c=0},lastResult:()=>n,recomputations:()=>a,resetRecomputations:()=>{a=0},memoize:f,argsMemoize:x})};return Object.assign(a,{withTypes:()=>a}),a}var p=c(d),u=Object.assign((function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:p;!function(e){if("object"!==typeof e)throw new TypeError(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"expected an object, instead received "+typeof e)}(e,"createStructuredSelector expects first argument to be an object where each property is a selector, instead received a "+typeof e);const r=Object.keys(e),n=t(r.map((t=>e[t])),(function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(((e,t,n)=>(e[r[n]]=t,e)),{})}));return n}),{withTypes:()=>u});const h=e=>e.mainComponent,f=p(h,(e=>e.seriesDataList)),y=p(h,(e=>e.selectedSeriesData));var x=r(564),v=r(825),b=r(464),g=r(579);const m=b.Ay.div`
    background-color: #e9e9e9;
    display: flex;
    padding: 10px;
    input[type=text] {
        font-size: 1.2rem;
        flex-grow: 1; 
  }
  button{
    padding: 6px 10px;
    background: #ddd;
    font-size: 1.2rem;
    border: none;
    cursor: pointer;
  }
   button:hover{background: #ccc;} 
  .topnav input[type=text] {
    border: 1px solid #ccc; 
    
  }
`,j=e=>{let{name:t,setName:r,onSortByClickCB:o}=e;const[s,i]=(0,n.useState)(!1),[l,a]=(0,n.useState)(""),d=e=>{let{target:{value:t}}=e;a(t),o(t)};return(0,g.jsxs)(m,{className:"seach-wrapper",children:[(0,g.jsx)("button",{type:"button",onClick:()=>i((e=>!e)),children:"Sort By..."}),s&&(0,g.jsx)("div",{children:(0,g.jsxs)("fieldset",{children:[(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"sortBy",value:"year",checked:"year"===l,onChange:d})," Year"]}),(0,g.jsxs)("label",{children:[(0,g.jsx)("input",{type:"checkbox",name:"sortBy",value:"episode",checked:"episode"===l,onChange:d})," Episode"]})]})}),(0,g.jsx)("input",{type:"text",placeholder:"Search by episode or title...",name:"search",value:t,onChange:e=>{let{target:{value:t}}=e;return r(t)}})]})};var w=r(866);const k=b.Ay.div`
    flex-basis: 65%;
    padding: 0.8rem;
    .image-wrapper {
        display: flex;
        justify-content: flex-start;
        & img{
            width: 120px;
        }
        & .content{
            padding: 0 0.8rem;
        }    
    }
`,C=b.Ay.button`
    background: none;
    border: none;
    padding: 0px;
    margin-right: 1rem;
    vertical-align: top;
    width: 20px;
    height: 20px;
    margin: 0px;
    cursor: pointer;
    position: absolute;
    top: 0;
    right: 0;
`,S=e=>{let{setDetailViewVisible:t}=e;return(0,g.jsx)(C,{className:"close-btn",type:"button",onClick:()=>t(!1),children:(0,g.jsx)("svg",{className:"cross__svg",xmlns:"http://www.w3.org/2000/svg",children:(0,g.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z",fill:"#000000"})})})},A=e=>{let{selectedSeriesData:t,rowData:r,setDetailViewVisible:n}=e;return(0,g.jsxs)("div",{style:{position:"relative"},children:[(0,g.jsx)(S,{setDetailViewVisible:n}),(0,g.jsxs)("h2",{children:["EPISODE ",(0,x.VS)(r.episode_id)," - ",r.title]}),(0,g.jsxs)("div",{className:"image-wrapper",children:[(0,g.jsx)("div",{children:(0,g.jsx)("img",{src:t.Poster,alt:`${t.Title} image`,loading:"lazy"})}),(0,g.jsx)("div",{className:"content",children:r.opening_crawl})]}),(0,g.jsxs)("p",{children:["Directed By: ",r.producer]})]})},D=e=>{let{data:t,setDetailViewVisible:r}=e;const s=(0,o.wA)(),{loading:i,error:l,data:a}=(0,o.d4)(y);return(0,n.useEffect)((()=>{var e,r;(null===(e=a.Title)||void 0===e?void 0:e.toLowerCase())!==(null===(r=t.title)||void 0===r?void 0:r.toLowerCase())&&s((0,v.JJ)({title:t.title,year:t.release_date.split("-").at(0)}))}),[t]),(0,g.jsxs)(k,{children:[i&&(0,g.jsx)("div",{className:"loading",children:(0,g.jsx)(w.A,{})}),l&&(0,g.jsxs)("div",{children:["Error: ",l]}),!i&&!l&&(0,g.jsx)(A,{selectedSeriesData:a,rowData:t,setDetailViewVisible:r})]})},E=b.Ay.div`
    display: flex;
    justify-content: flex-start;
    & > div{
        flex-basis: 100%;
    }
`,_=b.Ay.table`
    border-collapse: collapse;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    width: 100%;
    & > thead tr {
        background-color: #009879;
        color: #ffffff;
        text-align: left;
    }
    & tr > th, tr > td {
        padding: 12px 15px;
    }
    & > tbody tr {
        cursor: pointer;
        border-bottom: 1px solid #dddddd;
    }
    & > tbody tr.selected{background-color: #ccc;}    
    & > tbody tr:last-of-type {
        border-bottom: 2px solid #009879;
    }
    & > tbody tr.active-row {
        font-weight: bold;
        color: #009879;
    }
    & > tbody tr:hover{background-color: rgba(0, 0, 0, 0.4);}
`,O=e=>{let{columns:t,data:r}=e;const[o,s]=(0,n.useState)(null),[i,l]=(0,n.useState)(!1);return(0,g.jsxs)(E,{children:[(0,g.jsx)("div",{children:(0,g.jsxs)(_,{children:[(0,g.jsx)("thead",{children:(0,g.jsx)("tr",{children:n.Children.toArray(t.map((e=>(0,g.jsx)("th",{children:e.label}))))})}),(0,g.jsx)("tbody",{children:n.Children.toArray(r.map((e=>(0,g.jsx)("tr",{onClick:()=>(e=>{s(e),l(!0)})(e),className:o&&e.episode_id===o.episode_id?"selected":"",children:n.Children.toArray(t.map((t=>(0,g.jsx)("td",{children:t.render(e)}))))}))))})]})}),i&&(0,g.jsx)(D,{data:o,setDetailViewVisible:l})]})},T=[{label:"Episode",key:"episode_id",type:"TEXT",render:e=>(0,g.jsxs)("span",{children:["EPISODE ",e.episode_id]})},{label:"Episode - Title",key:"episode-title",type:"TEXT",render:e=>(0,g.jsxs)("span",{children:["EPISODE ",(0,x.VS)(e.episode_id)," - ",e.title]})},{label:"Release Date",key:"release_date",type:"TEXT",render:e=>(0,g.jsx)("span",{children:e.release_date})}],V=b.Ay.div`
    background: #f44336;
    color: #FFFFFF;
    text-align: center;
    padding: 5px;
`,z=()=>{const e=(0,o.wA)(),[t,r]=(0,n.useState)(""),{data:s,error:i,loading:l}=(0,o.d4)(f),[a,d]=(0,n.useState)([]);(0,n.useEffect)((()=>{e((0,v.sY)())}),[]),(0,n.useEffect)((()=>{!l&&s.length&&d(s)}),[l,s]),(0,n.useEffect)((()=>{if(t&&t.length>=3){const e=s.filter((e=>e.title.toLowerCase().includes(t.toLowerCase())));d(e)}else d(s)}),[t]);return(0,g.jsxs)("div",{children:[(0,g.jsx)("h3",{children:"Implementation of Movie/Series Dashboard"}),(0,g.jsx)(j,{name:t,setName:r,onSortByClickCB:e=>{const t="year"===e?"release_date":"episode_id",r="year"===e?a.sort(((e,r)=>new Date(e[t]).valueOf()-new Date(r[t]).valueOf())):a.sort(((e,r)=>e[t]-r[t]));d([...r])}}),(0,g.jsxs)("div",{style:{height:"75vh",overflow:"auto"},children:[i&&(0,g.jsxs)("div",{children:["Error: ",i]}),l?(0,g.jsx)(w.A,{}):Array.isArray(a)&&a.length?(0,g.jsx)(O,{columns:T,data:a}):(0,g.jsx)(V,{children:"No Data Found!"})]})]})}}}]);
//# sourceMappingURL=153.ff0b07ad.chunk.js.map