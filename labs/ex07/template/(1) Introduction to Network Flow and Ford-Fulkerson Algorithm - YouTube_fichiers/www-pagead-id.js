(function(){var aa="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},l;
if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var ba={s:!0},ca={};try{ca.__proto__=ba;m=ca.s;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var da=l;
function p(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(da)da(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.C=b.prototype}
var ea="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},fa="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function q(a,b){if(b){for(var c=fa,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ea(c,d,{configurable:!0,writable:!0,value:f})}}
function ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
q("String.prototype.endsWith",function(a){return a?a:function(a,c){var b=ha(this,a,"endsWith");a+="";void 0===c&&(c=b.length);for(var e=Math.max(0,Math.min(c|0,b.length)),f=a.length;0<f&&0<e;)if(b[--e]!=a[--f])return!1;return 0>=f}});
q("String.prototype.startsWith",function(a){return a?a:function(a,c){var b=ha(this,a,"startsWith");a+="";for(var e=b.length,f=a.length,g=Math.max(0,Math.min(c|0,b.length)),k=0;k<f&&g<e;)if(b[g++]!=a[k++])return!1;return k>=f}});
var ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e])}return a};
q("Object.assign",function(a){return a||ia});
var r=this;function u(a){return"string"==typeof a}
function v(a,b){var c=a.split("."),d=r;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function w(a){a=a.split(".");for(var b=r,c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function x(){}
function y(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function ja(a){var b=y(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function z(a){return"function"==y(a)}
function ka(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}
function A(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?A=la:A=ma;return A.apply(null,arguments)}
var na=Date.now||function(){return+new Date};
function oa(a,b){function c(){}
c.prototype=b.prototype;a.C=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.P=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,d)}}
;var B=window;function C(a){if(Error.captureStackTrace)Error.captureStackTrace(this,C);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
oa(C,Error);C.prototype.name="CustomError";var pa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if(u(a))return u(b)&&1==b.length?a.indexOf(b,0):-1;
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},D=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=u(a)?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)},qa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
D(a,function(c,f){d=b.call(void 0,d,c,f,a)});
return d};
function ra(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(ja(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var F;a:{var sa=r.navigator;if(sa){var ta=sa.userAgent;if(ta){F=ta;break a}}F=""};function ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function va(a,b){var c=ja(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function wa(){var a=xa,b={},c;for(c in a)b[c]=a[c];return b}
var ya="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function za(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ya.length;f++)c=ya[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function Aa(){}
;function G(a,b){this.width=a;this.height=b}
G.prototype.aspectRatio=function(){return this.width/this.height};
G.prototype.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
G.prototype.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
G.prototype.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Ba(a){var b=Ca;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Da(){var a=[];Ba(function(b){a.push(b)});
return a}
var Ca={D:"allow-forms",F:"allow-modals",G:"allow-orientation-lock",H:"allow-pointer-lock",I:"allow-popups",J:"allow-popups-to-escape-sandbox",K:"allow-presentation",L:"allow-same-origin",M:"allow-scripts",N:"allow-top-navigation",O:"allow-top-navigation-by-user-activation"},Ea=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){return Da()});
function Fa(){var a=document.createElement("IFRAME").sandbox,b=a&&a.supports;if(!b)return{};var c={};D(Ea(),function(d){b.call(a,d)&&(c[d]=!0)});
return c}
;var Ga=(new Date).getTime();function H(a,b){this.c=a;this.f=b;this.b=0;this.a=null}
H.prototype.get=function(){if(0<this.b){this.b--;var a=this.a;this.a=a.next;a.next=null}else a=this.c();return a};
function Ha(a,b){a.f(b);100>a.b&&(a.b++,b.next=a.a,a.a=b)}
;function Ia(a){r.setTimeout(function(){throw a;},0)}
var I;
function Ja(){var a=r.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==F.indexOf("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow;a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host;a=A(function(a){if(("*"==d||a.origin==d)&&
a.data==c)this.port1.onmessage()},this);
b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});
if("undefined"!==typeof a&&-1==F.indexOf("Trident")&&-1==F.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.i;c.i=null;a()}};
return function(a){d.next={i:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");
b.onreadystatechange=function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};
document.documentElement.appendChild(b)}:function(a){r.setTimeout(a,0)}}
;function J(){this.b=this.a=null}
var Ka=new H(function(){return new K},function(a){a.reset()});
J.prototype.add=function(a,b){var c=Ka.get();c.set(a,b);this.b?this.b.next=c:this.a=c;this.b=c};
J.prototype.remove=function(){var a=null;this.a&&(a=this.a,this.a=this.a.next,this.a||(this.b=null),a.next=null);return a};
function K(){this.next=this.b=this.a=null}
K.prototype.set=function(a,b){this.a=a;this.b=b;this.next=null};
K.prototype.reset=function(){this.next=this.b=this.a=null};function L(a,b){M||La();N||(M(),N=!0);Ma.add(a,b)}
var M;function La(){if(r.Promise&&r.Promise.resolve){var a=r.Promise.resolve(void 0);M=function(){a.then(Na)}}else M=function(){var a=Na,c;
!(c=!z(r.setImmediate))&&(c=r.Window&&r.Window.prototype)&&(c=-1==F.indexOf("Edge")&&r.Window.prototype.setImmediate==r.setImmediate);c?(I||(I=Ja()),I(a)):r.setImmediate(a)}}
var N=!1,Ma=new J;function Na(){for(var a;a=Ma.remove();){try{a.a.call(a.b)}catch(b){Ia(b)}Ha(Ka,a)}N=!1}
;function Oa(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function O(a){this.a=0;this.j=void 0;this.f=this.b=this.c=null;this.g=this.h=!1;if(a!=x)try{var b=this;a.call(void 0,function(a){P(b,2,a)},function(a){P(b,3,a)})}catch(c){P(this,3,c)}}
function Pa(){this.next=this.context=this.b=this.c=this.a=null;this.f=!1}
Pa.prototype.reset=function(){this.context=this.b=this.c=this.a=null;this.f=!1};
var Qa=new H(function(){return new Pa},function(a){a.reset()});
function Ra(a,b,c){var d=Qa.get();d.c=a;d.b=b;d.context=c;return d}
function Sa(a){return new O(function(b,c){c(a)})}
O.prototype.then=function(a,b,c){return Ta(this,z(a)?a:null,z(b)?b:null,c)};
O.prototype.$goog_Thenable=!0;function Q(a,b){return Ta(a,null,b,void 0)}
O.prototype.cancel=function(a){0==this.a&&L(function(){var b=new R(a);Ua(this,b)},this)};
function Ua(a,b){if(0==a.a)if(a.c){var c=a.c;if(c.b){for(var d=0,e=null,f=null,g=c.b;g&&(g.f||(d++,g.a==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.a&&1==d?Ua(c,b):(f?(d=f,d.next==c.f&&(c.f=d),d.next=d.next.next):Va(c),Wa(c,e,3,b)))}a.c=null}else P(a,3,b)}
function Xa(a,b){a.b||2!=a.a&&3!=a.a||Ya(a);a.f?a.f.next=b:a.b=b;a.f=b}
function Ta(a,b,c,d){var e=Ra(null,null,null);e.a=new O(function(a,g){e.c=b?function(c){try{var e=b.call(d,c);a(e)}catch(n){g(n)}}:a;
e.b=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof R?g(b):a(e)}catch(n){g(n)}}:g});
e.a.c=a;Xa(a,e);return e.a}
O.prototype.v=function(a){this.a=0;P(this,2,a)};
O.prototype.w=function(a){this.a=0;P(this,3,a)};
function P(a,b,c){if(0==a.a){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.a=1;a:{var d=c,e=a.v,f=a.w;if(d instanceof O){Xa(d,Ra(e||x,f||null,a));var g=!0}else if(Oa(d))d.then(e,f,a),g=!0;else{if(ka(d))try{var k=d.then;if(z(k)){Za(d,k,e,f,a);g=!0;break a}}catch(h){f.call(a,h);g=!0;break a}g=!1}}g||(a.j=c,a.a=b,a.c=null,Ya(a),3!=b||c instanceof R||$a(a,c))}}
function Za(a,b,c,d,e){function f(a){k||(k=!0,d.call(e,a))}
function g(a){k||(k=!0,c.call(e,a))}
var k=!1;try{b.call(a,g,f)}catch(h){f(h)}}
function Ya(a){a.h||(a.h=!0,L(a.u,a))}
function Va(a){var b=null;a.b&&(b=a.b,a.b=b.next,b.next=null);a.b||(a.f=null);return b}
O.prototype.u=function(){for(var a;a=Va(this);)Wa(this,a,this.a,this.j);this.h=!1};
function Wa(a,b,c,d){if(3==c&&b.b&&!b.f)for(;a&&a.g;a=a.c)a.g=!1;if(b.a)b.a.c=null,ab(b,c,d);else try{b.f?b.c.call(b.context):ab(b,c,d)}catch(e){bb.call(null,e)}Ha(Qa,b)}
function ab(a,b,c){2==b?a.c.call(a.context,c):a.b&&a.b.call(a.context,c)}
function $a(a,b){a.g=!0;L(function(){a.g&&bb.call(null,b)})}
var bb=Ia;function R(a){C.call(this,a)}
oa(R,C);R.prototype.name="cancel";var cb=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function S(a){return a.match(cb)}
function T(a){return a?decodeURI(a):a}
function db(a,b,c){if("array"==y(b))for(var d=0;d<b.length;d++)db(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function eb(a){var b=[],c;for(c in a)db(c,a[c],b);return b.join("&")}
;function fb(){this.b=[];this.a=-1}
fb.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.b[a]!=b&&(this.b[a]=b,this.a=-1)};
fb.prototype.get=function(a){return!!this.b[a]};
function gb(a){-1==a.a&&(a.a=qa(a.b,function(a,c,d){return c?a+Math.pow(2,d):a},0));
return a.a}
;function hb(a){v("yt.ads.biscotti.lastId_",a)}
;var U=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};v("yt.config_",U);function ib(a){var b=arguments;if(1<b.length)U[b[0]]=b[1];else{b=b[0];for(var c in b)U[c]=b[c]}}
function V(a,b){return a in U?U[a]:b}
;function jb(){var a=kb,b={};b.dt=Ga;b.flash="0";a:{try{var c=a.a.top.location.href}catch(f){a=2;break a}a=c?c===a.b.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?B:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!B.navigator&&"unknown"!==typeof B.navigator.javaEnabled&&!!B.navigator.javaEnabled&&B.navigator.javaEnabled();B.screen&&(b.u_h=B.screen.height,b.u_w=B.screen.width,b.u_ah=B.screen.availHeight,b.u_aw=B.screen.availWidth,b.u_cd=B.screen.colorDepth);
B.navigator&&B.navigator.plugins&&(b.u_nplug=B.navigator.plugins.length);B.navigator&&B.navigator.mimeTypes&&(b.u_nmime=B.navigator.mimeTypes.length);return b}
function lb(){var a=kb;var b=a.a;try{var c=b.screenX;var d=b.screenY}catch(E){}try{var e=b.outerWidth;var f=b.outerHeight}catch(E){}try{var g=b.innerWidth;var k=b.innerHeight}catch(E){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,k];c=a.a.top;try{var h=(c||window).document,n="CSS1Compat"==h.compatMode?h.documentElement:h.body;var t=(new G(n.clientWidth,n.clientHeight)).round()}catch(E){t=new G(-12245933,-12245933)}h=t;t={};n=new fb;r.SVGElement&&
r.document.createElementNS&&n.set(0);c=Fa();c["allow-top-navigation-by-user-activation"]&&n.set(1);c["allow-popups-to-escape-sandbox"]&&n.set(2);r.crypto&&r.crypto.subtle&&n.set(3);n=gb(n);t.bc=n;t.bih=h.height;t.biw=h.width;t.brdim=b.join();a=a.b;return t.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,t.wgl=!!B.WebGLRenderingContext,t}
var kb=new function(){var a=window.document;this.a=window;this.b=a};na();function mb(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){nb(b)}}:a}
function nb(a){var b=w("yt.logging.errors.log");b?b(a,void 0,void 0,void 0,void 0):(b=V("ERRORS",[]),b.push([a,void 0,void 0,void 0,void 0]),ib("ERRORS",b))}
;function ob(a){return V("EXPERIMENT_FLAGS",{})[a]}
;var pb=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function qb(){if(!pb)return null;var a=pb();return"open"in a?a:null}
function rb(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function sb(a,b){z(a)&&(a=mb(a));return window.setTimeout(a,b)}
;function tb(a){var b=[];ua(a,function(a,d){var c=encodeURIComponent(String(d)),f;"array"==y(a)?f=a:f=[a];D(f,function(a){""==a?b.push(c):b.push(c+"="+encodeURIComponent(String(a)))})});
return b.join("&")}
function ub(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length){var f=decodeURIComponent((e[0]||"").replace(/\+/g," "));e=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?"array"==y(b[f])?ra(b[f],e):b[f]=[b[f],e]:b[f]=e}}return b}
function vb(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=ub(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=eb(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.substr(0,f),e,b.substr(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
;var wb={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},xb="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
yb=!1;
function zb(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=S(a)[1]||null,e=T(S(a)[3]||null);d&&e?(d=c,c=S(a),d=S(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?T(S(c)[3]||null)==e&&(Number(S(c)[4]||null)||null)==(Number(S(a)[4]||null)||null):!0;d=!!ob("web_ajax_ignore_global_headers_if_set");for(var f in wb)e=V(wb[f]),!e||!c&&!Ab(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ab(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=-(new Date).getTimezoneOffset();ob("pass_biscotti_id_in_header_ajax")&&(c||
Ab(a,"X-YouTube-Ad-Signals"))&&(f=void 0,f=void 0===f?w("yt.ads.biscotti.lastId_")||"":f,c=Object.assign(jb(),lb()),c.ca_type="image",f&&(c.bid=f),b["X-YouTube-Ad-Signals"]=tb(c));return b}
function Bb(a){var b=window.location.search,c=T(S(a)[3]||null),d=T(S(a)[5]||null);d=(c=c&&c.endsWith("youtube.com"))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=ub(b),f={};D(xb,function(a){e[a]&&(f[a]=e[a])});
return vb(a,f||{},!1)}
function Ab(a,b){var c=V("CORS_HEADER_WHITELIST")||{},d=T(S(a)[3]||null);return d?(c=c[d])?0<=pa(c,b):!1:!0}
function Cb(a){var b=a.format||"JSON";var c=Db("//googleads.g.doubleclick.net/pagead/id",a);var d=Eb(c,a),e=!1,f,g=Fb(c,function(c){if(!e){e=!0;f&&window.clearTimeout(f);var d=rb(c),g=null,k=400<=c.status&&500>c.status,E=500<=c.status&&600>c.status;if(d||k||E)g=Gb(b,c,a.R);if(d)a:if(c&&204==c.status)d=!0;else{switch(b){case "XML":d=0==parseInt(g&&g.return_code,10);break a;case "RAW":d=!0;break a}d=!!g}g=g||{};k=a.context||r;d?a.l&&a.l.call(k,c,g):a.onError&&a.onError.call(k,c,g);a.A&&a.A.call(k,c,
g)}},a.method,d,a.headers,a.responseType,a.withCredentials);
a.m&&0<a.timeout&&(f=sb(function(){e||(e=!0,g.abort(),window.clearTimeout(f),a.m.call(a.context||r,g))},a.timeout));
return g}
function Db(a,b){b.T&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=V("XSRF_FIELD_NAME",void 0),d=b.V;d&&(d[c]&&delete d[c],a=vb(a,d||{},!0));return a}
function Eb(a,b){var c=V("XSRF_FIELD_NAME",void 0),d=V("XSRF_TOKEN",void 0),e=b.U||"",f=b.o,g=V("XSRF_FIELD_NAME",void 0),k;b.headers&&(k=b.headers["Content-Type"]);b.S||T(S(a)[3]||null)&&!b.withCredentials&&T(S(a)[3]||null)!=document.location.hostname||"POST"!=b.method||k&&"application/x-www-form-urlencoded"!=k||b.o&&b.o[g]||(f||(f={}),f[c]=d);f&&u(e)&&(e=ub(e),za(e,f),e=b.B&&"JSON"==b.B?JSON.stringify(e):eb(e));if(!(c=e)&&(c=f)){a:{for(var h in f){f=!1;break a}f=!0}c=!f}!yb&&c&&"POST"!=b.method&&
(yb=!0,nb(Error("AJAX request with postData should use POST")));return e}
function Gb(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Hb(b):null)d={},D(b.getElementsByTagName("*"),function(a){d[a.tagName]=Ib(a)})}c&&Jb(d);
return d}
function Jb(a){if(ka(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);c?a[b]=new Aa:Jb(a[b])}}
function Hb(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Ib(a){var b="";D(a.childNodes,function(a){b+=a.nodeValue});
return b}
function Fb(a,b,c,d,e,f,g){function k(){4==(h&&"readyState"in h?h.readyState:0)&&b&&mb(b)(h)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var h=qb();if(!h)return null;"onloadend"in h?h.addEventListener("loadend",k,!1):h.onreadystatechange=k;ob("debug_forward_web_query_parameters")&&(a=Bb(a));h.open(c,a,!0);f&&(h.responseType=f);g&&(h.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=zb(a,e))for(var n in e)h.setRequestHeader(n,e[n]),"content-type"==n.toLowerCase()&&(c=!1);c&&h.setRequestHeader("Content-Type","application/x-www-form-urlencoded");h.send(d);
return h}
;function Kb(){var a=wa(),b;return Q(new O(function(c,d){a.l=function(a){rb(a)?c(a):d(new W("Request failed, status="+a.status,"net.badstatus",a))};
a.onError=function(a){d(new W("Unknown request error","net.unknown",a))};
a.m=function(a){d(new W("Request timed out","net.timeout",a))};
b=Cb(a)}),function(a){a instanceof R&&b.abort();
return Sa(a)})}
function W(a,b){C.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
p(W,C);function X(){this.a=0;this.b=null}
X.prototype.then=function(a,b,c){return 1===this.a&&a?(a=a.call(c,this.b),Oa(a)?a:Lb(a)):2===this.a&&b?(a=b.call(c,this.b),Oa(a)?a:Mb(a)):this};
X.prototype.$goog_Thenable=!0;function Mb(a){var b=new X;a=void 0===a?null:a;b.a=2;b.b=void 0===a?null:a;return b}
function Lb(a){var b=new X;a=void 0===a?null:a;b.a=1;b.b=void 0===a?null:a;return b}
;function Nb(a){C.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Y;this.isTimeout=a instanceof W&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof R}
p(Nb,C);Nb.prototype.name="BiscottiError";function Y(){C.call(this,"Biscotti ID is missing from server")}
p(Y,C);Y.prototype.name="BiscottiMissingError";var xa={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Z=null;function Ob(){if("1"===va(V("PLAYER_CONFIG",{}),"args","privembed"))return Sa(Error("Biscotti ID is not available in private embed mode"));Z||(Z=Q(Kb().then(Pb),function(a){return Qb(2,a)}));
return Z}
function Pb(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Y;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Y;a=a.id;hb(a);Z=Lb(a);Rb(18E5,2);return a}
function Qb(a,b){var c=new Nb(b);hb("");Z=Mb(c);0<a&&Rb(12E4,a-1);throw c;}
function Rb(a,b){sb(function(){Q(Kb().then(Pb,function(a){return Qb(b,a)}),x)},a)}
;w("yt.ads.biscotti.getId_")||v("yt.ads.biscotti.getId_",Ob);var Sb;try{var Tb=w("yt.ads.biscotti.getId_");Sb=Tb?Tb():Ob()}catch(a){Sb=Sa(a)}Q(Sb,x);}).call(this);
