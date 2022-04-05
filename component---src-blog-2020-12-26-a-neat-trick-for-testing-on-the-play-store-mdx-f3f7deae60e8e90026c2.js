(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"/C7o":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return P}));var a=n("zLVn"),o=n("dI71"),r=n("q1tI"),s=n.n(r),c=n("6qfE"),i=n("/L/l"),l=n.n(i),u=n("v/2Y"),p=n.n(u),m=n("tihU"),d=n.n(m),h=n("zhaC"),f=n.n(h),b=n("Jvu+"),g=n.n(b),y=n("PqdT"),E=n.n(y),w=n("JTjF"),v=n.n(w),_=n("BdtC"),M=["components"],T={},P=function(e){function t(t){var n;return(n=e.call(this,t)||this).layout=_.a,n}return Object(o.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.components,n=Object(a.a)(e,M);return s.a.createElement(c.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},T,n),components:t},s.a.createElement(c.MDXTag,{name:"h1",components:t},"A neat trick for testing on the Play store"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(c.MDXTag,{name:"p",components:t},"Hope you've had a Merry Christmas 🎄 and kept safe in these COVID-19 times!"),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(c.MDXTag,{name:"h2",components:t},"Recap"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Firstly, let's do a quick recap of how test apk and aab distribution works on the Play store:"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Usually when we setup Internal and Alpha testers (testers within our own organisation), we add said testers' Google emails to a\ndistribution list on the Play Console, like so"),s.a.createElement("img",{className:"image",src:l.a,width:"500"}),s.a.createElement(c.MDXTag,{name:"p",components:t},"Once this is set up, the user then goes to the internal or alpha testing link generated for the said track on the Play console:"),s.a.createElement("img",{className:"image",src:p.a,width:"500"}),s.a.createElement(c.MDXTag,{name:"p",components:t},"When the user goes to the opt-in URL on their device, they can opt into testing the app like so"),s.a.createElement(c.MDXTag,{name:"p",components:t},"For more information about tracks, distribution lists and opt-in urls, I previously wrote ",s.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"../2019-09-28-Relasing-an-app"}},"this post")),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(c.MDXTag,{name:"h2",components:t},"But what if..."),s.a.createElement(c.MDXTag,{name:"p",components:t},"Ok so your tester distribution list is receiving your binaries and testing's going real smooth. Glad to hear it. Because the tester distribution list\nuses the Play Store app to download test binaries there is a bit of a conundrum. Suppose they want to do a quick comparison with the current production app.\nDoes that mean they now have to go through the opt-out process? So everytime they want to switch between the alpha/beta tracks and the production track, this\nwould be super tedious, right? Sure would!"),s.a.createElement(c.MDXTag,{name:"p",components:t},"Well, here's a neat trick."),s.a.createElement(c.MDXTag,{name:"p",components:t},"You might already know that the Play Store app allows multiple login accounts. These can be switched by tapping the Avatar picture of your account:"),s.a.createElement("img",{className:"image",src:d.a,width:"500"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(c.MDXTag,{name:"p",components:t},"Before doing this though, you need to clear the cache of the Play Store app. This is done by going to the Play Store's app's settings."),s.a.createElement("img",{className:"image",src:f.a,width:"500"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement("img",{className:"image",src:g.a,width:"500"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(c.MDXTag,{name:"p",components:t},"Now if you switch accounts to an account that is NOT on the tester distribution list, you should be able to download the production binary!"),s.a.createElement("img",{className:"image",src:E.a,width:"500"}),s.a.createElement("br",null),s.a.createElement("br",null),s.a.createElement(c.MDXTag,{name:"h1",components:t},"A quick gotcha"),s.a.createElement(c.MDXTag,{name:"p",components:t},"If you get a warning such as the one below -- the Play store cache has not been cleared properly! This means Play Store is remembering that one\nof your accounts is on the tester distribution list! Just follow the steps above to clear the cache and data for the Play Store app!"),s.a.createElement("img",{className:"image",src:v.a,width:"500"}))},t}(s.a.Component);P.isMDXComponent=!0},"/L/l":function(e,t,n){e.exports=n.p+"static/tester_distribution_list-7f26d5d5f61515fa271b3ebdbb829616.png"},"6qfE":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("RSLW");Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return r(a).default}});var o=n("Fobl");function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return r(o).default}})},BdtC:function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),r=n("qhky"),s=n("Wbzz");var c=function(e){var t=e.children,n=e.color,a=e.pageContext.header;return o.a.createElement(s.StaticQuery,{query:"3649515864",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(r.b,{title:e.site.siteMetadata.title},o.a.createElement("html",{lang:"en"})),o.a.createElement("div",{className:"blogpage"},o.a.createElement("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),o.a.createElement("div",{className:"blogText"},o.a.createElement("h1",{title:a,color:n}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t,o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("p",null,"Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts ",o.a.createElement("a",{href:"https://twitter.com/overjeer"},"on twitter")))))}})};t.a=function(e){return o.a.createElement(c,Object.assign({},e,{color:"#f9f9f9"}))}},Fobl:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n("q1tI"),s=(a=r)&&a.__esModule?a:{default:a};var c=s.default.createContext({}),i=c.Provider,l=c.Consumer;t.withMDXComponents=function(e){return function(t){return s.default.createElement(l,null,(function(n){return s.default.createElement(e,o({},t,{components:t.components||n}))}))}};t.default=function(e){return s.default.createElement(i,{value:e.components},e.children)}},JTjF:function(e,t,n){e.exports=n.p+"static/play_store_gotcha-8c7989e38b031c393d64c217b85a83b8.png"},"Jvu+":function(e,t,n){e.exports=n.p+"static/play_store_settings_2-e018de5d2eddcf3338b91edbb5d8b545.png"},PqdT:function(e,t,n){e.exports=n.p+"static/play_store_1-e6aaa6b4b3698c6460f2d3dad6914175.png"},RSLW:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n("q1tI"),c=(a=s)&&a.__esModule?a:{default:a},i=n("Fobl");function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p={inlineCode:"code",wrapper:"div"},m=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,r=void 0===a?{}:a,s=e.children,i=e.components,l=void 0===i?{}:i,u=e.Layout,m=e.layoutProps,d=l[n+"."+t]||l[t]||p[t]||t;return u?c.default.createElement(u,o({components:l},m),c.default.createElement(d,r,s)):c.default.createElement(d,r,s)}}]),t}(s.Component);t.default=(0,i.withMDXComponents)(m)},tihU:function(e,t,n){e.exports=n.p+"static/switch_accounts-d8cb185cc32668c4fd4de9393b178d9d.png"},"v/2Y":function(e,t,n){e.exports=n.p+"static/tester_link-fbd4ffc17c36d8163ed1197237846218.png"},zhaC:function(e,t,n){e.exports=n.p+"static/play_store_settings_1-9741dbd93d609573b847f16316a45027.png"}}]);
//# sourceMappingURL=component---src-blog-2020-12-26-a-neat-trick-for-testing-on-the-play-store-mdx-f3f7deae60e8e90026c2.js.map