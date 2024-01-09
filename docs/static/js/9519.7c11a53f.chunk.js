"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[9519],{1724:(t,e,i)=>{i.d(e,{Z:()=>d});var o=i(2953),n=i(4945),a=i(8263),r=i(4704),l=i(5397),s=i(9817);let h;var c;(c=h||(h={})).axesHelper=function(){return{label:"Axes",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},c.gizmoHelper=function(){return{label:"Gizmo",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},c.gridHelper=function(){return{label:"Grid",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},c.polarGridHelper=function(){return{label:"Polar Grid",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},c.stats=function(){return{label:"Stats",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}};var g=i(6417);const d=t=>{const{axesHelper:e,gizmoHelper:i,gridHelper:c,polarGridHelper:d,stats:p}=function(){const{axesHelper:t,gizmoHelper:e,gridHelper:i,polarGridHelper:o,stats:n}=(0,r.M4)(l.O.SCHEMA.GENERAL,{Helpers:(0,r.so)({axesHelper:h.axesHelper(),gizmoHelper:h.gizmoHelper(!0),gridHelper:h.gridHelper(),polarGridHelper:h.polarGridHelper(),stats:h.stats()},s.F.folder(l.O.ORDER.HELPERS))},s.F.folder(l.O.ORDER.GENERAL));return{axesHelper:t,gizmoHelper:e,gridHelper:i,polarGridHelper:o,stats:n}}();return(0,g.jsxs)("group",{name:"Helpers",...t,children:[e&&(0,g.jsx)("axesHelper",{}),i&&(0,g.jsx)(o.I,{alignment:"bottom-right",margin:[80,80],children:(0,g.jsx)(n.f,{axisColors:["hsl(0, 100%, 50%)","hsl(120, 100%, 50%)","hsl(240, 100%, 50%)"],labelColor:"black"})}),c&&(0,g.jsx)("gridHelper",{}),p&&(0,g.jsx)(a.j,{}),d&&(0,g.jsx)("polarGridHelper",{})]})}},7862:(t,e,i)=>{i.d(e,{u:()=>D});var o=i(5964),n=i(2952),a=i(6351),r=i(7313),l=i(5825),s=i(4704),h=i(5397),c=i(9817);let g,d;var p;let L;var u;!function(t){let e=function(t){return t.Blue="hsl(240, 100%, 70%)",t.Blueish="hsl(210, 100%, 70%)",t.Cold="hsl(240, 100%, 99%)",t.Cyan="hsl(180, 100%, 70%)",t.Green="hsl(0, 100%, 70%)",t.Magenta="hsl(300, 100%, 70%)",t.Red="hsl(0, 100%, 70%)",t.Reddish="hsl(30, 100%, 70%)",t.Warm="hsl(0, 100%, 99%)",t.White="hsl(0, 0%, 100%)",t.Yellow="hsl(60, 100%, 70%)",t}({});t.values=e,t.color=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e.White;return{label:"".concat(arguments.length>1&&void 0!==arguments[1]?arguments[1]:""," Color").trim(),value:t}}}(g||(g={})),(p=d||(d={})).angle=function(){return{hint:"Maximum extent of the spotlight, in degrees (converted to radians), from its direction. Default is `60.0`.",label:"Angle (degrees)",max:90,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:60}},p.castShadow=function(){return{label:"Cast Shadow",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},p.decay=function(){return{hint:"The amount the light dims along the distance of the light. Expects a `Float`. Default is `2.0`.",label:"Decay",min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:2}},p.distance=function(){return{hint:"Maximum range of the light. Default is `0.0` (no limit).",label:"Distance",min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},p.helperShow=function(){return{hint:"Show light helpers.",label:"Show",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},p.helperSize=function(){return{hint:"Light helper size.",label:"Size",max:arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,min:0,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5}},p.intensity=function(){return{hint:"Numeric value of the light's power. Default is `1`.",label:"Intensity",min:0,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},p.penumbra=function(){return{hint:"Percent of the spotlight cone that is attenuated due to penumbra. Takes values between `0` and `1`. Default is `0`.",label:"Penumbra",max:1,min:0,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},p.target=function(){return{label:"Target",step:.1,value:{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,z:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}}},(u=L||(L={})).position=function(){return{label:"Position",step:.1,value:{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,z:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}}},u.toArray=function(t){return new l.Vector3(t.x,t.y,t.z)};const E=L.toArray;var R=i(6417);const A=new l.Object3D,f=()=>{const{lightHelper:t,ambientLight:e,directionalLight:i,hemisphereLight:p,pointLight:u,spotLight:f}={lightHelper:(0,s.M4)(h.O.SCHEMA.GENERAL,{Helpers:(0,s.so)({Lighting:(0,s.so)({show:d.helperShow(),size:d.helperSize()},c.F.folder())},c.F.folder(h.O.ORDER.HELPERS))},c.F.folder(h.O.ORDER.GENERAL)),ambientLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Ambient Light":(0,s.so)({color:g.color(),intensity:d.intensity(.2)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),directionalLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Directional Light":(0,s.so)({castShadow:d.castShadow(!0),color:g.color("hsl(120, 100%, 70%)"),intensity:d.intensity(1),position:L.position(4,4,1)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),hemisphereLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Hemisphere Light":(0,s.so)({castShadow:d.castShadow(!0),color:g.color("hsl(210, 100%, 70%)","Sky"),groundColor:g.color("hsl(30, 100%, 70%)","Ground"),intensity:d.intensity(1),position:L.position(0,1,0)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),pointLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Point Light":(0,s.so)({castShadow:d.castShadow(!0),color:g.color("hsl(240, 100%, 70%)"),distance:d.distance(),decay:d.decay(),intensity:d.intensity(1),position:L.position(-4,1,4)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),spotLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{Spotlight:(0,s.so)({angle:d.angle(30),castShadow:d.castShadow(!0),color:g.color("hsl(60, 100%, 70%)"),decay:d.decay(),distance:d.distance(9),intensity:d.intensity(),penumbra:d.penumbra(2.5),position:L.position(2,2,2),target:d.target()},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING))},{scene:m}=(0,a.A)();m.add(A);const S=(0,r.useRef)(null),y=(0,r.useRef)(null),H=(0,r.useRef)(null),M=(0,r.useRef)(null);return(0,o.H)(t.show?S:null,l.DirectionalLightHelper,t.size*i.intensity,i.color),(0,o.H)(t.show?y:null,l.HemisphereLightHelper,t.size*p.intensity),(0,o.H)(t.show?H:null,l.PointLightHelper,t.size*(u.intensity/20),u.color),(0,o.H)(t.show?M:null,l.SpotLightHelper,f.color),(0,r.useEffect)((()=>{A.translateX(f.target.x),A.translateY(f.target.y),A.translateZ(f.target.z)}),[f.target.x,f.target.y,f.target.z]),(0,R.jsxs)("group",{name:"Demo Lighting",children:[(0,R.jsx)("ambientLight",{color:e.color,intensity:e.intensity,name:"Ambient Light"}),(0,R.jsx)("directionalLight",{castShadow:i.castShadow,color:i.color,intensity:i.intensity,name:"Directional Light",position:E(i.position),ref:S}),(0,R.jsx)("hemisphereLight",{castShadow:p.castShadow,color:p.color,groundColor:p.groundColor,intensity:p.intensity,name:"Hemisphere Light",position:E(p.position),ref:y}),(0,R.jsx)("pointLight",{castShadow:u.castShadow,color:u.color,distance:u.distance,decay:u.decay,intensity:u.intensity,name:"Point Light",position:E(u.position),ref:H}),(0,R.jsx)("spotLight",{angle:l.MathUtils.degToRad(f.angle),castShadow:f.castShadow,color:f.color,decay:f.decay,distance:f.distance,intensity:f.intensity,name:"Spotlight",penumbra:f.penumbra,position:E(f.position),ref:M,target:A}),t.show&&(0,R.jsx)(n.Cd,{args:[t.size,8],name:"Spotlight Target",position:L.toArray(f.target),rotation:[-Math.PI/2,0,0],children:(0,R.jsx)("meshBasicMaterial",{color:f.color,wireframe:!0})})]})},m=L.toArray;const S=()=>{const{lightHelper:t,ambientLight:e,frontLight:i,leftLight:n,rightLight:a}={lightHelper:(0,s.M4)(h.O.SCHEMA.GENERAL,{Helpers:(0,s.so)({Lighting:(0,s.so)({show:d.helperShow(),size:d.helperSize()},c.F.folder())},c.F.folder(h.O.ORDER.HELPERS))},c.F.folder(h.O.ORDER.GENERAL)),ambientLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Ambient Light":(0,s.so)({color:g.color(g.values.Warm),intensity:d.intensity(.2)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),frontLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Front Light":(0,s.so)({castShadow:d.castShadow(!0),color:g.color(),intensity:d.intensity(1.4),position:L.position(0,2,4)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),leftLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Left Light":(0,s.so)({castShadow:d.castShadow(!0),color:g.color(g.values.Reddish),intensity:d.intensity(2),position:L.position(-4,0,0)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),rightLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Right Light":(0,s.so)({castShadow:d.castShadow(!0),color:g.color(g.values.Blueish),intensity:d.intensity(2),position:L.position(4,0,0)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING))},p=(0,r.useRef)(null),u=(0,r.useRef)(null),E=(0,r.useRef)(null);return(0,o.H)(t.show?p:null,l.DirectionalLightHelper,t.size*i.intensity,i.color),(0,o.H)(t.show?u:null,l.DirectionalLightHelper,t.size*n.intensity,n.color),(0,o.H)(t.show?E:null,l.DirectionalLightHelper,t.size*a.intensity,a.color),(0,R.jsxs)("group",{name:"Studio Lighting",children:[(0,R.jsx)("ambientLight",{color:e.color,intensity:e.intensity,name:"Ambient Light"}),(0,R.jsx)("directionalLight",{castShadow:i.castShadow,color:i.color,intensity:i.intensity,name:"Front Light",position:m(i.position),ref:p}),(0,R.jsx)("directionalLight",{castShadow:n.castShadow,color:n.color,intensity:n.intensity,name:"Left Light",position:m(n.position),ref:u}),(0,R.jsx)("directionalLight",{castShadow:a.castShadow,color:a.color,intensity:a.intensity,name:"Right Light",position:m(a.position),ref:E})]})},y=L.toArray;function H(){return{lightHelper:(0,s.M4)(h.O.SCHEMA.GENERAL,{Helpers:(0,s.so)({Lighting:(0,s.so)({show:d.helperShow(),size:d.helperSize()},c.F.folder())},c.F.folder(h.O.ORDER.HELPERS))},c.F.folder(h.O.ORDER.GENERAL)),ambientLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Ambient Light":(0,s.so)({color:g.color(g.values.Warm),intensity:d.intensity(.2)},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),backLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Back Light":(0,s.so)({angle:d.angle(30),castShadow:d.castShadow(!0),color:g.color(g.values.Warm),decay:d.decay(),distance:d.distance(9),intensity:d.intensity(75),penumbra:d.penumbra(),position:L.position(4,2,-4),target:d.target()},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),fillLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Fill Light":(0,s.so)({angle:d.angle(30),castShadow:d.castShadow(!0),color:g.color(g.values.Blueish),decay:d.decay(),distance:d.distance(9),intensity:d.intensity(75),penumbra:d.penumbra(),position:L.position(-4,2,4),target:d.target()},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING)),keyLight:(0,s.M4)(h.O.SCHEMA.LIGHTING,{"Key Light":(0,s.so)({angle:d.angle(30),castShadow:d.castShadow(!0),color:g.color(g.values.Reddish),decay:d.decay(),distance:d.distance(9),intensity:d.intensity(75),penumbra:d.penumbra(),position:L.position(4,2,4),target:d.target()},c.F.folder())},c.F.folder(h.O.ORDER.LIGHTING))}}const M=new l.Object3D,I=new l.Object3D,T=new l.Object3D,O=()=>{const{lightHelper:t,ambientLight:e,backLight:i,fillLight:a,keyLight:s}=H(),h=(0,r.useRef)(null),c=(0,r.useRef)(null),g=(0,r.useRef)(null);return(0,o.H)(t.show?h:null,l.SpotLightHelper,i.color),(0,o.H)(t.show?c:null,l.SpotLightHelper,a.color),(0,o.H)(t.show?g:null,l.SpotLightHelper,s.color),(0,r.useEffect)((()=>{M.translateX(i.target.x),M.translateY(i.target.y),M.translateZ(i.target.z)}),[i.target.x,i.target.y,i.target.z]),(0,r.useEffect)((()=>{I.translateX(a.target.x),I.translateY(a.target.y),I.translateZ(a.target.z)}),[a.target.x,a.target.y,a.target.z]),(0,r.useEffect)((()=>{T.translateX(s.target.x),T.translateY(s.target.y),T.translateZ(s.target.z)}),[s.target.x,s.target.y,s.target.z]),(0,R.jsxs)("group",{name:"Three Point Lighting",children:[(0,R.jsx)("ambientLight",{color:e.color,intensity:e.intensity,name:"Ambient Light"}),(0,R.jsx)("spotLight",{angle:l.MathUtils.degToRad(i.angle),castShadow:i.castShadow,color:i.color,decay:i.decay,distance:i.distance,intensity:i.intensity,name:"Back Light",penumbra:i.penumbra,position:L.toArray(i.position),ref:h,target:M}),(0,R.jsx)("spotLight",{angle:l.MathUtils.degToRad(a.angle),castShadow:a.castShadow,color:a.color,decay:a.decay,distance:a.distance,intensity:a.intensity,name:"Fill Light",penumbra:a.penumbra,position:L.toArray(a.position),ref:c,target:I}),(0,R.jsx)("spotLight",{angle:l.MathUtils.degToRad(s.angle),castShadow:s.castShadow,color:s.color,decay:s.decay,distance:s.distance,intensity:s.intensity,name:"Key Light",penumbra:s.penumbra,position:L.toArray(s.position),ref:g,target:T}),t.show&&(0,R.jsxs)("group",{name:"Targets",children:[(0,R.jsx)(n.Cd,{args:[t.size,8],name:"Back Light Target",position:L.toArray(i.target),rotation:[-Math.PI/2,0,0],children:(0,R.jsx)("meshBasicMaterial",{color:i.color,wireframe:!0})}),(0,R.jsx)(n.Cd,{args:[t.size,8],name:"Fill Light Target",position:L.toArray(a.target),rotation:[-Math.PI/2,0,0],children:(0,R.jsx)("meshBasicMaterial",{color:a.color,wireframe:!0})}),(0,R.jsx)(n.Cd,{args:[t.size,8],name:"Key Light Target",position:L.toArray(s.target),rotation:[-Math.PI/2,0,0],children:(0,R.jsx)("meshBasicMaterial",{color:s.color,wireframe:!0})})]})]})};var w=i(3081);const G=new l.Object3D,N=new l.Object3D,x=new l.Object3D,b=()=>{const{lightHelper:t,ambientLight:e,backLight:i,fillLight:a,keyLight:s}=H(),h=(0,r.useRef)(null),c=(0,r.useRef)(null),g=(0,r.useRef)(null);return(0,o.H)(t.show?h:null,l.SpotLightHelper,i.color),(0,o.H)(t.show?c:null,l.SpotLightHelper,a.color),(0,o.H)(t.show?g:null,l.SpotLightHelper,s.color),(0,r.useEffect)((()=>{G.translateX(i.target.x),G.translateY(i.target.y),G.translateZ(i.target.z)}),[i.target.x,i.target.y,i.target.z]),(0,r.useEffect)((()=>{N.translateX(a.target.x),N.translateY(a.target.y),N.translateZ(a.target.z)}),[a.target.x,a.target.y,a.target.z]),(0,r.useEffect)((()=>{x.translateX(s.target.x),x.translateY(s.target.y),x.translateZ(s.target.z)}),[s.target.x,s.target.y,s.target.z]),(0,R.jsxs)("group",{name:"Three Point Lighting Volumetric",children:[(0,R.jsx)("ambientLight",{color:e.color,intensity:e.intensity,name:"Ambient Light"}),(0,R.jsx)(w.P,{angle:l.MathUtils.degToRad(i.angle),castShadow:i.castShadow,color:i.color,decay:i.decay,distance:i.distance,intensity:i.intensity,name:"Back Light",penumbra:i.penumbra,position:y(i.position),ref:h,target:G}),(0,R.jsx)(w.P,{angle:l.MathUtils.degToRad(a.angle),castShadow:a.castShadow,color:a.color,decay:a.decay,distance:a.distance,intensity:a.intensity,name:"Fill Light",penumbra:a.penumbra,position:y(a.position),ref:c,target:N}),(0,R.jsx)(w.P,{angle:l.MathUtils.degToRad(s.angle),castShadow:s.castShadow,color:s.color,decay:s.decay,distance:s.distance,intensity:s.intensity,name:"Key Light",penumbra:s.penumbra,position:y(s.position),ref:g,target:x}),t.show&&(0,R.jsxs)("group",{name:"Targets",children:[(0,R.jsx)(n.Cd,{args:[t.size,8],name:"Back Light Target",position:L.toArray(i.target),rotation:[-Math.PI/2,0,0],children:(0,R.jsx)("meshBasicMaterial",{color:i.color,wireframe:!0})}),(0,R.jsx)(n.Cd,{args:[t.size,8],name:"Fill Light Target",position:L.toArray(a.target),rotation:[-Math.PI/2,0,0],children:(0,R.jsx)("meshBasicMaterial",{color:a.color,wireframe:!0})}),(0,R.jsx)(n.Cd,{args:[t.size,8],name:"Key Light Target",position:L.toArray(s.target),rotation:[-Math.PI/2,0,0],children:(0,R.jsx)("meshBasicMaterial",{color:s.color,wireframe:!0})})]})]})};var v=function(t){return t.DEMO="Demo",t.NONE="\u2014None\u2014",t.STUDIO="Studio",t.THREE_POINT="Three Point",t.THREE_POINT_VOLUMETRIC="Three Point (Volumetric)",t}(v||{});const C={[v.NONE]:void 0,[v.DEMO]:(0,R.jsx)(f,{}),[v.STUDIO]:(0,R.jsx)(S,{}),[v.THREE_POINT]:(0,R.jsx)(O,{}),[v.THREE_POINT_VOLUMETRIC]:(0,R.jsx)(b,{})},D=t=>{const{lighting:e}=function(t,e){const{lighting:i}=(0,s.M4)(h.O.SCHEMA.LIGHTING,{lighting:{label:"Lighting",options:t,value:e}},c.F.folder(h.O.ORDER.LIGHTING));return{lighting:i}}(C,C[v.THREE_POINT_VOLUMETRIC]);return(0,R.jsx)("group",{name:"Lighting",...t,children:e})}},1960:(t,e,i)=>{i.d(e,{J:()=>o});const o={ALWAYS:"always",DEMAND:"demand",NEVER:"never"}},5397:(t,e,i)=>{let o;i.d(e,{O:()=>o}),function(t){let e=function(t){return t[t.GENERAL=0]="GENERAL",t[t.CANVAS=1]="CANVAS",t[t.EFFECTS_COMPOSER=2]="EFFECTS_COMPOSER",t[t.HELPERS=3]="HELPERS",t[t.PHYSICS=4]="PHYSICS",t[t.SIMULATION=5]="SIMULATION",t[t.COMPONENTS=6]="COMPONENTS",t[t.GEOMETRY=7]="GEOMETRY",t[t.MATERIALS=8]="MATERIALS",t[t.MATERIAL=9]="MATERIAL",t[t.BASIC_MATERIAL=10]="BASIC_MATERIAL",t[t.LAMBERT_MATERIAL=11]="LAMBERT_MATERIAL",t[t.PHONG_MATERIAL=12]="PHONG_MATERIAL",t[t.STANDARD_MATERIAL=13]="STANDARD_MATERIAL",t[t.PHYSICAL_MATERIAL=14]="PHYSICAL_MATERIAL",t[t.MATCAP_MATERIAL=15]="MATCAP_MATERIAL",t[t.NORMAL_MATERIAL=16]="NORMAL_MATERIAL",t[t.TOON_MATERIAL=17]="TOON_MATERIAL",t[t.DREI_REFLECTOR_MATERIAL=18]="DREI_REFLECTOR_MATERIAL",t[t.DREI_TRANSMISSION_MATERIAL=19]="DREI_TRANSMISSION_MATERIAL",t[t.LIGHTING=20]="LIGHTING",t}({});t.ORDER=e;let i=function(t){return t.BASIC_MATERIAL="Basic Material",t.CANVAS="Canvas",t.COMPONENTS="Components",t.EFFECTS_COMPOSER="Effects Composer",t.GENERAL="General",t.GEOMETRY="Geometry",t.HELPERS="Helpers",t.LAMBERT_MATERIAL="Lambert Material",t.LIGHTING="Lighting",t.MATCAP_MATERIAL="Matcap Material",t.MATERIAL="Material",t.MATERIALS="Materials",t.NORMAL_MATERIAL="Normal Material",t.PHONG_MATERIAL="Phong Material",t.PHYSICAL_MATERIAL="Physical Material",t.PHYSICS="Physics",t.REFLECTOR_MATERIAL="Reflector Material (Drei)",t.SIMULATION="Simulation",t.STANDARD_MATERIAL="Standard Material",t.TOON_MATERIAL="Toon Material",t}({});t.SCHEMA=i}(o||(o={}))},4662:(t,e,i)=>{i.d(e,{p:()=>h});var o=i(4704),n=i(5397),a=i(9817),r=i(1960);let l;var s;function h(){const{flat:t,frameloop:e,linear:i,shadows:r}=(0,o.M4)(n.O.SCHEMA.GENERAL,{Canvas:(0,o.so)({flat:l.flat(),frameloop:l.frameloop(),linear:l.linear(),shadows:l.shadows(!0)},a.F.folder(n.O.ORDER.CANVAS))},a.F.folder(n.O.ORDER.GENERAL));return{flat:t,frameloop:e,linear:i,shadows:r}}(s=l||(l={})).flat=function(){return{hint:"Use THREE.NoToneMapping instead of THREE.ACESFilmicToneMapping.",label:"Flat",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},s.frameloop=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.J.ALWAYS;return{hint:"Render mode.",label:"Frameloop",options:r.J,value:t}},s.linear=function(){return{hint:"Switch off automatic sRGB encoding and gamma correction.",label:"Linear",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},s.shadows=function(){return{hint:"Props that go into gl.shadowMap, can also be set true for PCFsoft.",label:"Shadows",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},9817:(t,e,i)=>{let o;i.d(e,{F:()=>o}),(o||(o={})).folder=function(){return{collapsed:!(arguments.length>1&&void 0!==arguments[1])||arguments[1],color:arguments.length>2?arguments[2]:void 0,order:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}}}}]);