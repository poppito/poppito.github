(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{JGUp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return y})),a.d(t,"default",(function(){return O}));var n=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("wjQe"),i=a.n(s),r=a("zUjS"),l=a.n(r),c=a("nZb0"),d=a.n(c),u=a("PzSX"),p=a.n(u),b=a("fM4o"),g=a.n(b),m=a("ydAA"),h=a.n(m),y={slug:"2017-11-17-Google-Play-games-for-fun-and-profit-but-mostly-fun",title:"Google play games API for fun and profit - but mostly only fun.",date:"2017-11-17 19:30 +1100",categories:"post"},f={_frontmatter:y};function O(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},f,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"blogpage"},Object(o.b)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(o.b)("div",{className:"blogText"},Object(o.b)("h1",null,"Google play games API for fun and profit - but mostly only fun."),Object(o.b)("br",null),Object(o.b)("br",null),Object(o.b)("h1",null,"The motivation"),Object(o.b)("p",null,"When I first built ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://play.google.com/store/apps/details?id=strayanslangapp.noni.com.strayanslangapp"}),"StrayaMate"),", it was only really ever going to be a Australian slang dictionary. The need for this app was borne out of the fact that my partner - who teaches ESL (English as a second language) to overseas students, wanting to have something visual that her students could refer to. Now, as any dictionary goes - it can be quite dry. So, to make the app more engaging we gamified it!"),Object(o.b)("p",null,"One of my favourite word games is Hangman, so I figured I'd try and implement it for this app."),Object(o.b)("p",null,"Conceptually, the game is really simple. A player gets a few chances to guess a word or a phrase (in this case, Australian Slang). The player of course gets given a hint that can aide in guessing said word and phrase. Points get awarded if the user is able to successfully guess the word or phrase - however, in my version of the game points also get taken away for each wrong guess. Users get 9 guesses in total, per word or phrase."),Object(o.b)("p",null,"But there was still something missing. I wanted to implement a social aspect to the game - so as to increase user engagement. If you aren't playing for an achievement, for example, a game can quickly get boring! Also, a backend implementation can quickly get quick complicated - namely, you need to define a user identity and ensure there is some form of authorization. Then you award points per guessed word, and write a way to quantify how a user's performance compares to another's. Enter Google Play Games services."),Object(o.b)("p",null,"Google Play provides some really cool facilities out of the box for Game developers. I am hoping I can illustrate some of these facilities I've gone ahead and utilised for this app, here, namely."),Object(o.b)("p",null,"Leaderboards: Social leaderboards, where a user can compete against their friends or anyone else that plays a particular game!"),Object(o.b)("p",null,"Achievements: Think of these as a level up for a user. As a user progresses in a particular game, they can even level up in XP on Google Play games."),Object(o.b)("h1",null,"But what exactly is Google play Games Services?"),Object(o.b)("p",null,"To explain it simply, it is a framework that utilises ",Object(o.b)("a",Object.assign({parentName:"p"},{href:"https://play.google.com/store/apps/details?id=com.google.android.play.games&hl=en"}),"Google Play Games"),' in Android. Users can create a Games Profile - an account that persists and saves their games data. It also introduces a social aspect wherein, users can add other users as friends. Games generally need to implement a points system i.e. a "unit" they award a user for carrying out a particular action successfully. This is the metric a game developer can use to place users a Leaderboard. It is also the same metric that can be used to level users up when they reach and progress through amounts of it, assigned to them.'),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:i.a,width:"30%"})),Object(o.b)("h1",null,"That's enough theory, how do I implement it?!"),Object(o.b)("p",null,"You start with creating a Game on Google play developer console. After signing in, go to Games Services."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:i.a,width:"30%"})),Object(o.b)("p",null,'Click on "ADD NEW GAME", followed by selecting "I don\'t use any Google APIs in my game yet". Note, that here Games services creates an "app_id", which we will later use.'),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:l.a,width:"30%"})),Object(o.b)("p",null,"Give your game a name, for example Slangman in my case and then choose a category - for example - Slangman is in the Educational category."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:d.a,width:"30%"})),Object(o.b)("p",null,"Select Android."),Object(o.b)("p",null,"Now add your existing app's packagename. It will conveniently provide you a dropdown of your current apps on the Play Console of course. Other options i.e. Real time multiplayer are not applicable in my case so use your discretion!"),Object(o.b)("p",null,"Next, authorise your app to create an OAUTH 2.0 token. Note: You can check a successfully created OAUTH token by logging on to Google cloud console and searching for “Google play game services”."),Object(o.b)("p",null,"Now you are ready to start configuring your Android project! First, add the “Get Accounts” permission to your AndroidManifest."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<uses-permission android:name="android.permission.GET_ACCOUNTS" />\n')),Object(o.b)("p",null,"Add Play Services to your Android project's build.gradle."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"dependencies {\n        ...\n        classpath 'com.google.gms:google-services:3.1.0'\n    }\n")),Object(o.b)("p",null,"Add Games services to your app's build.gradle."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"dependencies {\n    ...\n    compile 'com.google.android.gms:play-services-games:10.2.0'\n}\n")),Object(o.b)("p",null,'Configuring Leaderboards is easy. Basically, you need to implemement a "points" metric - something you reward the user when they carry a certain action. Then determine appropriate times in the user\'s gaming lifecycle to call the Leaderboards API and post the user\'s current points. That\'s it! To add a leaderboard, in the Play Console, under Games Services, just click on "Add a Leaderboard", give it a name for example. World Rankings, and then determine if larger points or smaller points is better. You can also define a limit i.e. not to award points above a certain limit. Note, every Leaderboard creates a leaderboard_id String. This needs to be added as a @StringRes String so we can reference it later!'),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:p.a,width:"30%"})),Object(o.b)("p",null,'Configuring Achievements is even simpler. As I said previously, these are "level ups" for players. What is unique is, that as the play levels up in your game, Play games also levels them up in "XP", in that particular game\'s category! Achievements are quantified in terms of the points metric we spoke about previously. So, achievement-1 could be awarded when a user scores 50 points, achievement-2 awarded when a user scores 100 etc. To configure achievements, on Games services, just click on just click on “Add achievement”, give it an icon, description, XP points, whether it is visible to the user. Note, every achievement creates an achievement_id String. This needs to be added as a @StringRes String so we can reference it later!'),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:g.a,width:"30%"})),Object(o.b)("p",null,"Now let's get back to the code! First of all, when we created the Game under Games services, it automatically created an app_id.\nWe need to add this to our AndroidManifest.xml's metadata. We can use a @StringRes for the app_id String and reference it directly."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),'<meta-data android:name="com.google.android.gms.games.APP_ID"\n                      android:value="@string/app_id">\n')),Object(o.b)("p",null,"We now need to use the GoogleApiClient class. Please note that before doing this, its always a good idea to prompt the user that i.e. some users might not want to sign-in with their play games profile."),Object(o.b)("p",{align:"center"},Object(o.b)("img",{src:h.a,width:"30%"})),Object(o.b)("p",null,'To configure GoogleApiClient, first we use the convenient Builder class. Once built, we can then run "connect()", on it.'),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"private GoogleApiClient buildGoogleApiClient() {\n    return new GoogleApiClient.Builder(this)\n            .addApi(Games.API)\n            .addConnectionCallbacks(this)\n            .addOnConnectionFailedListener(this)\n            .addScope(Games.SCOPE_GAMES)\n            .build();\n}\n\nmGoogleApiClient = buildGoogleApiClient();\n            mGoogleApiClient.connect();\n")),Object(o.b)("p",null,'Now, you may have noted that we added some ConnectionCallbacks and also a ConnectionFailedListener. When we first run connect, this will always call onConnectionFailed(), as the user has either not signed-in already, or might not even have a  Games profile! No matter. When the onConnectionFailed() callback comes back, it has a ConnectionResult object. We can query it to see if it returns true for hasResolution() and if so, we run the startResolutionForResult() method on it and pass in an arbitrary integer, very similarly to startActivityForResult() in Android. Finally, we can track the result in "onActivityResult()", of course.'),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"  connectionResult.startResolutionForResult(this, REQUEST_RESOLVE_ERROR);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"if (requestCode == REQUEST_RESOLVE_ERROR) {\n            if (!(resultCode == RESULT_OK)) {\n                if (mGoogleApiClient != null) {\n                    if (!mGoogleApiClient.isConnecting()\n                    || !mGoogleApiClient.isConnected()) {\n                        mGoogleApiClient.connect();\n                    }\n                }\n            }\n        }\n")),Object(o.b)("p",null,"Now, as I said previously, to submit the score to the Leaderboards API, you can use your judgement. I do it at arbitrary points in the game as well as when the user runs out of tries and its game over of course."),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"if (mGoogleApiClient.isConnected()) {\n                Games.Leaderboards.submitScore(mGoogleApiClient,\n                        getResources().getString(R.string.leaderboard_points_leaderboard),\n                        points);\n")),Object(o.b)("p",null,"To submit an achievement, you will need to track the user's progress as they move through the game. To award an achievement just run (note here I am using a BuildConfig field and not a @StringRes)"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{})," Games.Achievements.unlock(mGoogleApiClient, BuildConfig.achievement_getting_there);\n")),Object(o.b)("p",null,"That's it! But how do we display Leaderboards or Achievements to the user?! Simply by:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"startActivityForResult(Games.Leaderboards.\n                            getLeaderboardIntent(mGoogleApiClient,\n                            getResources().getString(R.string.leaderboard_points_leaderboard)),\n                            REQUEST_LEADERBOARD);\n")),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"startActivityForResult(Games.Achievements.getAchievementsIntent(mGoogleApiClient),\n                        REQUEST_ACHIEVEMENTS);\n")),Object(o.b)("h1",null,"Addendum"),Object(o.b)("p",null,"Well, looks like ",Object(o.b)("inlineCode",{parentName:"p"},"GoogleApiClient")," is soon to be deprecated as of Play Services v11. No matter, we will probably be able to explore this in my upcoming posts."),Object(o.b)("p",null,"That's pretty much it from me, for now. I sure hope this post has added some value to someone out there. If you read this and have any questions you can feel free to tweet them through to me - my handle should just be below this post :D")))}O.isMDXComponent=!0},zLVn:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-2017-11-17-google-play-games-for-fun-and-profit-but-mostly-fun-mdx-6cab57b85278dec6bd2f.js.map