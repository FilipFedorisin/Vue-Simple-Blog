(function(e){function t(t){for(var r,i,s=t[0],c=t[1],l=t[2],d=0,g=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&g.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(g.length)g.shift()();return n.push.apply(n,l||[]),o()}function o(){for(var e,t=0;t<n.length;t++){for(var o=n[t],r=!0,s=1;s<o.length;s++){var c=o[s];0!==a[c]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;n.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var r=o("85ec"),a=o.n(r);a.a},1:function(e,t){},4389:function(e,t,o){},"56d7":function(e,t,o){"use strict";o.r(t);o("4de4"),o("fb6a"),o("e260"),o("e6cf"),o("cca6"),o("a79d");var r=o("2b0e"),a=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"fill"}},[o("Header"),o("router-view"),o("Footer")],1)},n=[],i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{directives:[{name:"theme",rawName:"v-theme",value:"dark",expression:"'dark'"}]},[o("nav",[o("ul",[o("li",[o("router-link",{attrs:{to:"/",exact:""}},[e._v("HOME")])],1),o("li",[o("router-link",{attrs:{to:"/add",exact:""}},[e._v("ADD")])],1)])])])},s=[],c={},l=c,u=(o("7b0c"),o("2877")),d=Object(u["a"])(l,i,s,!1,null,"dbaa07a4",null),g=d.exports,b={components:{Header:g},data:function(){return{}},created:function(){document.title="Blog"}},v=b,f=(o("034f"),Object(u["a"])(v,a,n,!1,null,null,null)),p=f.exports,h=o("28dd"),m=o("8c4f"),_=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"show-blogs"}},[o("h1",[e._v("Všetky Blogy")]),o("div",{attrs:{id:"pojeb"}},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:"Hľadať..."},domProps:{value:e.search},on:{input:function(t){t.target.composing||(e.search=t.target.value)}}})]),e._l(e.filteredBlogs,(function(t){return o("div",{key:t,staticClass:"single-blog"},[o("router-link",{attrs:{to:"/blog/"+t.id}},[o("h2",[e._v(e._s(e._f("toUppercase")(t.title)))])]),o("article",[e._v(e._s(e._f("snippet")(t.content)))])],1)}))],2)},y=[],k=(o("d3b7"),o("25f0"),o("ac1f"),o("466d"),o("841c"),{computed:{filteredBlogs:function(){var e=this;return this.blogs.filter((function(t){return t.title.match(e.search)}))}}}),x={data:function(){return{blogs:[],search:""}},methods:{loadBlogPosts:function(){this.$http.get("https://blog-database-52f50.firebaseio.com/posts.json").then((function(e){return e.json()})).then((function(e){var t=[];for(var o in e)e[o].id=o,t.push(e[o]);this.blogs=t}))}},created:function(){this.loadBlogPosts()},filters:{toUppercase:function(e){return e.toUpperCase()}},directives:{rainbow:{bind:function(e){e.style.color="#"+Math.random().toString().slice(2,8)}}},mixins:[k]},w=x,$=(o("66ba"),Object(u["a"])(w,_,y,!1,null,"2c14c07c",null)),j=$.exports,A=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"add-blog"}},[o("h1",[e._v("Pridať Blog")]),e.submitted?e._e():o("form",[o("label",[e._v("Titulok:")]),o("div",{attrs:{id:"pojeb"}},[o("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.blog.title,expression:"blog.title",modifiers:{lazy:!0}}],attrs:{type:"text",required:""},domProps:{value:e.blog.title},on:{change:function(t){return e.$set(e.blog,"title",t.target.value)}}})]),o("label",[e._v("Obsah:")]),o("div",{attrs:{id:"pojeb"}},[o("textarea",{directives:[{name:"model",rawName:"v-model.lazy",value:e.blog.content,expression:"blog.content",modifiers:{lazy:!0}}],attrs:{type:"text"},domProps:{value:e.blog.content},on:{change:function(t){return e.$set(e.blog,"content",t.target.value)}}})]),o("div",{attrs:{id:"checkboxes"}},[o("label",[e._v("Móda")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Móda"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"Móda")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n="Móda",i=e._i(o,n);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([n])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",a)}}}),o("label",[e._v("Krása")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Krása"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"Krása")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n="Krása",i=e._i(o,n);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([n])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",a)}}}),o("label",[e._v("Kozmetika")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Kozmetika"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"Kozmetika")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n="Kozmetika",i=e._i(o,n);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([n])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",a)}}}),o("label",[e._v("Život")]),o("input",{directives:[{name:"model",rawName:"v-model",value:e.blog.categories,expression:"blog.categories"}],attrs:{type:"checkbox",value:"Život"},domProps:{checked:Array.isArray(e.blog.categories)?e._i(e.blog.categories,"Život")>-1:e.blog.categories},on:{change:function(t){var o=e.blog.categories,r=t.target,a=!!r.checked;if(Array.isArray(o)){var n="Život",i=e._i(o,n);r.checked?i<0&&e.$set(e.blog,"categories",o.concat([n])):i>-1&&e.$set(e.blog,"categories",o.slice(0,i).concat(o.slice(i+1)))}else e.$set(e.blog,"categories",a)}}})]),o("label",[e._v("Autor:")]),o("select",{directives:[{name:"model",rawName:"v-model",value:e.blog.author,expression:"blog.author"}],on:{change:function(t){var o=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.$set(e.blog,"author",t.target.multiple?o:o[0])}}},e._l(e.authors,(function(t){return o("option",{key:t},[e._v(e._s(t))])})),0),o("button",{on:{click:function(t){return t.preventDefault(),e.post(t)}}},[e._v("Publikovať")])]),e.submitted?o("div",[o("h3",[e._v("Blog bol úspešne publikovaný...")])]):e._e(),o("div",{attrs:{id:"preview"}},[o("h1",[e._v(e._s(e.blog.title))]),o("p",[e._v(e._s(e.blog.content))]),o("hr"),o("p",[o("b",[e._v("Autor: ")]),e._v(e._s(e.blog.author))]),e._m(0),o("ul",e._l(e.blog.categories,(function(t){return o("li",{key:t},[e._v(e._s(t))])})),0)])])},O=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("p",[o("b",[e._v("Štítky:")])])}],P={data:function(){return{blog:{title:"",content:"",categories:[],author:""},authors:["Jožo Kapura","Medard Fajčák","Čmelák Fellak"],submitted:!1}},methods:{post:function(){this.$http.post("https://blog-database-52f50.firebaseio.com/posts.json",this.blog).then((function(e){console.log(e),this.submitted=!0}))}}},M=P,K=(o("7016"),Object(u["a"])(M,A,O,!1,null,null,null)),N=K.exports,z=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"single-blog"}},[o("h1",[e._v(e._s(e.blog.title))]),o("article",[e._v(e._s(e.blog.content))]),o("hr"),o("p",[e._v("Autor: "+e._s(e.blog.author))]),o("p",[e._v("Tagy:")]),o("ul",e._l(e.blog.categories,(function(t){return o("li",{key:t},[e._v(e._s(t))])})),0)])},B=[],E={data:function(){return{id:this.$route.params.id,blog:{}}},created:function(){this.$http.get("https://blog-database-52f50.firebaseio.com/posts/"+this.id+".json").then((function(e){return e.json()})).then((function(e){this.blog=e}))}},S=E,H=(o("a28b"),Object(u["a"])(S,z,B,!1,null,"27e45700",null)),T=H.exports;r["a"].use(m["a"]);var D=new m["a"]({routes:[{path:"/",component:j},{path:"/add",component:N},{path:"/blog/:id",component:T}],mode:"history"}),F=D;r["a"].use(h["a"]),r["a"].use(F),r["a"].directive("theme",{bind:function(e,t){"white"==toString(t.value)?e.style.background="white":"dark"==t.value&&(e.style.background="#6b6b6b")}}),r["a"].filter("snippet",(function(e){return e.slice(0,100)+"..."})),new r["a"]({render:function(e){return e(p)},router:F}).$mount("#app")},"66ba":function(e,t,o){"use strict";var r=o("4389"),a=o.n(r);a.a},7016:function(e,t,o){"use strict";var r=o("cba9"),a=o.n(r);a.a},"7b0c":function(e,t,o){"use strict";var r=o("f817"),a=o.n(r);a.a},"85ec":function(e,t,o){},a28b:function(e,t,o){"use strict";var r=o("c7dc"),a=o.n(r);a.a},c7dc:function(e,t,o){},cba9:function(e,t,o){},f817:function(e,t,o){}});
//# sourceMappingURL=app.d7bbeab5.js.map