import b from"./Input.de56288e.js";import h from"./Button.a2368cc5.js";import{d as x,x as v,l as S,r as F,a3 as w,b as l,c as u,e as d,F as B,Z as C,M as s,g as R,w as T,D as V,t as k,X as E,k as j}from"./entry.c1d344c3.js";const M=["action"],N={class:"inputs"},O=x({__name:"ContactForm",props:{submitButtonText:{type:String,default:"Send message"},fields:{type:Array,default:()=>[{type:"text",model:"name",name:"Name",placeholder:"Your name",required:!0,layout:"default"},{type:"email",model:"email",name:"Email",placeholder:"Your email",required:!0,layout:"default"},{type:"text",model:"text",name:"Subject",required:!1,layout:"default"},{type:"textarea",model:"message",name:"Message",placeholder:"Your message",required:!0,layout:"big"}]}},setup(c){const i=c,p=v().alpine,{FORMSPREE_URL:n}=S().public;n||console.warn("No FORMSPREE_URL provided");const t=F(),_=w(i.fields.map(e=>({...e,data:""}))),f=async e=>{e.preventDefault();const m=new FormData(e.target);t.value="Sending...",fetch(e.target.action,{method:e.target.method,body:m,headers:{Accept:"application/json"}}).then(r=>{r.ok?(t.value=p.form.successMessage,e.target.reset()):r.json().then(a=>{Object.hasOwn(a,"errors")?(t.value=a.errors[0].message,console.error(a.errors.map(o=>o.message).join(", ")),setTimeout(()=>{t.value="Send message"},2e3)):console.error("There was a problem submitting your form")})}).catch(()=>{console.error("There was a problem submitting your form")})};return(e,m)=>{const r=b,a=h;return l(),u("form",{class:"contact-form",method:"POST",action:s(n),onSubmit:f},[d("div",N,[(l(!0),u(B,null,C(s(_),(o,g)=>(l(),E(r,{key:g,modelValue:o.data,"onUpdate:modelValue":y=>o.data=y,field:o},null,8,["modelValue","onUpdate:modelValue","field"]))),128))]),d("div",null,[R(a,{type:"submit",disabled:!s(n)},{default:T(()=>[V(k(s(t)?s(t):c.submitButtonText),1)]),_:1},8,["disabled"])])],40,M)}}});const A=j(O,[["__scopeId","data-v-0b8fa48c"]]);export{A as default};
