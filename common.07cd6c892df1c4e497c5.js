"use strict";(self.webpackChunkng_alain=self.webpackChunkng_alain||[]).push([[592],{4086:(T,E,e)=>{e.d(E,{$4:()=>r,Or:()=>v});var o=e(7716),s=e(9765),f=e(727),c=e(6193),y=e(4762),D=e(6782),A=e(5435),M=e(6587),t=e(521);const l=["container"];let n=(()=>{class a{constructor(i,_){this.cogSrv=i,this.lazySrv=_,this.loading=!1,this.loaded=!1,this.notify$=new s.xQ,this.cog={theme:""}}get cog(){return this._cog}set cog(i){this._cog=this.cogSrv.merge("chart",{theme:"",libs:["https://gw.alipayobjects.com/os/lib/antv/g2/4.1.14/dist/g2.min.js","https://gw.alipayobjects.com/os/lib/antv/data-set/0.11.8/dist/data-set.js"]},i)}libLoad(){return this.loading?(this.loaded&&this.notify$.next(),this):(this.loading=!0,this.lazySrv.load(this.cog.libs).then(()=>{this.loaded=!0,this.notify$.next()}),this)}get notify(){return this.notify$.asObservable()}ngOnDestroy(){this.notify$.unsubscribe()}}return a.\u0275fac=function(i){return new(i||a)(o.LFG(f.Ri),o.LFG(c.Df))},a.\u0275prov=o.Yz7({factory:function(){return new a(o.LFG(f.Ri),o.LFG(c.Df))},token:a,providedIn:"root"}),a})(),r=(()=>{class a{constructor(i,_,m,p,u){this.srv=i,this.el=_,this.ngZone=m,this.platform=p,this.cdr=u,this.repaint=!0,this.destroy$=new s.xQ,this.loaded=!1,this.delay=0,this.theme=i.cog.theme,this.srv.notify.pipe((0,D.R)(this.destroy$),(0,A.h)(()=>!this.loaded)).subscribe(()=>this.load())}get chart(){return this._chart}changeData(){}onInit(){}onChanges(i){}load(){this.ngZone.run(()=>{this.loaded=!0,this.cdr.detectChanges()}),setTimeout(()=>this.install(),this.delay)}ngOnInit(){!this.platform.isBrowser||(this.onInit(),window.G2?this.load():this.srv.libLoad())}ngOnChanges(i){this.onChanges(i),(this.onlyChangeData?this.onlyChangeData(i):1===Object.keys(i).length&&i.data)?this.changeData():!this.chart||!this.repaint||this.ngZone.runOutsideAngular(()=>{this.destroyChart().install()})}destroyChart(){return this._chart&&this._chart.destroy(),this}ngOnDestroy(){this.resize$&&this.resize$.unsubscribe(),this.destroy$.next(),this.destroy$.complete(),this.destroyChart()}}return a.\u0275fac=function(i){return new(i||a)(o.Y36(n),o.Y36(o.SBq),o.Y36(o.R0b),o.Y36(t.t4),o.Y36(o.sBO))},a.\u0275dir=o.lG2({type:a,viewQuery:function(i,_){if(1&i&&o.Gf(l,7),2&i){let m;o.iGM(m=o.CRH())&&(_.node=m.first)}},inputs:{repaint:"repaint",delay:"delay",theme:"theme"},features:[o.TTD]}),(0,y.gn)([(0,M.yF)()],a.prototype,"repaint",void 0),(0,y.gn)([(0,M.Rn)()],a.prototype,"delay",void 0),(0,y.gn)([(0,M.EA)()],a.prototype,"load",null),(0,y.gn)([(0,M.EA)()],a.prototype,"destroyChart",null),a})();function v(a,d){const i=Object.assign({showTitle:!1,showMarkers:!0,enterable:!0,domStyles:{"g2-tooltip":{padding:"0px"},"g2-tooltip-title":{display:"none"},"g2-tooltip-list-item":{margin:"4px"}}},d);return"mini"===a&&(i.position="top",i.domStyles["g2-tooltip"]={padding:"0px",backgroundColor:"transparent",boxShadow:"none"},i.itemTpl="<li>{value}</li>",i.offset=8),i}},1938:(T,E,e)=>{e.d(E,{D:()=>D,y:()=>M});var o=e(4762),s=e(7716),f=e(4086),c=e(6587),y=e(8583);let D=(()=>{class t extends f.$4{constructor(){super(...arguments),this.color="rgba(24, 144, 255, 0.2)",this.borderColor="#1890FF",this.borderWidth=2,this.height=56,this.fit=!0,this.line=!1,this.animate=!0,this.padding=[8,8,8,8],this.data=[],this.yTooltipSuffix="",this.tooltipType="default",this.clickItem=new s.vpe}install(){const{el:n,fit:r,height:v,padding:a,xAxis:d,yAxis:i,yTooltipSuffix:_,tooltipType:m,line:p,theme:u,animate:g,color:C,borderColor:x,borderWidth:P}=this,h=this._chart=new window.G2.Chart({container:n.nativeElement,autoFit:r,height:v,padding:a,theme:u});h.animate(g),!d&&!i&&h.axis(!1),h.axis("x",d||!1),h.axis("y",i||!1),h.legend(!1),h.tooltip((0,f.Or)(m)),h.area().position("x*y").color(C).tooltip("x*y",(O,B)=>({name:O,value:B+_})).shape("smooth"),p&&h.line().position("x*y").shape("smooth").color(x).size(P).tooltip(!1),h.on("plot:click",O=>{const B=this._chart.getSnapRecords({x:O.x,y:O.y});this.ngZone.run(()=>this.clickItem.emit({item:B[0]._origin,ev:O}))}),this.changeData(),h.render()}changeData(){const{_chart:n,data:r}=this;!n||!Array.isArray(r)||r.length<=0||n.changeData(r)}}return t.\u0275fac=function(){let l;return function(r){return(l||(l=s.n5z(t)))(r||t)}}(),t.\u0275cmp=s.Xpm({type:t,selectors:[["g2-mini-area"]],hostVars:2,hostBindings:function(n,r){2&n&&s.Udp("height",r.height,"px")},inputs:{color:"color",borderColor:"borderColor",borderWidth:"borderWidth",height:"height",fit:"fit",line:"line",animate:"animate",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType",xAxis:"xAxis",yAxis:"yAxis"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniArea"],features:[s.qOj],decls:0,vars:0,template:function(n,r){},encapsulation:2,changeDetection:0}),(0,o.gn)([(0,c.Rn)()],t.prototype,"borderWidth",void 0),(0,o.gn)([(0,c.Rn)()],t.prototype,"height",void 0),(0,o.gn)([(0,c.yF)()],t.prototype,"fit",void 0),(0,o.gn)([(0,c.yF)()],t.prototype,"line",void 0),(0,o.gn)([(0,c.yF)()],t.prototype,"animate",void 0),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[y.ez]]}),t})()},4458:(T,E,e)=>{e.d(E,{N:()=>D,B:()=>M});var o=e(4762),s=e(7716),f=e(4086),c=e(6587),y=e(8583);let D=(()=>{class t extends f.$4{constructor(){super(...arguments),this.color="#1890FF",this.height=0,this.borderWidth=5,this.padding=[8,8,8,8],this.data=[],this.yTooltipSuffix="",this.tooltipType="default",this.clickItem=new s.vpe}install(){const{el:n,height:r,padding:v,yTooltipSuffix:a,tooltipType:d,theme:i,color:_,borderWidth:m}=this,p=this._chart=new window.G2.Chart({container:n.nativeElement,autoFit:!0,height:r,padding:v,theme:i});p.scale({x:{type:"cat"},y:{min:0}}),p.legend(!1),p.axis(!1),p.tooltip((0,f.Or)(d,{showCrosshairs:!1})),p.interval().position("x*y").color("x*y",(u,g)=>{const C=this.data.find(x=>x.x===u&&x.y===g);return C&&C.color?C.color:_}).size(m).tooltip("x*y",(u,g)=>({name:u,value:g+a})),p.on("interval:click",u=>{this.ngZone.run(()=>{var g;return this.clickItem.emit({item:null===(g=u.data)||void 0===g?void 0:g.data,ev:u})})}),this.changeData(),p.render()}changeData(){const{_chart:n,data:r}=this;!n||!Array.isArray(r)||r.length<=0||n.changeData(r)}}return t.\u0275fac=function(){let l;return function(r){return(l||(l=s.n5z(t)))(r||t)}}(),t.\u0275cmp=s.Xpm({type:t,selectors:[["g2-mini-bar"]],hostVars:2,hostBindings:function(n,r){2&n&&s.Udp("height",r.height,"px")},inputs:{color:"color",height:"height",borderWidth:"borderWidth",padding:"padding",data:"data",yTooltipSuffix:"yTooltipSuffix",tooltipType:"tooltipType"},outputs:{clickItem:"clickItem"},exportAs:["g2MiniBar"],features:[s.qOj],decls:0,vars:0,template:function(n,r){},encapsulation:2,changeDetection:0}),(0,o.gn)([(0,c.Rn)()],t.prototype,"height",void 0),(0,o.gn)([(0,c.Rn)()],t.prototype,"borderWidth",void 0),t})(),M=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=s.oAB({type:t}),t.\u0275inj=s.cJS({imports:[[y.ez]]}),t})()}}]);