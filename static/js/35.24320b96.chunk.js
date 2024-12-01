"use strict";(self.webpackChunkreact_redux_dashboard=self.webpackChunkreact_redux_dashboard||[]).push([[35],{35:(e,i,o)=>{o.r(i),o.d(i,{default:()=>j});var l=o(43),s=o(464),a=o(579);const r=s.Ay.nav`
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
`,n=s.Ay.button`
    width: 30px;
    height: 30px;
    color: inherit;
    cursor: pointer;
    &:hover{
        background-color: #ddd;
        color: black;
    }
`,t=e=>{let{setDisplaySidebar:i}=e;return(0,a.jsxs)(r,{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(n,{type:"button",className:"icon",onClick:()=>i((e=>!e)),children:(0,a.jsx)("i",{className:"fa fa-bars"})}),(0,a.jsx)("span",{style:{color:"#FFFFFF",verticalAlign:"middle",padding:5},children:"Menu"})]}),(0,a.jsx)("div",{children:(0,a.jsx)("button",{type:"button",className:"guest-name",children:"Welcome RoshanRJ"})})]})};var d=o(906),c=o(564);const b=s.Ay.div`
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
`,p=s.Ay.div`
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
`,u=e=>{let{displaySidebar:i,setDisplaySidebar:o}=e;return(0,a.jsxs)(b,{visible:i,children:[(0,a.jsx)(d.N_,{to:"/react-redux-dashboard/",children:"Dashboard"}),(0,a.jsx)("a",{href:"javascript:void(0)",className:"closebtn",onClick:()=>null===o||void 0===o?void 0:o(!1),children:"\xd7"})]})},x=e=>{let{displaySidebar:i}=e;return(0,a.jsx)(p,{visible:i,children:(0,a.jsx)(d.N_,{to:"/react-redux-dashboard/",children:"Dashboard"})})},h=e=>{let{displaySidebar:i,setDisplaySidebar:o}=e;const l=(0,c.Xb)()?x:u;return(0,a.jsx)(l,{displaySidebar:i,setDisplaySidebar:o})};var y=o(866);const v=l.lazy((()=>o.e(153).then(o.bind(o,534)))),f=s.Ay.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    & > div {
        display: flex;
        flex-direction: column;
        width: 90%;
    }
`,m=e=>{let{setDisplaySidebar:i}=e;return(0,a.jsx)(f,{onClick:()=>i(!1),role:"button",children:(0,a.jsx)(l.Suspense,{fallback:(0,a.jsx)("div",{className:"children-line-loader",children:(0,a.jsx)(y.A,{})}),children:(0,a.jsx)(d.BV,{children:(0,a.jsx)(d.qh,{path:"*",element:(0,a.jsx)(v,{})},"slash")})})})},j=()=>{const[e,i]=(0,l.useState)(!0);return(0,a.jsxs)("div",{children:[(0,a.jsx)(t,{setDisplaySidebar:i}),(0,a.jsx)(h,{displaySidebar:e,setDisplaySidebar:i}),(0,a.jsx)(m,{setDisplaySidebar:i})]})}},564:(e,i,o)=>{o.d(i,{VS:()=>s,Xb:()=>l});const l=()=>navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|IEMobile|Windows Phone)/),s=e=>{if("number"!==typeof e||e<=0||e>3999)return"Invalid number";const i=[{value:1e3,symbol:"M"},{value:900,symbol:"CM"},{value:500,symbol:"D"},{value:400,symbol:"CD"},{value:100,symbol:"C"},{value:90,symbol:"XC"},{value:50,symbol:"L"},{value:40,symbol:"XL"},{value:10,symbol:"X"},{value:9,symbol:"IX"},{value:5,symbol:"V"},{value:4,symbol:"IV"},{value:1,symbol:"I"}];let o="";for(let l=0;l<i.length;l++)for(;e>=i[l].value;)o+=i[l].symbol,e-=i[l].value;return o}}}]);
//# sourceMappingURL=35.24320b96.chunk.js.map