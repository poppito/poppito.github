(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n("Fobl");function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},BdtC:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("qhky"),i=n("Wbzz");var c=function(e){var t=e.children,n=e.color,a=e.pageContext.header;return o.a.createElement(i.StaticQuery,{query:"3649515864",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.b,{title:e.site.siteMetadata.title},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:"blogpage"},o.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),o.a.createElement("div",{className:"blogText"},o.a.createElement("h1",{title:a,color:n}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t)))}})};t.a=function(e){return o.a.createElement(c,Object.assign({},e,{color:"#f9f9f9"}))}},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n("q1tI"),i=(a=r)&&a.__esModule?a:{default:a};var c=i.default.createContext({}),s=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(l,null,(function(n){return i.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return i.default.createElement(s,{value:e.components},e.children)}},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=n("q1tI"),c=(a=i)&&a.__esModule?a:{default:a},s=n("Fobl");function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,r=void 0===a?{}:a,i=e.children,s=e.components,l=void 0===s?{}:s,u=e.Layout,f=e.layoutProps,d=l[n+"."+t]||l[t]||p[t]||t;return u?c.default.createElement(u,o({components:l},f),c.default.createElement(d,r,i)):c.default.createElement(d,r,i)}}]),t}(i.Component);t.default=(0,s.withMDXComponents)(f)},gYPs:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var a=n("zLVn"),o=n("dI71"),r=n("q1tI"),i=n.n(r),c=n("6qfE"),s=n("BdtC"),l=["components"],u={},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=s.a,n}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(a.a)(e,l);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},u,n),components:t},i.a.createElement("div",{className:"blogpage"},i.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),i.a.createElement("div",{className:"blogText"},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Privacy Policy"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(c.MDXTag,{name:"p",components:t},"By logging in to this app, the user agrees to abide by the privacy policy of this app."),i.a.createElement(c.MDXTag,{name:"p",components:t},"This app collects, stores and transmits phone contacts' data and all fields that are relevant to this information. However, the collection, transmission and storage of this information is not accessible by any entity outside of the user of this app. This app also utilises the user's Dropbox account to store the user's phone contacts' data, but again this data is only ever accessed by the user when data backup and restoration transactions occur between the user's phone and the user's Dropbox account during the usage of this app."),i.a.createElement(c.MDXTag,{name:"p",components:t},"No information is collected by the manufacturer of this app from the user's phone, no information is collected, transmitted or provided to any third parties in the process of the usage of this app by the user."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The manufacturer of this app will always endeavour to notify the users of this app when any changes are made to this privacy policy.")))},t}(i.a.Component);p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-blog-2016-12-31-privacy-policy-mdx-3163674a9f6b7ea392e0.js.map