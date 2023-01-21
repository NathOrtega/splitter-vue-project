(function(){"use strict";var e={1599:function(e,t,n){var l=n(9242),o=n(3396),a=n.p+"img/SPLITTER.31de1265.svg";const u={class:"container"};function r(e,t,n,l,a,r){return(0,o.wg)(),(0,o.iD)("div",u,[(0,o.WI)(e.$slots,"default",{},void 0,!0)])}var i={name:"v-content"},s=n(89);const c=(0,s.Z)(i,[["render",r],["__scopeId","data-v-1eb072e5"]]);var d=c,p=n(4870),v={props:{width:String,height:String,padding:String,backgroundColor:String},setup(e){const t=e,{width:n,height:l,padding:a,backgroundColor:u}=(0,p.BK)(t),r={width:n.value,height:l.value,padding:a.value,backgroundColor:u.value};return(e,t)=>((0,o.wg)(),(0,o.iD)("header",{style:r},[(0,o.WI)(e.$slots,"default")]))}};const m=(0,s.Z)(v,[["__scopeId","data-v-577ccc24"]]);var g=m,f=n(7139);const S={class:"inputContainer"},b={class:"inputHeader"},_=["for"],h=["for"],w=["src"],P=["id","placeholder","value"];var U={props:{customLabel:String,iconPath:String,placeholder:String,id:String,modelValue:String},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,{customLabel:a,iconPath:u,placeholder:r,id:i,modelValue:s}=(0,p.BK)(n);return(e,n)=>((0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("div",b,[(0,p.SU)(a)?((0,o.wg)(),(0,o.iD)("label",{key:0,for:(0,p.SU)(i)},(0,f.zw)((0,p.SU)(a)),9,_)):(0,o.kq)("",!0),(0,o.wy)((0,o._)("span",{class:"warning"}," Can't be "+(0,f.zw)(0==(0,p.SU)(s)?"zero":"negative"),513),[[l.F8,(0,p.SU)(s)<0||0==(0,p.SU)(s)]])]),(0,o._)("div",{class:"customInput",style:(0,f.j5)((0,p.SU)(s)<0||0==(0,p.SU)(s)?"border: 2px solid #e17457":"none")},[(0,p.SU)(u)?((0,o.wg)(),(0,o.iD)("label",{key:0,for:(0,p.SU)(i)},[(0,o._)("img",{src:(0,p.SU)(u)},null,8,w)],8,h)):(0,o.kq)("",!0),(0,o._)("input",{id:(0,p.SU)(i),type:"number",placeholder:(0,p.SU)(r),value:(0,p.SU)(s),onInput:n[0]||(n[0]=e=>t("update:modelValue",e.target.value))},null,40,P)],4)]))}};const y=(0,s.Z)(U,[["__scopeId","data-v-be7641b8"]]);var I=y;const V={class:"lineItem"},k={class:"concept"},C={class:"conceptName"},D={class:"conceptDivisor"},O={class:"quantity"};var W={props:{conceptName:String,divisor:String,quantity:Number},setup(e){const t=e,{conceptName:n,divisor:l,quantity:a}=(0,p.BK)(t),u=(0,o.Fl)((()=>"$ "+parseFloat(a.value).toFixed(2))),r=(0,o.Fl)((()=>`/ ${l.value}`));return(e,t)=>((0,o.wg)(),(0,o.iD)("div",V,[(0,o._)("span",k,[(0,o._)("p",C,(0,f.zw)((0,p.SU)(n)),1),(0,o._)("p",D,(0,f.zw)((0,p.SU)(r)),1)]),(0,o._)("span",O,(0,f.zw)((0,p.SU)(u)),1)]))}};const T=(0,s.Z)(W,[["__scopeId","data-v-57b7e5a0"]]);var j=T;const q={class:"resultCard"},x={class:"lineItemsContainer"},H=["disabled"];var N={props:{totalPerPerson:Number,tipPerPerson:Number},emits:["reset"],setup(e,{emit:t}){const n=e,{totalPerPerson:l,tipPerPerson:a}=(0,p.BK)(n);return(e,n)=>((0,o.wg)(),(0,o.iD)("div",q,[(0,o._)("div",x,[(0,o.Wm)(j,{conceptName:"Tip Amount",divisor:"person",quantity:(0,p.SU)(a)},null,8,["quantity"]),(0,o.Wm)(j,{conceptName:"Total",divisor:"person",quantity:(0,p.SU)(l)},null,8,["quantity"])]),(0,o._)("button",{type:"reset",class:(0,f.C_)({disabled:!(0,p.SU)(l)&&!(0,p.SU)(a)}),disabled:!(0,p.SU)(l)&&!(0,p.SU)(a),onClick:n[0]||(n[0]=e=>t("reset"))}," RESET ",10,H)]))}};const B=(0,s.Z)(N,[["__scopeId","data-v-8649554e"]]);var Z=B;const z=["onClick"];var F={props:{tipPercentage:String,onToggle:Function,isSelected:Boolean},setup(e){const t=e,{tipPercentage:n,isSelected:a,onToggle:u}=(0,p.BK)(t),r=()=>{u.value(n)};return(e,t)=>((0,o.wg)(),(0,o.iD)("button",{onClick:(0,l.iM)(r,["prevent"]),class:(0,f.C_)({selected:(0,p.SU)(a)})},(0,f.zw)((0,p.SU)(n)+"%"),11,z))}};const K=(0,s.Z)(F,[["__scopeId","data-v-e5aba2a2"]]);var L=K;const E=e=>((0,o.dD)("data-v-47c85057"),e=e(),(0,o.Cn)(),e),$={class:"tipSelector"},R=E((()=>(0,o._)("h2",{class:"title"},"Select Tip %",-1))),M={class:"options"},Y=["value"];var A={props:{modelValue:String},emits:["update:modelValue"],setup(e,{emit:t}){const n=e,{modelValue:l}=(0,p.BK)(n),a=["5","10","15","25","50"],u=(0,p.iH)(null),r=e=>{u.value=e,t("update:modelValue",e)},i=e=>{e.value===l.value?t("update:modelValue",null):(t("update:modelValue",e.value),u.value=null)};return(e,t)=>((0,o.wg)(),(0,o.iD)("div",$,[R,(0,o._)("div",M,[((0,o.wg)(),(0,o.iD)(o.HY,null,(0,o.Ko)(a,((e,t)=>(0,o.Wm)(L,{tipPercentage:e,key:t,onToggle:i,isSelected:e===(0,p.SU)(l)},null,8,["tipPercentage","isSelected"]))),64)),(0,o._)("input",{type:"number",placeholder:"Custom",value:null===(0,p.SU)(l)?null:u.value,onInput:t[0]||(t[0]=e=>r(e.target.value)),style:(0,f.j5)((0,p.SU)(l)<0?"border: 2px solid #e17457":"none")},null,44,Y)])]))}};const G=(0,s.Z)(A,[["__scopeId","data-v-47c85057"]]);var J=G,Q={setup(e){const t=(0,p.iH)(null),l=(0,p.iH)(null),a=(0,p.iH)(null),u=(0,p.iH)(0),r=(0,p.iH)(0);(0,o.m0)((()=>{const e=t.value/a.value+r.value;u.value=e!==1/0&&e!==-1/0&&e?e:0})),(0,o.m0)((()=>{const e=t.value*l.value/100/a.value;r.value=e===1/0||e===-1/0||!e||e<0?0:e}));const i=()=>{t.value=null,l.value=null,a.value=null,u.value=0,r.value=0};return(e,s)=>((0,o.wg)(),(0,o.iD)("form",null,[(0,o._)("div",null,[(0,o.Wm)(I,{customLabel:"Bill",id:"billInput",iconPath:n(1914),placeholder:"0",modelValue:t.value,"onUpdate:modelValue":s[0]||(s[0]=e=>t.value=e)},null,8,["iconPath","modelValue"]),(0,o.Wm)(J,{modelValue:l.value,"onUpdate:modelValue":s[1]||(s[1]=e=>l.value=e)},null,8,["modelValue"]),(0,o.Wm)(I,{customLabel:"Number of People",id:"numberOfPeopleInput",iconPath:n(4221),placeholder:"0",modelValue:a.value,"onUpdate:modelValue":s[2]||(s[2]=e=>a.value=e)},null,8,["iconPath","modelValue"])]),(0,o.Wm)(Z,{totalPerPerson:u.value,tipPerPerson:r.value,onReset:i},null,8,["totalPerPerson","tipPerPerson"])]))}};const X=(0,s.Z)(Q,[["__scopeId","data-v-29c74d52"]]);var ee=X;const te=(0,o._)("img",{src:a,alt:"Logo",class:"logo"},null,-1);var ne={setup(e){return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(g,null,{default:(0,o.w5)((()=>[te])),_:1}),(0,o.Wm)(d,null,{default:(0,o.w5)((()=>[(0,o.Wm)(ee)])),_:1})],64))}};const le=ne;var oe=le;(0,l.ri)(oe).mount("#app")},1914:function(e,t,n){e.exports=n.p+"img/dollarSign.ecbf71e5.svg"},4221:function(e,t,n){e.exports=n.p+"img/userIcon.fcf19b4c.svg"}},t={};function n(l){var o=t[l];if(void 0!==o)return o.exports;var a=t[l]={exports:{}};return e[l](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,l,o,a){if(!l){var u=1/0;for(c=0;c<e.length;c++){l=e[c][0],o=e[c][1],a=e[c][2];for(var r=!0,i=0;i<l.length;i++)(!1&a||u>=a)&&Object.keys(n.O).every((function(e){return n.O[e](l[i])}))?l.splice(i--,1):(r=!1,a<u&&(u=a));if(r){e.splice(c--,1);var s=o();void 0!==s&&(t=s)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[l,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var l in t)n.o(t,l)&&!n.o(e,l)&&Object.defineProperty(e,l,{enumerable:!0,get:t[l]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/splitter-vue-project/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,l){var o,a,u=l[0],r=l[1],i=l[2],s=0;if(u.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(i)var c=i(n)}for(t&&t(l);s<u.length;s++)a=u[s],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},l=self["webpackChunkvue_for_dummies"]=self["webpackChunkvue_for_dummies"]||[];l.forEach(t.bind(null,0)),l.push=t.bind(null,l.push.bind(l))}();var l=n.O(void 0,[998],(function(){return n(1599)}));l=n.O(l)})();
//# sourceMappingURL=app.cb08c629.js.map