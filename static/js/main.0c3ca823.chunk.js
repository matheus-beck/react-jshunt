(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(63)},52:function(e,t,a){},56:function(e,t,a){},59:function(e,t,a){},61:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),o=a.n(c),u=a(66),i=a(68),s=a(67),l=a(5),p=a.n(l),d=a(24),m=a(6),f=a(7),h=a(8),v=a(12),E=a(9),g=a(13),b=a(22),w=a.n(b).a.create({baseURL:"https://rocketseat-node.herokuapp.com/api"}),k=a(65),j=(a(52),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={products:[],productInfo:{},page:1},a.loadProducts=Object(m.a)(p.a.mark(function e(){var t,n,r,c,o,u=arguments;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,e.next=3,w.get("/products?page=".concat(t));case 3:n=e.sent,r=n.data,c=r.docs,o=Object(d.a)(r,["docs"]),a.setState({products:c,productInfo:o,page:t});case 6:case"end":return e.stop()}},e)})),a.prevPage=function(){var e=a.setState,t=e.page;e.productInfo;if(1!==t){var n=t-1;a.loadProducts(n)}},a.nextPage=function(){var e=a.state,t=e.page;if(t!==e.productInfo.pages){var n=t+1;a.loadProducts(n)}},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.loadProducts()}},{key:"render",value:function(){var e=this.state,t=e.products,a=e.page,n=e.productInfo;return r.a.createElement("div",{className:"product-list"},t.map(function(e){return r.a.createElement("article",{key:e._id},r.a.createElement("strong",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement(k.a,{to:"/products/".concat(e._id)},"Acessar"))}),r.a.createElement("div",{className:"actions"},r.a.createElement("button",{disabled:1===a,onClick:this.prevPage},"Anterior"),r.a.createElement("button",{disabled:a===n.pages,onClick:this.nextPage},"Pr\xf3ximo")))}}]),t}(n.Component)),O=(a(56),function(e){function t(){var e,a;Object(f.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(v.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={product:{}},a}return Object(g.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark(function e(){var t,a;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.id,e.next=3,w.get("/products/".concat(t));case 3:a=e.sent,this.setState({product:a.data});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.product;return r.a.createElement("div",{className:"product-info"},r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.description),r.a.createElement("p",null,"URL: ",r.a.createElement("a",{href:e.url},e.url)))}}]),t}(n.Component)),y=function(){return r.a.createElement(u.a,null,r.a.createElement(i.a,null,r.a.createElement(s.a,{exact:!0,path:"/",component:j}),r.a.createElement(s.a,{path:"/products/:id",component:O})))},x=(a(59),a(61),function(){return r.a.createElement("header",{id:"main-header"},"JSHunt")}),P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,null),r.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.0c3ca823.chunk.js.map