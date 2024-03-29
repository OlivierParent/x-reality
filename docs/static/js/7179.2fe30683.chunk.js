"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[7179],{7179:(e,t,n)=>{n.d(t,{z:()=>d});var o=n(7462),a=n(9080),i=n(7313),r=n(5825),s=Object.defineProperty,c=(e,t,n)=>(((e,t,n)=>{t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n);const l=new r.Ray,m=new r.Plane,p=Math.cos(Math.PI/180*70),h=(e,t)=>(e%t+t)%t;class u extends r.EventDispatcher{constructor(e,t){super(),c(this,"object"),c(this,"domElement"),c(this,"enabled",!0),c(this,"target",new r.Vector3),c(this,"minDistance",0),c(this,"maxDistance",1/0),c(this,"minZoom",0),c(this,"maxZoom",1/0),c(this,"minPolarAngle",0),c(this,"maxPolarAngle",Math.PI),c(this,"minAzimuthAngle",-1/0),c(this,"maxAzimuthAngle",1/0),c(this,"enableDamping",!1),c(this,"dampingFactor",.05),c(this,"enableZoom",!0),c(this,"zoomSpeed",1),c(this,"enableRotate",!0),c(this,"rotateSpeed",1),c(this,"enablePan",!0),c(this,"panSpeed",1),c(this,"screenSpacePanning",!0),c(this,"keyPanSpeed",7),c(this,"zoomToCursor",!1),c(this,"autoRotate",!1),c(this,"autoRotateSpeed",2),c(this,"reverseOrbit",!1),c(this,"reverseHorizontalOrbit",!1),c(this,"reverseVerticalOrbit",!1),c(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),c(this,"mouseButtons",{LEFT:r.MOUSE.ROTATE,MIDDLE:r.MOUSE.DOLLY,RIGHT:r.MOUSE.PAN}),c(this,"touches",{ONE:r.TOUCH.ROTATE,TWO:r.TOUCH.DOLLY_PAN}),c(this,"target0"),c(this,"position0"),c(this,"zoom0"),c(this,"_domElementKeyEvents",null),c(this,"getPolarAngle"),c(this,"getAzimuthalAngle"),c(this,"setPolarAngle"),c(this,"setAzimuthalAngle"),c(this,"getDistance"),c(this,"listenToKeyEvents"),c(this,"stopListenToKeyEvents"),c(this,"saveState"),c(this,"reset"),c(this,"update"),c(this,"connect"),c(this,"dispose"),this.object=e,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>b.phi,this.getAzimuthalAngle=()=>b.theta,this.setPolarAngle=e=>{let t=h(e,2*Math.PI),o=b.phi;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),g.phi=t-o,n.update()},this.setAzimuthalAngle=e=>{let t=h(e,2*Math.PI),o=b.theta;o<0&&(o+=2*Math.PI),t<0&&(t+=2*Math.PI);let a=Math.abs(t-o);2*Math.PI-a<a&&(t<o?t+=2*Math.PI:o+=2*Math.PI),g.theta=t-o,n.update()},this.getDistance=()=>n.object.position.distanceTo(n.target),this.listenToKeyEvents=e=>{e.addEventListener("keydown",ne),this._domElementKeyEvents=e},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",ne),this._domElementKeyEvents=null},this.saveState=()=>{n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=()=>{n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),u=s.NONE},this.update=(()=>{const t=new r.Vector3,a=new r.Vector3(0,1,0),i=(new r.Quaternion).setFromUnitVectors(e.up,a),c=i.clone().invert(),h=new r.Vector3,O=new r.Quaternion,v=2*Math.PI;return function(){const y=n.object.position;i.setFromUnitVectors(e.up,a),c.copy(i).invert(),t.copy(y).sub(n.target),t.applyQuaternion(i),b.setFromVector3(t),n.autoRotate&&u===s.NONE&&I(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(b.theta+=g.theta*n.dampingFactor,b.phi+=g.phi*n.dampingFactor):(b.theta+=g.theta,b.phi+=g.phi);let P=n.minAzimuthAngle,j=n.maxAzimuthAngle;isFinite(P)&&isFinite(j)&&(P<-Math.PI?P+=v:P>Math.PI&&(P-=v),j<-Math.PI?j+=v:j>Math.PI&&(j-=v),b.theta=P<=j?Math.max(P,Math.min(j,b.theta)):b.theta>(P+j)/2?Math.max(P,b.theta):Math.min(j,b.theta)),b.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,b.phi)),b.makeSafe(),!0===n.enableDamping?n.target.addScaledVector(f,n.dampingFactor):n.target.add(f),n.zoomToCursor&&N||n.object.isOrthographicCamera?b.radius=_(b.radius):b.radius=_(b.radius*E),t.setFromSpherical(b),t.applyQuaternion(c),y.copy(n.target).add(t),n.object.matrixAutoUpdate||n.object.updateMatrix(),n.object.lookAt(n.target),!0===n.enableDamping?(g.theta*=1-n.dampingFactor,g.phi*=1-n.dampingFactor,f.multiplyScalar(1-n.dampingFactor)):(g.set(0,0,0),f.set(0,0,0));let T=!1;if(n.zoomToCursor&&N){let o=null;if(n.object instanceof r.PerspectiveCamera&&n.object.isPerspectiveCamera){const e=t.length();o=_(e*E);const a=e-o;n.object.position.addScaledVector(L,a),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const e=new r.Vector3(C.x,C.y,0);e.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix(),T=!0;const a=new r.Vector3(C.x,C.y,0);a.unproject(n.object),n.object.position.sub(a).add(e),n.object.updateMatrixWorld(),o=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;null!==o&&(n.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(o).add(n.object.position):(l.origin.copy(n.object.position),l.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(l.direction))<p?e.lookAt(n.target):(m.setFromNormalAndCoplanarPoint(n.object.up,n.target),l.intersectPlane(m,n.target))))}else n.object instanceof r.OrthographicCamera&&n.object.isOrthographicCamera&&(T=1!==E,T&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/E)),n.object.updateProjectionMatrix()));return E=1,N=!1,!!(T||h.distanceToSquared(n.object.position)>d||8*(1-O.dot(n.object.quaternion))>d)&&(n.dispatchEvent(o),h.copy(n.object.position),O.copy(n.object.quaternion),T=!1,!0)}})(),this.connect=e=>{e===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),n.domElement=e,n.domElement.style.touchAction="none",n.domElement.addEventListener("contextmenu",oe),n.domElement.addEventListener("pointerdown",Q),n.domElement.addEventListener("pointercancel",ee),n.domElement.addEventListener("wheel",te)},this.dispose=()=>{var e,t,o,a,i,r;null==(e=n.domElement)||e.removeEventListener("contextmenu",oe),null==(t=n.domElement)||t.removeEventListener("pointerdown",Q),null==(o=n.domElement)||o.removeEventListener("pointercancel",ee),null==(a=n.domElement)||a.removeEventListener("wheel",te),null==(i=n.domElement)||i.ownerDocument.removeEventListener("pointermove",J),null==(r=n.domElement)||r.ownerDocument.removeEventListener("pointerup",$),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ne)};const n=this,o={type:"change"},a={type:"start"},i={type:"end"},s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let u=s.NONE;const d=1e-6,b=new r.Spherical,g=new r.Spherical;let E=1;const f=new r.Vector3,O=new r.Vector2,v=new r.Vector2,y=new r.Vector2,P=new r.Vector2,j=new r.Vector2,T=new r.Vector2,A=new r.Vector2,w=new r.Vector2,M=new r.Vector2,L=new r.Vector3,C=new r.Vector2;let N=!1;const k=[],x={};function D(){return Math.pow(.95,n.zoomSpeed)}function I(e){n.reverseOrbit||n.reverseHorizontalOrbit?g.theta+=e:g.theta-=e}function R(e){n.reverseOrbit||n.reverseVerticalOrbit?g.phi+=e:g.phi-=e}const S=(()=>{const e=new r.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),f.add(e)}})(),Y=(()=>{const e=new r.Vector3;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),f.add(e)}})(),z=(()=>{const e=new r.Vector3;return function(t,o){const a=n.domElement;if(a&&n.object instanceof r.PerspectiveCamera&&n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let r=e.length();r*=Math.tan(n.object.fov/2*Math.PI/180),S(2*t*r/a.clientHeight,n.object.matrix),Y(2*o*r/a.clientHeight,n.object.matrix)}else a&&n.object instanceof r.OrthographicCamera&&n.object.isOrthographicCamera?(S(t*(n.object.right-n.object.left)/n.object.zoom/a.clientWidth,n.object.matrix),Y(o*(n.object.top-n.object.bottom)/n.object.zoom/a.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}})();function V(e){n.object instanceof r.PerspectiveCamera&&n.object.isPerspectiveCamera||n.object instanceof r.OrthographicCamera&&n.object.isOrthographicCamera?E/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function H(e){n.object instanceof r.PerspectiveCamera&&n.object.isPerspectiveCamera||n.object instanceof r.OrthographicCamera&&n.object.isOrthographicCamera?E*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function U(e){if(!n.zoomToCursor||!n.domElement)return;N=!0;const t=n.domElement.getBoundingClientRect(),o=e.clientX-t.left,a=e.clientY-t.top,i=t.width,r=t.height;C.x=o/i*2-1,C.y=-a/r*2+1,L.set(C.x,C.y,1).unproject(n.object).sub(n.object.position).normalize()}function _(e){return Math.max(n.minDistance,Math.min(n.maxDistance,e))}function F(e){O.set(e.clientX,e.clientY)}function X(e){P.set(e.clientX,e.clientY)}function Z(){if(1==k.length)O.set(k[0].pageX,k[0].pageY);else{const e=.5*(k[0].pageX+k[1].pageX),t=.5*(k[0].pageY+k[1].pageY);O.set(e,t)}}function K(){if(1==k.length)P.set(k[0].pageX,k[0].pageY);else{const e=.5*(k[0].pageX+k[1].pageX),t=.5*(k[0].pageY+k[1].pageY);P.set(e,t)}}function W(){const e=k[0].pageX-k[1].pageX,t=k[0].pageY-k[1].pageY,n=Math.sqrt(e*e+t*t);A.set(0,n)}function G(e){if(1==k.length)v.set(e.pageX,e.pageY);else{const t=re(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);v.set(n,o)}y.subVectors(v,O).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(I(2*Math.PI*y.x/t.clientHeight),R(2*Math.PI*y.y/t.clientHeight)),O.copy(v)}function B(e){if(1==k.length)j.set(e.pageX,e.pageY);else{const t=re(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);j.set(n,o)}T.subVectors(j,P).multiplyScalar(n.panSpeed),z(T.x,T.y),P.copy(j)}function q(e){const t=re(e),o=e.pageX-t.x,a=e.pageY-t.y,i=Math.sqrt(o*o+a*a);w.set(0,i),M.set(0,Math.pow(w.y/A.y,n.zoomSpeed)),V(M.y),A.copy(w)}function Q(e){var t,o;!1!==n.enabled&&(0===k.length&&(null==(t=n.domElement)||t.ownerDocument.addEventListener("pointermove",J),null==(o=n.domElement)||o.ownerDocument.addEventListener("pointerup",$)),function(e){k.push(e)}(e),"touch"===e.pointerType?function(e){switch(ie(e),k.length){case 1:switch(n.touches.ONE){case r.TOUCH.ROTATE:if(!1===n.enableRotate)return;Z(),u=s.TOUCH_ROTATE;break;case r.TOUCH.PAN:if(!1===n.enablePan)return;K(),u=s.TOUCH_PAN;break;default:u=s.NONE}break;case 2:switch(n.touches.TWO){case r.TOUCH.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;n.enableZoom&&W(),n.enablePan&&K(),u=s.TOUCH_DOLLY_PAN;break;case r.TOUCH.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;n.enableZoom&&W(),n.enableRotate&&Z(),u=s.TOUCH_DOLLY_ROTATE;break;default:u=s.NONE}break;default:u=s.NONE}u!==s.NONE&&n.dispatchEvent(a)}(e):function(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case r.MOUSE.DOLLY:if(!1===n.enableZoom)return;!function(e){U(e),A.set(e.clientX,e.clientY)}(e),u=s.DOLLY;break;case r.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;X(e),u=s.PAN}else{if(!1===n.enableRotate)return;F(e),u=s.ROTATE}break;case r.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;F(e),u=s.ROTATE}else{if(!1===n.enablePan)return;X(e),u=s.PAN}break;default:u=s.NONE}u!==s.NONE&&n.dispatchEvent(a)}(e))}function J(e){!1!==n.enabled&&("touch"===e.pointerType?function(e){switch(ie(e),u){case s.TOUCH_ROTATE:if(!1===n.enableRotate)return;G(e),n.update();break;case s.TOUCH_PAN:if(!1===n.enablePan)return;B(e),n.update();break;case s.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&q(e),n.enablePan&&B(e)}(e),n.update();break;case s.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&q(e),n.enableRotate&&G(e)}(e),n.update();break;default:u=s.NONE}}(e):function(e){if(!1===n.enabled)return;switch(u){case s.ROTATE:if(!1===n.enableRotate)return;!function(e){v.set(e.clientX,e.clientY),y.subVectors(v,O).multiplyScalar(n.rotateSpeed);const t=n.domElement;t&&(I(2*Math.PI*y.x/t.clientHeight),R(2*Math.PI*y.y/t.clientHeight)),O.copy(v),n.update()}(e);break;case s.DOLLY:if(!1===n.enableZoom)return;!function(e){w.set(e.clientX,e.clientY),M.subVectors(w,A),M.y>0?V(D()):M.y<0&&H(D()),A.copy(w),n.update()}(e);break;case s.PAN:if(!1===n.enablePan)return;!function(e){j.set(e.clientX,e.clientY),T.subVectors(j,P).multiplyScalar(n.panSpeed),z(T.x,T.y),P.copy(j),n.update()}(e)}}(e))}function $(e){var t,o,a;ae(e),0===k.length&&(null==(t=n.domElement)||t.releasePointerCapture(e.pointerId),null==(o=n.domElement)||o.ownerDocument.removeEventListener("pointermove",J),null==(a=n.domElement)||a.ownerDocument.removeEventListener("pointerup",$)),n.dispatchEvent(i),u=s.NONE}function ee(e){ae(e)}function te(e){!1===n.enabled||!1===n.enableZoom||u!==s.NONE&&u!==s.ROTATE||(e.preventDefault(),n.dispatchEvent(a),function(e){U(e),e.deltaY<0?H(D()):e.deltaY>0&&V(D()),n.update()}(e),n.dispatchEvent(i))}function ne(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){let t=!1;switch(e.code){case n.keys.UP:z(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:z(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:z(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:z(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function oe(e){!1!==n.enabled&&e.preventDefault()}function ae(e){delete x[e.pointerId];for(let t=0;t<k.length;t++)if(k[t].pointerId==e.pointerId)return void k.splice(t,1)}function ie(e){let t=x[e.pointerId];void 0===t&&(t=new r.Vector2,x[e.pointerId]=t),t.set(e.pageX,e.pageY)}function re(e){const t=e.pointerId===k[0].pointerId?k[1]:k[0];return x[t.pointerId]}void 0!==t&&this.connect(t),this.update()}}const d=i.forwardRef(((e,t)=>{let{makeDefault:n,camera:r,regress:s,domElement:c,enableDamping:l=!0,keyEvents:m=!1,onChange:p,onStart:h,onEnd:d,...b}=e;const g=(0,a.A)((e=>e.invalidate)),E=(0,a.A)((e=>e.camera)),f=(0,a.A)((e=>e.gl)),O=(0,a.A)((e=>e.events)),v=(0,a.A)((e=>e.setEvents)),y=(0,a.A)((e=>e.set)),P=(0,a.A)((e=>e.get)),j=(0,a.A)((e=>e.performance)),T=r||E,A=c||O.connected||f.domElement,w=i.useMemo((()=>new u(T)),[T]);return(0,a.C)((()=>{w.enabled&&w.update()}),-1),i.useEffect((()=>(m&&w.connect(!0===m?A:m),w.connect(A),()=>{w.dispose()})),[m,A,s,w,g]),i.useEffect((()=>{const e=e=>{g(),s&&j.regress(),p&&p(e)},t=e=>{h&&h(e)},n=e=>{d&&d(e)};return w.addEventListener("change",e),w.addEventListener("start",t),w.addEventListener("end",n),()=>{w.removeEventListener("start",t),w.removeEventListener("end",n),w.removeEventListener("change",e)}}),[p,h,d,w,g,v]),i.useEffect((()=>{if(n){const e=P().controls;return y({controls:w}),()=>y({controls:e})}}),[n,w]),i.createElement("primitive",(0,o.Z)({ref:t,object:w,enableDamping:l},b))}))}}]);