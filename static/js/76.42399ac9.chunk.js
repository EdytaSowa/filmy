"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[76],{76:function(t,n,e){e.r(n),e.d(n,{default:function(){return f}});var r=e(439),a=e(444),c=e(689),u=e(791),s="Cast_list__GlWio",i="Cast_actor__tWtXy",o="Cast_image__mOsuM",p=e(184),f=function(){var t=(0,u.useState)([]),n=(0,r.Z)(t,2),e=n[0],f=n[1],l=(0,c.UO)().movieId;return(0,a.zv)(l).then((function(t){return f(t)})),(0,p.jsx)("ul",{className:s,children:e.map((function(t){return(0,p.jsxs)("li",{className:i,children:[t.profile_path?(0,p.jsx)("img",{className:o,src:"https://image.tmdb.org/t/p/w300_and_h450_bestv2".concat(t.profile_path),alt:"actor poster"}):(0,p.jsx)("p",{children:"No picture"}),(0,p.jsxs)("p",{children:[" ",t.name]}),(0,p.jsxs)("p",{children:[(0,p.jsx)("b",{children:"Character:"})," ",t.character]})]},t.id)}))})}},444:function(t,n,e){e.d(n,{Hg:function(){return i},TP:function(){return o},tx:function(){return f},z1:function(){return p},zv:function(){return l}});var r=e(861),a=e(757),c=e.n(a),u=e(243),s="?api_key=6a9a83cfb600dbd7747b45c5dc18162e";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var i=function(){var t=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n).concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie".concat(s,"&query=").concat(n,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{id:t.id,title:t.title}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/reviews").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results.map((function(t){return{author:t.author,content:t.content,id:t.id}})));case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=76.42399ac9.chunk.js.map