"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[770],{5318:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4744:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=["components"],c={sidebar_position:2},l="Quick start",u={unversionedId:"quick-start",id:"quick-start",isDocsHomePage:!1,title:"Quick start",description:"Install",source:"@site/../docs/quick-start.md",sourceDirName:".",slug:"/quick-start",permalink:"/react-svg-worldmap/quick-start",editUrl:"https://github.com/yanivam/react-svg-worldmap/edit/main/docs/../docs/quick-start.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/react-svg-worldmap/"},next:{title:"Customization",permalink:"/react-svg-worldmap/customization"}},s=[{value:"Install",id:"install",children:[]},{value:"Usage",id:"usage",children:[]},{value:"JavaScript Usage",id:"javascript-usage",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick start"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"In order to install, run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ npm install react-svg-worldmap --save\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"Explore the example folder for a simple case for an end-to-end react app using the react-svg-worldmap."),(0,o.kt)("p",null,"Here is a simple example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\nimport './App.css';\nimport WorldMap from 'react-svg-worldmap';\n\nfunction App() {\n  const data = [\n    {country: 'cn', value: 1389618778}, // china\n    {country: 'in', value: 1311559204}, // india\n    {country: 'us', value: 331883986}, // united states\n    {country: 'id', value: 264935824}, // indonesia\n    {country: 'pk', value: 210797836}, // pakistan\n    {country: 'br', value: 210301591}, // brazil\n    {country: 'ng', value: 208679114}, // nigeria\n    {country: 'bd', value: 161062905}, // bangladesh\n    {country: 'ru', value: 141944641}, // russia\n    {country: 'mx', value: 127318112}, // mexico\n  ];\n\n  return (\n    <div className=\"App\">\n      <WorldMap\n        color=\"red\"\n        title=\"Top 10 Populous Countries\"\n        value-suffix=\"people\"\n        size=\"lg\"\n        data={data}\n      />\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"The only mandatory prop is ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),", which contains an array of country/value objects, with values for countries that you have values for. (Countries without a value will be blank.) The country code is a 2 character string representing the country (",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2"},"ISO alpha-2"),") and value is a number."),(0,o.kt)("h2",{id:"javascript-usage"},"JavaScript Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import React, {Component} from 'react';\nconst WorldMap = require('react-svg-worldmap');\n\nexport default class SimpleJs extends Component {\n  render() {\n    // ...\n    const data = [\n      {country: 'cn', value: 1389618778}, // china\n      {country: 'in', value: 1311559204}, // india\n    ];\n    // ...\n    return (\n      <div id=\"root\">\n        <WorldMap color=\"green\" title=\"This is My Map\" size=\"lg\" data={data} />\n      </div>\n    );\n  }\n}\n")))}d.isMDXComponent=!0}}]);