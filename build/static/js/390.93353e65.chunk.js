"use strict";(self.webpackChunkjs=self.webpackChunkjs||[]).push([[390],{5390:function(t,e,n){n.r(e),n.d(e,{VideoProvider:function(){return P}});var i=n(5671),r=n(3144),u=n(7326),c=n(1752),a=n(1120),s=n(136),h=n(7277),o=n(4942),f=n(5929),l=n(8178),p=n(32),d=n(7762),v=function(){function t(e,n){(0,i.Z)(this,t),this.ta=e,this.ph=n,e.textTracks.onaddtrack=this.ya.bind(this),(0,f.uG)(this.qh.bind(this))}return(0,r.Z)(t,[{key:"ya",value:function(t){var e=t.track;if(e&&!function(t,e){return Array.from(t.children).find((function(t){return t.track===e}))}(this.ta,e)){var n=new l.G({id:e.id,kind:e.kind,label:e.label,language:e.language,type:"vtt"});n[l.Y]={track:e},n[l.H]=2,n[l.Z]=!0;var i=0,r=function(t){if(e.cues)for(var r=i;r<e.cues.length;r++)n.addCue(e.cues[r],t),i++};r(t),e.oncuechange=r,this.ph.textTracks.add(n,t),n.setMode(e.mode,t)}}},{key:"qh",value:function(){this.ta.textTracks.onaddtrack=null;var t,e=(0,d.Z)(this.ph.textTracks);try{for(e.s();!(t=e.n()).done;){var n,i=null===(n=t.value[l.Y])||void 0===n?void 0:n.track;null!==i&&void 0!==i&&i.oncuechange&&(i.oncuechange=null)}}catch(r){e.e(r)}finally{e.f()}}}]),t}();var k=n(4165),Z=n(5861),y=n(9698),g=function(){function t(e,n){var r=this;(0,i.Z)(this,t),(0,o.Z)(this,"Pc",(function(t,e){r.n.delegate.U("picture-in-picture-change",{detail:t,trigger:e})})),this.ta=e,this.n=n,(0,y.yl)(this.ta,"enterpictureinpicture",this.Fh.bind(this)),(0,y.yl)(this.ta,"leavepictureinpicture",this.Gh.bind(this))}return(0,r.Z)(t,[{key:"active",get:function(){return document.pictureInPictureElement===this.ta}},{key:"supported",get:function(){return(0,l._)(this.ta)}},{key:"enter",value:function(){var t=(0,Z.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.ta.requestPictureInPicture());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"exit",value:function(){return document.exitPictureInPicture()}},{key:"Fh",value:function(t){this.Pc(!0,t)}},{key:"Gh",value:function(t){this.Pc(!1,t)}}]),t}(),w=function(){function t(e,n){(0,i.Z)(this,t),(0,o.Z)(this,"Oa","inline"),this.ta=e,this.n=n,(0,y.yl)(this.ta,"webkitpresentationmodechanged",this.Kh.bind(this))}return(0,r.Z)(t,[{key:"Jh",get:function(){return(0,l.$)(this.ta)}},{key:"Ih",value:function(){var t=(0,Z.Z)((0,k.Z)().mark((function t(e){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(this.Oa!==e){t.next=2;break}return t.abrupt("return");case 2:this.ta.webkitSetPresentationMode(e);case 3:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"Kh",value:function(){var t,e=this,n=this.Oa;this.Oa=this.ta.webkitPresentationMode,null===(t=this.n.player)||void 0===t||t.dispatchEvent(new y.yb("video-presentation-change",{detail:this.Oa,trigger:event})),["fullscreen","picture-in-picture"].forEach((function(t){e.Oa!==t&&n!==t||e.n.delegate.U("".concat(t,"-change"),{detail:e.Oa===t,trigger:event})}))}}]),t}(),x=function(){function t(e){(0,i.Z)(this,t),this.Hh=e}return(0,r.Z)(t,[{key:"active",get:function(){return"fullscreen"===this.Hh.Oa}},{key:"supported",get:function(){return this.Hh.Jh}},{key:"enter",value:function(){var t=(0,Z.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("fullscreen");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"exit",value:function(){var t=(0,Z.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("inline");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),b=function(){function t(e){(0,i.Z)(this,t),this.Hh=e}return(0,r.Z)(t,[{key:"active",get:function(){return"picture-in-picture"===this.Hh.Oa}},{key:"supported",get:function(){return this.Hh.Jh}},{key:"enter",value:function(){var t=(0,Z.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("picture-in-picture");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"exit",value:function(){var t=(0,Z.Z)((0,k.Z)().mark((function t(){return(0,k.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.Hh.Ih("inline");case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()}]),t}(),P=function(t){(0,s.Z)(n,t);var e=(0,h.Z)(n);function n(t,r){var c;if((0,i.Z)(this,n),c=e.call(this,t),(0,o.Z)((0,u.Z)(c),"$$PROVIDER_TYPE","VIDEO"),(0,o.Z)((0,u.Z)(c),"fullscreen",void 0),(0,o.Z)((0,u.Z)(c),"pictureInPicture",void 0),(0,l.$)(t)){var a=new w(t,r);c.fullscreen=new x(a),c.pictureInPicture=new b(a)}else(0,l._)(t)&&(c.pictureInPicture=new g(t,r));return c}return(0,r.Z)(n,[{key:"type",get:function(){return"video"}},{key:"setup",value:function(t){(0,c.Z)((0,a.Z)(n.prototype),"setup",this).call(this,t),(0,l.X)(this.video)&&new v(this.video,t),t.textRenderers[l.a0](this.video),(0,f.uG)((function(){t.textRenderers[l.a0](null)})),"video"===this.type&&t.delegate.U("provider-setup",{detail:this})}},{key:"video",get:function(){return this.n}}]),n}(p.H)}}]);
//# sourceMappingURL=390.93353e65.chunk.js.map