"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[9876],{6167:(e,t,n)=>{n.d(t,{A:()=>g});var r=n(259),a=n(7066),i=n(5819),o=n(4704),s=n(7313),l=n(4110),u=n(1724),c=n(7862),d=n(4662),m=n(6417);const g=e=>{let{children:t}=e;const n=(0,d.p)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(i.Xz,{camera:void 0,flat:n.flat,frameloop:n.frameloop,linear:n.linear,orthographic:!1,shadows:n.shadows,children:(0,m.jsxs)(s.Suspense,{children:[(0,m.jsx)(l.z,{}),(0,m.jsx)(u.Z,{}),(0,m.jsx)(c.u,{}),(0,m.jsx)(r.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),t]})}),(0,m.jsx)(o.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,m.jsx)(a.a,{})]})}},4905:(e,t,n)=>{n.r(t),n.d(t,{default:()=>E});var r=n(2952),a=n(5825),i=n(1352),o=n(4704),s=n(5397),l=n(9817),u=n(4064);var c=n(6417);const d=e=>{let{children:t}=e;const{radius:n,segments:d,"\u03b8Length":m,"\u03b8Start":g}=function(){const{radius:e,segments:t,"\u03b8Length":n,"\u03b8Start":r}=(0,o.M4)(s.O.SCHEMA.COMPONENTS,{Geometry:(0,o.so)({Circle:(0,o.so)({"XY Plane":(0,o.so)({radius:u.n.radius(),segments:u.n.segments(),"\u0398":(0,o.so)({"\u03b8Start":u.n.\u0398Start(),"\u03b8Length":u.n.\u0398Length()})})})},l.F.folder(s.O.ORDER.GEOMETRY))},l.F.folder(s.O.ORDER.COMPONENTS));return{radius:e,segments:t,"\u03b8Length":n,"\u03b8Start":r}}();return(0,c.jsx)(r.Cd,{args:[n,d,a.MathUtils.degToRad(g),a.MathUtils.degToRad(m)],children:null!==t&&void 0!==t?t:(0,c.jsx)(i.F,{})})};var m=n(505);const g=e=>{let{children:t}=e;const{height:n,heightSegments:a,width:u,widthSegments:d}=function(){const{height:e,heightSegments:t,width:n,widthSegments:r}=(0,o.M4)(s.O.SCHEMA.COMPONENTS,{Geometry:(0,o.so)({Plane:(0,o.so)({"X Axis":(0,o.so)({width:m.w.width(),widthSegments:m.w.widthSegments()}),"Y Axis":(0,o.so)({height:m.w.height(),heightSegments:m.w.heightSegments()})})},l.F.folder(s.O.ORDER.GEOMETRY))},l.F.folder(s.O.ORDER.COMPONENTS));return{height:e,heightSegments:t,width:n,widthSegments:r}}();return(0,c.jsx)(r.JO,{args:[u,n,d,a],children:null!==t&&void 0!==t?t:(0,c.jsx)(i.F,{})})};let h;var f;(f=h||(h={})).innerRadius=function(){return{label:"Inner Radius",hint:"Default is 0.5.",max:3,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5}},f.outerRadius=function(){return{label:"Outer Radius",hint:"Default is 1.",max:3,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},f.\u0398Segments=function(){return{label:"\u0398 Segments",hint:"Number of segments. A higher number means the ring will be more round. Minimum is 3. Default is 8.",max:64,min:3,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:8}},f.\u0398Length=u.n.\u0398Length,f.\u0398Start=u.n.\u0398Start,f.\u03a6Segments=function(){return{label:"\u03a6 Segments",hints:"Minimum is 1. Default is 1.",max:64,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:8}};const v=e=>{let{children:t}=e;const{innerRadius:n,outerRadius:u,"\u03b8Length":d,"\u03b8Segments":m,"\u03b8Start":g,"\u03c6Segments":f}=function(){const{innerRadius:e,outerRadius:t,"\u03b8Length":n,"\u03b8Segments":r,"\u03b8Start":a,"\u03c6Segments":i}=(0,o.M4)(s.O.SCHEMA.COMPONENTS,{Geometry:(0,o.so)({Ring:(0,o.so)({"XY Plane":(0,o.so)({innerRadius:h.innerRadius(),outerRadius:h.outerRadius(),"\u0398":(0,o.so)({"\u03b8Segments":h.\u0398Segments(),"\u03b8Start":h.\u0398Start(),"\u03b8Length":h.\u0398Length()}),"\u03a6":(0,o.so)({"\u03c6Segments":h.\u03a6Segments()})})})},l.F.folder(s.O.ORDER.GEOMETRY))},l.F.folder(s.O.ORDER.COMPONENTS));return{innerRadius:e,outerRadius:t,"\u03b8Length":n,"\u03b8Segments":r,"\u03b8Start":a,"\u03c6Segments":i}}();return(0,c.jsx)(r.FM,{args:[n,u,m,f,a.MathUtils.degToRad(g),a.MathUtils.degToRad(d)],children:null!==t&&void 0!==t?t:(0,c.jsx)(i.F,{})})};var p=function(e){return e.CIRCLE="Circle",e.NONE="\u2014None\u2014",e.PLANE="Plane",e.RING="Ring",e}(p||{});const S={[p.NONE]:p.NONE,[p.PLANE]:p.PLANE,[p.CIRCLE]:p.CIRCLE,[p.RING]:p.RING};function w(e,t){let n;switch(e){case p.CIRCLE:n=(0,c.jsx)(d,{children:t});break;case p.PLANE:n=(0,c.jsx)(g,{children:t});break;case p.RING:n=(0,c.jsx)(v,{children:t});break;default:n=(0,c.jsx)(c.Fragment,{})}return n}const x=e=>{let{children:t}=e;const{geometry2DName:n}=function(e,t){const{geometry2DName:n}=(0,o.M4)(s.O.SCHEMA.COMPONENTS,{Geometry:(0,o.so)({geometry2DName:{label:"Geometry 2D",options:e,value:t}},l.F.folder(s.O.ORDER.GEOMETRY))},l.F.folder(s.O.ORDER.COMPONENTS));return{geometry2DName:n}}(S,S[p.PLANE]);return(0,c.jsx)(c.Fragment,{children:w(n,t)})};var R=n(6167);const E=e=>(0,c.jsx)(R.A,{children:(0,c.jsx)(x,{...e,children:(0,c.jsx)(i.F,{})})})},4064:(e,t,n)=>{let r;var a;n.d(t,{n:()=>r}),(a=r||(r={})).radius=function(){return{label:"Radius",hint:"Radius of the circle. Default is `1.0`.",max:3,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.segments=function(){return{label:"Segments",hint:"Number of segments (triangles). Default is `8`, minimum is `3`.",max:64,min:3,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:8}},a.\u0398Length=function(){return{label:"\u0398 Length (degrees)",hint:"The central angle (theta) of the circular sector in degrees (converted to radians). Default is `360.0` (full circle).",max:360,min:-360,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:360}},a.\u0398Start=function(){return{label:"\u0398 Start (degrees)",hint:"Start angle (theta) for first segment in degrees (converted to radians). Default is `0.0` (three o'clock position).",max:360,min:-360,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}}},505:(e,t,n)=>{let r;var a;n.d(t,{w:()=>r}),(a=r||(r={})).height=function(){return{label:"Height",hint:"Height along the Y axis. Default is 1.",max:6,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.heightSegments=function(){return{label:"Height Segments",hint:"Optional. Default is 1.",max:16,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.width=function(){return{label:"Width",hint:"Width along the X axis. Default is 1.",max:6,min:.1,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},a.widthSegments=function(){return{label:"Width Segments",hint:"Optional. Default is 1.",max:16,min:1,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}}},3081:(e,t,n)=>{n.d(t,{P:()=>d});var r=n(7462),a=n(7313),i=n(5825),o=n(3002),s=n(4296),l=n(2362);class u extends i.ShaderMaterial{constructor(){super({uniforms:{depth:{value:null},opacity:{value:1},attenuation:{value:2.5},anglePower:{value:12},spotPosition:{value:new i.Vector3(0,0,0)},lightColor:{value:new i.Color("white")},cameraNear:{value:0},cameraFar:{value:1},resolution:{value:new i.Vector2(0,0)}},transparent:!0,depthWrite:!1,vertexShader:"\n        varying vec3 vNormal;\n        varying float vViewZ;\n        varying float vIntensity;\n        uniform vec3 spotPosition;\n        uniform float attenuation;\n\n        #include <common>\n        #include <logdepthbuf_pars_vertex>\n\n        void main() {\n          // compute intensity\n          vNormal = normalize(normalMatrix * normal);\n          vec4 worldPosition = modelMatrix * vec4(position, 1);\n          vec4 viewPosition = viewMatrix * worldPosition;\n          vViewZ = viewPosition.z;\n\n          vIntensity = 1.0 - saturate(distance(worldPosition.xyz, spotPosition) / attenuation);\n\n          gl_Position = projectionMatrix * viewPosition;\n\n          #include <logdepthbuf_vertex>\n        }\n      ",fragmentShader:"\n        varying vec3 vNormal;\n        varying float vViewZ;\n        varying float vIntensity;\n\n        uniform vec3 lightColor;\n        uniform float anglePower;\n        uniform sampler2D depth;\n        uniform vec2 resolution;\n        uniform float cameraNear;\n        uniform float cameraFar;\n        uniform float opacity;\n\n        #include <packing>\n        #include <logdepthbuf_pars_fragment>\n\n        float readDepth(sampler2D depthSampler, vec2 uv) {\n          float fragCoordZ = texture(depthSampler, uv).r;\n\n          // https://github.com/mrdoob/three.js/issues/23072\n          #ifdef USE_LOGDEPTHBUF\n            float viewZ = 1.0 - exp2(fragCoordZ * log(cameraFar + 1.0) / log(2.0));\n          #else\n            float viewZ = perspectiveDepthToViewZ(fragCoordZ, cameraNear, cameraFar);\n          #endif\n\n          return viewZ;\n        }\n\n        void main() {\n          #include <logdepthbuf_fragment>\n\n          vec3 normal = vec3(vNormal.x, vNormal.y, abs(vNormal.z));\n          float angleIntensity = pow(dot(normal, vec3(0, 0, 1)), anglePower);\n          float intensity = vIntensity * angleIntensity;\n\n          // fades when z is close to sampled depth, meaning the cone is intersecting existing geometry\n          bool isSoft = resolution[0] > 0.0 && resolution[1] > 0.0;\n          if (isSoft) {\n            vec2 uv = gl_FragCoord.xy / resolution;\n            intensity *= smoothstep(0.0, 1.0, vViewZ - readDepth(depth, uv));\n          }\n\n          gl_FragColor = vec4(lightColor, intensity * opacity);\n\n          #include <tonemapping_fragment>\n          #include <".concat(l.i>=154?"colorspace_fragment":"encodings_fragment",">\n        }\n      ")})}}function c(e){let{opacity:t=1,radiusTop:n,radiusBottom:r,depthBuffer:s,color:l="white",distance:c=5,angle:d=.15,attenuation:m=5,anglePower:g=5}=e;const h=a.useRef(null),f=(0,o.A)((e=>e.size)),v=(0,o.A)((e=>e.camera)),p=(0,o.A)((e=>e.viewport.dpr)),[S]=a.useState((()=>new u)),[w]=a.useState((()=>new i.Vector3));n=void 0===n?.1:n,r=void 0===r?7*d:r,(0,o.C)((()=>{S.uniforms.spotPosition.value.copy(h.current.getWorldPosition(w)),h.current.lookAt(h.current.parent.target.getWorldPosition(w))}));const x=a.useMemo((()=>{const e=new i.CylinderGeometry(n,r,c,128,64,!0);return e.applyMatrix4((new i.Matrix4).makeTranslation(0,-c/2,0)),e.applyMatrix4((new i.Matrix4).makeRotationX(-Math.PI/2)),e}),[c,n,r]);return a.createElement(a.Fragment,null,a.createElement("mesh",{ref:h,geometry:x,raycast:()=>null},a.createElement("primitive",{object:S,attach:"material","uniforms-opacity-value":t,"uniforms-lightColor-value":l,"uniforms-attenuation-value":m,"uniforms-anglePower-value":g,"uniforms-depth-value":s,"uniforms-cameraNear-value":v.near,"uniforms-cameraFar-value":v.far,"uniforms-resolution-value":s?[f.width*p,f.height*p]:[0,0]})))}const d=a.forwardRef(((e,t)=>{let{opacity:n=1,radiusTop:i,radiusBottom:o,depthBuffer:l,color:u="white",distance:d=5,angle:m=.15,attenuation:g=5,anglePower:h=5,volumetric:f=!0,debug:v=!1,children:p,...S}=e;const w=a.useRef(null);return a.createElement("group",null,v&&w.current&&a.createElement("spotLightHelper",{args:[w.current]}),a.createElement("spotLight",(0,r.Z)({ref:(0,s.Z)([t,w]),angle:m,color:u,distance:d,castShadow:!0},S),f&&a.createElement(c,{debug:v,opacity:n,radiusTop:i,radiusBottom:o,depthBuffer:l,color:u,distance:d,angle:m,attenuation:g,anglePower:h})),p&&a.cloneElement(p,{spotlightRef:w,debug:v}))}))},2952:(e,t,n)=>{n.d(t,{Ab:()=>u,Cd:()=>s,FC:()=>v,FM:()=>f,JO:()=>d,KC:()=>m,N1:()=>S,Qq:()=>l,aL:()=>c,fg:()=>g,vO:()=>h,xu:()=>o,yI:()=>p});var r=n(7462),a=n(7313);function i(e,t){const n=e+"Geometry";return a.forwardRef(((e,i)=>{let{args:o,children:s,...l}=e;const u=a.useRef(null);return a.useImperativeHandle(i,(()=>u.current)),a.useLayoutEffect((()=>{null==t||t(u.current)})),a.createElement("mesh",(0,r.Z)({ref:u},l),a.createElement(n,{attach:"geometry",args:o}),s)}))}const o=i("box"),s=i("circle"),l=i("cone"),u=i("cylinder"),c=i("sphere"),d=i("plane"),m=i("torus"),g=i("torusKnot"),h=i("tetrahedron"),f=i("ring"),v=i("icosahedron"),p=i("octahedron"),S=i("dodecahedron")},5964:(e,t,n)=>{n.d(t,{H:()=>i});var r=n(7313),a=n(3002);function i(e,t){for(var n=arguments.length,i=new Array(n>2?n-2:0),o=2;o<n;o++)i[o-2]=arguments[o];const s=r.useRef(),l=(0,a.A)((e=>e.scene));return r.useLayoutEffect((()=>{let n;if(e&&null!=e&&e.current&&t&&(s.current=n=new t(e.current,...i)),n)return n.traverse((e=>e.raycast=()=>null)),l.add(n),()=>{s.current=void 0,l.remove(n),null==n.dispose||n.dispose()}}),[l,t,e,...i]),(0,a.C)((()=>{var e;null==(e=s.current)||null==e.update||e.update()})),s}},2362:(e,t,n)=>{n.d(t,{i:()=>a});var r=n(5825);const a=(()=>parseInt(r.REVISION.replace(/\D+/g,"")))()}}]);