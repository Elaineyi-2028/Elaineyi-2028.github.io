"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[772],{772:(e,l,t)=>{t.r(l),t.d(l,{default:()=>m});var s=t(8719),a=t(8072),r=t(808),u=t(3042),i=t(4754),o=t(8891),n=t(7845),c=t(3635);const h=["/DailyRoutine.html","/Fitness.html","/","/blog.html","/intro.html","/posts/2024-03-01-blog_example.html","/posts/2024-03-02-blog_example2.html","/apps/Applist.html","/apps/Chrome.html","/apps/design.html","/apps/toolbox.html","/code/AutoHotkey.html","/code/Electron.html","/code/HTML.html","/code/Javascript.html","/code/Markdown.html","/code/Python.html","/code/","/code/Regex.html","/code/Vue.html","/deploy/CloudServices.html","/deploy/Cloudflare.html","/deploy/DNS.html","/deploy/GitHub.html","/deploy/MySQL.html","/deploy/Static.html","/deploy/VPS.html","/family/Coupon.html","/family/Diet.html","/family/Life.html","/research/RDMA.html","/research/","/research/paper.html","/web/Comments.html","/web/VuePress.html","/web/docsify.html","/apps/topic/","/apps/topic/topic01.html","/apps/topic/topic02anytitle.html","/404.html","/posts/","/apps/","/deploy/","/family/","/web/","/category/","/category/%E5%86%99%E5%9C%A8%E5%89%8D%E9%9D%A2/","/category/%E5%B7%A5%E5%85%B7/","/tag/","/tag/%E5%8D%9A%E5%AE%A2%E7%94%A8%E9%80%94/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/article/","/star/","/timeline/"];t(8224);const p=(0,a.Mjh)("SEARCH_PRO_QUERY_HISTORY",[]),v=e=>h[e.id]+("anchor"in e?`#${e.anchor}`:""),{resultHistoryCount:d}=c.s,y=(0,a.Mjh)("SEARCH_PRO_RESULT_HISTORY",[]);var m=(0,i.pM)({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(e,{emit:l}){const t=(0,o.rd)(),h=(0,o.Zv)(),m=(0,s.s5)(c.a),{enabled:g,addQueryHistory:E,queryHistory:f,removeQueryHistory:H}=(()=>{const{queryHistoryCount:e}=c.s,l=e>0;return{enabled:l,queryHistory:p,addQueryHistory:t=>{l&&(p.value.length<e?p.value=Array.from(new Set([t,...p.value])):p.value=Array.from(new Set([t,...p.value.slice(0,e-1)])))},removeQueryHistory:e=>{p.value=[...p.value.slice(0,e),...p.value.slice(e+1)]}}})(),{enabled:A,resultHistory:k,addResultHistory:R,removeResultHistory:b}=(()=>{const e=d>0;return{enabled:e,resultHistory:y,addResultHistory:l=>{if(e){const e={link:v(l),display:l.display};"header"in l&&(e.header=l.header),y.value.length<d?y.value=[e,...y.value]:y.value=[e,...y.value.slice(0,d-1)]}},removeResultHistory:e=>{y.value=[...y.value.slice(0,e),...y.value.slice(e+1)]}}})(),w=g||A,C=(0,u.lW)(e,"queries"),{results:Q,searching:D}=(e=>{const l=(0,c.u)(),t=(0,o.Zv)(),s=(0,o.BV)(),a=(0,u.KR)(!1),n=(0,u.IJ)([]);return(0,i.sV)((()=>{const{search:u,terminate:o}=(0,c.c)(),h=()=>{n.value=[],a.value=!1},p=(0,r.Q0)((e=>{const r=e.join(" "),{searchFilter:i=(e=>e),splitWord:o,suggestionsFilter:c,...p}=l.value;a.value=!0,r?u(e.join(" "),t.value,p).then((e=>i(e,r,t.value,s.value))).then((e=>{n.value=e,a.value=!1})).catch((e=>{console.error(e),h()})):h()}),c.s.searchDelay-c.s.suggestDelay);(0,i.wB)([e,t],(([e])=>p(e)),{immediate:!0}),(0,i.hi)((()=>{o()}))})),{searching:a,results:n}})(C),x=(0,u.Kh)({isQuery:!0,index:0}),S=(0,u.KR)(0),q=(0,u.KR)(0),B=(0,i.EW)((()=>w&&(f.value.length>0||k.value.length>0))),M=(0,i.EW)((()=>Q.value.length>0)),_=(0,i.EW)((()=>Q.value[S.value]||null)),T=e=>e.map((e=>(0,s.Kg)(e)?e:(0,i.h)(e[0],e[1]))),F=e=>{if("customField"===e.type){const l=c.b[e.index]||"$content",[t,a=""]=(0,s.Qd)(l)?l[h.value].split("$content"):l.split("$content");return e.display.map((e=>(0,i.h)("div",T([t,...e,a]))))}return e.display.map((e=>(0,i.h)("div",T(e))))},L=()=>{S.value=0,q.value=0,l("updateQuery",""),l("close")};return(0,a.MLh)("keydown",(s=>{if(e.isFocusing)if(M.value){if("ArrowUp"===s.key)q.value>0?q.value-=1:(S.value=S.value>0?S.value-1:Q.value.length-1,q.value=_.value.contents.length-1);else if("ArrowDown"===s.key)q.value<_.value.contents.length-1?q.value+=1:(S.value=S.value<Q.value.length-1?S.value+1:0,q.value=0);else if("Enter"===s.key){const l=_.value.contents[q.value];E(e.queries.join(" ")),R(l),t.push(v(l)),L()}}else if(A)if("ArrowUp"===s.key)(()=>{const{isQuery:e,index:l}=x;0===l?(x.isQuery=!e,x.index=e?k.value.length-1:f.value.length-1):x.index=l-1})();else if("ArrowDown"===s.key)(()=>{const{isQuery:e,index:l}=x;l===(e?f.value.length-1:k.value.length-1)?(x.isQuery=!e,x.index=0):x.index=l+1})();else if("Enter"===s.key){const{index:e}=x;x.isQuery?(l("updateQuery",f.value[e]),s.preventDefault()):(t.push(k.value[e].link),L())}})),(0,i.wB)([S,q],(()=>{document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active")?.scrollIntoView(!1)}),{flush:"post"}),()=>(0,i.h)("div",{class:["search-pro-result-wrapper",{empty:e.queries.length?!M.value:!B.value}],id:"search-pro-results"},e.queries.length?D.value?(0,i.h)(n.S,{hint:m.value.searching}):M.value?(0,i.h)("ul",{class:"search-pro-result-list"},Q.value.map((({title:l,contents:t},s)=>{const a=S.value===s;return(0,i.h)("li",{class:["search-pro-result-list-item",{active:a}]},[(0,i.h)("div",{class:"search-pro-result-title"},l||m.value.defaultTitle),t.map(((l,t)=>{const s=a&&q.value===t;return(0,i.h)(o.Wt,{to:v(l),class:["search-pro-result-item",{active:s,"aria-selected":s}],onClick:()=>{E(e.queries.join(" ")),R(l),L()}},(()=>["text"===l.type?null:(0,i.h)("title"===l.type?n.T:"heading"===l.type?n.H:n.a,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},["text"===l.type&&l.header?(0,i.h)("div",{class:"content-header"},l.header):null,(0,i.h)("div",F(l))])]))}))])}))):m.value.emptyResult:w?B.value?[g?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.queryHistory),f.value.map(((e,t)=>(0,i.h)("div",{class:["search-pro-result-item",{active:x.isQuery&&x.index===t}],onClick:()=>{l("updateQuery",e)}},[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},e),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),H(t)}})])))])):null,A?(0,i.h)("ul",{class:"search-pro-result-list"},(0,i.h)("li",{class:"search-pro-result-list-item"},[(0,i.h)("div",{class:"search-pro-result-title"},m.value.resultHistory),k.value.map(((e,l)=>(0,i.h)(o.Wt,{to:e.link,class:["search-pro-result-item",{active:!x.isQuery&&x.index===l}],onClick:()=>{L()}},(()=>[(0,i.h)(n.b,{class:"search-pro-result-type"}),(0,i.h)("div",{class:"search-pro-result-content"},[e.header?(0,i.h)("div",{class:"content-header"},e.header):null,(0,i.h)("div",e.display.map((e=>T(e))).flat())]),(0,i.h)("button",{class:"search-pro-remove-icon",innerHTML:n.C,onClick:e=>{e.preventDefault(),e.stopPropagation(),b(l)}})]))))])):null]:m.value.emptyHistory:m.value.emptyResult)}})}}]);