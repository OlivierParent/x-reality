"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[5291],{1777:(e,t,n)=>{n.d(t,{$:()=>l});var o=n(1707),r=n(7313);const s=n.p+"static/media/bensound-evolution.4375aef0bb0aa53f542e.mp3";var i=n(6417);const a=new Audio(s);a.volume=.02;const l=e=>{const[t,n]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{t?a.play():a.pause()}),[t]),(0,i.jsx)("group",{...e,children:(0,i.jsxs)(o.x,{fontSize:.2,onClick:e=>{e.stopPropagation(),n((e=>!e))},position:[0,.5,0],children:["Global Audio, ",t?"playing":"music",": https://www.bensound.com"]})})}},1898:(e,t,n)=>{n.d(t,{$:()=>l});var o=n(1707),r=n(6866),s=n(7313);const i=n.p+"static/media/bensound-badass.8ef4f40c2805fd404725.mp3";var a=n(6417);const l=e=>{const t=(0,s.useRef)(null),[n,l]=(0,s.useState)(!1);return(0,s.useEffect)((()=>{t.current.isPlaying||t.current.play()}),[]),(0,s.useEffect)((()=>{n?t.current.play():t.current.stop()}),[n]),(0,a.jsxs)("group",{...e,children:[(0,a.jsxs)(o.x,{fontSize:.2,onClick:e=>{e.stopPropagation(),l((e=>!e))},position:[0,.5,0],children:["Positional Audio, ",n?"playing":"music",": https://www.bensound.com"]}),(0,a.jsx)(r.V,{autoplay:!0,distance:1,loop:!0,ref:t,url:i})]})}},3658:(e,t,n)=>{n.d(t,{MU:()=>u,En:()=>c,tK:()=>d});var o=n(7313);let r=function(e){return e.CURSOR_ACTIVE="CURSOR_ACTIVE",e.CURSOR_INACTIVE="CURSOR_INACTIVE",e}({});const s="CursorOverlay_cursor__OSCiH";var i=n(6417);const a=new Event(r.CURSOR_ACTIVE),l=new Event(r.CURSOR_INACTIVE),c=e=>{e.stopPropagation(),window.dispatchEvent(a)},d=e=>{e.stopPropagation(),window.dispatchEvent(l)},u=()=>{const[e,t]=(0,o.useState)(!1);(0,o.useMemo)((()=>{window.addEventListener(r.CURSOR_ACTIVE,(()=>{t(!0)})),window.addEventListener(r.CURSOR_INACTIVE,(()=>{t(!1)}))}),[]);const n=e?"white":"transparent";return(0,i.jsx)("div",{className:s,style:{backgroundColor:n}})}},9363:(e,t,n)=>{let o;n.d(t,{n:()=>o}),function(e){let t=function(e){return e.playerJump="playerJump",e.playerMoveBackward="playerMoveBackward",e.playerMoveForward="playerMoveForward",e.playerMoveLeft="playerMoveLeft",e.playerMoveRight="playerMoveRight",e.playerRun="playerRun",e.pinballFlipperBoth="pinballFlipperBoth",e.pinballFlipperLeft="pinballFlipperLeft",e.pinballFlipperRight="pinballFlipperRight",e.pinballShoot="pinballShoot",e}({}),n=function(e){return e.A="KeyA",e.D="KeyD",e.DOWN="ArrowDown",e.E="KeyE",e.F="KeyF",e.J="KeyJ",e.LEFT="ArrowLeft",e.Q="KeyQ",e.ENTER="Enter",e.RIGHT="ArrowRight",e.S="KeyS",e.SHIFT="Shift",e.SPACE="Space",e.UP="ArrowUp",e.W="KeyW",e.Z="KeyZ",e}({});const o=[{name:t.playerMoveBackward,keys:[n.DOWN,n.D]},{name:t.playerMoveForward,keys:[n.UP,n.E]},{name:t.playerMoveLeft,keys:[n.LEFT,n.S]},{name:t.playerMoveRight,keys:[n.RIGHT,n.F]}],r=[{name:t.playerJump,keys:[n.SPACE]},{name:t.playerRun,keys:[n.SHIFT]}],s=[{name:t.playerMoveBackward,keys:[n.DOWN,n.S]},{name:t.playerMoveForward,keys:[n.UP,n.W]},{name:t.playerMoveLeft,keys:[n.LEFT,n.A]},{name:t.playerMoveRight,keys:[n.RIGHT,n.D]}],i=[{name:t.playerMoveBackward,keys:[n.DOWN,n.S]},{name:t.playerMoveForward,keys:[n.UP,n.Z]},{name:t.playerMoveLeft,keys:[n.LEFT,n.Q]},{name:t.playerMoveRight,keys:[n.RIGHT,n.D]}];e.CONFIG_FIRST_PERSON_AZERTY=[...i,...r],e.CONFIG_FIRST_PERSON_UNIVERSAL=[...o,...r],e.CONFIG_FIRST_PERSON_QWERTY=[...s,...r],e.CONFIG_PINBALL_MACHINE=[{name:t.pinballFlipperBoth,keys:[n.SPACE]},{name:t.pinballFlipperLeft,keys:[n.F]},{name:t.pinballFlipperRight,keys:[n.J]},{name:t.pinballShoot,keys:[n.ENTER]}]}(o||(o={}))},4950:(e,t,n)=>{n.d(t,{o:()=>o});const o={BOX:{COUNT:10,MASS:0,SIZE:1},PLANE:{SIZE:10}}},5278:(e,t,n)=>{n.d(t,{r:()=>o});const o={DIRECTION:{BACKWARD:1,DOWN:-1,FORWARD:-1,LEFT:-1,NONE:0,RIGHT:1,UP:1},HEIGHT:1.75,MASS:75,POSITION:new(n(5825).Vector3)(0,2,2),SIZE:.5,VELOCITY:{DEFAULT:1,FORWARD:2,LATERAL:1,LONGITUDINAL:1,NONE:0,NORMAL:.5,RUN:3}}},6653:(e,t,n)=>{n.d(t,{n:()=>k});var o=n(1777),r=n(1898),s=n(3658),i=n(2952),a=n(3082),l=n(5825),c=n(6417);const d=e=>{const t=[100,100],n=new l.Euler(l.MathUtils.degToRad(-90),0,0);return(0,c.jsx)("group",{name:"Floor",...e,children:(0,c.jsx)(a.ib,{children:(0,c.jsx)(i.JO,{args:t,rotation:n,children:(0,c.jsx)("meshBasicMaterial",{color:6710886,side:l.DoubleSide})})})})};var u=n(4950);const p=new Array(u.o.BOX.COUNT).fill(null).map((()=>{const e=Math.floor(Math.random()*u.o.PLANE.SIZE-u.o.PLANE.SIZE/2),t=u.o.BOX.SIZE/2,n=Math.floor(Math.random()*u.o.PLANE.SIZE-u.o.PLANE.SIZE/2);return new l.Vector3(e,t,n)})),m=new Array(u.o.BOX.COUNT).fill(null).map(((e,t)=>({position:p[t]}))),h=e=>{let{position:t}=e;return(0,c.jsx)(a.ib,{colliders:"cuboid",type:"fixed",children:(0,c.jsx)(i.xu,{args:[u.o.BOX.SIZE,u.o.BOX.SIZE,u.o.BOX.SIZE],onPointerEnter:s.En,onPointerLeave:s.tK,onPointerOut:s.tK,onPointerOver:s.En,position:t,children:(0,c.jsx)("meshBasicMaterial",{color:16777215*Math.random(),opacity:.75,transparent:!0})})})},E=e=>(0,c.jsx)("group",{name:"Obstacles",...e,children:m.map(((e,t)=>{let{position:n}=e;return(0,c.jsx)(h,{position:n},t)}))});var v=n(9782),y=n(2738),f=n(4063),g=n(3002),R=n(7313),I=n(5278);const S=new l.Vector3,w=S.clone(),L=e=>{const t=(0,v.Z)((e=>e.playerJump)),n=(0,v.Z)((e=>e.playerMoveBackward)),o=(0,v.Z)((e=>e.playerMoveForward)),r=(0,v.Z)((e=>e.playerMoveLeft)),s=(0,v.Z)((e=>e.playerMoveRight)),l=(0,v.Z)((e=>e.playerRun)),d=(0,R.useRef)(null),u=(0,R.useRef)(null),p=(0,R.useRef)(null),[m,h]=(0,R.useState)(!0),[E,L]=(0,R.useState)(!1);return(0,R.useEffect)((()=>{E&&(setTimeout((()=>h(!0)),1e3),setTimeout((()=>L(!1)),230))}),[E]),(0,g.C)((()=>{const e=u.current.getObject(),i=d.current,a=p.current,c=i.linvel(),v=s?I.r.DIRECTION.RIGHT:r?I.r.DIRECTION.LEFT:I.r.DIRECTION.NONE,y=I.r.VELOCITY.LATERAL,f=o?I.r.DIRECTION.FORWARD:n?I.r.DIRECTION.BACKWARD:I.r.DIRECTION.NONE,g=o?I.r.VELOCITY.FORWARD:n?I.r.VELOCITY.DEFAULT:I.r.VELOCITY.NONE;m&&!E&&t&&(L(!0),h(!1));const R=t?I.r.DIRECTION.UP:I.r.DIRECTION.NONE,O=E&&t?I.r.VELOCITY.NORMAL:I.r.VELOCITY.NONE,k=l?I.r.VELOCITY.RUN:I.r.VELOCITY.DEFAULT;w.set(v*y*k,0,f*g*k),w.applyQuaternion(e.quaternion),w.y=c.y+R*O,n||o||r||s||i.setAngvel(S),i.setLinvel(w);const A=i.translation();e.position.copy(A),e.position.y+=I.r.HEIGHT-I.r.SIZE,a.position.copy(A),a.position.y=.001})),(0,c.jsxs)("group",{name:"Player",...e,children:[(0,c.jsx)(y.q,{ref:u}),(0,c.jsx)(a.ib,{canSleep:!1,colliders:"ball",mass:I.r.MASS,position:I.r.POSITION,ref:d,type:"dynamic",children:(0,c.jsx)(i.aL,{args:[I.r.SIZE,8,8],children:(0,c.jsx)("meshBasicMaterial",{color:65280,visible:!1,wireframe:!0})})}),(0,c.jsx)(f.j,{color:"black",colorStop:0,fog:!1,opacity:.5,ref:p})]})},O=e=>{const t=l.MathUtils.degToRad(-55),n=new l.Euler(t,0,0);return(0,c.jsx)("group",{name:"Stairs",...e,children:(0,c.jsx)(a.ib,{type:"fixed",children:(0,c.jsx)(i.xu,{args:[1,10,.2],rotation:n,children:(0,c.jsx)("meshBasicMaterial",{color:10066329,opacity:.25,transparent:!0})})})})},k=e=>(0,c.jsxs)("group",{name:"World",...e,children:[(0,c.jsx)(d,{}),(0,c.jsx)(E,{}),(0,c.jsx)(L,{}),(0,c.jsx)(o.$,{onPointerEnter:s.En,onPointerLeave:s.tK,position:[0,0,-5]}),(0,c.jsx)(r.$,{onPointerEnter:s.En,onPointerLeave:s.tK}),(0,c.jsx)(O,{})]})},3280:(e,t,n)=>{n.d(t,{p:()=>l});var o=n(4704),r=n(5397),s=n(9817);let i;var a;function l(){const{gravity:e,paused:t,showDebug:n}=(0,o.M4)(r.O.SCHEMA.PHYSICS,{gravity:i.gravity(),paused:i.paused(),showDebug:i.showDebug(!0)},s.F.folder(r.O.ORDER.PHYSICS));return{gravity:e,paused:t,showDebug:n}}(a=i||(i={})).gravity=function(){return{label:"Gravity",hint:"Default = 9.81",value:{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-9.80665,z:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}}},a.paused=function(){return{label:"Paused",hint:"Pause physics simulation.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},a.showDebug=function(){return{label:"Debug",hint:"Show debug geometry.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},5152:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var o=n(6653),r=n(9782),s=n(7066),i=n(5819),a=n(3082),l=n(4704),c=n(7313),d=n(1724),u=n(7862),p=n(3658),m=n(9363),h=n(4662),E=n(3280),v=n(6417);const y=e=>{let{children:t}=e;const n=(0,h.p)(),o=(0,E.p)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(i.Xz,{camera:void 0,flat:n.flat,frameloop:n.frameloop,linear:n.linear,orthographic:!1,shadows:n.shadows,children:(0,v.jsxs)(c.Suspense,{children:[(0,v.jsx)(d.Z,{}),(0,v.jsx)(u.u,{}),(0,v.jsx)(r.c,{map:m.n.CONFIG_FIRST_PERSON_UNIVERSAL,children:(0,v.jsx)(a.wI,{colliders:void 0,debug:o.showDebug,gravity:[o.gravity.x,o.gravity.y,o.gravity.z],paused:o.paused,timeStep:"vary",updatePriority:void 0,children:t})})]})}),(0,v.jsx)(p.MU,{}),(0,v.jsx)(l.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,v.jsx)(s.a,{})]})},f=e=>(0,v.jsx)(y,{children:(0,v.jsx)(o.n,{...e})})},2738:(e,t,n)=>{n.d(t,{q:()=>v});var o=n(7462),r=n(3002),s=n(7313),i=n(5825),a=Object.defineProperty,l=(e,t,n)=>(((e,t,n)=>{t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n);const c=new i.Euler(0,0,0,"YXZ"),d=new i.Vector3,u={type:"change"},p={type:"lock"},m={type:"unlock"},h=Math.PI/2;class E extends i.EventDispatcher{constructor(e,t){super(),l(this,"camera"),l(this,"domElement"),l(this,"isLocked"),l(this,"minPolarAngle"),l(this,"maxPolarAngle"),l(this,"pointerSpeed"),l(this,"onMouseMove",(e=>{if(!this.domElement||!1===this.isLocked)return;const t=e.movementX||e.mozMovementX||e.webkitMovementX||0,n=e.movementY||e.mozMovementY||e.webkitMovementY||0;c.setFromQuaternion(this.camera.quaternion),c.y-=.002*t*this.pointerSpeed,c.x-=.002*n*this.pointerSpeed,c.x=Math.max(h-this.maxPolarAngle,Math.min(h-this.minPolarAngle,c.x)),this.camera.quaternion.setFromEuler(c),this.dispatchEvent(u)})),l(this,"onPointerlockChange",(()=>{this.domElement&&(this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent(p),this.isLocked=!0):(this.dispatchEvent(m),this.isLocked=!1))})),l(this,"onPointerlockError",(()=>{console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")})),l(this,"connect",(e=>{this.domElement=e||this.domElement,this.domElement&&(this.domElement.ownerDocument.addEventListener("mousemove",this.onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this.onPointerlockError))})),l(this,"disconnect",(()=>{this.domElement&&(this.domElement.ownerDocument.removeEventListener("mousemove",this.onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this.onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this.onPointerlockError))})),l(this,"dispose",(()=>{this.disconnect()})),l(this,"getObject",(()=>this.camera)),l(this,"direction",new i.Vector3(0,0,-1)),l(this,"getDirection",(e=>e.copy(this.direction).applyQuaternion(this.camera.quaternion))),l(this,"moveForward",(e=>{d.setFromMatrixColumn(this.camera.matrix,0),d.crossVectors(this.camera.up,d),this.camera.position.addScaledVector(d,e)})),l(this,"moveRight",(e=>{d.setFromMatrixColumn(this.camera.matrix,0),this.camera.position.addScaledVector(d,e)})),l(this,"lock",(()=>{this.domElement&&this.domElement.requestPointerLock()})),l(this,"unlock",(()=>{this.domElement&&this.domElement.ownerDocument.exitPointerLock()})),this.camera=e,this.domElement=t,this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,t&&this.connect(t)}}const v=s.forwardRef(((e,t)=>{let{domElement:n,selector:i,onChange:a,onLock:l,onUnlock:c,enabled:d=!0,makeDefault:u,...p}=e;const{camera:m,...h}=p,v=(0,r.A)((e=>e.setEvents)),y=(0,r.A)((e=>e.gl)),f=(0,r.A)((e=>e.camera)),g=(0,r.A)((e=>e.invalidate)),R=(0,r.A)((e=>e.events)),I=(0,r.A)((e=>e.get)),S=(0,r.A)((e=>e.set)),w=m||f,L=n||R.connected||y.domElement,O=s.useMemo((()=>new E(w)),[w]);return s.useEffect((()=>{if(d){O.connect(L);const e=I().events.compute;return v({compute(e,t){const n=t.size.width/2,o=t.size.height/2;t.pointer.set(n/t.size.width*2-1,-o/t.size.height*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),()=>{O.disconnect(),v({compute:e})}}}),[d,O]),s.useEffect((()=>{const e=e=>{g(),a&&a(e)};O.addEventListener("change",e),l&&O.addEventListener("lock",l),c&&O.addEventListener("unlock",c);const t=()=>O.lock(),n=i?Array.from(document.querySelectorAll(i)):[document];return n.forEach((e=>e&&e.addEventListener("click",t))),()=>{O.removeEventListener("change",e),l&&O.removeEventListener("lock",l),c&&O.removeEventListener("unlock",c),n.forEach((e=>e?e.removeEventListener("click",t):void 0))}}),[a,l,c,i,O,g]),s.useEffect((()=>{if(u){const e=I().controls;return S({controls:O}),()=>S({controls:e})}}),[u,O]),s.createElement("primitive",(0,o.Z)({ref:t,object:O},h))}))},6866:(e,t,n)=>{n.d(t,{V:()=>l});var o=n(7462),r=n(7313),s=n(5825),i=n(3002),a=n(4296);const l=r.forwardRef(((e,t)=>{let{url:n,distance:l=1,loop:c=!0,autoplay:d,...u}=e;const p=r.useRef(),m=(0,i.A)((e=>{let{camera:t}=e;return t})),[h]=r.useState((()=>new s.AudioListener)),E=(0,i.F)(s.AudioLoader,n);return r.useEffect((()=>{const e=p.current;e&&(e.setBuffer(E),e.setRefDistance(l),e.setLoop(c),d&&!e.isPlaying&&e.play())}),[E,m,l,c]),r.useEffect((()=>{const e=p.current;return m.add(h),()=>{m.remove(h),e&&(e.isPlaying&&e.stop(),e.source&&e.source._connected&&e.disconnect())}}),[]),r.createElement("positionalAudio",(0,o.Z)({ref:(0,a.Z)([p,t]),args:[h]},u))}))},4063:(e,t,n)=>{n.d(t,{j:()=>i});var o=n(7462),r=n(7313),s=n(5825);const i=r.forwardRef(((e,t)=>{let{fog:n=!1,renderOrder:i,depthWrite:a=!1,colorStop:l=0,color:c="black",opacity:d=.5,...u}=e;const p=r.useMemo((()=>{const e=document.createElement("canvas");e.width=128,e.height=128;const t=e.getContext("2d"),n=t.createRadialGradient(e.width/2,e.height/2,0,e.width/2,e.height/2,e.width/2);return n.addColorStop(l,new s.Color(c).getStyle()),n.addColorStop(1,"rgba(0,0,0,0)"),t.fillStyle=n,t.fillRect(0,0,e.width,e.height),e}),[c,l]);return r.createElement("mesh",(0,o.Z)({renderOrder:i,ref:t,"rotation-x":-Math.PI/2},u),r.createElement("planeGeometry",null),r.createElement("meshBasicMaterial",{transparent:!0,opacity:d,fog:n,depthWrite:a,side:s.DoubleSide},r.createElement("canvasTexture",{attach:"map",args:[p]})))}))},2952:(e,t,n)=>{n.d(t,{Ab:()=>c,Cd:()=>a,FC:()=>v,FM:()=>E,JO:()=>u,KC:()=>p,N1:()=>f,Qq:()=>l,aL:()=>d,fg:()=>m,vO:()=>h,xu:()=>i,yI:()=>y});var o=n(7462),r=n(7313);function s(e,t){const n=e+"Geometry";return r.forwardRef(((e,s)=>{let{args:i,children:a,...l}=e;const c=r.useRef(null);return r.useImperativeHandle(s,(()=>c.current)),r.useLayoutEffect((()=>{null==t||t(c.current)})),r.createElement("mesh",(0,o.Z)({ref:c},l),r.createElement(n,{attach:"geometry",args:i}),a)}))}const i=s("box"),a=s("circle"),l=s("cone"),c=s("cylinder"),d=s("sphere"),u=s("plane"),p=s("torus"),m=s("torusKnot"),h=s("tetrahedron"),E=s("ring"),v=s("icosahedron"),y=s("octahedron"),f=s("dodecahedron")},9782:(e,t,n)=>{n.d(t,{Z:()=>l,c:()=>a});var o=n(7313),r=n(176),s=n(9009);const i=o.createContext(null);function a(e){let{map:t,children:n,onChange:a,domElement:l}=e;const c=t.map((e=>e.name+e.keys)).join("-"),d=o.useMemo((()=>(0,r.Z)((0,s.XR)((()=>t.reduce(((e,t)=>({...e,[t.name]:!1})),{}))))),[c]),u=o.useMemo((()=>[d.subscribe,d.getState,d]),[c]),p=d.setState;return o.useEffect((()=>{const e=t.map((e=>{let{name:t,keys:n,up:o}=e;return{keys:n,up:o,fn:e=>{p({[t]:e}),a&&a(t,e,u[1]())}}})).reduce(((e,t)=>{let{keys:n,fn:o,up:r=!0}=t;return n.forEach((t=>e[t]={fn:o,pressed:!1,up:r})),e}),{}),n=t=>{let{key:n,code:o}=t;const r=e[n]||e[o];if(!r)return;const{fn:s,pressed:i,up:a}=r;r.pressed=!0,!a&&i||s(!0)},o=t=>{let{key:n,code:o}=t;const r=e[n]||e[o];if(!r)return;const{fn:s,up:i}=r;r.pressed=!1,i&&s(!1)},r=l||window;return r.addEventListener("keydown",n,{passive:!0}),r.addEventListener("keyup",o,{passive:!0}),()=>{r.removeEventListener("keydown",n),r.removeEventListener("keyup",o)}}),[l,c]),o.createElement(i.Provider,{value:u,children:n})}function l(e){const[t,n,r]=o.useContext(i);return e?r(e):[t,n]}}}]);