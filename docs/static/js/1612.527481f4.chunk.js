"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[1612],{6167:(e,t,n)=>{n.d(t,{A:()=>l});var s=n(259),r=n(7066),a=n(5819),i=n(4704),o=n(7313),I=n(4110),S=n(1724),E=n(7862),M=n(4662),c=n(6417);const l=e=>{let{children:t}=e;const n=(0,M.p)();return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(a.Xz,{camera:void 0,flat:n.flat,frameloop:n.frameloop,linear:n.linear,orthographic:!1,shadows:n.shadows,children:(0,c.jsxs)(o.Suspense,{children:[(0,c.jsx)(I.z,{}),(0,c.jsx)(S.Z,{}),(0,c.jsx)(E.u,{}),(0,c.jsx)(s.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),t]})}),(0,c.jsx)(i.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,c.jsx)(r.a,{})]})}},5198:(e,t,n)=>{let s;n.d(t,{r:()=>s}),function(e){let t=function(e){return e.BLACK_IRON="2D2D2A_74716E_8F8C8C_92958E",e.BUFFED_SILVER="54584E_B1BAC5_818B91_A7ACA3",e.GRAPHITE="2D2D2F_C6C2C5_727176_94949B",e.GREEN="54C104_BBFA0F_97EF04_7AE104",e.GREEN_CRYSTAL="2E763A_78A0B7_B3D1CF_14F209",e.SILVERY="4C4C4C_D2D2D2_8F8F8F_ACACAC",e.TITANIUM="C7C7D7_4C4E5A_818393_6C6C74",e.WORN_GOLD="6E5137_E8CA90_271912_B99C74",e}({});e.ID=t;let n=function(e){return e[e.XS=64]="XS",e[e.SM=128]="SM",e[e.MD=256]="MD",e[e.LG=512]="LG",e[e.XL=1024]="XL",e}({});e.SIZE=n}(s||(s={}))},1612:(e,t,n)=>{n.r(t),n.d(t,{default:()=>m});var s=n(124),r=n(6893),a=n(9822),i=n(7313),o=n(745),I=n(3618),S=n(8473),E=n(8998);var M=n(700),c=n(4855),l=n(8175),A=n(5871);function T(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{isStatic:n}=(0,i.useContext)(S._),s=(0,i.useRef)(null),r=function(e){const t=(0,E.h)((()=>(0,I.BX)(e))),{isStatic:n}=(0,i.useContext)(S._);if(n){const[,n]=(0,i.useState)(e);(0,i.useEffect)((()=>t.on("change",n)),[])}return t}((0,o.i)(e)?e.get():e),a=()=>{s.current&&s.current.stop()};return(0,i.useInsertionEffect)((()=>r.attach(((e,i)=>{if(n)return i(e);if(a(),s.current=(0,c.y)({keyframes:[r.get(),e],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...t,onUpdate:i}),!A.frameData.isProcessing){const e=performance.now()-A.frameData.timestamp;e<30&&(s.current.time=(0,l.X)(e))}return r.get()}),a)),[JSON.stringify(t)]),(0,M.L)((()=>{if((0,o.i)(e))return e.on("change",(e=>r.set(parseFloat(e))))}),[r]),r}var N=n(6644),u=n(5825);const R={NORMALISED:{MAXIMUM:350/360,MINIMUM:10/360},OPACITY:{MAXIMUM:1,MINIMUM:.5},RING:{PHI:{SEGMENTS:1},RADIUS:{INNER:1.1,OUTER:1.9},THETA:{LENGTH:2*Math.PI,SEGMENTS:60,START:Math.PI/2}},SETTINGS:{DAMPING:15,MASS:1,STIFFNESS:100},TORUS:{ARC:2*Math.PI,RADIUS:1.5,SEGMENTS:{RADIAL:30,TUBULAR:60},TUBE:.5}};var C=n(5198),f=n(6417);const p=new u.Vector3,D=new u.Vector3;let U=R.OPACITY.MINIMUM;const _=e=>{const[t]=(0,s.K)(C.r.ID.GREEN,C.r.SIZE.XL),n=T(R.NORMALISED.MINIMUM,{damping:R.SETTINGS.DAMPING,mass:R.SETTINGS.MASS,stiffness:R.SETTINGS.STIFFNESS}),[o,I]=(0,i.useState)(R.NORMALISED.MINIMUM),[S,E]=(0,i.useState)(!1),[M,c]=(0,i.useState)(!1),l=(0,i.useCallback)((e=>{e.stopPropagation(),E((e=>!e))}),[]),A=(0,i.useCallback)((e=>{e.stopPropagation(),c(!1)}),[]),_=(0,i.useCallback)((e=>{e.stopPropagation(),c(!0)}),[]);var G,m,h;return(0,r.j)(M),(0,i.useEffect)((()=>{S?(n.set(R.NORMALISED.MAXIMUM),D.set(0,0,-.5),U=R.OPACITY.MAXIMUM):(n.set(R.NORMALISED.MINIMUM),D.set(0,0,0),U=R.OPACITY.MINIMUM)}),[S,n]),G=n,m="change",h=e=>{I(e)},(0,i.useInsertionEffect)((()=>G.on(m,h)),[G,m,h]),(0,f.jsx)("group",{name:"Spring",...e,children:(0,f.jsxs)(N.E.group,{animate:{...D},initial:{...D},children:[(0,f.jsxs)("mesh",{name:"Torus",onClick:l,onPointerOut:A,onPointerOver:_,position:p,children:[(0,f.jsx)("torusGeometry",{args:[R.TORUS.RADIUS,R.TORUS.TUBE,R.TORUS.SEGMENTS.RADIAL,R.TORUS.SEGMENTS.TUBULAR,R.TORUS.ARC]}),(0,f.jsx)(a.z,{anisotropicBlur:.5,distortion:.5,distortionScale:.5,emissive:"green",emissiveIntensity:.25,temporalDistortion:.1,wireframe:!1})]}),(0,f.jsxs)("mesh",{name:"Ring",children:[(0,f.jsx)("ringGeometry",{args:[R.RING.RADIUS.INNER,R.RING.RADIUS.OUTER,R.RING.THETA.SEGMENTS,R.RING.PHI.SEGMENTS,R.RING.THETA.START,R.RING.THETA.LENGTH*o]}),(0,f.jsx)(N.E.meshMatcapMaterial,{animate:{opacity:U},initial:{opacity:R.OPACITY.MINIMUM},matcap:t,side:u.DoubleSide,transparent:!0})]})]})})};var G=n(6167);const m=e=>(0,f.jsx)(G.A,{children:(0,f.jsx)(_,{})})}}]);