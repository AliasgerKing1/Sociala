(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3769],{67238:function(t,e,n){"use strict";n.d(e,{Z:function(){return s}});var r=n(19013),i=n(83946),o=n(13882),a=n(84314);function u(t,e){var n,u,s,l,c,f,d,p;(0,o.Z)(1,arguments);var h=(0,a.j)(),g=(0,i.Z)(null!==(n=null!==(u=null!==(s=null!==(l=null===e||void 0===e?void 0:e.weekStartsOn)&&void 0!==l?l:null===e||void 0===e||null===(c=e.locale)||void 0===c||null===(f=c.options)||void 0===f?void 0:f.weekStartsOn)&&void 0!==s?s:h.weekStartsOn)&&void 0!==u?u:null===(d=h.locale)||void 0===d||null===(p=d.options)||void 0===p?void 0:p.weekStartsOn)&&void 0!==n?n:0);if(!(g>=0&&g<=6))throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");var v=(0,r.Z)(t),m=v.getDay(),y=(m<g?7:0)+m-g;return v.setDate(v.getDate()-y),v.setHours(0,0,0,0),v}function s(t,e,n){(0,o.Z)(2,arguments);var r=u(t,n),i=u(e,n);return r.getTime()===i.getTime()}},34865:function(t,e,n){var r=n(89465),i=n(77813),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},25970:function(t,e,n){var r=n(63012),i=n(79095);t.exports=function(t,e){return r(t,e,(function(e,n){return i(t,n)}))}},63012:function(t,e,n){var r=n(97786),i=n(10611),o=n(71811);t.exports=function(t,e,n){for(var a=-1,u=e.length,s={};++a<u;){var l=e[a],c=r(t,l);n(c,l)&&i(s,o(l,t),c)}return s}},10611:function(t,e,n){var r=n(34865),i=n(71811),o=n(65776),a=n(13218),u=n(40327);t.exports=function(t,e,n,s){if(!a(t))return t;for(var l=-1,c=(e=i(e,t)).length,f=c-1,d=t;null!=d&&++l<c;){var p=u(e[l]),h=n;if("__proto__"===p||"constructor"===p||"prototype"===p)return t;if(l!=f){var g=d[p];void 0===(h=s?s(g,p,d):void 0)&&(h=a(g)?g:o(e[l+1])?[]:{})}r(d,p,h),d=d[p]}return t}},99021:function(t,e,n){var r=n(85564),i=n(45357),o=n(30061);t.exports=function(t){return o(i(t,void 0,r),t+"")}},85564:function(t,e,n){var r=n(21078);t.exports=function(t){return(null==t?0:t.length)?r(t,1):[]}},75472:function(t,e,n){var r=n(82689),i=n(1469);t.exports=function(t,e,n,o){return null==t?[]:(i(e)||(e=null==e?[]:[e]),i(n=o?void 0:n)||(n=null==n?[]:[n]),r(t,e,n))}},78718:function(t,e,n){var r=n(25970),i=n(99021)((function(t,e){return null==t?{}:r(t,e)}));t.exports=i},55314:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}function i(t,e){return i=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},i(t,e)}function o(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,i(t,e)}function a(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(){return u=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},u.apply(this,arguments)}n.d(e,{q:function(){return Et},vc:function(){return pt},q_:function(){return kt},Yz:function(){return At}});var s=n(67294),l=void 0,c=[],f=function(t){return"undefined"!==typeof window&&window.requestAnimationFrame(t)},d=void 0,p=function(){return Date.now()},h=void 0,g=void 0,v=function(t,e){return l={fn:t,transform:e}},m=function(t){return c=t},y=function(t){return d=t},b=function(t){return t},k=function(t){return h=t},w=function(t){return g=t},x=function(){function t(){}var e=t.prototype;return e.attach=function(){},e.detach=function(){},e.getValue=function(){},e.getAnimatedValue=function(){return this.getValue()},e.addChild=function(t){},e.removeChild=function(t){},e.getChildren=function(){return[]},t}(),V=function(t){return Object.keys(t).map((function(e){return t[e]}))},A=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).children=[],e.getChildren=function(){return e.children},e.getPayload=function(t){return void 0===t&&(t=void 0),void 0!==t&&e.payload?e.payload[t]:e.payload||a(a(e))},e}o(e,t);var n=e.prototype;return n.addChild=function(t){0===this.children.length&&this.attach(),this.children.push(t)},n.removeChild=function(t){var e=this.children.indexOf(t);this.children.splice(e,1),0===this.children.length&&this.detach()},e}(x),O=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).payload=[],e.getAnimatedValue=function(){return e.getValue()},e.attach=function(){return e.payload.forEach((function(t){return t instanceof x&&t.addChild(a(a(e)))}))},e.detach=function(){return e.payload.forEach((function(t){return t instanceof x&&t.removeChild(a(a(e)))}))},e}return o(e,t),e}(A),E=function(t){function e(){for(var e,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))||this).payload={},e.getAnimatedValue=function(){return e.getValue(!0)},e.attach=function(){return V(e.payload).forEach((function(t){return t instanceof x&&t.addChild(a(a(e)))}))},e.detach=function(){return V(e.payload).forEach((function(t){return t instanceof x&&t.removeChild(a(a(e)))}))},e}return o(e,t),e.prototype.getValue=function(t){void 0===t&&(t=!1);var e={};for(var n in this.payload){var r=this.payload[n];(!t||r instanceof x)&&(e[n]=r instanceof x?r[t?"getAnimatedValue":"getValue"]():r)}return e},e}(A),S=function(t){function e(e){var n;return n=t.call(this)||this,!(e=e||{}).transform||e.transform instanceof x||(e=l.transform(e)),n.payload=e,n}return o(e,t),e}(E),C={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},q=function(){function t(){}return t.create=function(e,n,r){if("function"===typeof e)return e;if(d&&e.output&&"string"===typeof e.output[0])return d(e);if(Array.isArray(e))return t.create({range:e,output:n,extrapolate:r||"extend"});var i=e.output,o=e.range||[0,1],a=e.easing||function(t){return t},u="extend",s=e.map;void 0!==e.extrapolateLeft?u=e.extrapolateLeft:void 0!==e.extrapolate&&(u=e.extrapolate);var l="extend";return void 0!==e.extrapolateRight?l=e.extrapolateRight:void 0!==e.extrapolate&&(l=e.extrapolate),function(t){var e=function(t,e){for(var n=1;n<e.length-1&&!(e[n]>=t);++n);return n-1}(t,o);return function(t,e,n,r,i,o,a,u,s){var l=s?s(t):t;if(l<e){if("identity"===a)return l;"clamp"===a&&(l=e)}if(l>n){if("identity"===u)return l;"clamp"===u&&(l=n)}if(r===i)return r;if(e===n)return t<=e?r:i;e===-1/0?l=-l:n===1/0?l-=e:l=(l-e)/(n-e);l=o(l),r===-1/0?l=-l:i===1/0?l+=r:l=l*(i-r)+r;return l}(t,o[e],o[e+1],i[e],i[e+1],a,u,l,s)}},t}();var j="[-+]?\\d*\\.?\\d+",P=j+"%";function R(){return"\\(\\s*("+Array.prototype.slice.call(arguments).join(")\\s*,\\s*(")+")\\s*\\)"}var F=new RegExp("rgb"+R(j,j,j)),M=new RegExp("rgba"+R(j,j,j,j)),T=new RegExp("hsl"+R(j,P,P)),I=new RegExp("hsla"+R(j,P,P,j)),_=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,z=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,D=/^#([0-9a-fA-F]{6})$/,L=/^#([0-9a-fA-F]{8})$/;function N(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+6*(e-t)*n:n<.5?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function K(t,e,n){var r=n<.5?n*(1+e):n+e-n*e,i=2*n-r,o=N(i,r,t+1/3),a=N(i,r,t),u=N(i,r,t-1/3);return Math.round(255*o)<<24|Math.round(255*a)<<16|Math.round(255*u)<<8}function Z(t){var e=parseInt(t,10);return e<0?0:e>255?255:e}function G(t){return(parseFloat(t)%360+360)%360/360}function H(t){var e=parseFloat(t);return e<0?0:e>1?255:Math.round(255*e)}function W(t){var e=parseFloat(t);return e<0?0:e>100?1:e/100}function $(t){var e=function(t){var e;return"number"===typeof t?t>>>0===t&&t>=0&&t<=4294967295?t:null:(e=D.exec(t))?parseInt(e[1]+"ff",16)>>>0:C.hasOwnProperty(t)?C[t]:(e=F.exec(t))?(Z(e[1])<<24|Z(e[2])<<16|Z(e[3])<<8|255)>>>0:(e=M.exec(t))?(Z(e[1])<<24|Z(e[2])<<16|Z(e[3])<<8|H(e[4]))>>>0:(e=_.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+"ff",16)>>>0:(e=L.exec(t))?parseInt(e[1],16)>>>0:(e=z.exec(t))?parseInt(e[1]+e[1]+e[2]+e[2]+e[3]+e[3]+e[4]+e[4],16)>>>0:(e=T.exec(t))?(255|K(G(e[1]),W(e[2]),W(e[3])))>>>0:(e=I.exec(t))?(K(G(e[1]),W(e[2]),W(e[3]))|H(e[4]))>>>0:null}(t);return null===e?t:"rgba("+((4278190080&(e=e||0))>>>24)+", "+((16711680&e)>>>16)+", "+((65280&e)>>>8)+", "+(255&e)/255+")"}var Q=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,U=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,Y=new RegExp("("+Object.keys(C).join("|")+")","g");var B={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},J=["Webkit","Ms","Moz","O"];function X(t,e,n){return null==e||"boolean"===typeof e||""===e?"":n||"number"!==typeof e||0===e||B.hasOwnProperty(t)&&B[t]?(""+e).trim():e+"px"}B=Object.keys(B).reduce((function(t,e){return J.forEach((function(n){return t[function(t,e){return t+e.charAt(0).toUpperCase()+e.substring(1)}(n,e)]=t[e]})),t}),B);var tt={};k((function(t){return new S(t)})),b("div"),y((function(t){var e=t.output.map((function(t){return t.replace(U,$)})).map((function(t){return t.replace(Y,$)})),n=e[0].match(Q).map((function(){return[]}));e.forEach((function(t){t.match(Q).forEach((function(t,e){return n[e].push(+t)}))}));var r=e[0].match(Q).map((function(e,r){return q.create(u({},t,{output:n[r]}))}));return function(t){var n=0;return e[0].replace(Q,(function(){return r[n++](t)})).replace(/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,(function(t,e,n,r,i){return"rgba("+Math.round(e)+", "+Math.round(n)+", "+Math.round(r)+", "+i+")"}))}})),m(C),w((function(t){return t.current})),v((function(t,e){if(!t.nodeType||void 0===t.setAttribute)return!1;var n=e.style,i=e.children,o=e.scrollTop,a=e.scrollLeft,u=r(e,["style","children","scrollTop","scrollLeft"]),s="filter"===t.nodeName||t.parentNode&&"filter"===t.parentNode.nodeName;for(var l in void 0!==o&&(t.scrollTop=o),void 0!==a&&(t.scrollLeft=a),void 0!==i&&(t.textContent=i),n)if(n.hasOwnProperty(l)){var c=0===l.indexOf("--"),f=X(l,n[l],c);"float"===l&&(l="cssFloat"),c?t.style.setProperty(l,f):t.style[l]=f}for(var d in u){var p=s?d:tt[d]||(tt[d]=d.replace(/([A-Z])/g,(function(t){return"-"+t.toLowerCase()})));"undefined"!==typeof t.getAttribute(p)&&t.setAttribute(p,u[d])}}),(function(t){return t}));var et=function(t){function e(n,r,i){var o;return(o=t.call(this)||this).getValue=function(){var t;return(t=o).calc.apply(t,o.payload.map((function(t){return t.getValue()})))},o.updateConfig=function(t,e){return o.calc=q.create(t,e)},o.interpolate=function(t,n){return new e(a(a(o)),t,n)},o.payload=n instanceof O&&!n.updateConfig?n.payload:Array.isArray(n)?n:[n],o.calc=q.create(r,i),o}return o(e,t),e}(O),nt=function(t){function e(e,n){var r;return r=t.call(this)||this,e.style&&(e=u({},e,{style:h(e.style)})),r.payload=e,r.update=n,r.attach(),r}return o(e,t),e}(E);function rt(t,e){"function"===typeof t.update?e.add(t):t.getChildren().forEach((function(t){return rt(t,e)}))}var it=function(t){function e(e){var n;return(n=t.call(this)||this).setValue=function(t,e){void 0===e&&(e=!0),n.value=t,e&&n.flush()},n.getValue=function(){return n.value},n.updateStyles=function(){return rt(a(a(n)),n.animatedStyles)},n.updateValue=function(t){return n.flush(n.value=t)},n.interpolate=function(t,e){return new et(a(a(n)),t,e)},n.value=e,n.animatedStyles=new Set,n.done=!1,n.startPosition=e,n.lastPosition=e,n.lastVelocity=void 0,n.startTime=void 0,n.lastTime=void 0,n}return o(e,t),e.prototype.flush=function(){0===this.animatedStyles.size&&this.updateStyles(),this.animatedStyles.forEach((function(t){return t.update()}))},e}(A),ot=function(t){function e(e){var n;return(n=t.call(this)||this).setValue=function(t,e){void 0===e&&(e=!0),Array.isArray(t)?t.length===n.payload.length&&t.forEach((function(t,r){return n.payload[r].setValue(t,e)})):n.payload.forEach((function(r,i){return n.payload[i].setValue(t,e)}))},n.getValue=function(){return n.payload.map((function(t){return t.getValue()}))},n.interpolate=function(t,e){return new et(a(a(n)),t,e)},n.payload=e.map((function(t){return new it(t)})),n}return o(e,t),e}(O),at={arr:Array.isArray,obj:function(t){return"[object Object]"===Object.prototype.toString.call(t)},fun:function(t){return"function"===typeof t},str:function(t){return"string"===typeof t},num:function(t){return"number"===typeof t},und:function(t){return void 0===t},nul:function(t){return null===t},set:function(t){return t instanceof Set},map:function(t){return t instanceof Map},equ:function(t,e){if(typeof t!==typeof e)return!1;if(at.str(t)||at.num(t))return t===e;if(at.obj(t)&&at.obj(e)&&Object.keys(t).length+Object.keys(e).length===0)return!0;var n;for(n in t)if(!(n in e))return!1;for(n in e)if(t[n]!==e[n])return!1;return!at.und(n)||t===e}};function ut(){var t=(0,s.useState)(!1)[1];return(0,s.useCallback)((function(){return t((function(t){return!t}))}),[])}function st(t,e){return at.und(t)||at.nul(t)?e:t}function lt(t){return at.und(t)?[]:at.arr(t)?t:[t]}function ct(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return at.fun(t)?t.apply(void 0,n):t}function ft(t){var e=function(t){return t.to,t.from,t.config,t.onStart,t.onRest,t.onFrame,t.children,t.reset,t.reverse,t.force,t.immediate,t.delay,t.attach,t.destroyed,t.interpolateTo,t.ref,t.lazy,r(t,["to","from","config","onStart","onRest","onFrame","children","reset","reverse","force","immediate","delay","attach","destroyed","interpolateTo","ref","lazy"])}(t),n=Object.keys(t).reduce((function(n,r){var i;return at.und(e[r])?u({},n,((i={})[r]=t[r],i)):n}),{});return u({to:e},n)}function dt(t){return(0,s.forwardRef)((function(e,n){var i=ut(),o=(0,s.useRef)(!0),a=(0,s.useRef)(),c=(0,s.useRef)(),f=(0,s.useCallback)((function(t,e){var n=a.current;a.current=new nt(t,(function(){c.current&&(!1===l.fn(c.current,a.current.getAnimatedValue())&&i())})),n&&n.detach()}),[]);(0,s.useEffect)((function(){return function(){o.current=!1,a.current&&a.current.detach()}}),[]),(0,s.useImperativeHandle)(n,(function(){return g(c,o,i)})),f(e);var d=a.current.getValue(),p=(d.scrolTop,d.scrollLeft,r(d,["scrolTop","scrollLeft"]));return s.createElement(t,u({},p,{ref:function(t){return c.current=function(t,e){return e&&(at.fun(e)?e(t):at.obj(e)&&(e.current=t)),t}(t,n)}}))}))}var pt={default:{tension:170,friction:26},gentle:{tension:120,friction:14},wobbly:{tension:180,friction:12},stiff:{tension:210,friction:20},slow:{tension:280,friction:60},molasses:{tension:280,friction:120}},ht=!1,gt=new Set,vt=function t(){var e=p(),n=gt,r=Array.isArray(n),i=0;for(n=r?n:n[Symbol.iterator]();;){var o;if(r){if(i>=n.length)break;o=n[i++]}else{if((i=n.next()).done)break;o=i.value}for(var a=o,u=!0,s=!1,l=0;l<a.configs.length;l++){for(var c=a.configs[l],d=void 0,h=void 0,g=0;g<c.animatedValues.length;g++){var v=c.animatedValues[g];if(!v.done){var m=c.fromValues[g],y=c.toValues[g],b=v.lastPosition,k=y instanceof x,w=Array.isArray(c.initialVelocity)?c.initialVelocity[g]:c.initialVelocity;if(k&&(y=y.getValue()),c.immediate)v.updateValue(y),v.done=!0;else if(u=!1,"string"!==typeof m&&"string"!==typeof y){if(void 0!==c.duration)b=m+c.easing((e-v.startTime)/c.duration)*(y-m),d=e>=v.startTime+c.duration;else if(c.decay)b=m+w/(1-.998)*(1-Math.exp(-(1-.998)*(e-a.startTime))),(d=Math.abs(v.lastPosition-b)<.1)&&(y=b);else{h=void 0!==v.lastTime?v.lastTime:e,w=void 0!==v.lastVelocity?v.lastVelocity:c.initialVelocity,e>h+64&&(h=e);for(var V=Math.floor(e-h),A=0;A<V;++A){b+=1*(w+=1*((-c.tension*(b-y)+-c.friction*w)/c.mass)/1e3)/1e3}var O=!(!c.clamp||0===c.tension)&&(m<y?b>y:b<y),E=Math.abs(w)<=c.precision,S=0===c.tension||Math.abs(y-b)<=c.precision;d=O||E&&S,v.lastVelocity=w,v.lastTime=e}k&&!c.toValues[g].done&&(d=!1),d?(v.value!==y&&(b=y),v.done=!0):s=!0,v.updateValue(b),v.lastPosition=b}else v.updateValue(y),v.done=!0}}a.props.onFrame&&(a.values[c.name]=c.interpolation.getValue())}a.props.onFrame&&a.props.onFrame(a.values),s||(gt.delete(a),a.stop(!0,u))}gt.size?f(t):ht=!1},mt=0,yt=function(){function t(t){var e=this;this.getValues=function(){return e.interpolations},this.id=mt++,this.idle=!0,this.hasChanged=!1,this.guid=0,this.local=0,this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.listeners=[],this.queue=[],t&&this.update(t)}var e=t.prototype;return e.update=function(t){var e=this;if(!t)return this;var n=ft(t),i=n.delay,o=void 0===i?0:i,a=n.to,s=r(n,["delay","to"]);if(at.arr(a)||at.fun(a))this.queue.push(u({},s,{delay:o,to:a}));else if(a){var l={};Object.entries(a).forEach((function(t){var n,r=t[0],i=t[1],a=u({to:(n={},n[r]=i,n),delay:ct(o,r)},s);a.delay?e.queue=[].concat(e.queue,[a]):l=u({},l,a,{to:u({},l.to,a.to)})})),Object.keys(l).length>0&&(this.queue=[].concat(this.queue,[l]))}return this.queue=this.queue.sort((function(t,e){return t.delay-e.delay})),this.diff(s),this},e.start=function(t){var e,n=this;if(this.queue.length){this.idle=!1,this.localQueue&&this.localQueue.forEach((function(t){var e=t.from,r=void 0===e?{}:e,i=t.to,o=void 0===i?{}:i;at.obj(r)&&(n.merged=u({},r,n.merged)),at.obj(o)&&(n.merged=u({},n.merged,o))}));var i=this.local=++this.guid,o=this.localQueue=this.queue;this.queue=[],o.forEach((function(e,a){var u=e.delay,s=r(e,["delay"]),l=function(e){a===o.length-1&&i===n.guid&&e&&(n.idle=!0,n.props.onRest&&n.props.onRest(n.merged)),t&&t()},c=at.arr(s.to)||at.fun(s.to);u?setTimeout((function(){i===n.guid&&(c?n.runAsync(s,l):n.diff(s).start(l))}),u):c?n.runAsync(s,l):n.diff(s).start(l)}))}else at.fun(t)&&this.listeners.push(t),this.props.onStart&&this.props.onStart(),e=this,gt.has(e)||(gt.add(e),ht||f(vt),ht=!0);return this},e.stop=function(t,e){return this.listeners.forEach((function(e){return e(t)})),this.listeners=[],this},e.runAsync=function(t,e){var n=this,i=(t.delay,r(t,["delay"])),o=this.local,a=Promise.resolve();if(at.arr(i.to))for(var s=function(t){var e=t,r=(i.to.length,u({},i,{to:i.to[e]}));at.arr(r.config)&&(r.config=r.config[e]),a=a.then((function(){if(o===n.guid)return new Promise((function(t){return n.diff(ft(r)).start(t)}))}))},l=0;l<i.to.length;l++)s(l);else if(at.fun(i.to)){var c=0,f=void 0;a=a.then((function(){return i.to((function(t){var e=u({},i,ft(t));if(at.arr(e.config)&&(e.config=e.config[c]),c++,o===n.guid)return f=new Promise((function(t){return n.diff(e).start(t)}))}),(function(t){return void 0===t&&(t=!0),n.stop(t)})).then((function(){return f}))}))}a.then(e)},e.diff=function(t){var e=this;this.props=u({},this.props,t);var n=this.props,r=n.from,i=void 0===r?{}:r,o=n.to,a=void 0===o?{}:o,s=n.config,l=void 0===s?{}:s,f=n.reverse,h=n.attach,g=n.reset,v=n.immediate;n.ref;if(f){var m=[a,i];i=m[0],a=m[1]}this.merged=u({},i,this.merged,a),this.hasChanged=!1;var y,b=h&&h(this);if(this.animations=Object.entries(this.merged).reduce((function(t,n,r){var o=n[0],a=n[1],s=t[o]||{},f=at.num(a),h=at.str(a)&&!a.startsWith("#")&&!/\d/.test(a)&&!c[a],m=at.arr(a),y=!f&&!m&&!h,k=at.und(i[o])?a:i[o],w=f||m||h?a:1,x=ct(l,o);b&&(w=b.animations[o].parent);var V,A=s.parent,O=s.interpolation,E=lt(b?w.getPayload():w),S=a;y&&(S=d({range:[0,1],output:[a,a]})(1));var C,q=O&&O.getValue(),j=!at.und(A)&&s.animatedValues.some((function(t){return!t.done})),P=!at.equ(S,q),R=!at.equ(S,s.previous),F=!at.equ(x,s.config);if(g||R&&P||F){var M;if(f||h)A=O=s.parent||new it(k);else if(m)A=O=s.parent||new ot(k);else if(y){var T=s.interpolation&&s.interpolation.calc(s.parent.value);T=void 0===T||g?k:T,s.parent?(A=s.parent).setValue(0,!1):A=new it(0);var I={output:[T,a]};s.interpolation?(O=s.interpolation,s.interpolation.updateConfig(I)):O=A.interpolate(I)}return E=lt(b?w.getPayload():w),V=lt(A.getPayload()),g&&!y&&A.setValue(k,!1),e.hasChanged=!0,V.forEach((function(t){t.startPosition=t.value,t.lastPosition=t.value,t.lastVelocity=j?t.lastVelocity:void 0,t.lastTime=j?t.lastTime:void 0,t.startTime=p(),t.done=!1,t.animatedStyles.clear()})),ct(v,o)&&A.setValue(a,!1),u({},t,((M={})[o]=u({},s,{name:o,parent:A,interpolation:O,animatedValues:V,toValues:E,previous:S,config:x,fromValues:lt(A.getValue()),immediate:ct(v,o),initialVelocity:st(x.velocity,0),clamp:st(x.clamp,!1),precision:st(x.precision,.01),tension:st(x.tension,170),friction:st(x.friction,26),mass:st(x.mass,1),duration:x.duration,easing:st(x.easing,(function(t){return t})),decay:x.decay}),M))}return P?t:(y&&(A.setValue(1,!1),O.updateConfig({output:[S,S]})),A.done=!0,e.hasChanged=!0,u({},t,((C={})[o]=u({},t[o],{previous:S}),C)))}),this.animations),this.hasChanged)for(var k in this.configs=(y=this.animations,Object.keys(y).map((function(t){return y[t]}))),this.values={},this.interpolations={},this.animations)this.interpolations[k]=this.animations[k].interpolation,this.values[k]=this.animations[k].interpolation.getValue();return this},e.destroy=function(){this.stop(),this.props={},this.merged={},this.animations={},this.interpolations={},this.values={},this.configs=[],this.local=0},t}(),bt=function(t,e){var n=(0,s.useRef)(!1),r=(0,s.useRef)(),i=at.fun(e),o=(0,s.useMemo)((function(){var n;return r.current&&(r.current.map((function(t){return t.destroy()})),r.current=void 0),[new Array(t).fill().map((function(t,r){var o=new yt,a=i?ct(e,r,o):e[r];return 0===r&&(n=a.ref),o.update(a),n||o.start(),o})),n]}),[t]),a=o[0],u=o[1];r.current=a;(0,s.useImperativeHandle)(u,(function(){return{start:function(){return Promise.all(r.current.map((function(t){return new Promise((function(e){return t.start(e)}))})))},stop:function(t){return r.current.forEach((function(e){return e.stop(t)}))},get controllers(){return r.current}}}));var l=(0,s.useMemo)((function(){return function(t){return r.current.map((function(e,n){e.update(i?ct(t,n,e):t[n]),u||e.start()}))}}),[t]);(0,s.useEffect)((function(){n.current?i||l(e):u||r.current.forEach((function(t){return t.start()}))})),(0,s.useEffect)((function(){return n.current=!0,function(){return r.current.forEach((function(t){return t.destroy()}))}}),[]);var c=r.current.map((function(t){return t.getValues()}));return i?[c,l,function(){return r.current.forEach((function(t){return t.stop()}))}]:c},kt=function(t){var e=at.fun(t),n=bt(1,e?t:[t]),r=n[0],i=n[1];return e?[r[0],i]:r},wt=0,xt=function(t,e){return("function"===typeof e?t.map(e):lt(e)).map(String)},Vt=function(t){var e=t.items,n=t.keys,i=void 0===n?function(t){return t}:n,o=r(t,["items","keys"]);return u({items:e=lt(void 0!==e?e:null),keys:xt(e,i)},o)};function At(t,e,n){var i=u({items:t,keys:e||function(t){return t}},n),o=Vt(i),a=o.lazy,l=void 0!==a&&a,c=(o.unique,o.reset),f=void 0!==c&&c,d=(o.enter,o.leave,o.update,o.onDestroyed),p=(o.keys,o.items,o.onFrame),h=o.onRest,g=o.onStart,v=o.ref,m=r(o,["lazy","unique","reset","enter","leave","update","onDestroyed","keys","items","onFrame","onRest","onStart","ref"]),y=ut(),b=(0,s.useRef)(!1),k=(0,s.useRef)({mounted:!1,first:!0,deleted:[],current:{},transitions:[],prevProps:{},paused:!!i.ref,instances:!b.current&&new Map,forceUpdate:y});return(0,s.useImperativeHandle)(i.ref,(function(){return{start:function(){return Promise.all(Array.from(k.current.instances).map((function(t){var e=t[1];return new Promise((function(t){return e.start(t)}))})))},stop:function(t){return Array.from(k.current.instances).forEach((function(e){return e[1].stop(t)}))},get controllers(){return Array.from(k.current.instances).map((function(t){return t[1]}))}}})),k.current=function(t,e){var n=t.first,i=t.prevProps,o=r(t,["first","prevProps"]),a=Vt(e),s=a.items,l=a.keys,c=a.initial,f=a.from,d=a.enter,p=a.leave,h=a.update,g=a.trail,v=void 0===g?0:g,m=a.unique,y=a.config,b=Vt(i),k=b.keys,w=b.items,x=u({},o.current),V=[].concat(o.deleted),A=Object.keys(x),O=new Set(A),E=new Set(l),S=l.filter((function(t){return!O.has(t)})),C=o.transitions.filter((function(t){return!t.destroyed&&!E.has(t.originalKey)})).map((function(t){return t.originalKey})),q=l.filter((function(t){return O.has(t)})),j=0;S.forEach((function(t,e){m&&V.find((function(e){return e.originalKey===t}))&&(V=V.filter((function(e){return e.originalKey!==t})));var r=l.indexOf(t),i=s[r],o=n&&void 0!==c?"initial":"enter";x[t]={slot:o,originalKey:t,key:m?String(t):wt++,item:i,trail:j+=e>0?v:0,config:ct(y,i,o),from:ct(n&&void 0!==c?c||{}:f,i),to:ct(d,i)}})),C.forEach((function(t){var e=k.indexOf(t),n=w[e],r="leave";V.unshift(u({},x[t],{slot:r,destroyed:!0,left:k[Math.max(0,e-1)],right:k[Math.min(k.length,e+1)],trail:j+=v,config:ct(y,n,r),to:ct(p,n)})),delete x[t]})),q.forEach((function(t){var e=l.indexOf(t),n=s[e],r="update";x[t]=u({},x[t],{item:n,slot:r,trail:j+=v,config:ct(y,n,r),to:ct(h,n)})}));var P=l.map((function(t){return x[t]}));return V.forEach((function(t){var e,n=t.left,i=(t.right,r(t,["left","right"]));-1!==(e=P.findIndex((function(t){return t.originalKey===n})))&&(e+=1),e=Math.max(0,e),P=[].concat(P.slice(0,e),[i],P.slice(e))})),u({},o,{changed:S.length||C.length||q.length,first:n&&0===S.length,transitions:P,current:x,deleted:V,prevProps:e})}(k.current,i),k.current.changed&&k.current.transitions.forEach((function(t){var e=t.slot,n=t.from,r=t.to,i=t.config,o=t.trail,a=t.key,s=t.item;k.current.instances.has(a)||k.current.instances.set(a,new yt);var c=k.current.instances.get(a),y=u({},m,{to:r,from:n,config:i,ref:v,onRest:function(n){k.current.mounted&&(t.destroyed&&(v||l||Ot(k,a),d&&d(s)),!Array.from(k.current.instances).some((function(t){return!t[1].idle}))&&(v||l)&&k.current.deleted.length>0&&Ot(k),h&&h(s,e,n))},onStart:g&&function(){return g(s,e)},onFrame:p&&function(t){return p(s,e,t)},delay:o,reset:f&&"enter"===e});c.update(y),k.current.paused||c.start()})),(0,s.useEffect)((function(){return k.current.mounted=b.current=!0,function(){k.current.mounted=b.current=!1,Array.from(k.current.instances).map((function(t){return t[1].destroy()})),k.current.instances.clear()}}),[]),k.current.transitions.map((function(t){var e=t.item,n=t.slot,r=t.key;return{item:e,key:r,state:n,props:k.current.instances.get(r).getValues()}}))}function Ot(t,e){var n=function(){if(i){if(o>=r.length)return"break";a=r[o++]}else{if((o=r.next()).done)return"break";a=o.value}var n=a.key,u=function(t){return t.key!==n};(at.und(e)||e===n)&&(t.current.instances.delete(n),t.current.transitions=t.current.transitions.filter(u),t.current.deleted=t.current.deleted.filter(u))},r=t.current.deleted,i=Array.isArray(r),o=0;for(r=i?r:r[Symbol.iterator]();;){var a;if("break"===n())break}t.current.forceUpdate()}var Et=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].reduce((function(t,e){return t[e]=dt(e),t}),dt)}}]);
//# sourceMappingURL=3769-4c73cbee2e58b65e.js.map