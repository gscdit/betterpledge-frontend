(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"+8Ju":function(t,i,n){"use strict";n.d(i,"a",function(){return o});var e=n("t/Na"),s=n("CcnG"),o=function(){function t(t){this.http=t,this.boolean=!0}return t.prototype.deleteProduct=function(t){return this.http.post("https://gscditu.com/api/deletelisting","hi",{params:(new e.g).set("listing_id",t)})},t.prototype.updateProduct=function(t,i){return this.http.post("https://gscditu.com/api/updatelisting",t,{params:(new e.g).set("listing_id",i)})},t.prototype.getUserProduct=function(){return this.http.get("https://gscditu.com/api/donorlistings")},t.prototype.getAll=function(){return this.http.get("https://gscditu.com/api/listing",{params:(new e.g).set("send_all","0")})},t.prototype.getAllWithZero=function(){return this.http.get("https://gscditu.com/api/listing",{params:(new e.g).set("send_all","1")})},t.prototype.addProduct=function(t){return this.http.post("https://gscditu.com/api/listing",t)},t.prototype.getSingleProduct=function(t){return this.http.get("https://gscditu.com/api/singlelisting",{params:(new e.g).set("listing_id",t),responseType:"text"})},t.ngInjectableDef=s.T({factory:function(){return new t(s.X(e.c))},token:t,providedIn:"root"}),t}()}}]);