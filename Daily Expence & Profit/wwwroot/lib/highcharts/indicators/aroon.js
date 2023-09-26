/*
 Highstock JS v11.0.1 (2023-05-08)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/aroon",["highcharts","highcharts/modules/stock"],function(f){a(f);a.Highcharts=f;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function f(a,d,k,f){a.hasOwnProperty(d)||(a[d]=f.apply(null,k),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:d,
module:a[d]}})))}a=a?a._modules:{};f(a,"Stock/Indicators/MultipleLinesComposition.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d){const {sma:{prototype:k}}=a.seriesTypes,{defined:f,error:q,merge:t}=d;var g;(function(a){function m(b){return"plot"+b.charAt(0).toUpperCase()+b.slice(1)}function w(b,n){const a=[];(b.pointArrayMap||[]).forEach(b=>{b!==n&&a.push(m(b))});return a}function u(){const b=this,n=b.linesApiNames;var a=b.areaLinesNames;const p=b.points,c=b.options,
u=b.graph,d={options:{gapSize:c.gapSize}},e=[];var h=w(b,b.pointValKey);let l=p.length,g;h.forEach((b,a)=>{for(e[a]=[];l--;)g=p[l],e[a].push({x:g.x,plotX:g.plotX,plotY:g[b],isNull:!f(g[b])});l=p.length});if(b.userOptions.fillColor&&a.length){var r=h.indexOf(m(a[0]));r=e[r];a=1===a.length?p:e[h.indexOf(m(a[1]))];h=b.color;b.points=a;b.nextPoints=r;b.color=b.userOptions.fillColor;b.options=t(p,d);b.graph=b.area;b.fillGraph=!0;k.drawGraph.call(b);b.area=b.graph;delete b.nextPoints;delete b.fillGraph;
b.color=h}n.forEach((a,n)=>{e[n]?(b.points=e[n],c[a]?b.options=t(c[a].styles,d):q('Error: "There is no '+a+' in DOCS options declared. Check if linesApiNames are consistent with your DOCS line names."'),b.graph=b["graph"+a],k.drawGraph.call(b),b["graph"+a]=b.graph):q('Error: "'+a+" doesn't have equivalent in pointArrayMap. To many elements in linesApiNames relative to pointArrayMap.\"")});b.points=p;b.options=c;b.graph=u;k.drawGraph.call(b)}function h(b){var a;let c=[];b=b||this.points;if(this.fillGraph&&
this.nextPoints){if((a=k.getGraphPath.call(this,this.nextPoints))&&a.length){a[0][0]="L";c=k.getGraphPath.call(this,b);a=a.slice(0,c.length);for(let b=a.length-1;0<=b;b--)c.push(a[b])}}else c=k.getGraphPath.apply(this,arguments);return c}function r(b){const a=[];(this.pointArrayMap||[]).forEach(n=>{a.push(b[n])});return a}function c(){const b=this.pointArrayMap;let a=[],c;a=w(this);k.translate.apply(this,arguments);this.points.forEach(n=>{b.forEach((b,e)=>{c=n[b];this.dataModify&&(c=this.dataModify.modifyValue(c));
null!==c&&(n[a[e]]=this.yAxis.toPixels(c,!0))})})}const g=[],x=["bottomLine"],e=["top","bottom"],l=["top"];a.compose=function(b){if(d.pushUnique(g,b)){const a=b.prototype;a.linesApiNames=a.linesApiNames||x.slice();a.pointArrayMap=a.pointArrayMap||e.slice();a.pointValKey=a.pointValKey||"top";a.areaLinesNames=a.areaLinesNames||l.slice();a.drawGraph=u;a.getGraphPath=h;a.toYData=r;a.translate=c}return b}})(g||(g={}));return g});f(a,"Stock/Indicators/Aroon/AroonIndicator.js",[a["Stock/Indicators/MultipleLinesComposition.js"],
a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"]],function(a,d,k){function f(a,f){let h=a[0],d=0,c;for(c=1;c<a.length;c++)if("max"===f&&a[c]>=h||"min"===f&&a[c]<=h)h=a[c],d=c;return d}const {sma:q}=d.seriesTypes,{extend:t,merge:g,pick:v}=k;class m extends q{constructor(){super(...arguments);this.points=this.options=this.data=void 0}getValues(a,d){d=d.period;const h=a.xData,g=(a=a.yData)?a.length:0,c=[],k=[],m=[];let e;for(e=d-1;e<g;e++){var l=a.slice(e-d+1,e+2);var b=f(l.map(function(a){return v(a[2],
a)}),"min");l=f(l.map(function(a){return v(a[1],a)}),"max");l=l/d*100;b=b/d*100;h[e+1]&&(c.push([h[e+1],l,b]),k.push(h[e+1]),m.push([l,b]))}return{values:c,xData:k,yData:m}}}m.defaultOptions=g(q.defaultOptions,{params:{index:void 0,period:25},marker:{enabled:!1},tooltip:{pointFormat:'<span style="color:{point.color}">\u25cf</span><b> {series.name}</b><br/>Aroon Up: {point.y}<br/>Aroon Down: {point.aroonDown}<br/>'},aroonDown:{styles:{lineWidth:1,lineColor:void 0}},dataGrouping:{approximation:"averages"}});
t(m.prototype,{areaLinesNames:[],linesApiNames:["aroonDown"],nameBase:"Aroon",pointArrayMap:["y","aroonDown"],pointValKey:"y"});a.compose(m);d.registerSeriesType("aroon",m);"";return m});f(a,"masters/indicators/aroon.src.js",[],function(){})});
//# sourceMappingURL=aroon.js.map