"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[105],{8922:function(e,t,n){n.d(t,{B:function(){return a},t:function(){return l}});var a=[{country:"cn",value:1389618778},{country:"in",value:1311559204},{country:"us",value:331883986},{country:"id",value:264935824},{country:"br",value:210301591},{country:"ng",value:208679114},{country:"ru",value:141944641},{country:"mx",value:127318112}],l=[{country:"cn",value:9770.8},{country:"in",value:2010},{country:"us",value:62794.6},{country:"id",value:3893.6},{country:"br",value:8920.8},{country:"ng",value:2028.2},{country:"ru",value:11288.9},{country:"mx",value:9673.4}]},2554:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(7378),l=n(9131),r=n(9328),u=n(4409),c=n(8922),i=function(e){var t=[{label:"Atlantic",x:.37*e,y:.39*e},{label:"Indian",x:.69*e,y:.57*e},{label:"Pacific",x:.083*e,y:.48*e},{label:"Arctic",x:.75*e,y:.058*e,style:{fill:"blue"}}];return e<550&&t.forEach((function(e){e.style=Object.assign({},e.style,{fontSize:"70%"})})),t};function o(){return a.createElement(u.ZP,{title:"The ten highest GDP per capita countries",size:"responsive",frame:!0,data:c.B,textLabelFunction:i})}var s=n(2496);function y(){return a.createElement(l.Z,{title:"Text labels example"},a.createElement("div",{className:s.Z.main},a.createElement(o,null),a.createElement("div",{className:s.Z.code},a.createElement(r.Z,{className:"language-tsx"},'import type { ComponentProps } from "react";\nimport React from "react";\nimport WorldMap from "react-svg-worldmap";\nimport { populationData } from "../data/CountryData";\n\nconst createTextLabels = (width: number) => {\n  const labels: ({ label: string } & ComponentProps<"text">)[] = [\n    { label: "Atlantic", x: 0.37 * width, y: 0.39 * width },\n    { label: "Indian", x: 0.69 * width, y: 0.57 * width },\n    { label: "Pacific", x: 0.083 * width, y: 0.48 * width },\n    {\n      label: "Arctic",\n      x: 0.75 * width,\n      y: 0.058 * width,\n      style: { fill: "blue" },\n    },\n  ];\n  if (width < 550) {\n    labels.forEach((label) => {\n      label.style = { ...label.style, fontSize: "70%" };\n    });\n  }\n  return labels;\n};\n\nexport default function App(): JSX.Element {\n  return (\n    <WorldMap\n      title="The ten highest GDP per capita countries"\n      size="responsive"\n      frame\n      data={populationData}\n      textLabelFunction={createTextLabels}\n    />\n  );\n}\n'))))}}}]);