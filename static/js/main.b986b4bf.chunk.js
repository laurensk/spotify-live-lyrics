(this["webpackJsonpspotify-live-lyrics"]=this["webpackJsonpspotify-live-lyrics"]||[]).push([[0],{25:function(t,e,n){},45:function(t,e,n){},47:function(t,e,n){},48:function(t,e,n){},49:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n.n(r),a=n(18),i=n.n(a),c=(n(25),n(7)),s=n.n(c),u=n(8),l=n(1),h=n(2),p=n(5),f=n(4),j=function(){function t(){Object(l.a)(this,t)}return Object(h.a)(t,null,[{key:"setToken",value:function(t){localStorage.setItem("token",t)}},{key:"getToken",value:function(){var t=localStorage.getItem("token");return t||null}},{key:"removeToken",value:function(){return localStorage.removeItem("token")}},{key:"reload",value:function(){window.location.href.split("#").length<=2&&(window.location.href=window.location.href.split("#")[0]),setTimeout((function(){return window.location.reload()}),10)}}]),t}(),b=function(){function t(){Object(l.a)(this,t)}return Object(h.a)(t,null,[{key:"getLyrics",value:function(t,e,n){var r="".concat(t," ").concat(e).toLowerCase().replace(/ *\([^)]*\) */g,"").replace(/ *\[[^\]]*]/,"").replace(/feat.|ft./g,"").replace(/\s+/g," ").trim();n("https://genius.com/search?q="+encodeURI(r))}}]),t}(),v=n(19),y=n.n(v),g=function(){function t(){Object(l.a)(this,t)}return Object(h.a)(t,null,[{key:"onLoad",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e=this.getTokenFromUrl(),console.log(e),e&&(j.setToken(e.toString()),j.reload());case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTokenFromUrl",value:function(){var t=window.location.href.split("access_token=");if(t.length<2)return!1;var e=t[1].split("&");return!(e.length<1)&&e[0]}},{key:"login",value:function(){var t="".concat("https://accounts.spotify.com/authorize","?client_id=").concat("59e0135630284383bad818ec9ed70718","&redirect_uri=").concat("https://lyrics.laurensk.at/","&scope=").concat(["user-read-currently-playing"].join("%20"),"&response_type=token");window.open(t,"_self")}},{key:"getCurrentSong",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,y.a.get("https://api.spotify.com/v1/me/player/currently-playing",{headers:{Authorization:"Bearer "+j.getToken()}});case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0),401===t.t0.status&&(j.removeToken(),j.reload());case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()}]),t}(),O=(n(45),n(0)),d=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"sll-container",children:Object(O.jsx)("div",{className:"sll-container-children",children:this.props.children})})}}]),n}(o.a.Component),k=(n(47),function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var t=this;return Object(O.jsx)("button",{className:"sll-button",onClick:function(e){return t.props.onClick()},children:this.props.title})}}]),n}(o.a.Component)),m=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(O.jsx)("h1",{children:this.props.title})}}]),n}(o.a.Component),x=(n(48),function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(O.jsx)("div",{className:"sll-large-text",style:{fontWeight:this.props.fontWeight?this.props.fontWeight:"normal"},children:this.props.text})}}]),n}(o.a.Component)),w=n(20),S=function(){function t(){Object(l.a)(this,t)}return Object(h.a)(t,null,[{key:"getArtists",value:function(t){var e,n="",r=Object(w.a)(t);try{for(r.s();!(e=r.n()).done;){n+=e.value.name+", "}}catch(o){r.e(o)}finally{r.f()}return n.substr(0,n.length-2)}}]),t}(),C=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).updateInterval=void 0,r.state={song:null,lyrics:null},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.getCurrentSong(),this.updateInterval=setInterval((function(){return t.getCurrentSong()}),5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.updateInterval)}},{key:"getCurrentSong",value:function(){var t=Object(u.a)(s.a.mark((function t(){var e,n,r=this;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.state.song,t.next=3,g.getCurrentSong();case 3:(n=t.sent)?(this.setState({song:n}),null!=e&&e.item.name==n.item.name||b.getLyrics(this.state.song.item.name,S.getArtists(this.state.song.item.artists),(function(t){t&&r.setState({lyrics:t})}))):this.setState({song:null});case 5:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"openLyrics",value:function(t){window.open(t,"_blank")}},{key:"render",value:function(){var t=this;return Object(O.jsxs)(d,{children:[Object(O.jsx)(m,{title:this.state.song?this.state.song.item.name:"It's silent..."}),this.state.song&&Object(O.jsxs)("div",{style:{marginTop:-15},children:[Object(O.jsx)(x,{text:S.getArtists(this.state.song.item.artists)}),Object(O.jsx)("br",{}),Object(O.jsx)(k,{title:"Open Lyrics on Genius",onClick:function(){return t.openLyrics(t.state.lyrics)}})]})]})}}]),n}(o.a.Component),L=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"login",value:function(){g.login()}},{key:"render",value:function(){var t=this;return Object(O.jsxs)(d,{children:[Object(O.jsx)(m,{title:"Spotify Live Lyrics"}),Object(O.jsx)(x,{text:"Welcome to Spotify Live Lyrics."}),Object(O.jsx)("br",{}),Object(O.jsx)(x,{text:"To get stared, you need to log in with your Spotify account in order to let the application know, which song you're currently listening to. No, worries, we never log or save this data."}),Object(O.jsx)("br",{}),Object(O.jsx)(x,{text:"In fact, this project is open-sourced and the code can be seen on GitHub."}),Object(O.jsx)("br",{}),Object(O.jsx)(x,{fontWeight:"600",text:"To get started with Spotify Live Lyrics, please log in!"}),Object(O.jsx)("br",{}),Object(O.jsx)(k,{title:"Log in with Spotify",onClick:function(){return t.login()}})]})}}]),n}(o.a.Component),T=function(t){Object(p.a)(n,t);var e=Object(f.a)(n);function n(t){var r;return Object(l.a)(this,n),(r=e.call(this,t)).state={auth:!1},r}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getAuth()}},{key:"getAuth",value:function(){var t=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.getToken();case 2:if(!t.sent){t.next=6;break}this.setState({auth:!0}),t.next=7;break;case 6:g.onLoad();case 7:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.auth?Object(O.jsx)(C,{}):Object(O.jsx)(L,{})}}]),n}(o.a.Component);i.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.b986b4bf.chunk.js.map