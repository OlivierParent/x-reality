"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[7864],{1777:(e,r,o)=>{o.d(r,{$:()=>l});var n=o(126),t=o(7313);const a=o.p+"static/media/bensound-evolution.4375aef0bb0aa53f542e.mp3";var s=o(6417);const i=new Audio(a);i.volume=.02;const l=e=>{const[r,o]=(0,t.useState)(!1);return(0,t.useEffect)((()=>{r?i.play():i.pause()}),[r]),(0,s.jsx)("group",{...e,children:(0,s.jsxs)(n.x,{fontSize:.2,onClick:e=>{e.stopPropagation(),o((e=>!e))},position:[0,.5,0],children:["Global Audio, ",r?"playing":"music",": https://www.bensound.com"]})})}},1898:(e,r,o)=>{o.d(r,{$:()=>l});var n=o(126),t=o(6866),a=o(7313);const s=o.p+"static/media/bensound-badass.8ef4f40c2805fd404725.mp3";var i=o(6417);const l=e=>{const r=(0,a.useRef)(null),[o,l]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{r.current.isPlaying||r.current.play()}),[]),(0,a.useEffect)((()=>{o?r.current.play():r.current.stop()}),[o]),(0,i.jsxs)("group",{...e,children:[(0,i.jsxs)(n.x,{fontSize:.2,onClick:e=>{e.stopPropagation(),l((e=>!e))},position:[0,.5,0],children:["Positional Audio, ",o?"playing":"music",": https://www.bensound.com"]}),(0,i.jsx)(t.V,{autoplay:!0,distance:1,loop:!0,ref:r,url:s})]})}},3658:(e,r,o)=>{o.d(r,{MU:()=>c,En:()=>p,tK:()=>u});var n=o(7313);let t=function(e){return e.CURSOR_ACTIVE="CURSOR_ACTIVE",e.CURSOR_INACTIVE="CURSOR_INACTIVE",e}({});const a="CursorOverlay_cursor__OSCiH";var s=o(6417);const i=new Event(t.CURSOR_ACTIVE),l=new Event(t.CURSOR_INACTIVE),p=e=>{e.stopPropagation(),window.dispatchEvent(i)},u=e=>{e.stopPropagation(),window.dispatchEvent(l)},c=()=>{const[e,r]=(0,n.useState)(!1);(0,n.useMemo)((()=>{window.addEventListener(t.CURSOR_ACTIVE,(()=>{r(!0)})),window.addEventListener(t.CURSOR_INACTIVE,(()=>{r(!1)}))}),[]);const o=e?"white":"transparent";return(0,s.jsx)("div",{className:a,style:{backgroundColor:o}})}},9363:(e,r,o)=>{let n;o.d(r,{n:()=>n}),function(e){let r=function(e){return e.playerJump="playerJump",e.playerMoveBackward="playerMoveBackward",e.playerMoveForward="playerMoveForward",e.playerMoveLeft="playerMoveLeft",e.playerMoveRight="playerMoveRight",e.playerRun="playerRun",e.pinballFlipperBoth="pinballFlipperBoth",e.pinballFlipperLeft="pinballFlipperLeft",e.pinballFlipperRight="pinballFlipperRight",e.pinballShoot="pinballShoot",e}({}),o=function(e){return e.A="KeyA",e.D="KeyD",e.DOWN="ArrowDown",e.E="KeyE",e.F="KeyF",e.J="KeyJ",e.LEFT="ArrowLeft",e.Q="KeyQ",e.ENTER="Enter",e.RIGHT="ArrowRight",e.S="KeyS",e.SHIFT="Shift",e.SPACE="Space",e.UP="ArrowUp",e.W="KeyW",e.Z="KeyZ",e}({});const n=[{name:r.playerMoveBackward,keys:[o.DOWN,o.D]},{name:r.playerMoveForward,keys:[o.UP,o.E]},{name:r.playerMoveLeft,keys:[o.LEFT,o.S]},{name:r.playerMoveRight,keys:[o.RIGHT,o.F]}],t=[{name:r.playerJump,keys:[o.SPACE]},{name:r.playerRun,keys:[o.SHIFT]}],a=[{name:r.playerMoveBackward,keys:[o.DOWN,o.S]},{name:r.playerMoveForward,keys:[o.UP,o.W]},{name:r.playerMoveLeft,keys:[o.LEFT,o.A]},{name:r.playerMoveRight,keys:[o.RIGHT,o.D]}],s=[{name:r.playerMoveBackward,keys:[o.DOWN,o.S]},{name:r.playerMoveForward,keys:[o.UP,o.Z]},{name:r.playerMoveLeft,keys:[o.LEFT,o.Q]},{name:r.playerMoveRight,keys:[o.RIGHT,o.D]}];e.CONFIG_FIRST_PERSON_AZERTY=[...s,...t],e.CONFIG_FIRST_PERSON_UNIVERSAL=[...n,...t],e.CONFIG_FIRST_PERSON_QWERTY=[...a,...t],e.CONFIG_PINBALL_MACHINE=[{name:r.pinballFlipperBoth,keys:[o.SPACE]},{name:r.pinballFlipperLeft,keys:[o.F]},{name:r.pinballFlipperRight,keys:[o.J]},{name:r.pinballShoot,keys:[o.ENTER]}]}(n||(n={}))},4950:(e,r,o)=>{o.d(r,{o:()=>n});const n={BOX:{COUNT:10,MASS:0,SIZE:1},PLANE:{SIZE:10}}},5278:(e,r,o)=>{o.d(r,{r:()=>n});const n={DIRECTION:{BACKWARD:1,DOWN:-1,FORWARD:-1,LEFT:-1,NONE:0,RIGHT:1,UP:1},HEIGHT:1.75,MASS:75,POSITION:new(o(5825).Vector3)(0,2,2),SIZE:.5,VELOCITY:{DEFAULT:1,FORWARD:2,LATERAL:1,LONGITUDINAL:1,NONE:0,NORMAL:.5,RUN:3}}},3280:(e,r,o)=>{o.d(r,{p:()=>l});var n=o(4704),t=o(5397),a=o(9817);let s;var i;function l(){const{gravity:e,paused:r,showDebug:o}=(0,n.M4)(t.O.SCHEMA.PHYSICS,{gravity:s.gravity(),paused:s.paused(),showDebug:s.showDebug(!0)},a.F.folder(t.O.ORDER.PHYSICS));return{gravity:e,paused:r,showDebug:o}}(i=s||(s={})).gravity=function(){return{label:"Gravity",hint:"Default = 9.81",value:{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-9.80665,z:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}}},i.paused=function(){return{label:"Paused",hint:"Pause physics simulation.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},i.showDebug=function(){return{label:"Debug",hint:"Show debug geometry.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},478:(e,r,o)=>{o.r(r),o.d(r,{default:()=>k});var n=o(1777),t=o(1898),a=o(3658),s=o(13),i=o(2952),l=o(7313),p=o(5825),u=o(6417);const c=e=>{const r=[100,100],o=[p.MathUtils.degToRad(-90),0,0],[n]=(0,s.xK)((()=>({mass:0,rotation:o})),(0,l.useRef)(null));return(0,u.jsx)("group",{name:"Floor",...e,children:(0,u.jsx)(i.JO,{args:r,ref:n,children:(0,u.jsx)("meshBasicMaterial",{color:6710886,side:p.DoubleSide})})})};var E=o(4950);const y=new Array(E.o.BOX.COUNT).fill(null).map((()=>[Math.floor(Math.random()*E.o.PLANE.SIZE-E.o.PLANE.SIZE/2),E.o.BOX.SIZE/2,Math.floor(Math.random()*E.o.PLANE.SIZE-E.o.PLANE.SIZE/2)])),d=new Array(E.o.BOX.COUNT).fill(null).map(((e,r)=>({position:y[r]}))),R=e=>{let{position:r}=e;const o=[E.o.BOX.SIZE,E.o.BOX.SIZE,E.o.BOX.SIZE],[n]=(0,s.EJ)((()=>({args:o,mass:E.o.BOX.MASS,position:r})),(0,l.useRef)(null));return(0,u.jsx)(i.xu,{args:o,onPointerEnter:a.En,onPointerLeave:a.tK,onPointerOut:a.tK,onPointerOver:a.En,ref:n,children:(0,u.jsx)("meshBasicMaterial",{color:16777215*Math.random(),opacity:.75,transparent:!0})})},I=e=>(0,u.jsx)("group",{name:"Obstacles",...e,children:d.map(((e,r)=>{let{position:o}=e;return(0,u.jsx)(R,{position:o},r)}))});var O=o(9782),h=o(2738),S=o(4063),v=o(3002),f=o(5278);const T=new p.Vector3,N=T.clone(),g=T.clone(),m=e=>{const r=(0,O.Z)((e=>e.playerJump)),o=(0,O.Z)((e=>e.playerMoveBackward)),n=(0,O.Z)((e=>e.playerMoveForward)),t=(0,O.Z)((e=>e.playerMoveLeft)),a=(0,O.Z)((e=>e.playerMoveRight)),p=(0,O.Z)((e=>e.playerRun)),c=(0,l.useRef)(null),E=(0,l.useRef)(null),[y,d]=(0,l.useState)(!0),[R,I]=(0,l.useState)(!1),[m,C]=(0,s.Eo)((()=>({args:[f.r.SIZE],mass:f.r.MASS,position:f.r.POSITION.toArray()})),(0,l.useRef)(null)),A=(0,l.useRef)([0,0,0]),L=(0,l.useRef)(T);return(0,l.useEffect)((()=>{R&&(setTimeout((()=>d(!0)),1e3),setTimeout((()=>I(!1)),230))}),[R]),(0,l.useEffect)((()=>{C.velocity.subscribe((e=>A.current=e)),C.position.subscribe((e=>L.current=N.set(...e)))}),[C.velocity,C.position]),(0,v.C)((()=>{const e=c.current.getObject(),s=E.current,i=a?f.r.DIRECTION.RIGHT:t?f.r.DIRECTION.LEFT:f.r.DIRECTION.NONE,l=f.r.VELOCITY.LATERAL,u=n?f.r.DIRECTION.FORWARD:o?f.r.DIRECTION.BACKWARD:f.r.DIRECTION.NONE,O=n?f.r.VELOCITY.FORWARD:o?f.r.VELOCITY.DEFAULT:f.r.VELOCITY.NONE;y&&!R&&r&&(I(!0),d(!1));const h=r?f.r.DIRECTION.UP:f.r.DIRECTION.NONE,S=R&&r?f.r.VELOCITY.NORMAL:f.r.VELOCITY.NONE,v=p?f.r.VELOCITY.RUN:f.r.VELOCITY.DEFAULT;g.set(i*l*v,0,u*O*v),g.applyQuaternion(e.quaternion),g.y=A.current[1]+h*S,o||n||t||a||C.angularVelocity.copy(g),C.velocity.copy(g),e.position.copy(L.current),e.position.y+=f.r.HEIGHT-f.r.SIZE,s.position.copy(L.current),s.position.y=.001})),(0,u.jsxs)("group",{name:"Player",...e,children:[(0,u.jsx)(h.q,{ref:c}),(0,u.jsx)(i.aL,{args:[f.r.SIZE,8,8],ref:m,children:(0,u.jsx)("meshBasicMaterial",{color:65280,wireframe:!0,visible:!1})}),(0,u.jsx)(S.j,{color:"black",colorStop:0,fog:!1,opacity:.5,ref:E})]})},C=e=>{const r=p.MathUtils.degToRad(-55),o=[1,10,.2],n=[r,0,0],[t]=(0,s.EJ)((()=>({args:o,mass:0,rotation:n})),(0,l.useRef)(null));return(0,u.jsx)("group",{name:"Stairs",...e,children:(0,u.jsx)(i.xu,{args:o,ref:t,children:(0,u.jsx)("meshBasicMaterial",{color:10066329,opacity:.25,transparent:!0})})})},A=e=>(0,u.jsxs)("group",{name:"World",...e,children:[(0,u.jsx)(c,{}),(0,u.jsx)(I,{}),(0,u.jsx)(m,{}),(0,u.jsx)(n.$,{onPointerEnter:a.En,onPointerLeave:a.tK,position:[0,0,-5]}),(0,u.jsx)(t.$,{onPointerEnter:a.En,onPointerLeave:a.tK}),(0,u.jsx)(C,{})]});var L=o(7066),w=o(5819),x=o(4704),M=o(1724),F=o(7862),b=o(9363),j=o(4662),P=o(3280);const D=e=>{let{children:r}=e;const o=(0,j.p)(),n=(0,P.p)();return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w.Xz,{camera:void 0,flat:o.flat,frameloop:o.frameloop,linear:o.linear,orthographic:!1,shadows:o.shadows,children:(0,u.jsxs)(l.Suspense,{children:[(0,u.jsx)(M.Z,{}),(0,u.jsx)(F.u,{}),(0,u.jsx)(O.c,{map:b.n.CONFIG_FIRST_PERSON_UNIVERSAL,children:(0,u.jsx)(s.wI,{gravity:[n.gravity.x,n.gravity.y,n.gravity.z],isPaused:n.paused,children:n.showDebug?(0,u.jsx)(s.cG,{color:16711935,children:r}):r})})]})}),(0,u.jsx)(a.MU,{}),(0,u.jsx)(x.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,u.jsx)(L.a,{})]})},k=e=>(0,u.jsx)(D,{children:(0,u.jsx)(A,{...e})})}}]);