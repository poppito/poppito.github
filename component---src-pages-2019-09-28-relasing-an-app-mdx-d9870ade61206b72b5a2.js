(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{P6Hm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return K})),a.d(t,"default",(function(){return q}));var n=a("zLVn"),l=(a("q1tI"),a("7ljp")),i=a("kgUm"),o=a.n(i),r=a("ln07"),s=a.n(r),d=a("VxDm"),c=a.n(d),p=a("hzfW"),m=a.n(p),u=a("8Kps"),b=a.n(u),h=a("wF+r"),O=a.n(h),x=a("1Dy+"),j=a.n(x),g=a("Qbz2"),y=a.n(g),N=a("PH3C"),w=a.n(N),f=a("SbCR"),k=a.n(f),v=a("u6bW"),P=a.n(v),A=a("O5rj"),I=a.n(A),T=["components"],K={slug:"2019-09-28-Relasing-an-app",title:"App releases on the Play console",date:"2019-09-28 14:00 +1100",categories:"blog"},W={_frontmatter:K};function q(e){var t=e.components,a=Object(n.a)(e,T);return Object(l.mdx)("wrapper",Object.assign({},W,a,{components:t,mdxType:"MDXLayout"}),Object(l.mdx)("div",{className:"blogpage"},Object(l.mdx)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(l.mdx)("div",{className:"blogText"},Object(l.mdx)("h1",{align:"center"}," App releases on the Play Console "),Object(l.mdx)("br",null),Object(l.mdx)("br",null),Object(l.mdx)("p",null,"Recently, there has been much conjecture around releases on the Play Console for Android apps. Between releasing for internal testing, sharing apps internally, running an open test, running a closed test, doing a staged rollout in testing or releasing to production - it can get confusing. With releases developers are also reporting an app store style app review taking place, so let's try and break down the plethora of options on the Play console."),Object(l.mdx)("h2",null,"Internal App sharing."),Object(l.mdx)("p",null,"This is a very similar way of distributing apps and app bundles to your internal testers as other facilities such as Hockeyapp."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Doesn't require a version increment.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Doesn't need a production APK - you can share debug versions too.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Add internal testers and use the internal testing list for distributing an APK or app bundle. ")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Alternatively, you can generate a link to share with testers."))),Object(l.mdx)("p",null,"As a pre-requisite, you will need to add a list of internal testers - to do this, go to Play console > Manage Email lists and add your testers to this list."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"To get started with internal app sharing go to your app, go to Development tools > Internal App sharing and drop an APK or app bundle."),Object(l.mdx)("img",{src:o.a,width:"50%"})),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Once the APK is uploaded, you get an option to either share it using a link or with your internal testing list (screenshot below shows the latter selected)"),Object(l.mdx)("img",{src:s.a,width:"50%"})),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},'When you proceed it will generate a link for distribution. Tap on "copy link" to distribute this link.'),Object(l.mdx)("img",{src:c.a,width:"50%"})),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"When a user with a tester email uses this link on an Android device, it should present a link to open the app up in the Play store app."),Object(l.mdx)("img",{src:m.a,width:"50%"}))),Object(l.mdx)("h2",null,"Internal app testing."),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Does require a version increment.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Will need a signed production APK or app bundle.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Up to a 100 testers in the tester email distribution list.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Testers will need to be pre-registered, using an opt-in link.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Should not go through app review in this track."))),Object(l.mdx)("h3",null,"To setup an internal test:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},'You will need a list of testers registered and opted-in. For every internal test you setup it generates an opt-in URL that the testers list will need to use to opt-in. To proceed with this, go to your app on the Play console and go to "App releases". Ensure the checkbox next to your testers\' list is checked and click on save! The opt-in URL in the screenshot has been blanked out of course.'),Object(l.mdx)("img",{src:b.a,width:"50%"})),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},'Now is the time to upload your APK or app bundle. Once this is complete, add your release notes and click "save".'),Object(l.mdx)("img",{src:O.a,width:"50%"})),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},'This should be the final screen wherein you can review all the information you\'ve provided and then go "Start rollout to internal test". Please note there is no option here to do a phased release!'),Object(l.mdx)("img",{src:j.a,width:"50%"})),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"The official documentation does say that the APK or app bundle would be available in minutes, however in the case of my internal test it took about 15-20 minutes!"),Object(l.mdx)("img",{src:y.a,width:"50%"}))),Object(l.mdx)("h2",null,"Closed track (Alpha) releases"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Does require an increment in the app's version code.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Test within your organisation or within a tester email distribution list.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Will need a signed production APK or app bundle.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Testers will need to be pre-registered, using an opt-in link (this link is differnt to all the other tracks)")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"A phased rollout can be performed for this track.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"You can promote to production after testing is complete."))),Object(l.mdx)("p",null,'This track\'s steps are pretty well the same as the internal testing track, including testers having to opt-in before testing can occur. To setup a closed alpha test, go to "App releases > closed alpha"'),Object(l.mdx)("p",null,"The only difference here really is a phased rollout is allowed, this is done by specfying a percentage in the review screen."),Object(l.mdx)("h2",null,"Open track (Beta) releases"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"This is an open testing track because, unlike the closed track users on Play can opt-in for beta versions of your app.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"If you want to limit the amount of users for this, you can specify a number up to 1000, if left blank this is as many testers as those that opt-in.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"The APK or app bundle version will need to be incremented.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Only really accepts a signed production APK or app bundle.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Anyone can pre-register to become a tester for your app.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Phased rollouts are allowed.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"You should ensure that the store listing of your app is up to scratch because this is not your internal / closed testing track - the people that sign-up to be testers will be external and that's their window into your app!"),Object(l.mdx)("img",{src:I.a,width:"50%"}))),Object(l.mdx)("h2",null,"Whoa, that's a lot of options."),Object(l.mdx)("p",null,"Ok, so this got really quite detailed and fast. I think the best way to think about the different ways of doing releases with the Play console is probably working out each of the use-cases."),Object(l.mdx)("h2",null,"In what situation would you use internal app sharing?"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"I recommend, perhaps all the time! Sharing an APK via the official way of sharing an APK (y'know, because its on the Play console!) rather than relying on a 3rd party is probably advisable - because many of the steps are similar to doing an internal, closed or open track of testing.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Its really convenient because once your testers' distribution list is added, it can be reused across other tracks.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"It becomes a central way of distributing your APKs or app bundles (no more managing users across 3rd parties just for testing)"))),Object(l.mdx)("h3",null,"In what situation would you use internal app testing?"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Internal app testing requires a prod signed APK and a version increment, so you'd want to use it if you have a small team of internal testers once you have a release candidate, whom you could release to, first.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"It is easy to get feedback from your testers and if all goes well, this option complements the closed (alpha) track really well. ")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"When used in conjunction with the closed (alpha) track, you can use staged rollouts.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Its quicker than the closed or open tracks and doesn't require an app review."))),Object(l.mdx)("h3",null,"In what situation would you use closed (alpha) testing?"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"The closed track complements the internal testing track really well, so I recommend promotion from the internal track to the closed track.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"An app review could occur at this stage so, basically this is a good exercise into addressing any issues that could arise here.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"If all goes well, you can promote your APK or app bundle to production!"))),Object(l.mdx)("h3",null,"In what situation would you use open (beta) testing?"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"If you have done all your homework and setup a nice listing and probably can promote an open beta test to real-world users this is a great way to kick start receiving any feedback.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"An app review could occur, so basically this is a good exercise into addressing any issues that arise here.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"You will need to ensure that all the store pre-reqs are met including the listing and possibly ratings for users. Not recommended for a WIP.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Once you feel ready after all the feedback has been collected and addressed, you can promote the app directly to production!"))),Object(l.mdx)("h2",null,"My recommendation for a release approach:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Use internal app sharing testing during the normal development cycle, and any regression testing before picking an RC.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Internal testing with an RC over a timebox.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Promoting to the closed track and testing in a timebox, as well as having a review occur.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Promote to production once everything's a-OK. I recommend using a phased rollout in production for any large scale releases so you can monitor for scale issues or new crashes.")),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"If you do any internal only releases between production releases, I highly recommend doing at least an internal test and promotion to alpha so any issues during a review can be addressed. You don't want to only kick-off reviews for production-only releases!"))),Object(l.mdx)("h2",null,"Some gotchas to look out for:"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},'When you\'re on a test distribution list, you will see releases as well as test APKs or app bundles with a "(Beta)" at the end of the name.',Object(l.mdx)("img",{src:P.a,width:"50%"}))),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},'When your app is being "reviewed", it will say so on the "Dashboards" page.'),Object(l.mdx)("img",{src:k.a,width:"50%"})),Object(l.mdx)("li",{parentName:"ul"},Object(l.mdx)("p",{parentName:"li"},"Phased rollouts in any track that allow them, are manual. This affords you the time to keep assessing any crash logs and / or any other stats to make decisions on proceeding with higher percentages for rollouts."),Object(l.mdx)("img",{src:w.a,width:"50%"}),Object(l.mdx)("br",null),Object(l.mdx)("br",null))),Object(l.mdx)("h2",null,"Conclusion"),Object(l.mdx)("p",null,"The Play console’s testing tracks offer a host of options and leveraging these to your advantage can help you release your app in the most optimal way possible! Just like Sydney skies in Autumn!\nWhat do you reckon? I’d love to hear your thoughts on how you do releases on the Play console!")))}q.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-2019-09-28-relasing-an-app-mdx-d9870ade61206b72b5a2.js.map