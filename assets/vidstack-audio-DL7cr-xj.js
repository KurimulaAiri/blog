var o=Object.defineProperty;var a=(t,i,e)=>i in t?o(t,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[i]=e;var r=(t,i,e)=>a(t,typeof i!="symbol"?i+"":i,e);import{U as p}from"./app-D7RiErk-.js";import{H as d,a as u}from"./vidstack-Bq6c3Bam-BUUldsGT.js";import"./vidstack-DqAw8m9J-CeplnQ0d.js";class y extends d{constructor(e,s){super(e,s);r(this,"$$PROVIDER_TYPE","AUDIO");r(this,"airPlay");p(()=>{this.airPlay=new u(this.media,s)},this.scope)}get type(){return"audio"}setup(){super.setup(),this.type==="audio"&&this.ctx.notify("provider-setup",this)}get audio(){return this.media}}export{y as AudioProvider};
