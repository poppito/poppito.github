(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n("Fobl");function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},BdtC:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");var c=function(e){var t=e.children,n=e.color,r=e.pageContext.header;return a.a.createElement(i.StaticQuery,{query:"3649515864",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.b,{title:e.site.siteMetadata.title},a.a.createElement("html",{lang:"en"})),a.a.createElement("div",{className:"blogpage"},a.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),a.a.createElement("div",{className:"blogText"},a.a.createElement("h1",{title:r,color:n}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("p",null,"Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts ",a.a.createElement("a",{href:"https://twitter.com/overjeer"},"on twitter")))))}})};t.a=function(e){return a.a.createElement(c,Object.assign({},e,{color:"#f9f9f9"}))}},DHpn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("zLVn"),a=n("dI71"),o=n("q1tI"),i=n.n(o),c=n("6qfE"),u=n("BdtC"),l=["components"],s={},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=u.a,n}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(r.a)(e,l);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,n),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Privacy Policy Strayamate Lite"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(c.MDXTag,{name:"p",components:t},"By using  this app, the user agrees to abide by the privacy policy as described below."),i.a.createElement(c.MDXTag,{name:"p",components:t},"This app uses requests push notification permissions and uses non-identifiable user data to send out push notifications if the user opts-in to receive them. These push notifications are a part of app functionality."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The app doesn't request any other permissions to collect, store or transmit any user data, however it leverages 3rd party providers to collect and measure app usage and performance information."),i.a.createElement(c.MDXTag,{name:"p",components:t},"In the case of 3rd party ads providers - any such providers may collect some personally identifiable information of the user in order to serve ads that are appropriate to that particular user. This is not facilitated by the manufacturer of the app, but the 3rd party ads provider."))},t}(i.a.Component);p.isMDXComponent=!0},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n("q1tI"),i=(r=o)&&r.__esModule?r:{default:r};var c=i.default.createContext({}),u=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(l,null,(function(n){return i.default.createElement(e,a({},t,{components:t.components||n}))}))}};t.default=function(e){return i.default.createElement(u,{value:e.components},e.children)}},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),c=(r=i)&&r.__esModule?r:{default:r},u=n("Fobl");function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return l(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,i=e.children,u=e.components,l=void 0===u?{}:u,s=e.Layout,f=e.layoutProps,m=l[n+"."+t]||l[t]||p[t]||t;return s?c.default.createElement(s,a({components:l},f),c.default.createElement(m,o,i)):c.default.createElement(m,o,i)}}]),t}(i.Component);t.default=(0,u.withMDXComponents)(f)}}]);
//# sourceMappingURL=component---src-blog-2019-01-30-strayamate-lite-mdx-1468ca4a5bea1ba2ac53.js.map