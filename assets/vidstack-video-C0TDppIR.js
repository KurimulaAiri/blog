var O=Object.defineProperty;var E=i=>{throw TypeError(i)};var U=(i,t,e)=>t in i?O(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var m=(i,t,e)=>U(i,typeof t!="symbol"?t+"":t,e),w=(i,t,e)=>t.has(i)||E("Cannot "+e);var s=(i,t,e)=>(w(i,t,"read from private field"),e?e.call(i):t.get(i)),r=(i,t,e)=>t.has(i)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),c=(i,t,e,n)=>(w(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e),p=(i,t,e)=>(w(i,t,"access private method"),e);import{U as q,a_ as V,a$ as A,b0 as N,q as C,a1 as _,aL as F,al as Y,b1 as j,b2 as v}from"./app-D7RiErk-.js";import{H as z,a as B}from"./vidstack-Bq6c3Bam-BUUldsGT.js";import"./vidstack-DqAw8m9J-CeplnQ0d.js";var P,f,k,H,L;class G{constructor(t,e){r(this,k);r(this,P);r(this,f);c(this,P,t),c(this,f,e),t.textTracks.onaddtrack=p(this,k,H).bind(this),C(p(this,k,L).bind(this))}}P=new WeakMap,f=new WeakMap,k=new WeakSet,H=function(t){const e=t.track;if(!e||J(s(this,P),e))return;const n=new j({id:e.id,kind:e.kind,label:e.label??"",language:e.language,type:"vtt"});n[v.native]={track:e},n[v.readyState]=2,n[v.nativeHLS]=!0;let a=0;const I=$=>{if(e.cues)for(let M=a;M<e.cues.length;M++)n.addCue(e.cues[M],$),a++};I(t),e.oncuechange=I,s(this,f).textTracks.add(n,t),n.setMode(e.mode,t)},L=function(){var t;s(this,P).textTracks.onaddtrack=null;for(const e of s(this,f).textTracks){const n=(t=e[v.native])==null?void 0:t.track;n!=null&&n.oncuechange&&(n.oncuechange=null)}};function J(i,t){return Array.from(i.children).find(e=>e.track===t)}var d,y,x,S,D,T;class K{constructor(t,e){r(this,x);r(this,d);r(this,y);r(this,T,(t,e)=>{s(this,y).notify("picture-in-picture-change",t,e)});c(this,d,t),c(this,y,e),new Y(t).add("enterpictureinpicture",p(this,x,S).bind(this)).add("leavepictureinpicture",p(this,x,D).bind(this))}get active(){return document.pictureInPictureElement===s(this,d)}get supported(){return A(s(this,d))}async enter(){return s(this,d).requestPictureInPicture()}exit(){return document.exitPictureInPicture()}}d=new WeakMap,y=new WeakMap,x=new WeakSet,S=function(t){s(this,T).call(this,!0,t)},D=function(t){s(this,T).call(this,!1,t)},T=new WeakMap;var l,g,o,b,R;class Q{constructor(t,e){r(this,b);r(this,l);r(this,g);r(this,o,"inline");c(this,l,t),c(this,g,e),_(t,"webkitpresentationmodechanged",p(this,b,R).bind(this))}get mode(){return s(this,o)}get supported(){return V(s(this,l))}async setPresentationMode(t){s(this,o)!==t&&s(this,l).webkitSetPresentationMode(t)}}l=new WeakMap,g=new WeakMap,o=new WeakMap,b=new WeakSet,R=function(t){var n;const e=s(this,o);c(this,o,s(this,l).webkitPresentationMode),(n=s(this,g).player)==null||n.dispatch(new F("video-presentation-change",{detail:s(this,o),trigger:t})),["fullscreen","picture-in-picture"].forEach(a=>{(s(this,o)===a||e===a)&&s(this,g).notify(`${a}-change`,s(this,o)===a,t)})};var u;class W{constructor(t){r(this,u);c(this,u,t)}get active(){return s(this,u).mode==="fullscreen"}get supported(){return s(this,u).supported}async enter(){s(this,u).setPresentationMode("fullscreen")}async exit(){s(this,u).setPresentationMode("inline")}}u=new WeakMap;var h;class X{constructor(t){r(this,h);c(this,h,t)}get active(){return s(this,h).mode==="picture-in-picture"}get supported(){return s(this,h).supported}async enter(){s(this,h).setPresentationMode("picture-in-picture")}async exit(){s(this,h).setPresentationMode("inline")}}h=new WeakMap;class st extends z{constructor(e,n){super(e,n);m(this,"$$PROVIDER_TYPE","VIDEO");m(this,"airPlay");m(this,"fullscreen");m(this,"pictureInPicture");q(()=>{if(this.airPlay=new B(e,n),V(e)){const a=new Q(e,n);this.fullscreen=new W(a),this.pictureInPicture=new X(a)}else A(e)&&(this.pictureInPicture=new K(e,n))},this.scope)}get type(){return"video"}setup(){super.setup(),N(this.video)&&new G(this.video,this.ctx),this.ctx.textRenderers.attachVideo(this.video),C(()=>{this.ctx.textRenderers.attachVideo(null)}),this.type==="video"&&this.ctx.notify("provider-setup",this)}get video(){return this.media}}export{st as VideoProvider};
