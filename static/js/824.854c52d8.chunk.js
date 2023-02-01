"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[824],{824:function(e,n,t){function a(e,n,t,a,i,r,s){try{var l=e[r](s),o=l.value}catch(c){return void t(c)}l.done?n(o):Promise.resolve(o).then(a,i)}t.r(n),t.d(n,{default:function(){return B}});var i=t(9439),r=t(4687),s=t.n(r),l=t(2791),o=t(1087),c=t(7689),u=t(6306),d=t(1413),p=t(4925),h=t(9886),m=t(7200),f=t(7872),x=t(581),g=t(9477),v=t(2952),j=t(6992),b=t(5246),k=t(3329),y=["children","className"],_=(0,h.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),w=(0,i.Z)(_,2),N=w[0],Z=w[1],I=(0,f.G)((function(e,n){var t=(0,x.jC)("Input",e),a=(0,g.Lr)(e),i=a.children,r=a.className,s=(0,p.Z)(a,y),o=(0,j.cx)("chakra-input__group",r),c={},u=(0,m.W)(i),h=t.field;u.forEach((function(e){var n,a;t&&(h&&"InputLeftElement"===e.type.id&&(c.paddingStart=null!=(n=h.height)?n:h.h),h&&"InputRightElement"===e.type.id&&(c.paddingEnd=null!=(a=h.height)?a:h.h),"InputRightAddon"===e.type.id&&(c.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(c.borderStartRadius=0))}));var f=u.map((function(n){var t,a,i=(0,b.oA)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(a=n.props)?void 0:a.variant)||e.variant});return"Input"!==n.type.id?(0,l.cloneElement)(n,i):(0,l.cloneElement)(n,Object.assign(i,c,n.props))}));return(0,k.jsx)(v.m.div,(0,d.Z)((0,d.Z)({className:o,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate"}},s),{},{children:(0,k.jsx)(N,{value:t,children:f})}))}));I.displayName="InputGroup";var S=t(4942),E=["placement"],z=["className"],L=["className"],A=(0,v.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),G=(0,f.G)((function(e,n){var t,a,i,r=e.placement,s=void 0===r?"left":r,l=(0,p.Z)(e,E),o=Z(),c=o.field,u="left"===s?"insetStart":"insetEnd",h=(0,d.Z)((t={},(0,S.Z)(t,u,"0"),(0,S.Z)(t,"width",null!=(a=null==c?void 0:c.height)?a:null==c?void 0:c.h),(0,S.Z)(t,"height",null!=(i=null==c?void 0:c.height)?i:null==c?void 0:c.h),(0,S.Z)(t,"fontSize",null==c?void 0:c.fontSize),t),o.element);return(0,k.jsx)(A,(0,d.Z)({ref:n,__css:h},l))}));G.id="InputElement",G.displayName="InputElement";var C=(0,f.G)((function(e,n){var t=e.className,a=(0,p.Z)(e,z),i=(0,j.cx)("chakra-input__left-element",t);return(0,k.jsx)(G,(0,d.Z)({ref:n,placement:"left",className:i},a))}));C.id="InputLeftElement",C.displayName="InputLeftElement";var R=(0,f.G)((function(e,n){var t=e.className,a=(0,p.Z)(e,L),i=(0,j.cx)("chakra-input__right-element",t);return(0,k.jsx)(G,(0,d.Z)({ref:n,placement:"right",className:i},a))}));R.id="InputRightElement",R.displayName="InputRightElement";var T=["className","isExternal"],q=(0,f.G)((function(e,n){var t=(0,x.mq)("Link",e),a=(0,g.Lr)(e),i=a.className,r=a.isExternal,s=(0,p.Z)(a,T);return(0,k.jsx)(v.m.a,(0,d.Z)((0,d.Z)({target:r?"_blank":void 0,rel:r?"noopener":void 0,ref:n,className:(0,j.cx)("chakra-link",i)},s),{},{__css:t}))}));q.displayName="Link";var K=t(176),P=t(751),D=t(5946),H=t(4087),O=t(2701),W=t(4585),F=t(7886),M=t(4224),X=t(9229),$=t(3023),B=function(){var e=(0,l.useState)(""),n=(0,i.Z)(e,2),t=n[0],r=n[1],d=(0,l.useState)(""),p=(0,i.Z)(d,2),h=p[0],m=p[1],f=(0,l.useState)(""),x=(0,i.Z)(f,2),g=x[0],v=x[1],j=(0,u.ZD)(),b=(0,i.Z)(j,2),y=b[0],_=b[1].isSuccess,w=function(e){var n=e.currentTarget,t=n.name,a=n.value;switch(t){case"name":r(a);break;case"email":m(a);break;case"password":v(a);break;default:return}},N=function(){var e,n=(e=s().mark((function e(n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,y({name:t,email:h,password:g});case 3:r(""),m(""),v("");case 6:case"end":return e.stop()}}),e)})),function(){var n=this,t=arguments;return new Promise((function(i,r){var s=e.apply(n,t);function l(e){a(s,i,r,l,o,"next",e)}function o(e){a(s,i,r,l,o,"throw",e)}l(void 0)}))});return function(e){return n.apply(this,arguments)}}(),Z=(0,c.s0)(),S=(0,c.TH)();return(0,k.jsxs)(K.k,{minH:"100vh",align:"center",justify:"center",backgroundImage:"url(".concat($,")"),backgroundSize:"cover",backgroundPosition:"center center",children:[_&&(0,k.jsx)(c.Fg,{to:"/contacts",replace:!0}),(0,k.jsxs)(P.K,{spacing:5,mx:"auto",maxW:"lg",py:12,px:6,children:[(0,k.jsx)(P.K,{align:"center",children:(0,k.jsx)(D.X,{fontSize:"4xl",textAlign:"center",color:"blackAlpha.700",children:"Sign up"})}),(0,k.jsx)(H.xu,{as:"form",rounded:"lg",bg:"blackAlpha.400",boxShadow:"lg",onSubmit:N,p:8,children:(0,k.jsxs)(P.K,{spacing:4,children:[(0,k.jsxs)(O.NI,{id:"firstName",isRequired:!0,children:[(0,k.jsx)(W.l,{color:"white",children:"Name"}),(0,k.jsx)(F.I,{type:"text",value:t,name:"name",onChange:w,color:"white"})]}),(0,k.jsxs)(O.NI,{id:"email",isRequired:!0,children:[(0,k.jsx)(W.l,{color:"white",children:"Email address"}),(0,k.jsx)(F.I,{pattern:"^([a-z0-9_-]+\\.)*[a-z0-9_-]+@[a-z0-9_-]+(\\.[a-z0-9_-]+)*\\.[a-z]{2,6}$",onChange:w,type:"email",value:h,name:"email",color:"white"})]}),(0,k.jsxs)(O.NI,{id:"password",isRequired:!0,children:[(0,k.jsx)(W.l,{color:"white",children:"Password"}),(0,k.jsxs)(I,{children:[(0,k.jsx)(F.I,{onChange:w,type:"password",value:g,minLength:7,name:"password",color:"white"}),(0,k.jsx)(R,{h:"full"})]})]}),(0,k.jsxs)(P.K,{spacing:5,pt:2,children:[(0,k.jsx)(M.z,{type:"submit",loadingText:"Submitting",bg:"blackAlpha.600",color:"white",_hover:{bg:"blackAlpha.400"},children:"Sign up"}),(0,k.jsx)(M.z,{type:"button",onClick:function(){var e;Z((null===S||void 0===S||null===(e=S.state)||void 0===e?void 0:e.from)||"/")},children:"Go back"})]}),(0,k.jsx)(P.K,{pt:4,children:(0,k.jsxs)(X.x,{align:"center",children:["Already a user?"," ",(0,k.jsx)(q,{color:"white",as:o.OL,to:"/login",children:"Login"})]})})]})})]})]})}},3023:function(e,n,t){e.exports=t.p+"static/media/bg.1759720a9e16b36b9f09.jpg"},9229:function(e,n,t){t.d(n,{x:function(){return h}});var a=t(1413),i=t(4925),r=t(7872),s=t(581),l=t(9477),o=t(2952),c=t(6992),u=t(5246),d=t(3329),p=["className","align","decoration","casing"],h=(0,r.G)((function(e,n){var t=(0,s.mq)("Text",e),r=(0,l.Lr)(e),h=(r.className,r.align,r.decoration,r.casing,(0,i.Z)(r,p)),m=(0,u.oA)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,d.jsx)(o.m.p,(0,a.Z)((0,a.Z)((0,a.Z)({ref:n,className:(0,c.cx)("chakra-text",e.className)},m),h),{},{__css:t}))}));h.displayName="Text"}}]);
//# sourceMappingURL=824.854c52d8.chunk.js.map