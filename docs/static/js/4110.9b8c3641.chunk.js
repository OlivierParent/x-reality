"use strict";(self.webpackChunkx_reality=self.webpackChunkx_reality||[]).push([[4110],{4110:(n,e,t)=>{t.d(e,{z:()=>Dn});var o=t(3773),i=t(5284),l=t(3903),r=t(4704),s=t(5397),a=t(9817);let c;var u;let d;var f;(u=c||(c={})).blendFunction=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.YQ.SRC;return{label:"Blend Function",hint:"The blend function of this effect. Default = BlendFunction.SRC.",options:l.YQ,value:n}},u.intensity=function(){return{label:"Intensity",hint:"The intensity of the effect. Default = 1.",max:9,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},(f=d||(d={})).blendFunction=c.blendFunction,f.intensity=c.intensity,f.luminanceSmoothing=function(){return{label:"Luminance Smoothing",hint:"Controls the smoothness of the luminance threshold. Range is [0, 1]. Default = 0.025.",max:1,min:0,step:.005,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.025}},f.luminanceThreshold=function(){return{label:"Luminance Threshold",hint:"The luminance threshold. Raise this value to mask out darker elements in the scene. Range is [0, 1].",max:1,min:0,step:.05,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.9}};var E=t(6417);const h=()=>{const{blendFunction:n,intensity:e,luminanceSmoothing:t,luminanceThreshold:c}=function(){const{blendFunction:n,intensity:e,luminanceSmoothing:t,luminanceThreshold:o}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Bloom Effect":(0,r.so)({blendFunction:d.blendFunction(l.YQ.SCREEN),intensity:d.intensity(),luminanceSmoothing:d.luminanceSmoothing(),luminanceThreshold:d.luminanceThreshold()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,intensity:e,luminanceSmoothing:t,luminanceThreshold:o}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(i.d,{blendFunction:n,intensity:e,kernelSize:l.DD.LARGE,luminanceSmoothing:t,luminanceThreshold:c,resolutionX:l.GV.AUTO_SIZE,resolutionY:l.GV.AUTO_SIZE})})};var F=t(7173);let m;var b;(b=m||(m={})).blendFunction=c.blendFunction,b.brightness=function(){return{label:"Brightness",hint:"Scene brightness shift. Default = 0.",max:1,min:-1,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},b.contrast=function(){return{label:"Contrast",hint:"Scene contrast shift. Default = 0.",max:1,min:-1,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}};const O=()=>{const{blendFunction:n,brightness:e,contrast:t}=function(){const{blendFunction:n,brightness:e,contrast:t}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Brightness/Contrast Effect":(0,r.so)({blendFunction:m.blendFunction(),brightness:m.brightness(),contrast:m.contrast()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,brightness:e,contrast:t}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(F.F,{blendFunction:n,brightness:e,contrast:t})})};var R=t(8420),g=t(5825);let v;var S;(S=v||(v={})).blendFunction=c.blendFunction,S.offset=function(){return{hint:"The color offset. Default = [0, 0]",label:"Offset",max:.01,min:-.01,step:.001,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{x:0,y:0}}};const p=()=>{const{blendFunction:n,offset:e}=function(){const{blendFunction:n,offset:e}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Chromatic Aberration Effect":(0,r.so)({blendFunction:v.blendFunction(l.YQ.NORMAL),offset:v.offset()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,offset:e}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(R.V,{blendFunction:n,modulationOffset:0,offset:new g.Vector2(e.x,e.y),radialModulation:!0})})};var x=t(3133);let A;(A||(A={})).blendFunction=c.blendFunction;const C=()=>{const{blendFunction:n}=function(){const{blendFunction:n}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Color Average Effect":(0,r.so)({blendFunction:A.blendFunction(l.YQ.NORMAL)})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(x.s,{blendFunction:n})})};var D=t(7327);let M;var T;(T=M||(M={})).bits=function(){return{label:"Bits",hint:"The color bit depth. Default = 16.",max:24,min:0,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:16}},T.blendFunction=c.blendFunction;const L=()=>{const{bits:n,blendFunction:e}=function(){const{bits:n,blendFunction:e}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Color Depth Effect":(0,r.so)({bits:M.bits(),blendFunction:M.blendFunction()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{bits:n,blendFunction:e}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(D.Y,{bits:n,blendFunction:e})})};var N=t(8697);let y;var G;(G=y||(y={})).blendFunction=c.blendFunction,G.bokehScale=function(){return{label:"Bokeh Scale",hint:"The scale of the bokeh blur.",max:16,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},G.focalLength=function(){return{label:"Focal Length",hint:"The focal length. Range = [0.0, 1.0]",max:1,min:0,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.1}},G.focusDistance=function(){return{label:"Focus Distance",hint:"The normalized focus distance. Range = [0.0, 1.0].",max:1,min:0,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}};const j=()=>{const{blendFunction:n,bokehScale:e,focalLength:t,focusDistance:i}=function(){const{blendFunction:n,bokehScale:e,focalLength:t,focusDistance:o}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Bloom Effect":(0,r.so)({blendFunction:y.blendFunction(l.YQ.NORMAL),bokehScale:y.bokehScale(),focalLength:y.focalLength(),focusDistance:y.focusDistance()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,bokehScale:e,focalLength:t,focusDistance:o}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(N.y,{blendFunction:n,bokehScale:e,focalLength:t,focusDistance:i,height:l.GV.AUTO_SIZE,width:l.GV.AUTO_SIZE})})};var _=t(7347);let k;var H;(H=k||(k={})).angle=function(){return{label:"Angle (degrees)",hint:"The angle of the dot pattern in degrees converted to radians.",max:360,min:-360,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:180}},H.blendFunction=c.blendFunction,H.scale=function(){return{label:"Scale",hint:"The scale of the dot pattern.",max:3,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}};const I=()=>{const{angle:n,blendFunction:e,scale:t}=function(){const{angle:n,blendFunction:e,scale:t}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Dot Screen Effect":(0,r.so)({angle:k.angle(),blendFunction:k.blendFunction(l.YQ.NORMAL),scale:k.scale()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{angle:n,blendFunction:e,scale:t}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(_.m,{angle:g.MathUtils.degToRad(n),blendFunction:e,scale:t})})};var P=t(6829);let w;var B;(B=w||(w={})).active=function(){return{label:"Active",hint:"Indicates whether the glitch effect is currently active.",value:!(arguments.length>0&&void 0!==arguments[0])||arguments[0]}},B.blendFunction=c.blendFunction,B.columns=function(){return{label:"Columns",hint:"The scale of the blocky glitch columns.",max:5,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.05}},B.delay=function(){return{label:"Delay",hint:"The minimum and maximum delay between glitch activations in seconds.",max:5,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimum:1.5,maximum:3.5}}},B.dtSize=function(){return{label:"dt Size",hint:"The size of the generated noise map. Will be ignored if a perturbation map is provided.",max:256,min:0,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:64}},B.duration=function(){return{label:"Duration",hint:"The minimum and maximum duration of a glitch in seconds.",max:5,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{minimum:.6,maximum:1}}},B.mode=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.O7.SPORADIC;return{label:"Glitch Mode",options:l.O7,value:n}},B.perturbationMap=function(){return{label:"PerturbationMap",hint:"A perturbation map. If none is provided, a noise texture will be created.",value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:null}},B.ratio=function(){return{label:"Ratio",hint:"Threshold for strong glitches, 0 - no weak glitches, 1 - no strong glitches.",max:1,min:0,step:.05,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.85}},B.strength=function(){return{label:"Strength",hint:"The strength of weak and strong glitches.",max:5,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:{weak:.3,strong:1}}};const V=()=>{const{active:n,blendFunction:e,columns:t,delay:i,dtSize:c,duration:u,mode:d,ratio:f,strength:h}=function(){const{active:n,blendFunction:e,columns:t,delay:o,dtSize:i,duration:c,mode:u,ratio:d,strength:f}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Glitch Effect":(0,r.so)({active:w.active(),blendFunction:w.blendFunction(l.YQ.NORMAL),columns:w.columns(),delay:w.delay(),dtSize:w.dtSize(),duration:w.duration(),mode:w.mode(),ratio:w.ratio(),strength:w.strength()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{active:n,blendFunction:e,columns:t,delay:o,dtSize:i,duration:c,mode:u,ratio:d,strength:f}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(P.g,{active:n,blendFunction:e,columns:t,delay:new g.Vector2(i.minimum,i.maximum),dtSize:c,duration:new g.Vector2(u.minimum,u.maximum),mode:d,ratio:f,strength:new g.Vector2(h.weak,h.strong)})})};var Y=t(7879);let Q;var z;(z=Q||(Q={})).blendFunction=c.blendFunction,z.lineWidth=function(){return{label:"Line Width",hint:"The line width of the grid pattern.",max:5,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},z.scale=function(){return{label:"Scale",hint:"The scale of the grid pattern.",max:5,min:.5,step:.05,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}};const U=()=>{const{blendFunction:n,lineWidth:e,scale:t}=function(){const{blendFunction:n,lineWidth:e,scale:t}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Grid Effect":(0,r.so)({blendFunction:Q.blendFunction(l.YQ.NORMAL),lineWidth:Q.lineWidth(),scale:Q.scale()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,lineWidth:e,scale:t}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(Y.r,{blendFunction:n,lineWidth:e,scale:t})})};var W=t(2145);let Z;var X;(X=Z||(Z={})).blendFunction=c.blendFunction,X.hue=function(){return{label:"Hue (degrees)",hint:"The hue in radians converted to degrees.",max:180,min:-180,step:1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}},X.saturation=function(){return{label:"Saturation",hint:"The saturation factor, ranging from -1 to 1, where 0 means no change.",max:1,min:-1,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:0}};const q=()=>{const{blendFunction:n,hue:e,saturation:t}=function(){const{blendFunction:n,hue:e,saturation:t}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Hue/Saturation Effect":(0,r.so)({blendFunction:Z.blendFunction(),hue:Z.hue(),saturation:Z.saturation()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,hue:e,saturation:t}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(W.v,{blendFunction:n,hue:g.MathUtils.degToRad(e),saturation:t})})};var J=t(8354);let K;var $;($=K||(K={})).blendFunction=c.blendFunction,$.premultiply=function(){return{label:"Luminance Smoothing",hint:"Whether the noise should be multiplied with the input color.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}};const nn=()=>{const{blendFunction:n,premultiply:e}=function(){const{blendFunction:n,premultiply:e}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Noise Effect":(0,r.so)({blendFunction:K.blendFunction(l.YQ.SCREEN),premultiply:K.premultiply()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,premultiply:e}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(J.c,{blendFunction:n,premultiply:e})})};var en=t(6534);let tn;(tn||(tn={})).granularity=function(){return{label:"Granularity",hint:"The pixel granularity. Default = 30.0.",max:99.9,min:0,step:.5,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:30}};const on=()=>{const{granularity:n}=function(){const{granularity:n}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Pixelation Effect":(0,r.so)({granularity:tn.granularity()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{granularity:n}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(en.d,{granularity:n})})};var ln=t(7277);let rn;var sn;(sn=rn||(rn={})).edgeDetectionMode=function(){return arguments.length>0&&void 0!==arguments[0]||l.HN.COLOR,{label:"Edge Detection Mode",hint:"The edge detection mode. Default = EdgeDetectionMode.COLOR.",options:l.HN,value:l.HN.COLOR}},sn.preset=function(){let n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.F9.HIGH;return{label:"Preset",hint:"An SMAA quality preset. Default = SMAAPreset.HIGH.",options:l.F9,value:n}};const an=()=>{const{edgeDetectionMode:n,preset:e}=function(){const{edgeDetectionMode:n,preset:e}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"SMAA Effect":(0,r.so)({edgeDetectionMode:rn.edgeDetectionMode(),preset:rn.preset()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{edgeDetectionMode:n,preset:e}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(ln.k,{edgeDetectionMode:n,preset:e})})};var cn=t(5029);let un;var dn;(dn=un||(un={})).blendFunction=c.blendFunction,dn.density=function(){return{label:"Density",hint:"The scanline density. Default = 1.25.",max:9,min:0,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1.25}};const fn=()=>{const{density:n,blendFunction:e}=function(){const{blendFunction:n,density:e}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Scanline Effect":(0,r.so)({blendFunction:un.blendFunction(l.YQ.OVERLAY),density:un.density()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,density:e}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(cn.v,{blendFunction:e,density:n})})};var En=t(2038);let hn;var Fn;(Fn=hn||(hn={})).blendFunction=c.blendFunction,Fn.intensity=c.intensity;const mn=()=>{const{blendFunction:n,intensity:e}=function(){const{blendFunction:n,intensity:e}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Sepia Effect":(0,r.so)({blendFunction:hn.blendFunction(l.YQ.NORMAL),intensity:hn.intensity()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,intensity:e}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(En.G,{blendFunction:n,intensity:e})})};var bn=t(8471);let On;var Rn;(Rn=On||(On={})).adaptationRate=function(){return{label:"Adaption Rate",hint:"The luminance adaptation rate. Default = 1.0.",max:9.9,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},Rn.averageLuminance=function(){return{label:"Average Luminance",hint:"The average luminance. Used for the non-adaptive Reinhard operator. Default = 1.0.",max:9.9,min:0,step:.1,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:1}},Rn.blendFunction=c.blendFunction,Rn.middleGrey=function(){return{label:"Middle Grey",hint:"The middle grey factor. Default = 0.6.",max:2,min:0,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.6}},Rn.resolution=function(){return{label:"Resolution",hint:"The resolution of the luminance texture. Must be a power of two. Default = 256.",options:[2,4,8,16,32,64,128,256,512,1024,2048],value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:256}};const gn=()=>{const{adaptationRate:n,averageLuminance:e,blendFunction:t,middleGrey:i,resolution:l}=function(){const{adaptationRate:n,averageLuminance:e,blendFunction:t,middleGrey:o,resolution:i}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"ToneMapping Effect":(0,r.so)({adaptationRate:On.adaptationRate(),averageLuminance:On.averageLuminance(),blendFunction:On.blendFunction(),middleGrey:On.middleGrey(),resolution:On.resolution()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{adaptationRate:n,averageLuminance:e,blendFunction:t,middleGrey:o,resolution:i}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(bn.l,{adaptationRate:n,averageLuminance:e,blendFunction:t,middleGrey:i,resolution:l})})};var vn=t(6447);let Sn;var pn;(pn=Sn||(Sn={})).blendFunction=c.blendFunction,pn.darkness=function(){return{label:"Darkness",hint:"The vignette darkness. Default = 0.5.",max:1,min:0,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5}},pn.eskil=function(){return{label:"Eskil",hint:"Enables Eskil's vignette technique. Default = false.",value:arguments.length>0&&void 0!==arguments[0]&&arguments[0]}},pn.offset=function(){return{label:"Offset",hint:"The vignette offset. Default = 0.5.",max:1,min:0,step:.01,value:arguments.length>0&&void 0!==arguments[0]?arguments[0]:.5}};const xn=()=>{const{blendFunction:n,darkness:e,eskil:t,offset:i}=function(){const{blendFunction:n,darkness:e,eskil:t,offset:o}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({"Vignette Effect":(0,r.so)({blendFunction:Sn.blendFunction(l.YQ.NORMAL),darkness:Sn.darkness(),eskil:Sn.eskil(),offset:Sn.offset()})},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{blendFunction:n,darkness:e,eskil:t,offset:o}}();return(0,E.jsx)(o.x,{children:(0,E.jsx)(vn.s,{blendFunction:n,darkness:e,eskil:t,offset:i})})};var An=function(n){return n.BLOOM="Bloom",n.BRIGHTNESS_CONTRAST="BrightnessContrast",n.CHROMATIC_ABERRATION="ChromaticAberration",n.COLOR_AVERAGE="ColorAverage",n.COLOR_DEPTH="ColorDepth",n.DEPTH_OF_FIELD="DepthOfField",n.DOT_SCREEN="DotScreen",n.GLITCH="Glitch",n.GRID="Grid",n.HUE_SATURATION="HueSaturation",n.NOISE="Noise",n.NONE="\u2014None\u2014",n.PIXELATION="Pixelation",n.SCANLINE="Scanline",n.SEPIA="Sepia",n.SMAA="SMAA",n.TONE_MAPPING="ToneMapping",n.VIGNETTE="Vignette",n}(An||{});const Cn={[An.NONE]:(0,E.jsx)(E.Fragment,{}),[An.BLOOM]:(0,E.jsx)(h,{}),[An.BRIGHTNESS_CONTRAST]:(0,E.jsx)(O,{}),[An.CHROMATIC_ABERRATION]:(0,E.jsx)(p,{}),[An.COLOR_AVERAGE]:(0,E.jsx)(C,{}),[An.COLOR_DEPTH]:(0,E.jsx)(L,{}),[An.DEPTH_OF_FIELD]:(0,E.jsx)(j,{}),[An.DOT_SCREEN]:(0,E.jsx)(I,{}),[An.GLITCH]:(0,E.jsx)(V,{}),[An.GRID]:(0,E.jsx)(U,{}),[An.HUE_SATURATION]:(0,E.jsx)(q,{}),[An.NOISE]:(0,E.jsx)(nn,{}),[An.PIXELATION]:(0,E.jsx)(on,{}),[An.SMAA]:(0,E.jsx)(an,{}),[An.SCANLINE]:(0,E.jsx)(fn,{}),[An.SEPIA]:(0,E.jsx)(mn,{}),[An.TONE_MAPPING]:(0,E.jsx)(gn,{}),[An.VIGNETTE]:(0,E.jsx)(xn,{})},Dn=()=>{const{effect:n}=function(n,e){const{effect:t}=(0,r.M4)(s.O.SCHEMA.GENERAL,{"Effects Composer":(0,r.so)({effect:{label:"Effect",options:n,value:e}},a.F.folder(s.O.ORDER.EFFECTS_COMPOSER))},a.F.folder(s.O.ORDER.GENERAL));return{effect:t}}(Cn,Cn[An.NONE]);return(0,E.jsx)("group",{name:"Effects",children:(0,E.jsx)(E.Fragment,{children:n})})}}}]);