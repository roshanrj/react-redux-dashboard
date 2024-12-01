"use strict";(self.webpackChunkreact_redux_dashboard=self.webpackChunkreact_redux_dashboard||[]).push([[35],{35:(e,s,o)=>{o.r(s),o.d(s,{default:()=>j});var i=o(43),l=o(464),a=o(579);const r=l.Ay.nav`
    display: flex;
    justify-content: space-between;
    background-color: #333;
    overflow: hidden;
    padding: 15px 20px;
    & .guest-name{
        color: #FFFFFF;
        background-color: #04AA6D;
        border-radius: 5px;
        cursor: pointer;
    }
    & .guest-name:hover{
        background-color: #ddd;
        color: black;
        
    }    
`,d=l.Ay.button`
    width: 30px;
    height: 30px;
    color: inherit;
    cursor: pointer;
    &:hover{
        background-color: #ddd;
        color: black;
    }
`,n=e=>{let{setDisplaySidebar:s}=e;return(0,a.jsxs)(r,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(d,{type:"button",className:"icon",onClick:()=>s((e=>!e)),children:(0,a.jsx)("i",{className:"fa fa-bars"})}),(0,a.jsx)("span",{style:{color:"#FFFFFF",verticalAlign:"middle",padding:5},children:"Menu"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"button",className:"guest-name",children:"Welcome RoshanRJ"})})]})};var t=o(906),c=o(564);const b=l.Ay.div`
    height: 100%;
    width: ${e=>e.visible?"250px":0};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    padding-top: 60px;
    transition: 0.5s;
    & > a.link{
        background: #FFFFFF;
        opacity: 0.6;
    }
    & > a {
        padding: 8px 8px 8px 10px;
        text-decoration: none;
        font-size: 1.2rem;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    a:hover {
        color: #f1f1f1;
    }
    .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
`,p=l.Ay.div`
    height: ${e=>e.visible?"auto":0};
    width: 100%;
    position: fixed;
    z-index: 1;
    top: 60px;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    & > a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 1.2rem;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    a:hover {
        color: #f1f1f1;
    }
`,u=e=>{let{displaySidebar:s,setDisplaySidebar:o}=e;return(0,a.jsxs)(b,{visible:s,children:[(0,a.jsx)(t.N_,{to:"/dashboard",children:"Dashboard"}),(0,a.jsx)("a",{href:"javascript:void(0)",className:"closebtn",onClick:()=>null===o||void 0===o?void 0:o(!1),children:"\xd7"})]})},h=e=>{let{displaySidebar:s}=e;return(0,a.jsx)(p,{visible:s,children:(0,a.jsx)(t.N_,{to:"/dashboard",children:"Dashboard"})})},x=e=>{let{displaySidebar:s,setDisplaySidebar:o}=e;const i=(0,c.Xb)()?h:u;return(0,a.jsx)(i,{displaySidebar:s,setDisplaySidebar:o})};var y=o(866);const v=i.lazy((()=>o.e(153).then(o.bind(o,534)))),f=l.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    & > div {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`,m=e=>{let{setDisplaySidebar:s}=e;return(0,a.jsx)(f,{onClick:()=>s(!1),role:"button",children:(0,a.jsx)(i.Suspense,{fallback:(0,a.jsx)("div",{className:"children-line-loader",children:(0,a.jsx)(y.A,{})}),children:(0,a.jsxs)(t.BV,{children:[(0,a.jsx)(t.qh,{path:"/",element:(0,a.jsx)(v,{})},"slash"),(0,a.jsx)(t.qh,{path:"/dashboard",element:(0,a.jsx)(v,{})},"dashboard")]})})})},j=()=>{const[e,s]=(0,i.useState)(!0);return(0,a.jsxs)("div",{children:[(0,a.jsx)(n,{setDisplaySidebar:s}),(0,a.jsx)(x,{displaySidebar:e,setDisplaySidebar:s}),(0,a.jsx)(m,{setDisplaySidebar:s})]})}},564:(e,s,o)=>{o.d(s,{VS:()=>l,Xb:()=>i});const i=()=>navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile|Windows Phone)/),l=e=>{if("number"!==typeof e||e<=0||e>3999)return"Invalid number";const s=[{value:1e3,symbol:"M"},{value:900,symbol:"CM"},{value:500,symbol:"D"},{value:400,symbol:"CD"},{value:100,symbol:"C"},{value:90,symbol:"XC"},{value:50,symbol:"L"},{value:40,symbol:"XL"},{value:10,symbol:"X"},{value:9,symbol:"IX"},{value:5,symbol:"V"},{value:4,symbol:"IV"},{value:1,symbol:"I"}];let o="";for(let i=0;i<s.length;i++)for(;e>=s[i].value;)o+=s[i].symbol,e-=s[i].value;return o}}}]);
//# sourceMappingURL=35.950c3165.chunk.js.map