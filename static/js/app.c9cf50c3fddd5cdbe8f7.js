webpackJsonp([1],{"/h6f":function(t,e){},"2fiM":function(t,e){},"5sCL":function(t,e){},"79Xe":function(t,e){},"9n10":function(t,e){},"A6W+":function(t,e){},DMJM:function(t,e){},FAff:function(t,e){},Gtt6:function(t,e){},I9te:function(t,e){},Kk2B:function(t,e){},M6Sr:function(t,e){},"N+zL":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.slideClass},[this._t("default")],2)},staticRenderFns:[]},n=i("VU/8")({name:"swiper-slide",data:function(){return{slideClass:"swiper-slide"}},ready:function(){this.update()},mounted:function(){this.update(),this.$parent.options.slideClass&&(this.slideClass=this.$parent.options.slideClass)},updated:function(){this.update()},attached:function(){this.update()},methods:{update:function(){this.$parent&&this.$parent.swiper&&this.$parent.swiper.update&&(this.$parent.swiper.update(!0),this.$parent.options.loop&&this.$parent.swiper.reLoop())}}},s,!1,null,null,null);e.default=n.exports},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("keep-alive",{attrs:{exclude:"Detail"}},[e("router-view")],1)],1)},staticRenderFns:[]};var a=i("VU/8")({name:"App"},n,!1,function(t){i("I9te")},null,null).exports,r=i("/ocq"),o=i("Dd8w"),c=i.n(o),l=i("NYxO"),d={name:"HomeHeader",computed:c()({},Object(l.c)(["city"])),props:{}},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._m(0),this._v(" "),this._m(1),this._v(" "),e("router-link",{attrs:{to:"/city"}},[e("div",{staticClass:"header-right"},[this._v("\n      "+this._s(this.city)+"\n      "),e("span",{staticClass:"iconfont back-icon"},[this._v("")])])])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-left"},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header-input"},[e("span",{staticClass:"iconfont"},[this._v("")]),this._v("\n    输入城市/景点/游玩主题\n  ")])}]};var h=i("VU/8")(d,u,!1,function(t){i("Gtt6")},"data-v-47689b5c",null).exports,p={name:"HomeSwiper",props:{swiperList:Array},data:function(){return{swiperOption:{pagination:".swiper-pagination"}}},computed:{showSwiper:function(){return this.swiperList.length}}},f={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"wrapper"},[this.showSwiper?e("swiper",[this._l(this.swiperList,function(t){return e("swiper-slide",{key:t.id},[e("img",{staticClass:"swiper-img",attrs:{src:t.imgUrl,alt:""}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2):this._e()],1)},staticRenderFns:[]};var m=i("VU/8")(p,f,!1,function(t){i("DMJM")},"data-v-227c46ba",null).exports,v={name:"HomeIcons",props:{iconList:Array},data:function(){return{swiperOption:{autoplay:!1}}},computed:{pages:function(){var t=[];return this.iconList.forEach(function(e,i){var s=Math.floor(i/8);t[s]||(t[s]=[]),t[s].push(e)}),t}}},_={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"icons"},[i("swiper",{attrs:{options:t.swiperOption}},t._l(t.pages,function(e,s){return i("swiper-slide",{key:s},t._l(e,function(e){return i("div",{key:e.id,staticClass:"icon"},[i("div",{staticClass:"icon-img"},[i("img",{attrs:{src:e.iconUrl,alt:""}})]),t._v(" "),i("p",[t._v(t._s(e.desc))])])}))}))],1)},staticRenderFns:[]};var w=i("VU/8")(v,_,!1,function(t){i("FAff")},"data-v-82828dda",null).exports,C={name:"HomeRecommend",props:{recommendList:Array},data:function(){return{}}},y={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("热销推荐")]),t._v(" "),i("ul",t._l(t.recommendList,function(e){return i("router-link",{key:e.id,staticClass:"item border-bottom",attrs:{to:"/detail/"+e.id,tag:"li"}},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:""}}),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))]),t._v(" "),i("button",{staticClass:"item-button"},[t._v("查看详情")])])])}))])},staticRenderFns:[]};var g=i("VU/8")(C,y,!1,function(t){i("5sCL")},"data-v-071e3246",null).exports,b={name:"HomeWeekend",props:{weekendList:Array},data:function(){return{}}},k={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"title"},[t._v("周末去哪")]),t._v(" "),i("ul",t._l(t.weekendList,function(e){return i("li",{key:e.id,staticClass:"item border-bottom"},[i("div",{staticClass:"item-img-wrapper"},[i("img",{staticClass:"item-img",attrs:{src:e.imgUrl,alt:"item.title"}})]),t._v(" "),i("div",{staticClass:"item-info"},[i("p",{staticClass:"item-title"},[t._v(t._s(e.title))]),t._v(" "),i("p",{staticClass:"item-desc"},[t._v(t._s(e.desc))])])])}))])},staticRenderFns:[]};var L=i("VU/8")(b,k,!1,function(t){i("SeEF")},"data-v-3888a201",null).exports,S=i("mtWM"),x=i.n(S),$={name:"Home",components:{HomeHeader:h,HomeSwiper:m,HomeIcons:w,HomeRecommend:g,HomeWeekend:L},data:function(){return{swiperList:[],iconList:[],recommendList:[],weekendList:[],lastCity:""}},computed:c()({},Object(l.c)(["city"])),methods:{getHomeInfo:function(){x.a.get("/test/static/mock/index.json?city="+this.city).then(this.getHomeInfoSucc)},getHomeInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.swiperList=e.swiperList,this.iconList=e.iconList,this.recommendList=e.recommendList,this.weekendList=e.weekendList}}},mounted:function(){this.lastCity=this.city,this.getHomeInfo()},activated:function(){this.lastCity!==this.city&&(this.lastCity=this.city,this.getHomeInfo())}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("home-header"),t._v(" "),i("home-swiper",{attrs:{swiperList:t.swiperList}}),t._v(" "),i("home-icons",{attrs:{iconList:t.iconList}}),t._v(" "),i("home-recommend",{attrs:{recommendList:t.recommendList}}),t._v(" "),i("home-weekend",{attrs:{weekendList:t.weekendList}})],1)},staticRenderFns:[]};var I=i("VU/8")($,E,!1,function(t){i("A6W+")},null,null).exports,F={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[this._v("\n  城市选择\n  "),e("router-link",{staticClass:"header-left",attrs:{to:"/"}},[e("div",{staticClass:"iconfont back-icon"},[this._v("")])])],1)},staticRenderFns:[]};var A=i("VU/8")({name:"CityHeader"},F,!1,function(t){i("xXzV")},"data-v-7606ec46",null).exports,T=i("GQaK"),R={name:"CitySearch",props:{cities:Object},computed:{notFind:function(){return!this.list.length}},data:function(){return{keyword:"",list:[],timer:null}},methods:c()({handleCityClick:function(t){this.changeCity(t),this.keyword="",this.$router.push("/")}},Object(l.b)(["changeCity"])),watch:{keyword:function(){var t=this;this.keyword?(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var e=[];for(var i in t.cities)t.cities[i].forEach(function(i){-1===i.spell.indexOf(t.keyword.toLowerCase())&&-1===i.name.indexOf(t.keyword.toLowerCase())||e.push(i)});t.list=e},100)):this.list=[]}},mounted:function(){this.scroll=new T.a(this.$refs.search,{click:!0,tap:!0})}},U={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"search"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"search-input",attrs:{type:"text",placeholder:"输入城市或拼音"},domProps:{value:t.keyword},on:{input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.keyword,expression:"keyword"}],ref:"search",staticClass:"search-content"},[i("ul",[t._l(t.list,function(e){return i("li",{key:e.id,staticClass:"search-item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}),t._v(" "),t.notFind?i("li",{staticClass:"search-item border-bottom"},[t._v("没有找到匹配数据")]):t._e()],2)])])},staticRenderFns:[]};var j=i("VU/8")(R,U,!1,function(t){i("/h6f")},"data-v-b243f22e",null).exports,H={name:"CityList",props:{hotCities:Array,cities:Object,letter:String},computed:c()({},Object(l.c)({currentCity:"city"})),methods:c()({handleCityClick:function(t){this.changeCity(t),this.$router.push("/")}},Object(l.b)(["changeCity"])),mounted:function(){this.scroll=new T.a(this.$refs.wrapper,{click:!0,tap:!0})},watch:{letter:function(){var t=this.$refs[this.letter][0];this.scroll.scrollToElement(t)}}},N={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"wrapper",staticClass:"list"},[i("div",[i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("当前城市")]),t._v(" "),i("div",{staticClass:"button-list"},[i("div",{staticClass:"button-wrapper"},[i("div",{staticClass:"button"},[t._v(t._s(this.currentCity))])])])]),t._v(" "),i("div",{staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v("热门城市")]),t._v(" "),i("div",{staticClass:"button-list"},t._l(t.hotCities,function(e){return i("div",{key:e.id,staticClass:"button-wrapper",on:{click:function(i){t.handleCityClick(e.name)}}},[i("div",{staticClass:"button"},[t._v(t._s(e.name))])])}))]),t._v(" "),t._l(t.cities,function(e,s){return i("div",{key:s,ref:s,refInFor:!0,staticClass:"area"},[i("div",{staticClass:"title border-topbottom"},[t._v(t._s(s))]),t._v(" "),i("div",{staticClass:"item-list"},t._l(e,function(e){return i("div",{key:e.id,staticClass:"item border-bottom",on:{click:function(i){t.handleCityClick(e.name)}}},[t._v(t._s(e.name))])}))])})],2)])},staticRenderFns:[]};var O=i("VU/8")(H,N,!1,function(t){i("RjQy")},"data-v-2b896386",null).exports,V={name:"CityAlphabet",props:{cities:Object},computed:{letters:function(){var t=[];for(var e in this.cities)t.push(e);return t}},data:function(){return{touchStatus:!1,alphabetLen:0,AY:0,timer:null}},updated:function(){this.AY=this.$refs.A[0].offsetTop,this.alphabetLen=this.letters.length},methods:{handleLetterClick:function(t){this.$emit("change",t)},handleTouchStart:function(){this.touchStatus=!0},handleTouchMove:function(t){var e=this;this.touchStatus&&(this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var i=t.touches[0].clientY-79,s=Math.floor((i-e.AY)/20);s>=0&&s<e.alphabetLen&&e.$emit("change",e.letters[s])},15))},handleTouchEnd:function(){this.touchStatus=!1}}},D={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"list"},t._l(t.letters,function(e){return i("li",{key:e,ref:e,refInFor:!0,staticClass:"item",on:{touchstart:function(e){return e.preventDefault(),t.handleTouchStart(e)},touchmove:t.handleTouchMove,touchend:t.handleTouchEnd,click:function(i){t.handleLetterClick(e)}}},[t._v(t._s(e))])}))},staticRenderFns:[]};var M={name:"City",components:{CityHeader:A,CitySearch:j,CityList:O,CityAlphabet:i("VU/8")(V,D,!1,function(t){i("79Xe")},"data-v-43248434",null).exports},data:function(){return{hotCities:[],cities:{},letter:""}},methods:{getCityInfo:function(){x.a.get("/test/static/mock/city.json").then(this.getCityInfoSucc)},getCityInfoSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.hotCities=e.hotCities,this.cities=e.cities}},handleLetterChange:function(t){this.letter=t}},mounted:function(){this.getCityInfo()}},G={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("city-header"),t._v(" "),i("city-search",{attrs:{cities:t.cities}}),t._v(" "),i("city-list",{attrs:{hotCities:t.hotCities,cities:t.cities,letter:t.letter}}),t._v(" "),i("city-alphabet",{attrs:{cities:t.cities},on:{change:t.handleLetterChange}})],1)},staticRenderFns:[]};var B=i("VU/8")(M,G,!1,function(t){i("j5aB")},"data-v-1591f306",null).exports,Y={name:"CommonGallary",props:{imgs:{type:Array,default:function(){return[]}}},data:function(){return{swiperOptions:{pagination:".swiper-pagination",paginationType:"fraction",observeParents:!0,observer:!0}}},methods:{handleGalleryShow:function(){this.$emit("close")}}},z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container",on:{click:this.handleGalleryShow}},[e("div",{staticClass:"wrapper"},[e("swiper",{attrs:{options:this.swiperOptions}},[this._l(this.imgs,function(t,i){return e("swiper-slide",{key:i},[e("img",{staticClass:"gallery-img",attrs:{src:t}})])}),this._v(" "),e("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var P={render:function(){var t=this.$createElement;return(this._self._c||t)("transition",[this._t("default")],2)},staticRenderFns:[]};var W={name:"DetailBanner",components:{CommonGallary:i("VU/8")(Y,z,!1,function(t){i("Nj6M")},"data-v-3a060cc9",null).exports,FadeAnimation:i("VU/8")({name:"FadeAnimation"},P,!1,function(t){i("2fiM")},"data-v-4e36f16a",null).exports},props:{sightName:String,bannerImg:String,gallaryImgs:Array},data:function(){return{showGallery:!1}},methods:{handleBannerShow:function(){this.showGallery=!0},handleGalleryClose:function(){this.showGallery=!1}}},Q={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"banner",on:{click:t.handleBannerShow}},[i("img",{staticClass:"banner-img",attrs:{src:t.bannerImg,alt:""}}),t._v(" "),i("div",{staticClass:"banner-info"},[i("div",{staticClass:"banner-title"},[t._v(t._s(t.sightName))]),t._v(" "),i("div",{staticClass:"banner-icon"},[i("span",{staticClass:"iconfont"},[t._v("")]),t._v(" "+t._s(t.gallaryImgs.length))])])]),t._v(" "),i("fade-animation",[i("common-gallary",{directives:[{name:"show",rawName:"v-show",value:t.showGallery,expression:"showGallery"}],attrs:{imgs:t.gallaryImgs},on:{close:t.handleGalleryClose}})],1)],1)},staticRenderFns:[]};var X=i("VU/8")(W,Q,!1,function(t){i("waTQ")},"data-v-453e680a",null).exports,J={name:"DetailHeader",data:function(){return{showAbs:!0,opacityStyle:{opacity:0}}},methods:{handleScroll:function(){var t=window.parent.document.documentElement.scrollTop||window.parent.document.body.scrollTop||document.body.scrollTop+document.documentElement.scrollTop||window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;if(t>60){var e=(t-60)/80;e=e>1?1:e,this.opacityStyle={opacity:e},this.showAbs=!1}else this.showAbs=!0}},created:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)}},K={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("router-link",{directives:[{name:"show",rawName:"v-show",value:this.showAbs,expression:"showAbs"}],staticClass:"header-abs",attrs:{tag:"div",to:"/"}},[e("span",{staticClass:"iconfont back-icon"},[this._v("")])]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showAbs,expression:"!showAbs"}],staticClass:"header-fixed",style:this.opacityStyle},[this._v("\n    景点详情\n    "),e("router-link",{staticClass:"header-left",attrs:{to:"/"}},[e("div",{staticClass:"iconfont fixed-back-icon"},[this._v("")])])],1)],1)},staticRenderFns:[]};var q=i("VU/8")(J,K,!1,function(t){i("Kk2B")},"data-v-f14dd93c",null).exports,Z={name:"DetailList",props:{list:Array}},tt={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",t._l(t.list,function(e,s){return i("div",{key:s,staticClass:"item"},[i("div",{staticClass:"item-title border-bottom"},[i("span",{staticClass:"item-title-icon"}),t._v(" "),i("span",[t._v(t._s(e.title))])]),t._v(" "),e.children?i("div",{staticClass:"item-children"},[i("detail-list",{attrs:{list:e.children}})],1):t._e()])}))},staticRenderFns:[]};var et={name:"Detail",components:{DetailBanner:X,DetailHeader:q,DetailList:i("VU/8")(Z,tt,!1,function(t){i("k9jU")},"data-v-6c3c08ef",null).exports},data:function(){return{sightName:"",bannerImg:"",gallaryImgs:[],list:[]}},methods:{getDetailInfo:function(){x.a.get("/test/static/mock/detail.json",{params:{id:this.$route.params.id}}).then(this.handleGetDataSucc)},handleGetDataSucc:function(t){if((t=t.data).ret&&t.data){var e=t.data;this.sightName=e.sightName,this.bannerImg=e.bannerImg,this.gallaryImgs=e.gallaryImgs,this.list=e.categoryList}}},mounted:function(){this.getDetailInfo()}},it={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("detail-banner",{attrs:{sightName:this.sightName,bannerImg:this.bannerImg,gallaryImgs:this.gallaryImgs}}),this._v(" "),e("detail-header"),this._v(" "),e("div",{staticClass:"content"},[e("detail-list",{attrs:{list:this.list}})],1)],1)},staticRenderFns:[]};var st=i("VU/8")(et,it,!1,function(t){i("Re32")},"data-v-a01df58a",null).exports;s.a.use(r.a);var nt=new r.a({routes:[{path:"/",name:"Home",component:I},{path:"/city",name:"City",component:B},{path:"/detail/:id",name:"Detail",component:st}],scrollBehavior:function(t,e,i){return{x:0,y:0}}}),at=i("v5o6"),rt=i.n(at),ot=(i("9n10"),i("M6Sr"),i("TzC8"),i("F3EI")),ct=i.n(ot),lt=(i("v2ns"),"荆州");try{localStorage.city&&(lt=localStorage.city)}catch(t){}var dt={city:lt},ut={changeCity:function(t,e){t.city=e;try{localStorage.city=e}catch(t){}}};s.a.use(l.a);var ht=new l.a.Store({state:dt,mutations:ut});i("j1ja");s.a.config.productionTip=!1,rt.a.attach(document.body),s.a.use(ct.a),new s.a({el:"#app",router:nt,store:ht,components:{App:a},template:"<App/>"})},Nj6M:function(t,e){},Re32:function(t,e){},RjQy:function(t,e){},SeEF:function(t,e){},TzC8:function(t,e){},j5aB:function(t,e){},k9jU:function(t,e){},pYmz:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s="undefined"!=typeof window;s&&(window.Swiper=i("gsqX"));var n={name:"swiper",props:{options:{type:Object,default:function(){return{autoplay:3500}}},notNextTick:{type:Boolean,default:function(){return!1}}},data:function(){return{defaultSwiperClasses:{wrapperClass:"swiper-wrapper"}}},ready:function(){!this.swiper&&s&&(this.swiper=new Swiper(this.$el,this.options))},mounted:function(){var t=this,e=function(){if(!t.swiper&&s){delete t.options.notNextTick;var e=!1;for(var i in t.defaultSwiperClasses)t.defaultSwiperClasses.hasOwnProperty(i)&&t.options[i]&&(e=!0,t.defaultSwiperClasses[i]=t.options[i]);var n=function(){t.swiper=new Swiper(t.$el,t.options)};e?t.$nextTick(n):n()}}(this.options.notNextTick||this.notNextTick)?e():this.$nextTick(e)},updated:function(){this.swiper&&this.swiper.update()},beforeDestroy:function(){this.swiper&&(this.swiper.destroy(),delete this.swiper)}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"swiper-container"},[t._t("parallax-bg"),t._v(" "),i("div",{class:t.defaultSwiperClasses.wrapperClass},[t._t("default")],2),t._v(" "),t._t("pagination"),t._v(" "),t._t("button-prev"),t._v(" "),t._t("button-next"),t._v(" "),t._t("scrollbar")],2)},staticRenderFns:[]},r=i("VU/8")(n,a,!1,null,null,null);e.default=r.exports},v2ns:function(t,e){},waTQ:function(t,e){},xXzV:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.c9cf50c3fddd5cdbe8f7.js.map