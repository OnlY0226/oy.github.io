import{q as H,c as w,d as F,a4 as z,h as B,l as x,y as A,a5 as Q}from"./mermaid.core-673475ac.js";import{c as rt}from"./createText-b670c180-65a8dcc4.js";import{p as V}from"./svgDraw-b48a99d5-598ac2dd.js";import{l as it}from"./line-509145cc.js";const lt=(r,t,e,l)=>{t.forEach(a=>{xt[a](r,e,l)})},nt=(r,t,e)=>{x.trace("Making markers for ",e),r.append("defs").append("marker").attr("id",t+"-extensionStart").attr("class","marker extension "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 1,7 L18,13 V 1 Z"),r.append("defs").append("marker").attr("id",t+"-extensionEnd").attr("class","marker extension "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 1,1 V 13 L18,7 Z")},ct=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-compositionStart").attr("class","marker composition "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-compositionEnd").attr("class","marker composition "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},ht=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-aggregationStart").attr("class","marker aggregation "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-aggregationEnd").attr("class","marker aggregation "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z")},ot=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-dependencyStart").attr("class","marker dependency "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 5,7 L9,13 L1,7 L9,1 Z"),r.append("defs").append("marker").attr("id",t+"-dependencyEnd").attr("class","marker dependency "+t).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L14,7 L9,1 Z")},ft=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-lollipopStart").attr("class","marker lollipop "+t).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("circle").attr("stroke","black").attr("fill","white").attr("cx",6).attr("cy",7).attr("r",6)},pt=(r,t)=>{r.append("marker").attr("id",t+"-pointEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",10).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 0 L 10 5 L 0 10 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-pointStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",0).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",12).attr("markerHeight",12).attr("orient","auto").append("path").attr("d","M 0 5 L 10 10 L 10 0 z").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},dt=(r,t)=>{r.append("marker").attr("id",t+"-circleEnd").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",11).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-circleStart").attr("class","marker "+t).attr("viewBox","0 0 10 10").attr("refX",-1).attr("refY",5).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("circle").attr("cx","5").attr("cy","5").attr("r","5").attr("class","arrowMarkerPath").style("stroke-width",1).style("stroke-dasharray","1,0")},yt=(r,t)=>{r.append("marker").attr("id",t+"-crossEnd").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",12).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0"),r.append("marker").attr("id",t+"-crossStart").attr("class","marker cross "+t).attr("viewBox","0 0 11 11").attr("refX",-1).attr("refY",5.2).attr("markerUnits","userSpaceOnUse").attr("markerWidth",11).attr("markerHeight",11).attr("orient","auto").append("path").attr("d","M 1,1 l 9,9 M 10,1 l -9,9").attr("class","arrowMarkerPath").style("stroke-width",2).style("stroke-dasharray","1,0")},bt=(r,t)=>{r.append("defs").append("marker").attr("id",t+"-barbEnd").attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",14).attr("markerUnits","strokeWidth").attr("orient","auto").append("path").attr("d","M 19,7 L9,13 L14,7 L9,1 Z")},xt={extension:nt,composition:ct,aggregation:ht,dependency:ot,lollipop:ft,point:pt,circle:dt,cross:yt,barb:bt},Pt=lt;function gt(r,t){t&&r.attr("style",t)}function ut(r){const t=B(document.createElementNS("http://www.w3.org/2000/svg","foreignObject")),e=t.append("xhtml:div"),l=r.label,a=r.isNode?"nodeLabel":"edgeLabel";return e.html('<span class="'+a+'" '+(r.labelStyle?'style="'+r.labelStyle+'"':"")+">"+l+"</span>"),gt(e,r.labelStyle),e.style("display","inline-block"),e.style("white-space","nowrap"),e.attr("xmlns","http://www.w3.org/1999/xhtml"),t.node()}const wt=(r,t,e,l)=>{let a=r||"";if(typeof a=="object"&&(a=a[0]),H(w().flowchart.htmlLabels)){a=a.replace(/\\n|\n/g,"<br />"),x.info("vertexText"+a);const s={isNode:l,label:z(a).replace(/fa[blrs]?:fa-[\w-]+/g,n=>`<i class='${n.replace(":"," ")}'></i>`),labelStyle:t.replace("fill:","color:")};return ut(s)}else{const s=document.createElementNS("http://www.w3.org/2000/svg","text");s.setAttribute("style",t.replace("color:","fill:"));let i=[];typeof a=="string"?i=a.split(/\\n|\n|<br\s*\/?>/gi):Array.isArray(a)?i=a:i=[];for(const n of i){const c=document.createElementNS("http://www.w3.org/2000/svg","tspan");c.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),c.setAttribute("dy","1em"),c.setAttribute("x","0"),e?c.setAttribute("class","title-row"):c.setAttribute("class","row"),c.textContent=n.trim(),s.appendChild(c)}return s}},$=wt,E=async(r,t,e,l)=>{let a;const s=t.useHtmlLabels||H(w().flowchart.htmlLabels);e?a=e:a="node default";const i=r.insert("g").attr("class",a).attr("id",t.domId||t.id),n=i.insert("g").attr("class","label").attr("style",t.labelStyle);let c;t.labelText===void 0?c="":c=typeof t.labelText=="string"?t.labelText:t.labelText[0];const o=n.node();let h;t.labelType==="markdown"?h=rt(n,F(z(c),w()),{useHtmlLabels:s,width:t.width||w().flowchart.wrappingWidth,classes:"markdown-node-label"}):h=o.appendChild($(F(z(c),w()),t.labelStyle,!1,l));let f=h.getBBox();const b=t.padding/2;if(H(w().flowchart.htmlLabels)){const p=h.children[0],d=B(h),y=p.getElementsByTagName("img");if(y){const g=c.replace(/<img[^>]*>/g,"").trim()==="";await Promise.all([...y].map(u=>new Promise(I=>{function R(){if(u.style.display="flex",u.style.flexDirection="column",g){const M=w().fontSize?w().fontSize:window.getComputedStyle(document.body).fontSize,W=5;u.style.width=parseInt(M,10)*W+"px"}else u.style.width="100%";I(u)}setTimeout(()=>{u.complete&&R()}),u.addEventListener("error",R),u.addEventListener("load",R)})))}f=p.getBoundingClientRect(),d.attr("width",f.width),d.attr("height",f.height)}return s?n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"):n.attr("transform","translate(0, "+-f.height/2+")"),t.centerLabel&&n.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),n.insert("rect",":first-child"),{shapeSvg:i,bbox:f,halfPadding:b,label:n}},k=(r,t)=>{const e=t.node().getBBox();r.width=e.width,r.height=e.height};function _(r,t,e,l){return r.insert("polygon",":first-child").attr("points",l.map(function(a){return a.x+","+a.y}).join(" ")).attr("class","label-container").attr("transform","translate("+-t/2+","+e/2+")")}function mt(r,t){return r.intersect(t)}function at(r,t,e,l){var a=r.x,s=r.y,i=a-l.x,n=s-l.y,c=Math.sqrt(t*t*n*n+e*e*i*i),o=Math.abs(t*e*i/c);l.x<a&&(o=-o);var h=Math.abs(t*e*n/c);return l.y<s&&(h=-h),{x:a+o,y:s+h}}function kt(r,t,e){return at(r,t,t,e)}function vt(r,t,e,l){var a,s,i,n,c,o,h,f,b,p,d,y,g,u,I;if(a=t.y-r.y,i=r.x-t.x,c=t.x*r.y-r.x*t.y,b=a*e.x+i*e.y+c,p=a*l.x+i*l.y+c,!(b!==0&&p!==0&&q(b,p))&&(s=l.y-e.y,n=e.x-l.x,o=l.x*e.y-e.x*l.y,h=s*r.x+n*r.y+o,f=s*t.x+n*t.y+o,!(h!==0&&f!==0&&q(h,f))&&(d=a*n-s*i,d!==0)))return y=Math.abs(d/2),g=i*o-n*c,u=g<0?(g-y)/d:(g+y)/d,g=s*c-a*o,I=g<0?(g-y)/d:(g+y)/d,{x:u,y:I}}function q(r,t){return r*t>0}function Lt(r,t,e){var l=r.x,a=r.y,s=[],i=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;typeof t.forEach=="function"?t.forEach(function(d){i=Math.min(i,d.x),n=Math.min(n,d.y)}):(i=Math.min(i,t.x),n=Math.min(n,t.y));for(var c=l-r.width/2-i,o=a-r.height/2-n,h=0;h<t.length;h++){var f=t[h],b=t[h<t.length-1?h+1:0],p=vt(r,e,{x:c+f.x,y:o+f.y},{x:c+b.x,y:o+b.y});p&&s.push(p)}return s.length?(s.length>1&&s.sort(function(d,y){var g=d.x-e.x,u=d.y-e.y,I=Math.sqrt(g*g+u*u),R=y.x-e.x,M=y.y-e.y,W=Math.sqrt(R*R+M*M);return I<W?-1:I===W?0:1}),s[0]):r}const St=(r,t)=>{var e=r.x,l=r.y,a=t.x-e,s=t.y-l,i=r.width/2,n=r.height/2,c,o;return Math.abs(s)*i>Math.abs(a)*n?(s<0&&(n=-n),c=s===0?0:n*a/s,o=n):(a<0&&(i=-i),c=i,o=a===0?0:i*s/a),{x:e+c,y:l+o}},Bt=St,m={node:mt,circle:kt,ellipse:at,polygon:Lt,rect:Bt},Et=async(r,t)=>{t.useHtmlLabels||w().flowchart.htmlLabels||(t.centerLabel=!0);const{shapeSvg:l,bbox:a,halfPadding:s}=await E(r,t,"node "+t.classes,!0);x.info("Classes = ",t.classes);const i=l.insert("rect",":first-child");return i.attr("rx",t.rx).attr("ry",t.ry).attr("x",-a.width/2-s).attr("y",-a.height/2-s).attr("width",a.width+t.padding).attr("height",a.height+t.padding),k(t,i),t.intersect=function(n){return m.rect(t,n)},l},Mt=Et,J=r=>r?" "+r:"",T=(r,t)=>`${t||"node default"}${J(r.classes)} ${J(r.class)}`,K=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=l.height+t.padding,i=a+s,n=[{x:i/2,y:0},{x:i,y:-i/2},{x:i/2,y:-i},{x:0,y:-i/2}];x.info("Question main (Circle)");const c=_(e,i,i,n);return c.attr("style",t.style),k(t,c),t.intersect=function(o){return x.warn("Intersect called"),m.polygon(t,n,o)},e},Ct=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=28,a=[{x:0,y:l/2},{x:l/2,y:0},{x:0,y:-l/2},{x:-l/2,y:0}];return e.insert("polygon",":first-child").attr("points",a.map(function(i){return i.x+","+i.y}).join(" ")).attr("class","state-start").attr("r",7).attr("width",28).attr("height",28),t.width=28,t.height=28,t.intersect=function(i){return m.circle(t,14,i)},e},Tt=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=4,s=l.height+t.padding,i=s/a,n=l.width+2*i+t.padding,c=[{x:i,y:0},{x:n-i,y:0},{x:n,y:-s/2},{x:n-i,y:-s},{x:i,y:-s},{x:0,y:-s/2}],o=_(e,n,s,c);return o.attr("style",t.style),k(t,o),t.intersect=function(h){return m.polygon(t,c,h)},e},Rt=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:-s/2,y:0},{x:a,y:0},{x:a,y:-s},{x:-s/2,y:-s},{x:0,y:-s/2}];return _(e,a,s,i).attr("style",t.style),t.width=a+s,t.height=s,t.intersect=function(c){return m.polygon(t,i,c)},e},$t=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t),!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:-2*s/6,y:0},{x:a-s/6,y:0},{x:a+2*s/6,y:-s},{x:s/6,y:-s}],n=_(e,a,s,i);return n.attr("style",t.style),k(t,n),t.intersect=function(c){return m.polygon(t,i,c)},e},It=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:2*s/6,y:0},{x:a+s/6,y:0},{x:a-2*s/6,y:-s},{x:-s/6,y:-s}],n=_(e,a,s,i);return n.attr("style",t.style),k(t,n),t.intersect=function(c){return m.polygon(t,i,c)},e},Ht=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:-2*s/6,y:0},{x:a+2*s/6,y:0},{x:a-s/6,y:-s},{x:s/6,y:-s}],n=_(e,a,s,i);return n.attr("style",t.style),k(t,n),t.intersect=function(c){return m.polygon(t,i,c)},e},Nt=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:s/6,y:0},{x:a-s/6,y:0},{x:a+2*s/6,y:-s},{x:-2*s/6,y:-s}],n=_(e,a,s,i);return n.attr("style",t.style),k(t,n),t.intersect=function(c){return m.polygon(t,i,c)},e},_t=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:0,y:0},{x:a+s/2,y:0},{x:a,y:-s/2},{x:a+s/2,y:-s},{x:0,y:-s}],n=_(e,a,s,i);return n.attr("style",t.style),k(t,n),t.intersect=function(c){return m.polygon(t,i,c)},e},Wt=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=a/2,i=s/(2.5+a/50),n=l.height+i+t.padding,c="M 0,"+i+" a "+s+","+i+" 0,0,0 "+a+" 0 a "+s+","+i+" 0,0,0 "+-a+" 0 l 0,"+n+" a "+s+","+i+" 0,0,0 "+a+" 0 l 0,"+-n,o=e.attr("label-offset-y",i).insert("path",":first-child").attr("style",t.style).attr("d",c).attr("transform","translate("+-a/2+","+-(n/2+i)+")");return k(t,o),t.intersect=function(h){const f=m.rect(t,h),b=f.x-t.x;if(s!=0&&(Math.abs(b)<t.width/2||Math.abs(b)==t.width/2&&Math.abs(f.y-t.y)>t.height/2-i)){let p=i*i*(1-b*b/(s*s));p!=0&&(p=Math.sqrt(p)),p=i-p,h.y-t.y>0&&(p=-p),f.y+=p}return f},e},Xt=async(r,t)=>{const{shapeSvg:e,bbox:l,halfPadding:a}=await E(r,t,"node "+t.classes+" "+t.class,!0),s=e.insert("rect",":first-child"),i=l.width+t.padding,n=l.height+t.padding;if(s.attr("class","basic label-container").attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("x",-l.width/2-a).attr("y",-l.height/2-a).attr("width",i).attr("height",n),t.props){const c=new Set(Object.keys(t.props));t.props.borders&&(et(s,t.props.borders,i,n),c.delete("borders")),c.forEach(o=>{x.warn(`Unknown node property ${o}`)})}return k(t,s),t.intersect=function(c){return m.rect(t,c)},e},Yt=async(r,t)=>{const{shapeSvg:e}=await E(r,t,"label",!0);x.trace("Classes = ",t.class);const l=e.insert("rect",":first-child"),a=0,s=0;if(l.attr("width",a).attr("height",s),e.attr("class","label edgeLabel"),t.props){const i=new Set(Object.keys(t.props));t.props.borders&&(et(l,t.props.borders,a,s),i.delete("borders")),i.forEach(n=>{x.warn(`Unknown node property ${n}`)})}return k(t,l),t.intersect=function(i){return m.rect(t,i)},e};function et(r,t,e,l){const a=[],s=n=>{a.push(n,0)},i=n=>{a.push(0,n)};t.includes("t")?(x.debug("add top border"),s(e)):i(e),t.includes("r")?(x.debug("add right border"),s(l)):i(l),t.includes("b")?(x.debug("add bottom border"),s(e)):i(e),t.includes("l")?(x.debug("add left border"),s(l)):i(l),r.attr("stroke-dasharray",a.join(" "))}const Ut=(r,t)=>{let e;t.classes?e="node "+t.classes:e="node default";const l=r.insert("g").attr("class",e).attr("id",t.domId||t.id),a=l.insert("rect",":first-child"),s=l.insert("line"),i=l.insert("g").attr("class","label"),n=t.labelText.flat?t.labelText.flat():t.labelText;let c="";typeof n=="object"?c=n[0]:c=n,x.info("Label text abc79",c,n,typeof n=="object");const o=i.node().appendChild($(c,t.labelStyle,!0,!0));let h={width:0,height:0};if(H(w().flowchart.htmlLabels)){const y=o.children[0],g=B(o);h=y.getBoundingClientRect(),g.attr("width",h.width),g.attr("height",h.height)}x.info("Text 2",n);const f=n.slice(1,n.length);let b=o.getBBox();const p=i.node().appendChild($(f.join?f.join("<br/>"):f,t.labelStyle,!0,!0));if(H(w().flowchart.htmlLabels)){const y=p.children[0],g=B(p);h=y.getBoundingClientRect(),g.attr("width",h.width),g.attr("height",h.height)}const d=t.padding/2;return B(p).attr("transform","translate( "+(h.width>b.width?0:(b.width-h.width)/2)+", "+(b.height+d+5)+")"),B(o).attr("transform","translate( "+(h.width<b.width?0:-(b.width-h.width)/2)+", 0)"),h=i.node().getBBox(),i.attr("transform","translate("+-h.width/2+", "+(-h.height/2-d+3)+")"),a.attr("class","outer title-state").attr("x",-h.width/2-d).attr("y",-h.height/2-d).attr("width",h.width+t.padding).attr("height",h.height+t.padding),s.attr("class","divider").attr("x1",-h.width/2-d).attr("x2",h.width/2+d).attr("y1",-h.height/2-d+b.height+d).attr("y2",-h.height/2-d+b.height+d),k(t,a),t.intersect=function(y){return m.rect(t,y)},l},At=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.height+t.padding,s=l.width+a/4+t.padding,i=e.insert("rect",":first-child").attr("style",t.style).attr("rx",a/2).attr("ry",a/2).attr("x",-s/2).attr("y",-a/2).attr("width",s).attr("height",a);return k(t,i),t.intersect=function(n){return m.rect(t,n)},e},Dt=async(r,t)=>{const{shapeSvg:e,bbox:l,halfPadding:a}=await E(r,t,T(t,void 0),!0),s=e.insert("circle",":first-child");return s.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+a).attr("width",l.width+t.padding).attr("height",l.height+t.padding),x.info("Circle main"),k(t,s),t.intersect=function(i){return x.info("Circle intersect",t,l.width/2+a,i),m.circle(t,l.width/2+a,i)},e},Ot=async(r,t)=>{const{shapeSvg:e,bbox:l,halfPadding:a}=await E(r,t,T(t,void 0),!0),s=5,i=e.insert("g",":first-child"),n=i.insert("circle"),c=i.insert("circle");return i.attr("class",t.class),n.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+a+s).attr("width",l.width+t.padding+s*2).attr("height",l.height+t.padding+s*2),c.attr("style",t.style).attr("rx",t.rx).attr("ry",t.ry).attr("r",l.width/2+a).attr("width",l.width+t.padding).attr("height",l.height+t.padding),x.info("DoubleCircle main"),k(t,n),t.intersect=function(o){return x.info("DoubleCircle intersect",t,l.width/2+a+s,o),m.circle(t,l.width/2+a+s,o)},e},jt=async(r,t)=>{const{shapeSvg:e,bbox:l}=await E(r,t,T(t,void 0),!0),a=l.width+t.padding,s=l.height+t.padding,i=[{x:0,y:0},{x:a,y:0},{x:a,y:-s},{x:0,y:-s},{x:0,y:0},{x:-8,y:0},{x:a+8,y:0},{x:a+8,y:-s},{x:-8,y:-s},{x:-8,y:0}],n=_(e,a,s,i);return n.attr("style",t.style),k(t,n),t.intersect=function(c){return m.polygon(t,i,c)},e},zt=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=e.insert("circle",":first-child");return l.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),k(t,l),t.intersect=function(a){return m.circle(t,7,a)},e},G=(r,t,e)=>{const l=r.insert("g").attr("class","node default").attr("id",t.domId||t.id);let a=70,s=10;e==="LR"&&(a=10,s=70);const i=l.append("rect").attr("x",-1*a/2).attr("y",-1*s/2).attr("width",a).attr("height",s).attr("class","fork-join");return k(t,i),t.height=t.height+t.padding/2,t.width=t.width+t.padding/2,t.intersect=function(n){return m.rect(t,n)},l},Zt=(r,t)=>{const e=r.insert("g").attr("class","node default").attr("id",t.domId||t.id),l=e.insert("circle",":first-child"),a=e.insert("circle",":first-child");return a.attr("class","state-start").attr("r",7).attr("width",14).attr("height",14),l.attr("class","state-end").attr("r",5).attr("width",10).attr("height",10),k(t,a),t.intersect=function(s){return m.circle(t,7,s)},e},Ft=(r,t)=>{const e=t.padding/2,l=4,a=8;let s;t.classes?s="node "+t.classes:s="node default";const i=r.insert("g").attr("class",s).attr("id",t.domId||t.id),n=i.insert("rect",":first-child"),c=i.insert("line"),o=i.insert("line");let h=0,f=l;const b=i.insert("g").attr("class","label");let p=0;const d=t.classData.annotations&&t.classData.annotations[0],y=t.classData.annotations[0]?"«"+t.classData.annotations[0]+"»":"",g=b.node().appendChild($(y,t.labelStyle,!0,!0));let u=g.getBBox();if(H(w().flowchart.htmlLabels)){const v=g.children[0],L=B(g);u=v.getBoundingClientRect(),L.attr("width",u.width),L.attr("height",u.height)}t.classData.annotations[0]&&(f+=u.height+l,h+=u.width);let I=t.classData.label;t.classData.type!==void 0&&t.classData.type!==""&&(w().flowchart.htmlLabels?I+="&lt;"+t.classData.type+"&gt;":I+="<"+t.classData.type+">");const R=b.node().appendChild($(I,t.labelStyle,!0,!0));B(R).attr("class","classTitle");let M=R.getBBox();if(H(w().flowchart.htmlLabels)){const v=R.children[0],L=B(R);M=v.getBoundingClientRect(),L.attr("width",M.width),L.attr("height",M.height)}f+=M.height+l,M.width>h&&(h=M.width);const W=[];t.classData.members.forEach(v=>{const L=V(v);let X=L.displayText;w().flowchart.htmlLabels&&(X=X.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const N=b.node().appendChild($(X,L.cssStyle?L.cssStyle:t.labelStyle,!0,!0));let C=N.getBBox();if(H(w().flowchart.htmlLabels)){const j=N.children[0],U=B(N);C=j.getBoundingClientRect(),U.attr("width",C.width),U.attr("height",C.height)}C.width>h&&(h=C.width),f+=C.height+l,W.push(N)}),f+=a;const Z=[];if(t.classData.methods.forEach(v=>{const L=V(v);let X=L.displayText;w().flowchart.htmlLabels&&(X=X.replace(/</g,"&lt;").replace(/>/g,"&gt;"));const N=b.node().appendChild($(X,L.cssStyle?L.cssStyle:t.labelStyle,!0,!0));let C=N.getBBox();if(H(w().flowchart.htmlLabels)){const j=N.children[0],U=B(N);C=j.getBoundingClientRect(),U.attr("width",C.width),U.attr("height",C.height)}C.width>h&&(h=C.width),f+=C.height+l,Z.push(N)}),f+=a,d){let v=(h-u.width)/2;B(g).attr("transform","translate( "+(-1*h/2+v)+", "+-1*f/2+")"),p=u.height+l}let st=(h-M.width)/2;return B(R).attr("transform","translate( "+(-1*h/2+st)+", "+(-1*f/2+p)+")"),p+=M.height+l,c.attr("class","divider").attr("x1",-h/2-e).attr("x2",h/2+e).attr("y1",-f/2-e+a+p).attr("y2",-f/2-e+a+p),p+=a,W.forEach(v=>{B(v).attr("transform","translate( "+-h/2+", "+(-1*f/2+p+a/2)+")");const L=v==null?void 0:v.getBBox();p+=((L==null?void 0:L.height)??0)+l}),p+=a,o.attr("class","divider").attr("x1",-h/2-e).attr("x2",h/2+e).attr("y1",-f/2-e+a+p).attr("y2",-f/2-e+a+p),p+=a,Z.forEach(v=>{B(v).attr("transform","translate( "+-h/2+", "+(-1*f/2+p)+")");const L=v==null?void 0:v.getBBox();p+=((L==null?void 0:L.height)??0)+l}),n.attr("class","outer title-state").attr("x",-h/2-e).attr("y",-(f/2)-e).attr("width",h+t.padding).attr("height",f+t.padding),k(t,n),t.intersect=function(v){return m.rect(t,v)},i},P={rhombus:K,question:K,rect:Xt,labelRect:Yt,rectWithTitle:Ut,choice:Ct,circle:Dt,doublecircle:Ot,stadium:At,hexagon:Tt,rect_left_inv_arrow:Rt,lean_right:$t,lean_left:It,trapezoid:Ht,inv_trapezoid:Nt,rect_right_inv_arrow:_t,cylinder:Wt,start:zt,end:Zt,note:Mt,subroutine:jt,fork:G,join:G,class_box:Ft};let Y={};const tr=async(r,t,e)=>{let l,a;if(t.link){let s;w().securityLevel==="sandbox"?s="_top":t.linkTarget&&(s=t.linkTarget||"_blank"),l=r.insert("svg:a").attr("xlink:href",t.link).attr("target",s),a=await P[t.shape](l,t,e)}else a=await P[t.shape](r,t,e),l=a;return t.tooltip&&a.attr("title",t.tooltip),t.class&&a.attr("class","node default "+t.class),Y[t.id]=l,t.haveCallback&&Y[t.id].attr("class",Y[t.id].attr("class")+" clickable"),l},rr=(r,t)=>{Y[t.id]=r},ar=()=>{Y={}},er=r=>{const t=Y[r.id];x.trace("Transforming node",r.diff,r,"translate("+(r.x-r.width/2-5)+", "+r.width/2+")");const e=8,l=r.diff||0;return r.clusterNode?t.attr("transform","translate("+(r.x+l-r.width/2)+", "+(r.y-r.height/2-e)+")"):t.attr("transform","translate("+r.x+", "+r.y+")"),l};let O={},S={};const sr=()=>{O={},S={}},ir=(r,t)=>{const e=H(w().flowchart.htmlLabels),l=t.labelType==="markdown"?rt(r,t.label,{style:t.labelStyle,useHtmlLabels:e,addSvgBackground:!0}):$(t.label,t.labelStyle);x.info("abc82",t,t.labelType);const a=r.insert("g").attr("class","edgeLabel"),s=a.insert("g").attr("class","label");s.node().appendChild(l);let i=l.getBBox();if(e){const c=l.children[0],o=B(l);i=c.getBoundingClientRect(),o.attr("width",i.width),o.attr("height",i.height)}s.attr("transform","translate("+-i.width/2+", "+-i.height/2+")"),O[t.id]=a,t.width=i.width,t.height=i.height;let n;if(t.startLabelLeft){const c=$(t.startLabelLeft,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),S[t.id]||(S[t.id]={}),S[t.id].startLeft=o,D(n,t.startLabelLeft)}if(t.startLabelRight){const c=$(t.startLabelRight,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=o.node().appendChild(c),h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),S[t.id]||(S[t.id]={}),S[t.id].startRight=o,D(n,t.startLabelRight)}if(t.endLabelLeft){const c=$(t.endLabelLeft,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),o.node().appendChild(c),S[t.id]||(S[t.id]={}),S[t.id].endLeft=o,D(n,t.endLabelLeft)}if(t.endLabelRight){const c=$(t.endLabelRight,t.labelStyle),o=r.insert("g").attr("class","edgeTerminals"),h=o.insert("g").attr("class","inner");n=h.node().appendChild(c);const f=c.getBBox();h.attr("transform","translate("+-f.width/2+", "+-f.height/2+")"),o.node().appendChild(c),S[t.id]||(S[t.id]={}),S[t.id].endRight=o,D(n,t.endLabelRight)}return l};function D(r,t){w().flowchart.htmlLabels&&r&&(r.style.width=t.length*9+"px",r.style.height="12px")}const lr=(r,t)=>{x.info("Moving label abc78 ",r.id,r.label,O[r.id]);let e=t.updatedPath?t.updatedPath:t.originalPath;if(r.label){const l=O[r.id];let a=r.x,s=r.y;if(e){const i=A.calcLabelPosition(e);x.info("Moving label "+r.label+" from (",a,",",s,") to (",i.x,",",i.y,") abc78"),t.updatedPath&&(a=i.x,s=i.y)}l.attr("transform","translate("+a+", "+s+")")}if(r.startLabelLeft){const l=S[r.id].startLeft;let a=r.x,s=r.y;if(e){const i=A.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_left",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}if(r.startLabelRight){const l=S[r.id].startRight;let a=r.x,s=r.y;if(e){const i=A.calcTerminalLabelPosition(r.arrowTypeStart?10:0,"start_right",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}if(r.endLabelLeft){const l=S[r.id].endLeft;let a=r.x,s=r.y;if(e){const i=A.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_left",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}if(r.endLabelRight){const l=S[r.id].endRight;let a=r.x,s=r.y;if(e){const i=A.calcTerminalLabelPosition(r.arrowTypeEnd?10:0,"end_right",e);a=i.x,s=i.y}l.attr("transform","translate("+a+", "+s+")")}},Qt=(r,t)=>{const e=r.x,l=r.y,a=Math.abs(t.x-e),s=Math.abs(t.y-l),i=r.width/2,n=r.height/2;return a>=i||s>=n},Vt=(r,t,e)=>{x.warn(`intersection calc abc89:
  outsidePoint: ${JSON.stringify(t)}
  insidePoint : ${JSON.stringify(e)}
  node        : x:${r.x} y:${r.y} w:${r.width} h:${r.height}`);const l=r.x,a=r.y,s=Math.abs(l-e.x),i=r.width/2;let n=e.x<t.x?i-s:i+s;const c=r.height/2,o=Math.abs(t.y-e.y),h=Math.abs(t.x-e.x);if(Math.abs(a-t.y)*i>Math.abs(l-t.x)*c){let f=e.y<t.y?t.y-c-a:a-c-t.y;n=h*f/o;const b={x:e.x<t.x?e.x+n:e.x-h+n,y:e.y<t.y?e.y+o-f:e.y-o+f};return n===0&&(b.x=t.x,b.y=t.y),h===0&&(b.x=t.x),o===0&&(b.y=t.y),x.warn(`abc89 topp/bott calc, Q ${o}, q ${f}, R ${h}, r ${n}`,b),b}else{e.x<t.x?n=t.x-i-l:n=l-i-t.x;let f=o*n/h,b=e.x<t.x?e.x+h-n:e.x-h+n,p=e.y<t.y?e.y+f:e.y-f;return x.warn(`sides calc abc89, Q ${o}, q ${f}, R ${h}, r ${n}`,{_x:b,_y:p}),n===0&&(b=t.x,p=t.y),h===0&&(b=t.x),o===0&&(p=t.y),{x:b,y:p}}},tt=(r,t)=>{x.warn("abc88 cutPathAtIntersect",r,t);let e=[],l=r[0],a=!1;return r.forEach(s=>{if(x.info("abc88 checking point",s,t),!Qt(t,s)&&!a){const i=Vt(t,l,s);x.warn("abc88 inside",s,l,i),x.warn("abc88 intersection",i);let n=!1;e.forEach(c=>{n=n||c.x===i.x&&c.y===i.y}),e.some(c=>c.x===i.x&&c.y===i.y)?x.warn("abc88 no intersect",i,e):e.push(i),a=!0}else x.warn("abc88 outside",s,l),l=s,a||e.push(s)}),x.warn("abc88 returning points",e),e},nr=function(r,t,e,l,a,s){let i=e.points,n=!1;const c=s.node(t.v);var o=s.node(t.w);x.info("abc88 InsertEdge: ",e),o.intersect&&c.intersect&&(i=i.slice(1,e.points.length-1),i.unshift(c.intersect(i[0])),x.info("Last point",i[i.length-1],o,o.intersect(i[i.length-1])),i.push(o.intersect(i[i.length-1]))),e.toCluster&&(x.info("to cluster abc88",l[e.toCluster]),i=tt(e.points,l[e.toCluster].node),n=!0),e.fromCluster&&(x.info("from cluster abc88",l[e.fromCluster]),i=tt(i.reverse(),l[e.fromCluster].node).reverse(),n=!0);const h=i.filter(u=>!Number.isNaN(u.y));let f;a==="graph"||a==="flowchart"?f=e.curve||Q:f=Q;const b=it().x(function(u){return u.x}).y(function(u){return u.y}).curve(f);let p;switch(e.thickness){case"normal":p="edge-thickness-normal";break;case"thick":p="edge-thickness-thick";break;case"invisible":p="edge-thickness-thick";break;default:p=""}switch(e.pattern){case"solid":p+=" edge-pattern-solid";break;case"dotted":p+=" edge-pattern-dotted";break;case"dashed":p+=" edge-pattern-dashed";break}const d=r.append("path").attr("d",b(h)).attr("id",e.id).attr("class"," "+p+(e.classes?" "+e.classes:"")).attr("style",e.style);let y="";switch((w().flowchart.arrowMarkerAbsolute||w().state.arrowMarkerAbsolute)&&(y=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,y=y.replace(/\(/g,"\\("),y=y.replace(/\)/g,"\\)")),x.info("arrowTypeStart",e.arrowTypeStart),x.info("arrowTypeEnd",e.arrowTypeEnd),e.arrowTypeStart){case"arrow_cross":d.attr("marker-start","url("+y+"#"+a+"-crossStart)");break;case"arrow_point":d.attr("marker-start","url("+y+"#"+a+"-pointStart)");break;case"arrow_barb":d.attr("marker-start","url("+y+"#"+a+"-barbStart)");break;case"arrow_circle":d.attr("marker-start","url("+y+"#"+a+"-circleStart)");break;case"aggregation":d.attr("marker-start","url("+y+"#"+a+"-aggregationStart)");break;case"extension":d.attr("marker-start","url("+y+"#"+a+"-extensionStart)");break;case"composition":d.attr("marker-start","url("+y+"#"+a+"-compositionStart)");break;case"dependency":d.attr("marker-start","url("+y+"#"+a+"-dependencyStart)");break;case"lollipop":d.attr("marker-start","url("+y+"#"+a+"-lollipopStart)");break}switch(e.arrowTypeEnd){case"arrow_cross":d.attr("marker-end","url("+y+"#"+a+"-crossEnd)");break;case"arrow_point":d.attr("marker-end","url("+y+"#"+a+"-pointEnd)");break;case"arrow_barb":d.attr("marker-end","url("+y+"#"+a+"-barbEnd)");break;case"arrow_circle":d.attr("marker-end","url("+y+"#"+a+"-circleEnd)");break;case"aggregation":d.attr("marker-end","url("+y+"#"+a+"-aggregationEnd)");break;case"extension":d.attr("marker-end","url("+y+"#"+a+"-extensionEnd)");break;case"composition":d.attr("marker-end","url("+y+"#"+a+"-compositionEnd)");break;case"dependency":d.attr("marker-end","url("+y+"#"+a+"-dependencyEnd)");break;case"lollipop":d.attr("marker-end","url("+y+"#"+a+"-lollipopEnd)");break}let g={};return n&&(g.updatedPath=i),g.originalPath=e.points,g};export{tr as a,ir as b,nr as c,lr as d,ar as e,sr as f,$ as g,Bt as h,Pt as i,E as l,er as p,rr as s,k as u};
