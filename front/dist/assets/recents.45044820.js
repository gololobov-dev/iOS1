import{u as e}from"./store.bf7ffd0d.js";import{_ as t,a}from"./navigationBarButton.eec160c9.js";import{_ as s}from"./toggleButton.23888f0e.js";import{_ as l}from"./listView.43b1daa3.js";import{p as o,i,r as n,o as r,c,a as d,t as m,k as u,F as f,w as v,h as p}from"./vendor.77a37f1f.js";import"./index.cc4b6a56.js";const g=v();o("data-v-53a284bd");const b={class:"full-name"},C={class:"last-name"},B={class:"first-name"};i();const _=g(((e,t,a,s,l,o)=>{const i=n("toggle-button"),v=n("navigation-bar-button"),p=n("navigation-bar"),_=n("list-view");return r(),c(f,null,[d(p,null,{center:g((()=>[d(i,{id:"recents-calls",data:l.sections,modelValue:l.section,"onUpdate:modelValue":t[1]||(t[1]=e=>l.section=e)},null,8,["data","modelValue"])])),right:g((()=>[d(v,{label:"Clear",onClick:s.deleteAllRecords},null,8,["onClick"])])),_:1}),"all"==l.section.value?(r(),c(_,{key:0,list:s.records},{default:g((t=>[d("div",{class:"list-item",onClick:a=>e.openContact(t.item.id)},[d("div",b,[d("span",C,m(t.item.lastName)+" ",1),d("span",B,m(t.item.firstName),1)])],8,["onClick"])])),_:1},8,["list"])):u("",!0)],64)}));const j={name:"Recents",components:{navigationBar:t,navigationBarButton:a,toggleButton:s,listView:l},data:()=>({section:{value:"all",title:"All"},sections:[{value:"all",title:"All"},{value:"missed",title:"Missed"}]}),setup(){document.title="Recent Calls | iOS";const{records:t,deleteAllRecords:a}=e("calls"),s=p((()=>t.value.filter((e=>e.missed))));return{records:t,missedCalls:s,deleteAllRecords:a}}};j.render=_,j.__scopeId="data-v-53a284bd";export default j;
