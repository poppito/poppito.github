(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ZeUw:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n("zLVn"),i=(n("q1tI"),n("7ljp")),o=n("Gz0Y"),r=n.n(o),l=["components"],b={slug:"2019-03-18-Testing Android Q beta without an actual Pixel device is hard",title:"Testing Android Q beta without a Pixel device is hard.",date:"2019-03-18T00:00:00.000Z"},u={_frontmatter:b};function c(e){var t=e.components,n=Object(a.a)(e,l);return Object(i.b)("wrapper",Object.assign({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("div",{className:"blogpage"},Object(i.b)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(i.b)("div",{className:"blogText"},Object(i.b)("h2",null,"Android Q Beta."),Object(i.b)("p",null,"Its super easy to just ",Object(i.b)("a",{parentName:"p",href:"https://www.google.com/android/beta"},"opt-in")," into the Android Beta program and test out the Android Q Beta! But if you're without a Pixel device, pretty much good luck. Nah, I sussed it out."),Object(i.b)("p",null,"Steps:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get the Android Studio 3.4 (current RC is ok).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Get the Android Q SDK (it will probably say Android Q Preview).")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"In your app level ",Object(i.b)("inlineCode",{parentName:"p"},"build.gradle"),", change your ",Object(i.b)("inlineCode",{parentName:"p"},"compileSdkVersion 'android-Q'")," and your\n",Object(i.b)("inlineCode",{parentName:"p"},"targetSdkVersion 'Q'")," (Why are these TWO DIFFERENT VALUES!?!? SUPER CONFUSING!)")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Update the emulator to 29+")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Profit.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Now you're ready to test out some of the new features. Let's try ",Object(i.b)("inlineCode",{parentName:"p"},"SettingsPanel"),"s - a new feature that lets users change OS level settings within your app."))),Object(i.b)("p",null,"In an activity, define a button of sorts. In the ",Object(i.b)("inlineCode",{parentName:"p"},"onClickListener")," go:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"Intent intent = new Intent(Settings.Panel.ACTION_VOLUME);\nstartActivity(intent);\n")),Object(i.b)("p",null,"Here's what it looks like. Basically, the sound is not turned on, so when you tap on the pronunciation button, it doesn't work. Settings panels to the rescue! (even though the collapsible animation is super dodgey), you turn the volume on within the app and voila! it works. Sweet as!"),Object(i.b)("div",{align:"center"},Object(i.b)("video",{width:"30%",controls:!0,autostart:!0,autoPlay:!0,src:r.a}))))}c.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,"a",(function(){return a}))}}]);
//# sourceMappingURL=component---src-pages-2019-03-18-testing-android-q-beta-without-an-actual-pixel-device-is-hard-mdx-95849fe3d3833cb1821c.js.map