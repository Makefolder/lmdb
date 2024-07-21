import{s as z,o as N,a as P,n as C}from"../chunks/scheduler.Dn1Z_7GV.js";import{S as Y,i as A,s as D,e as y,h as G,d as h,c as E,a as k,g as $,j as q,b as x,f as v,k as I,t as w,l as F,m as g,n as j,o as H,p as J,q as R,r as L,u as K,v as O,w as Q,x as U,y as W}from"../chunks/index.DBk614ox.js";import{g as X,C as Z}from"../chunks/Card.5ydwIwOV.js";import{e as M}from"../chunks/index.vOvnMlyY.js";const{document:S}=X;function T(f,t,r){const s=f.slice();return s[11]=t[r],s}function ee(f){let t,r,s=M(f[0]),e=[];for(let l=0;l<s.length;l+=1)e[l]=V(T(f,s,l));const a=l=>w(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=L()},l(l){for(let o=0;o<e.length;o+=1)e[o].l(l);t=L()},m(l,o){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,o);v(l,t,o),r=!0},p(l,o){if(o&1){s=M(l[0]);let n;for(n=0;n<s.length;n+=1){const m=T(l,s,n);e[n]?(e[n].p(m,o),g(e[n],1)):(e[n]=V(m),e[n].c(),g(e[n],1),e[n].m(t.parentNode,t))}for(R(),n=s.length;n<e.length;n+=1)a(n);F()}},i(l){if(!r){for(let o=0;o<s.length;o+=1)g(e[o]);r=!0}},o(l){e=e.filter(Boolean);for(let o=0;o<e.length;o+=1)w(e[o]);r=!1},d(l){l&&h(t),K(e,l)}}}function te(f){let t,r="Сталася помилка (500)";return{c(){t=y("div"),t.textContent=r,this.h()},l(s){t=k(s,"DIV",{class:!0,"data-svelte-h":!0}),$(t)!=="svelte-14ff6gz"&&(t.textContent=r),this.h()},h(){x(t,"class","w-full text-center font-bold text-[3rem] py-[6rem]")},m(s,e){v(s,t,e)},p:C,i:C,o:C,d(s){s&&h(t)}}}function V(f){let t,r;return t=new Z({props:{movie:f[11]}}),{c(){O(t.$$.fragment)},l(s){Q(t.$$.fragment,s)},m(s,e){U(t,s,e),r=!0},p(s,e){const a={};e&1&&(a.movie=s[11]),t.$set(a)},i(s){r||(g(t.$$.fragment,s),r=!0)},o(s){w(t.$$.fragment,s),r=!1},d(s){W(t,s)}}}function B(f){let t,r,s;return{c(){t=y("div"),r=j("Завантаження"),s=j(f[3]),this.h()},l(e){t=k(e,"DIV",{class:!0});var a=q(t);r=H(a,"Завантаження"),s=H(a,f[3]),a.forEach(h),this.h()},h(){x(t,"class","w-full text-center font-bold text-[3rem] py-[6rem]")},m(e,a){v(e,t,a),I(t,r),I(t,s)},p(e,a){a&8&&J(s,e[3])},d(e){e&&h(t)}}}function le(f){let t,r,s=`<div class="mt-[3.5rem] space-y-5 max-w-[37rem]"><h1 class="h1">Bad Times at the El Royale</h1> <p>Дата виходу: 2018 <br/> Тривалість: 2год. 21хв.</p> <div>1969. Four strangers check in at the El Royale Hotel. The hotel is deserted, staffed by a
			single desk clerk. Some of the new guests&#39; reasons for being there are less than innocent and
			some are not who they appear to be.</div></div> <div class="max-h-[50rem] max-w-[42rem] overflow-hidden"><img class="latest__movie w-full h-full object-cover" src="../../el-royale-edit.png" alt="latest movie frame"/></div>`,e,a,l,o,n,m;const p=[te,ee],d=[];function b(c,u){return c[1]!==null?0:1}l=b(f),o=d[l]=p[l](f);let i=f[2]&&B(f);return{c(){t=D(),r=y("div"),r.innerHTML=s,e=D(),a=y("div"),o.c(),n=D(),i&&i.c(),this.h()},l(c){G("svelte-ertr2l",S.head).forEach(h),t=E(c),r=k(c,"DIV",{class:!0,"data-svelte-h":!0}),$(r)!=="svelte-1t8flmy"&&(r.innerHTML=s),e=E(c),a=k(c,"DIV",{class:!0});var _=q(a);o.l(_),n=E(_),i&&i.l(_),_.forEach(h),this.h()},h(){S.title="LMDB - Головна",x(r,"class","mt-[3rem] w-full flex justify-between cursor-default"),x(a,"class","mt-[2rem] card__container flex flex-wrap gap-[0.7rem] justify-start mx-auto max-w-full svelte-hxcwpg")},m(c,u){v(c,t,u),v(c,r,u),v(c,e,u),v(c,a,u),d[l].m(a,null),I(a,n),i&&i.m(a,null),m=!0},p(c,[u]){let _=l;l=b(c),l===_?d[l].p(c,u):(R(),w(d[_],1,1,()=>{d[_]=null}),F(),o=d[l],o?o.p(c,u):(o=d[l]=p[l](c),o.c()),g(o,1),o.m(a,n)),c[2]?i?i.p(c,u):(i=B(c),i.c(),i.m(a,null)):i&&(i.d(1),i=null)},i(c){m||(g(o),m=!0)},o(c){w(o),m=!1},d(c){c&&(h(t),h(r),h(e),h(a)),d[l].d(),i&&i.d()}}}function se(f,t,r){let s=[],e=null,a=1,l=!1;const o=async()=>{if(!l){r(2,l=!0);try{const u=await(await fetch("http://192.168.68.111:3001/api/v1/movie/discover/"+a)).json();u.message==="success"?r(0,s=[...s,...u.data.results]):r(1,e="Failed to fetch movies.")}catch(c){console.log(c),r(1,e="Internal error occured")}finally{a++,r(2,l=!1)}}},n=()=>{window.innerHeight+window.scrollY>=document.body.offsetHeight-500&&o()},m=["",".","..","..."];let p=0,d=m[p];const b=()=>{p=(p+1)%m.length,r(3,d=m[p])};let i;return N(()=>(i=setInterval(b,500),o(),window.addEventListener("scroll",n),()=>{window.removeEventListener("scroll",n)})),P(()=>{clearInterval(i)}),[s,e,l,d]}class ce extends Y{constructor(t){super(),A(this,t,se,le,z,{})}}export{ce as component};
