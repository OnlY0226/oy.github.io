import{g as v,h as m,i as f,o as s,c as a,a as n,F as h,j as g,t as o,d as b,e as k,n as y}from"./app-f9420569.js";import{_ as C}from"./plugin-vue_export-helper-c27b6911.js";const F={class:"container"},O={key:2,class:"result mt_10"},B={class:"result mt_10"},I=v({__name:"OrderFood",props:{list:{},topic:{default:"menu"}},setup(p){const i=p,t=m({active:"",interval:null,duration:3e3,action:!1,result:[],list:[]}),r={menu:{add:"加菜",stop:"停止点菜",start:"开始点菜",restart:"重新点菜",result:"结果"},gift:{add:"再看看",stop:"停止抽奖",start:"开始抽奖",restart:"重新抽奖",result:"你亲亲的女朋友将会送你"}};function l(){let e=0;t.action=!0,t.interval=setInterval(()=>{const d=Math.floor(Math.random()*t.list.length);t.active=t.list[d],e+=100,e>=t.duration&&c()},100)}function c(){t.action=!1,t.result.push(t.active),t.list.splice(t.list.indexOf(t.active),1),clearInterval(t.interval)}function _(){t.list=[...i.list],t.result=[],l()}return f(()=>i.list,e=>{t.list=[...e]},{immediate:!0}),(e,d)=>(s(),a("div",null,[n("div",F,[(s(!0),a(h,null,g(t.list,u=>(s(),a("div",{class:y({"menu-item":!0,cur:u===t.active})},o(u),3))),256))]),t.action?(s(),a("button",{key:1,onClick:c},o(r[e.topic].stop),1)):(s(),a("button",{key:0,onClick:l},o(t.result.length>0?r[e.topic].add:r[e.topic].start),1)),t.result.length>0?(s(),a("div",O,[b(o(r[e.topic].result)+": ",1),n("div",null,o(t.result.join(",")),1),n("div",B,[n("button",{onClick:_},o(r[e.topic].restart),1)])])):k("v-if",!0)]))}});const V=C(I,[["__scopeId","data-v-b6a5db55"],["__file","OrderFood.vue"]]);export{V as O};
