"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[712],{8712:function(n,e,t){t.r(e),t.d(e,{default:function(){return h}});var a=t(7689),i=t(5048),r=t(9439),c=(t(2791),t(1087)),s=t(4087),o=t(176),l=t(9229),u=t(4224),d=t(4500),f=t(6306),p=t(3329),m=function(){var n=(0,i.v9)(d.vW),e=(0,f.Zn)(),t=(0,r.Z)(e,1)[0];return(0,p.jsx)(s.xu,{bg:"blackAlpha.100",px:4,children:(0,p.jsxs)(o.k,{h:16,alignItems:"center",justifyContent:"space-between",children:[(0,p.jsx)(c.OL,{to:"contacts",children:(0,p.jsxs)(l.x,{ml:2,textTransform:"uppercase",fontSize:"sm",fontWeight:"bold",color:"blackAlpha.800",children:[n,", it is your contacts"]})}),(0,p.jsx)(u.z,{color:"blackAlpha.700",type:"button",onClick:function(){t()},children:"Log out"})]})})},h=function(){var n=(0,i.v9)(d.Vp);return(0,p.jsxs)(p.Fragment,{children:[n&&(0,p.jsx)(m,{}),(0,p.jsx)(a.j3,{})]})}},4224:function(n,e,t){t.d(e,{z:function(){return k}});var a=t(4925),i=t(1413),r=t(9439),c=t(2791);var s=(0,t(9886).k)({strict:!1,name:"ButtonGroupContext"}),o=(0,r.Z)(s,2),l=(o[0],o[1]),u=t(2952),d=t(6992),f=t(3329),p=["children","className"];function m(n){var e=n.children,t=n.className,r=(0,a.Z)(n,p),s=(0,c.isValidElement)(e)?(0,c.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,o=(0,d.cx)("chakra-button__icon",t);return(0,f.jsx)(u.m.span,(0,i.Z)((0,i.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},r),{},{className:o,children:s}))}m.displayName="ButtonIcon";var h=t(4942),x=t(3204),g=["label","placement","spacing","children","className","__css"];function v(n){var e=n.label,t=n.placement,r=n.spacing,s=void 0===r?"0.5rem":r,o=n.children,l=void 0===o?(0,f.jsx)(x.$,{color:"currentColor",width:"1em",height:"1em"}):o,p=n.className,m=n.__css,v=(0,a.Z)(n,g),b=(0,d.cx)("chakra-button__spinner",p),Z="start"===t?"marginEnd":"marginStart",_=(0,c.useMemo)((function(){var n;return(0,i.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,h.Z)(n,Z,e?s:0),(0,h.Z)(n,"fontSize","1em"),(0,h.Z)(n,"lineHeight","normal"),n),m)}),[m,e,Z,s]);return(0,f.jsx)(u.m.div,(0,i.Z)((0,i.Z)({className:b},v),{},{__css:_,children:l}))}v.displayName="ButtonSpinner";var b=t(4591),Z=t(7872),_=t(581),j=t(9477),y=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],k=(0,Z.G)((function(n,e){var t=l(),s=(0,_.mq)("Button",(0,i.Z)((0,i.Z)({},t),n)),o=(0,j.Lr)(n),p=o.isDisabled,m=void 0===p?null==t?void 0:t.isDisabled:p,h=o.isLoading,x=o.isActive,g=o.children,Z=o.leftIcon,k=o.rightIcon,w=o.loadingText,S=o.iconSpacing,I=void 0===S?"0.5rem":S,A=o.type,C=o.spinner,B=o.spinnerPlacement,T=void 0===B?"start":B,q=o.className,E=o.as,L=(0,a.Z)(o,y),z=(0,c.useMemo)((function(){var n=(0,i.Z)((0,i.Z)({},null==s?void 0:s._focus),{},{zIndex:1});return(0,i.Z)((0,i.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},s),!!t&&{_focus:n})}),[s,t]),D=function(n){var e=(0,c.useState)(!n),t=(0,r.Z)(e,2),a=t[0],i=t[1];return{ref:(0,c.useCallback)((function(n){n&&i("BUTTON"===n.tagName)}),[]),type:a?"button":void 0}}(E),G=D.ref,P=D.type,F={rightIcon:k,leftIcon:Z,iconSpacing:I,children:g};return(0,f.jsxs)(u.m.button,(0,i.Z)((0,i.Z)({ref:(0,b.qq)(e,G),as:E,type:null!=A?A:P,"data-active":(0,d.PB)(x),"data-loading":(0,d.PB)(h),__css:z,className:(0,d.cx)("chakra-button",q)},L),{},{disabled:m||h,children:[h&&"start"===T&&(0,f.jsx)(v,{className:"chakra-button__spinner--start",label:w,placement:"start",spacing:I,children:C}),h?w||(0,f.jsx)(u.m.span,{opacity:0,children:(0,f.jsx)(N,(0,i.Z)({},F))}):(0,f.jsx)(N,(0,i.Z)({},F)),h&&"end"===T&&(0,f.jsx)(v,{className:"chakra-button__spinner--end",label:w,placement:"end",spacing:I,children:C})]}))}));function N(n){var e=n.leftIcon,t=n.rightIcon,a=n.children,i=n.iconSpacing;return(0,f.jsxs)(f.Fragment,{children:[e&&(0,f.jsx)(m,{marginEnd:i,children:e}),a,t&&(0,f.jsx)(m,{marginStart:i,children:t})]})}k.displayName="Button"},176:function(n,e,t){t.d(e,{k:function(){return l}});var a=t(1413),i=t(4925),r=t(7872),c=t(2952),s=t(3329),o=["direction","align","justify","wrap","basis","grow","shrink"],l=(0,r.G)((function(n,e){var t=n.direction,r=n.align,l=n.justify,u=n.wrap,d=n.basis,f=n.grow,p=n.shrink,m=(0,i.Z)(n,o),h={display:"flex",flexDirection:t,alignItems:r,justifyContent:l,flexWrap:u,flexBasis:d,flexGrow:f,flexShrink:p};return(0,s.jsx)(c.m.div,(0,a.Z)({ref:e,__css:h},m))}));l.displayName="Flex"},9229:function(n,e,t){t.d(e,{x:function(){return p}});var a=t(1413),i=t(4925),r=t(7872),c=t(581),s=t(9477),o=t(2952),l=t(6992),u=t(5246),d=t(3329),f=["className","align","decoration","casing"],p=(0,r.G)((function(n,e){var t=(0,c.mq)("Text",n),r=(0,s.Lr)(n),p=(r.className,r.align,r.decoration,r.casing,(0,i.Z)(r,f)),m=(0,u.oA)({textAlign:n.align,textDecoration:n.decoration,textTransform:n.casing});return(0,d.jsx)(o.m.p,(0,a.Z)((0,a.Z)((0,a.Z)({ref:e,className:(0,l.cx)("chakra-text",n.className)},m),p),{},{__css:t}))}));p.displayName="Text"},4591:function(n,e,t){t.d(e,{lq:function(){return r},qq:function(){return c}});var a=t(2791);function i(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(t){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}function r(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return function(n){e.forEach((function(e){i(e,n)}))}}function c(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];return(0,a.useMemo)((function(){return r.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=712.c862d38e.chunk.js.map