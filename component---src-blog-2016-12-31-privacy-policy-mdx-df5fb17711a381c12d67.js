(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return a(r).default}});var o=n("Fobl");function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return a(o).default}})},BdtC:function(e,t,n){"use strict";var r=n("q1tI"),o=n.n(r),a=n("qhky"),i=n("Wbzz");var c=function(e){var t=e.children,n=e.color,r=e.pageContext.header;return o.a.createElement(i.StaticQuery,{query:"3649515864",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(a.b,{title:e.site.siteMetadata.title},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:"blogpage"},o.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),o.a.createElement("div",{className:"blogText"},o.a.createElement("h1",{title:r,color:n}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts! ",o.a.createElement("a",{href:"https://twitter.com/overjeer"},"tweet to me")," on the ol' Twitter!"))))}})};t.a=function(e){return o.a.createElement(c,Object.assign({},e,{color:"#f9f9f9"}))}},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n("q1tI"),i=(r=a)&&r.__esModule?r:{default:r};var c=i.default.createContext({}),s=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(l,null,(function(n){return i.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return i.default.createElement(s,{value:e.components},e.children)}},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),c=(r=i)&&r.__esModule?r:{default:r},s=n("Fobl");function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,a=void 0===r?{}:r,i=e.children,s=e.components,l=void 0===s?{}:s,u=e.Layout,f=e.layoutProps,m=l[n+"."+t]||l[t]||p[t]||t;return u?c.default.createElement(u,o({components:l},f),c.default.createElement(m,a,i)):c.default.createElement(m,a,i)}}]),t}(i.Component);t.default=(0,s.withMDXComponents)(f)},gYPs:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("zLVn"),o=n("dI71"),a=n("q1tI"),i=n.n(a),c=n("6qfE"),s=n("BdtC"),l=["components"],u={},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=s.a,n}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(r.a)(e,l);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,n),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Privacy Policy"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(c.MDXTag,{name:"p",components:t},"By logging in to this app, the user agrees to abide by the privacy policy of this app."),i.a.createElement(c.MDXTag,{name:"p",components:t},"This app collects, stores and transmits phone contacts' data and all fields that are relevant to this information. However, the collection, transmission and storage of this information is not accessible by any entity outside of the user of this app. This app also utilises the user's Dropbox account to store the user's phone contacts' data, but again this data is only ever accessed by the user when data backup and restoration transactions occur between the user's phone and the user's Dropbox account during the usage of this app."),i.a.createElement(c.MDXTag,{name:"p",components:t},"No information is collected by the manufacturer of this app from the user's phone, no information is collected, transmitted or provided to any third parties in the process of the usage of this app by the user."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The manufacturer of this app will always endeavour to notify the users of this app when any changes are made to this privacy policy."))},t}(i.a.Component);p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-blog-2016-12-31-privacy-policy-mdx-df5fb17711a381c12d67.js.map