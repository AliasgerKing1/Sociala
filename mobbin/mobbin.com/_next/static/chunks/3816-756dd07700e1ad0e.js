"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3816],{94752:function(e,t,n){n.d(t,{VY:function(){return L},fC:function(){return _},h_:function(){return F},xz:function(){return x}});var r=n(87462),o=n(67294),u=n(76652),c=n(32707),a=n(39920),i=n(17255),s=n(68496),l=n(60958),f=n(43216),d=n(40192),v=n(15019);let p;const h="HoverCard",[m,C]=(0,c.b)(h,[s.D7]),E=(0,s.D7)(),[g,b]=m(h),O=e=>{const{__scopeHoverCard:t,children:n,open:r,defaultOpen:u,onOpenChange:c,openDelay:i=700,closeDelay:l=300}=e,f=E(t),d=(0,o.useRef)(0),v=(0,o.useRef)(0),p=(0,o.useRef)(!1),h=(0,o.useRef)(!1),[m=!1,C]=(0,a.T)({prop:r,defaultProp:u,onChange:c}),b=(0,o.useCallback)((()=>{clearTimeout(v.current),d.current=window.setTimeout((()=>C(!0)),i)}),[i,C]),O=(0,o.useCallback)((()=>{clearTimeout(d.current),p.current||h.current||(v.current=window.setTimeout((()=>C(!1)),l))}),[l,C]),w=(0,o.useCallback)((()=>C(!1)),[C]);return(0,o.useEffect)((()=>()=>{clearTimeout(d.current),clearTimeout(v.current)}),[]),(0,o.createElement)(g,{scope:t,open:m,onOpenChange:C,onOpen:b,onClose:O,onDismiss:w,hasSelectionRef:p,isPointerDownOnContentRef:h},(0,o.createElement)(s.fC,f,n))},w="HoverCardTrigger",R=(0,o.forwardRef)(((e,t)=>{const{__scopeHoverCard:n,...c}=e,a=b(w,n),i=E(n);return(0,o.createElement)(s.ee,(0,r.Z)({asChild:!0},i),(0,o.createElement)(d.WV.a,(0,r.Z)({"data-state":a.open?"open":"closed"},c,{ref:t,onPointerEnter:(0,u.M)(e.onPointerEnter,D(a.onOpen)),onPointerLeave:(0,u.M)(e.onPointerLeave,D(a.onClose)),onFocus:(0,u.M)(e.onFocus,a.onOpen),onBlur:(0,u.M)(e.onBlur,a.onClose),onTouchStart:(0,u.M)(e.onTouchStart,(e=>e.preventDefault()))})))})),S="HoverCardPortal",[k,y]=m(S,{forceMount:void 0}),M=e=>{const{__scopeHoverCard:t,forceMount:n,children:r,container:u}=e,c=b(S,t);return(0,o.createElement)(k,{scope:t,forceMount:n},(0,o.createElement)(f.z,{present:n||c.open},(0,o.createElement)(l.h,{asChild:!0,container:u},r)))},T="HoverCardContent",P=(0,o.forwardRef)(((e,t)=>{const n=y(T,e.__scopeHoverCard),{forceMount:c=n.forceMount,...a}=e,i=b(T,e.__scopeHoverCard);return(0,o.createElement)(f.z,{present:c||i.open},(0,o.createElement)(z,(0,r.Z)({"data-state":i.open?"open":"closed"},a,{onPointerEnter:(0,u.M)(e.onPointerEnter,D(i.onOpen)),onPointerLeave:(0,u.M)(e.onPointerLeave,D(i.onClose)),ref:t})))})),z=(0,o.forwardRef)(((e,t)=>{const{__scopeHoverCard:n,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:l,onInteractOutside:f,...d}=e,h=b(T,n),m=E(n),C=(0,o.useRef)(null),g=(0,i.e)(t,C),[O,w]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{if(O){const e=document.body;return p=e.style.userSelect||e.style.webkitUserSelect,e.style.userSelect="none",e.style.webkitUserSelect="none",()=>{e.style.userSelect=p,e.style.webkitUserSelect=p}}}),[O]),(0,o.useEffect)((()=>{if(C.current){const e=()=>{w(!1),h.isPointerDownOnContentRef.current=!1,setTimeout((()=>{var e;""!==(null===(e=document.getSelection())||void 0===e?void 0:e.toString())&&(h.hasSelectionRef.current=!0)}))};return document.addEventListener("pointerup",e),()=>{document.removeEventListener("pointerup",e),h.hasSelectionRef.current=!1,h.isPointerDownOnContentRef.current=!1}}}),[h.isPointerDownOnContentRef,h.hasSelectionRef]),(0,o.useEffect)((()=>{if(C.current){(function(e){const t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP});for(;n.nextNode();)t.push(n.currentNode);return t})(C.current).forEach((e=>e.setAttribute("tabindex","-1")))}})),(0,o.createElement)(v.XB,{asChild:!0,disableOutsidePointerEvents:!1,onInteractOutside:f,onEscapeKeyDown:c,onPointerDownOutside:a,onFocusOutside:(0,u.M)(l,(e=>{e.preventDefault()})),onDismiss:h.onDismiss},(0,o.createElement)(s.VY,(0,r.Z)({},m,d,{onPointerDown:(0,u.M)(d.onPointerDown,(e=>{e.currentTarget.contains(e.target)&&w(!0),h.hasSelectionRef.current=!1,h.isPointerDownOnContentRef.current=!0})),ref:g,style:{...d.style,"--radix-hover-card-content-transform-origin":"var(--radix-popper-transform-origin)",userSelect:O?"text":void 0,WebkitUserSelect:O?"text":void 0}})))}));function D(e){return t=>"touch"===t.pointerType?void 0:e()}const _=O,x=R,F=M,L=P},78720:function(e,t,n){n.d(t,{o:function(){return m}});var r=n(67294);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}var u,c=["bottom","height","left","right","top","width"],a=new Map,i=function e(){var t=[];a.forEach((function(e,n){var r,o,u=n.getBoundingClientRect();r=u,o=e.rect,void 0===r&&(r={}),void 0===o&&(o={}),c.some((function(e){return r[e]!==o[e]}))&&(e.rect=u,t.push(e))})),t.forEach((function(e){e.callbacks.forEach((function(t){return t(e.rect)}))})),u=window.requestAnimationFrame(e)};var s="undefined"!==typeof window?r.useLayoutEffect:r.useEffect;function l(e){var t=r.useState(e.current),n=t[0],o=t[1],c=r.useReducer(f,null),l=c[0],d=c[1],v=r.useRef(!1);return s((function(){e.current!==n&&o(e.current)})),s((function(){if(n&&!v.current){v.current=!0;var e=n.getBoundingClientRect();d({rect:e})}}),[n]),r.useEffect((function(){if(n){var e,t,r=(e=n,t=function(e){d({rect:e})},{observe:function(){var n=0===a.size;a.has(e)?a.get(e).callbacks.push(t):a.set(e,{rect:void 0,hasRectChanged:!1,callbacks:[t]}),n&&i()},unobserve:function(){var n=a.get(e);if(n){var r=n.callbacks.indexOf(t);r>=0&&n.callbacks.splice(r,1),n.callbacks.length||a.delete(e),a.size||cancelAnimationFrame(u)}}});return r.observe(),function(){r.unobserve()}}}),[n]),l}function f(e,t){var n=t.rect;return e&&e.height===n.height&&e.width===n.width?e:n}var d=function(){return 50},v=function(e){return e},p=function(e,t){return e[t?"offsetWidth":"offsetHeight"]},h=function(e){for(var t=Math.max(e.start-e.overscan,0),n=Math.min(e.end+e.overscan,e.size-1),r=[],o=t;o<=n;o++)r.push(o);return r};function m(e){var t,n,u=e.size,c=void 0===u?0:u,a=e.estimateSize,i=void 0===a?d:a,f=e.overscan,m=void 0===f?1:f,E=e.paddingStart,g=void 0===E?0:E,b=e.paddingEnd,O=void 0===b?0:b,w=e.parentRef,R=e.horizontal,S=e.scrollToFn,k=e.useObserver,y=e.onScrollElement,M=e.scrollOffsetFn,T=e.keyExtractor,P=void 0===T?v:T,z=e.measureSize,D=void 0===z?p:z,_=e.rangeExtractor,x=void 0===_?h:_,F=R?"width":"height",L=R?"scrollLeft":"scrollTop",H=r.useRef({scrollOffset:0,measurements:[]}),N=((k||l)(w)||((t={})[F]=0,t))[F];H.current.outerSize=N;var I=r.useCallback((function(e){w.current&&(w.current[L]=e)}),[w,L]),A=S||I;S=r.useCallback((function(e){A(e,I)}),[I,A]);var B=r.useState({}),W=B[0],U=B[1],Z=r.useCallback((function(){return U({})}),[]),j=r.useRef([]),K=r.useMemo((function(){var e=j.current.length>0?Math.min.apply(Math,j.current):0;j.current=[];for(var t=H.current.measurements.slice(0,e),n=e;n<c;n++){var r=P(n),o=W[r],u=t[n-1]?t[n-1].end:g,a="number"===typeof o?o:i(n),s=u+a;t[n]={index:n,start:u,size:a,end:s,key:r}}return t}),[i,W,g,c,P]),V=((null==(n=K[c-1])?void 0:n.end)||0)+O;H.current.measurements=K,H.current.totalSize=V;var q=r.useState({start:0,end:0}),Y=q[0],X=q[1],G=y?y.current:w.current,J=r.useRef(M);J.current=M;var Q=r.useRef(null),$=r.useCallback((function(){null!==Q.current&&(clearTimeout(Q.current),Q.current=null)}),[]);s((function(){return Q.current=setTimeout((function(){X((function(e){return C(H.current,e)}))})),function(){return $()}}),[K,N,$]),s((function(){if(!G)return X({start:0,end:0}),void(H.current.scrollOffset=0);var e=function(e){var t=J.current?J.current(e):G[L];H.current.scrollOffset=t,$(),X((function(e){return C(H.current,e)}))};return e(),G.addEventListener("scroll",e,{capture:!1,passive:!0}),function(){G.removeEventListener("scroll",e)}}),[G,L,$]);var ee=r.useRef(D);ee.current=D;var te=r.useMemo((function(){for(var e=x({start:Y.start,end:Y.end,overscan:m,size:K.length}),t=[],n=function(n,r){var u=e[n],c=o(o({},K[u]),{},{measureRef:function(e){if(e){var t=ee.current(e,R);if(t!==c.size){var n=H.current.scrollOffset;c.start<n&&I(n+(t-c.size)),j.current.push(u),U((function(e){var n;return o(o({},e),{},((n={})[c.key]=t,n))}))}}}});t.push(c)},r=0,u=e.length;r<u;r++)n(r);return t}),[I,R,K,m,Y.end,Y.start,x]),ne=r.useRef();s((function(){ne.current&&i&&U({}),ne.current=!0}),[i]);var re=r.useCallback((function(e,t){var n=(void 0===t?{}:t).align,r=void 0===n?"start":n,o=H.current,u=o.scrollOffset,c=o.outerSize;"auto"===r&&(r=e<=u?"start":e>=u+c?"end":"start"),"start"===r?S(e):"end"===r?S(e-c):"center"===r&&S(e-c/2)}),[S]),oe=r.useCallback((function(e,t){var n=void 0===t?{}:t,r=n.align,u=void 0===r?"auto":r,a=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(n,["align"]),i=H.current,s=i.measurements,l=i.scrollOffset,f=i.outerSize,d=s[Math.max(0,Math.min(e,c-1))];if(d){if("auto"===u)if(d.end>=l+f)u="end";else{if(!(d.start<=l))return;u="start"}var v="center"===u?d.start+d.size/2:"end"===u?d.end:d.start;re(v,o({align:u},a))}}),[re,c]),ue=r.useCallback((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];oe.apply(void 0,t),requestAnimationFrame((function(){oe.apply(void 0,t)}))}),[oe]);return{virtualItems:te,totalSize:V,scrollToOffset:re,scrollToIndex:ue,measure:Z}}function C(e,t){for(var n=e.measurements,r=e.outerSize,o=e.scrollOffset,u=n.length-1,c=function(e,t,n,r){for(;e<=t;){var o=(e+t)/2|0,u=n(o);if(u<r)e=o+1;else{if(!(u>r))return o;t=o-1}}return e>0?e-1:0}(0,u,(function(e){return n[e].start}),o),a=c;a<u&&n[a].end<o+r;)a++;return t.start!==c||t.end!==a?{start:c,end:a}:t}}}]);
//# sourceMappingURL=3816-756dd07700e1ad0e.js.map