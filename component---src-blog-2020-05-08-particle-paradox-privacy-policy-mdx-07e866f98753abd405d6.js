(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n("Fobl");function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},BdtC:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),o=n("qhky"),i=n("Wbzz");var c=function(e){var t=e.children,n=e.color,r=e.pageContext.header;return a.a.createElement(i.StaticQuery,{query:"3649515864",render:function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.b,{title:e.site.siteMetadata.title},a.a.createElement("html",{lang:"en"})),a.a.createElement("div",{className:"blogpage"},a.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),a.a.createElement("div",{className:"blogText"},a.a.createElement("h1",{title:r,color:n}),a.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("br",null),a.a.createElement("p",null,"Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts ",a.a.createElement("a",{href:"https://twitter.com/overjeer"},"on twitter")))))}})};t.a=function(e){return a.a.createElement(c,Object.assign({},e,{color:"#f9f9f9"}))}},DYNM:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return p}));var r=n("zLVn"),a=n("dI71"),o=n("q1tI"),i=n.n(o),c=n("6qfE"),l=n("BdtC"),u=["components"],s={},p=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=l.a,n}return Object(a.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(r.a)(e,u);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},s,n),components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t},"Privacy Policy - Particle Paradox"),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(c.MDXTag,{name:"p",components:t},"By using this game, the user agrees to abide by the privacy policy as described below."),i.a.createElement(c.MDXTag,{name:"p",components:t},"The manufacturer of this app does not collect, store or transmit any application or user data from the user's device to anywhere external to the device. The app also doesn't request any permissions to collect, store or transmit any application or user data at this stage, however in the future usage data may be recorded anonymously for measuring app performance. If any functionality that enables the manufacturer of this app to record any anonymous usage data is enabled, this privacy policy will be updated to include any such additions."),i.a.createElement(c.MDXTag,{name:"p",components:t},"In the case of 3rd party ads providers - any such providers may collect some personally identifiable information of the user in order to serve target ads to that particular user. This is not facilitated by the manufacturer of the app, but the 3rd party ads provider."))},t}(i.a.Component);p.isMDXComponent=!0},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=n("q1tI"),i=(r=o)&&r.__esModule?r:{default:r};var c=i.default.createContext({}),l=c.Provider,u=c.Consumer;t.withMDXComponents=function(e){return function(t){return i.default.createElement(u,null,(function(n){return i.default.createElement(e,a({},t,{components:t.components||n}))}))}};t.default=function(e){return i.default.createElement(l,{value:e.components},e.children)}},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n("q1tI"),c=(r=i)&&r.__esModule?r:{default:r},l=n("Fobl");function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},f=function(e){function t(){return u(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,r=e.props,o=void 0===r?{}:r,i=e.children,l=e.components,u=void 0===l?{}:l,s=e.Layout,f=e.layoutProps,d=u[n+"."+t]||u[t]||p[t]||t;return s?c.default.createElement(s,a({components:u},f),c.default.createElement(d,o,i)):c.default.createElement(d,o,i)}}]),t}(i.Component);t.default=(0,l.withMDXComponents)(f)}}]);
//# sourceMappingURL=component---src-blog-2020-05-08-particle-paradox-privacy-policy-mdx-07e866f98753abd405d6.js.map