"use strict";(self.webpackChunkmy_learnings=self.webpackChunkmy_learnings||[]).push([[149],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,b=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9543:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:7,title:"Objects",Description:"Information on Objects datastructure of JS"},i="Objects",s={unversionedId:"JavaScript/Objects",id:"JavaScript/Objects",title:"Objects",description:"Objects definition",source:"@site/docs/JavaScript/Objects.md",sourceDirName:"JavaScript",slug:"/JavaScript/Objects",permalink:"/learndocs/JavaScript/Objects",draft:!1,editUrl:"https://github.com/stevenovak123/learndocs/tree/master/docs/JavaScript/Objects.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,title:"Objects",Description:"Information on Objects datastructure of JS"},sidebar:"tutorialSidebar",previous:{title:"Arrays",permalink:"/learndocs/JavaScript/Arrays"}},l={},c=[{value:"Objects definition",id:"objects-definition",level:2},{value:"Retrieving data from objects",id:"retrieving-data-from-objects",level:2},{value:"Dot &amp; Bracket Notation",id:"dot--bracket-notation",level:3},{value:"Object methods",id:"object-methods",level:2},{value:"Object destructuring",id:"object-destructuring",level:2},{value:"Optional Chaining",id:"optional-chaining",level:2},{value:"Object Keys ,values, entries",id:"object-keys-values-entries",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"objects"},"Objects"),(0,r.kt)("h2",{id:"objects-definition"},"Objects definition"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Objects are a collection of ",(0,r.kt)("strong",{parentName:"li"},"named values")," (key value pairs)"),(0,r.kt)("li",{parentName:"ul"},"It is common practice to declare them with the ",(0,r.kt)("inlineCode",{parentName:"li"},"const")," keyword."),(0,r.kt)("li",{parentName:"ul"},"The named values are called ",(0,r.kt)("strong",{parentName:"li"},"properties"),"."),(0,r.kt)("li",{parentName:"ul"},"Order the properties don't matter.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const person = {\n  name: 'Steve Dsouza',\n  age: 22,\n  motherTongue: 'Konkani',\n  techStack: ['HTML', 'CSS', 'Javascript'],\n};\n")),(0,r.kt)("h2",{id:"retrieving-data-from-objects"},"Retrieving data from objects"),(0,r.kt)("h3",{id:"dot--bracket-notation"},"Dot & Bracket Notation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"values from objects can be retrieved using the ",(0,r.kt)("inlineCode",{parentName:"li"},".")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),"notation"),(0,r.kt)("li",{parentName:"ul"},"to retrieve values with ",(0,r.kt)("inlineCode",{parentName:"li"},"."),", It has to be the actual property name."),(0,r.kt)("li",{parentName:"ul"},"to retrieve values with ",(0,r.kt)("inlineCode",{parentName:"li"},"[]"),",It can be computed values that correspond to the property name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const person = {\n  firstName: 'ABC',\n  lastName: 'EFG',\n  age: 22,\n  motherTongue: 'Konkani',\n  techStack: ['HTML', 'CSS', 'Javascript'],\n};\n// using the dot notation\nconsole.log(person.firstName); // output => ABC\n//  using the bracket notatiom\nconst nameKey = 'Name';\nconsole.log(person['first' + nameKey]); // output => ABC\n")),(0,r.kt)("h2",{id:"object-methods"},"Object methods"),(0,r.kt)("p",null,"Objects can have methods in them. As methods are just function expressions they can be stored in an object."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There could be a possibility that a method ",(0,r.kt)("inlineCode",{parentName:"li"},"calcAge")," can be called multiple times in the program. This would cause a lot of resource use if the function was big and complex."),(0,r.kt)("li",{parentName:"ul"},"It is good practice to store the values back into the object, so it can be later accessed as a property.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const person = {\n  firstName: 'ABC',\n  lastName: 'EFG',\n  birthYear: 2001,\n  motherTongue: 'Konkani',\n  techStack: ['HTML', 'CSS', 'Javascript'],\n\n  calcAge: function () {\n    this.age = 2023 - this.birthYear;\n    return 2023 - this.birthYear;\n  },\n};\n\nconsole.log(person.calcAge()); // output=> 22\nconsole.log(person.age); // output=> 22\n")),(0,r.kt)("h2",{id:"object-destructuring"},"Object destructuring"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values properties from objects, into distinct variables.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const object = { a: 10, b: 2 };\nconst { a, b } = object;\nconsole.log(a); //output => 10\n"))),(0,r.kt)("li",{parentName:"ul"},"We can have different variable name from the property names.",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const person = {\n  name: 'Steve',\n  surname: 'Dsouza',\n};\nconst { name: firstName, surname: lastName } = person;\nconsole.log(firstName, lastName); //output => Steve Dsouza\n")))),(0,r.kt)("h2",{id:"optional-chaining"},"Optional Chaining"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The optional chaining (?.) operator accesses an object's property or calls a function.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error."))),(0,r.kt)("li",{parentName:"ul"},"This is often used when using API's , when we don't know what are the property names."),(0,r.kt)("li",{parentName:"ul"},"Can be used with arrays as well.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const adventurer = {\n  name: 'Alice',\n  cat: {\n    name: 'Dinah',\n  },\n};\n\nconst dogName = adventurer.dog?.name;\nconsole.log(dogName); //output => undefined\nconst catName = adventurer.cat?.name;\nconsole.log(catName); //output=> Dinah\n")),(0,r.kt)("h2",{id:"object-keys-values-entries"},"Object Keys ,values, entries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Used to get object properties and values."),(0,r.kt)("li",{parentName:"ul"},"Returns an array.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const object1 = {\n  a: 'somestring',\n  b: 42,\n  c: false,\n};\n\nconsole.log(Object.keys(object1)); // output=> [\"a\",\"b\",\"c\"]\nconsole.log(Object.values(object1)); // output=>[\"somestring\", 42, false]\nconsole.log(Object.entries(object1));\n// output => [ [ 'a', 'somestring' ], [ 'b', 42 ], [ 'c', false ] ]\n// Entries returns it as a key value pair\n")))}m.isMDXComponent=!0}}]);