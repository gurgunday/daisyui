import{s as H,a as $,e as b,d as k,c as v,b as y,h as m,i as d,j as x,y as M,g as V,t as j,f as S,k as p,w as q,n as G}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as L,i as P,c as T,b as z,m as A,t as B,a as F,d as O}from"../chunks/index.BimWP6M-.js";import{e as U}from"../chunks/each.D6YF6ztN.js";import{S as R}from"../chunks/SEO.4HnaQnHO.js";function C(n,e,r){const s=n.slice();return s[2]=e[r],s}function J(n){let e,r='<h1 class="text-base-content/30">Coming soon</h1>';return{c(){e=b("div"),e.innerHTML=r,this.h()},l(s){e=v(s,"DIV",{class:!0,"data-svelte-h":!0}),V(e)!=="svelte-1mm80pw"&&(e.innerHTML=r),this.h()},h(){d(e,"class","border-base-content/10 rounded-box flex h-96 w-full grow flex-col items-center justify-center border")},m(s,a){x(s,e,a)},d(s){s&&m(e)}}}function K(n){let e,r,s;return{c(){e=b("figure"),r=b("img"),this.h()},l(a){e=v(a,"FIGURE",{class:!0});var o=y(e);r=v(o,"IMG",{loading:!0,src:!0,class:!0,alt:!0}),o.forEach(m),this.h()},h(){d(r,"loading","lazy"),q(r.src,s=n[2].thumbnail)||d(r,"src",s),d(r,"class","border-base-content bg-base-300 rounded-btn border border-opacity-5"),d(r,"alt",n[2].title),d(e,"class","mx-auto w-full object-cover p-6 max-sm:pb-0 sm:max-w-[12rem] sm:pe-0")},m(a,o){x(a,e,o),p(e,r)},p:G,d(a){a&&m(e)}}}function D(n){let e,r,s,a,o=n[2].title+"",f,h,i,t=n[2].desc+"",c,l,u=n[2].thumbnail&&K(n);return{c(){e=b("a"),u&&u.c(),r=$(),s=b("div"),a=b("h2"),f=j(o),h=$(),i=b("p"),c=j(t),l=$(),this.h()},l(g){e=v(g,"A",{class:!0,href:!0});var _=y(e);u&&u.l(_),r=k(_),s=v(_,"DIV",{class:!0});var w=y(s);a=v(w,"H2",{class:!0});var E=y(a);f=S(E,o),E.forEach(m),h=k(w),i=v(w,"P",{class:!0});var I=y(i);c=S(I,t),I.forEach(m),w.forEach(m),l=k(_),_.forEach(m),this.h()},h(){d(a,"class","card-title"),d(i,"class","text-xs opacity-60"),d(s,"class","card-body"),d(e,"class","card sm:card-side hover:bg-base-200 transition-colors sm:max-w-none"),d(e,"href",`/blog/${n[2].slug}`)},m(g,_){x(g,e,_),u&&u.m(e,null),p(e,r),p(e,s),p(s,a),p(a,f),p(s,h),p(s,i),p(i,c),p(e,l)},p(g,_){g[2].thumbnail&&u.p(g,_)},d(g){g&&m(e),u&&u.d()}}}function N(n){let e,r,s,a,o;e=new R({props:{title:"daisyUI Blog",desc:"daisyUI blog - Updates, ideas and resources",img:"/images/blog.jpg"}});let f=n[0].length===0&&J(),h=U(n[0]),i=[];for(let t=0;t<h.length;t+=1)i[t]=D(C(n,h,t));return{c(){T(e.$$.fragment),r=$(),f&&f.c(),s=$(),a=b("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){z(e.$$.fragment,t),r=k(t),f&&f.l(t),s=k(t),a=v(t,"DIV",{class:!0});var c=y(a);for(let l=0;l<i.length;l+=1)i[l].l(c);c.forEach(m),this.h()},h(){d(a,"class","grid justify-items-stretch gap-6")},m(t,c){A(e,t,c),x(t,r,c),f&&f.m(t,c),x(t,s,c),x(t,a,c);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(a,null);o=!0},p(t,[c]){if(c&1){h=U(t[0]);let l;for(l=0;l<h.length;l+=1){const u=C(t,h,l);i[l]?i[l].p(u,c):(i[l]=D(u),i[l].c(),i[l].m(a,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=h.length}},i(t){o||(B(e.$$.fragment,t),o=!0)},o(t){F(e.$$.fragment,t),o=!1},d(t){t&&(m(r),m(s),m(a)),O(e,t),f&&f.d(t),M(i,t)}}}function Q(n,e,r){let{data:s}=e,{posts:a}=s;return n.$$set=o=>{"data"in o&&r(1,s=o.data)},[a,s]}class ee extends L{constructor(e){super(),P(this,e,Q,N,H,{data:1})}}export{ee as component};
