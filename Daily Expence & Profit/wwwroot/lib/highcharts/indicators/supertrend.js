/*
 Highstock JS v11.0.1 (2023-05-08)

 Indicator series type for Highcharts Stock

 (c) 2010-2021 Wojciech Chmiel

 License: www.highcharts.com/license
*/
'use strict';(function(a){"object"===typeof module&&module.exports?(a["default"]=a,module.exports=a):"function"===typeof define&&define.amd?define("highcharts/indicators/supertrend",["highcharts","highcharts/modules/stock"],function(h){a(h);a.Highcharts=h;return a}):a("undefined"!==typeof Highcharts?Highcharts:void 0)})(function(a){function h(a,w,h,u){a.hasOwnProperty(w)||(a[w]=u.apply(null,h),"function"===typeof CustomEvent&&window.dispatchEvent(new CustomEvent("HighchartsModuleLoaded",{detail:{path:w,
module:a[w]}})))}a=a?a._modules:{};h(a,"Stock/Indicators/Supertrend/SupertrendIndicator.js",[a["Core/Series/SeriesRegistry.js"],a["Core/Utilities.js"],a["Core/Chart/StockChart.js"]],function(a,h,B){function u(d,b,C){return{index:b,close:d.yData[b][C],x:d.xData[b]}}const {atr:w,sma:z}=a.seriesTypes,{addEvent:D,correctFloat:A,isArray:E,extend:F,merge:v,objectEach:G}=h;class y extends z{constructor(){super(...arguments);this.points=this.options=this.linkedParent=this.data=void 0}init(){const d=this;
super.init.apply(d,arguments);const b=D(B,"afterLinkSeries",()=>{if(d.options){const b=d.options;b.cropThreshold=d.linkedParent.options.cropThreshold-(b.params.period-1)}b()},{order:1})}drawGraph(){const d=this,b=d.options,a=d.linkedParent,h=a?a.points:[],r=d.points,w=d.graph;var t=h.length-r.length;t=0<t?t:0;const H={options:{gapSize:b.gapSize}},k={top:[],bottom:[],intersect:[]},x={top:{styles:{lineWidth:b.lineWidth,lineColor:b.fallingTrendColor||b.color,dashStyle:b.dashStyle}},bottom:{styles:{lineWidth:b.lineWidth,
lineColor:b.risingTrendColor||b.color,dashStyle:b.dashStyle}},intersect:b.changeTrendLine};let f,n,e,g;let p,m,q,l=r.length;for(;l--;){f=r[l];n=r[l-1];e=h[l-1+t];g=h[l-2+t];var c=h[l+t];p=h[l+t+1];m=f.options.color;q={x:f.x,plotX:f.plotX,plotY:f.plotY,isNull:!1};!g&&e&&a.yData[e.index-1]&&(g=u(a,e.index-1,3));!p&&c&&a.yData[c.index+1]&&(p=u(a,c.index+1,3));!e&&g&&a.yData[g.index+1]?e=u(a,g.index+1,3):!e&&c&&a.yData[c.index-1]&&(e=u(a,c.index-1,3));f&&e&&c&&g&&f.x!==e.x&&(f.x===c.x?(g=e,e=c):f.x===
g.x?(e=g,g={close:a.yData[e.index-1][3],x:a.xData[e.index-1]}):p&&f.x===p.x&&(e=p,g=c));n&&g&&e?(c={x:n.x,plotX:n.plotX,plotY:n.plotY,isNull:!1},f.y>=e.close&&n.y>=g.close?(f.color=m||b.fallingTrendColor||b.color,k.top.push(q)):f.y<e.close&&n.y<g.close?(f.color=m||b.risingTrendColor||b.color,k.bottom.push(q)):(k.intersect.push(q),k.intersect.push(c),k.intersect.push(v(c,{isNull:!0})),f.y>=e.close&&n.y<g.close?(f.color=m||b.fallingTrendColor||b.color,n.color=m||b.risingTrendColor||b.color,k.top.push(q),
k.top.push(v(c,{isNull:!0}))):f.y<e.close&&n.y>=g.close&&(f.color=m||b.risingTrendColor||b.color,n.color=m||b.fallingTrendColor||b.color,k.bottom.push(q),k.bottom.push(v(c,{isNull:!0}))))):e&&(f.y>=e.close?(f.color=m||b.fallingTrendColor||b.color,k.top.push(q)):(f.color=m||b.risingTrendColor||b.color,k.bottom.push(q)))}G(k,function(b,c){d.points=b;d.options=v(x[c].styles,H);d.graph=d["graph"+c+"Line"];z.prototype.drawGraph.call(d);d["graph"+c+"Line"]=d.graph});d.points=r;d.options=b;d.graph=w}getValues(a,
b){var d=b.period;b=b.multiplier;const h=a.xData,r=a.yData,u=[],t=[],v=[],k=0===d?0:d-1,x=[],f=[];let n,e,g,p,m,q,l,c;if(!(h.length<=d||!E(r[0])||4!==r[0].length||0>d)){a=w.prototype.getValues.call(this,a,{period:d}).yData;for(c=0;c<a.length;c++){l=r[k+c];q=r[k+c-1]||[];g=x[c-1];p=f[c-1];m=v[c-1];0===c&&(g=p=m=0);d=A((l[1]+l[2])/2+b*a[c]);n=A((l[1]+l[2])/2-b*a[c]);x[c]=d<g||q[3]>g?d:g;f[c]=n>p||q[3]<p?n:p;if(m===g&&l[3]<x[c]||m===p&&l[3]<f[c])e=x[c];else if(m===g&&l[3]>x[c]||m===p&&l[3]>f[c])e=f[c];
u.push([h[k+c],e]);t.push(h[k+c]);v.push(e)}return{values:u,xData:t,yData:v}}}}y.defaultOptions=v(z.defaultOptions,{params:{index:void 0,multiplier:3,period:10},risingTrendColor:"#06b535",fallingTrendColor:"#f21313",changeTrendLine:{styles:{lineWidth:1,lineColor:"#333333",dashStyle:"LongDash"}}});F(y.prototype,{nameBase:"Supertrend",nameComponents:["multiplier","period"]});a.registerSeriesType("supertrend",y);"";return y});h(a,"masters/indicators/supertrend.src.js",[],function(){})});
//# sourceMappingURL=supertrend.js.map