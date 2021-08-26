"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[0],{920:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return u}});var a=n(5773),i=n(808),r=(n(7378),n(5318)),l=["components"],o={sidebar_position:3},d="Customization",p={unversionedId:"customization",id:"customization",isDocsHomePage:!1,title:"Customization",description:"Custom Styling",source:"@site/../docs/customization.md",sourceDirName:".",slug:"/customization",permalink:"/react-svg-worldmap/customization",editUrl:"https://github.com/yanivam/react-svg-worldmap/edit/main/docs/../docs/customization.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/react-svg-worldmap/quick-start"},next:{title:"Examples",permalink:"/react-svg-worldmap/examples"}},m=[{value:"Custom Styling",id:"custom-styling",children:[]},{value:"Onclick Action",id:"onclick-action",children:[]},{value:"Sizing",id:"sizing",children:[]},{value:"Props",id:"props",children:[]}],s={toc:m};function u(t){var e=t.components,n=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"customization"},"Customization"),(0,r.kt)("h2",{id:"custom-styling"},"Custom Styling"),(0,r.kt)("p",null,"This is an optional more advanced customization option. When used, the developer has full control to define the color, opacity and any other style element of a country with data record."),(0,r.kt)("p",null,"This is done by passing your custom implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"styleFunction"),". The function recieves as input the country context that includes country,countryValue: colorm, minValue and maxValue, and returns a json object representing the style."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import {CountryContext} from 'react-svg-worldmap';\n\nconst stylingFunction = ({\n  countryValue,\n  minValue,\n  maxValue,\n  country,\n  color,\n}: CountryContext) => {\n  const opacityLevel =\n    0.1 + (1.5 * (countryValue - minValue)) / (maxValue - minValue);\n  return {\n    fill: country === 'US' ? 'blue' : color,\n    fillOpacity: opacityLevel,\n    stroke: 'green',\n    strokeWidth: 1,\n    strokeOpacity: 0.2,\n    cursor: 'pointer',\n  };\n};\n")),(0,r.kt)("h2",{id:"onclick-action"},"Onclick Action"),(0,r.kt)("p",null,"This is an optional more advanced customization option. When used, the developer has full access to the click event, country name, iso code, value, prefix and suffix is given."),(0,r.kt)("p",null,"This is done by passing your custom implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"onClickFunction"),". The function takes in the following parameters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"event: React.MouseEvent<SVGElement, MouseEvent>")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"countryName: string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"isoCode: string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"value: string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"prefix?: string")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"suffix?: string"))),(0,r.kt)("h2",{id:"sizing"},"Sizing"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," can be a number specifying the width of the map, in pixels. It can also be one of the following aliases:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Alias"),(0,r.kt)("th",{parentName:"tr",align:null},"Width"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"sm")),(0,r.kt)("td",{parentName:"tr",align:null},"240")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"md")),(0,r.kt)("td",{parentName:"tr",align:null},"336")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lg")),(0,r.kt)("td",{parentName:"tr",align:null},"480")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xl")),(0,r.kt)("td",{parentName:"tr",align:null},"640")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"xxl")),(0,r.kt)("td",{parentName:"tr",align:null},"1200")))),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"size")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"responsive"),", the map size will be set automatically based on the window size."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The algorithm used in responsive sizing is:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const width = Math.min(window.innerHeight, window.innerWidth) * 0.75;\n")))),(0,r.kt)("h2",{id:"props"},"Props"),(0,r.kt)("small",null,(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Prop"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"data")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Data[]")),(0,r.kt)("td",{parentName:"tr",align:null},"Mandatory. Array of JSON records, each with country/value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"size")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"string ","|"," number")),(0,r.kt)("td",{parentName:"tr",align:null},"The size of your map. See ",(0,r.kt)("a",{parentName:"td",href:"#sizing"},"Sizing")," for details, and see ",(0,r.kt)("a",{parentName:"td",href:"/examples/sizing"},"Sizing example"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"title")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Any string for the title of your map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"color")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Color for highlighted countries. A standard color string. E.g. "red" or "#ff0000".')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tooltipBgColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tooltipTextColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Tooltip text color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"valuePrefix")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'A string to prefix values in tooltips. E.g. "$"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"valueSuffix")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'A string to suffix values in tooltips. E.g. "USD"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"backgroundColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Component background color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"strokeOpacity")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"The stroke opacity of non selected countries.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frame")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"Should a frame be drawn around the map.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"frameColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Frame color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"borderColor")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},"Border color around each individual country.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\ud83d\udea7 ",(0,r.kt)("inlineCode",{parentName:"td"},"type")," \ud83d\udea7"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"string")),(0,r.kt)("td",{parentName:"tr",align:null},'Select type of map you want, either "tooltip" or "marker". ',(0,r.kt)("br",null),"\ud83d\udcdd This functionality not only complicates the code, but is infrequently used and needs to be redesigned to make it better. For now it is deprecated and has no effect. \ud83d\udcdd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"styleFunction")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(context: CountryContext) => React.CSSProperties")),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function to customize styling of each country (see ",(0,r.kt)("a",{parentName:"td",href:"/examples/custom-style"},"Custom styles example"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hrefFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"See below"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function to bind an href link to each country. The return can be the target URL as a string or an object specifying both the ",(0,r.kt)("inlineCode",{parentName:"td"},"href")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"target")," properties. (see ",(0,r.kt)("a",{parentName:"td",href:"/examples/links"},"Href binding example"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"tooltipTextFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"See below"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function to customize tooltip text (see ",(0,r.kt)("a",{parentName:"td",href:"/examples/localization"},"Localization example"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"onClickFunction")),(0,r.kt)("td",{parentName:"tr",align:null},"See below"),(0,r.kt)("td",{parentName:"tr",align:null},"A callback function to add custom onclick logic (see ",(0,r.kt)("a",{parentName:"td",href:"/examples/onclick"},"Onclick action example"),")"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"type Data = {\n  country: string;\n  value: number;\n};\n\ntype hrefFunctionType = (\n  countryName: string,\n  isoCode: string,\n  value: string,\n  prefix?: string,\n  suffix?: string,\n) => {target: string, href: string} | string | undefined;\n\ntype tooltipTextFunctionType = (\n  countryName: string,\n  isoCode: string,\n  value: string,\n  prefix?: string,\n  suffix?: string,\n) => string;\n\ntype onClickFunctionType = (\n  event: React.MouseEvent<SVGElement, MouseEvent>,\n  countryName: string,\n  isoCode: string,\n  value: string,\n  prefix?: string,\n  suffix?: string,\n) => void;\n")))}u.isMDXComponent=!0}}]);