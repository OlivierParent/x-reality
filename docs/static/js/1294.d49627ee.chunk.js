"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[1294],{6167:(e,t,n)=>{n.d(t,{A:()=>d});var r=n(259),a=n(7066),o=n(5819),s=n(4704),c=n(7313),l=n(4110),u=n(1724),i=n(7862),f=n(4662),p=n(6417);const d=e=>{let{children:t}=e;const n=(0,f.p)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(o.Xz,{camera:void 0,flat:n.flat,frameloop:n.frameloop,linear:n.linear,orthographic:!1,shadows:n.shadows,children:(0,p.jsxs)(c.Suspense,{children:[(0,p.jsx)(l.z,{}),(0,p.jsx)(u.Z,{}),(0,p.jsx)(i.u,{}),(0,p.jsx)(r.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),t]})}),(0,p.jsx)(s.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,p.jsx)(a.a,{})]})}},1294:(e,t,n)=>{n.r(t),n.d(t,{default:()=>_});var r=n(6893),a=n(3002),o=n(7313),s=n(5825);function*c(){let e=0;const t=["#f00","#ff0","#0f0","#0ff","#00f","#f0f"];for(;;)yield t[e++%t.length]}var l=n(6417);var u=function(e){return e[e.HIGH=1]="HIGH",e[e.LOW=.75]="LOW",e}(u||{}),i=function(e){return e[e.LARGE=1.5]="LARGE",e[e.SMALL=1]="SMALL",e}(i||{});const f=new s.Vector3,p=c(),d=p.next().value,m=e=>{const t=(0,o.useRef)(null),[n,c]=(0,o.useState)(d),[m,x]=(0,o.useState)(!1),[S,h]=(0,o.useState)(f),O=(0,o.useCallback)((e=>{e.stopPropagation();const t=p.next().value,n=function(){const e=[5,4,0].map((e=>(2*Math.random()-1)*e));return(new s.Vector3).fromArray(e)}();c(t),h(n)}),[]),j=(0,o.useCallback)((e=>{e.stopPropagation(),x(!1)}),[]),A=(0,o.useCallback)((e=>{e.stopPropagation(),x(!0)}),[]);return(0,r.j)(m),(0,a.C)((e=>{let{clock:n}=e;const r=n.getElapsedTime();t.current.rotation.set(r,r,r)})),(0,l.jsx)("group",{name:"Animated Cube Default",...e,children:(0,l.jsxs)("mesh",{onClick:O,onPointerOut:j,onPointerOver:A,position:S,ref:t,scale:m?i.LARGE:i.SMALL,children:[(0,l.jsx)("boxGeometry",{args:[1,1,1]}),(0,l.jsx)("meshStandardMaterial",{color:n,opacity:m?u.HIGH:u.LOW,transparent:!0,wireframe:!1})]})})};var x=n(6644);var S=function(e){return e[e.HIGH=1]="HIGH",e[e.LOW=.75]="LOW",e}(S||{});const h=new s.Vector3,O=1.5,j=1,A=c(),L=A.next().value,b=e=>{const t=(0,o.useRef)(null),n=(0,o.useRef)(null),[c,u]=(0,o.useState)(L),[i,f]=(0,o.useState)(!1),[p,d]=(0,o.useState)(S.LOW),[m,b]=(0,o.useState)(h),[C,E]=(0,o.useState)(j),G=(0,o.useCallback)((e=>{e.stopPropagation();const t=A.next().value,n=function(){const e=[5,4,0].map((e=>(2*Math.random()-1)*e));return(new s.Vector3).fromArray(e)}();u(t),b(n)}),[]),g=(0,o.useCallback)((e=>{e.stopPropagation(),f(!1)}),[]),M=(0,o.useCallback)((e=>{e.stopPropagation(),f(!0)}),[]);return(0,r.j)(i),(0,o.useEffect)((()=>{const e=i?S.HIGH:S.LOW;d(e);E(i?O:j)}),[i]),(0,a.C)((e=>{let{clock:n}=e;const r=n.getElapsedTime();t.current.rotation.set(r,r,r)})),(0,l.jsx)("group",{name:"Animated Cube with Framer Motion 3D",...e,children:(0,l.jsxs)(x.E.mesh,{animate:{...m,scale:C},onClick:G,onPointerOut:g,onPointerOver:M,ref:t,transition:{duration:.25,scale:{duration:.125}},children:[(0,l.jsx)("boxGeometry",{args:[1,1,1]}),(0,l.jsx)(x.E.meshStandardMaterial,{animate:{color:c,opacity:p},ref:n,transition:{opacity:{delay:.125,duration:.125}},transparent:!0,wireframe:!1})]})})};var C=n(3589);var E=function(e){return e[e.HIGH=1]="HIGH",e[e.LOW=.75]="LOW",e}(E||{});const G=new s.Vector3,g={LARGE:(new s.Vector3).setScalar(1.5),SMALL:(new s.Vector3).setScalar(1)},M=c(),P=M.next().value,k={color:P},v=C.p8.timeline(),R=e=>{const t=(0,o.useRef)(null),n=(0,o.useRef)(null),[c,u]=(0,o.useState)(P),[i,f]=(0,o.useState)(!1),[p,d]=(0,o.useState)(G),m=(0,o.useCallback)((e=>{e.stopPropagation();const t=M.next().value,n=function(){const e=[5,4,0].map((e=>(2*Math.random()-1)*e));return(new s.Vector3).fromArray(e)}();u(t),d(n)}),[]),x=(0,o.useCallback)((e=>{e.stopPropagation(),f(!1)}),[]),S=(0,o.useCallback)((e=>{e.stopPropagation(),f(!0)}),[]);return(0,r.j)(i),(0,o.useEffect)((()=>{C.p8.to(k,{color:c,onUpdate:()=>{n.current.color.set(k.color)}})}),[c]),(0,o.useEffect)((()=>{const e=i?E.HIGH:E.LOW;v.to(n.current,{opacity:e,duration:.125});const r=i?g.LARGE:g.SMALL;v.to(t.current.scale,{...r,duration:.125})}),[i]),(0,o.useEffect)((()=>{C.p8.to(t.current.position,{...p,duration:.25})}),[p]),(0,a.C)((e=>{let{clock:n}=e;const r=n.getElapsedTime();t.current.rotation.set(r,r,r)})),(0,l.jsx)("group",{name:"Animated Cube with GreenSock GSAP",...e,children:(0,l.jsxs)("mesh",{onClick:m,onPointerOut:x,onPointerOver:S,ref:t,children:[(0,l.jsx)("boxGeometry",{args:[1,1,1]}),(0,l.jsx)("meshStandardMaterial",{ref:n,transparent:!0,wireframe:!1})]})})};var H=n(4704),w=n(5397),y=n(9817),I=function(e){return e.DEFAULT="\u2014Default\u2014",e.FRAMER_MOTION_3D="Framer Motion 3D",e.GREENSOCK_GSAP="GreenSock GSAP",e}(I||{});const D={[I.DEFAULT]:(0,l.jsx)(m,{}),[I.FRAMER_MOTION_3D]:(0,l.jsx)(b,{}),[I.GREENSOCK_GSAP]:(0,l.jsx)(R,{})},T=e=>{const{cube:t}=function(e,t){const{cube:n}=(0,H.M4)(w.O.SCHEMA.COMPONENTS,{cube:{label:"Animated Cube",options:e,value:t}},y.F.folder(w.O.ORDER.COMPONENTS));return{cube:n}}(D,D[I.FRAMER_MOTION_3D]);return(0,l.jsx)("group",{name:"Animated Cube",...e,children:t})};var W=n(6167);const _=e=>(0,l.jsx)(W.A,{children:(0,l.jsx)(T,{...e})})}}]);