import{_ as a}from"./navigationBar.69d36a25.js";import{p as t,e as n,f as l,b as o,c as s,t as e,g as c,w as r,d as p}from"./vendor.fbc0f821.js";import{_ as b}from"./tabBar.5f7af887.js";const i=r();t("data-v-63362b06");const g={class:"navigation-bar-button"},d={key:0,class:"label"};n();const m=i(((a,t,n,r,p,b)=>{const i=l("glyph");return o(),s("button",g,[n.label?(o(),s("div",d,e(n.label),1)):c("",!0),n.glyph?(o(),s(i,{key:1,name:n.glyph},null,8,["name"])):c("",!0)])}));const u={name:"navigationBarButton",props:{label:String,glyph:String}};u.render=m,u.__scopeId="data-v-63362b06";const v=r();t("data-v-56bc80f8");const h={class:"tab-bar-button"},f={class:"label"};n();const y=v(((a,t,n,c,r,b)=>{const i=l("glyph");return o(),s("button",h,[p(i,{name:n.glyph},null,8,["name"]),p("div",f,e(n.label),1)])}));const _={name:"tabBarButton",props:{label:String,glyph:String}};_.render=y,_.__scopeId="data-v-56bc80f8";const B=r();t("data-v-f523d19c");const k={class:"app clock-app"};n();const S=B(((a,t,n,e,c,r)=>{const b=l("navigation-bar-button"),i=l("navigation-bar"),g=l("router-view"),d=l("tab-bar");return o(),s("div",k,[p(i,null,{left:B((()=>[p(b,{label:"Edit"})])),right:B((()=>[p(b,{glyph:"plus"})])),_:1}),p(g,{class:"content"}),p(d,{sections:c.appSections},null,8,["sections"])])}));const w={name:"textApp",components:{navigationBar:a,navigationBarButton:u,tabBar:b,tabBarButton:_},data:()=>({appSections:[{name:"clockApp_worldClock",label:"World Clock",glyph:"globe"},{name:"clockApp_alarm",label:"Alarm",glyph:"alarm"},{name:"clockApp_stopwatch",label:"Stopwatch",glyph:"stopwatch"},{name:"clockApp_timer",label:"Timer",glyph:"timer"}]})};w.render=S,w.__scopeId="data-v-f523d19c";export default w;
