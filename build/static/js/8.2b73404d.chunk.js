(this.webpackJsonpdevice_management=this.webpackJsonpdevice_management||[]).push([[8],{367:function(e,t,n){"use strict";var a=n(58),c=n(0),r=n.n(c),l=n(27),i=n(213);t.a=function(e){var t=e.item,o=e.type,s=Object(c.useState)({src:(null===t||void 0===t?void 0:t.mainimagelink)||i,errored:!1}),m=Object(a.a)(s,2),u=m[0],d=m[1];Object(c.useEffect)((function(){d({src:(null===t||void 0===t?void 0:t.mainimagelink)||i,errored:!1})}),[t]),Object(c.useEffect)((function(){return function(){d({src:null,errored:!1})}}),[]);return r.a.createElement("div",{id:"item-notice"},r.a.createElement(l.a,{style:{width:"100%",display:"flex"},span:24},r.a.createElement("div",{className:"item-content"},r.a.createElement("div",{className:"top"},r.a.createElement("img",{src:u.src,onError:function(){u.errored?u.errored&&u.src&&d({src:null,errored:!0}):d({src:i,errored:!0})},style:"DETAILS"!==o?{height:146}:{}}),r.a.createElement("h3",{className:"f-16 mt-3 mb-4 line-clamp-1"},(null===t||void 0===t?void 0:t.title)||""),r.a.createElement("div",{className:"txt_con pb-4"},r.a.createElement("span",{className:"line-clamp-1 only-desktop"},("DETAILS"!==o?null===t||void 0===t?void 0:t.shortcontent:null===t||void 0===t?void 0:t.fullcontent)||""),"DETAILS"!==o&&r.a.createElement("span",{className:"only-mobile"},(null===t||void 0===t?void 0:t.fullcontent)||""))),r.a.createElement("div",{className:"bottom flex-center"},r.a.createElement("div",{className:"flex-center right"},r.a.createElement("img",{src:n(210)}),r.a.createElement("span",{className:"ml-2"},"\uad00\ub9ac\uc790")),r.a.createElement("div",{className:"left"},r.a.createElement("span",null,(null===t||void 0===t?void 0:t.dateConvert)||""))))))}},404:function(e,t,n){"use strict";n.r(t);var a=n(39),c=n.n(a),r=n(59),l=n(58),i=n(0),o=n.n(i),s=n(391),m=n(398),u=n(76),d=n(367),v=n(27);t.default=Object(u.b)((function(e){var t,n,a=e.common;return{rows:(null===a||void 0===a||null===(t=a.notices)||void 0===t?void 0:t.rows)||[],count:(null===a||void 0===a||null===(n=a.notices)||void 0===n?void 0:n.count)||0}}),(function(e){return{onGetDataNotices:e.common.onGetDataNotices}}))((function(e){var t=e.rows,n=e.count,a=e.onGetDataNotices,u=Object(i.useState)(1),f=Object(l.a)(u,2),p=f[0],E=f[1],b=Object(i.useState)(!1),h=Object(l.a)(b,2),N=h[0],g=h[1];Object(i.useEffect)((function(){j()}),[p]);var j=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,a({pageIndex:p}).then().catch();case 3:g(!1);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),x=t.map((function(e,t){return o.a.createElement("a",{href:"/notice/detail/".concat((null===e||void 0===e?void 0:e.id)||0),className:"__item",key:String(t)},o.a.createElement(d.a,{item:e,type:"LIST"}))}));return o.a.createElement(v.g,null,o.a.createElement("div",{id:"page-notice",className:" container-cst mt-5 pt-5"},o.a.createElement("div",{className:"notice-cont"},o.a.createElement(v.l,{name:"\uacf5\uc9c0\uc0ac\ud56d"}),o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("div",{className:"flex-center flex-wrap mt-6 group_"},t.length?x:o.a.createElement("span",{className:"no-data"},"\ub370\uc774\ud130 \uc5c6\uc74c")),o.a.createElement("div",{className:"loading flex-center spin ".concat(N?"":"__hidden-item"),style:{background:"#f4f0f02e"}},o.a.createElement(s.a,null)))),o.a.createElement(m.a,{className:"pt-2 pb-5 flex-center ".concat(n<=0?"__hidden-item":""),defaultPageSize:6,current:p,showSizeChanger:!1,total:n,responsive:!0,onChange:function(e){return E(e)}})))}))}}]);
//# sourceMappingURL=8.2b73404d.chunk.js.map