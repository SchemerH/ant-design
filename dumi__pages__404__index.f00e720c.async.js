(self.webpackChunkantd=self.webpackChunkantd||[]).push([[3509],{674434:function(d,f,n){"use strict";Object.defineProperty(f,"__esModule",{value:!0}),f.default=void 0;const s=u(n(918781));function u(r){return r&&r.__esModule?r:{default:r}}const o=s;f.default=o,d.exports=o},929975:function(d,f,n){"use strict";n.r(f);var s=n(639389),u=n.n(s),o=n(385956),r=n(667294),g=n(216906),v=n(941346),y=n(373638),P=n(472638),O=n(785893),M={"docs/spec/download":"docs/resources","docs/spec/work-with-us":"docs/resources"},m=function(T){var L=T.router,I=(0,o.useLocation)(),a=I.pathname,c=y.KE(a);return(0,r.useEffect)(function(){for(var p=Object.keys(M),e=0;e<p.length;e+=1){var l=p[e];a.includes(l)&&L.replace(y.J1("/".concat(M[l]),c).pathname)}var i=window,x=i.yuyanMonitor;x==null||x.log({code:11,msg:"Page not found: ".concat(location.href,"; Source: ").concat(document.referrer)})},[]),(0,O.jsx)(g.ZP,{status:"404",title:"404",subTitle:c?"\u4F60\u8BBF\u95EE\u7684\u9875\u9762\u8C8C\u4F3C\u4E0D\u5B58\u5728\uFF1F":"Sorry, the page you visited does not exist.",extra:(0,O.jsx)(P.Z,{to:y.J1("/",c),children:(0,O.jsx)(v.ZP,{type:"primary",icon:(0,O.jsx)(s.HomeOutlined,{}),children:c?"\u8FD4\u56DE Ant Design \u9996\u9875":"Back to home page"})})})};f.default=m},373638:function(d,f,n){"use strict";n.d(f,{J1:function(){return M},Is:function(){return I},Fy:function(){return _},KE:function(){return O},qE:function(){return m}});var s=n(661227),u=n(805574),o=n(97857),r=n(385564),g=n(842348),v=typeof location!="undefined"&&location.hostname.includes(".antgroup.com"),y={categoryOrder:{"Ant Design":0,\u5168\u5C40\u6837\u5F0F:1,"Global Styles":1,\u8BBE\u8BA1\u6A21\u5F0F:2,"Design Patterns":2,"\u8BBE\u8BA1\u6A21\u5F0F - \u63A2\u7D22":3,"Design Patterns (Research)":3,Components:100,\u7EC4\u4EF6:100},typeOrder:{Overview:-1,General:0,Layout:1,Navigation:2,"Data Entry":3,"Data Display":4,Feedback:5,Other:6,Deprecated:7,\u7EC4\u4EF6\u603B\u89C8:-1,\u901A\u7528:0,\u5E03\u5C40:1,\u5BFC\u822A:2,\u6570\u636E\u5F55\u5165:3,\u6570\u636E\u5C55\u793A:4,\u53CD\u9988:5,\u5176\u4ED6:6,\u5E9F\u5F03:7,\u539F\u5219:1,Principles:1,\u5168\u5C40\u89C4\u5219:2,\u91CD\u578B\u7EC4\u4EF6:8,ProComponents:8,"Global Rules":2,\u6A21\u677F\u6587\u6863:3,"Template Document":3},docVersions:{"4.x":v?"https://4x-ant-design.antgroup.com":"https://4x.ant.design","3.x":"https://3x.ant.design","2.x":"https://2x.ant.design","1.x":"https://1x.ant.design","0.12.x":"https://012x.ant.design","0.11.x":"https://011x.ant.design","0.10.x":"https://010x.ant.design","0.9.x":"https://09x.ant.design"}};function P(a,c,p,e){var l=a.map(function(t){return t.meta}).filter(function(t){return!t.skip}),i=[],x=function(h,D){return(h.order||0)-(D.order||0)};l.sort(x).forEach(function(t){if(t.category&&(t.category=t.category[c]||t.category),t.type&&(t.type=t.type[c]||t.type),t!=null&&t.title&&(t.title=t.title[c]||t.title),!t.category){i.push(t);return}if(t.category==="Components"&&t.type){var h=i.find(function(E){return(E==null?void 0:E.title)===t.type});h||(h={type:"type",title:t.type,children:[],order:e[t.type]},i.push(h)),h.children=h.children||[],h.children.push(t);return}var D=i.find(function(E){return(E==null?void 0:E.title)===t.category});if(D||(D={type:"category",title:t.category,children:[],order:p[t.category]},i.push(D)),D.children=D.children||[],t.type){var A=D.children.filter(function(E){return(E==null?void 0:E.title)===t.type})[0];A||(A={type:"type",title:t.type,children:[],order:e[t.type]},D.children.push(A)),A.children=A.children||[],A.children.push(t)}else D.children.push(t)});function C(t){return t.sort(x).map(function(h){return h.children?_objectSpread(_objectSpread({},h),{},{children:C(h.children)}):h})}return C(i)}function O(a){return/-cn\/?$/.test(a)}function M(a,c,p,e){var l=a.startsWith("/")?a:"/".concat(a),i;if(c?l==="/"?i="/index-cn":l.endsWith("/")?i=l.replace(/\/$/,"-cn/"):(i="".concat(l,"-cn"),i=i.replace(/(-cn)+/,"-cn")):i=/\/?index-cn/.test(l)?"/":l.replace("-cn",""),e){var x=e[c?"zhCN":"enUS"];i+="#".concat(x)}return{pathname:i,search:p}}function m(a){var c="https://private-alipayobjects.alipay.com/alipay-rmsdeploy-image/rmsportal/RKuAiriJqrUhyqW.png",p=new Image,e,l=function(x){e||(e=!0,p.src="",a(x))};return p.onload=function(){return l("responded")},p.onerror=function(){return l("error")},p.src=c,setTimeout(function(){return l("timeout")},1500)}function _(){var a="test",c=window.localStorage;try{return c.setItem(a,"1"),c.removeItem(a),!0}catch(p){return!1}}function T(a){return new Promise(function(c,p){var e=document.createElement("script");e.type="text/javascript",e.src=a,e.onload=c,e.onerror=p,document.head.appendChild(e)})}function L(a){var c=["h1","h2","h3","p","img","a","code","strong"];if(!Array.isArray(a))return"";var p=flattenDeep(a.filter(function(e){if(Array.isArray(e)){var l=_slicedToArray(e,1),i=l[0];return i==="p"}return!1}).map(function(e){var l=flatten(e),i=_toArray(l),x=i[0],C=i.slice(1),t=C.filter(function(h){return typeof h=="string"&&!c.includes(h)}).join("");return[x,t]})).find(function(e){return e&&typeof e=="string"&&!c.includes(e)});return p}var I=function(){return y}},862488:function(d){function f(n,s){for(var u=-1,o=s.length,r=n.length;++u<o;)n[r+u]=s[u];return n}d.exports=f},121078:function(d,f,n){var s=n(862488),u=n(137285);function o(r,g,v,y,P){var O=-1,M=r.length;for(v||(v=u),P||(P=[]);++O<M;){var m=r[O];g>0&&v(m)?g>1?o(m,g-1,v,y,P):s(P,m):y||(P[P.length]=m)}return P}d.exports=o},909454:function(d,f,n){var s=n(644239),u=n(637005),o="[object Arguments]";function r(g){return u(g)&&s(g)==o}d.exports=r},137285:function(d,f,n){var s=n(562705),u=n(135694),o=n(701469),r=s?s.isConcatSpreadable:void 0;function g(v){return o(v)||u(v)||!!(r&&v&&v[r])}d.exports=g},385564:function(d,f,n){var s=n(121078);function u(o){var r=o==null?0:o.length;return r?s(o,1):[]}d.exports=u},842348:function(d,f,n){var s=n(121078),u=1/0;function o(r){var g=r==null?0:r.length;return g?s(r,u):[]}d.exports=o},135694:function(d,f,n){var s=n(909454),u=n(637005),o=Object.prototype,r=o.hasOwnProperty,g=o.propertyIsEnumerable,v=s(function(){return arguments}())?s:function(y){return u(y)&&r.call(y,"callee")&&!g.call(y,"callee")};d.exports=v}}]);
