"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[61],{6167:(t,e,o)=>{o.d(e,{A:()=>f});var n=o(7179),r=o(7066),a=o(5819),s=o(4704),i=o(7313),u=o(4110),c=o(1724),l=o(7862),E=o(4662),p=o(6417);const f=t=>{let{children:e}=t;const o=(0,E.p)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(a.Xz,{camera:void 0,flat:o.flat,frameloop:o.frameloop,linear:o.linear,orthographic:!1,shadows:o.shadows,children:(0,p.jsxs)(i.Suspense,{children:[(0,p.jsx)(u.z,{}),(0,p.jsx)(c.Z,{}),(0,p.jsx)(l.u,{}),(0,p.jsx)(n.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),e]})}),(0,p.jsx)(s.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,p.jsx)(r.a,{})]})}},61:(t,e,o)=>{o.r(e),o.d(e,{default:()=>T});var n=o(6893),r=o(1707),a=o(7313),s=o(5825),i=o(6417),u=function(t){return t[t.BLUE=255]="BLUE",t[t.GREEN=26112]="GREEN",t[t.RED=16711680]="RED",t}(u||{}),c=function(t){return t[t.HIGH=1]="HIGH",t[t.LOW=.75]="LOW",t}(c||{}),l=function(t){return t[t.LARGE=1.25]="LARGE",t[t.SMALL=1]="SMALL",t}(l||{});const E={ACTIVE:new s.Euler(Math.PI/4,Math.PI/6,0),INACTIVE:new s.Euler},p=t=>{const[e,o]=(0,a.useState)(u.BLUE),[s,p]=(0,a.useState)(!1),[f,L]=(0,a.useState)(!1),[A,x]=(0,a.useState)(!1);(0,n.j)(s);const S=t=>{t.stopPropagation(),p(!1)},I=t=>{t.stopPropagation(),p(!0)};return(0,a.useEffect)((()=>{const t=f?A?u.RED:u.GREEN:u.BLUE;o(t)}),[f,A]),(0,i.jsxs)("group",{name:"Button Default",onClick:t=>{t.stopPropagation(),L((t=>!t))},onDoubleClick:t=>{t.stopPropagation(),L((t=>!t)),x((t=>!t))},onPointerOut:S,onPointerOver:I,rotation:f?E.ACTIVE:E.INACTIVE,scale:s?l.LARGE:l.SMALL,...t,children:[(0,i.jsxs)("mesh",{onPointerOut:S,onPointerOver:I,children:[(0,i.jsx)("meshBasicMaterial",{color:e,opacity:s?c.HIGH:c.LOW,transparent:!0}),(0,i.jsx)("planeGeometry",{args:[2.5,.5]})]}),(0,i.jsx)(r.x,{fontSize:.2,position:[0,0,.001],children:"Click or Double Click Me!"})]})};var f=o(812),L=function(t){return t.BLUE="#0000ff",t.GREEN="#00ff00",t.RED="#ff0000",t}(L||{}),A=function(t){return t[t.HIGH=1]="HIGH",t[t.LOW=.75]="LOW",t}(A||{}),x=function(t){return t[t.LARGE=1.25]="LARGE",t[t.SMALL=1]="SMALL",t}(x||{});const S={ACTIVE:new s.Euler(Math.PI/4,Math.PI/6,0),INACTIVE:new s.Euler},I=t=>{const[e,o]=(0,a.useState)(L.BLUE),[s,u]=(0,a.useState)(!1),[c,l]=(0,a.useState)(!1),[E,p]=(0,a.useState)(!1),[I,h]=(0,a.useState)(A.HIGH),[O,G]=(0,a.useState)(S.INACTIVE),[P,j]=(0,a.useState)(x.SMALL);(0,n.j)(s);const R=(0,a.useCallback)((t=>{t.stopPropagation(),l((t=>!t))}),[]),d=t=>{t.stopPropagation(),u(!1)},C=t=>{t.stopPropagation(),u(!0)};return(0,a.useEffect)((()=>{const t=s?A.HIGH:A.LOW;h(t);const e=s?x.LARGE:x.SMALL;j(e)}),[s]),(0,a.useEffect)((()=>{const t=c?E?L.RED:L.GREEN:L.BLUE;o(t);G(c?S.ACTIVE:S.INACTIVE)}),[c,E]),(0,i.jsx)("group",{name:"Button with GreenSock",onClick:R,onDoubleClick:t=>{t.stopPropagation(),l((t=>!t)),p((t=>!t))},onPointerOut:d,onPointerOver:C,...t,children:(0,i.jsxs)(f.E.group,{animate:{scale:P,rotateX:O.x,rotateY:O.y,rotateZ:O.z},transition:{duration:.5,scale:{duration:.125},ease:"easeInOut"},children:[(0,i.jsxs)(f.E.mesh,{onPointerOut:d,onPointerOver:C,children:[(0,i.jsx)(f.E.meshBasicMaterial,{animate:{color:e,opacity:I},transparent:!0,transition:{duration:.5,opacity:{duration:.125}}}),(0,i.jsx)("planeGeometry",{args:[2.5,.5]})]}),(0,i.jsx)(r.x,{fontSize:.2,position:[0,0,.001],children:"Click or Double Click Me!"})]})})};var h=o(3589),O=function(t){return t.BLUE="#0000ff",t.GREEN="#00ff00",t.RED="#ff0000",t}(O||{}),G=function(t){return t[t.HIGH=1]="HIGH",t[t.LOW=.75]="LOW",t}(G||{});const P={ACTIVE:new s.Euler(Math.PI/4,Math.PI/6,0),INACTIVE:new s.Euler},j={LARGE:(new s.Vector3).setScalar(1.25),SMALL:(new s.Vector3).setScalar(1)},R=O.BLUE,d={color:R},C=t=>{const e=(0,a.useRef)(null),o=(0,a.useRef)(null),[s,u]=(0,a.useState)(R),[c,l]=(0,a.useState)(!1),[E,p]=(0,a.useState)(!1),[f,L]=(0,a.useState)(!1);(0,n.j)(c);const A=t=>{t.stopPropagation(),l(!1)},x=t=>{t.stopPropagation(),l(!0)};return(0,a.useEffect)((()=>{h.p8.to(d,{color:s,onUpdate:()=>{o.current.color.set(d.color)}})}),[s]),(0,a.useEffect)((()=>{const t=c?G.HIGH:G.LOW;h.p8.to(o.current,{opacity:t,duration:.125});const n=c?j.LARGE:j.SMALL;h.p8.to(e.current.scale,{...n,duration:.125})}),[c]),(0,a.useEffect)((()=>{const t=E?f?O.RED:O.GREEN:O.BLUE;u(t);const o=E?P.ACTIVE:P.INACTIVE;console.log("rotation",{...o,x:o.x},o.toArray()),h.p8.to(e.current.rotation,{x:o.x,y:o.y,z:o.z,ease:"power2.inOut"})}),[E,f]),(0,i.jsxs)("group",{name:"Button with GreenSock",onClick:t=>{t.stopPropagation(),p((t=>!t))},onDoubleClick:t=>{t.stopPropagation(),p((t=>!t)),L((t=>!t))},onPointerOut:A,onPointerOver:x,ref:e,...t,children:[(0,i.jsxs)("mesh",{onPointerOut:A,onPointerOver:x,children:[(0,i.jsx)("meshBasicMaterial",{ref:o,transparent:!0}),(0,i.jsx)("planeGeometry",{args:[2.5,.5]})]}),(0,i.jsx)(r.x,{fontSize:.2,position:[0,0,.001],children:"Click or Double Click Me!"})]})};var M=o(4704),g=o(5397),D=o(9817),N=function(t){return t.DEFAULT="\u2014Default\u2014",t.FRAMER_MOTION_3D="Framer Motion 3D",t.GREENSOCK_GSAP="GreenSock GSAP",t}(N||{});const m={[N.DEFAULT]:(0,i.jsx)(p,{}),[N.FRAMER_MOTION_3D]:(0,i.jsx)(I,{}),[N.GREENSOCK_GSAP]:(0,i.jsx)(C,{})},H=t=>{const{button:e}=function(t,e){const{button:o}=(0,M.M4)(g.O.SCHEMA.COMPONENTS,{button:{label:"Button",options:t,value:e}},D.F.folder(g.O.ORDER.COMPONENTS));return{button:o}}(m,m[N.FRAMER_MOTION_3D]);return(0,i.jsx)("group",{name:"Button",...t,children:e})};var k=o(6167);const T=t=>(0,i.jsx)(k.A,{children:(0,i.jsx)(H,{...t})})}}]);