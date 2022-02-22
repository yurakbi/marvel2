(this.webpackJsonpmarvel=this.webpackJsonpmarvel||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(10),s=n.n(c),i=n(2),o=n(3),l=n(5),h=n(4),d=(n(15),n(0)),u=function(){return Object(d.jsxs)("header",{className:"app__header",children:[Object(d.jsx)("h1",{className:"app__title",children:Object(d.jsxs)("a",{href:"#",children:[Object(d.jsx)("span",{children:"Marvel"})," information portal"]})}),Object(d.jsx)("nav",{className:"app__menu",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Characters"})}),"/",Object(d.jsx)("li",{children:Object(d.jsx)("a",{href:"#",children:"Comics"})})]})})]})},j=n(6),m=n.n(j),b=n(7),f=function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://gateway.marvel.com:443/v1/public/",this._apiKey="apikey=97f79fa69b594ee154c959157e437a14",this._baseOffset=210,this.getResource=function(){var e=Object(b.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", status: ").concat(n.status));case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.getAllCharacters=Object(b.a)(m.a.mark((function e(){var n,a,r=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:t._baseOffset,e.next=3,t.getResource("".concat(t._apiBase,"characters?limit=9&offset=").concat(n,"&").concat(t._apiKey));case 3:return a=e.sent,e.abrupt("return",a.data.results.map(t._transformCharacter));case 5:case"end":return e.stop()}}),e)}))),this.getCharacter=function(){var e=Object(b.a)(m.a.mark((function e(n){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("".concat(t._apiBase,"characters/").concat(n,"?").concat(t._apiKey));case 2:return a=e.sent,e.abrupt("return",t._transformCharacter(a.data.results[0]));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this._transformCharacter=function(e){return{id:e.id,name:e.name,description:e.description?"".concat(e.description.slice(0,210)," ..."):"There is no description for this character",thumbnail:e.thumbnail.path+"."+e.thumbnail.extension,homepage:e.urls[0].url,wiki:e.urls[1].url,comics:e.comics.items.slice(0,10)}}},p=function(){return Object(d.jsxs)("svg",{className:"spinner",xmlnsvg:"http://www.w3.org/2000/svg",style:{margin:"0 auto",background:"none",display:"block"},xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.0",width:"64px",height:"64px",viewBox:"0 0 128 128",xmlSpace:"preserve",children:[Object(d.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"#FFFFFF"}),Object(d.jsxs)("g",{children:[Object(d.jsxs)("linearGradient",{id:"linear-gradient",children:[Object(d.jsx)("stop",{offset:"0%",stopColor:"#ffffff"}),Object(d.jsx)("stop",{offset:"100%",stopColor:"#000000"})]}),Object(d.jsx)("path",{d:"M63.85 0A63.85 63.85 0 1 1 0 63.85 63.85 63.85 0 0 1 63.85 0zm.65 19.5a44 44 0 1 1-44 44 44 44 0 0 1 44-44z",fill:"url(#linear-gradient)",fillRule:"evenodd"}),Object(d.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 64 64",to:"360 64 64",dur:"1080ms",repeatCount:"indefinite"})]})]})},v=n.p+"static/media/error.fd98ce08.gif",O=function(){return Object(d.jsx)("img",{style:{display:"block",width:"450px",height:"250px",objectFit:"contain",margin:" 0 auto"},src:v,alt:"error"})},x=(n(18),n.p+"static/media/mjolnir.61f31e18.png"),_=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:{},loading:!0,error:!1},e.marvelService=new f,e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onError=function(){e.setState({loading:!1,error:!0})},e.updateChar=function(){var t=Math.floor(400*Math.random()+1011e3);e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"onCharLoading",value:function(){this.setState({loading:!0})}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,r=a?Object(d.jsx)(O,{}):null,c=n?Object(d.jsx)(p,{}):null,s=n||a?null:Object(d.jsx)(g,{char:t});return Object(d.jsxs)("div",{className:"randomchar",children:[c,s,r,Object(d.jsxs)("div",{className:"randomchar__static",children:[Object(d.jsxs)("p",{className:"randomchar__title",children:["Random character for today!",Object(d.jsx)("br",{}),"Do you want to get to know him better?"]}),Object(d.jsx)("p",{className:"randomchar__title",children:"Or choose another one"}),Object(d.jsx)("button",{onClick:this.updateChar,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"try it"})}),Object(d.jsx)("img",{src:x,alt:"mjolnir",className:"randomchar__decoration"})]})]})}}]),n}(a.Component),g=function(e){var t=e.char,n=t.name,a=t.description,r=t.thumbnail,c=t.homepage,s=t.wiki,i={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===r&&(i={objectFit:"contain"}),Object(d.jsxs)("div",{className:"randomchar__block",children:[Object(d.jsx)("img",{src:r,alt:"Random character",className:"randomchar__img",style:i}),Object(d.jsxs)("div",{className:"randomchar__info",children:[Object(d.jsx)("p",{className:"randomchar__name",children:n}),Object(d.jsx)("p",{className:"randomchar__descr",children:a}),Object(d.jsxs)("div",{className:"randomchar__btns",children:[Object(d.jsx)("a",{href:c,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:s,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]})},w=_,C=n(9),y=(n(19),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={charList:[],loading:!0,error:!1,newLoadingItem:!1,offset:210,charEnded:!1},e.marvelService=new f,e.itemsRefs=[],e.setRefs=function(t){e.itemsRefs.push(t)},e.onFocusCard=function(t){e.itemsRefs.forEach((function(e){return e.classList.remove("char__item_selected")})),e.itemsRefs[t].classList.add("char__item_selected"),e.itemsRefs[t].focus()},e.onScroll=function(){e.state.newLoadingItem||(e.state.charEnded&&window.addEventListener("scroll",e.onScroll),window.innerHeight+window.scrollY>=document.body.offsetHeight&&e.onRequest(e.state.offset))},e.onRequest=function(t){e.onCharListLoading(),e.marvelService.getAllCharacters(t).then(e.onCharListLoaded).catch(e.onError)},e.onCharListLoading=function(){e.setState({newLoadingItem:!0})},e.onCharListLoaded=function(t){var n=!1;t.length<9&&(n=!0),e.setState((function(e){var a=e.offset,r=e.charList;return{charList:[].concat(Object(C.a)(r),Object(C.a)(t)),loading:!1,newLoadingItem:!1,offset:a+9,charEnded:n}}))},e.onError=function(){e.setState({error:!0,loading:!1})},e.renderItems=function(t){var n=t.map((function(t,n){var a={objectFit:"cover"};return"http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"===t.thumbnail&&(a={objectFit:"unset"}),Object(d.jsxs)("li",{className:"char__item",tabIndex:0,ref:e.setRefs,onClick:function(){e.props.onSelectedChar(t.id),e.onFocusCard(n)},onKeyPress:function(a){""!==a.key&&"Enter"!==a.key||(e.props.onSelectedChar(t.id),e.onFocusCard(n))},children:[Object(d.jsx)("img",{src:t.thumbnail,alt:t.name,style:a}),Object(d.jsx)("div",{className:"char__name",children:t.name})]},t.id)}));return Object(d.jsx)("ul",{className:"char__grid",children:n})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.onRequest(),window.addEventListener("scroll",this.onScroll)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e=this,t=this.state,n=t.charList,a=t.loading,r=t.error,c=t.offset,s=t.newLoadingItem,i=t.charEnded,o=this.renderItems(n),l=r?Object(d.jsx)(O,{}):null,h=a?Object(d.jsx)(p,{}):null,u=a||r?null:o;return Object(d.jsxs)("div",{className:"char__list",children:[h,l,u,Object(d.jsx)("button",{className:"button button__main button__long",disabled:s,onClick:function(){return e.onRequest(c)},style:{display:i?"none":"block"},children:Object(d.jsx)("div",{className:"inner",children:"load more"})})]})}}]),n}(a.Component)),N=(n(20),function(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("p",{className:"char__select",children:"Please select a character to see information"}),Object(d.jsxs)("div",{className:"skeleton",children:[Object(d.jsxs)("div",{className:"pulse skeleton__header",children:[Object(d.jsx)("div",{className:"pulse skeleton__circle"}),Object(d.jsx)("div",{className:"pulse skeleton__mini"})]}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"}),Object(d.jsx)("div",{className:"pulse skeleton__block"})]})]})}),k=(n(21),function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={char:null,loading:!1,error:!1},e.marvelService=new f,e.updateChar=function(){var t=e.props.charId;t&&(e.onCharLoading(),e.marvelService.getCharacter(t).then(e.onCharLoaded).catch(e.onError))},e.onCharLoaded=function(t){e.setState({char:t,loading:!1})},e.onCharLoading=function(){e.setState({loading:!0})},e.onError=function(){e.setState({error:!0,loading:!1})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateChar()}},{key:"componentDidUpdate",value:function(e){this.props.charId!==e.charId&&this.updateChar()}},{key:"render",value:function(){var e=this.state,t=e.char,n=e.loading,a=e.error,r=t||n||a?null:Object(d.jsx)(N,{}),c=a?Object(d.jsx)(O,{}):null,s=n?Object(d.jsx)(p,{}):null,i=n||a||!t?null:Object(d.jsx)(L,{char:t});return Object(d.jsxs)("div",{className:"char__info",children:[r,s,i,c]})}}]),n}(a.Component)),L=function(e){var t=e.char,n=t.name,a=t.homepage,r=t.wiki,c=t.thumbnail,s=t.description,i=t.comics,o={objectFit:"contain"};return"'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg'"===c&&(o={objectFit:"unset"}),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"char__basics",children:[Object(d.jsx)("img",{src:c,alt:n,style:o}),Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"char__info-name",children:"thor"}),Object(d.jsxs)("div",{className:"char__btns",children:[Object(d.jsx)("a",{href:a,className:"button button__main",children:Object(d.jsx)("div",{className:"inner",children:"homepage"})}),Object(d.jsx)("a",{href:r,className:"button button__secondary",children:Object(d.jsx)("div",{className:"inner",children:"Wiki"})})]})]})]}),Object(d.jsx)("div",{className:"char__descr",children:s}),Object(d.jsx)("div",{className:"char__comics",children:"Comics:"}),Object(d.jsxs)("ul",{className:"char__comics-list",children:[i.length>0?null:"There are no comics for this character",i.map((function(e,t){return Object(d.jsx)("li",{className:"char__comics-item",children:e.name},t)}))]})]})},S=k,F=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={error:!1},e}return Object(o.a)(n,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({error:!0})}},{key:"render",value:function(){return this.state.error?Object(d.jsx)(O,{}):this.props.children}}]),n}(a.Component),E=n.p+"static/media/vision.067d4ae1.png",R=function(e){Object(l.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={selectedChar:null},e.onSelectedChar=function(t){e.setState({selectedChar:t})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"app",children:[Object(d.jsx)(u,{}),Object(d.jsxs)("main",{children:[Object(d.jsx)(F,{children:Object(d.jsx)(w,{})}),Object(d.jsxs)("div",{className:"char__content",children:[Object(d.jsx)(F,{children:Object(d.jsx)(y,{onSelectedChar:this.onSelectedChar})}),Object(d.jsx)(F,{children:Object(d.jsx)(S,{charId:this.state.selectedChar})})]}),Object(d.jsx)("img",{className:"bg-decoration",src:E,alt:"vision"})]})]})}}]),n}(a.Component);n(22);s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}],[[23,1,2]]]);
//# sourceMappingURL=main.069ae506.chunk.js.map