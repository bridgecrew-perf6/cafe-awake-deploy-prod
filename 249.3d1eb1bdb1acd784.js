"use strict";(self.webpackChunkcafe_awake=self.webpackChunkcafe_awake||[]).push([[249],{7249:(Y,g,r)=>{r.r(g),r.d(g,{ShopModule:()=>q});var d=r(9808),m=r(522),O=r(8746),t=r(7587),h=r(4251),u=r(4171),f=r(3009),_=r(4836),C=r(3561),v=r(9017);function M(o,c){if(1&o&&t._UZ(0,"img",15),2&o){const n=t.oxw(2);t.Q6J("src",n.product.images[0].src,t.LSH)}}function P(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"div",16),t.NdJ("click",function(){const s=t.CHM(n).$implicit;return t.oxw(2).onSelectVariant(s)}),t._uU(1),t.qZA()}if(2&o){const n=c.$implicit,e=t.oxw(2);t.ekj("selected",n===e.selected),t.xp6(1),t.hij(" ",n.title," ")}}const x=function(){return["fad","shopping-cart"]};function Z(o,c){if(1&o){const n=t.EpF();t.TgZ(0,"div",2),t.TgZ(1,"div",3),t.TgZ(2,"div",4),t.YNc(3,M,1,1,"img",5),t.qZA(),t.qZA(),t.TgZ(4,"div",6),t.TgZ(5,"h1"),t._uU(6),t.qZA(),t.TgZ(7,"div",7),t._uU(8),t.qZA(),t.TgZ(9,"div",8),t.YNc(10,P,2,3,"div",9),t.qZA(),t._UZ(11,"hr"),t.TgZ(12,"div",10),t.TgZ(13,"button",11),t.NdJ("click",function(){return t.CHM(n),t.oxw().onAddToCart()}),t._UZ(14,"fa-icon",12),t._uU(15),t.qZA(),t._UZ(16,"div",13),t.TgZ(17,"div",14),t._uU(18),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const n=t.oxw();t.xp6(3),t.Q6J("ngIf",null==n.product.images?null:n.product.images.length),t.xp6(3),t.Oqu(n.product.title),t.xp6(2),t.Oqu(n.product.description),t.xp6(2),t.Q6J("ngForOf",n.product.variants),t.xp6(3),t.Q6J("disabled",n.saving),t.xp6(1),t.Q6J("icon",t.DdM(8,x)),t.xp6(1),t.hij(" ",null==n.translations?null:n.translations.add,""),t.xp6(3),t.hij("$",null==n.selected?null:n.selected.price,"")}}const y=function(){return[]};let T=(()=>{class o{constructor(n,e,i,s,a){this.route=n,this.graphcms=e,this.shopify=i,this.locale=s,this.seo=a,this.subscriptions=[],this.saving=!1}ngOnInit(){this.subscriptions.push(this.locale.updates.subscribe(()=>this.refresh())),this.subscriptions.push(this.route.params.subscribe(()=>this.refresh()))}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}refresh(){var n,e,i;const s=this.locale.language;this.page=this.graphcms.getPage("SHOP_ITEM",s),this.product=this.shopify.getProductById(this.route.snapshot.params.id,s),this.selected=(null===(e=null===(n=this.product)||void 0===n?void 0:n.variants)||void 0===e?void 0:e.length)?this.product.variants[0]:void 0,this.translations={add:"en"===s?"Add To Cart":"\u6dfb\u52a0\u5230\u8d2d\u7269\u8f66"},this.seo.updateSEO({title:null===(i=this.product)||void 0===i?void 0:i.title})}onSelectVariant(n){this.selected=n}onAddToCart(){!this.selected||(this.saving=!0,this.shopify.addProductVariantToCheckout(this.selected,1).pipe((0,O.x)(()=>{this.saving=!1})).subscribe(()=>{}))}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(m.gz),t.Y36(h.P),t.Y36(u.H),t.Y36(f.O),t.Y36(_.L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop-item"]],decls:2,vars:3,consts:[["class","common-section product",4,"ngIf"],[3,"sections"],[1,"common-section","product"],[1,"image-container"],[1,"img"],[3,"src",4,"ngIf"],[1,"content-container"],[1,"description"],[1,"variant-container"],["class","variant",3,"selected","click",4,"ngFor","ngForOf"],[1,"bottom-container"],[1,"button",3,"disabled","click"],[3,"icon"],[1,"spacer"],[1,"price"],[3,"src"],[1,"variant",3,"click"]],template:function(n,e){1&n&&(t.YNc(0,Z,19,9,"div",0),t._UZ(1,"app-section-list",1)),2&n&&(t.Q6J("ngIf",e.product),t.xp6(1),t.Q6J("sections",(null==e.page?null:e.page.sections)||t.DdM(2,y)))},directives:[d.O5,d.sg,C.BN,v.j],styles:[".common-section.product[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:flex-start;padding-top:64px;padding-bottom:64px}.common-section.product[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-family:JungleGiantPrint;font-size:42px}.common-section.product[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.common-section.product[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{flex:0 0 auto}.common-section.product[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-color:#f2f2f2;width:325px;height:398px;margin-right:16px}.common-section.product[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{flex:1 1 auto}.common-section.product[_ngcontent-%COMP%]   .variant-container[_ngcontent-%COMP%]{display:flex;align-items:center;margin-top:32px}.common-section.product[_ngcontent-%COMP%]   .variant-container[_ngcontent-%COMP%]   .variant[_ngcontent-%COMP%]{cursor:pointer;padding:12px 16px;margin-right:8px;border:1px solid #efecea}.common-section.product[_ngcontent-%COMP%]   .variant-container[_ngcontent-%COMP%]   .variant.selected[_ngcontent-%COMP%]{border-color:#000}.common-section.product[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]{display:flex;align-items:center}.common-section.product[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.common-section.product[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{font-size:32px}@media only screen and (max-width: 1100px){.common-section.product[_ngcontent-%COMP%]{flex-direction:column}.common-section.product[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:34px}.common-section.product[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]{display:flex;justify-content:center;width:100%}.common-section.product[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:294px;height:360px;margin-right:0;margin-bottom:32px}}"]}),o})();var b=r(8803);function S(o,c){if(1&o&&(t.TgZ(0,"div",12),t._uU(1),t.qZA()),2&o){const n=t.oxw(2);t.xp6(1),t.hij(" ",null==n.translations?null:n.translations.empty," ")}}function A(o,c){if(1&o&&t._UZ(0,"img",18),2&o){const n=t.oxw().$implicit;t.Q6J("src",n.product.images[0].src,t.LSH)}}function w(o,c){if(1&o&&(t.TgZ(0,"div",13),t.TgZ(1,"div",14),t.YNc(2,A,1,1,"img",15),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"app-link",16),t.qZA(),t.TgZ(5,"div",17),t._uU(6),t.qZA(),t.qZA()),2&o){const n=c.$implicit;t.xp6(2),t.Q6J("ngIf",null==n.product.images?null:n.product.images.length),t.xp6(2),t.Q6J("link",n.link),t.xp6(2),t.hij("$",n.product.variants[0].price,"")}}function I(o,c){if(1&o&&(t.TgZ(0,"div",8),t.YNc(1,S,2,1,"div",9),t.TgZ(2,"div",10),t.YNc(3,w,7,3,"div",11),t.qZA(),t.qZA()),2&o){const n=t.oxw();t.xp6(1),t.Q6J("ngIf",!n.filtered.length),t.xp6(2),t.Q6J("ngForOf",n.filtered)}}const J=function(){return[]},j=[{path:"",component:(()=>{class o{constructor(n,e,i,s){this.graphcms=n,this.shopify=e,this.locale=i,this.seo=s,this.filter="all",this.subscriptions=[]}ngOnInit(){this.subscriptions.push(this.locale.updates.subscribe(()=>this.refresh())),this.refresh()}ngOnDestroy(){this.subscriptions.forEach(n=>n.unsubscribe())}refresh(){var n;const e=this.locale.language;this.page=this.graphcms.getPage("SHOP",e),this.shopify.getAllProducts(e).subscribe(i=>{this.filter="all",this.items=null==i?void 0:i.map(s=>({product:s,link:{text:s.title,productId:this.shopify.productIdFromProduct(s)}})),this.filtered=this.items,this.translations={title:"en"===e?"Shop The Goods":"\u9009\u8d2d\u5546\u54c1",all:"en"===e?"All":"\u5168\u90e8",coffee:"en"===e?"Coffee":"\u5496\u5561",merch:"en"===e?"Merch":"\u5546\u54c1",empty:"en"===e?"No products available.":"\u6ca1\u6709\u53ef\u7528\u7684\u4ea7\u54c1\u3002"}}),this.seo.updateSEO({title:null===(n=this.page)||void 0===n?void 0:n.title})}onFilter(n){var e,i;this.filter=n,this.filtered="all"===this.filter?this.items:"coffee"===this.filter?null===(e=this.items)||void 0===e?void 0:e.filter(s=>{var a,l,p;return"coffee"===(null===(p=null===(l=null===(a=s.product.attrs.productType)||void 0===a?void 0:a.value)||void 0===l?void 0:l.toLowerCase())||void 0===p?void 0:p.trim())}):null===(i=this.items)||void 0===i?void 0:i.filter(s=>{var a,l,p;return"coffee"!==(null===(p=null===(l=null===(a=s.product.attrs.productType)||void 0===a?void 0:a.value)||void 0===l?void 0:l.toLowerCase())||void 0===p?void 0:p.trim())})}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(h.P),t.Y36(u.H),t.Y36(f.O),t.Y36(_.L))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-shop"]],decls:14,vars:13,consts:[[1,"common-section","header"],[1,"content-container"],[1,"title"],[1,"spacer"],[1,"filter-container"],[1,"filter",3,"click"],["class","common-section shop",4,"ngIf"],[3,"sections"],[1,"common-section","shop"],["class","empty",4,"ngIf"],[1,"card-container"],["class","card",4,"ngFor","ngForOf"],[1,"empty"],[1,"card"],[1,"img"],[3,"src",4,"ngIf"],[3,"link"],[1,"price"],[3,"src"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t._uU(3),t.qZA(),t._UZ(4,"div",3),t.TgZ(5,"div",4),t.TgZ(6,"div",5),t.NdJ("click",function(){return e.onFilter("all")}),t._uU(7),t.qZA(),t.TgZ(8,"div",5),t.NdJ("click",function(){return e.onFilter("coffee")}),t._uU(9),t.qZA(),t.TgZ(10,"div",5),t.NdJ("click",function(){return e.onFilter("merch")}),t._uU(11),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(12,I,4,2,"div",6),t._UZ(13,"app-section-list",7)),2&n&&(t.xp6(3),t.Oqu(null==e.translations?null:e.translations.title),t.xp6(3),t.ekj("selected","all"===e.filter),t.xp6(1),t.Oqu(null==e.translations?null:e.translations.all),t.xp6(1),t.ekj("selected","coffee"===e.filter),t.xp6(1),t.Oqu(null==e.translations?null:e.translations.coffee),t.xp6(1),t.ekj("selected","merch"===e.filter),t.xp6(1),t.Oqu(null==e.translations?null:e.translations.merch),t.xp6(1),t.Q6J("ngIf",e.filtered),t.xp6(1),t.Q6J("sections",(null==e.page?null:e.page.sections)||t.DdM(12,J)))},directives:[d.O5,d.sg,b.N,v.j],styles:[".common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;border-bottom:1px solid #efecea;padding-top:64px}.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;align-items:center;font-family:JungleGiantPrint;font-size:24px}.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .spacer[_ngcontent-%COMP%]{flex:1 1 auto}.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]{display:flex;align-items:center}.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{cursor:pointer;display:flex;align-items:center;justify-content:center;font-weight:700;color:#8f8f8f;border-bottom:2px solid transparent;width:90px;height:46px;margin-bottom:-1px;padding-bottom:1px}.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .filter.selected[_ngcontent-%COMP%]{color:#167e64;border-color:#167e64}@media only screen and (max-width: 1100px){.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]{flex-direction:column}.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%], .common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .filter-container[_ngcontent-%COMP%]{justify-content:center}.common-section.header[_ngcontent-%COMP%]   .content-container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{width:initial;padding:0 12px 1px}}.common-section.shop[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center;padding-top:64px;padding-bottom:64px}.common-section.shop[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover}.common-section.shop[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{display:flex;justify-content:center}.common-section.shop[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:325px;margin:0 12px}.common-section.shop[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{background-color:#f2f2f2;width:325px;height:398px;margin-bottom:16px}.common-section.shop[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{font-weight:600;color:#167e64;margin-bottom:8px}.common-section.shop[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%]{color:#556a5b}@media only screen and (max-width: 1100px){.common-section.shop[_ngcontent-%COMP%]   .card-container[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.common-section.shop[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:294px;margin:0}.common-section.shop[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{width:294px;height:360px}.common-section.shop[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:not(:first-child){margin-top:32px}}"]}),o})()},{path:":id",component:T}];let k=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[m.Bz.forChild(j)],m.Bz]}),o})();var U=r(8082);let q=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.ez,C.uH,k,U.m]]}),o})()}}]);