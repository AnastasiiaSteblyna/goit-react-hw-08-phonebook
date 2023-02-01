"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[844],{2625:function(n,e,r){r.d(e,{AV:function(){return a},XQ:function(){return t},Yq:function(){return l}});var i=r(6992),a=Object.freeze(["base","sm","md","lg","xl","2xl"]);function t(n,e){return Array.isArray(n)?n.map((function(n){return null===n?null:e(n)})):(0,i.Kn)(n)?Object.keys(n).reduce((function(r,i){return r[i]=e(n[i]),r}),{}):null!=n?e(n):null}function l(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:a,r={};return n.forEach((function(n,i){var a=e[i];null!=n&&(r[a]=n)})),r}},4224:function(n,e,r){r.d(e,{z:function(){return k}});var i=r(4925),a=r(1413),t=r(9439),l=r(2791);var o=(0,r(9886).k)({strict:!1,name:"ButtonGroupContext"}),s=(0,t.Z)(o,2),c=(s[0],s[1]),d=r(2952),u=r(6992),m=r(3329),f=["children","className"];function p(n){var e=n.children,r=n.className,t=(0,i.Z)(n,f),o=(0,l.isValidElement)(e)?(0,l.cloneElement)(e,{"aria-hidden":!0,focusable:!1}):e,s=(0,u.cx)("chakra-button__icon",r);return(0,m.jsx)(d.m.span,(0,a.Z)((0,a.Z)({display:"inline-flex",alignSelf:"center",flexShrink:0},t),{},{className:s,children:o}))}p.displayName="ButtonIcon";var v=r(4942),h=r(3204),g=["label","placement","spacing","children","className","__css"];function x(n){var e=n.label,r=n.placement,t=n.spacing,o=void 0===t?"0.5rem":t,s=n.children,c=void 0===s?(0,m.jsx)(h.$,{color:"currentColor",width:"1em",height:"1em"}):s,f=n.className,p=n.__css,x=(0,i.Z)(n,g),b=(0,u.cx)("chakra-button__spinner",f),Z="start"===r?"marginEnd":"marginStart",y=(0,l.useMemo)((function(){var n;return(0,a.Z)((n={display:"flex",alignItems:"center",position:e?"relative":"absolute"},(0,v.Z)(n,Z,e?o:0),(0,v.Z)(n,"fontSize","1em"),(0,v.Z)(n,"lineHeight","normal"),n),p)}),[p,e,Z,o]);return(0,m.jsx)(d.m.div,(0,a.Z)((0,a.Z)({className:b},x),{},{__css:y,children:c}))}x.displayName="ButtonSpinner";var b=r(4591),Z=r(7872),y=r(581),_=r(9477),N=["isDisabled","isLoading","isActive","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"],k=(0,Z.G)((function(n,e){var r=c(),o=(0,y.mq)("Button",(0,a.Z)((0,a.Z)({},r),n)),s=(0,_.Lr)(n),f=s.isDisabled,p=void 0===f?null==r?void 0:r.isDisabled:f,v=s.isLoading,h=s.isActive,g=s.children,Z=s.leftIcon,k=s.rightIcon,j=s.loadingText,q=s.iconSpacing,S=void 0===q?"0.5rem":q,B=s.type,C=s.spinner,R=s.spinnerPlacement,w=void 0===R?"start":R,F=s.className,P=s.as,T=(0,i.Z)(s,N),D=(0,l.useMemo)((function(){var n=(0,a.Z)((0,a.Z)({},null==o?void 0:o._focus),{},{zIndex:1});return(0,a.Z)((0,a.Z)({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none"},o),!!r&&{_focus:n})}),[o,r]),L=function(n){var e=(0,l.useState)(!n),r=(0,t.Z)(e,2),i=r[0],a=r[1];return{ref:(0,l.useCallback)((function(n){n&&a("BUTTON"===n.tagName)}),[]),type:i?"button":void 0}}(P),O=L.ref,W=L.type,E={rightIcon:k,leftIcon:Z,iconSpacing:S,children:g};return(0,m.jsxs)(d.m.button,(0,a.Z)((0,a.Z)({ref:(0,b.qq)(e,O),as:P,type:null!=B?B:W,"data-active":(0,u.PB)(h),"data-loading":(0,u.PB)(v),__css:D,className:(0,u.cx)("chakra-button",F)},T),{},{disabled:p||v,children:[v&&"start"===w&&(0,m.jsx)(x,{className:"chakra-button__spinner--start",label:j,placement:"start",spacing:S,children:C}),v?j||(0,m.jsx)(d.m.span,{opacity:0,children:(0,m.jsx)(I,(0,a.Z)({},E))}):(0,m.jsx)(I,(0,a.Z)({},E)),v&&"end"===w&&(0,m.jsx)(x,{className:"chakra-button__spinner--end",label:j,placement:"end",spacing:S,children:C})]}))}));function I(n){var e=n.leftIcon,r=n.rightIcon,i=n.children,a=n.iconSpacing;return(0,m.jsxs)(m.Fragment,{children:[e&&(0,m.jsx)(p,{marginEnd:a,children:e}),i,r&&(0,m.jsx)(p,{marginStart:a,children:r})]})}k.displayName="Button"},4585:function(n,e,r){r.d(e,{l:function(){return f}});var i=r(1413),a=r(4925),t=r(2701),l=r(7872),o=r(581),s=r(9477),c=r(2952),d=r(6992),u=r(3329),m=["className","children","requiredIndicator","optionalIndicator"],f=(0,l.G)((function(n,e){var r,l=(0,o.mq)("FormLabel",n),f=(0,s.Lr)(n),v=(f.className,f.children),h=f.requiredIndicator,g=void 0===h?(0,u.jsx)(p,{}):h,x=f.optionalIndicator,b=void 0===x?null:x,Z=(0,a.Z)(f,m),y=(0,t.NJ)(),_=null!=(r=null==y?void 0:y.getLabelProps(Z,e))?r:(0,i.Z)({ref:e},Z);return(0,u.jsxs)(c.m.label,(0,i.Z)((0,i.Z)({},_),{},{className:(0,d.cx)("chakra-form__label",f.className),__css:(0,i.Z)({display:"block",textAlign:"start"},l),children:[v,(null==y?void 0:y.isRequired)?g:b]}))}));f.displayName="FormLabel";var p=(0,l.G)((function(n,e){var r=(0,t.NJ)(),a=(0,t.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,d.cx)("chakra-form__required-indicator",n.className);return(0,u.jsx)(c.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(n,e)),{},{__css:a.requiredIndicator,className:l}))}));p.displayName="RequiredIndicator"},2701:function(n,e,r){r.d(e,{NI:function(){return I},NJ:function(){return k},e:function(){return Z}});var i=r(1413),a=r(4925),t=r(9439),l=r(9886),o=r(4591),s=r(7872),c=r(581),d=r(9477),u=r(2952),m=r(6992),f=r(2791),p=r(3329),v=["id","isRequired","isInvalid","isDisabled","isReadOnly"],h=["getRootProps","htmlProps"],g=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),x=(0,t.Z)(g,2),b=x[0],Z=x[1],y=(0,l.k)({strict:!1,name:"FormControlContext"}),_=(0,t.Z)(y,2),N=_[0],k=_[1];var I=(0,s.G)((function(n,e){var r=(0,c.jC)("Form",n),l=function(n){var e=n.id,r=n.isRequired,l=n.isInvalid,s=n.isDisabled,c=n.isReadOnly,d=(0,a.Z)(n,v),u=(0,f.useId)(),p=e||"field-".concat(u),h="".concat(p,"-label"),g="".concat(p,"-feedback"),x="".concat(p,"-helptext"),b=(0,f.useState)(!1),Z=(0,t.Z)(b,2),y=Z[0],_=Z[1],N=(0,f.useState)(!1),k=(0,t.Z)(N,2),I=k[0],j=k[1],q=(0,f.useState)(!1),S=(0,t.Z)(q,2),B=S[0],C=S[1],R=(0,f.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},n),{},{ref:(0,o.lq)(e,(function(n){n&&j(!0)}))})}),[x]),w=(0,f.useCallback)((function(){var n,e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},r),{},{ref:a,"data-focus":(0,m.PB)(B),"data-disabled":(0,m.PB)(s),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(c),id:null!=(n=r.id)?n:h,htmlFor:null!=(e=r.htmlFor)?e:p})}),[p,s,B,l,c,h]),F=(0,f.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:g},n),{},{ref:(0,o.lq)(e,(function(n){n&&_(!0)})),"aria-live":"polite"})}),[g]),P=(0,f.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},n),d),{},{ref:e,role:"group"})}),[d]),T=(0,f.useCallback)((function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},n),{},{ref:e,role:"presentation","aria-hidden":!0,children:n.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!c,isDisabled:!!s,isFocused:!!B,onFocus:function(){return C(!0)},onBlur:function(){return C(!1)},hasFeedbackText:y,setHasFeedbackText:_,hasHelpText:I,setHasHelpText:j,id:p,labelId:h,feedbackId:g,helpTextId:x,htmlProps:d,getHelpTextProps:R,getErrorMessageProps:F,getRootProps:P,getLabelProps:w,getRequiredIndicatorProps:T}}((0,d.Lr)(n)),s=l.getRootProps,g=(l.htmlProps,(0,a.Z)(l,h)),x=(0,m.cx)("chakra-form-control",n.className);return(0,p.jsx)(N,{value:g,children:(0,p.jsx)(b,{value:r,children:(0,p.jsx)(u.m.div,(0,i.Z)((0,i.Z)({},s({},e)),{},{className:x,__css:r.container}))})})}));I.displayName="FormControl",(0,s.G)((function(n,e){var r=k(),a=Z(),t=(0,m.cx)("chakra-form__helper-text",n.className);return(0,p.jsx)(u.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(n,e)),{},{__css:a.helperText,className:t}))})).displayName="FormHelperText"},7886:function(n,e,r){r.d(e,{I:function(){return h}});var i=r(1413),a=r(4925),t=r(2701),l=r(6992),o=["isDisabled","isInvalid","isReadOnly","isRequired"],s=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function c(n){var e=function(n){var e,r,o,c=(0,t.NJ)(),d=n.id,u=n.disabled,m=n.readOnly,f=n.required,p=n.isRequired,v=n.isInvalid,h=n.isReadOnly,g=n.isDisabled,x=n.onFocus,b=n.onBlur,Z=(0,a.Z)(n,s),y=n["aria-describedby"]?[n["aria-describedby"]]:[];(null==c?void 0:c.hasFeedbackText)&&(null==c?void 0:c.isInvalid)&&y.push(c.feedbackId);(null==c?void 0:c.hasHelpText)&&y.push(c.helpTextId);return(0,i.Z)((0,i.Z)({},Z),{},{"aria-describedby":y.join(" ")||void 0,id:null!=d?d:null==c?void 0:c.id,isDisabled:null!=(e=null!=u?u:g)?e:null==c?void 0:c.isDisabled,isReadOnly:null!=(r=null!=m?m:h)?r:null==c?void 0:c.isReadOnly,isRequired:null!=(o=null!=f?f:p)?o:null==c?void 0:c.isRequired,isInvalid:null!=v?v:null==c?void 0:c.isInvalid,onFocus:(0,l.v0)(null==c?void 0:c.onFocus,x),onBlur:(0,l.v0)(null==c?void 0:c.onBlur,b)})}(n),r=e.isDisabled,c=e.isInvalid,d=e.isReadOnly,u=e.isRequired,m=(0,a.Z)(e,o);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:d,required:u,"aria-invalid":(0,l.Qm)(c),"aria-required":(0,l.Qm)(u),"aria-readonly":(0,l.Qm)(d)})}var d=r(7872),u=r(581),m=r(9477),f=r(2952),p=r(3329),v=["htmlSize"],h=(0,d.G)((function(n,e){var r=n.htmlSize,t=(0,a.Z)(n,v),o=(0,u.jC)("Input",t),s=c((0,m.Lr)(t)),d=(0,l.cx)("chakra-input",n.className);return(0,p.jsx)(f.m.input,(0,i.Z)((0,i.Z)({size:r},s),{},{__css:o.field,ref:e,className:d}))}));h.displayName="Input",h.id="Input"},5946:function(n,e,r){r.d(e,{X:function(){return m}});var i=r(1413),a=r(4925),t=r(7872),l=r(581),o=r(9477),s=r(2952),c=r(6992),d=r(3329),u=["className"],m=(0,t.G)((function(n,e){var r=(0,l.mq)("Heading",n),t=(0,o.Lr)(n),m=(t.className,(0,a.Z)(t,u));return(0,d.jsx)(s.m.h2,(0,i.Z)((0,i.Z)({ref:e,className:(0,c.cx)("chakra-heading",n.className)},m),{},{__css:r}))}));m.displayName="Heading"},176:function(n,e,r){r.d(e,{k:function(){return c}});var i=r(1413),a=r(4925),t=r(7872),l=r(2952),o=r(3329),s=["direction","align","justify","wrap","basis","grow","shrink"],c=(0,t.G)((function(n,e){var r=n.direction,t=n.align,c=n.justify,d=n.wrap,u=n.basis,m=n.grow,f=n.shrink,p=(0,a.Z)(n,s),v={display:"flex",flexDirection:r,alignItems:t,justifyContent:c,flexWrap:d,flexBasis:u,flexGrow:m,flexShrink:f};return(0,o.jsx)(l.m.div,(0,i.Z)({ref:e,__css:v},p))}));c.displayName="Flex"},751:function(n,e,r){r.d(e,{K:function(){return h}});var i=r(4942),a=r(1413),t=r(4925),l=r(2952),o=r(3329),s=function(n){return(0,o.jsx)(l.m.div,(0,a.Z)((0,a.Z)({className:"chakra-stack__item"},n),{},{__css:(0,a.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},n.__css)}))};s.displayName="StackItem";var c=r(2625),d="& > *:not(style) ~ *:not(style)";var u=r(7872),m=r(6992),f=r(7200),p=r(2791),v=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],h=(0,u.G)((function(n,e){var r=n.isInline,u=n.direction,h=n.align,g=n.justify,x=n.spacing,b=void 0===x?"0.5rem":x,Z=n.wrap,y=n.children,_=n.divider,N=n.className,k=n.shouldWrapChildren,I=(0,t.Z)(n,v),j=r?"row":null!=u?u:"column",q=(0,p.useMemo)((function(){return function(n){var e=n.spacing,r=n.direction,a={column:{marginTop:e,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:e},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:e,marginStart:0},"row-reverse":{marginTop:0,marginEnd:e,marginBottom:0,marginStart:0}};return(0,i.Z)({flexDirection:r},d,(0,c.XQ)(r,(function(n){return a[n]})))}({direction:j,spacing:b})}),[j,b]),S=(0,p.useMemo)((function(){return function(n){var e=n.spacing,r=n.direction,i={column:{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:e,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:e,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(0,c.XQ)(r,(function(n){return i[n]}))}}({spacing:b,direction:j})}),[b,j]),B=!!_,C=!k&&!B,R=(0,p.useMemo)((function(){var n=(0,f.W)(y);return C?n:n.map((function(e,r){var i="undefined"!==typeof e.key?e.key:r,a=r+1===n.length,t=k?(0,o.jsx)(s,{children:e},i):e;if(!B)return t;var l=(0,p.cloneElement)(_,{__css:S}),c=a?null:l;return(0,o.jsxs)(p.Fragment,{children:[t,c]},i)}))}),[_,S,B,C,k,y]),w=(0,m.cx)("chakra-stack",N);return(0,o.jsx)(l.m.div,(0,a.Z)((0,a.Z)({ref:e,display:"flex",alignItems:h,justifyContent:g,flexDirection:q.flexDirection,flexWrap:Z,className:w,__css:B?{}:(0,i.Z)({},d,q[d])},I),{},{children:R}))}));h.displayName="Stack"},7200:function(n,e,r){r.d(e,{W:function(){return a}});var i=r(2791);function a(n){return i.Children.toArray(n).filter((function(n){return(0,i.isValidElement)(n)}))}},4591:function(n,e,r){r.d(e,{lq:function(){return t},qq:function(){return l}});var i=r(2791);function a(n,e){if(null!=n)if("function"!==typeof n)try{n.current=e}catch(r){throw new Error("Cannot assign value '".concat(e,"' to ref '").concat(n,"'"))}else n(e)}function t(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return function(n){e.forEach((function(e){a(e,n)}))}}function l(){for(var n=arguments.length,e=new Array(n),r=0;r<n;r++)e[r]=arguments[r];return(0,i.useMemo)((function(){return t.apply(void 0,e)}),e)}}}]);
//# sourceMappingURL=844.6af7e856.chunk.js.map