import{o as e,_ as a,a as t}from"./index.2e276b26.js";import{e as n,p as d,b as o,r as c,o as s,c as r,a as i,q as l,v,w as u,s as p}from"./vendor.c1d6a809.js";function m(){return JSON.stringify(Date.now())}const y=e("iOS",1,{upgrade(e){const a=e.createObjectStore("notes",{keyPath:"id",autoIncrement:!1});a.createIndex("id","id"),a.createIndex("created","created")}});const f=u();d("data-v-6d1e28d4");const g={class:"app note-screen"},b={class:"content"},x=p('<div class="line" data-v-6d1e28d4></div><div class="meta" data-v-6d1e28d4><div class="day" data-v-6d1e28d4>Today</div><div class="date" data-v-6d1e28d4>4/13/15,</div><div class="time" data-v-6d1e28d4>12:08 PM</div></div>',2);o();const h=f(((e,a,t,n,d,o)=>{const u=c("navigation-bar");return s(),r("div",g,[i(u,{title:"note",back:"Notes",background:["#875D52","#51372F","#3B2D21"]},{btn:f((()=>[i("div",{class:"add-note",onClick:a[1]||(a[1]=e=>n.createRecord(n.note))},"Save")])),_:1}),i("div",b,[x,l(i("textarea",{class:"note","onUpdate:modelValue":a[2]||(a[2]=e=>n.note.content=e)},null,512),[[v,n.note.content]])])])}));const w={name:"noteScreen",components:{navigationBar:t},setup(){const{createRecord:e}=function(e){const t=n({[e]:[]});return{records:t,getRecords:async()=>{try{(await y.getAllFromIndex(e,"created")).forEach((a=>t[e].push(a)))}catch(a){console.error(a)}},createRecord:async t=>{let n,d,o;try{n=m(),d=a(t),d.id=m(),d.created=Date.now(),o=await y.add(e,d),console.log(o)}catch(c){console.error(c)}finally{n=null,d=null,o=null}}}}("notes");return{note:{content:"Hello World!"},createRecord:e}}};w.render=h,w.__scopeId="data-v-6d1e28d4";export default w;
