(this.webpackJsonpbtc=this.webpackJsonpbtc||[]).push([[0],{189:function(e,n,t){"use strict";t.r(n);var r,a,i,c,s,o,d,l,p=t(0),u=t.n(p),b=t(59),j=t.n(b),f=t(9),m=t.n(f),x=t(18),g=t(8),h=t(19),O=t.n(h),v=t(60),k=t(5),y=t(6),w=Object(y.b)(r||(r=Object(k.a)(["\n    0% { \n    transform: translate(0,  0px); \n} \n    50%  { \n    transform: translate(0, 15px); \n} \n    100%   { \n    transform: translate(0, -0px); \n}   \n"]))),C=Object(y.b)(a||(a=Object(k.a)(["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"]))),B=y.a.div(i||(i=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 40%;\n  margin-bottom: 20px;\n\n  @media (max-width: 880px) {\n    display: none;\n  }\n"]))),S=y.a.div(c||(c=Object(k.a)(['\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n\n  font-family: "Helvetica Neue", sans-serif;\n']))),z=y.a.div(s||(s=Object(k.a)(["\n  animation: 3s ",' infinite;\n\n  font-family: "Poppins", sans-serif;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-size: 3rem;\n  color: gray;\n  margin: 10px;\n\n  .clicked {\n    font-size: 10rem;\n    color: black;\n\n    @media (max-width: 450px) {\n      font-size: 30px;\n    }\n\n    @media (max-width: 900px) and (min-width: 450px) {\n      font-size: 50px;\n    }\n\n    @media (max-width: 1333px) and (min-width: 900px) {\n      font-size: 78px;\n    }\n  }\n\n  span {\n    &:hover {\n      cursor: pointer;\n    }\n  }\n\n  @media (max-width: 450px) {\n    font-size: 24px;\n  }\n'])),w),D=y.a.div(o||(o=Object(k.a)(["\n  margin: 20px;\n  color: lightgray;\n"]))),H=y.a.div(d||(d=Object(k.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  h1 {\n    margin: 0;\n    padding: 0;\n  }\n\n  img {\n    width: 50%;\n    height: 50%;\n    margin-top: 20px;\n  }\n"]))),R=y.a.div(l||(l=Object(k.a)(["\n  width: 4rem;\n  height: 4rem;\n  border-radius: 50%;\n  border: 1rem solid lightgray;\n  border-top: 1rem solid gray;\n  animation: "," 0.5s linear infinite;\n  margin: 40px;\n"])),C),E=t(1),I=function(){var e=Object(p.useState)([]),n=Object(g.a)(e,2),t=n[0],r=n[1];Object(p.useEffect)((function(){(function(){var e=Object(x.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.coindesk.com/v1/bpi/historical/close.json");case 3:n=e.sent,r(n.data.bpi),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var a={labels:Object.keys(t),datasets:[{label:"bitcoin price in usd",lineTension:.2,fill:!1,backgroundColor:"lightgray",borderColor:"lightgray",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"gray",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"gray",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:Object.values(t)}]};return Object(E.jsxs)(B,{children:[Object(E.jsx)("h1",{children:"monthly price of btc"}),Object(E.jsx)(v.Line,{data:a})]})},N=function(e){var n=e.time,t=e.fetchingData;return Object(E.jsx)(D,{children:t?null:Object(E.jsxs)("p",{children:[" updated ",n]})})},U=function(){return Object(E.jsxs)(H,{children:[Object(E.jsx)("img",{src:"https://i.pinimg.com/originals/5a/10/53/5a105381eed609b127ec423c337f64e3.gif",alt:"spinning bitcoin"}),Object(E.jsx)("h1",{children:"1 BTC ="})]})},J=t(20),P=t.n(J),_=function(e){var n=e.price,t=e.prev,r=e.isClicked,a=e.setIsClicked;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)("span",{onClick:function(){a({usd:!0,gbp:!1,eur:!1})},className:"".concat(r.usd?"clicked":""),children:Object(E.jsx)(P.a,{start:t.usd,end:n.usd,duration:1.5,decimals:4,decimal:".",prefix:"USD ",separator:","})}),Object(E.jsx)("span",{onClick:function(){a({usd:!1,gbp:!0,eur:!1})},className:"".concat(r.gbp?"clicked":""),children:Object(E.jsx)(P.a,{start:t.gbp,end:n.gbp,duration:1.5,decimals:4,decimal:".",prefix:"GBP ",separator:","})}),Object(E.jsx)("span",{onClick:function(){a({usd:!1,gbp:!1,eur:!0})},className:"".concat(r.eur?"clicked":""),children:Object(E.jsx)(P.a,{start:t.eur,end:n.eur,duration:1.5,decimals:4,decimal:".",prefix:"EUR ",separator:","})})]})},G=function(){var e=Object(p.useState)({}),n=Object(g.a)(e,2),t=n[0],r=n[1],a=Object(p.useState)(""),i=Object(g.a)(a,2),c=i[0],s=i[1],o=Object(p.useState)(!0),d=Object(g.a)(o,2),l=d[0],u=d[1],b=Object(p.useState)({usd:!0,gbp:!1,eur:!1}),j=Object(g.a)(b,2),f=j[0],h=j[1],v=Object(p.useRef)({});return Object(p.useEffect)((function(){var e=function(){var e=Object(x.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("https://api.coindesk.com/v1/bpi/currentprice.json");case 3:n=e.sent,s(n.data.time.updated),r({usd:n.data.bpi.USD.rate_float,gbp:n.data.bpi.GBP.rate_float,eur:n.data.bpi.EUR.rate_float}),u(!1),v.current={usd:t.usd,eur:t.eur,gbp:t.gbp},e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}();t.usd>0&&f.usd&&(document.title="btc is $".concat(t.usd)),t.gbp>0&&f.gbp&&(document.title="btc is \xa3".concat(t.gbp)),t.eur>0&&f.eur&&(document.title="btc is \u20ac".concat(t.eur));var n=setInterval(e,3e3);return function(){return clearInterval(n)}}),[t,f]),Object(E.jsxs)(S,{children:[Object(E.jsx)(U,{}),Object(E.jsx)(z,{children:l?Object(E.jsx)(R,{}):Object(E.jsx)(_,{price:t,prev:v.current,isClicked:f,setIsClicked:h})}),Object(E.jsx)(N,{time:c,fetchingData:l}),Object(E.jsx)(I,{})]})};j.a.render(Object(E.jsx)(u.a.StrictMode,{children:Object(E.jsx)(G,{})}),document.getElementById("root"))}},[[189,1,2]]]);
//# sourceMappingURL=main.12ad11c0.chunk.js.map