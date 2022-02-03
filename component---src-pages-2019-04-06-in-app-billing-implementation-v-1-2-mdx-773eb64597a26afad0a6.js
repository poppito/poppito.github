(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{MYaj:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return b})),t.d(n,"default",(function(){return h}));var i=t("zLVn"),s=(t("q1tI"),t("7ljp")),r=t("tA72"),a=t.n(r),o=t("3LM3"),l=t.n(o),p=t("09yi"),u=t.n(p),c=["components"],b={slug:"2019-04-06-In-App-Billing-implementation-v1.2",title:"In-App-Billing-implementation-v1.2",date:"2019-04-06T00:00:00.000Z"},d={_frontmatter:b};function h(e){var n=e.components,t=Object(i.a)(e,c);return Object(s.b)("wrapper",Object.assign({},d,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("div",{className:"blogpage"},Object(s.b)("a",{href:"/blog",smooth:!0,duration:1e3},"Back")),Object(s.b)("div",{className:"blogText"},Object(s.b)("h1",null,"A continuation."),Object(s.b)("p",null,"I wrote a post about In-App Billing in Android ",Object(s.b)("a",{parentName:"p",href:"2017-12-09-App-monetisation-and-In-App-Billing-implementation"},"previously")," - this is really just an update to that original post. Before we start (again) though - lets get the semantics out of the way: the API is called In-App Billing however, whenever you sell a product leveraging this API, its an In-App product (IAP)."),Object(s.b)("h1",null,"First things first."),Object(s.b)("p",null,"IAPs are setup in the Play console - under store presence > In-App Products. But, I wasn't able to initially set this up at all. After digging a little bit I found my production APK didn't have the In-App billing permissions. (Wouldn't this be the case for everyone?) This is easily remedied by creating an Alpha release of your app - and actually its highly recommended because you can then use test accounts to test the purchase flows. As long as your test users are added as alpha testers for your app!"),Object(s.b)("p",null,"Now we set up an ",Object(s.b)("inlineCode",{parentName:"p"},"SKU")," - a stock keeping unit - This is just a ",Object(s.b)("inlineCode",{parentName:"p"},"String")," value that an ",Object(s.b)("strong",{parentName:"p"},"In-App product")," gets given when we generate one. Let's explore this here - we'll add an ",Object(s.b)("strong",{parentName:"p"},"In-app product")," that we can bill against."),Object(s.b)("p",null,"On the ",Object(s.b)("strong",{parentName:"p"},"Play Console"),", under ",Object(s.b)("strong",{parentName:"p"},"Store Presence"),", there is an option to create ",Object(s.b)("strong",{parentName:"p"},"In-App products")," click on ",Object(s.b)("strong",{parentName:"p"},"Add a Managed Product")," - then give it an id (only underscores, lowercase letters and digits allowed!) - which will become the ",Object(s.b)("inlineCode",{parentName:"p"},"sku")," for your ",Object(s.b)("strong",{parentName:"p"},"In-App Product"),"\nNext, give it a title and a description as well as price. This will show up when a user tries to buy your In-app product through your app, so make it short and simple. The Play console does automatic currency conversions for countries your app is supported in - so if you need to tweak that for individual countries - you can it here as well. Finally, click  on save and it will add your ",Object(s.b)("inlineCode",{parentName:"p"},"In-App product"),"."),Object(s.b)("p",{align:"center"},Object(s.b)("img",{src:l.a,width:"30%"})),Object(s.b)("p",{align:"center"},Object(s.b)("img",{src:u.a,width:"30%"})),Object(s.b)("p",null,"Now that you've got an ",Object(s.b)("inlineCode",{parentName:"p"},"sku"),", you can create a ",Object(s.b)("inlineCode",{parentName:"p"},"@StringRes")," for it."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'    <string name="id_sku_my_product">01_my_first_product</string>\n')),Object(s.b)("p",null,"Update our permissions to use ",Object(s.b)("inlineCode",{parentName:"p"},"In-App Billing")," in our ",Object(s.b)("inlineCode",{parentName:"p"},"AndroidManifest.xml")," file."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'    <uses-permission android:name="com.android.vending.BILLING" />\n')),Object(s.b)("p",null,"Also, to start using IAB, you will need to pull in the IAB depedency into your app. Add this to the ",Object(s.b)("inlineCode",{parentName:"p"},"dependencies")," closure of your app's ",Object(s.b)("inlineCode",{parentName:"p"},"build.gradle"),":"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"    implementation 'com.android.billingclient:billing:1.2.2'\n")),Object(s.b)("h1",null,"The anatomy of IAB / IAPs in Android."),Object(s.b)("p",null,"Use the ",Object(s.b)("inlineCode",{parentName:"p"},"BillingClient"),", its your friend. When you use the ",Object(s.b)("inlineCode",{parentName:"p"},"BillingClient")," builder, you set a ",Object(s.b)("inlineCode",{parentName:"p"},"PurchasesUpdatedListener"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"  billingClient = BillingClient.newBuilder(context)\n                  .setListener(this)\n                  .build();\n")),Object(s.b)("p",null,"In order to start doing anything interesting, you call ",Object(s.b)("inlineCode",{parentName:"p"},"startConnection()")," and pass an instance of a ",Object(s.b)("inlineCode",{parentName:"p"},"ConnectionStateListener"),". This ensures connectivity of your app with the In-App Billing API. If it comes back with ",Object(s.b)("inlineCode",{parentName:"p"},"OnBillingSetupFinished()"),", which is the success scenario, you're ready for the next step. If it fails, it comes back with ",Object(s.b)("inlineCode",{parentName:"p"},"OnBillingServiceDisconnected()"),", this might warrant an error message."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"    billing.startConnection(new BillingClientStateListener() {\n            @Override\n            public void onBillingSetupFinished(int responseCode) {\n                if (responseCode == BillingClient.BillingResponse.OK) {\n                    isBillingClientConnected = true; //this boolean value persists connection state.\n                    //do other interesting things here - as we're connected now.\n                }\n            }\n\n            @Override\n            public void onBillingServiceDisconnected() {\n               isBillingClientConnected = false;\n               //handle this failure gracefully.\n           }\n        }\n")),Object(s.b)("p",null,"Now, we've got two things to worry about - what are the localised SKUs and their costs? So first, we query for all SKUs first. This is done by running:"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},'    List<String> skuList = new ArrayList<> ();\n    skuList.add("premium_upgrade");\n    skuList.add("gas");\n    SkuDetailsParams.Builder params = SkuDetailsParams.newBuilder();\n    params.setSkusList(skuList).setType(SkuType.INAPP);\n    billingClient.querySkuDetailsAsync(params.build(),\n        new SkuDetailsResponseListener() {\n            @Override\n            public void onSkuDetailsResponse(int responseCode, List<SkuDetails> skuDetailsList) {\n                if (responseCode == BillingResponse.OK && skuDetailsList != null) {\n                    for (SkuDetails skuDetails : skuDetailsList) {\n                        String sku = skuDetails.getSku();\n                        String price = skuDetails.getPrice();\n                        if ("premium_upgrade".equals(sku)) {\n                            premiumUpgradePrice = price;\n                        } else if ("gas".equals(sku)) {\n                            gasPrice = price;\n                        }\n                    }\n                }\n            }\n        }\n    });\n')),Object(s.b)("p",null,"Now that user has a list of SKUs and they want to purchase one, we start what's called a ",Object(s.b)("inlineCode",{parentName:"p"},"BillingFlow"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"    BillingFlowParams flowParams = BillingFlowParams.newBuilder()\n        .setSkuDetails(skuDetails)\n        .build();\n    int responseCode = billingClient.launchBillingFlow(flowParams);\n")),Object(s.b)("p",null,"Now, recall ",Object(s.b)("inlineCode",{parentName:"p"},"OnPurchasesUpdatedListener")," we set in the first step! That should call back if the purchase is successful!"),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"    @Override\n    void onPurchasesUpdated(@BillingResponse int responseCode, List<Purchase> purchases) {\n            if (responseCode == BillingResponse.OK\n                    && purchases != null) {\n                for (Purchase purchase : purchases) {\n                    handlePurchase(purchase);\n                }\n            } else if (responseCode == BillingResponse.USER_CANCELED) {\n                // Handle an error caused by a user cancelling the purchase flow.\n            } else {\n                // Handle any other error codes.\n            }\n    }\n")),Object(s.b)("p",null,"Nearly there! Now you can query for if the user has purchased your ",Object(s.b)("strong",{parentName:"p"},"In-App Product"),". This is determined by running the ",Object(s.b)("inlineCode",{parentName:"p"},"queryPurchaseHistoryAsync")," callback on your ",Object(s.b)("inlineCode",{parentName:"p"},"mBillingClient"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"    billingClient.queryPurchaseHistoryAsync(BillingClient.SkuType.INAPP, new PurchaseHistoryResponseListener() {\n                    @Override\n                    public void onPurchaseHistoryResponse(@BillingClient.BillingResponse int responseCode,\n                                                            List<Purchase> purchasesList) {\n                        if (responseCode == BillingClient.BillingResponse.OK) {\n                            if (purchasesList != null) {\n                                if (purchasesList.size() > 0) {\n                                    for (Purchase result : purchasesList) {\n                                        if (result.getSku().equals(mContext.getResources().getString(R.string.01_my_first_product))) {\n                                            //success! your user has bought your In-App product. Woohoo!\n                                        }\n                                    }\n\n                                }\n                            }\n                        }\n                    }\n                });\n")),Object(s.b)("p",null,"Although, Android gives you some more convenience on top of this. You do not need to call ",Object(s.b)("inlineCode",{parentName:"p"},"queryPurchaseHistoryAsync")," everytime. Purchases are cached by the In-App Billing library - so you can just run ",Object(s.b)("inlineCode",{parentName:"p"},"queryPurchases"),". So, what naturally follows is that you would use this call to see if it comes back with legit ",Object(s.b)("inlineCode",{parentName:"p"},"PurchaseResult"),", if not you can run  ",Object(s.b)("inlineCode",{parentName:"p"},"queryPurchaseHistoryAsync"),"."),Object(s.b)("pre",null,Object(s.b)("code",{parentName:"pre"},"    Purchase.PurchasesResult purchasesResult = mBillingClient.queryPurchases(BillingClient.SkuType.INAPP);\n                        if (purchasesResult != null) {\n                            if (purchasesResult.getPurchasesList() != null) {\n                                if (purchasesResult.getPurchasesList().size() > 0) {\n                                    for (Purchase result : purchasesResult.getPurchasesList()) {\n                                        if (result.getSku().equals(mContext.getResources().getString(R.string.01_my_first_product))) {\n                                            //success! your user has bought your In-App product. Wowie!\n                                        }\n                                    }\n                                }\n                            }\n                        }\n")),Object(s.b)("h1",null,"Optimisation tips."),Object(s.b)("p",null,"It almost seems like you're going to have to follow the billing process twice. You're just better off using a ",Object(s.b)("inlineCode",{parentName:"p"},"Singleton")," instance of the ",Object(s.b)("inlineCode",{parentName:"p"},"BillingClient"),". If you're using a DI framework like the excellent ",Object(s.b)("a",{parentName:"p",href:"https://google.github.io/dagger/"},"Dagger"),", you're better off creating a ",Object(s.b)("inlineCode",{parentName:"p"},"Singleton")," component on your dependency graph and then injecting it as needed."),Object(s.b)("p",{align:"center"},Object(s.b)("h2",null," Demo "),Object(s.b)("video",{width:"30%",controls:!0,autostart:!0,autoPlay:!0,src:a.a,frameBorder:"0",allowFullScreen:!0})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"}," Questions? Suggestions? Compliments? Tips to make this post better? I'd love to hear your thoughts! Tweet to ",Object(s.b)("a",{parentName:"strong",href:"https://twitter.com/overjeer"},"@overjeer")))))}h.isMDXComponent=!0},zLVn:function(e,n,t){"use strict";function i(e,n){if(null==e)return{};var t,i,s={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}t.d(n,"a",(function(){return i}))}}]);
//# sourceMappingURL=component---src-pages-2019-04-06-in-app-billing-implementation-v-1-2-mdx-773eb64597a26afad0a6.js.map