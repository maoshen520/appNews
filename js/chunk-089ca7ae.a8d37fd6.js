(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-089ca7ae"],{"0804":function(t,e,a){"use strict";var i=a("adcf"),o=a.n(i);o.a},"1dde":function(t,e,a){var i=a("d039"),o=a("b622"),n=a("60ae"),r=o("species");t.exports=function(t){return n>=51||!i((function(){var e=[],a=e.constructor={};return a[r]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"25f0":function(t,e,a){"use strict";var i=a("6eeb"),o=a("825a"),n=a("d039"),r=a("ad6d"),s="toString",c=RegExp.prototype,l=c[s],u=n((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=s;(u||d)&&i(RegExp.prototype,s,(function(){var t=o(this),e=String(t.source),a=t.flags,i=String(void 0===a&&t instanceof RegExp&&!("flags"in c)?r.call(t):a);return"/"+e+"/"+i}),{unsafe:!0})},"3b59":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"box"},[a("div",{staticClass:"header"},[a("div",{staticClass:"arrow-left fl",on:{click:t.back}},[a("van-icon",{attrs:{name:"arrow-left",size:"30px"}})],1),a("div",{staticClass:"right-box fr"},[a("div",{staticClass:"search fl"},[a("van-icon",{attrs:{name:"search",size:"30px"}})],1),a("div",{staticClass:"ellipsis fl"},[a("van-icon",{attrs:{name:"ellipsis",size:"30px"}})],1)])]),a("div",{staticClass:"content-box"},[a("div",{staticClass:"title"},[t._v(t._s(t.title))]),a("div",{staticClass:"icon-box"},[a("div",{staticClass:"img fl"},[a("img",{staticClass:"auto-img",attrs:{src:t.img,alt:""}})]),a("div",{staticClass:"source"},[t._v("来源:"+t._s(t.source))])]),a("div",{staticClass:"content",domProps:{innerHTML:t._s(t.text)}})]),a("div",{staticClass:"footer"},[t._m(0),a("div",{staticClass:"icon fl"},[a("van-icon",{attrs:{name:"chat-o",size:"30px",color:"#595959"}}),a("van-icon",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],attrs:{name:"star-o",size:"30px",color:"#595959"},on:{click:function(e){return t.collection()}}}),a("van-icon",{directives:[{name:"show",rawName:"v-show",value:!t.isShow,expression:"!isShow"}],attrs:{name:"star",size:"30px",color:"#595959"},on:{click:function(e){return t.collection()}}}),a("van-icon",{attrs:{name:"good-job-o",size:"30px",color:"#595959"}}),a("van-icon",{attrs:{name:"share",size:"30px",color:"#595959"}})],1)]),a("div",[a("router-view")],1)])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input fl"},[a("input",{attrs:{type:"text",placeholder:"写评论"}})])}],n=(a("a434"),a("4d63"),a("ac1f"),a("25f0"),{name:"newsDetails",data:function(){return{data:"",id:"",item:"",text:"",title:"",img:"",source:"",isShow:!0}},created:function(){var t=this;this.$toast.loading({duration:2e3,message:"加载中..."}),this.id=this.$route.params.id,this.item=this.$route.params.item;var e=this;this.axios({method:"GET",url:"http://api01.6bqb.com/toutiao/detail?apikey=9152B061C54746870D248AA78B33EA05&itemId="+e.id}).then((function(a){console.log("result111111==>",a),e.data=a.data;var i=/(<[a-z]*.*\s*\/?>.*\s*<\/[a-z]>)/g,o=(i.test(e.data.data.content),RegExp.$1);e.text=o,e.title=e.data.data.title,e.img=e.data.data.media_user.avatar_url,e.source=e.data.data.media_user.screen_name,t.$toast.clear()})).catch((function(e){t.$toast.clear()}))},updated:function(){var t=this,e=localStorage.getItem("collectionData");e=e?JSON.parse(e):[];for(var a=0;a<e.length;a++)e[a].item_id===t.item.item_id&&(t.isShow=!1)},methods:{back:function(){this.$router.go(-1)},collection:function(){if(this.isShow=!this.isShow,this.isShow){if(this.isShow){var t=localStorage.getItem("collectionData");t=t?JSON.parse(t):[];for(var e=0;e<t.length;e++)t[e].item_id===this.item.item_id&&t.splice(e,1);localStorage.setItem("collectionData",JSON.stringify(t))}}else{var a=localStorage.getItem("collectionData");a=a?JSON.parse(a):[],this.item.isShow=this.isShow,a.unshift(this.item),localStorage.setItem("collectionData",JSON.stringify(a))}}}}),r=n,s=(a("0804"),a("2877")),c=Object(s["a"])(r,i,o,!1,null,"54dde924",null);e["default"]=c.exports},"44e7":function(t,e,a){var i=a("861d"),o=a("c6b6"),n=a("b622"),r=n("match");t.exports=function(t){var e;return i(t)&&(void 0!==(e=t[r])?!!e:"RegExp"==o(t))}},"4d63":function(t,e,a){var i=a("83ab"),o=a("da84"),n=a("94ca"),r=a("7156"),s=a("9bf2").f,c=a("241c").f,l=a("44e7"),u=a("ad6d"),d=a("6eeb"),f=a("d039"),p=a("2626"),v=a("b622"),h=v("match"),g=o.RegExp,m=g.prototype,x=/a/g,b=/a/g,w=new g(x)!==x,S=i&&n("RegExp",!w||f((function(){return b[h]=!1,g(x)!=x||g(b)==b||"/a/i"!=g(x,"i")})));if(S){var y=function(t,e){var a=this instanceof y,i=l(t),o=void 0===e;return!a&&i&&t.constructor===y&&o?t:r(w?new g(i&&!o?t.source:t,e):g((i=t instanceof y)?t.source:t,i&&o?u.call(t):e),a?this:m,y)},C=function(t){t in y||s(y,t,{configurable:!0,get:function(){return g[t]},set:function(e){g[t]=e}})},_=c(g),E=0;while(_.length>E)C(_[E++]);m.constructor=y,y.prototype=m,d(o,"RegExp",y)}p("RegExp")},"65f0":function(t,e,a){var i=a("861d"),o=a("e8b5"),n=a("b622"),r=n("species");t.exports=function(t,e){var a;return o(t)&&(a=t.constructor,"function"!=typeof a||a!==Array&&!o(a.prototype)?i(a)&&(a=a[r],null===a&&(a=void 0)):a=void 0),new(void 0===a?Array:a)(0===e?0:e)}},7156:function(t,e,a){var i=a("861d"),o=a("d2bb");t.exports=function(t,e,a){var n,r;return o&&"function"==typeof(n=e.constructor)&&n!==a&&i(r=n.prototype)&&r!==a.prototype&&o(t,r),t}},8418:function(t,e,a){"use strict";var i=a("c04e"),o=a("9bf2"),n=a("5c6c");t.exports=function(t,e,a){var r=i(e);r in t?o.f(t,r,n(0,a)):t[r]=a}},9263:function(t,e,a){"use strict";var i=a("ad6d"),o=RegExp.prototype.exec,n=String.prototype.replace,r=o,s=function(){var t=/a/,e=/b*/g;return o.call(t,"a"),o.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),c=void 0!==/()??/.exec("")[1],l=s||c;l&&(r=function(t){var e,a,r,l,u=this;return c&&(a=new RegExp("^"+u.source+"$(?!\\s)",i.call(u))),s&&(e=u.lastIndex),r=o.call(u,t),s&&r&&(u.lastIndex=u.global?r.index+r[0].length:e),c&&r&&r.length>1&&n.call(r[0],a,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(r[l]=void 0)})),r}),t.exports=r},a434:function(t,e,a){"use strict";var i=a("23e7"),o=a("23cb"),n=a("a691"),r=a("50c4"),s=a("7b0b"),c=a("65f0"),l=a("8418"),u=a("1dde"),d=Math.max,f=Math.min,p=9007199254740991,v="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u("splice")},{splice:function(t,e){var a,i,u,h,g,m,x=s(this),b=r(x.length),w=o(t,b),S=arguments.length;if(0===S?a=i=0:1===S?(a=0,i=b-w):(a=S-2,i=f(d(n(e),0),b-w)),b+a-i>p)throw TypeError(v);for(u=c(x,i),h=0;h<i;h++)g=w+h,g in x&&l(u,h,x[g]);if(u.length=i,a<i){for(h=w;h<b-i;h++)g=h+i,m=h+a,g in x?x[m]=x[g]:delete x[m];for(h=b;h>b-i+a;h--)delete x[h-1]}else if(a>i)for(h=b-i;h>w;h--)g=h+i-1,m=h+a-1,g in x?x[m]=x[g]:delete x[m];for(h=0;h<a;h++)x[h+w]=arguments[h+2];return x.length=b-i+a,u}})},ac1f:function(t,e,a){"use strict";var i=a("23e7"),o=a("9263");i({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,a){"use strict";var i=a("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},adcf:function(t,e,a){},e8b5:function(t,e,a){var i=a("c6b6");t.exports=Array.isArray||function(t){return"Array"==i(t)}}}]);
//# sourceMappingURL=chunk-089ca7ae.a8d37fd6.js.map