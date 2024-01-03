"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[4162],{6167:(e,t,n)=>{n.d(t,{A:()=>m});var s=n(259),a=n(7066),r=n(5819),i=n(4704),l=n(7313),d=n(4110),o=n(1724),h=n(7862),u=n(4662),g=n(6417);const m=e=>{let{children:t}=e;const n=(0,u.p)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.Xz,{camera:void 0,flat:n.flat,frameloop:n.frameloop,linear:n.linear,orthographic:!1,shadows:n.shadows,children:(0,g.jsxs)(l.Suspense,{children:[(0,g.jsx)(d.z,{}),(0,g.jsx)(o.Z,{}),(0,g.jsx)(h.u,{}),(0,g.jsx)(s.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),t]})}),(0,g.jsx)(i.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,g.jsx)(a.a,{})]})}},4162:(e,t,n)=>{n.r(t),n.d(t,{default:()=>q});var s=n(2952),a=n(1352),r=n(4704),i=n(5397),l=n(9817),d=n(505);let o;var h;(h=o||(o={})).depth=function(){return{label:"Depth",hint:"Depth along the Z axis. Default is 1.",max:6,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},h.depthSegments=function(){return{label:"Depth Segments",hint:"Optional. Default is 1.",max:16,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},h.height=d.w.height,h.heightSegments=d.w.heightSegments,h.width=d.w.width,h.widthSegments=d.w.widthSegments;var u=n(6417);const g=e=>{let{children:t}=e;const{depth:n,depthSegments:d,height:h,heightSegments:g,width:m,widthSegments:c}=function(){const{depth:e,depthSegments:t,height:n,heightSegments:s,width:a,widthSegments:d}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Box:(0,r.so)({"X Axis":(0,r.so)({width:o.width(),widthSegments:o.widthSegments()}),"Y Axis":(0,r.so)({height:o.height(),heightSegments:o.heightSegments()}),"Z Axis":(0,r.so)({depth:o.depth(),depthSegments:o.depthSegments()})})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{depth:e,depthSegments:t,height:n,heightSegments:s,width:a,widthSegments:d}}();return(0,u.jsx)(s.xu,{args:[m,h,n,c,g,d],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};var m=n(5825),c=n(4064);let S;var O;(O=S||(S={})).height=d.w.height,O.heightSegments=d.w.heightSegments,O.openEnded=function(){return{label:"Open Ended",hint:"A Boolean indicating whether the base of the cone is open or capped. Default is false, meaning capped.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},O.radialSegments=function(){return{label:"Radial Segments",hint:"Number of segmented faces around the circumference of the cone. Default is 8.",max:64,min:3,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:8}},O.radius=c.n.radius,O.\u0398Length=c.n.\u0398Length,O.\u0398Start=c.n.\u0398Start;const f=e=>{let{children:t}=e;const{height:n,heightSegments:d,openEnded:o,radialSegments:h,radius:g,"\u03b8Length":c,"\u03b8Start":O}=function(){const{height:e,heightSegments:t,openEnded:n,radialSegments:s,radius:a,"\u03b8Length":d,"\u03b8Start":o}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Cone:(0,r.so)({"XZ Plane":(0,r.so)({radius:S.radius(),radialSegments:S.radialSegments(),openEnded:S.openEnded(),"\u0398":(0,r.so)({"\u03b8Start":S.\u0398Start(),"\u03b8Length":S.\u0398Length()})}),"Y Axis":(0,r.so)({height:S.height(),heightSegments:S.heightSegments()})})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{height:e,heightSegments:t,openEnded:n,radialSegments:s,radius:a,"\u03b8Length":d,"\u03b8Start":o}}();return(0,u.jsx)(s.Qq,{args:[g,n,h,d,o,m.MathUtils.degToRad(O),m.MathUtils.degToRad(c)],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};let E;var v;(v=E||(E={})).height=d.w.height,v.heightSegments=d.w.heightSegments,v.openEnded=S.openEnded,v.radialSegments=S.radialSegments,v.radiusBottom=function(){return{label:"Radius Bottom",hint:"Radius of the cylinder at the top. Default is 1.",max:3,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},v.radiusTop=function(){return{label:"Radius Top",hint:"Radius of the cylinder at the bottom. Default is 1.",max:3,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},v.\u0398Length=c.n.\u0398Length,v.\u0398Start=c.n.\u0398Start;const R=e=>{let{children:t}=e;const{height:n,heightSegments:d,openEnded:o,radialSegments:h,radiusBottom:g,radiusTop:c,"\u03b8Length":S,"\u03b8Start":O}=function(){const{height:e,heightSegments:t,openEnded:n,radialSegments:s,radiusBottom:a,radiusTop:d,"\u03b8Length":o,"\u03b8Start":h}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Cylinder:(0,r.so)({"XZ Plane":(0,r.so)({radiusBottom:E.radiusBottom(),radiusTop:E.radiusTop(),radialSegments:E.radialSegments(),openEnded:E.openEnded(),"\u0398":(0,r.so)({"\u03b8Start":E.\u0398Start(),"\u03b8Length":E.\u0398Length()})}),"Y Axis":(0,r.so)({height:E.height(),heightSegments:E.heightSegments()})})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{height:e,heightSegments:t,openEnded:n,radialSegments:s,radiusBottom:a,radiusTop:d,"\u03b8Length":o,"\u03b8Start":h}}();return(0,u.jsx)(s.Ab,{args:[c,g,n,h,d,o,m.MathUtils.degToRad(O),m.MathUtils.degToRad(S)],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};var p=n(3923);let b;var N;(N=b||(b={})).detail=p.f.detail,N.radius=c.n.radius;const x=e=>{let{children:t}=e;const{detail:n,radius:d}=function(){const{detail:e,radius:t}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Dodecahedron:(0,r.so)({detail:b.detail(),radius:b.radius()})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{detail:e,radius:t}}();return(0,u.jsx)(s.N1,{args:[d,n],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};var D=n(8202);const T=e=>{let{children:t}=e;const{detail:n,radius:d}=function(){const{detail:e,radius:t}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Icosahedron:(0,r.so)({detail:D.L.detail(),radius:D.L.radius()})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{detail:e,radius:t}}();return(0,u.jsx)(s.FC,{args:[d,n],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};let M;var C;(C=M||(M={})).detail=p.f.detail,C.radius=c.n.radius;const w=e=>{let{children:t}=e;const{detail:n,radius:d}=function(){const{detail:e,radius:t}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Octahedron:(0,r.so)({detail:M.detail(),radius:M.radius()})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{detail:e,radius:t}}();return(0,u.jsx)(s.yI,{args:[d,n],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};var A=n(4839);let j;var L;(L=j||(j={})).bevelSegments=function(){return{label:"Bevel Segments",hint:"Number of bevel segments. Default is `4`, setting it to `0` removes the bevel, as a result the texture is applied to the whole geometry.",max:16,min:0,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:4}},L.creaseAngle=function(){return{label:"Crease Angle",hint:"Number of bevel segments. Default is `0.4`, setting it to `0` removes the bevel, as a result the texture is applied to the whole geometry",max:3,min:.01,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.4}},L.depth=o.depth,L.height=d.w.height,L.radius=function(){return{label:"Radius",hint:"Radius of the rounded corners. Default is `0.05`.",max:3,min:.01,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05}},L.smoothness=function(){return{label:"Smoothness",hint:"Number of curve segments. Default is `4`.",max:16,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:4}},L.width=d.w.width;const y=e=>{let{children:t}=e;const{bevelSegments:n,creaseAngle:s,depth:d,height:o,radius:h,smoothness:g,width:m}=function(){const{bevelSegments:e,creaseAngle:t,depth:n,height:s,radius:a,smoothness:d,width:o}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({RoundedBox:(0,r.so)({"X Axis":(0,r.so)({width:j.width()}),"Y Axis":(0,r.so)({height:j.height()}),"Z Axis":(0,r.so)({depth:j.depth()}),Other:(0,r.so)({bevelSegments:j.bevelSegments(),creaseAngle:j.creaseAngle(),radius:j.radius(),smoothness:j.smoothness()})})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{bevelSegments:e,creaseAngle:t,depth:n,height:s,radius:a,smoothness:d,width:o}}();return(0,u.jsx)(A.Z,{args:[m,o,d],bevelSegments:n,creaseAngle:s,radius:h,smoothness:g,children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};let F;var P;(P=F||(F={})).heightSegments=function(){return{label:"Height Segments",hint:"Number of vertical segments. Default is `16`, minimum is `2`.",max:32,min:2,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:16}},P.radius=c.n.radius,P.widthSegments=function(){return{label:"Width Segments",hint:"Number of horizontal segments. Default is `32`, minimum is `3`.",max:64,min:3,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:32}},P.\u0398Length=function(){return{label:"\u0398 Length (degrees)",hint:"Specify vertical sweep angle (theta) size in degrees (converted to radians). Default is `180.0`.",max:180,min:-180,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:180}},P.\u0398Start=c.n.\u0398Start,P.\u03a6Length=function(){return{label:"\u03a6 Length (degrees)",hint:"Specify horizontal sweep angle (phi) size in degrees (converted to radians). Default is `360.0`.",max:360,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:360}},P.\u03a6Start=function(){return{label:"\u03a6 Start (degrees)",hint:"Specify horizontal starting angle (phi) in degrees (converted to radians). Default is `0.0`.",max:360,min:-360,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}};const H=e=>{let{children:t}=e;const{heightSegments:n,radius:d,widthSegments:o,"\u03b8Length":h,"\u03b8Start":g,"\u03c6Length":c,"\u03c6Start":S}=function(){const{heightSegments:e,radius:t,widthSegments:n,"\u03b8Length":s,"\u03b8Start":a,"\u03c6Length":d,"\u03c6Start":o}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Sphere:(0,r.so)({"Transverse Plane":(0,r.so)({radius:F.radius(),widthSegments:F.widthSegments(),"\u03a6":(0,r.so)({"\u03c6Start":F.\u03a6Start(),"\u03c6Length":F.\u03a6Length()})}),"Frontal Plane":(0,r.so)({heightSegments:F.heightSegments(),"\u0398":(0,r.so)({"\u03b8Start":F.\u0398Start(),"\u03b8Length":F.\u0398Length()})})})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{heightSegments:e,radius:t,widthSegments:n,"\u03b8Length":s,"\u03b8Start":a,"\u03c6Length":d,"\u03c6Start":o}}();return(0,u.jsx)(s.aL,{args:[d,o,n,m.MathUtils.degToRad(S),m.MathUtils.degToRad(c),m.MathUtils.degToRad(g),m.MathUtils.degToRad(h)],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};const G=e=>{let{children:t}=e;const{detail:n,radius:d}=function(){const{detail:e,radius:t}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Tetrahedron:(0,r.so)({detail:p.f.detail(),radius:p.f.radius()})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{detail:e,radius:t}}();return(0,u.jsx)(s.vO,{args:[d,n],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};let B;var U;(U=B||(B={})).arc=function(){return{label:"Arc",max:360,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:360}},U.radialSegments=S.radialSegments,U.radius=c.n.radius,U.tube=function(){return{label:"Tube",hint:"Radius of the tube. Default = 0.4.",max:3,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.4}},U.tubularSegments=function(){return{label:"Tubular Segments",hint:"Default = 6.",max:64,min:3,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:6}};const Y=e=>{let{children:t}=e;const{arc:n,radialSegments:d,radius:o,tube:h,tubularSegments:g}=function(){const{arc:e,radialSegments:t,radius:n,tube:s,tubularSegments:a}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({Torus:(0,r.so)({arc:B.arc(),radialSegments:B.radialSegments(),radius:B.radius(),tube:B.tube(),tubularSegments:B.tubularSegments()})},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{arc:e,radialSegments:t,radius:n,tube:s,tubularSegments:a}}();return(0,u.jsx)(s.KC,{args:[o,h,d,g,m.MathUtils.degToRad(n)],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};let I;var k;(k=I||(I={})).p=function(){return{label:"P",hint:"This value determines, how many times the geometry winds around its axis of rotational symmetry. Default = 2.",max:32,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:2}},k.q=function(){return{label:"Q",hint:"This value determines, how many times the geometry winds around a circle in the interior of the torus. Default = 3.",max:32,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:3}},k.radialSegments=S.radialSegments,k.radius=c.n.radius,k.tube=B.tube,k.tubularSegments=B.tubularSegments;const X=e=>{let{children:t}=e;const{p:n,q:d,radialSegments:o,radius:h,tube:g,tubularSegments:m}=function(){const{p:e,q:t,radialSegments:n,radius:s,tube:a,tubularSegments:d}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({"Torus Knot":(0,r.so)({p:I.p(),q:I.q(),radialSegments:I.radialSegments(),radius:I.radius(),tube:I.tube(),tubularSegments:I.tubularSegments()})})},l.F.folder(i.O.ORDER.COMPONENTS));return{p:e,q:t,radialSegments:n,radius:s,tube:a,tubularSegments:d}}();return(0,u.jsx)(s.fg,{args:[h,g,m,o,n,d],children:null!==t&&void 0!==t?t:(0,u.jsx)(a.F,{})})};var Z=function(e){return e.BOX="Box",e.CONE="Cone",e.CYLINDER="Cylinder",e.DODECAHEDRON="Dodecahedron (12 faces)",e.ICOSAHEDRON="Icosahedron",e.NONE="\u2014None\u2014",e.OCTAHEDRON="Octahedron (8 faces)",e.ROUNDED_BOX="Rounded Box",e.SPHERE="Sphere",e.TETRAHEDRON="Tetrahedron (4 faces)",e.TORUS="Torus",e.TORUS_KNOT="Torus Knot",e}(Z||{});const _={[Z.NONE]:Z.NONE,[Z.BOX]:Z.BOX,[Z.ROUNDED_BOX]:Z.ROUNDED_BOX,[Z.CYLINDER]:Z.CYLINDER,[Z.CONE]:Z.CONE,[Z.TETRAHEDRON]:Z.TETRAHEDRON,[Z.OCTAHEDRON]:Z.OCTAHEDRON,[Z.DODECAHEDRON]:Z.DODECAHEDRON,[Z.ICOSAHEDRON]:Z.ICOSAHEDRON,[Z.SPHERE]:Z.SPHERE,[Z.TORUS]:Z.TORUS,[Z.TORUS_KNOT]:Z.TORUS_KNOT};const z=e=>{let{children:t}=e;const{geometry3DName:n}=function(e,t){const{geometry3DName:n}=(0,r.M4)(i.O.SCHEMA.COMPONENTS,{Geometry:(0,r.so)({geometry3DName:{label:"Geometry",options:e,value:t}},l.F.folder(i.O.ORDER.GEOMETRY))},l.F.folder(i.O.ORDER.COMPONENTS));return{geometry3DName:n}}(_,_[Z.BOX]);return function(e,t){let n;switch(e){case Z.BOX:n=(0,u.jsx)(g,{children:t});break;case Z.CONE:n=(0,u.jsx)(f,{children:t});break;case Z.CYLINDER:n=(0,u.jsx)(R,{children:t});break;case Z.DODECAHEDRON:n=(0,u.jsx)(x,{children:t});break;case Z.ICOSAHEDRON:n=(0,u.jsx)(T,{children:t});break;case Z.OCTAHEDRON:n=(0,u.jsx)(w,{children:t});break;case Z.ROUNDED_BOX:n=(0,u.jsx)(y,{children:t});break;case Z.SPHERE:n=(0,u.jsx)(H,{children:t});break;case Z.TETRAHEDRON:n=(0,u.jsx)(G,{children:t});break;case Z.TORUS:n=(0,u.jsx)(Y,{children:t});break;case Z.TORUS_KNOT:n=(0,u.jsx)(X,{children:t});break;default:n=(0,u.jsx)(u.Fragment,{})}return n}(n,t)};var K=n(6167);const q=e=>(0,u.jsx)(K.A,{children:(0,u.jsx)(z,{...e,children:(0,u.jsx)(a.F,{})})})},4064:(e,t,n)=>{let s;var a;n.d(t,{n:()=>s}),(a=s||(s={})).radius=function(){return{label:"Radius",hint:"Radius of the circle. Default is `1.0`.",max:3,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.segments=function(){return{label:"Segments",hint:"Number of segments (triangles). Default is `8`, minimum is `3`.",max:64,min:3,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:8}},a.\u0398Length=function(){return{label:"\u0398 Length (degrees)",hint:"The central angle (theta) of the circular sector in degrees (converted to radians). Default is `360.0` (full circle).",max:360,min:-360,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:360}},a.\u0398Start=function(){return{label:"\u0398 Start (degrees)",hint:"Start angle (theta) for first segment in degrees (converted to radians). Default is `0.0` (three o'clock position).",max:360,min:-360,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}}},8202:(e,t,n)=>{n.d(t,{L:()=>r});var s=n(4064),a=n(3923);let r;var i;(i=r||(r={})).detail=a.f.detail,i.radius=s.n.radius},505:(e,t,n)=>{let s;var a;n.d(t,{w:()=>s}),(a=s||(s={})).height=function(){return{label:"Height",hint:"Height along the Y axis. Default is 1.",max:6,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.heightSegments=function(){return{label:"Height Segments",hint:"Optional. Default is 1.",max:16,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.width=function(){return{label:"Width",hint:"Width along the X axis. Default is 1.",max:6,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.widthSegments=function(){return{label:"Width Segments",hint:"Optional. Default is 1.",max:16,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}},3923:(e,t,n)=>{n.d(t,{f:()=>a});var s=n(4064);let a;var r;(r=a||(a={})).detail=function(){return{label:"Detail",hint:"Default is 0.",max:8,min:0,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},r.radius=s.n.radius},4839:(e,t,n)=>{n.d(t,{Z:()=>d});var s=n(7462),a=n(7313),r=n(5825),i=n(676);const l=1e-5;const d=a.forwardRef((function(e,t){let{args:[n=1,d=1,o=1]=[],radius:h=.05,steps:u=1,smoothness:g=4,bevelSegments:m=4,creaseAngle:c=.4,children:S,...O}=e;const f=a.useMemo((()=>function(e,t,n){const s=new r.Shape,a=n-l;return s.absarc(l,l,l,-Math.PI/2,-Math.PI,!0),s.absarc(l,t-2*a,l,Math.PI,Math.PI/2,!0),s.absarc(e-2*a,t-2*a,l,Math.PI/2,0,!0),s.absarc(e-2*a,l,l,0,-Math.PI/2,!0),s}(n,d,h)),[n,d,h]),E=a.useMemo((()=>({depth:o-2*h,bevelEnabled:!0,bevelSegments:2*m,steps:u,bevelSize:h-l,bevelThickness:h,curveSegments:g})),[o,h,g]),v=a.useRef(null);return a.useLayoutEffect((()=>{v.current&&(v.current.center(),(0,i.LZ)(v.current,c))}),[f,E]),a.createElement("mesh",(0,s.Z)({ref:t},O),a.createElement("extrudeGeometry",{ref:v,args:[f,E]}),S)}))},2952:(e,t,n)=>{n.d(t,{Ab:()=>o,Cd:()=>l,FC:()=>O,FM:()=>S,JO:()=>u,KC:()=>g,N1:()=>E,Qq:()=>d,aL:()=>h,fg:()=>m,vO:()=>c,xu:()=>i,yI:()=>f});var s=n(7462),a=n(7313);function r(e,t){const n=e+"Geometry";return a.forwardRef(((e,r)=>{let{args:i,children:l,...d}=e;const o=a.useRef(null);return a.useImperativeHandle(r,(()=>o.current)),a.useLayoutEffect((()=>{null==t||t(o.current)})),a.createElement("mesh",(0,s.Z)({ref:o},d),a.createElement(n,{attach:"geometry",args:i}),l)}))}const i=r("box"),l=r("circle"),d=r("cone"),o=r("cylinder"),h=r("sphere"),u=r("plane"),g=r("torus"),m=r("torusKnot"),c=r("tetrahedron"),S=r("ring"),O=r("icosahedron"),f=r("octahedron"),E=r("dodecahedron")}}]);