"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3505],{78658:function(e,n,r){r.d(n,{d:function(){return H}});var t=r(47568),a=r(26042),i=r(34051),o=r.n(i),s=r(85893),l=r(67294),p=r(34850),c=r(75472),d=r.n(c),u=r(23450),f=r.n(u),m=r(47562),h=r(83385),g=r(31473),x=r(65927),w=r(80617),v=r(52279),j=r(36138),y=r(41661),N=r(66308),b=r(42839),P=r(10166),C=r(53334),k=r(38904),A=r(69396),I=r(59637),Z=r(29815),S=r(88767),U=r(89734),_=r.n(U),D=r(52816),O=r(79523),R=r(20506),L=["id","appName","platform"],G=["id","createdAt"],V=["screenNumber","screenUrl"];function q(e){return T.apply(this,arguments)}function T(){return(T=(0,t.Z)(o().mark((function e(n){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,R.r)(O._m.from("apps").select("\n        ".concat(L.join(","),",\n        appVersions:app_versions(\n          ").concat(G.join(","),",\n          appScreens:app_screens(\n            ").concat(V.join(","),"\n          )\n        )\n      ")).eq("id",n).single()).then((function(e){return(0,A.Z)((0,a.Z)({},e),{appVersions:e.appVersions.map((function(e){return(0,A.Z)((0,a.Z)({},e),{appScreens:_()(e.appScreens,(function(e){return e.screenNumber}))})}))})})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function z(e,n){return(0,S.useQuery)((0,D.j)(["apps","app_versions","app_screens"],"AppActionsDropdownMenuButton",e),(function(e){var n=(0,I.Z)(e.queryKey).slice(2);return q.apply(void 0,(0,Z.Z)(n))}),n)}function H(e){var n=e.appId,r=e.appName,i=e.appPlatform,c=e.onRemove,u=e.onOpenChange,A=e.large,I=void 0!==A&&A,Z=(0,P.dO)(),S=(0,g.Ps)(),U=(0,l.useState)(!1),_=U[0],D=U[1],O=z(n,{enabled:_});function R(){return R=(0,t.Z)(o().mark((function e(n){var r,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n.formattedDate,a=n.app,i=n.appScreens,Z.invokeIfAllowed({intent:"download_screens_from_app_version",requires:"membership",callbackToInvoke:(0,t.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=S.toastLoading({message:"Downloading ".concat(i.length," app ").concat(f()("screen",i.length),"...")}),e.next=3,(0,C.uv)(i.map((function(e){return{imageUrl:e.screenUrl}})),"".concat(a.appName," ").concat(a.platform," ").concat(r)).then((function(){return n.resolveWithSuccess({message:"Downloaded ".concat(i.length," app ").concat(f()("screen",i.length),"!")})})).catch(n.resolveWithError);case 3:case"end":return e.stop()}}),e)})))});case 2:case"end":return e.stop()}}),e)}))),R.apply(this,arguments)}return(0,s.jsxs)(h.h_,{onOpenChange:function(e){D(!0),null===u||void 0===u||u(e)},children:[(0,s.jsx)(h.$F,{children:(0,s.jsx)(x.u,{text:"Download & Share",side:"top",children:(0,s.jsx)(m.z,{icon:j.n,intent:"secondary",large:I})})}),(0,s.jsx)(h.AW,{width:240,align:"end",children:(0,s.jsxs)(h.Qk,{children:[(0,s.jsxs)(h.Ph,{children:[(0,s.jsx)(h.kt,{icon:w._,children:"Download all screens"}),(0,s.jsx)(h.TG,{width:120,children:(0,s.jsx)(h.Qk,{children:O.data?d()(O.data.appVersions.map((function(e){var n=new Date(e.createdAt);return(0,a.Z)({formattedDate:(0,p.Z)(n,"MMM yyyy"),dateValue:n.valueOf()},e)})),"dateValue","desc").map((function(e){var n=e.formattedDate,r=e.id,t=e.appScreens;return(0,s.jsx)(h.Xi,{onSelect:function(){return function(e){return R.apply(this,arguments)}({formattedDate:n,app:O.data,appScreens:t})},children:n},r)})):(0,s.jsx)(h.Ju,{children:"Loading..."})})})]}),(0,s.jsx)(h.Xi,{icon:v.x,onSelect:function(){N.aX.track("App Link Copied",{app_id:n}),navigator.clipboard.writeText((0,k.w)("/apps/".concat((0,b.P)({id:n,name:r,platform:i})))).then((function(){return S.toast({badge:"success",message:"Copied app link to clipboard!"})})).catch(S.toastError)},children:"Copy app link"}),c?(0,s.jsx)(h.Xi,{icon:y.X,onSelect:c,intent:"destructive",children:"Remove from collection"}):null]})})]})}},91103:function(e,n,r){r.d(n,{j$:function(){return g},sd:function(){return w},Dd:function(){return v}});var t=r(26042),a=r(99534),i=r(85893),o=r(41664),s=r.n(o),l=r(27229),p=r(65023),c=r(8336),d=r(66308),u=r(93927),f=r(81931),m=212/458.79;function h(e){var n=e.appPlatform,r=(0,a.Z)(e,["appPlatform"]),t=(0,u.P)(n),o=!0!==r.loading&&r.previewScreenUrls||Array.from({length:"web"===n?4:3},(function(){return""}));return(0,i.jsx)("div",{className:(0,c.A)("grid","web"===n?"grid-cols-1 grid-rows-[auto] gap-16 min-720:grid-cols-2 min-720:grid-rows-2":"grid-cols-3 gap-12 min-720:gap-16"),children:o.map((function(e,a){return(0,i.jsx)("div",{className:(0,c.A)("web"===n&&a>0&&"hidden min-720:block"),children:(0,i.jsx)(l.f,{ratio:"web"===n?1.6:m,className:"overflow-hidden bg-gray-100 shadow-screen",style:t.screenStyle,ref:0===a?t.screenRef:void 0,children:!0!==r.loading&&e&&(0,i.jsx)("img",{src:(0,f.UH)(e,"web"===n?{width:1920,quality:100}:{}),alt:"".concat(r.appName," screen"),className:"h-full w-full"})})},a)}))})}function g(e){var n=e.appPlatform,r=e.titleContent,o=e.actionButtons,u=e.displayActionButtons,f=(0,a.Z)(e,["appPlatform","titleContent","actionButtons","displayActionButtons"]),m=(0,c.A)("peer","after:absolute after:-top-12 after:-left-12 after:-right-12 after:-bottom-12","after:z-10","after:rounded-28","focus-visible:after:ring-4 focus-visible:after:ring-blue-200/50 after:ring-inset"),g=(0,i.jsx)("div",{className:(0,c.A)("hidden","z-20","flex-shrink-0 flex-row min-720:flex",f.iconOnly?"gap-x-8":"gap-x-12","sr-only","focus-within:not-sr-only","group-hover:not-sr-only","peer-hover:not-sr-only peer-focus:not-sr-only",!0===u&&"!not-sr-only"),children:o});return f.iconOnly?(0,i.jsxs)("div",{className:"group relative flex flex-col items-stretch",children:[(0,i.jsx)(l.f,{ratio:1,children:(0,i.jsx)(p.G,(0,t.Z)({appPlatform:n,size:"auto"},!0===f.loading?{loading:!0}:{appName:f.appName,imageUrl:f.appLogoUrl}))}),(0,i.jsx)("div",{className:"mt-24 h-[60px]",children:!0!==f.loading&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:"mb-4 flex h-32 flex-row items-center justify-between gap-x-16",children:[(0,i.jsx)(s(),{href:f.appUrl,children:(0,i.jsx)("a",{className:(0,c.A)(m,"min-w-0 flex-shrink flex-grow","truncate text-left text-24 font-bold"),children:f.appName})}),g]}),(0,i.jsx)("div",{className:"truncate text-16 text-gray-200",children:f.appTagline})]})})]}):(0,i.jsxs)("div",{className:"group relative flex flex-col gap-y-16 min-720:gap-y-20",children:[(0,i.jsxs)("div",{className:"flex flex-row items-center justify-start gap-x-16",children:[(0,i.jsx)(p.G,(0,t.Z)({appPlatform:n,size:"medium"},!0===f.loading?{loading:!0}:{appName:f.appName,imageUrl:f.appLogoUrl})),!0!==f.loading&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s(),{href:f.appUrl,children:(0,i.jsxs)("a",{className:(0,c.A)(m,"min-w-0 flex-shrink flex-grow","grid grid-cols-[auto,auto,1fr] grid-rows-[auto,auto] items-center justify-center","gap-x-12 gap-y-4","text-left text-24"),onClick:function(){return d.aX.track("App Cell Clicked",{app_id:f.appId})},children:[(0,i.jsx)("span",{className:"truncate text-24 font-bold min-720:group-hover:underline",children:f.appName}),(0,i.jsx)("span",{className:"inline-flex items-center truncate",children:r}),(0,i.jsx)("span",{className:"col-span-full row-start-2 truncate text-16 text-gray-200",children:f.appTagline})]})}),g]})]}),(0,i.jsx)(h,(0,t.Z)({appPlatform:n},!0===f.loading?{loading:!0}:{appName:f.appName,previewScreenUrls:f.previewScreenUrls}))]})}var x=r(11428),w=719;function v(e){var n,r=e.isIconOnly,t=e.appPlatform,a=e.contentWidth,i=(0,x._C)()<720,o=function(e,n){return n?e<720?2:e<1200?4:e<1430?5:e<1650?6:e<1870?7:8:e<720?1:e<1650?2:3}(a,r),s=(a-24*(o-1))/o;if(r)n=s+24+32+4+24;else{var l="web"===t?i?1:2:3,p="web"===t?i?1:2:1,c=i?12:16;n=64+(i?16:20)+p*((s-(l-1)*c)/l/("web"===t?1.6:m))+(p-1)*c}return{itemsPerRow:o,gridGap:24,rowHeight:n,width:a}}r(34051),r(88767),r(52513),r(29613),r(24139),r(79523),r(20506)},29558:function(e,n,r){r.d(n,{x3:function(){return m},up:function(){return x}});var t=r(26042),a=r(29815),i=r(85893),o=r(306),s=r(42839),l=r(67238),p=r(86563),c=r(65927);function d(e){var n=e.app,r="string"===typeof n.appVersionPublishedAt?(0,l.Z)(new Date(n.appVersionPublishedAt),new Date,{weekStartsOn:1}):null;return!0===r&&(0,l.Z)(new Date(n.appVersionUpdatedAt),new Date(n.createdAt),{weekStartsOn:1})?(0,i.jsx)(p.C,{color:"green",large:!0,children:"New Upload"}):!0===r?(0,i.jsx)(p.C,{color:"blue",large:!0,children:"Version Update"}):null===r?(0,i.jsx)(c.u,{text:"App\u2019s latest version is not published",side:"right",children:(0,i.jsx)("span",{className:"relative z-40 ml-8 inline-block h-16 w-16 rounded-full bg-[#ffbe31]"})}):null}var u=r(91103);function f(e){return(0,i.jsx)(u.j$,(0,t.Z)({},e))}function m(e){var n=e.apps,r=e.AppCell,l=void 0===r?f:r,p=e.appsGrid,c=(0,o.C)({itemsCount:p.clampedItemCount,itemsPerRow:p.itemsPerRow,rowHeight:p.rowHeight,gridGap:p.gridGap});return(0,i.jsx)("div",{ref:p.gridContainerRef,className:"pb-24",children:(0,i.jsx)("div",{ref:c.gridRef,style:(0,t.Z)({width:p.width||void 0},c.style),children:!0===p.isLoading?Array.from({length:p.clampedItemCount}).slice(c.startIndex,c.endIndex).map((function(e,n){return(0,i.jsx)(l,{appPlatform:p.appPlatform,iconOnly:p.isIconOnly,loading:!0},"loading-".concat(c.startIndex+n))})):n.slice(c.startIndex,c.endIndex).map((function(e){var n="web"===p.appPlatform?4:3,r=e.previewScreenUrls;return r.length<n&&(r=(0,a.Z)(r).concat((0,a.Z)(Array(4).fill("/preview-screen-placeholder.png"))).slice(0,n)),(0,i.jsx)(l,{appId:e.id,appPlatform:e.platform,iconOnly:p.isIconOnly,titleContent:(0,i.jsx)(d,{app:e}),selectableId:e.selectableId,appUrl:"/apps/".concat((0,s.P)({name:e.appName,id:e.id,platform:e.platform}),"/_/screens"),appName:e.appName,appTagline:e.appTagline,appLogoUrl:e.appLogoUrl,previewScreenUrls:r},e.id)}))})})}var h=r(78479);function g(e){var n=e.onStartANewSearch;return(0,i.jsx)("div",{className:"flex grow items-center justify-center py-80",children:(0,i.jsxs)(h.qx,{children:[(0,i.jsx)(h.eq,{children:"No apps found"}),(0,i.jsx)(h.Dl,{children:"We couldn't find any apps matching your query. Try another query."}),n&&(0,i.jsx)(h.Ij,{onClick:n,children:"Start a new search"})]})})}function x(e){return 0===e.apps.length&&!0!==e.appsGrid.isLoading?(0,i.jsx)(g,(0,t.Z)({},e)):(0,i.jsx)(m,(0,t.Z)({},e))}},98472:function(e,n,r){r.d(n,{n:function(){return o}});var t=r(48326),a=r(22316),i=r(91103);function o(e){var n=(0,a.R)(i.sd),r=(0,i.Dd)({contentWidth:n.width,appPlatform:e.appPlatform,isIconOnly:e.isIconOnly}),o=(0,t.K)({itemsPerRow:r.itemsPerRow,itemCount:e.itemCount,isLoading:e.isLoading,hasNextPage:e.hasNextPage,shouldClamp:e.shouldClamp});return{gridContainerRef:n.ref,width:r.width,itemsPerRow:r.itemsPerRow,rowHeight:r.rowHeight,gridGap:r.gridGap,clampedItemCount:o.clampedItemCount,wasClamped:o.wasClamped,appPlatform:e.appPlatform,isIconOnly:e.isIconOnly,isLoading:e.isLoading}}}}]);
//# sourceMappingURL=3505-5b0a651a38861bfa.js.map