"use strict";(self.webpackChunkmy_learnings=self.webpackChunkmy_learnings||[]).push([[149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:6,title:"Objects in JS",Description:"Information on Objects datastructure of JS"},i="Objects",c={unversionedId:"JavaScript/Objects",id:"JavaScript/Objects",title:"Objects in JS",description:"Objects definition",source:"@site/docs/JavaScript/Objects.md",sourceDirName:"JavaScript",slug:"/JavaScript/Objects",permalink:"/learndocs/JavaScript/Objects",draft:!1,editUrl:"https://github.com/stevenovak123/learndocs/tree/master/docs/JavaScript/Objects.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Objects in JS",Description:"Information on Objects datastructure of JS"},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/learndocs/JavaScript/Arrays"}},s={},l=[{value:"Objects definition",id:"objects-definition",level:2},{value:"Retrieving data from objects",id:"retrieving-data-from-objects",level:2},{value:"Dot &amp; Bracket Notation",id:"dot--bracket-notation",level:3}],p={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"objects"},"Objects"),(0,a.kt)("h2",{id:"objects-definition"},"Objects definition"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Objects are a collection of ",(0,a.kt)("strong",{parentName:"li"},"named values")," (key value pairs)"),(0,a.kt)("li",{parentName:"ul"},"It is common practice to declare them with the ",(0,a.kt)("inlineCode",{parentName:"li"},"const")," keyword."),(0,a.kt)("li",{parentName:"ul"},"The named values are called ",(0,a.kt)("strong",{parentName:"li"},"properties"),"."),(0,a.kt)("li",{parentName:"ul"},"Order the properties don't matter.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const person = {\n  name: "Steve Dsouza",\n  age: 22,\n  motherTongue: "Konkani",\n  techStack: ["HTML", "CSS", "Javascript"],\n};\n')),(0,a.kt)("h2",{id:"retrieving-data-from-objects"},"Retrieving data from objects"),(0,a.kt)("h3",{id:"dot--bracket-notation"},"Dot & Bracket Notation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"values from objects can be retrieved using the ",(0,a.kt)("inlineCode",{parentName:"li"},".")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),"notation"),(0,a.kt)("li",{parentName:"ul"},"to retrieve values with ",(0,a.kt)("inlineCode",{parentName:"li"},"."),", It has to be the actual property name."),(0,a.kt)("li",{parentName:"ul"},"to retrieve values with ",(0,a.kt)("inlineCode",{parentName:"li"},"[]"),",It can be computed values that correspond to the property name.\ns")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const person = {\n  firstName: "ABC",\n  lastName: "EFG"\n  age: 22,\n  motherTongue: "Konkani",\n  techStack: ["HTML", "CSS", "Javascript"],\n};\n// using the dot notation\nconsole.log(person.firstName); // output => ABC\n//  using the bracket notatiom\nconst nameKey= \'Name\';\nconsole.log(person["first" + nameKey]); // output => ABC\n')))}m.isMDXComponent=!0}}]);