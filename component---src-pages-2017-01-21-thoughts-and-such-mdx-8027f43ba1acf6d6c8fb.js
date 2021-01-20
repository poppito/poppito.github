(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{kCxs:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return r}));var a=n("zLVn"),o=(n("q1tI"),n("7ljp")),s={slug:"2017-01-21-Thoughts-and-such",title:"Thoughts and such.",date:"2017-02-20 21:30 +1100",categories:"post"},i={_frontmatter:s};function r(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"blogpage"},Object(o.b)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(o.b)("div",{className:"blogText"},Object(o.b)("h1",null,"Thoughts and such."),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("p",null,"I have certainly been quiet on here between trying to learn iOS and Swift Development, as well as developing a new app. Also work's been quite hectic."),Object(o.b)("p",null,"A lot of the work I have done recently has involved getting information and then generating views/interactions from the data retrieved. I have to say, whilst I was initially skeptical (and completely unware) of the Graph API, the fact that you can query a single end-point for different queries and data-sets is awesome. Why? Because it makes the HTTP client's implementation spectacularly simplistic. Also, API calls are certainly less wasteful as you only really query for a dataset you require. An excellent introduction is the one to ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://www.youtube.com/watch?v=WteK95AppF4"}),"Facebook's GraphAPI"),"."),Object(o.b)("p",null,"Moving on - an excellent library I have come across lately has been ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://github.com/wasabeef/Blurry"}),"Blurry"),". As the name suggests, it simply provides a way to create a blur effect in Android. Why would someone need this? Well blurriness can be used in the background to focus on certain things in the foreground so it can stand out."),Object(o.b)("p",null,"To use the library, one can simply pass in the calling Activity's context:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"  //Of course this doesn't always need to be called from an Activity, as long as\n  //the context Object or even the Activity Object can be passed around.\n  //In this instance the Activity object is used.\n\n  //A handy way of getting the contextView is by calling:\n  View backgroundView = this.findViewById(android.R.id.content);\n  //Now, just call Blurry like so.\n  Blurry.with(this).radius(25).sampling(2).onto(backgroundView);\n\n  //To remove Blurry:\n  Blurry.delete(backgroundView);\n")),Object(o.b)("p",null,"I assume this library (and I haven't looked at the code) - all it does is take a screenshot of the content view and then adds it as an View in the layout's hierarchy.")))}r.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-2017-01-21-thoughts-and-such-mdx-8027f43ba1acf6d6c8fb.js.map