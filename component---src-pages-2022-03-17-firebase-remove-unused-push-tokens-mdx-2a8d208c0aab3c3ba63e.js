(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{olnW:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return l}));var s=t("zLVn"),o=(t("q1tI"),t("7ljp")),a=["components"],i={slug:"2022-03-17-Firebase-remove-unused-push-tokens",title:"Invalidating unused Firebase push tokens using scheduled functions",date:"2022-03-17 21:30 +1100",categories:"blog"},r={_frontmatter:i};function l(e){var n=e.components,t=Object(s.a)(e,a);return Object(o.mdx)("wrapper",Object.assign({},r,t,{components:n,mdxType:"MDXLayout"}),Object(o.mdx)("div",{className:"blogpage"},Object(o.mdx)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(o.mdx)("div",{className:"blogText"},Object(o.mdx)("h1",null,"Invalidating unused Firebase push tokens using scheduled functions"),Object(o.mdx)("br",null),Object(o.mdx)("br",null),Object(o.mdx)("p",null,"Push messaging in modern mobile apps with Firebase is really common. The usual workflow is:"),Object(o.mdx)("ul",null,Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},"Integrating Firebase push SDKs / Cocoapods / SPM packages within the app.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},"Registering a project on the Firebase console.")),Object(o.mdx)("li",{parentName:"ul"},Object(o.mdx)("p",{parentName:"li"},"On native apps, configuring the Firebase library, requesting for notification permissions, obtaining push tokens and saving them to a backend service."))),Object(o.mdx)("p",null,"A lot of apps obtain push tokens at login (an optimal way of doing this is by requesting the current token from Firebase's local cache). Apps that support multiple users / login, usually also invalidate tokens on logout.\nBut what if the user never logs out, but removes / uninstall the app? 🤔"),Object(o.mdx)("p",null,"The best way to invalidate these tokens, unfortunately is by looking for errors when a push message is sent outbound, like so:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"admin.messaging().sendToDevice(tokens, message, options)\n    .then((response) => {\n        console.log('Successfully sent message:', response);\n    }).catch((error) => {\n        if (error.code === 'messaging/invalid-registration-token' ||\n            error.code === 'messaging/registration-token-not-registered') {\n            //a promise here to delete the token which can be pushed to an array,\n            //then return promise.all 👍\n        }\n    });\n")),Object(o.mdx)("p",null,"This is however problematic in apps that a) don't want to send out bulk outbound notifications and b) only support async notifications ie. notifications that go out when the\nuser performs an action."),Object(o.mdx)("p",null,"There's a better way. On closely inspecting the way Firebase functions sends out push notifications, I realised there is a "),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"sendToDevice(registrationToken: string | string[], payload: MessagingPayload, options?: MessagingOptions): Promise<MessagingDevicesResponse>;\n")),Object(o.mdx)("p",null,"Here, ",Object(o.mdx)("inlineCode",{parentName:"p"},"MessagingOptions")," has a ",Object(o.mdx)("inlineCode",{parentName:"p"},"dryRun?: boolean")," variable, when set to true, it won't actually send the push message but rather do a dry run."),Object(o.mdx)("p",null,"Essentially, how we can create a ",Object(o.mdx)("a",{parentName:"p",href:"https://firebase.google.com/docs/functions/schedule-functions"},"scheduled")," Firebase function that:\na) Polls for all push tokens"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"for (const [key, value] of tokens.entries()) {\n        allTokens.push(key);\n}\n")),Object(o.mdx)("p",null,"b) sets dry run to true."),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"    const options = {\n        dryRun: true\n    }\n\n")),Object(o.mdx)("p",null,"c)  Finally, send out push notifications, poll for errors and remove invalid tokens:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre",className:"language-js"},"    admin.messaging().sendToDevice(allTokens, message, options)\n    .then((response) => {\n        response.results.forEach((deviceResult, index) => {\n            if (deviceResult.error) {\n                let failedToken = allTokens[index];\n                //push a promise to remove token from db.\n            }\n        });\n    });\n    return Promise.all(tokensToRemove);\n\n"))))}l.isMDXComponent=!0},zLVn:function(e,n,t){"use strict";function s(e,n){if(null==e)return{};var t,s,o={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,"a",(function(){return s}))}}]);
//# sourceMappingURL=component---src-pages-2022-03-17-firebase-remove-unused-push-tokens-mdx-2a8d208c0aab3c3ba63e.js.map