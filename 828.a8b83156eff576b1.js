"use strict";(self.webpackChunkcafe_awake=self.webpackChunkcafe_awake||[]).push([[828],{3828:(H,a,t)=>{t.r(a),t.d(a,{HomeModule:()=>g});var l=t(9808),i=t(7163),s=t(7587),r=t(4251),u=t(3009),m=t(9017);const h=function(){return[]},p=[{path:"",component:(()=>{class e{constructor(o,c){this.graphcms=o,this.locale=c,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.locale.language.subscribe(()=>this.refresh())),this.refresh()}ngOnDestroy(){this.subscriptions.forEach(o=>o.unsubscribe())}refresh(){this.page=void 0,this.graphcms.getPage("HOME",this.locale.language.value).subscribe(o=>{this.page=o})}}return e.\u0275fac=function(o){return new(o||e)(s.Y36(r.P),s.Y36(u.O))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-home"]],decls:1,vars:2,consts:[[3,"sections"]],template:function(o,c){1&o&&s._UZ(0,"app-section-list",0),2&o&&s.Q6J("sections",(null==c.page?null:c.page.sections)||s.DdM(1,h))},directives:[m.j],encapsulation:2}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.Bz.forChild(p)],i.Bz]}),e})();var f=t(8082);let g=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[l.ez,d,f.m]]}),e})()}}]);