"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[2748],{3702:(e,t,n)=>{n.d(t,{_:()=>c});var r=n(6795),o=n(7313),a=n(7220),s=n(8358),i=n(6417);const c=(0,o.forwardRef)(((e,t)=>{const{nodes:n}=(0,r.L)(s,!0);return(0,i.jsx)("group",{...e,children:(0,i.jsx)("mesh",{geometry:n.Suzanne.geometry,ref:t,children:(0,i.jsx)(a.F,{})})})}))},3280:(e,t,n)=>{n.d(t,{p:()=>c});var r=n(4704),o=n(5397),a=n(9817);let s;var i;function c(){const{gravity:e,paused:t,showDebug:n}=(0,r.M4)(o.O.SCHEMA.PHYSICS,{gravity:s.gravity(),paused:s.paused(),showDebug:s.showDebug(!0)},a.F.folder(o.O.ORDER.PHYSICS));return{gravity:e,paused:t,showDebug:n}}(i=s||(s={})).gravity=function(){return{label:"Gravity",hint:"Default = 9.81",value:{x:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,y:arguments.length>1&&void 0!==arguments[1]?arguments[1]:-9.80665,z:arguments.length>2&&void 0!==arguments[2]?arguments[2]:0}}},i.paused=function(){return{label:"Paused",hint:"Pause physics simulation.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},i.showDebug=function(){return{label:"Debug",hint:"Show debug geometry.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}}},1533:(e,t,n)=>{n.d(t,{A:()=>p});var r=n(259),o=n(7066),a=n(5819),s=n(3082),i=n(4704),c=n(7313),l=n(1724),u=n(7862),d=n(4662),h=n(3280),m=n(6417);const p=e=>{let{children:t}=e;const n=(0,d.p)(),p=(0,h.p)();return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(a.Xz,{camera:void 0,flat:n.flat,frameloop:n.frameloop,linear:n.linear,orthographic:!1,shadows:n.shadows,children:(0,m.jsxs)(c.Suspense,{children:[(0,m.jsx)(l.Z,{}),(0,m.jsx)(u.u,{}),(0,m.jsx)(r.z,{enableDamping:!0,enablePan:!0,enableZoom:!0}),(0,m.jsx)(s.wI,{colliders:void 0,debug:p.showDebug,gravity:[p.gravity.x,p.gravity.y,p.gravity.z],paused:p.paused,timeStep:"vary",updatePriority:void 0,children:t})]})}),(0,m.jsx)(i.Zf,{collapsed:!1,fill:!1,flat:!1,hidden:!1,oneLineLabels:!0,titleBar:!0}),(0,m.jsx)(o.a,{})]})}},643:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var r=n(6790),o=n(3082),a=n(3702),s=n(5867),i=n(6417);const c=.5,l=["ball","cuboid","hull","trimesh"],u=e=>(0,i.jsx)("group",{name:"Rapier Auto-colliders",...e,children:l.map(((e,t)=>(0,i.jsxs)(o.ib,{colliders:e,position:[2*(t-(l.length-1)/2),0,0],type:"fixed",children:[(0,i.jsx)(a._,{scale:[c,c,c]}),(0,i.jsx)(r.V,{className:s.Z.label,position:[0,-1,0],children:e})]},"auto-collider-".concat(t))))});var d=n(1533);const h=e=>(0,i.jsx)(d.A,{children:(0,i.jsx)(u,{...e})})},124:(e,t,n)=>{n.d(t,{K:()=>c});var r=n(7313),o=n(8640),a=n(1120);const s="https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/matcaps.json",i="https://rawcdn.githack.com/emmelleppi/matcaps/9b36ccaaf0a24881a39062d05566c9e92be4aa0d";function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,n=arguments.length>2?arguments[2]:void 0;const c=(0,a.Rq)((()=>fetch(s).then((e=>e.json()))),["matcapList"]),l=c[0],u=r.useMemo((()=>Object.keys(c).length),[]),d=r.useMemo((()=>"string"===typeof e?e:"number"===typeof e?c[e]:null),[e]),h="".concat(d||l).concat(function(e){switch(e){case 64:return"-64px";case 128:return"-128px";case 256:return"-256px";case 512:return"-512px";default:return""}}(t),".png"),m="".concat(i,"/").concat(t,"/").concat(h);return[(0,o.m)(m,n),m,u]}},54:(e,t,n)=>{n.d(t,{N:()=>l});var r=n(7313),o=n(8640),a=n(5825),s=n(1120);const i="https://rawcdn.githack.com/pmndrs/drei-assets/7a3104997e1576f83472829815b00880d88b32fb",c="https://cdn.jsdelivr.net/gh/pmndrs/drei-assets@master/normals/normals.json";function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const{repeat:l=[1,1],anisotropy:u=1,offset:d=[0,0]}=t,h=(0,s.Rq)((()=>fetch(c).then((e=>e.json()))),["normalsList"]),m=r.useMemo((()=>Object.keys(h).length),[]),p=h[0],f=h[e]||p,v="".concat(i,"/normals/").concat(f),g=(0,o.m)(v,n);return r.useLayoutEffect((()=>{g&&(g.wrapS=g.wrapT=a.RepeatWrapping,g.repeat=new a.Vector2(l[0],l[1]),g.offset=new a.Vector2(d[0],d[1]),g.anisotropy=u)}),[g,u,l,d]),[g,v,m]}},8640:(e,t,n)=>{n.d(t,{m:()=>i});var r=n(5825),o=n(3002),a=n(7313);const s=e=>e===Object(e)&&!Array.isArray(e)&&"function"!==typeof e;function i(e,t){const n=(0,o.A)((e=>e.gl)),i=(0,o.F)(r.TextureLoader,s(e)?Object.values(e):e);if((0,a.useLayoutEffect)((()=>{null==t||t(i)}),[t]),(0,a.useEffect)((()=>{if("initTexture"in n){(Array.isArray(i)?i:[i]).forEach(n.initTexture)}}),[n,i]),s(e)){const t={};let n=0;for(const r in e)t[r]=i[n++];return t}return i}i.preload=e=>o.F.preload(r.TextureLoader,e),i.clear=e=>o.F.clear(r.TextureLoader,e)},6790:(e,t,n)=>{n.d(t,{V:()=>g});var r=n(7462),o=n(7313),a=n(1739),s=n(5825),i=n(3002);const c=new s.Vector3,l=new s.Vector3,u=new s.Vector3;function d(e,t,n){const r=c.setFromMatrixPosition(e.matrixWorld);r.project(t);const o=n.width/2,a=n.height/2;return[r.x*o+o,-r.y*a+a]}const h=e=>Math.abs(e)<1e-10?0:e;function m(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r="matrix3d(";for(let o=0;16!==o;o++)r+=h(t[o]*e.elements[o])+(15!==o?",":")");return n+r}const p=(f=[1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1],e=>m(e,f));var f;const v=(e,t)=>{return m(e,[1/(n=t),1/n,1/n,1,-1/n,-1/n,-1/n,-1,1/n,1/n,1/n,1,1,1,1,1],"translate(-50%,-50%)");var n};const g=o.forwardRef(((e,t)=>{let{children:n,eps:m=.001,style:f,className:g,prepend:x,center:y,fullscreen:b,portal:w,distanceFactor:M,sprite:P=!1,transform:j=!1,occlude:E,onOcclude:S,castShadow:W,receiveShadow:z,material:R,geometry:C,zIndexRange:A=[16777271,0],calculatePosition:F=d,as:T="div",wrapperClass:L,pointerEvents:k="auto",...D}=e;const{gl:O,camera:_,scene:I,size:V,raycaster:H,events:N,viewport:Z}=(0,i.A)(),[q]=o.useState((()=>document.createElement(T))),B=o.useRef(),G=o.useRef(null),K=o.useRef(0),Y=o.useRef([0,0]),X=o.useRef(null),J=o.useRef(null),Q=(null==w?void 0:w.current)||N.connected||O.domElement.parentNode,U=o.useRef(null),$=o.useRef(!1),ee=o.useMemo((()=>E&&"blending"!==E||Array.isArray(E)&&E.length&&function(e){return e&&"object"===typeof e&&"current"in e}(E[0])),[E]);o.useLayoutEffect((()=>{const e=O.domElement;E&&"blending"===E?(e.style.zIndex="".concat(Math.floor(A[0]/2)),e.style.position="absolute",e.style.pointerEvents="none"):(e.style.zIndex=null,e.style.position=null,e.style.pointerEvents=null)}),[E]),o.useLayoutEffect((()=>{if(G.current){const e=B.current=a.s(q);if(I.updateMatrixWorld(),j)q.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const e=F(G.current,_,V);q.style.cssText="position:absolute;top:0;left:0;transform:translate3d(".concat(e[0],"px,").concat(e[1],"px,0);transform-origin:0 0;")}return Q&&(x?Q.prepend(q):Q.appendChild(q)),()=>{Q&&Q.removeChild(q),e.unmount()}}}),[Q,j]),o.useLayoutEffect((()=>{L&&(q.className=L)}),[L]);const te=o.useMemo((()=>j?{position:"absolute",top:0,left:0,width:V.width,height:V.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:y?"translate3d(-50%,-50%,0)":"none",...b&&{top:-V.height/2,left:-V.width/2,width:V.width,height:V.height},...f}),[f,y,b,V,j]),ne=o.useMemo((()=>({position:"absolute",pointerEvents:k})),[k]);o.useLayoutEffect((()=>{var e,r;($.current=!1,j)?null==(e=B.current)||e.render(o.createElement("div",{ref:X,style:te},o.createElement("div",{ref:J,style:ne},o.createElement("div",{ref:t,className:g,style:f,children:n})))):null==(r=B.current)||r.render(o.createElement("div",{ref:t,style:te,className:g,children:n}))}));const re=o.useRef(!0);(0,i.C)((e=>{if(G.current){_.updateMatrixWorld(),G.current.updateWorldMatrix(!0,!1);const e=j?Y.current:F(G.current,_,V);if(j||Math.abs(K.current-_.zoom)>m||Math.abs(Y.current[0]-e[0])>m||Math.abs(Y.current[1]-e[1])>m){const t=function(e,t){const n=c.setFromMatrixPosition(e.matrixWorld),r=l.setFromMatrixPosition(t.matrixWorld),o=n.sub(r),a=t.getWorldDirection(u);return o.angleTo(a)>Math.PI/2}(G.current,_);let n=!1;ee&&(Array.isArray(E)?n=E.map((e=>e.current)):"blending"!==E&&(n=[I]));const r=re.current;if(n){const e=function(e,t,n,r){const o=c.setFromMatrixPosition(e.matrixWorld),a=o.clone();a.project(t),n.setFromCamera(a,t);const s=n.intersectObjects(r,!0);if(s.length){const e=s[0].distance;return o.distanceTo(n.ray.origin)<e}return!0}(G.current,_,H,n);re.current=e&&!t}else re.current=!t;r!==re.current&&(S?S(!re.current):q.style.display=re.current?"block":"none");const o=Math.floor(A[0]/2),a=E?ee?[A[0],o]:[o-1,0]:A;if(q.style.zIndex="".concat(function(e,t,n){if(t instanceof s.PerspectiveCamera||t instanceof s.OrthographicCamera){const r=c.setFromMatrixPosition(e.matrixWorld),o=l.setFromMatrixPosition(t.matrixWorld),a=r.distanceTo(o),s=(n[1]-n[0])/(t.far-t.near),i=n[1]-s*t.far;return Math.round(s*a+i)}}(G.current,_,a)),j){const[e,t]=[V.width/2,V.height/2],n=_.projectionMatrix.elements[5]*t,{isOrthographicCamera:r,top:o,left:a,bottom:s,right:i}=_,c=p(_.matrixWorldInverse),l=r?"scale(".concat(n,")translate(").concat(h(-(i+a)/2),"px,").concat(h((o+s)/2),"px)"):"translateZ(".concat(n,"px)");let u=G.current.matrixWorld;P&&(u=_.matrixWorldInverse.clone().transpose().copyPosition(u).scale(G.current.scale),u.elements[3]=u.elements[7]=u.elements[11]=0,u.elements[15]=1),q.style.width=V.width+"px",q.style.height=V.height+"px",q.style.perspective=r?"":"".concat(n,"px"),X.current&&J.current&&(X.current.style.transform="".concat(l).concat(c,"translate(").concat(e,"px,").concat(t,"px)"),J.current.style.transform=v(u,1/((M||10)/400)))}else{const t=void 0===M?1:function(e,t){if(t instanceof s.OrthographicCamera)return t.zoom;if(t instanceof s.PerspectiveCamera){const n=c.setFromMatrixPosition(e.matrixWorld),r=l.setFromMatrixPosition(t.matrixWorld),o=t.fov*Math.PI/180,a=n.distanceTo(r);return 1/(2*Math.tan(o/2)*a)}return 1}(G.current,_)*M;q.style.transform="translate3d(".concat(e[0],"px,").concat(e[1],"px,0) scale(").concat(t,")")}Y.current=e,K.current=_.zoom}}if(!ee&&U.current&&!$.current)if(j){if(X.current){const e=X.current.children[0];if(null!=e&&e.clientWidth&&null!=e&&e.clientHeight){const{isOrthographicCamera:t}=_;if(t||C)D.scale&&(Array.isArray(D.scale)?D.scale instanceof s.Vector3?U.current.scale.copy(D.scale.clone().divideScalar(1)):U.current.scale.set(1/D.scale[0],1/D.scale[1],1/D.scale[2]):U.current.scale.setScalar(1/D.scale));else{const t=(M||10)/400,n=e.clientWidth*t,r=e.clientHeight*t;U.current.scale.set(n,r,1)}$.current=!0}}}else{const t=q.children[0];if(null!=t&&t.clientWidth&&null!=t&&t.clientHeight){const e=1/Z.factor,n=t.clientWidth*e,r=t.clientHeight*e;U.current.scale.set(n,r,1),$.current=!0}U.current.lookAt(e.camera.position)}}));const oe=o.useMemo((()=>({vertexShader:j?void 0:'\n          /*\n            This shader is from the THREE\'s SpriteMaterial.\n            We need to turn the backing plane into a Sprite\n            (make it always face the camera) if "transfrom" \n            is false. \n          */\n          #include <common>\n\n          void main() {\n            vec2 center = vec2(0., 1.);\n            float rotation = 0.0;\n            \n            // This is somewhat arbitrary, but it seems to work well\n            // Need to figure out how to derive this dynamically if it even matters\n            float size = 0.03;\n\n            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n            vec2 scale;\n            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\n            bool isPerspective = isPerspectiveMatrix( projectionMatrix );\n            if ( isPerspective ) scale *= - mvPosition.z;\n\n            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;\n            vec2 rotatedPosition;\n            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n            mvPosition.xy += rotatedPosition;\n\n            gl_Position = projectionMatrix * mvPosition;\n          }\n      ',fragmentShader:"\n        void main() {\n          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);\n        }\n      "})),[j]);return o.createElement("group",(0,r.Z)({},D,{ref:G}),E&&!ee&&o.createElement("mesh",{castShadow:W,receiveShadow:z,ref:U},C||o.createElement("planeGeometry",null),R||o.createElement("shaderMaterial",{side:s.DoubleSide,vertexShader:oe.vertexShader,fragmentShader:oe.fragmentShader})))}))},5867:(e,t,n)=>{n.d(t,{Z:()=>r});const r={label:"labels_label__7DKCB"}},8358:(e,t,n)=>{e.exports=n.p+"static/media/suzanne_subdivision_smooth_shading_compressed.d13fc80263eda278d80e.glb"}}]);