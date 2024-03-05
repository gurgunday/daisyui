import{s as Se,z as At,A as xe,e as o,a as n,c as l,g as s,d as r,i as u,j as a,n as ge,h as i}from"../chunks/scheduler.CmJ_ZkIC.js";import{S as ke,i as _e,c as Te,b as He,m as Me,t as Le,a as je,d as Pe}from"../chunks/index.BimWP6M-.js";import{g as ze,a as Ce}from"../chunks/spread.CgU5AtxT.js";import{M as Ue}from"../chunks/mdsvex-blog.DscfSesz.js";function Be(Z){let d,c='<a aria-hidden="true" tabindex="-1" href="#the-early-days"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>The early days',f,m,p="It was about 15 years ago when I first started getting into web development and from the beginning, CSS was my favorite part. I loved the ability to style the same content in different ways. I was amazed by the power of CSS and how it could change the whole look and feel of a website with a few lines of code.",h,y,$t="Back then there was no build tool and no CSS processing. People where writing inline CSS for small projects and if it was a lot of styles they would use a vanilla <code>.css</code> file.",tt,H,Nt="I was also using vanilla CSS. Starting from the top of the page, adding class names to elements and then writing the styles for those classes. It was a lot of fun and I was enjoying it. However as the projects got bigger and bigger, it used to go out of control and hard to maintain. At that time, No one was talking about CSS architecture and how to write maintainable CSS. So I was just doing my best to keep it clean and organized.",et,w,qt='<a aria-hidden="true" tabindex="-1" href="#experimenting-css-libraries"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>experimenting CSS libraries',at,M,Ft="As CSS evolved and people started to use it more and more, they realized that there are some common patterns that they use over and over again. So they started to create methods and libraries to make it easier to maintain CSS.",it,L,Jt=`Early CSS libraries started to show up.
Blueprint, 960.gs, YUI, Bootstrap, Foundation, etc.`,ot,j,Et='<li>Libraries like <a href="http://www.blueprintcss.org/" rel="nofollow" target="_blank">Blueprint</a> were providing default styles for HTML tags and also a few class names to set colors or positions for the elements. Nowadays we call them utility classes.</li> <li>Libraries like <a href="https://960.gs/" rel="nofollow" target="_blank">960.gs</a> were only providing a grid system to make it easier to create layouts.</li> <li>Libraries like <a href="https://getbootstrap.com/" rel="nofollow" target="_blank">Bootstrap</a> or <a href="https://yuilibrary.com/" rel="nofollow" target="_blank">YUI</a> were providing a set of components like buttons, tabs, etc.</li>',lt,P,Ot="These libraries got very popular and people started to use them more and more. However, I had a hard time customizing them. I was not able to change the look and feel of the components without overriding a lot of styles. I used each of them for a few projects but I was always looking for a better solution for my next project.",st,b,Wt='<a aria-hidden="true" tabindex="-1" href="#trying-to-fix-the-problem-with-css-design-methodologies"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Trying to fix the problem with CSS design methodologies',nt,z,Yt="I couldn’t find a CSS library that I could use for all my projects because I wanted a new design for each project. So instead of relying on a CSS library, I was writing vanilla CSS for each project but every time I was trying to make it more maintainable and easier to customize.",rt,U,Gt="There were CSS writing methodologies like OOCSS, ACSS, SMACSS and BEM to solve this problem but I was always finding myself jumping from one methodology to another or mixing them together. Some strict rules of these methodologies were not working for me and I was always trying to find a better way to write CSS.",dt,v,Dt='<a aria-hidden="true" tabindex="-1" href="#perfecting-the-style-with-css-preprocessors"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Perfecting the style with CSS preprocessors',pt,B,Kt='<a href="http://lesscss.org/" rel="nofollow" target="_blank">Less</a> and <a href="https://sass-lang.com/" rel="nofollow" target="_blank">Sass</a> were the first CSS preprocessors that I used. With them finally I was able to overengineer my CSS in order to make it more maintainable. I tried many structures to organize my CSS but at the end when projects got bigger, it was always hard to maintain.',ht,A,Qt="I was basically copy/pasting my Sass files from one project to another and then overriding them to change the colors and design details. I had some failed attempts to create a single Sass architecture that I could use for all my projects where each project could have its own design. But I was never able to make it work. It was too complicated to organize a multi-purpose CSS architecture to cover all my needs across all my projects.",ut,x,Rt='<a aria-hidden="true" tabindex="-1" href="#back-to-bootstrap-prison"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Back to Bootstrap prison',mt,$,Vt="Then I tried to build a customizable theme on top of Bootstrap where I could change the design details without overriding a lot of styles. That project didn’t go well either. It is so hard to time consuming to fight bootstrap’s default styles and make it look the way you want.",ft,C,Xt='<a aria-hidden="true" tabindex="-1" href="#tailwind-to-the-rescue"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Tailwind to the rescue',yt,N,Zt="Tailwind CSS got my attention when I saw it for the first time. It was a CSS framework that was not providing any default styles. It was only providing utility classes to make it easier to style your website. It was a great idea to make things easier to customize. I started using it on a few projects and I was happy with it.",ct,q,te="The idea of having utility classes for every CSS rule was great. Finally I had a fully customizable CSS framework that I could use for all my projects. I was able to use the same HTML for multiple projects and then change a few colors and design details to make it look different.",wt,I,ee='<a aria-hidden="true" tabindex="-1" href="#but-utility-only-was-slow-and-bloated"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>But utility-only was slow and bloated',bt,F,ae="However like everyone else, I was not happy with the amount of class names I had to use for every element on every page and on every project. At one point I was having my ideal class names for each component (Button, input, card, etc) and I was copying the exact same class names to every project. It was a lot of work and I was not happy with it.",vt,S,ie='<a aria-hidden="true" tabindex="-1" href="#utility-first-not-utility-only"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Utility-first, not utility-only',xt,J,oe="I needed a faster and easier way. All I needed to customize for a button was color, border-radius and size. I didn’t want to write all the class names for the button every time. I wanted to simply have a <code>.btn</code> class as easy as Bootstrap but with the ability to customize it.",Ct,E,le="I started to make a CSS file and put all my default styles in <code>@apply</code> directives. This way I could simply use a <code>btn</code> class and then customize it using <code>bg-*</code> utility class. It was a lot better. My Code became cleaner and I was able to develop my projects faster!",It,O,se="Now I had the power of customization using Tailwind CSS utility classes and the ease of use of Bootstrap. I was happy with it and I was using it for all my projects.",St,g,ne='<a aria-hidden="true" tabindex="-1" href="#birth-of-daisyui"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Birth of daisyUI',gt,W,re="I was using my <code>@apply</code> collection on all my projects and it was working great. I decided to publish it as a library so other people could use it too. I had to find a name for it. I was looking for a short name that could represent the idea of growth and prettiness. Finally I went with 🌼 daisyUI. It’s short, easy to remember and the name was available on NPM.",kt,Y,de="I started to work on it as a side project. I used Tailwind CSS’ plugin API to make it as easy as possible to use. For version 0.x I started with a few components and then I added more and more components to it. Finally it was ready to be used on real projects. With version 1.0, I got a lot of feedback from the community and I was able to improve it with every release. Every time I was adding a new component, I was trying to make it as customizable as possible. I was trying to make it easy to use and easy to customize.",_t,G,pe="I extended the Tailwind CSS color names to make all daisyUI components themeable by default. I wanted to make it as easy as possible to change the colors of the components because for me, personally it was important that websites made with daisyUI look different from each other. This was possible thanks to Tailwind CSS API and I was able to make it work. Now, daisyUI not only provides a set of components but also provides themes that apply colors to all components.",Tt,k,he='<a aria-hidden="true" tabindex="-1" href="#if-it-can-be-styled-with-css-only-it-should-be-styled-with-css-only"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>If it can be styled with CSS only, it should be styled with CSS only',Ht,D,ue="It’s important for me that daisyUI as a CSS component library doesn’t depend on any JavaScript library. I provided styles for the components that could be interactive using CSS-only but things like datepickers, etc. are not part of daisyUI. I wanted to keep it as simple as possible and let people use their favorite JavaScript libraries for the interactive components. Gladly there are a lot of headless JavaScript libraries out there and most of them are compatible with daisyUI. You can simply use daisyUI class names or color CSS variables to style them.",Mt,_,me='<a aria-hidden="true" tabindex="-1" href="#best-of-both-worlds"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Best of both worlds',Lt,K,fe="I’m happy with daisyUI and I’m using it for all my projects. It allows me to create a new design for each project and it makes it easy to customize the look and feel of the components.",jt,Q,ye="I see daisyUI as the best of both worlds. Component classes for speed and utility classes for customization.",Pt,R,ce="Now I have the customization power of Tailwind CSS and the development speed of Bootstrap. I have never been able to do this with any other CSS library. I’m glad that I was able to find a solution that works for me and I’m happy to share it with the community.",zt,T,we='<a aria-hidden="true" tabindex="-1" href="#thank-you"><span class="mr-1 opacity-20 hover:opacity-60 text-base font-bold inline-block align-middle relative -mt-1">#</span></a>Thank you!',Ut,V,be="I want to thank everyone who has used daisyUI and provided feedback. I’m glad that I was able to help you with your projects. I’m also thankful to everyone who has contributed to daisyUI and everyone who donated to support the project.",Bt,X,ve='There are currently 130 contributors on <a href="https://github.com/saadeghi/daisyui" rel="nofollow" target="_blank">GitHub</a> and 60 financial supporters on <a href="https://opencollective.com/daisyui" rel="nofollow" target="_blank">Open Collective</a>. daisyUI wouldn’t be possible without your support. Thank you all! 💚';return{c(){d=o("h2"),d.innerHTML=c,f=n(),m=o("p"),m.textContent=p,h=n(),y=o("p"),y.innerHTML=$t,tt=n(),H=o("p"),H.textContent=Nt,et=n(),w=o("h2"),w.innerHTML=qt,at=n(),M=o("p"),M.textContent=Ft,it=n(),L=o("p"),L.textContent=Jt,ot=n(),j=o("ul"),j.innerHTML=Et,lt=n(),P=o("p"),P.textContent=Ot,st=n(),b=o("h2"),b.innerHTML=Wt,nt=n(),z=o("p"),z.textContent=Yt,rt=n(),U=o("p"),U.textContent=Gt,dt=n(),v=o("h2"),v.innerHTML=Dt,pt=n(),B=o("p"),B.innerHTML=Kt,ht=n(),A=o("p"),A.textContent=Qt,ut=n(),x=o("h2"),x.innerHTML=Rt,mt=n(),$=o("p"),$.textContent=Vt,ft=n(),C=o("h2"),C.innerHTML=Xt,yt=n(),N=o("p"),N.textContent=Zt,ct=n(),q=o("p"),q.textContent=te,wt=n(),I=o("h2"),I.innerHTML=ee,bt=n(),F=o("p"),F.textContent=ae,vt=n(),S=o("h2"),S.innerHTML=ie,xt=n(),J=o("p"),J.innerHTML=oe,Ct=n(),E=o("p"),E.innerHTML=le,It=n(),O=o("p"),O.textContent=se,St=n(),g=o("h2"),g.innerHTML=ne,gt=n(),W=o("p"),W.innerHTML=re,kt=n(),Y=o("p"),Y.textContent=de,_t=n(),G=o("p"),G.textContent=pe,Tt=n(),k=o("h2"),k.innerHTML=he,Ht=n(),D=o("p"),D.textContent=ue,Mt=n(),_=o("h2"),_.innerHTML=me,Lt=n(),K=o("p"),K.textContent=fe,jt=n(),Q=o("p"),Q.textContent=ye,Pt=n(),R=o("p"),R.textContent=ce,zt=n(),T=o("h2"),T.innerHTML=we,Ut=n(),V=o("p"),V.textContent=be,Bt=n(),X=o("p"),X.innerHTML=ve,this.h()},l(t){d=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(d)!=="svelte-z0hgti"&&(d.innerHTML=c),f=r(t),m=l(t,"P",{"data-svelte-h":!0}),s(m)!=="svelte-d04wwk"&&(m.textContent=p),h=r(t),y=l(t,"P",{"data-svelte-h":!0}),s(y)!=="svelte-142x34h"&&(y.innerHTML=$t),tt=r(t),H=l(t,"P",{"data-svelte-h":!0}),s(H)!=="svelte-1gkknvi"&&(H.textContent=Nt),et=r(t),w=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(w)!=="svelte-1w6vp6m"&&(w.innerHTML=qt),at=r(t),M=l(t,"P",{"data-svelte-h":!0}),s(M)!=="svelte-1mo8l9"&&(M.textContent=Ft),it=r(t),L=l(t,"P",{"data-svelte-h":!0}),s(L)!=="svelte-152yc87"&&(L.textContent=Jt),ot=r(t),j=l(t,"UL",{"data-svelte-h":!0}),s(j)!=="svelte-mnd54q"&&(j.innerHTML=Et),lt=r(t),P=l(t,"P",{"data-svelte-h":!0}),s(P)!=="svelte-1roo3ni"&&(P.textContent=Ot),st=r(t),b=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(b)!=="svelte-16texei"&&(b.innerHTML=Wt),nt=r(t),z=l(t,"P",{"data-svelte-h":!0}),s(z)!=="svelte-1iong7x"&&(z.textContent=Yt),rt=r(t),U=l(t,"P",{"data-svelte-h":!0}),s(U)!=="svelte-1u0r2rz"&&(U.textContent=Gt),dt=r(t),v=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(v)!=="svelte-glayep"&&(v.innerHTML=Dt),pt=r(t),B=l(t,"P",{"data-svelte-h":!0}),s(B)!=="svelte-1vn0fgn"&&(B.innerHTML=Kt),ht=r(t),A=l(t,"P",{"data-svelte-h":!0}),s(A)!=="svelte-14q0w1i"&&(A.textContent=Qt),ut=r(t),x=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(x)!=="svelte-1x5k7eu"&&(x.innerHTML=Rt),mt=r(t),$=l(t,"P",{"data-svelte-h":!0}),s($)!=="svelte-1sd540a"&&($.textContent=Vt),ft=r(t),C=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(C)!=="svelte-n4vus0"&&(C.innerHTML=Xt),yt=r(t),N=l(t,"P",{"data-svelte-h":!0}),s(N)!=="svelte-fpxfvx"&&(N.textContent=Zt),ct=r(t),q=l(t,"P",{"data-svelte-h":!0}),s(q)!=="svelte-1yhbruf"&&(q.textContent=te),wt=r(t),I=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(I)!=="svelte-5g0ttp"&&(I.innerHTML=ee),bt=r(t),F=l(t,"P",{"data-svelte-h":!0}),s(F)!=="svelte-1wcq2pu"&&(F.textContent=ae),vt=r(t),S=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(S)!=="svelte-4yfzom"&&(S.innerHTML=ie),xt=r(t),J=l(t,"P",{"data-svelte-h":!0}),s(J)!=="svelte-1f68zs6"&&(J.innerHTML=oe),Ct=r(t),E=l(t,"P",{"data-svelte-h":!0}),s(E)!=="svelte-975s7x"&&(E.innerHTML=le),It=r(t),O=l(t,"P",{"data-svelte-h":!0}),s(O)!=="svelte-19w4735"&&(O.textContent=se),St=r(t),g=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(g)!=="svelte-1r5hah9"&&(g.innerHTML=ne),gt=r(t),W=l(t,"P",{"data-svelte-h":!0}),s(W)!=="svelte-1my4dso"&&(W.innerHTML=re),kt=r(t),Y=l(t,"P",{"data-svelte-h":!0}),s(Y)!=="svelte-1itsgih"&&(Y.textContent=de),_t=r(t),G=l(t,"P",{"data-svelte-h":!0}),s(G)!=="svelte-vjjvb"&&(G.textContent=pe),Tt=r(t),k=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(k)!=="svelte-11q77wd"&&(k.innerHTML=he),Ht=r(t),D=l(t,"P",{"data-svelte-h":!0}),s(D)!=="svelte-kir5fm"&&(D.textContent=ue),Mt=r(t),_=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(_)!=="svelte-18cfl68"&&(_.innerHTML=me),Lt=r(t),K=l(t,"P",{"data-svelte-h":!0}),s(K)!=="svelte-1wyofkb"&&(K.textContent=fe),jt=r(t),Q=l(t,"P",{"data-svelte-h":!0}),s(Q)!=="svelte-13nz838"&&(Q.textContent=ye),Pt=r(t),R=l(t,"P",{"data-svelte-h":!0}),s(R)!=="svelte-nceosp"&&(R.textContent=ce),zt=r(t),T=l(t,"H2",{id:!0,"data-svelte-h":!0}),s(T)!=="svelte-2mmsvj"&&(T.innerHTML=we),Ut=r(t),V=l(t,"P",{"data-svelte-h":!0}),s(V)!=="svelte-1j9hja1"&&(V.textContent=be),Bt=r(t),X=l(t,"P",{"data-svelte-h":!0}),s(X)!=="svelte-1a9jfu4"&&(X.innerHTML=ve),this.h()},h(){u(d,"id","the-early-days"),u(w,"id","experimenting-css-libraries"),u(b,"id","trying-to-fix-the-problem-with-css-design-methodologies"),u(v,"id","perfecting-the-style-with-css-preprocessors"),u(x,"id","back-to-bootstrap-prison"),u(C,"id","tailwind-to-the-rescue"),u(I,"id","but-utility-only-was-slow-and-bloated"),u(S,"id","utility-first-not-utility-only"),u(g,"id","birth-of-daisyui"),u(k,"id","if-it-can-be-styled-with-css-only-it-should-be-styled-with-css-only"),u(_,"id","best-of-both-worlds"),u(T,"id","thank-you")},m(t,e){a(t,d,e),a(t,f,e),a(t,m,e),a(t,h,e),a(t,y,e),a(t,tt,e),a(t,H,e),a(t,et,e),a(t,w,e),a(t,at,e),a(t,M,e),a(t,it,e),a(t,L,e),a(t,ot,e),a(t,j,e),a(t,lt,e),a(t,P,e),a(t,st,e),a(t,b,e),a(t,nt,e),a(t,z,e),a(t,rt,e),a(t,U,e),a(t,dt,e),a(t,v,e),a(t,pt,e),a(t,B,e),a(t,ht,e),a(t,A,e),a(t,ut,e),a(t,x,e),a(t,mt,e),a(t,$,e),a(t,ft,e),a(t,C,e),a(t,yt,e),a(t,N,e),a(t,ct,e),a(t,q,e),a(t,wt,e),a(t,I,e),a(t,bt,e),a(t,F,e),a(t,vt,e),a(t,S,e),a(t,xt,e),a(t,J,e),a(t,Ct,e),a(t,E,e),a(t,It,e),a(t,O,e),a(t,St,e),a(t,g,e),a(t,gt,e),a(t,W,e),a(t,kt,e),a(t,Y,e),a(t,_t,e),a(t,G,e),a(t,Tt,e),a(t,k,e),a(t,Ht,e),a(t,D,e),a(t,Mt,e),a(t,_,e),a(t,Lt,e),a(t,K,e),a(t,jt,e),a(t,Q,e),a(t,Pt,e),a(t,R,e),a(t,zt,e),a(t,T,e),a(t,Ut,e),a(t,V,e),a(t,Bt,e),a(t,X,e)},p:ge,d(t){t&&(i(d),i(f),i(m),i(h),i(y),i(tt),i(H),i(et),i(w),i(at),i(M),i(it),i(L),i(ot),i(j),i(lt),i(P),i(st),i(b),i(nt),i(z),i(rt),i(U),i(dt),i(v),i(pt),i(B),i(ht),i(A),i(ut),i(x),i(mt),i($),i(ft),i(C),i(yt),i(N),i(ct),i(q),i(wt),i(I),i(bt),i(F),i(vt),i(S),i(xt),i(J),i(Ct),i(E),i(It),i(O),i(St),i(g),i(gt),i(W),i(kt),i(Y),i(_t),i(G),i(Tt),i(k),i(Ht),i(D),i(Mt),i(_),i(Lt),i(K),i(jt),i(Q),i(Pt),i(R),i(zt),i(T),i(Ut),i(V),i(Bt),i(X))}}}function Ae(Z){let d,c;const f=[Z[0],Ie];let m={$$slots:{default:[Be]},$$scope:{ctx:Z}};for(let p=0;p<f.length;p+=1)m=At(m,f[p]);return d=new Ue({props:m}),{c(){Te(d.$$.fragment)},l(p){He(d.$$.fragment,p)},m(p,h){Me(d,p,h),c=!0},p(p,[h]){const y=h&1?ze(f,[h&1&&Ce(p[0]),h&0&&Ce(Ie)]):{};h&2&&(y.$$scope={dirty:h,ctx:p}),d.$set(y)},i(p){c||(Le(d.$$.fragment,p),c=!0)},o(p){je(d.$$.fragment,p),c=!1},d(p){Pe(d,p)}}}const Ie={title:"My Journey to build daisyUI: Why Tailwind CSS was not enough?",desc:"In search of the most efficient way to style a website there's a lot to explore. In this post I'll share my journey to build daisyUI, a component library on top of Tailwind CSS.",published:!0,date:"2023-10-4",author:"Pouya Saadeghi",thumbnail:"/images/blog/my-journey-to-build-daisyui.jpg",tags:["daisyUI","Component Library","Tailwind CSS"]};function $e(Z,d,c){return Z.$$set=f=>{c(0,d=At(At({},d),xe(f)))},d=xe(d),[d]}class Ee extends ke{constructor(d){super(),_e(this,d,$e,Ae,Se,{})}}export{Ee as component};
