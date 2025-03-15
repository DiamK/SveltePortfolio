import{t as f,a as u}from"../chunks/DifGyu_c.js";import"../chunks/BWlMvvYn.js";import{p as q,h as r,n as O,i as a,s as d,t as F,o as B,q as J,v as w,w as X,g as i,x as N}from"../chunks/ksq3ZuxP.js";import{s as U,e as v}from"../chunks/kIX-3iF6.js";import{p,i as L}from"../chunks/BalFaKrZ.js";import{e as W,i as Y,s as K}from"../chunks/C8ooaECA.js";import{i as P}from"../chunks/5KZ7JDFh.js";import{c as V,o as $}from"../chunks/B1GQpz9Q.js";import{s as j}from"../chunks/2jNbsYkj.js";import{b as c}from"../chunks/CdRXbGMK.js";var C=f('<img class="w-full h-full object-cover">'),Q=f('<a class="block h-full group"><article class="project-tile flex items-center gap-4 p-4 bg-[#0E374E] rounded-xl shadow-md border border-gray-700 hover:shadow-lg transition duration-300 h-full"><div class="flex flex-col items-center"><div class="relative w-16 h-16 rounded-lg bg-gray-800 overflow-hidden flex items-center justify-center"><!> <span class="absolute inset-0 bg-black opacity-20"></span></div> <span class="mt-2 text-xs text-white bg-gray-700 px-2 py-[2px] rounded-full whitespace-nowrap"> </span></div> <div class="flex flex-col flex-grow h-full"><h3 class="text-lg font-semibold text-white group-hover:text-gray-200 transition mt-2"> </h3> <p class="text-gray-400 text-sm flex-grow mt-1"> </p></div></article></a>');function Z(D,l){q(l,!1);let n=p(l,"title",8),k=p(l,"description",8),h=p(l,"category",8),y=p(l,"icon",8),b=p(l,"path",8);const m=V();function E(){m("hovered",n())}function x(){m("unhovered")}P();var s=Q(),o=r(s),e=r(o),t=r(e),g=r(t);{var S=z=>{var M=C();F(()=>{j(M,"src",y()),j(M,"alt",n())}),u(z,M)};L(g,z=>{y()&&z(S)})}O(2),a(t);var _=d(t,2),R=r(_,!0);a(_),a(e);var I=d(e,2),A=r(I),G=r(A,!0);a(A);var T=d(A,2),H=r(T,!0);a(T),a(I),a(o),a(s),F(()=>{j(s,"href",`${c}/projects/${b()}`),U(R,h()),U(G,n()),U(H,k())}),v("mouseenter",s,E),v("mouseleave",s,x),u(D,s),B()}var ee=f(`<div class="overlay"><div class="doors"><div class="door left"></div> <div class="door right"></div></div> <div class="overlay-text"><h1>Hi! I'm Diam</h1> <p>Welcome to my portfolio</p> <button class="enter-btn">Enter</button></div></div>`),te=f("<article><!></article>"),ae=f(`<!> <section class="max-w-12xl p-8 grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-12"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"></div> <aside class="self-start w-[90%] lg:w-[80%]"><h2 class="text-[#FFB84D] text-xl font-bold">About Me</h2> <br> <p>I am a 28-year-old UX Designer who recently graduated from The Hague University of Applied Sciences. <br> <br> I have a strong passion for understanding human behavior and designing intuitive experiences that truly meet users' needs. My approach is highly user-centered, combining psychology and data-driven insights to create solutions that are both functional and engaging.</p></aside></section>`,1);function me(D,l){q(l,!1);let n=X(null);const k=[{title:"Girl in Blue",description:"Animation of a 2D character in a 3D world",category:"Animation",icon:`${c}/images/gib_thumbnail.png`,path:"girl-in-blue"},{title:"Employee Journey",description:"Redesign of the job application process at Financieelsysteem, improving UX through team-matching and a streamlined hiring flow",category:"UX Design",icon:`${c}/images/ej.png`,path:"employee-journey"},{title:"Recharge the World",description:"Marketing campaign to incentivise recycling batteries",category:"Graphic Design",icon:`${c}/images/rtw_thumbnail.png`,path:"recharge-the-world"},{title:"Edge of Night",description:"Kinetic typography animation of the song Edge of Night from The Lord of the Rings",category:"Animation",icon:`${c}/images/eon_thumbnail2.png`,path:"edge-of-night"},{title:"Finish the Jam",description:"Sing along until the traffic is gone!",category:"UX Design",icon:`${c}/images/ftj_thumbnail.png`,path:"finish-the-jam"},{title:"Puzzlewalk",description:"Designing an app to help the elderly with sPAV walk more",category:"UX Design",icon:`${c}/images/puzzle_thumbnail.jpg`,path:"puzzlewalk"},{title:"Fireball animation",description:"Learning fire and smoke animation in Blender",category:"Animation",icon:`${c}/images/fireball_thumbnail.png`,path:"fireball-animation"}];let h=X(!0);function y(){const o=document.querySelector(".door.left"),e=document.querySelector(".door.right");o&&e&&(o.style.transform="rotateY(-90deg)",e.style.transform="rotateY(90deg)"),setTimeout(()=>{w(h,!1),localStorage.setItem("hasSeenOverlay","true")},1500)}$(()=>{localStorage.getItem("hasSeenOverlay")==="true"&&w(h,!1)}),P();var b=ae(),m=J(b);{var E=o=>{var e=ee(),t=d(r(e),2),g=d(r(t),4);a(t),a(e),v("click",g,y),u(o,e)};L(m,o=>{i(h)&&o(E)})}var x=d(m,2),s=r(x);W(s,5,()=>k,Y,(o,e)=>{var t=te();let g;var S=r(t);Z(S,{get title(){return i(e).title},get description(){return i(e).description},get category(){return i(e).category},get icon(){return i(e).icon},get path(){return i(e).path}}),a(t),F(_=>g=K(t,1,"transition duration-300 ease-in-out transform min-h-[150px] flex flex-col",null,g,_),[()=>({"blur-[1px]":i(n)!==null&&i(n)!==i(e).title,"scale-105":i(n)===i(e).title})],N),v("mouseenter",t,()=>w(n,i(e).title)),v("mouseleave",t,()=>w(n,null)),u(o,t)}),a(s),O(2),a(x),u(D,b),B()}export{me as component};
