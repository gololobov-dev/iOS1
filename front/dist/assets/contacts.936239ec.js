import{u as t}from"./store.1ff14714.js";import{_ as s,a}from"./navigationBarButton.75291d21.js";import{_ as n,a as o}from"./listView.b01ee7bf.js";import{f as e,b as i,c as r,d as c,x as l,F as m,t as u,o as d}from"./vendor.4a6d3ba9.js";const f={class:"full-name"},p={class:"last-name"},g={class:"first-name"};const b={name:"Recents",components:{navigationBar:s,navigationBarButton:a,toggleButton:n,listView:o},computed:{sortedContacts(){return this.$sortObjects(this.contacts,"lastName")}},setup(){document.title="Contacts | iOS";const{records:s,getRecords:a}=t("contacts");return d((()=>a())),{contacts:s}},render:function(t,s,a,n,o,d){const b=e("navigation-bar-button"),v=e("navigation-bar"),B=e("list-view");return i(),r(m,null,[c(v,{title:"All Contacts"},{right:l((()=>[c(b,{glyph:"plus"})])),_:1}),c(B,{list:d.sortedContacts},{default:l((t=>[c("div",f,[c("span",p,u(t.item.lastName)+" ",1),c("span",g,u(t.item.firstName),1)])])),_:1},8,["list"])],64)}};export default b;
