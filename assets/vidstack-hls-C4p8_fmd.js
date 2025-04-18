var rt=Object.defineProperty;var N=n=>{throw TypeError(n)};var ot=(n,t,i)=>t in n?rt(n,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[t]=i;var _=(n,t,i)=>ot(n,typeof t!="symbol"?t+"":t,i),R=(n,t,i)=>t.has(n)||N("Cannot "+i);var e=(n,t,i)=>(R(n,t,"read from private field"),i?i.call(n):t.get(n)),p=(n,t,i)=>t.has(n)?N("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(n):t.set(n,i),f=(n,t,i,s)=>(R(n,t,"write to private field"),s?s.call(n,i):t.set(n,i),i),a=(n,t,i)=>(R(n,t,"access private method"),i);import{b3 as ht,y as C,aT as at,p as O,b4 as V,a1 as q,m as dt,aL as b,S as ut,b1 as ct,b2 as M,aY as $,b5 as lt,aZ as U,b6 as pt,b7 as ft,J as vt}from"./app-D7RiErk-.js";import{VideoProvider as yt}from"./vidstack-video-C0TDppIR.js";import{R as gt}from"./vidstack-DqAw8m9J-CeplnQ0d.js";import"./vidstack-Bq6c3Bam-BUUldsGT.js";const Lt=n=>ut(n);var T,h,o,x,D,r,E,j,k,F,Q,K,W,B,J,Y,X,Z,z,G,tt;class St{constructor(t,i){p(this,r);p(this,T);p(this,h);p(this,o,null);p(this,x,null);_(this,"config",{});p(this,D,new Set);f(this,T,t),f(this,h,i)}get instance(){return e(this,o)}setup(t){const{streamType:i}=e(this,h).$state,s=O(i).includes("live"),c=O(i).includes("ll-");f(this,o,new t({lowLatencyMode:c,backBufferLength:c?4:s?8:void 0,renderTextTracksNatively:!1,...this.config}));const u=a(this,r,F).bind(this);for(const l of Object.values(t.Events))e(this,o).on(l,u);e(this,o).on(t.Events.ERROR,a(this,r,X).bind(this));for(const l of e(this,D))l(e(this,o));e(this,h).player.dispatch("hls-instance",{detail:e(this,o)}),e(this,o).attachMedia(e(this,T)),e(this,o).on(t.Events.AUDIO_TRACK_SWITCHED,a(this,r,W).bind(this)),e(this,o).on(t.Events.LEVEL_SWITCHED,a(this,r,B).bind(this)),e(this,o).on(t.Events.LEVEL_LOADED,a(this,r,Y).bind(this)),e(this,o).on(t.Events.LEVEL_UPDATED,a(this,r,J).bind(this)),e(this,o).on(t.Events.NON_NATIVE_TEXT_TRACKS_FOUND,a(this,r,Q).bind(this)),e(this,o).on(t.Events.CUES_PARSED,a(this,r,K).bind(this)),e(this,h).qualities[V.enableAuto]=a(this,r,z).bind(this),q(e(this,h).qualities,"change",a(this,r,G).bind(this)),q(e(this,h).audioTracks,"change",a(this,r,tt).bind(this)),f(this,x,dt(a(this,r,j).bind(this)))}onInstance(t){return e(this,D).add(t),()=>e(this,D).delete(t)}loadSource(t){var i;C(t.src)&&((i=e(this,o))==null||i.loadSource(t.src))}destroy(){var t,i;(t=e(this,o))==null||t.destroy(),f(this,o,null),(i=e(this,x))==null||i.call(this),f(this,x,null)}}T=new WeakMap,h=new WeakMap,o=new WeakMap,x=new WeakMap,D=new WeakMap,r=new WeakSet,E=function(t,i){return new b(Lt(t),{detail:i})},j=function(){if(!e(this,h).$state.live())return;const t=new gt(a(this,r,k).bind(this));return t.start(),t.stop.bind(t)},k=function(){var t;e(this,h).$state.liveSyncPosition.set(((t=e(this,o))==null?void 0:t.liveSyncPosition)??1/0)},F=function(t,i){var s;(s=e(this,h).player)==null||s.dispatch(a(this,r,E).call(this,t,i))},Q=function(t,i){const s=a(this,r,E).call(this,t,i);let c=-1;for(let u=0;u<i.tracks.length;u++){const l=i.tracks[u],d=l.subtitleTrack??l.closedCaptions,w=new ct({id:`hls-${l.kind}-${u}`,src:d==null?void 0:d.url,label:l.label,language:d==null?void 0:d.lang,kind:l.kind,default:l.default});w[M.readyState]=2,w[M.onModeChange]=()=>{w.mode==="showing"?(e(this,o).subtitleTrack=u,c=u):c===u&&(e(this,o).subtitleTrack=-1,c=-1)},e(this,h).textTracks.add(w,s)}},K=function(t,i){var l;const s=(l=e(this,o))==null?void 0:l.subtitleTrack,c=e(this,h).textTracks.getById(`hls-${i.type}-${s}`);if(!c)return;const u=a(this,r,E).call(this,t,i);for(const d of i.cues)d.positionAlign="auto",c.addCue(d,u)},W=function(t,i){const s=e(this,h).audioTracks[i.id];if(s){const c=a(this,r,E).call(this,t,i);e(this,h).audioTracks[$.select](s,!0,c)}},B=function(t,i){const s=e(this,h).qualities[i.level];if(s){const c=a(this,r,E).call(this,t,i);e(this,h).qualities[$.select](s,!0,c)}},J=function(t,i){i.details.totalduration>0&&e(this,h).$state.inferredLiveDVRWindow.set(i.details.totalduration)},Y=function(t,i){var P;if(e(this,h).$state.canPlay())return;const{type:s,live:c,totalduration:u,targetduration:l}=i.details,d=a(this,r,E).call(this,t,i);e(this,h).notify("stream-type-change",c?s==="EVENT"&&Number.isFinite(u)&&l>=10?"live:dvr":"live":"on-demand",d),e(this,h).notify("duration-change",u,d);const w=e(this,o).media;e(this,o).currentLevel===-1&&e(this,h).qualities[V.setAuto](!0,d);for(const y of e(this,o).audioTracks){const H={id:y.id.toString(),label:y.name,language:y.lang||"",kind:"main"};e(this,h).audioTracks[$.add](H,d)}for(const y of e(this,o).levels){const H={id:((P=y.id)==null?void 0:P.toString())??y.height+"p",width:y.width,height:y.height,codec:y.codecSet,bitrate:y.bitrate};e(this,h).qualities[$.add](H,d)}w.dispatchEvent(new b("canplay",{trigger:d}))},X=function(t,i){var s;if(i.fatal)switch(i.type){case"mediaError":(s=e(this,o))==null||s.recoverMediaError();break;default:a(this,r,Z).call(this,i.error);break}},Z=function(t){e(this,h).notify("error",{message:t.message,code:1,error:t})},z=function(){e(this,o)&&(e(this,o).currentLevel=-1)},G=function(){const{qualities:t}=e(this,h);!e(this,o)||t.auto||(e(this,o)[t.switch+"Level"]=t.selectedIndex,lt&&(e(this,T).currentTime=e(this,T).currentTime))},tt=function(){const{audioTracks:t}=e(this,h);e(this,o)&&e(this,o).audioTrack!==t.selectedIndex&&(e(this,o).audioTrack=t.selectedIndex)};var m,g,I,L,it,et,st,nt;class Et{constructor(t,i,s){p(this,L);p(this,m);p(this,g);p(this,I);f(this,m,t),f(this,g,i),f(this,I,s),a(this,L,it).call(this)}}m=new WeakMap,g=new WeakMap,I=new WeakMap,L=new WeakSet,it=async function(){const t={onLoadStart:a(this,L,et).bind(this),onLoaded:a(this,L,st).bind(this),onLoadError:a(this,L,nt).bind(this)};let i=await mt(e(this,m),t);if(U(i)&&!C(e(this,m))&&(i=await Tt(e(this,m),t)),!i)return null;if(!i.isSupported()){const s="[vidstack] `hls.js` is not supported in this environment";return e(this,g).player.dispatch(new b("hls-unsupported")),e(this,g).notify("error",{message:s,code:4}),null}return i},et=function(){e(this,g).player.dispatch(new b("hls-lib-load-start"))},st=function(t){e(this,g).player.dispatch(new b("hls-lib-loaded",{detail:t})),e(this,I).call(this,t)},nt=function(t){const i=pt(t);e(this,g).player.dispatch(new b("hls-lib-load-error",{detail:i})),e(this,g).notify("error",{message:i.message,code:4,error:i})};async function Tt(n,t={}){var i,s,c,u,l;if(!U(n)){if((i=t.onLoadStart)==null||i.call(t),n.prototype&&n.prototype!==Function)return(s=t.onLoaded)==null||s.call(t,n),n;try{const d=(c=await n())==null?void 0:c.default;if(d&&d.isSupported)(u=t.onLoaded)==null||u.call(t,d);else throw Error("");return d}catch(d){(l=t.onLoadError)==null||l.call(t,d)}}}async function mt(n,t={}){var i,s,c;if(C(n)){(i=t.onLoadStart)==null||i.call(t);try{if(await ft(n),!vt(window.Hls))throw Error("");const u=window.Hls;return(s=t.onLoaded)==null||s.call(t,u),u}catch(u){(c=t.onLoadError)==null||c.call(t,u)}}}const wt="https://cdn.jsdelivr.net";var A,v,S;class bt extends yt{constructor(){super(...arguments);_(this,"$$PROVIDER_TYPE","HLS");p(this,A,null);p(this,v,new St(this.video,this.ctx));p(this,S,`${wt}/npm/hls.js@^1.5.0/dist/hls.min.js`)}get ctor(){return e(this,A)}get instance(){return e(this,v).instance}get type(){return"hls"}get canLiveSync(){return!0}get config(){return e(this,v).config}set config(i){e(this,v).config=i}get library(){return e(this,S)}set library(i){f(this,S,i)}preconnect(){C(e(this,S))&&at(e(this,S))}setup(){super.setup(),new Et(e(this,S),this.ctx,i=>{f(this,A,i),e(this,v).setup(i),this.ctx.notify("provider-setup",this);const s=O(this.ctx.$state.source);s&&this.loadSource(s)})}async loadSource(i,s){if(!C(i.src)){this.removeSource();return}this.media.preload=s||"",this.appendSource(i,"application/x-mpegurl"),e(this,v).loadSource(i),this.currentSrc=i}onInstance(i){const s=e(this,v).instance;return s&&i(s),e(this,v).onInstance(i)}destroy(){e(this,v).destroy()}}A=new WeakMap,v=new WeakMap,S=new WeakMap,_(bt,"supported",ht());export{bt as HLSProvider};
