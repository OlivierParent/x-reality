"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[1946],{3280:(e,a,s)=>{s.d(a,{p:()=>o});var i=s(4704),r=s(5397),n=s(9817);let l;var t;function o(){const{gravity:e,paused:a,showDebug:s}=(0,i.M4)(r.O.SCHEMA.PHYSICS,{gravity:l.gravity(),paused:l.paused(),showDebug:l.showDebug(!0)},n.F.folder(r.O.ORDER.PHYSICS));return{gravity:e,paused:a,showDebug:s}}(t=l||(l={})).gravity=function(){return{label:"Gravity",hint:"Default = 9.81",value:{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-9.80665,z:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}}},t.paused=function(){return{label:"Paused",hint:"Pause physics simulation.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},t.showDebug=function(){return{label:"Debug",hint:"Show debug geometry.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},1946:(e,a,s)=>{s.r(a),s.d(a,{default:()=>f});var i=s(2952),r=s(4839),n=s(3082),l=s(5825),t=s(7220),o=s(6417);const d=e=>(0,o.jsxs)("group",{name:"Rapier Test",...e,children:[(0,o.jsx)("group",{name:"Floor",children:(0,o.jsx)(n.ib,{type:"fixed",children:(0,o.jsx)(i.JO,{args:[20,20],receiveShadow:!0,rotation:[l.MathUtils.degToRad(-90),0,0],children:(0,o.jsx)(t.F,{})})})}),(0,o.jsxs)("group",{name:"Bodies",children:[(0,o.jsx)(n.ib,{colliders:!1,mass:2,name:"Cone",position:[0,12,0],type:"dynamic",children:(0,o.jsx)(n.aF,{args:[.5,.5],children:(0,o.jsx)(i.Qq,{args:[.5,1],castShadow:!0,children:(0,o.jsx)(t.F,{})})})}),(0,o.jsx)(n.ib,{mass:1,name:"Rounded Box",position:[-.1,8,0],type:"dynamic",children:(0,o.jsx)(r.Z,{args:[1,1,1],castShadow:!0,children:(0,o.jsx)(t.F,{})})}),(0,o.jsx)(n.ib,{colliders:"ball",mass:20,name:"Sphere",position:[.1,4,0],type:"dynamic",children:(0,o.jsx)(i.aL,{args:[.5,32,32],castShadow:!0,children:(0,o.jsx)(t.F,{})})})]})]});var h=s(259),u=s(7066),c=s(5819),g=s(4704),p=s(7313),x=s(1724),j=s(7862),v=s(4662),y=s(3280);const b={fov:45,position:[7,7,7]},m=e=>{let{children:a}=e;const s=(0,v.p)(),i=(0,y.p)();return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(c.Xz,{camera:b,flat:s.flat,frameloop:s.frameloop,linear:s.linear,orthographic:!1,shadows:s.shadows,children:(0,o.jsxs)(p.Suspense,{children:[(0,o.jsx)(x.Z,{}),(0,o.jsx)(j.u,{}),(0,o.jsx)(h.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),(0,o.jsx)(n.wI,{colliders:void 0,debug:i.showDebug,gravity:[i.gravity.x,i.gravity.y,i.gravity.z],paused:i.paused,timeStep:"vary",updatePriority:void 0,children:a})]})}),(0,o.jsx)(g.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,o.jsx)(u.a,{})]})},f=e=>(0,o.jsx)(m,{children:(0,o.jsx)(d,{...e})})}}]);