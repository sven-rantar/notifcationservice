(window.webpackJsonpnotifcationservice=window.webpackJsonpnotifcationservice||[]).push([[0],{14:function(e,n,o){},15:function(e,n,o){},16:function(e,n,o){"use strict";o.r(n);var t=o(0),c=o.n(t),a=o(2),r=o.n(a),i=(o(14),o(3)),s=o(4),l=o(7),u=o(5),p=o(8),h=o(6),d=o.n(h),m=(o(15),function(e){function n(){var e;return Object(i.a)(this,n),(e=Object(l.a)(this,Object(u.a)(n).call(this))).getPhotoServiceUrl=function(n){return"".concat(e._photoService,"/").concat(n)},e.onFailure=function(e){return console.log("error!",e)},e.onSuccess=function(n){return fetch(e.getPhotoServiceUrl(n.accessToken),{mode:"no-cors"})},e._clientId="1047378117233-o4bad573bnqm1ip1rlnpg8kol0tpdh9e.apps.googleusercontent.com",e._photoService="https://passthrough-3xblqajdna-uc.a.run.app/api",e}return Object(p.a)(n,e),Object(s.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(d.a,{clientId:this._clientId,onFailure:this.onFailure,onSuccess:this.onSuccess,scope:"profile email https://www.googleapis.com/auth/photoslibrary.readonly"})))}}]),n}(t.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,n,o){e.exports=o(16)}},[[9,1,2]]]);
//# sourceMappingURL=main.84b5dca3.chunk.js.map