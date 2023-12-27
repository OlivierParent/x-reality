"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[1946],{3280:(e,r,a)=>{a.d(r,{p:()=>l});var s=a(4704),t=a(5397),n=a(9817);let o;var i;function l(){const{gravity:e,paused:r,showDebug:a}=(0,s.M4)(t.O.SCHEMA.PHYSICS,{gravity:o.gravity(),paused:o.paused(),showDebug:o.showDebug(!0)},n.F.folder(t.O.ORDER.PHYSICS));return{gravity:e,paused:r,showDebug:a}}(i=o||(o={})).gravity=function(){return{label:"Gravity",hint:"Default = 9.81",value:{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-9.80665,z:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}}},i.paused=function(){return{label:"Paused",hint:"Pause physics simulation.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},i.showDebug=function(){return{label:"Debug",hint:"Show debug geometry.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},1946:(e,r,a)=>{a.r(r),a.d(r,{default:()=>j});var s=a(2952),t=a(4839),n=a(3082),o=a(5825),i=a(1352),l=a(6417);const c=e=>(0,l.jsxs)("group",{name:"Rapier Test",...e,children:[(0,l.jsx)("group",{name:"Floor",children:(0,l.jsx)(n.ib,{type:"fixed",children:(0,l.jsx)(s.JO,{args:[20,20],receiveShadow:!0,rotation:[o.MathUtils.degToRad(-90),0,0],children:(0,l.jsx)(i.F,{})})})}),(0,l.jsxs)("group",{name:"Bodies",children:[(0,l.jsx)(n.ib,{colliders:!1,mass:2,name:"Cone",position:[0,12,0],type:"dynamic",children:(0,l.jsx)(n.aF,{args:[.5,.5],children:(0,l.jsx)(s.Qq,{args:[.5,1],castShadow:!0,children:(0,l.jsx)(i.F,{})})})}),(0,l.jsx)(n.ib,{mass:1,name:"Rounded Box",position:[-.1,8,0],type:"dynamic",children:(0,l.jsx)(t.Z,{args:[1,1,1],castShadow:!0,children:(0,l.jsx)(i.F,{})})}),(0,l.jsx)(n.ib,{colliders:"ball",mass:20,name:"Sphere",position:[.1,4,0],type:"dynamic",children:(0,l.jsx)(s.aL,{args:[.5,32,32],castShadow:!0,children:(0,l.jsx)(i.F,{})})})]})]});var d=a(259),u=a(7066),h=a(5819),g=a(4704),p=a(7313),m=a(1724),v=a(7862),x=a(4662),b=a(3280);const f={fov:45,position:[7,7,7]},y=e=>{let{children:r}=e;const a=(0,x.p)(),s=(0,b.p)();return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(h.Xz,{camera:f,flat:a.flat,frameloop:a.frameloop,linear:a.linear,orthographic:!1,shadows:a.shadows,children:(0,l.jsxs)(p.Suspense,{children:[(0,l.jsx)(m.Z,{}),(0,l.jsx)(v.u,{}),(0,l.jsx)(d.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),(0,l.jsx)(n.wI,{colliders:void 0,debug:s.showDebug,gravity:[s.gravity.x,s.gravity.y,s.gravity.z],paused:s.paused,timeStep:"vary",updatePriority:void 0,children:r})]})}),(0,l.jsx)(g.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,l.jsx)(u.a,{})]})},j=e=>(0,l.jsx)(y,{children:(0,l.jsx)(c,{...e})})},4839:(e,r,a)=>{a.d(r,{Z:()=>l});var s=a(7462),t=a(7313),n=a(5825),o=a(676);const i=1e-5;const l=t.forwardRef((function(e,r){let{args:[a=1,l=1,c=1]=[],radius:d=.05,steps:u=1,smoothness:h=4,bevelSegments:g=4,creaseAngle:p=.4,children:m,...v}=e;const x=t.useMemo((()=>function(e,r,a){const s=new n.Shape,t=a-i;return s.absarc(i,i,i,-Math.PI/2,-Math.PI,!0),s.absarc(i,r-2*t,i,Math.PI,Math.PI/2,!0),s.absarc(e-2*t,r-2*t,i,Math.PI/2,0,!0),s.absarc(e-2*t,i,i,0,-Math.PI/2,!0),s}(a,l,d)),[a,l,d]),b=t.useMemo((()=>({depth:c-2*d,bevelEnabled:!0,bevelSegments:2*g,steps:u,bevelSize:d-i,bevelThickness:d,curveSegments:h})),[c,d,h]),f=t.useRef(null);return t.useLayoutEffect((()=>{f.current&&(f.current.center(),(0,o.LZ)(f.current,p))}),[x,b]),t.createElement("mesh",(0,s.Z)({ref:r},v),t.createElement("extrudeGeometry",{ref:f,args:[x,b]}),m)}))},2952:(e,r,a)=>{a.d(r,{Ab:()=>c,Cd:()=>i,FC:()=>v,FM:()=>m,JO:()=>u,KC:()=>h,N1:()=>b,Qq:()=>l,aL:()=>d,fg:()=>g,vO:()=>p,xu:()=>o,yI:()=>x});var s=a(7462),t=a(7313);function n(e,r){const a=e+"Geometry";return t.forwardRef(((e,n)=>{let{args:o,children:i,...l}=e;const c=t.useRef(null);return t.useImperativeHandle(n,(()=>c.current)),t.useLayoutEffect((()=>{null==r||r(c.current)})),t.createElement("mesh",(0,s.Z)({ref:c},l),t.createElement(a,{attach:"geometry",args:o}),i)}))}const o=n("box"),i=n("circle"),l=n("cone"),c=n("cylinder"),d=n("sphere"),u=n("plane"),h=n("torus"),g=n("torusKnot"),p=n("tetrahedron"),m=n("ring"),v=n("icosahedron"),x=n("octahedron"),b=n("dodecahedron")}}]);