(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{dZEx:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return c}));var i=n("zLVn"),o=(n("q1tI"),n("7ljp")),s=n("f4H6"),d=n.n(s),a=["components"],r={slug:"2017-01-03-Multiple-EditTexts-in-Android",title:"Multiple EditTexts in Android",date:"2017-01-03 07:42 +1100",categories:"post"},l={_frontmatter:r};function c(e){var t=e.components,n=Object(i.a)(e,a);return Object(o.mdx)("wrapper",Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.mdx)("div",{className:"blogText"},Object(o.mdx)("h1",null,"Multiple EditTexts in Android"),Object(o.mdx)("p",null,"Often times there is a necessity for an app to display multiple EditText inputs. For example, lets take a look at this screen in my application Orderise (since been unpublished)"),Object(o.mdx)("p",{align:"center"},Object(o.mdx)("img",{src:d.a,width:"30%"}),";"),Object(o.mdx)("p",null,"There are two EditText input boxes namely, a special_orders and a name box."),Object(o.mdx)("p",null,"It is possible to have a single TextWatcher for multiple EditTexts, like so:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre"},"```\n//first define each EditText\nEditText nameText = (EditText) findViewById(R.id.name);\nEditText specialOrders = (EditText) findViewById(R.id.special_instructions);\n\n//Next add textwatchers for each editText. You will need to get the activity or fragment that contains them to implement TextWatcher\nnameText.addTextChangedListener(this);\nspecial_orders.addTextChangedListener(this);\n\n```\n")),Object(o.mdx)("p",null,"Now, this is where it gets interesting. You see, if this were multiple Buttons for a single OnClickListener, it would be easy as pie - just get the activity to implement the OnClickListener and then look for each Button's Id to be able to detect which button was clicked. Something like:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre"},"Button button1 = (Button) findViewById(R.id.button1);\nButton button2 = (Button) findViewById(R.id.button2);\nbutton1.setOnClickListener(this);\nbutton2.setOnClickListener(this);\n\n@Override\npublic void onClick(View v) {\n    switch (v.getId()) {\n        case R.id.button1: {\n            //do something useful here.\n            }\n        case R.id.button2: {\n            //do something else useful here.\n            break;\n        }\n      }\n")),Object(o.mdx)("p",null,"But unfortunately, with TextWatcher we do not have the luxury of the the View object being passed into the Overridden methods of beforeTextChanged, onTextChanged and afterTextChanged. But there is still a way. For example, in the afterTextChanged method, we can compare the hashCode for the Editable Object with the Text in the EditText object, like so:"),Object(o.mdx)("pre",null,Object(o.mdx)("code",{parentName:"pre"},"@Override\npublic void afterTextChanged(Editable s) {\n  if (s.hashCode() == nameText.getText().hashCode()) {\n      //Do else something with input.\n  } else if (s.hashCode() == specialOrders.getText().hashCode()) {\n      //Do something else useful with input.\n  }\n}\n")),Object(o.mdx)("p",null,"There are of course a few other ways - one is to subclass the EditText Class and then pass the EditText View object into the three methods. But I believe the solution above is a bit more elegant.")))}c.isMDXComponent=!0},zLVn:function(e,t,n){"use strict";function i(e,t){if(null==e)return{};var n,i,o={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,"a",(function(){return i}))}}]);
//# sourceMappingURL=component---src-pages-2017-01-03-multiple-edit-texts-in-android-mdx-7a3c9b84f463643af949.js.map