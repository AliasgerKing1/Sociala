"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1190],{24954:function(e,n,r){function t(e,n){if(null!==e)return"/screens/".concat(e).concat(n?"?fullpage=true":"")}r.d(n,{eN:function(){return t},ut:function(){return h},IQ:function(){return k}});var s=r(47568),o=r(34051),i=r.n(o),c=r(67294),a=r(31473),l=r(66308),p=r(10166),d=r(53334),u=r(38904),f=r(49981);function h(e){var n,r=e.screenId,t=e.source,o=e.screenType,h=void 0===o?"screen":o,x=(0,p.dO)(),g=(0,a.Ps)(),v=k(r,{enabled:!1}),j=(0,c.useCallback)((function(){return Promise.resolve(null!==(n=v.data)&&void 0!==n?n:v.refetch().then((function(e){return e.data}))).then((function(e){if(!e)throw Error("Invariant violation: screenInfoQuery must succeed.");return e}))}),[v]);return{downloadScreen:function(){x.invokeIfAllowed({intent:"download_screen",requires:"authentication",callbackToInvoke:(0,s.Z)(i().mark((function e(){var n,s,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l.aX.track("Screen Downloaded",{screen_id:r,source:t,screenType:h}),s=g.toastLoading({message:"Downloading screen..."}),e.next=5,j();case 5:return o=e.sent,e.next=8,(0,d.p$)({imageUrl:"fullpage"===h&&"string"===typeof(null===(n=o.appFullpageScreen)||void 0===n?void 0:n.url)?o.appFullpageScreen.url:o.screenUrl},"".concat(o.appVersion.app.appName," ").concat((0,f.w$)(o.appVersion.app.platform)," ").concat(o.screenNumber).concat("fullpage"===h?" (Full Page)":"")).then((function(){return s.resolveWithSuccess({message:"Downloaded screen!"})})).catch(s.resolveWithError);case 8:case"end":return e.stop()}}),e)})))})},copyScreen:function(){x.invokeIfAllowed({intent:"copy_screen",requires:"authentication",callbackToInvoke:(0,s.Z)(i().mark((function e(){var n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:l.aX.track("Screen Copied",{screen_id:r,source:t,screenType:h}),n=g.toastLoading({message:"Copying screen as PNG..."}),(0,d.mp)(j().then((function(e){var n;return{imageUrl:"fullpage"===h&&"string"===typeof(null===(n=e.appFullpageScreen)||void 0===n?void 0:n.url)?e.appFullpageScreen.url:e.screenUrl}}))).then((function(){return n.resolveWithSuccess({message:"Copied screen image to clipboard!"})})).catch(n.resolveWithError);case 3:case"end":return e.stop()}}),e)})))})},copyScreenLink:function(){l.aX.track("Screen Link Copied",{screen_id:r,source:t,screenType:h}),navigator.clipboard.writeText((0,u.w)("/screens/".concat(r).concat("fullpage"===h?"?fullpage=true":""))).then((function(){return g.toast({badge:"success",message:"Copied screen link to clipboard!"})}))}}}var x=r(59637),g=r(29815),v=r(88767),j=r(52816),m=r(79523),w=r(20506),y=["id","screenNumber","screenUrl"],_=["url"],C=["id","appName","platform"];function F(e){return I.apply(this,arguments)}function I(){return(I=(0,s.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,w.r)(m._m.from("app_screens").select("\n        ".concat(y.join(","),",\n        appFullpageScreen:app_fullpage_screens(\n          ").concat(_.join(","),"\n        ),\n        appVersion:app_versions(\n          app:apps(\n            ").concat(C.join(","),"\n          )\n        )\n      ")).eq("id",n).single()));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function k(e,n){return(0,v.useQuery)((0,j.j)(["apps","app_versions","app_screens","app_fullpage_screens"],"ScreenActionsDropdownMenuButton",e),(function(e){var n=(0,x.Z)(e.queryKey).slice(2);return F.apply(void 0,(0,g.Z)(n))}),n)}},3195:function(e,n,r){r.d(n,{b:function(){return v}});var t=r(85893),s=r(47562),o=r(83385),i=r(65927),c=r(80617),a=r(26042),l=r(69396);function p(e){return(0,t.jsxs)("svg",(0,l.Z)((0,a.Z)({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor",xmlns:"http://www.w3.org/2000/svg"},e),{children:[(0,t.jsx)("path",{d:"M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M13.9997 9.99996L10.6663 6.66663L3.33301 14",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}))}var d=r(52279),u=r(36138),f=r(41661),h=r(53334),x=r(76926),g=r(24954);function v(e){var n=e.screenId,r=e.onRemove,a=e.onOpenChange,l=e.tooltipSide,v=void 0===l?"top":l,j=e.intent,m=void 0===j?"secondary":j,w=e.large,y=e.source,_=e.screenType,C=(0,g.ut)({screenId:n,source:y,screenType:_});return(0,t.jsxs)(o.h_,{onOpenChange:function(e){null===a||void 0===a||a(e)},children:[(0,t.jsx)(o.$F,{children:(0,t.jsx)(i.u,{text:"Download & share",side:v,children:(0,t.jsx)(s.z,{icon:u.n,intent:m,large:w})})}),(0,t.jsx)(o.AW,{width:240,align:"end",children:(0,t.jsxs)(o.Qk,{children:[(0,t.jsx)(o.Xi,{icon:c._,onSelect:C.downloadScreen,children:"Download as PNG"}),(0,t.jsx)(i.u,{hide:(0,h.DH)(),text:h.jF,side:"left",align:"start",sideOffset:8,children:(0,t.jsx)(o.Xi,{icon:p,onSelect:C.copyScreen,disabled:!(0,h.DH)(),auxilliaryText:"screen_detail_more_menu"===y?"".concat(x.nl.Primary," C"):void 0,children:"Copy as PNG"})}),(0,t.jsx)(o.Xi,{icon:d.x,onSelect:C.copyScreenLink,children:"Copy screen link"}),r?(0,t.jsx)(o.Xi,{icon:f.X,onSelect:r,intent:"destructive",children:"Remove from collection"}):null]})})]})}},43371:function(e,n,r){r.d(n,{D:function(){return S}});var t=r(85893),s=r(26042),o=r(67294),i=r(23723);function c(e){return(0,t.jsx)(i.fC,(0,s.Z)({},e))}var a=r(69396),l=r(8336),p=o.forwardRef(d);function d(e,n){return(0,t.jsx)("div",(0,a.Z)((0,s.Z)({ref:n},e),{className:(0,l.A)("flex flex-col items-stretch rounded-8",!0!==e.nested&&"w-[180px]","bg-white shadow","select-none overflow-hidden"),children:e.children}))}function u(e){return(0,t.jsx)(i.Uv,{children:(0,t.jsx)(i.VY,{alignOffset:e.alignOffset,hideWhenDetached:!0,asChild:!0,children:(0,t.jsx)(p,{children:e.children})})})}function f(e){return(0,t.jsx)(i.ZA,{className:"flex flex-col items-stretch p-4",children:e.children})}var h=r(99534),x=r(31237),g=r(30846),v=o.forwardRef(j);function j(e,n){var r=(0,o.useRef)(null),i=(0,x.Y)(n,r),c={className:(0,l.A)("group","flex justify-center items-center","h-28 rounded-4 pl-8 gap-x-8","nested"in e&&!0===e.nested?"pr-4":"pr-8","cursor-pointer","data-highlighted:bg-gray-100 data-state-open:bg-gray-100","data-disabled:opacity-30 data-disabled:pointer-events-none"),children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("span",{className:(0,l.A)("flex-grow","truncate text-12 text-black"),children:e.children}),"nested"in e&&e.nested&&(0,t.jsx)(g.X,{className:"h-16 w-16 flex-shrink-0 self-center text-gray-200"}),"shortcutLabel"in e&&e.shortcutLabel&&(0,t.jsx)("span",{className:"self-center",children:e.shortcutLabel})]})};if("link"in e&&!0===e.link||"href"in e&&void 0!==e.href){var p={};if("link"in e){e.link;p=(0,h.Z)(e,["link"])}else"href"in e&&(p=e);return(0,t.jsx)("a",(0,a.Z)((0,s.Z)({},p,c),{ref:i}))}return(0,t.jsx)("div",(0,a.Z)((0,s.Z)({},e,c),{ref:i}))}function m(e){var n=e.onSelect,r=(0,h.Z)(e,["onSelect"]);return(0,t.jsx)(i.ck,{onSelect:function(e){!0!==r.disabled?(document.dispatchEvent(new KeyboardEvent("keydown",{key:"Escape"})),null===n||void 0===n||n(e)):e.preventDefault()},disabled:r.disabled,asChild:!0,children:(0,t.jsx)(v,(0,s.Z)({},r))})}function w(){return(0,t.jsx)(i.Z0,{className:"h-[1px] bg-gray-100"})}function y(e){return(0,t.jsx)(i.xz,{asChild:!0,children:e.children})}var _=r(84676),C=r(65927),F=r(53334),I=r(76926),k=r(24954);function S(e){var n=(0,k.ut)({screenId:e.screenId,source:e.source,screenType:e.screenType});return(0,t.jsxs)(c,{onOpenChange:e.onOpenChange,children:[(0,t.jsx)(y,{children:e.children}),(0,t.jsxs)(u,{children:[void 0!==e.onSelectOpenScreen&&void 0!==e.href?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(f,{children:[(0,t.jsx)(m,{onSelect:e.onSelectOpenScreen,children:"Open"}),(0,t.jsx)(m,{href:e.href,target:"_blank",rel:"noopener noreferrer",children:"Open in new tab"})]}),(0,t.jsx)(w,{})]}):null,(0,t.jsxs)(f,{children:[(0,t.jsx)(C.u,{hide:(0,F.DH)(),text:F.jF,side:"left",align:"start",children:(0,t.jsxs)(m,{onSelect:n.copyScreen,disabled:!(0,F.DH)(),shortcutLabel:"screen_detail_context_menu"===e.source?(0,t.jsx)(_.Y,{keys:[I.nl.Primary,"C"],variant:"minimal"}):void 0,children:["Copy ","fullpage"===e.screenType?"full page":"screen"]})}),(0,t.jsx)(m,{onSelect:n.downloadScreen,children:"Download as PNG"}),(0,t.jsx)(m,{onSelect:n.copyScreenLink,children:"Copy link"})]}),void 0!==e.onSelectRemoveFromCollection?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(w,{}),(0,t.jsx)(f,{children:(0,t.jsx)(m,{onSelect:e.onSelectRemoveFromCollection,children:"Remove from collection"})})]}):null]})]})}},69638:function(e,n,r){r.d(n,{S:function(){return u}});var t=r(85893),s=r(47562),o=r(65927),i=r(26042),c=r(69396);function a(e){return(0,t.jsxs)("svg",(0,c.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",stroke:"currentColor"},e),{children:[(0,t.jsxs)("g",{clipPath:"url(#clip0_12_294)",children:[(0,t.jsx)("path",{d:"M13.3333 6H7.33333C6.59695 6 6 6.59695 6 7.33333V13.3333C6 14.0697 6.59695 14.6667 7.33333 14.6667H13.3333C14.0697 14.6667 14.6667 14.0697 14.6667 13.3333V7.33333C14.6667 6.59695 14.0697 6 13.3333 6Z",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"}),(0,t.jsx)("path",{d:"M3.33398 9.99967H2.66732C2.3137 9.99967 1.97456 9.8592 1.72451 9.60915C1.47446 9.3591 1.33398 9.01996 1.33398 8.66634V2.66634C1.33398 2.31272 1.47446 1.97358 1.72451 1.72353C1.97456 1.47348 2.3137 1.33301 2.66732 1.33301H8.66732C9.02094 1.33301 9.36008 1.47348 9.61013 1.72353C9.86018 1.97358 10.0007 2.31272 10.0007 2.66634V3.33301",stroke:"currentColor",strokeWidth:"1.6",strokeLinecap:"round",strokeLinejoin:"round"})]}),(0,t.jsx)("defs",{children:(0,t.jsx)("clipPath",{id:"clip0_12_294",children:(0,t.jsx)("rect",{width:"16",height:"16",fill:"currentColor"})})})]}))}var l=r(53334),p=r(76926),d=r(24954);function u(e){var n=e.screenId,r=e.source,i=e.screenType,c=(0,d.ut)({screenId:n,source:r,screenType:i});return(0,t.jsx)(o.u,{text:(0,l.DH)()?"Copy screen to clipboard":l.jF,keys:(0,l.DH)()&&"screen_detail_cta_button"===r?[p.nl.Primary,"C"]:void 0,side:"bottom",align:"center",children:(0,t.jsx)(s.z,{intent:"highlight",icon:a,onClick:(0,l.DH)()?c.copyScreen:void 0,children:"Copy"})})}},61190:function(e,n,r){r.d(n,{Kh:function(){return h},FO:function(){return y},vf:function(){return F},Y$:function(){return T},jp:function(){return W},As:function(){return fe},np:function(){return Ve}});var t=r(85893),s=r(67294),o=r(8336),i=r(76926),c=r(24954),a=r(51438),l=r(28668),p=r(25892),d=r(76166),u=function(e){(0,l.Z)(r,e);var n=(0,d.Z)(r);function r(){return(0,a.Z)(this,r),n.call(this,"Developer Error: ScreenDetailContext not declared!")}return r}((0,p.Z)(Error)),f=(0,s.createContext)({get screenId(){throw new u},get platform(){throw new u},hasFullpage:!1,isFullpage:!1,setIsFullpage:function(e){throw new u},isInspectorOpen:!1,setIsInspectorOpen:function(e){throw new u}});function h(e){var n=e.children,r=e.screenId,a=e.platform,l=e.hasFullpage,p=e.isFullpage,d=e.setIsFullpage,u=e.isInspectorOpen,h=e.onIsInspectorOpenChange,x=(0,c.ut)({screenId:r,source:"screen_detail_keyboard_shortcut",screenType:l&&p?"fullpage":"screen"});(0,i.aL)(["mod+\\","mod+c"],(function(e,n){switch(n){case"mod+\\":h(!u);break;case"mod+c":x.copyScreen()}}));var g=(0,s.useState)(null),v=g[0],j=g[1];return(0,s.useEffect)((function(){null!==v&&v.scrollIntoView()}),[v,r]),(0,t.jsx)(f.Provider,{value:{screenId:r,platform:a,hasFullpage:l,isFullpage:p,setIsFullpage:d,isInspectorOpen:u,setIsInspectorOpen:h},children:(0,t.jsxs)("section",{className:"h-full overflow-y-auto",children:[(0,t.jsx)("div",{className:(0,o.A)("h-[1px]",l?"bg-white":"bg-[#e5e5e5]")}),(0,t.jsx)("div",{ref:j,className:(0,o.A)("grid h-full grid-cols-1",l&&p?"grid-rows-[1fr,auto]":"grid-rows-[calc(100%-50px),auto] min-720:grid-rows-[calc(100%-80px),auto]"),children:n}),(0,t.jsx)("div",{className:"h-[1px]"})]})})}var x=r(47562),g=r(65927),v=r(14795),j=r(87587),m=r(3195),w=r(69638);function y(e){var n=(0,s.useContext)(f),r="header"===e.variant?e.isInspectorOpen:n.isInspectorOpen,o="header"===e.variant?e.onIsInspectorOpenChange:n.setIsInspectorOpen,c="header"===e.variant?e.screenId:n.screenId,a="header"===e.variant?e.platform:n.platform,l=(0,j.gj)();return"footer"===e.variant?(0,t.jsxs)("div",{className:"grid grid-flow-col content-center justify-evenly gap-12 py-8 min-720:hidden",children:[(0,t.jsx)(j.GN,{align:"end",contentType:"screen",onSelectCollection:l({appScreenIds:[c],platform:a}),intent:"minimal",variant:"icon_only",large:!0}),(0,t.jsx)(g.u,{text:"".concat(r?"Close":"Open"," Inspector"),children:(0,t.jsx)(x.z,{pressed:r,intent:"minimal",icon:v.W,large:!0,onClick:function(){return o(!r)}})}),(0,t.jsx)(m.b,{screenId:c,intent:"minimal",large:!0,source:"screen_detail_more_menu",screenType:e.screenType})]}):(0,t.jsxs)("div",{className:"hidden grid-flow-col gap-12 min-720:grid",children:[(0,t.jsxs)("div",{className:"flex gap-x-8",children:[(0,t.jsx)(w.S,{screenId:c,source:"screen_detail_cta_button",screenType:e.screenType}),(0,t.jsx)(j.GN,{tooltipSide:"bottom",contentType:"screen",onSelectCollection:l({appScreenIds:[c],platform:a}),variant:"icon_only",intent:"secondary"}),(0,t.jsx)(m.b,{screenId:c,tooltipSide:"bottom",source:"screen_detail_more_menu",screenType:e.screenType})]}),(0,t.jsx)("div",{className:"h-36 w-[2px] bg-gray-100 py-8"}),(0,t.jsx)(g.u,{text:"".concat(r?"Close":"Open"," Inspector"),keys:[i.nl.Primary,"\\"],align:"end",side:"bottom",children:(0,t.jsx)(x.z,{pressed:r,intent:"minimal",icon:v.W,onClick:function(){return o(!r)}})})]})}var _=r(87079);function C(e){var n=e.onIsFullpageChange,r=e.isFullpage;return(0,i.aL)("f",(function(){n(!r)})),(0,t.jsx)(_.t$,{children:(0,t.jsx)("div",{className:"flex justify-center",children:(0,t.jsxs)(_.Tr,{children:[(0,t.jsx)(_.tW,{selected:!1===r,onClick:function(){return n(!1)},children:(0,t.jsx)(g.u,{text:"View screen",keys:"F",hide:!1===r,side:"bottom",sideOffset:12,children:"Screen"})}),(0,t.jsx)(_.tW,{selected:!0===r,onClick:function(){return n(!0)},children:(0,t.jsx)(g.u,{text:"View full page",keys:"F",hide:!0===r,side:"bottom",sideOffset:12,children:"Full Page"})})]})})})}function F(e){var n=e.children,r=(0,s.useContext)(f),i=r.hasFullpage,c=r.isFullpage,a=r.setIsFullpage;return(0,t.jsxs)("div",{className:(0,o.A)("grid grid-cols-1",i?c?"grid-rows-[52px,1fr]":"grid-rows-[52px,calc(100%-52px)]":"grid-rows-[100%]"),children:[i&&(0,t.jsx)("div",{className:"sticky top-0 bg-white",children:(0,t.jsx)(C,{isFullpage:c,onIsFullpageChange:a})}),n]})}var I=r(23450),k=r.n(I),S=r(10253),b=r(14197),N=r(2714),Z=r(10422);function P(e){var n=e.flows,r=e.app,o=(0,S.Z)((0,b.v1)("flow-modal"),2),i=o[0],c=o[1],a=(0,s.useRef)(0),l=(0,N.yd)({appPlatform:r.platform,itemCount:n.length,layout:"carousel",isLoading:!1});return(0,t.jsx)(N.$W,{disableVirtualization:!0,flowsGrid:l,flows:n,modalActiveFlowId:i,modalActiveFlowScreenIndex:a.current,onModalActiveFlowChange:function(e,n,r){a.current=n,c(e,{path:"string"===typeof e?"/flows/".concat(e):void 0},{push:"open"===r})},FlowCell:Z.t})}function T(e){var n=e.app,r=e.flows;return(0,t.jsxs)("section",{className:(0,o.A)("flex flex-col gap-20","border-t-2 border-gray-100 px-12 pt-24 pb-8","min-720:border-0 min-720:px-24 min-720:pt-28 min-720:pb-24"),children:[(0,t.jsx)("h2",{className:"text-center text-20 font-semibold",children:void 0===r?"Finding flows...":0===r.length?"Not found in any flows":"Found in ".concat(r.length," ").concat(k()("flow",r.length))}),void 0!==n&&void 0!==r&&r.length>0&&(0,t.jsx)(P,{app:n,flows:r})]})}var O=r(26042),V=r(69396),A=r(82196),L=r(11428),D=r(31516),E=r(18740),U=r(81931),M=r(43371);function H(e){var n=e.src,r=e.alt,i=e.onZoomOut,c=(0,L._C)(),a=(0,D.f)(),l=(0,s.useContext)(f),p=(0,s.useState)(!1),d=p[0],u=p[1];return(0,t.jsx)(M.D,{screenId:l.screenId,source:"screen_detail_context_menu",screenType:l.hasFullpage&&l.isFullpage?"fullpage":"screen",children:(0,t.jsxs)("div",{className:(0,o.A)("grid grid-cols-1 grid-rows-1 place-content-center py-36",l.hasFullpage&&l.isFullpage?"px-[60px] min-720:px-[160px]":"px-16 min-720:px-36",i&&"min-720:cursor-zoom-out"),onClick:i,children:[d&&(0,t.jsx)("div",{className:"col-start-1 row-start-1 grid h-[60vh] w-full place-content-center",children:(0,t.jsx)(A.i,{})}),(0,t.jsx)("img",(0,V.Z)((0,O.Z)({ref:function(e){if(e){u(!e.complete);var n=function(){u(!1),e.removeEventListener("load",n)};e.addEventListener("load",n)}}},(0,E.V)(n,a?{}:{width:U.Zi})),{className:(0,o.A)("col-start-1 row-start-1","h-full w-full object-contain",d&&"opacity-0"),alt:r,onClick:function(e){return c<720&&e.stopPropagation()}}))]})})}function W(e){var n=e.children,r=e.appName,o=e.imageUrl,i=e.imageFullpageUrl,c=e.onZoomOut,a=(0,s.useContext)(f),l=(0,s.useMemo)((function(){return!0===a.isFullpage&&null!==i&&void 0!==i?i:o}),[i,o,a.isFullpage]);return(0,t.jsxs)("div",{className:"grid grid-cols-[1fr,auto] grid-rows-1 bg-[#E5E5E5]",children:[(0,t.jsx)(H,{src:l,alt:"".concat(r," screen"),onZoomOut:c}),n]})}var z=r(68448),R=r(45640),X=r(24555),G=r(95254),q=r(99534),$=r(9369),B=r(24077);function Q(e){var n=(0,$.q)(e.appScreenId);if(!0!==(0,X.Z)().data)return null;if(!n.data)return(0,t.jsx)(R.s,{wide:!0,children:(0,t.jsx)("div",{className:"flex h-[40vh] grow items-end justify-center",children:(0,t.jsx)(A.i,{})})});var r=n.data,s=r.appVersion.app.platform,o=(0,q.Z)(r,["appVersion"]);return(0,t.jsx)(B.F,{appScreen:o,appPlatform:s})}var Y=r(29815),K=r(34850),J=r(76665),ee=r(74116),ne=r(73166),re=r(29785),te=r(11410),se=r(37275),oe=r(97948),ie=r(77530),ce=r(44235),ae=r(56611),le=r(49981),pe=r(36384);function de(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=ae.lh.apply(void 0,(0,Y.Z)(n));return new URLSearchParams("string"===typeof t?{filter:t}:[]).toString()}function ue(e){var n,r=e.uploadDate,o=e.screenElements,i=e.screenPatterns,c=e.pagePatterns,a=e.pageType,l=e.pageUrl,p=e.queryOnUrl,d=(0,ce.xT)(),u=(0,s.useContext)(f),h=i.filter((function(e){var n;return null===d||void 0===d||null===(n=d.screenPatterns)||void 0===n?void 0:n.has(e)})),x=o.filter((function(e){var n;return null===d||void 0===d||null===(n=d.screenElements)||void 0===n?void 0:n.has(e)})),g=null===c||void 0===c?void 0:c.filter((function(e){var n;return null===d||void 0===d||null===(n=d.pagePatterns)||void 0===n?void 0:n.has(e)})),v="string"===typeof a&&!0===(null===d||void 0===d||null===(n=d.pageTypes)||void 0===n?void 0:n.has(a))?a:void 0;return(0,t.jsxs)(J.lj,{children:[(0,t.jsxs)(J.vz,{children:[(0,t.jsx)(J.iF,{icon:te.v,children:"Platform"}),(0,t.jsx)(J.vM,{children:(0,t.jsx)("p",{className:"py-8 text-14",children:(0,le.w$)(u.platform)})})]}),h.length>0&&(0,t.jsxs)(J.vz,{children:[(0,t.jsx)(J.iF,{icon:se.p,children:"Screen Patterns"}),(0,t.jsx)(J.vM,{children:(0,t.jsx)("ul",{className:"flex flex-row flex-wrap gap-8 py-[6px]",children:h.map((function(e,n){return(0,t.jsx)("li",{children:(0,t.jsx)(pe.y,{text:e,href:"".concat(p,"?").concat(de([{category:"screenPatterns",value:e}])),intent:"apply_filter_for_screens"})},n)}))})})]}),g&&g.length>0&&(0,t.jsxs)(J.vz,{children:[(0,t.jsx)(J.iF,{icon:re.x,children:"Page Patterns"}),(0,t.jsx)(J.vM,{children:(0,t.jsx)("ul",{className:"flex flex-row flex-wrap gap-8 py-[6px]",children:g.map((function(e,n){return(0,t.jsx)("li",{children:(0,t.jsx)(pe.y,{text:e,href:"".concat(p,"?").concat(de([{category:"pagePatterns",value:e}])),intent:"apply_filter_for_screens"})},n)}))})})]}),x.length>0&&(0,t.jsxs)(J.vz,{children:[(0,t.jsx)(J.iF,{icon:ne.Z,children:"UI Elements"}),(0,t.jsx)(J.vM,{children:(0,t.jsx)("ul",{className:"flex flex-row flex-wrap gap-8 py-[6px]",children:x.map((function(e,n){return(0,t.jsx)("li",{children:(0,t.jsx)(pe.y,{text:e,href:"".concat(p,"?").concat(de([{category:"screenElements",value:e}])),intent:"apply_filter_for_screens"})},n)}))})})]}),"string"===typeof v&&(0,t.jsxs)(J.vz,{children:[(0,t.jsx)(J.iF,{icon:ie.G,children:"Page Type"}),(0,t.jsx)(J.vM,{children:(0,t.jsx)("p",{className:"py-8 text-14",children:v})})]}),"string"===typeof l&&(0,t.jsxs)(J.vz,{children:[(0,t.jsx)(J.iF,{icon:oe.H,children:"Page URL"}),(0,t.jsx)(J.vM,{children:(0,t.jsx)("a",{className:"truncate py-8 text-14 underline-offset-[3px] hover:underline",target:"_blank",href:l,rel:"noreferrer",children:l})})]}),(0,t.jsxs)(J.vz,{children:[(0,t.jsx)(J.iF,{icon:ee.I,children:"Upload Date"}),(0,t.jsx)(J.vM,{children:(0,t.jsx)("p",{className:"py-8 text-14",children:(0,K.Z)(new Date(r),"do MMMM yyyy")})})]})]})}function fe(e){var n=(0,L._C)(),r=(0,X.Z)(),o=(0,S.Z)((0,G.L)(),1)[0],i=(0,s.useContext)(f);return i.isInspectorOpen?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"hidden flex-shrink-0 flex-row min-720:flex",children:o&&!0===r.data?(0,t.jsx)(Q,{appScreenId:i.screenId}):(0,t.jsxs)(R.s,{children:[(0,t.jsx)(R.H,{children:"Properties"}),(0,t.jsx)(ue,(0,O.Z)({},e))]})}),(0,t.jsxs)(z.Vq,{open:n<720&&i.isInspectorOpen,onOpenChange:i.setIsInspectorOpen,children:[(0,t.jsx)(z.$N,{children:"Inspector"}),(0,t.jsxs)(z.a7,{noXPadding:!0,children:[(0,t.jsx)(ue,(0,O.Z)({},e)),(0,t.jsx)("div",{className:"h-36"})]})]})]}):null}var he=r(47568),xe=r(34051),ge=r.n(xe),ve=r(88767),je=r(89734),me=r.n(je),we=r(19086),ye=r(52816),_e=r(79523),Ce=r(20506),Fe=["id","screenElements","screenPatternsForAll","pagePatterns","pageType","updatedAt","screenUrl","pageUrl"],Ie=["url"],ke=["id","publishedAt"],Se=["id","appName","appLogoUrl","platform","appTagline"],be=["r","g","b","score"],Ne=["id","order","hotspotType","hotspotX","hotspotY","hotspotWidth","hotspotHeight"],Ze=["id","name","actions"],Pe=["screenUrl"],Te=["id","parentAppSectionId","order"];function Oe(){return(Oe=(0,he.Z)(ge().mark((function e(n){return ge().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,Ce.r)(_e._m.from("app_screens").select("\n          ".concat(Fe.join(","),",\n          appFullpageScreens:app_fullpage_screens(\n            ").concat(Ie.join(","),"\n          ),\n          appVersion:app_versions(\n            ").concat(ke.join(","),",\n            app:apps(\n              ").concat(Se.join(","),"\n            ),\n            appVersionFlows:app_sections!app_sections_appVersionId_fkey(\n              ").concat(Te.join(","),"\n            )\n          ),\n          appScreenFlows:app_section_screens(\n            ").concat(Ne.join(","),",\n            appFlow:app_sections(\n              ").concat(Ze.join(","),",\n              appFlowScreens:app_section_screens(\n                ").concat(Ne.join(","),",\n                appScreen:app_screens(").concat(Pe.join(","),")\n              )\n            )\n          ),\n          appScreenColors:app_screen_colors(\n            ").concat(be.join(","),"\n          )\n        ")).eq("id",n).order("score",{foreignTable:"app_screen_colors",ascending:!1}).limit(5,{foreignTable:"app_screen_colors"}).single()).then((function(e){var n=(0,we.XT)(e.appVersion.appVersionFlows,(function(e){return e.id}),(function(e){return e.parentAppSectionId}),(function(e){return e.order})),r=new Map(n.map((function(e,n){return[e.id,n]}))),t=me()(e.appScreenFlows,(function(e){return r.get(e.appFlow.id)})).map((function(n){return{id:n.appFlow.id,name:n.appFlow.name,actions:n.appFlow.actions,appId:e.appVersion.app.id,appVersionId:e.appVersion.id,appLogoUrl:e.appVersion.app.appLogoUrl,appName:e.appVersion.app.appName,platform:e.appVersion.app.platform,appVersionPublishedAt:e.appVersion.publishedAt,screens:me()(n.appFlow.appFlowScreens,(function(e){return e.order})).map((function(e){return(0,V.Z)((0,O.Z)({},e),{screenUrl:e.appScreen.screenUrl})}))}}));return(0,V.Z)((0,O.Z)({},e),{appVersion:(0,V.Z)((0,O.Z)({},e.appVersion),{appVersionFlows:n}),flows:t})}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ve(e,n){return(0,ve.useQuery)(function(e){return(0,ye.j)(["app_screens","app_versions","app_screen_colors","apps"],"/screens/_/useAppScreen",e)}(e),(function(e){var n=(0,S.Z)(e.queryKey,3)[2];if("string"!==typeof n)throw Error("Invariant Violation: App screen id must be present when invoking the query!");return function(e){return Oe.apply(this,arguments)}(n)}),{initialData:null===n||void 0===n?void 0:n.initialData,enabled:"string"===typeof e&&!1!==(null===n||void 0===n?void 0:n.enabled)})}},10422:function(e,n,r){r.d(n,{t:function(){return d}});var t=r(26042),s=r(69396),o=r(85893),i=r(67294),c=r(87587),a=r(65765),l=r(38050),p=r(98192),d=i.forwardRef((function(e,n){var r=(0,i.useState)(!1),d=r[0],u=r[1],f=(0,c.VQ)();return!0===e.loading?(0,o.jsx)(l.AG,(0,t.Z)({},e)):(0,o.jsx)(l.AG,(0,s.Z)((0,t.Z)({},e),{ref:n,flowNamePreposition:"from",flowNameSuffix:e.parent?(0,o.jsx)("button",{className:"peer z-10 truncate font-semibold text-black underline-offset-[5px] hover:underline",onClick:function(n){n.preventDefault(),n.stopPropagation(),e.parent&&e.scrollToFlow(e.parent.id)},children:e.parent.name}):null,displayActionButtons:d,actionButtons:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(p.i,{flowId:e.flowId}),(0,o.jsx)(c.GN,{align:"end",contentType:"flow",onSelectCollection:f({appFlowIds:[e.flowId],platform:e.appPlatform}),onOpenChange:u,variant:"icon_only",intent:"secondary"}),(0,o.jsx)(a.B,{flowId:e.flowId,onOpenChange:u})]})}))}))}}]);
//# sourceMappingURL=1190-550ee4f3a7bb0dde.js.map