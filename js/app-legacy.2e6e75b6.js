(function(){"use strict";var t={9179:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var i=n(144),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{id:"inspire"}},[n("v-navigation-drawer",{attrs:{app:"",color:"primary",dark:"",src:"bg-2.jpg"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{staticClass:"text-h6"},[t._v(" Vuetify Todo ")]),n("v-list-item-subtitle",[t._v(" Best Todo Ever! ")])],1)],1),n("v-divider"),n("v-list",{attrs:{dense:"",nav:""}},[t._l(t.items,(function(e){return n("v-list-item",{key:e.title,attrs:{to:e.to,link:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),n("v-list-item-content",[n("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),n("v-list-item-action",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{color:"grey lighten-1"}},[t._v("mdi-information")])],1)],1)],2)],1),n("v-app-bar",{attrs:{app:"",color:"primary",dark:"",src:"mountains.png"},scopedSlots:t._u([{key:"img",fn:function(e){var i=e.props;return[n("v-img",t._b({attrs:{gradient:"to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"}},"v-img",i,!1))]}}])},[n("v-app-bar-nav-icon",{on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[t._v("Title")]),n("v-spacer"),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-magnify")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-heart")])],1),n("v-btn",{attrs:{icon:""}},[n("v-icon",[t._v("mdi-dots-vertical")])],1)],1),n("v-main",[n("router-view")],1)],1)},r=[],a={data:function(){return{drawer:null,items:[{title:"Todo",icon:"mdi-view-dashboard",to:"/"},{title:"About",icon:"mdi-help-box",to:"/about"}]}}},l=a,u=n(1001),s=n(3453),c=n.n(s),d=n(7524),v=n(8320),f=n(5206),p=n(4995),m=n(1418),b=n(6428),k=n(7047),h=n(6816),g=n(7620),y=n(3099),Z=n(651),T=n(459),_=n(7877),w=n(4216),V=n(9762),x=n(7921),C=(0,u.Z)(l,o,r,!1,null,null,null),I=C.exports;c()(C,{VApp:d.Z,VAppBar:v.Z,VAppBarNavIcon:f.Z,VBtn:p.Z,VDivider:m.Z,VIcon:b.Z,VImg:k.Z,VList:h.Z,VListItem:g.Z,VListItemAction:y.Z,VListItemContent:Z.km,VListItemIcon:T.Z,VListItemSubtitle:Z.oZ,VListItemTitle:Z.V9,VMain:_.Z,VNavigationDrawer:w.Z,VSpacer:V.Z,VToolbarTitle:x.qW});n(1539),n(8783),n(3948);var O=n(8345),j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home pa-1"},[n("v-text-field",{staticClass:"pa-3",attrs:{outlined:"",label:"Add Tasks","append-icon":"mdi-plus","hide-details":"",clearable:""},on:{"click:append":t.addTask,keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addTask.apply(null,arguments)}},model:{value:t.newTaskTitle,callback:function(e){t.newTaskTitle=e},expression:"newTaskTitle"}}),n("v-list",{staticClass:"pt-0",attrs:{flat:""}},t._l(t.tasks,(function(e){return n("div",{key:e.id},[n("v-list-item",{class:{"blue lighten-5":e.done},on:{click:function(n){return t.doneTask(e.id)}},scopedSlots:t._u([{key:"default",fn:function(){return[n("v-list-item-action",[n("v-checkbox",{attrs:{"input-value":e.done,color:"primary"}})],1),n("v-list-item-content",[n("v-list-item-title",{class:{"text-decoration-line-through":e.done}},[t._v(t._s(e.title))])],1),n("v-list-item-action",[n("v-btn",{attrs:{icon:""},on:{click:function(n){return n.stopPropagation(),t.deleteTask(e.id)}}},[n("v-icon",{attrs:{color:"primary lighten-3"}},[t._v("mdi-delete")])],1)],1)]},proxy:!0}],null,!0)}),n("v-divider")],1)})),0)],1)},L=[],A=(n(7327),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("div",[t._v("HelloWorld Component")])])}),E=[],S={name:"HelloWorld",data:function(){return{}}},P=S,B=n(8050),N=(0,u.Z)(P,A,E,!1,null,null,null),W=N.exports;c()(N,{VContainer:B.Z});var D={name:"Home",data:function(){return{newTaskTitle:"",tasks:[{id:1,title:"Wake up",done:!1},{id:2,title:"Smoke",done:!1},{id:3,title:"Grind",done:!1}]}},methods:{addTask:function(){var t={id:Date.now(),title:this.newTaskTitle,done:!1};this.tasks.push(t)},doneTask:function(t){var e=this.tasks.filter((function(e){return e.id===t}))[0];e.done=!e.done},deleteTask:function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t}))}},components:{HelloWorld:W}},H=D,M=n(9362),$=n(9200),F=(0,u.Z)(H,j,L,!1,null,null,null),q=F.exports;c()(F,{VBtn:p.Z,VCheckbox:M.Z,VDivider:m.Z,VIcon:b.Z,VList:h.Z,VListItem:g.Z,VListItemAction:y.Z,VListItemContent:Z.km,VListItemTitle:Z.V9,VTextField:$.Z}),i.Z.use(O.Z);var G=[{path:"/",name:"Todo",component:q},{path:"/about",name:"about",component:function(){return n.e(443).then(n.bind(n,1141))}}],z=new O.Z({routes:G}),J=z,K=n(629);i.Z.use(K.ZP);var Q=new K.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),R=n(858);i.Z.use(R.Z);var U=new R.Z({});i.Z.config.productionTip=!1,new i.Z({router:J,store:Q,vuetify:U,render:function(t){return t(I)}}).$mount("#app")}},e={};function n(i){var o=e[i];if(void 0!==o)return o.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,n),r.exports}n.m=t,function(){var t=[];n.O=function(e,i,o,r){if(!i){var a=1/0;for(c=0;c<t.length;c++){i=t[c][0],o=t[c][1],r=t[c][2];for(var l=!0,u=0;u<i.length;u++)(!1&r||a>=r)&&Object.keys(n.O).every((function(t){return n.O[t](i[u])}))?i.splice(u--,1):(l=!1,r<a&&(a=r));if(l){t.splice(c--,1);var s=o();void 0!==s&&(e=s)}}return e}r=r||0;for(var c=t.length;c>0&&t[c-1][2]>r;c--)t[c]=t[c-1];t[c]=[i,o,r]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var i in e)n.o(e,i)&&!n.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,i){return n.f[i](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/about-legacy.d35bb290.js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="vuetify-todo:";n.l=function(i,o,r,a){if(t[i])t[i].push(o);else{var l,u;if(void 0!==r)for(var s=document.getElementsByTagName("script"),c=0;c<s.length;c++){var d=s[c];if(d.getAttribute("src")==i||d.getAttribute("data-webpack")==e+r){l=d;break}}l||(u=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",e+r),l.src=i),t[i]=[o];var v=function(e,n){l.onerror=l.onload=null,clearTimeout(f);var o=t[i];if(delete t[i],l.parentNode&&l.parentNode.removeChild(l),o&&o.forEach((function(t){return t(n)})),e)return e(n)},f=setTimeout(v.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=v.bind(null,l.onerror),l.onload=v.bind(null,l.onload),u&&document.head.appendChild(l)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.p="/project name/"}(),function(){var t={143:0};n.f.j=function(e,i){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)i.push(o[2]);else{var r=new Promise((function(n,i){o=t[e]=[n,i]}));i.push(o[2]=r);var a=n.p+n.u(e),l=new Error,u=function(i){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var r=i&&("load"===i.type?"missing":i.type),a=i&&i.target&&i.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",l.name="ChunkLoadError",l.type=r,l.request=a,o[1](l)}};n.l(a,u,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,r,a=i[0],l=i[1],u=i[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(o in l)n.o(l,o)&&(n.m[o]=l[o]);if(u)var c=u(n)}for(e&&e(i);s<a.length;s++)r=a[s],n.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return n.O(c)},i=self["webpackChunkvuetify_todo"]=self["webpackChunkvuetify_todo"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9179)}));i=n.O(i)})();
//# sourceMappingURL=app-legacy.2e6e75b6.js.map