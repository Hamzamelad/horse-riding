"use strict";(self.webpackChunkjs=self.webpackChunkjs||[]).push([[108,390],{2108:function(t,e,n){n.r(e),n.d(e,{HLSProvider:function(){return H}});var r=n(4165),i=n(5861),u=n(5671),a=n(3144),s=n(7326),c=n(1752),o=n(1120),h=n(136),l=n(7277),p=n(4942),d=n(5929),f=n(1624),v=n(8178),k=n(5390),y=n(2453),Z=n(9698),b=function(){function t(e,n,r){(0,u.Z)(this,t),this.rh=e,this.ph=n,this._e=r,this.sh()}return(0,a.Z)(t,[{key:"sh",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(){var e,n;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={onLoadStart:this.je.bind(this),onLoaded:this.xe.bind(this),onLoadError:this.th.bind(this)},t.next=3,x(this.rh,e);case 3:if(n=t.sent,!(0,f.o8)(n)||(0,f.HD)(this.rh)){t.next=8;break}return t.next=7,g(this.rh,e);case 7:n=t.sent;case 8:if(n){t.next=10;break}return t.abrupt("return",null);case 10:if(n.isSupported()){t.next=15;break}return"[vidstack]: `hls.js` is not supported in this environment",this.ph.player.dispatchEvent(new Z.yb("hls-unsupported")),this.ph.delegate.U("error",{detail:{message:"[vidstack]: `hls.js` is not supported in this environment",code:4}}),t.abrupt("return",null);case 15:return t.abrupt("return",n);case 16:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"je",value:function(){this.ph.player.dispatchEvent(new Z.yb("hls-lib-load-start"))}},{key:"xe",value:function(t){this.ph.player.dispatchEvent(new Z.yb("hls-lib-loaded",{detail:t})),this._e(t)}},{key:"th",value:function(t){var e=(0,v.Q)(t);this.ph.player.dispatchEvent(new Z.yb("hls-lib-load-error",{detail:e})),this.ph.delegate.U("error",{detail:{message:e.message,code:4}})}}]),t}();function g(t){return w.apply(this,arguments)}function w(){return w=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,u,a,s,c,o,h=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=h.length>1&&void 0!==h[1]?h[1]:{},!(0,f.o8)(e)){t.next=3;break}return t.abrupt("return",void 0);case 3:if(null===(n=i.onLoadStart)||void 0===n||n.call(i),!e.prototype||e.prototype===Function){t.next=7;break}return null===(u=i.onLoaded)||void 0===u||u.call(i,e),t.abrupt("return",e);case 7:return t.prev=7,t.next=10,e();case 10:if(t.t1=a=t.sent,t.t0=null===t.t1,t.t0){t.next=14;break}t.t0=void 0===a;case 14:if(!t.t0){t.next=18;break}t.t2=void 0,t.next=19;break;case 18:t.t2=a.default;case 19:if(!(s=t.t2)||!s.isSupported){t.next=24;break}null===(c=i.onLoaded)||void 0===c||c.call(i,s),t.next=25;break;case 24:throw Error("");case 25:return t.abrupt("return",s);case 28:t.prev=28,t.t3=t.catch(7),null===(o=i.onLoadError)||void 0===o||o.call(i,t.t3);case 31:return t.abrupt("return",void 0);case 32:case"end":return t.stop()}}),t,null,[[7,28]])}))),w.apply(this,arguments)}function x(t){return m.apply(this,arguments)}function m(){return m=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i,u,a,s,c=arguments;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=c.length>1&&void 0!==c[1]?c[1]:{},(0,f.HD)(e)){t.next=3;break}return t.abrupt("return",void 0);case 3:return null===(n=i.onLoadStart)||void 0===n||n.call(i),t.prev=4,t.next=7,(0,v.R)(e);case 7:if((0,f.mf)(window.Hls)){t.next=9;break}throw Error("");case 9:return a=window.Hls,null===(u=i.onLoaded)||void 0===u||u.call(i,a),t.abrupt("return",a);case 14:t.prev=14,t.t0=t.catch(4),null===(s=i.onLoadError)||void 0===s||s.call(i,t.t0);case 17:return t.abrupt("return",void 0);case 18:case"end":return t.stop()}}),t,null,[[4,14]])}))),m.apply(this,arguments)}var H=function(t){(0,h.Z)(n,t);var e=(0,l.Z)(n);function n(){var t;(0,u.Z)(this,n);for(var r=arguments.length,i=new Array(r),a=0;a<r;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i)),(0,p.Z)((0,s.Z)(t),"$$PROVIDER_TYPE","HLS"),(0,p.Z)((0,s.Z)(t),"mh",null),(0,p.Z)((0,s.Z)(t),"Ad",new y.H(t.video)),(0,p.Z)((0,s.Z)(t),"lh","".concat("https://cdn.jsdelivr.net","/npm/hls.js@^1.0.0/dist/hls",".min.js")),t}return(0,a.Z)(n,[{key:"ctor",get:function(){return this.mh}},{key:"instance",get:function(){return this.Ad.instance}},{key:"type",get:function(){return"hls"}},{key:"canLiveSync",get:function(){return!0}},{key:"config",get:function(){return this.Ad.nh},set:function(t){this.Ad.nh=t}},{key:"library",get:function(){return this.lh},set:function(t){this.lh=t}},{key:"preconnect",value:function(){(0,f.HD)(this.lh)&&(0,v.p)(this.lh)}},{key:"setup",value:function(t){var e=this;(0,c.Z)((0,o.Z)(n.prototype),"setup",this).call(this,t),new b(this.lh,t,(function(n){e.mh=n,e.Ad.setup(n,t),t.delegate.U("provider-setup",{detail:e});var r=(0,d.fj)(t.$store.source);r&&e.loadSource(r)}))}},{key:"loadSource",value:function(){var t=(0,i.Z)((0,r.Z)().mark((function t(e){var n,i;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(i=e.src,(0,f.HD)(i)){t.next=3;break}return t.abrupt("return");case 3:null===(n=this.Ad.instance)||void 0===n||n.loadSource(i);case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"onInstance",value:function(t){var e=this,n=this.Ad.instance;return n&&t(n),this.Ad.oh.add(t),function(){return e.Ad.oh.delete(t)}}},{key:"destroy",value:function(){this.Ad.Jg()}}]),n}(k.VideoProvider);(0,p.Z)(H,"supported",(0,v.U)())},5390:function(t,e,n){n.r(e),n.d(e,{VideoProvider:function(){return m}});var r=n(5671),i=n(3144),u=n(7326),a=n(1752),s=n(1120),c=n(136),o=n(7277),h=n(4942),l=n(5929),p=n(8178),d=n(32),f=n(7762),v=function(){function t(e,n){(0,r.Z)(this,t),this.ta=e,this.ph=n,e.textTracks.onaddtrack=this.ya.bind(this),(0,l.uG)(this.qh.bind(this))}return(0,i.Z)(t,[{key:"ya",value:function(t){var e=t.track;if(e&&!function(t,e){return Array.from(t.children).find((function(t){return t.track===e}))}(this.ta,e)){var n=new p.G({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});n[p.Y]={track:e},n[p.H]=2,n[p.Z]=!0;var r=0,i=function(t){if(e.cues)for(var i=r;i<e.cues.length;i++)n.addCue(e.cues[i],t),r++};i(t),e.oncuechange=i,this.ph.textTracks.add(n,t),n.setMode(e.mode,t)}}},{key:"qh",value:function(){this.ta.textTracks.onaddtrack=null;var t,e=(0,f.Z)(this.ph.textTracks);try{for(e.s();!(t=e.n()).done;){var n,r=null===(n=t.value[p.Y])||void 0===n?void 0:n.track;null!==r&&void 0!==r&&r.oncuechange&&(r.oncuechange=null)}}catch(i){e.e(i)}finally{e.f()}}}]),t}();var k=n(4165),y=n(5861),Z=n(9698),b=function(){function t(e,n){var i=this;(0,r.Z)(this,t),(0,h.Z)(this,"Pc",(function(t,e){i.n.delegate.U("picture-in-picture-change",{detail:t,trigger:e})})),this.ta=e,this.n=n,(0,Z.yl)(this.ta,"enterpictureinpicture",this.Fh.bind(this)),(0,Z.yl)(this.ta,"leavepictureinpicture",this.Gh.bind(this))}return(0,i.Z)(t,[{key:"active",get:function(){return document.pictureInPictureElement===this.ta}},{key:"supported",get:function(){return(0,p._)(this.ta)}},{key:"enter",value:function(){var t=(0,y.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.ta.requestPictureInPicture());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"exit",value:function(){return document.exitPictureInPicture()}},{key:"Fh",value:function(t){this.Pc(!0,t)}},{key:"Gh",value:function(t){this.Pc(!1,t)}}]),t}(),g=function(){function t(e,n){(0,r.Z)(this,t),(0,h.Z)(this,"Oa","inline"),this.ta=e,this.n=n,(0,Z.yl)(this.ta,"webkitpresentationmodechanged",this.Kh.bind(this))}return(0,i.Z)(t,[{key:"Jh",get:function(){return(0,p.$)(this.ta)}},{key:"Ih",value:function(){var t=(0,y.Z)((0,k.Z)().mark((function t(e){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.Oa!==e){t.next=2;break}return t.abrupt("return");case 2:this.ta.webkitSetPresentationMode(e);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"Kh",value:function(){var t,e=this,n=this.Oa;this.Oa=this.ta.webkitPresentationMode,null===(t=this.n.player)||void 0===t||t.dispatchEvent(new Z.yb("video-presentation-change",{detail:this.Oa,trigger:event})),["fullscreen","picture-in-picture"].forEach((function(t){e.Oa!==t&&n!==t||e.n.delegate.U("".concat(t,"-change"),{detail:e.Oa===t,trigger:event})}))}}]),t}(),w=function(){function t(e){(0,r.Z)(this,t),this.Hh=e}return(0,i.Z)(t,[{key:"active",get:function(){return"fullscreen"===this.Hh.Oa}},{key:"supported",get:function(){return this.Hh.Jh}},{key:"enter",value:function(){var t=(0,y.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("fullscreen");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"exit",value:function(){var t=(0,y.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("inline");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),x=function(){function t(e){(0,r.Z)(this,t),this.Hh=e}return(0,i.Z)(t,[{key:"active",get:function(){return"picture-in-picture"===this.Hh.Oa}},{key:"supported",get:function(){return this.Hh.Jh}},{key:"enter",value:function(){var t=(0,y.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("picture-in-picture");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"exit",value:function(){var t=(0,y.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("inline");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),m=function(t){(0,c.Z)(n,t);var e=(0,o.Z)(n);function n(t,i){var a;if((0,r.Z)(this,n),a=e.call(this,t),(0,h.Z)((0,u.Z)(a),"$$PROVIDER_TYPE","VIDEO"),(0,h.Z)((0,u.Z)(a),"fullscreen",void 0),(0,h.Z)((0,u.Z)(a),"pictureInPicture",void 0),(0,p.$)(t)){var s=new g(t,i);a.fullscreen=new w(s),a.pictureInPicture=new x(s)}else(0,p._)(t)&&(a.pictureInPicture=new b(t,i));return a}return(0,i.Z)(n,[{key:"type",get:function(){return"video"}},{key:"setup",value:function(t){(0,a.Z)((0,s.Z)(n.prototype),"setup",this).call(this,t),(0,p.X)(this.video)&&new v(this.video,t),t.textRenderers[p.a0](this.video),(0,l.uG)((function(){t.textRenderers[p.a0](null)})),"video"===this.type&&t.delegate.U("provider-setup",{detail:this})}},{key:"video",get:function(){return this.n}}]),n}(d.H)}}]);
//# sourceMappingURL=108.6d75f3bf.chunk.js.map