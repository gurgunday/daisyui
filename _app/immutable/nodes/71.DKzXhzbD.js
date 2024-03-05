import{s as St,z as pt,A as Lt,a,t as Tt,e as s,H as Ut,d as n,f as Mt,c as r,b as I,x as Et,h,g as k,i as C,j as ce,k as t,n as qt}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as Pt,i as jt,c as i,b as p,m as d,t as c,a as m,d as f}from"../chunks/index.BimWP6M-.js";import{g as Bt,a as It}from"../chunks/spread.CgU5AtxT.js";import{M as Rt}from"../chunks/mdsvex.DUxr1AEf.js";import{T as $}from"../chunks/Translate.CZVBqRbz.js";function zt(me){let l,L,x,P,o,_,He=`<code class="language-js">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">//...</span>

  <span class="token comment">// add daisyUI plugin</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"daisyui"</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token comment">// daisyUI config (optional - here are the default values)</span>
  <span class="token literal-property property">daisyui</span><span class="token operator">:</span> <span class="token punctuation">&#123;</span>
    <span class="token literal-property property">themes</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// false: only light + dark | true: all themes | array: specific themes like this ["light", "dark", "cupcake"]</span>
    <span class="token literal-property property">darkTheme</span><span class="token operator">:</span> <span class="token string">"dark"</span><span class="token punctuation">,</span> <span class="token comment">// name of one of the included themes for dark mode</span>
    <span class="token literal-property property">base</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// applies background color and foreground color for root element by default</span>
    <span class="token literal-property property">styled</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// include daisyUI colors and design decisions for all components</span>
    <span class="token literal-property property">utils</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// adds responsive and modifier utility classes</span>
    <span class="token literal-property property">prefix</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)</span>
    <span class="token literal-property property">logs</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// Shows info about daisyUI version and used config in the console when building your CSS</span>
    <span class="token literal-property property">themeRoot</span><span class="token operator">:</span> <span class="token string">":root"</span><span class="token punctuation">,</span> <span class="token comment">// The element that receives theme color CSS variables</span>
  <span class="token punctuation">&#125;</span><span class="token punctuation">,</span>

  <span class="token comment">//...</span>
<span class="token punctuation">&#125;</span></code>`,Le,j,z,Ie,Te,u,T,A,dt='<a aria-hidden="true" tabindex="-1" href="#styled"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>styled',Ce,fe,ct="<code>Boolean (default: true)</code>",Se,W,Ue,D,Ee,b,F,mt='<a aria-hidden="true" tabindex="-1" href="#themes"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>themes',qe,ue,ft="<code>Boolean or array (default: false)</code>",Pe,N,je,G,Be,J,Re,K,ze,S,O,ut='<a aria-hidden="true" tabindex="-1" href="#base"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>base',Ae,$e,$t="<code>Boolean (default: true)</code>",We,Q,De,U,V,ht='<a aria-hidden="true" tabindex="-1" href="#utils"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>utils',Fe,he,gt="<code>Boolean (default: true)</code>",Ne,X,Ge,E,Y,yt='<a aria-hidden="true" tabindex="-1" href="#logs"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>logs',Je,ge,kt="<code>Boolean (default: true)</code>",Ke,Z,Oe,q,ee,bt='<a aria-hidden="true" tabindex="-1" href="#darktheme"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>darkTheme',Qe,ye,vt="<code>String (default: &quot;dark&quot;)</code>",Ve,te,Xe,g,ae,xt='<a aria-hidden="true" tabindex="-1" href="#prefix"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>prefix',Ye,ke,_t="<code>String (default: &quot;&quot;)</code>",Ze,ne,et,se,tt,re,at,le,nt,oe,st,M,ie,wt='<a aria-hidden="true" tabindex="-1" href="#themeroot"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>themeRoot',rt,be,Ht="<code>String (default: &quot;:root&quot;)</code>",lt,pe,ot,de,Me;return l=new $({props:{text:"daisyUI can be configured from your <code>tailwind.config.js</code> file."}}),x=new $({props:{text:"Default config"}}),z=new $({props:{text:"Config values explained"}}),W=new $({props:{text:"If it's true, components will have colors and style so you won't need to design anything."}}),D=new $({props:{text:"If it's false, components will have no color and no visual style so you can design your own style on a basic skeleton."}}),N=new $({props:{text:"If it's true, all themes will be included."}}),G=new $({props:{text:"If it's false, only light and dark themes will be available."}}),J=new $({props:{text:"If it's an array, only themes in the array will be included and the first theme will be the default theme."}}),K=new $({props:{text:"Read more about <a href='/docs/themes/'>themes</a>."}}),Q=new $({props:{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/blob/master/src/base'>a few base styles</a> will be added."}}),X=new $({props:{text:"If it's true, <a href='https://github.com/saadeghi/daisyui/tree/master/src/utilities'>responsive and utility classes</a> will be added."}}),Z=new $({props:{text:"If it's true, daisyUI shows logs in the terminal while CSS is building."}}),te=new $({props:{text:"Allows us to pick another theme for system's auto dark mode. By default, <code>dark</code> theme (or a custom theme named <code>dark</code>) will be the default theme if no theme is specified and the user is using dark mode on their system. With this config, you can set another theme to be the default dark mode theme."}}),ne=new $({props:{text:"Adds a prefix to class name for all daisyUI classes (including component classes, modifier classes and responsive classes)."}}),se=new $({props:{text:"For example: <code>btn</code> will become <code>prefix-btn</code>."}}),re=new $({props:{text:"If you're using a second CSS library that has similar class names, you can use this config to avoid conflicts."}}),le=new $({props:{text:"Utility classes like color names (e.g. <code>bg-primary</code>) or border-radius (e.g. <code>rounded-box</code>) will not be affected by this config because they're being added as extensions to Tailwind CSS classes."}}),oe=new $({props:{text:"If you use daisyUI <code>prefix</code> option (like <code>daisy-</code>) and Tailwind CSS <code>prefix</code> option (like <code>tw-</code>) together, classnames will be prefixed like this: <code>tw-daisy-btn</code>."}}),pe=new $({props:{text:"Which element to attach the theme CSS variables to."}}),de=new $({props:{text:"In certain situations (such as embedding daisyUI in a shadow root) it may be useful to set this to e.g. <code>*</code>, so all components will have access to the required CSS variables."}}),{c(){i(l.$$.fragment),L=a(),i(x.$$.fragment),P=Tt(`:
`),o=s("pre"),_=new Ut(!1),Le=a(),j=s("h2"),i(z.$$.fragment),Ie=Tt(":"),Te=a(),u=s("ul"),T=s("li"),A=s("h3"),A.innerHTML=dt,Ce=a(),fe=s("p"),fe.innerHTML=ct,Se=a(),i(W.$$.fragment),Ue=a(),i(D.$$.fragment),Ee=a(),b=s("li"),F=s("h3"),F.innerHTML=mt,qe=a(),ue=s("p"),ue.innerHTML=ft,Pe=a(),i(N.$$.fragment),je=a(),i(G.$$.fragment),Be=a(),i(J.$$.fragment),Re=a(),i(K.$$.fragment),ze=a(),S=s("li"),O=s("h3"),O.innerHTML=ut,Ae=a(),$e=s("p"),$e.innerHTML=$t,We=a(),i(Q.$$.fragment),De=a(),U=s("li"),V=s("h3"),V.innerHTML=ht,Fe=a(),he=s("p"),he.innerHTML=gt,Ne=a(),i(X.$$.fragment),Ge=a(),E=s("li"),Y=s("h3"),Y.innerHTML=yt,Je=a(),ge=s("p"),ge.innerHTML=kt,Ke=a(),i(Z.$$.fragment),Oe=a(),q=s("li"),ee=s("h3"),ee.innerHTML=bt,Qe=a(),ye=s("p"),ye.innerHTML=vt,Ve=a(),i(te.$$.fragment),Xe=a(),g=s("li"),ae=s("h3"),ae.innerHTML=xt,Ye=a(),ke=s("p"),ke.innerHTML=_t,Ze=a(),i(ne.$$.fragment),et=a(),i(se.$$.fragment),tt=a(),i(re.$$.fragment),at=a(),i(le.$$.fragment),nt=a(),i(oe.$$.fragment),st=a(),M=s("li"),ie=s("h3"),ie.innerHTML=wt,rt=a(),be=s("p"),be.innerHTML=Ht,lt=a(),i(pe.$$.fragment),ot=a(),i(de.$$.fragment),this.h()},l(e){p(l.$$.fragment,e),L=n(e),p(x.$$.fragment,e),P=Mt(e,`:
`),o=r(e,"PRE",{class:!0});var w=I(o);_=Et(w,!1),w.forEach(h),Le=n(e),j=r(e,"H2",{id:!0});var it=I(j);p(z.$$.fragment,it),Ie=Mt(it,":"),it.forEach(h),Te=n(e),u=r(e,"UL",{});var y=I(u);T=r(y,"LI",{});var B=I(T);A=r(B,"H3",{id:!0,"data-svelte-h":!0}),k(A)!=="svelte-12wdwo8"&&(A.innerHTML=dt),Ce=n(B),fe=r(B,"P",{"data-svelte-h":!0}),k(fe)!=="svelte-140327"&&(fe.innerHTML=ct),Se=n(B),p(W.$$.fragment,B),Ue=n(B),p(D.$$.fragment,B),B.forEach(h),Ee=n(y),b=r(y,"LI",{});var H=I(b);F=r(H,"H3",{id:!0,"data-svelte-h":!0}),k(F)!=="svelte-473dtf"&&(F.innerHTML=mt),qe=n(H),ue=r(H,"P",{"data-svelte-h":!0}),k(ue)!=="svelte-b41uyo"&&(ue.innerHTML=ft),Pe=n(H),p(N.$$.fragment,H),je=n(H),p(G.$$.fragment,H),Be=n(H),p(J.$$.fragment,H),Re=n(H),p(K.$$.fragment,H),H.forEach(h),ze=n(y),S=r(y,"LI",{});var ve=I(S);O=r(ve,"H3",{id:!0,"data-svelte-h":!0}),k(O)!=="svelte-19o1rvq"&&(O.innerHTML=ut),Ae=n(ve),$e=r(ve,"P",{"data-svelte-h":!0}),k($e)!=="svelte-140327"&&($e.innerHTML=$t),We=n(ve),p(Q.$$.fragment,ve),ve.forEach(h),De=n(y),U=r(y,"LI",{});var xe=I(U);V=r(xe,"H3",{id:!0,"data-svelte-h":!0}),k(V)!=="svelte-17zsfny"&&(V.innerHTML=ht),Fe=n(xe),he=r(xe,"P",{"data-svelte-h":!0}),k(he)!=="svelte-140327"&&(he.innerHTML=gt),Ne=n(xe),p(X.$$.fragment,xe),xe.forEach(h),Ge=n(y),E=r(y,"LI",{});var _e=I(E);Y=r(_e,"H3",{id:!0,"data-svelte-h":!0}),k(Y)!=="svelte-u4mmx4"&&(Y.innerHTML=yt),Je=n(_e),ge=r(_e,"P",{"data-svelte-h":!0}),k(ge)!=="svelte-140327"&&(ge.innerHTML=kt),Ke=n(_e),p(Z.$$.fragment,_e),_e.forEach(h),Oe=n(y),q=r(y,"LI",{});var we=I(q);ee=r(we,"H3",{id:!0,"data-svelte-h":!0}),k(ee)!=="svelte-o47ygu"&&(ee.innerHTML=bt),Qe=n(we),ye=r(we,"P",{"data-svelte-h":!0}),k(ye)!=="svelte-1s7einc"&&(ye.innerHTML=vt),Ve=n(we),p(te.$$.fragment,we),we.forEach(h),Xe=n(y),g=r(y,"LI",{});var v=I(g);ae=r(v,"H3",{id:!0,"data-svelte-h":!0}),k(ae)!=="svelte-13fjxyp"&&(ae.innerHTML=xt),Ye=n(v),ke=r(v,"P",{"data-svelte-h":!0}),k(ke)!=="svelte-1pou1ww"&&(ke.innerHTML=_t),Ze=n(v),p(ne.$$.fragment,v),et=n(v),p(se.$$.fragment,v),tt=n(v),p(re.$$.fragment,v),at=n(v),p(le.$$.fragment,v),nt=n(v),p(oe.$$.fragment,v),v.forEach(h),st=n(y),M=r(y,"LI",{});var R=I(M);ie=r(R,"H3",{id:!0,"data-svelte-h":!0}),k(ie)!=="svelte-rjjd9y"&&(ie.innerHTML=wt),rt=n(R),be=r(R,"P",{"data-svelte-h":!0}),k(be)!=="svelte-zy7ecw"&&(be.innerHTML=Ht),lt=n(R),p(pe.$$.fragment,R),ot=n(R),p(de.$$.fragment,R),R.forEach(h),y.forEach(h),this.h()},h(){_.a=null,C(o,"class","language-js"),C(j,"id",""),C(A,"id","styled"),C(F,"id","themes"),C(O,"id","base"),C(V,"id","utils"),C(Y,"id","logs"),C(ee,"id","darktheme"),C(ae,"id","prefix"),C(ie,"id","themeroot")},m(e,w){d(l,e,w),ce(e,L,w),d(x,e,w),ce(e,P,w),ce(e,o,w),_.m(He,o),ce(e,Le,w),ce(e,j,w),d(z,j,null),t(j,Ie),ce(e,Te,w),ce(e,u,w),t(u,T),t(T,A),t(T,Ce),t(T,fe),t(T,Se),d(W,T,null),t(T,Ue),d(D,T,null),t(u,Ee),t(u,b),t(b,F),t(b,qe),t(b,ue),t(b,Pe),d(N,b,null),t(b,je),d(G,b,null),t(b,Be),d(J,b,null),t(b,Re),d(K,b,null),t(u,ze),t(u,S),t(S,O),t(S,Ae),t(S,$e),t(S,We),d(Q,S,null),t(u,De),t(u,U),t(U,V),t(U,Fe),t(U,he),t(U,Ne),d(X,U,null),t(u,Ge),t(u,E),t(E,Y),t(E,Je),t(E,ge),t(E,Ke),d(Z,E,null),t(u,Oe),t(u,q),t(q,ee),t(q,Qe),t(q,ye),t(q,Ve),d(te,q,null),t(u,Xe),t(u,g),t(g,ae),t(g,Ye),t(g,ke),t(g,Ze),d(ne,g,null),t(g,et),d(se,g,null),t(g,tt),d(re,g,null),t(g,at),d(le,g,null),t(g,nt),d(oe,g,null),t(u,st),t(u,M),t(M,ie),t(M,rt),t(M,be),t(M,lt),d(pe,M,null),t(M,ot),d(de,M,null),Me=!0},p:qt,i(e){Me||(c(l.$$.fragment,e),c(x.$$.fragment,e),c(z.$$.fragment,e),c(W.$$.fragment,e),c(D.$$.fragment,e),c(N.$$.fragment,e),c(G.$$.fragment,e),c(J.$$.fragment,e),c(K.$$.fragment,e),c(Q.$$.fragment,e),c(X.$$.fragment,e),c(Z.$$.fragment,e),c(te.$$.fragment,e),c(ne.$$.fragment,e),c(se.$$.fragment,e),c(re.$$.fragment,e),c(le.$$.fragment,e),c(oe.$$.fragment,e),c(pe.$$.fragment,e),c(de.$$.fragment,e),Me=!0)},o(e){m(l.$$.fragment,e),m(x.$$.fragment,e),m(z.$$.fragment,e),m(W.$$.fragment,e),m(D.$$.fragment,e),m(N.$$.fragment,e),m(G.$$.fragment,e),m(J.$$.fragment,e),m(K.$$.fragment,e),m(Q.$$.fragment,e),m(X.$$.fragment,e),m(Z.$$.fragment,e),m(te.$$.fragment,e),m(ne.$$.fragment,e),m(se.$$.fragment,e),m(re.$$.fragment,e),m(le.$$.fragment,e),m(oe.$$.fragment,e),m(pe.$$.fragment,e),m(de.$$.fragment,e),Me=!1},d(e){e&&(h(L),h(P),h(o),h(Le),h(j),h(Te),h(u)),f(l,e),f(x,e),f(z),f(W),f(D),f(N),f(G),f(J),f(K),f(Q),f(X),f(Z),f(te),f(ne),f(se),f(re),f(le),f(oe),f(pe),f(de)}}}function At(me){let l,L;const x=[me[0],Ct];let P={$$slots:{default:[zt]},$$scope:{ctx:me}};for(let o=0;o<x.length;o+=1)P=pt(P,x[o]);return l=new Rt({props:P}),{c(){i(l.$$.fragment)},l(o){p(l.$$.fragment,o)},m(o,_){d(l,o,_),L=!0},p(o,[_]){const He=_&1?Bt(x,[_&1&&It(o[0]),_&0&&It(Ct)]):{};_&2&&(He.$$scope={dirty:_,ctx:o}),l.$set(He)},i(o){L||(c(l.$$.fragment,o),L=!0)},o(o){m(l.$$.fragment,o),L=!1},d(o){f(l,o)}}}const Ct={title:"Config",desc:"How to change the default configuration of daisyUI?",published:!0};function Wt(me,l,L){return me.$$set=x=>{L(0,l=pt(pt({},l),Lt(x)))},l=Lt(l),[l]}class Kt extends Pt{constructor(l){super(),jt(this,l,Wt,At,St,{})}}export{Kt as component};
