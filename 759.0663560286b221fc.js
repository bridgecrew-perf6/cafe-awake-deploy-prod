"use strict";(self.webpackChunkcafe_awake=self.webpackChunkcafe_awake||[]).push([[759],{4759:(Q,g,c)=>{c.r(g),c.d(g,{LocationsModule:()=>Y});var l=c(9808),r=c(522),_=c(2340),n=c(7587),d=c(4251),p=c(3009),u=c(4836),h=c(9017),f=c(8503);function C(o,e){if(1&o&&(n.TgZ(0,"div",10),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(null==t.page?null:t.page.title)}}function O(o,e){if(1&o&&(n.TgZ(0,"h1"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(null==t.location?null:t.location.title)}}function x(o,e){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const t=e.$implicit;n.xp6(1),n.Oqu(t)}}function M(o,e){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Oqu(t.location.phone)}}function P(o,e){if(1&o&&(n.TgZ(0,"div"),n._uU(1),n.qZA()),2&o){const t=e.$implicit;n.xp6(1),n.Oqu(t)}}function L(o,e){if(1&o&&(n.TgZ(0,"div",11),n._UZ(1,"img",12),n.qZA()),2&o){const t=n.oxw(2);n.xp6(1),n.Q6J("src",t.location.image.url,n.LSH)}}function Z(o,e){if(1&o&&(n.TgZ(0,"div",3),n.TgZ(1,"div",4),n.YNc(2,C,2,1,"div",5),n.YNc(3,O,2,1,"h1",6),n.TgZ(4,"div",7),n.YNc(5,x,2,1,"div",8),n.qZA(),n.TgZ(6,"div",7),n.YNc(7,M,2,1,"div",6),n.qZA(),n.TgZ(8,"div",7),n.YNc(9,P,2,1,"div",8),n.qZA(),n.qZA(),n.YNc(10,L,2,1,"div",9),n.qZA()),2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",null==t.page?null:t.page.title),n.xp6(1),n.Q6J("ngIf",null==t.location?null:t.location.title),n.xp6(2),n.Q6J("ngForOf",t.location.addressLines),n.xp6(2),n.Q6J("ngIf",t.location.phone),n.xp6(2),n.Q6J("ngForOf",t.location.hoursLines),n.xp6(1),n.Q6J("ngIf",t.location.image)}}function I(o,e){if(1&o&&(n._UZ(0,"iframe",17),n.ALo(1,"safeResourceUrl")),2&o){const t=n.oxw(2);n.Q6J("src",n.lcZ(1,1,t.embedUrl),n.uOi)}}function b(o,e){if(1&o&&(n.TgZ(0,"div",13),n.TgZ(1,"div",14),n.YNc(2,I,2,3,"iframe",15),n.qZA(),n._UZ(3,"div",16),n.ALo(4,"safeHtml"),n.qZA()),2&o){const t=n.oxw();n.xp6(2),n.Q6J("ngIf",t.embedUrl),n.xp6(1),n.Q6J("innerHTML",n.lcZ(4,2,(null==t.location||null==t.location.text?null:t.location.text.html)||""),n.oJD)}}const T=function(){return[]};let y=(()=>{class o{constructor(t,i,s,a){this.route=t,this.graphcms=i,this.locale=s,this.seo=a,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.locale.updates.subscribe(()=>this.refresh())),this.subscriptions.push(this.route.params.subscribe(()=>this.refresh()))}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}refresh(){var t,i,s,a;const m=this.locale.language;if(this.page=this.graphcms.getPage("LOCATIONS_ITEM",m),this.location=this.graphcms.getLocation(this.route.snapshot.params.id,m),this.embedUrl=void 0,null===(t=this.location)||void 0===t?void 0:t.geo){const v=`${null===(i=this.location)||void 0===i?void 0:i.geo.latitude},${null===(s=this.location)||void 0===s?void 0:s.geo.longitude}`;this.embedUrl=`https://www.google.com/maps/embed/v1/place?key=${_.N.googleApiKey}&q=${v}&center=${v}&zoom=16&language=${m}`}this.seo.updateSEO({title:null===(a=this.location)||void 0===a?void 0:a.title})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(r.gz),n.Y36(d.P),n.Y36(p.O),n.Y36(u.L))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-locations-item"]],decls:3,vars:4,consts:[["class","common-section location",4,"ngIf"],["class","common-section detail",4,"ngIf"],[3,"sections"],[1,"common-section","location"],[1,"content-container"],["class","subtitle",4,"ngIf"],[4,"ngIf"],[1,"address"],[4,"ngFor","ngForOf"],["class","img",4,"ngIf"],[1,"subtitle"],[1,"img"],[3,"src"],[1,"common-section","detail"],[1,"image-container"],["frameborder","0","style","border:0","referrerpolicy","no-referrer-when-downgrade","allowfullscreen","",3,"src",4,"ngIf"],[1,"content-container",3,"innerHTML"],["frameborder","0","referrerpolicy","no-referrer-when-downgrade","allowfullscreen","",2,"border","0",3,"src"]],template:function(t,i){1&t&&(n.YNc(0,Z,11,6,"div",0),n.YNc(1,b,5,4,"div",1),n._UZ(2,"app-section-list",2)),2&t&&(n.Q6J("ngIf",i.location),n.xp6(1),n.Q6J("ngIf",(null==i.location?null:i.location.text)||i.embedUrl),n.xp6(1),n.Q6J("sections",(null==i.page?null:i.page.sections)||n.DdM(3,T)))},directives:[l.O5,l.sg,h.j],pipes:[f.t,f.z],styles:[".common-section[_ngcontent-%COMP%]{padding-top:64px;padding-bottom:64px}.common-section[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.common-section.location[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{text-align:center;width:540px}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]{margin-bottom:8px}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{margin-bottom:24px}.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{margin-bottom:8px}.common-section.location[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-color:#f2f2f2;width:100%;height:410px;margin-top:60px}@media only screen and (max-width: 1100px){.common-section.location[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{width:100%}.common-section.location[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{height:240px}}.common-section.detail[_ngcontent-%COMP%]{display:flex}.common-section.detail[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:0 0 auto;width:50%}.common-section.detail[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;padding-left:120px}.common-section.detail[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]     h1{font-size:24px}.common-section.detail[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{position:relative;filter:grayscale(100%);background-color:#f2f2f2;height:540px}.common-section.detail[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%]{width:100%;height:100%}@media only screen and (max-width: 1100px){.common-section.detail[_ngcontent-%COMP%]{flex-direction:column-reverse}.common-section.detail[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{width:100%}.common-section.detail[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{padding-left:0;margin-bottom:32px}.common-section.detail[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{height:320px}}"]}),o})();const w=function(){return[]},A=[{path:"",component:(()=>{class o{constructor(t,i,s){this.graphcms=t,this.locale=i,this.seo=s,this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.locale.updates.subscribe(()=>this.refresh())),this.refresh()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}refresh(){var t;this.page=this.graphcms.getPage("LOCATIONS",this.locale.language),this.seo.updateSEO({title:null===(t=this.page)||void 0===t?void 0:t.title})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(d.P),n.Y36(p.O),n.Y36(u.L))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-locations"]],decls:1,vars:2,consts:[[3,"sections"]],template:function(t,i){1&t&&n._UZ(0,"app-section-list",0),2&t&&n.Q6J("sections",(null==i.page?null:i.page.sections)||n.DdM(1,w))},directives:[h.j],encapsulation:2}),o})()},{path:":id",component:y}];let J=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[r.Bz.forChild(A)],r.Bz]}),o})();var U=c(8082);let Y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[[l.ez,J,U.m]]}),o})()}}]);