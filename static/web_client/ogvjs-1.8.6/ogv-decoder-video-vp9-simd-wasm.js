
var OGVDecoderVideoVP9SIMDW = (() => {
  var _scriptDir = typeof document !== 'undefined' && document.currentScript ? document.currentScript.src : undefined;
  if (typeof __filename !== 'undefined') _scriptDir = _scriptDir || __filename;
  return (
function(OGVDecoderVideoVP9SIMDW) {
  OGVDecoderVideoVP9SIMDW = OGVDecoderVideoVP9SIMDW || {};


var a;a||(a=typeof OGVDecoderVideoVP9SIMDW !== 'undefined' ? OGVDecoderVideoVP9SIMDW : {});var aa=Object.assign,ba,n;a.ready=new Promise(function(b,c){ba=b;n=c});var ca=a,ha=aa({},a),ia="object"===typeof window,p="function"===typeof importScripts,r="",v,w,x,fs,z,D;
if("object"===typeof process&&"object"===typeof process.versions&&"string"===typeof process.versions.node)r=p?require("path").dirname(r)+"/":__dirname+"/",D=function(){z||(fs=require("fs"),z=require("path"))},v=function(b,c){D();b=z.normalize(b);return fs.readFileSync(b,c?null:"utf8")},x=function(b){b=v(b,!0);b.buffer||(b=new Uint8Array(b));return b},w=function(b,c,e){D();b=z.normalize(b);fs.readFile(b,function(d,f){d?e(d):c(f.buffer)})},1<process.argv.length&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2),
process.on("unhandledRejection",function(b){throw b;}),a.inspect=function(){return"[Emscripten Module object]"};else if(ia||p)p?r=self.location.href:"undefined"!==typeof document&&document.currentScript&&(r=document.currentScript.src),_scriptDir&&(r=_scriptDir),0!==r.indexOf("blob:")?r=r.substr(0,r.replace(/[?#].*/,"").lastIndexOf("/")+1):r="",v=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);c.send(null);return c.responseText},p&&(x=function(b){var c=new XMLHttpRequest;c.open("GET",b,!1);
c.responseType="arraybuffer";c.send(null);return new Uint8Array(c.response)}),w=function(b,c,e){var d=new XMLHttpRequest;d.open("GET",b,!0);d.responseType="arraybuffer";d.onload=function(){200==d.status||0==d.status&&d.response?c(d.response):e()};d.onerror=e;d.send(null)};a.print||console.log.bind(console);var F=a.printErr||console.warn.bind(console);aa(a,ha);ha=null;var ja=0,G;a.wasmBinary&&(G=a.wasmBinary);var noExitRuntime=a.noExitRuntime||!0;"object"!==typeof WebAssembly&&H("no native wasm support detected");
var I,ka=!1,la,ma;function na(){var b=I.buffer;la=b;a.HEAP8=new Int8Array(b);a.HEAP16=new Int16Array(b);a.HEAP32=new Int32Array(b);a.HEAPU8=ma=new Uint8Array(b);a.HEAPU16=new Uint16Array(b);a.HEAPU32=new Uint32Array(b);a.HEAPF32=new Float32Array(b);a.HEAPF64=new Float64Array(b)}var oa,pa=[],qa=[],ra=[];function sa(){var b=a.preRun.shift();pa.unshift(b)}var L=0,ta=null,M=null;a.preloadedImages={};a.preloadedAudios={};
function H(b){if(a.onAbort)a.onAbort(b);b="Aborted("+b+")";F(b);ka=!0;b=new WebAssembly.RuntimeError(b+". Build with -s ASSERTIONS=1 for more info.");n(b);throw b;}function ua(){return N.startsWith("data:application/octet-stream;base64,")}var N;N="ogv-decoder-video-vp9-simd-wasm.wasm";if(!ua()){var va=N;N=a.locateFile?a.locateFile(va,r):r+va}function wa(){var b=N;try{if(b==N&&G)return new Uint8Array(G);if(x)return x(b);throw"both async and sync fetching of the wasm failed";}catch(c){H(c)}}
function xa(){if(!G&&(ia||p)){if("function"===typeof fetch&&!N.startsWith("file://"))return fetch(N,{credentials:"same-origin"}).then(function(b){if(!b.ok)throw"failed to load wasm binary file at '"+N+"'";return b.arrayBuffer()}).catch(function(){return wa()});if(w)return new Promise(function(b,c){w(N,function(e){b(new Uint8Array(e))},c)})}return Promise.resolve().then(function(){return wa()})}
function ya(b){for(;0<b.length;){var c=b.shift();if("function"==typeof c)c(a);else{var e=c.D;"number"===typeof e?void 0===c.B?O(e)():O(e)(c.B):e(void 0===c.B?null:c.B)}}}var P=[];function O(b){var c=P[b];c||(b>=P.length&&(P.length=b+1),P[b]=c=oa.get(b));return c}
var Sa={m:function(){throw"longjmp";},k:function(b,c,e){ma.copyWithin(b,c,c+e)},l:function(b){var c=ma.length;b>>>=0;if(2147483648<b)return!1;for(var e=1;4>=e;e*=2){var d=c*(1+.2/e);d=Math.min(d,b+100663296);d=Math.max(b,d);0<d%65536&&(d+=65536-d%65536);a:{try{I.grow(Math.min(2147483648,d)-la.byteLength+65535>>>16);na();var f=1;break a}catch(g){}f=void 0}if(f)return!0}return!1},a:function(){return ja},d:Ka,f:La,i:Ma,g:Na,e:Oa,c:Pa,j:Qa,h:Ra,n:function(b,c,e,d,f,g,h,k,q,t,u,J,Q,R,da,ea){function fa(E,
l,A,za,Aa,Ba,Ua,Va,S){E.set(new Uint8Array(Wa,l,A*za));var B,y;for(B=y=0;B<Ba;B++,y+=A)for(l=0;l<A;l++)E[y+l]=S;for(;B<Ba+Va;B++,y+=A){for(l=0;l<Aa;l++)E[y+l]=S;for(l=Aa+Ua;l<A;l++)E[y+l]=S}for(;B<za;B++,y+=A)for(l=0;l<A;l++)E[y+l]=S;return E}var Wa=I.buffer,m=a.videoFormat,Ca=(Q&-2)*q/h,Da=(R&-2)*t/k,Ea=u*q/h,Fa=J*t/k;u===m.cropWidth&&J===m.cropHeight&&(da=m.displayWidth,ea=m.displayHeight);for(var Ga=a.recycledFrames,C,Ha=k*c,Ia=t*d,Ja=t*g;0<Ga.length;){var K=Ga.shift();m=K.format;if(m.width===
h&&m.height===k&&m.chromaWidth===q&&m.chromaHeight===t&&m.cropLeft===Q&&m.cropTop===R&&m.cropWidth===u&&m.cropHeight===J&&m.displayWidth===da&&m.displayHeight===ea&&K.y.bytes.length===Ha&&K.u.bytes.length===Ia&&K.v.bytes.length===Ja){C=K;break}}C||(C={format:{width:h,height:k,chromaWidth:q,chromaHeight:t,cropLeft:Q,cropTop:R,cropWidth:u,cropHeight:J,displayWidth:da,displayHeight:ea},y:{bytes:new Uint8Array(Ha),stride:c},u:{bytes:new Uint8Array(Ia),stride:d},v:{bytes:new Uint8Array(Ja),stride:g}});
fa(C.y.bytes,b,c,k,Q,R,u,J,0);fa(C.u.bytes,e,d,t,Ca,Da,Ea,Fa,128);fa(C.v.bytes,f,g,t,Ca,Da,Ea,Fa,128);a.frameBuffer=C},b:function(b){ja=b}};
(function(){function b(f){a.asm=f.exports;I=a.asm.o;na();oa=a.asm.v;qa.unshift(a.asm.p);L--;a.monitorRunDependencies&&a.monitorRunDependencies(L);0==L&&(null!==ta&&(clearInterval(ta),ta=null),M&&(f=M,M=null,f()))}function c(f){b(f.instance)}function e(f){return xa().then(function(g){return WebAssembly.instantiate(g,d)}).then(function(g){return g}).then(f,function(g){F("failed to asynchronously prepare wasm: "+g);H(g)})}var d={a:Sa};L++;a.monitorRunDependencies&&a.monitorRunDependencies(L);if(a.instantiateWasm)try{return a.instantiateWasm(d,
b)}catch(f){return F("Module.instantiateWasm callback failed with error: "+f),!1}(function(){return G||"function"!==typeof WebAssembly.instantiateStreaming||ua()||N.startsWith("file://")||"function"!==typeof fetch?e(c):fetch(N,{credentials:"same-origin"}).then(function(f){return WebAssembly.instantiateStreaming(f,d).then(c,function(g){F("wasm streaming compile failed: "+g);F("falling back to ArrayBuffer instantiation");return e(c)})})})().catch(n);return{}})();
a.___wasm_call_ctors=function(){return(a.___wasm_call_ctors=a.asm.p).apply(null,arguments)};a._ogv_video_decoder_init=function(){return(a._ogv_video_decoder_init=a.asm.q).apply(null,arguments)};a._ogv_video_decoder_async=function(){return(a._ogv_video_decoder_async=a.asm.r).apply(null,arguments)};a._ogv_video_decoder_destroy=function(){return(a._ogv_video_decoder_destroy=a.asm.s).apply(null,arguments)};
a._ogv_video_decoder_process_header=function(){return(a._ogv_video_decoder_process_header=a.asm.t).apply(null,arguments)};a._ogv_video_decoder_process_frame=function(){return(a._ogv_video_decoder_process_frame=a.asm.u).apply(null,arguments)};a._malloc=function(){return(a._malloc=a.asm.w).apply(null,arguments)};a._free=function(){return(a._free=a.asm.x).apply(null,arguments)};
var T=a._setThrew=function(){return(T=a._setThrew=a.asm.y).apply(null,arguments)},U=a.stackSave=function(){return(U=a.stackSave=a.asm.z).apply(null,arguments)},V=a.stackRestore=function(){return(V=a.stackRestore=a.asm.A).apply(null,arguments)};function Ma(b,c,e,d,f){var g=U();try{return O(b)(c,e,d,f)}catch(h){V(g);if(h!==h+0&&"longjmp"!==h)throw h;T(1,0)}}function Pa(b,c,e,d,f){var g=U();try{O(b)(c,e,d,f)}catch(h){V(g);if(h!==h+0&&"longjmp"!==h)throw h;T(1,0)}}
function Ra(b,c,e,d,f,g,h,k,q){var t=U();try{O(b)(c,e,d,f,g,h,k,q)}catch(u){V(t);if(u!==u+0&&"longjmp"!==u)throw u;T(1,0)}}function Na(b,c,e,d,f,g){var h=U();try{return O(b)(c,e,d,f,g)}catch(k){V(h);if(k!==k+0&&"longjmp"!==k)throw k;T(1,0)}}function La(b,c,e,d){var f=U();try{return O(b)(c,e,d)}catch(g){V(f);if(g!==g+0&&"longjmp"!==g)throw g;T(1,0)}}function Qa(b,c,e,d,f,g,h){var k=U();try{O(b)(c,e,d,f,g,h)}catch(q){V(k);if(q!==q+0&&"longjmp"!==q)throw q;T(1,0)}}
function Ka(b,c,e){var d=U();try{return O(b)(c,e)}catch(f){V(d);if(f!==f+0&&"longjmp"!==f)throw f;T(1,0)}}function Oa(b,c){var e=U();try{O(b)(c)}catch(d){V(e);if(d!==d+0&&"longjmp"!==d)throw d;T(1,0)}}var W;M=function Ta(){W||Xa();W||(M=Ta)};
function Xa(){function b(){if(!W&&(W=!0,a.calledRun=!0,!ka)){ya(qa);ba(a);if(a.onRuntimeInitialized)a.onRuntimeInitialized();if(a.postRun)for("function"==typeof a.postRun&&(a.postRun=[a.postRun]);a.postRun.length;){var c=a.postRun.shift();ra.unshift(c)}ya(ra)}}if(!(0<L)){if(a.preRun)for("function"==typeof a.preRun&&(a.preRun=[a.preRun]);a.preRun.length;)sa();ya(pa);0<L||(a.setStatus?(a.setStatus("Running..."),setTimeout(function(){setTimeout(function(){a.setStatus("")},1);b()},1)):b())}}a.run=Xa;
if(a.preInit)for("function"==typeof a.preInit&&(a.preInit=[a.preInit]);0<a.preInit.length;)a.preInit.pop()();Xa();var X,Ya,Y;"undefined"===typeof performance||"undefined"===typeof performance.now?Y=Date.now:Y=performance.now.bind(performance);function Z(b){var c=Y();b=b();a.cpuTime+=Y()-c;return b}a.loadedMetadata=!!ca.videoFormat;a.videoFormat=ca.videoFormat||null;a.frameBuffer=null;a.cpuTime=0;Object.defineProperty(a,"processing",{get:function(){return!1}});
a.init=function(b){Z(function(){a._ogv_video_decoder_init()});b()};a.processHeader=function(b,c){var e=Z(function(){var d=b.byteLength;X&&Ya>=d||(X&&a._free(X),Ya=d,X=a._malloc(Ya));var f=X;(new Uint8Array(I.buffer,f,d)).set(new Uint8Array(b));return a._ogv_video_decoder_process_header(f,d)});c(e)};a.C=[];
a.processFrame=function(b,c){function e(k){a._free(g);c(k)}var d=a._ogv_video_decoder_async(),f=b.byteLength,g=a._malloc(f);d&&a.C.push(e);var h=Z(function(){(new Uint8Array(I.buffer,g,f)).set(new Uint8Array(b));return a._ogv_video_decoder_process_frame(g,f)});d||e(h)};a.close=function(){};a.sync=function(){a._ogv_video_decoder_async()&&(a.C.push(function(){}),Z(function(){a._ogv_video_decoder_process_frame(0,0)}))};a.recycledFrames=[];
a.recycleFrame=function(b){var c=a.recycledFrames;c.push(b);16<c.length&&c.shift()};


  return OGVDecoderVideoVP9SIMDW.ready
}
);
})();
if (typeof exports === 'object' && typeof module === 'object')
  module.exports = OGVDecoderVideoVP9SIMDW;
else if (typeof define === 'function' && define['amd'])
  define([], function() { return OGVDecoderVideoVP9SIMDW; });
else if (typeof exports === 'object')
  exports["OGVDecoderVideoVP9SIMDW"] = OGVDecoderVideoVP9SIMDW;