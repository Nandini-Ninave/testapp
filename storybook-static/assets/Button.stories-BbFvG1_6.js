import{o as e}from"./iframe-D-_Pwyzg.js";import{t}from"./react-Dg-GQA8u.js";import{t as n}from"./jsx-runtime-BaslELNX.js";var r=e(t(),1),i=n(),a=(0,r.forwardRef)(({children:e,variant:t=`primary`,size:n=`md`,fullWidth:r=!1,isLoading:a=!1,leftIcon:o,rightIcon:s,disabled:c,className:l=``,type:u=`button`,...d},f)=>{let p=[`btn`,`btn--${t}`,`btn--${n}`,r?`btn--full-width`:``,c||a?`btn--disabled`:``,l].filter(Boolean).join(` `);return(0,i.jsxs)(`button`,{ref:f,type:u,className:p,disabled:c||a,...d,children:[a?(0,i.jsx)(`span`,{className:`btn__spinner`,"aria-hidden":`true`}):o&&(0,i.jsx)(`span`,{className:`btn__icon btn__icon--left`,children:o}),e&&(0,i.jsx)(`span`,{children:e}),!a&&s&&(0,i.jsx)(`span`,{className:`btn__icon btn__icon--right`,children:s})]})});a.displayName=`Button`,a.__docgenInfo={description:``,methods:[],displayName:`Button`,props:{variant:{required:!1,tsType:{name:`union`,raw:`'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'`,elements:[{name:`literal`,value:`'primary'`},{name:`literal`,value:`'secondary'`},{name:`literal`,value:`'outline'`},{name:`literal`,value:`'ghost'`},{name:`literal`,value:`'danger'`}]},description:`Variant of the button`,defaultValue:{value:`'primary'`,computed:!1}},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:`Size of the button`,defaultValue:{value:`'md'`,computed:!1}},fullWidth:{required:!1,tsType:{name:`boolean`},description:`Expand button to full width of parent container`,defaultValue:{value:`false`,computed:!1}},isLoading:{required:!1,tsType:{name:`boolean`},description:`Display a loading spinner and disable interaction`,defaultValue:{value:`false`,computed:!1}},leftIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional icon to render on the left of children`},rightIcon:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Optional icon to render on the right of children`},className:{defaultValue:{value:`''`,computed:!1},required:!1},type:{defaultValue:{value:`'button'`,computed:!1},required:!1}}};var o=(...e)=>e.filter((e,t,n)=>!!e&&e.trim()!==``&&n.indexOf(e)===t).join(` `).trim(),s=e=>e.replace(/([a-z0-9])([A-Z])/g,`$1-$2`).toLowerCase(),c=e=>e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,n)=>n?n.toUpperCase():t.toLowerCase()),l=e=>{let t=c(e);return t.charAt(0).toUpperCase()+t.slice(1)},u={xmlns:`http://www.w3.org/2000/svg`,width:24,height:24,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:2,strokeLinecap:`round`,strokeLinejoin:`round`},d=e=>{for(let t in e)if(t.startsWith(`aria-`)||t===`role`||t===`title`)return!0;return!1},f=(0,r.createContext)({}),p=()=>(0,r.useContext)(f),m=(0,r.forwardRef)(({color:e,size:t,strokeWidth:n,absoluteStrokeWidth:i,className:a=``,children:s,iconNode:c,...l},f)=>{let{size:m=24,strokeWidth:h=2,absoluteStrokeWidth:g=!1,color:_=`currentColor`,className:v=``}=p()??{},y=i??g?Number(n??h)*24/Number(t??m):n??h;return(0,r.createElement)(`svg`,{ref:f,...u,width:t??m??u.width,height:t??m??u.height,stroke:e??_,strokeWidth:y,className:o(`lucide`,v,a),...!s&&!d(l)&&{"aria-hidden":`true`},...l},[...c.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(s)?s:[s]])}),h=(e,t)=>{let n=(0,r.forwardRef)(({className:n,...i},a)=>(0,r.createElement)(m,{ref:a,iconNode:t,className:o(`lucide-${s(l(e))}`,`lucide-${e}`,n),...i}));return n.displayName=l(e),n},g=h(`arrow-right`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`m12 5 7 7-7 7`,key:`xquz4c`}]]),_=h(`mail`,[[`path`,{d:`m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7`,key:`132q7q`}],[`rect`,{x:`2`,y:`4`,width:`20`,height:`16`,rx:`2`,key:`izxlao`}]]),v=h(`plus`,[[`path`,{d:`M5 12h14`,key:`1ays0h`}],[`path`,{d:`M12 5v14`,key:`s699le`}]]),y=h(`send`,[[`path`,{d:`M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z`,key:`1ffxy3`}],[`path`,{d:`m21.854 2.147-10.94 10.939`,key:`12cjpa`}]]),b=h(`trash-2`,[[`path`,{d:`M10 11v6`,key:`nco0om`}],[`path`,{d:`M14 11v6`,key:`outv1u`}],[`path`,{d:`M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6`,key:`miytrc`}],[`path`,{d:`M3 6h18`,key:`d0wm0j`}],[`path`,{d:`M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2`,key:`e791ji`}]]),x={title:`Atoms/Button`,component:a,tags:[`autodocs`],argTypes:{variant:{control:`select`,options:[`primary`,`secondary`,`outline`,`ghost`,`danger`],description:`Defines the visual style variant using token colors.`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Controls padding and font-size tokens.`},fullWidth:{control:`boolean`,description:`Stretches the button to 100% of container width.`},isLoading:{control:`boolean`,description:`Displays a spinning loading indicator.`},disabled:{control:`boolean`,description:`Disables button interactions and applies disabled tokens.`},onClick:{action:`clicked`}}},S={args:{children:`Click Me`,variant:`primary`,size:`md`}},C={args:{children:`Primary Button`,variant:`primary`}},w={args:{children:`Secondary Button`,variant:`secondary`}},T={args:{children:`Outline Button`,variant:`outline`}},E={args:{children:`Ghost Button`,variant:`ghost`}},D={args:{children:`Delete Account`,variant:`danger`,leftIcon:(0,i.jsx)(b,{size:16})}},O={args:{children:`Small Button`,size:`sm`}},k={args:{children:`Medium Button`,size:`md`}},A={args:{children:`Large Button`,size:`lg`}},j={args:{children:`Send Email`,variant:`primary`,leftIcon:(0,i.jsx)(_,{size:18})}},M={args:{children:`Continue`,variant:`primary`,rightIcon:(0,i.jsx)(g,{size:18})}},N={args:{children:`Add Item`,variant:`outline`,leftIcon:(0,i.jsx)(v,{size:18}),rightIcon:(0,i.jsx)(y,{size:16})}},P={args:{children:`Submitting`,isLoading:!0,variant:`primary`}},F={args:{children:`Disabled Button`,disabled:!0,variant:`primary`}},I={args:{children:`Full Width Button`,fullWidth:!0,variant:`primary`}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    variant: 'primary',
    size: 'md'
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Primary Button',
    variant: 'primary'
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Secondary Button',
    variant: 'secondary'
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Outline Button',
    variant: 'outline'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Ghost Button',
    variant: 'ghost'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Delete Account',
    variant: 'danger',
    leftIcon: <Trash2 size={16} />
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Small Button',
    size: 'sm'
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Medium Button',
    size: 'md'
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Large Button',
    size: 'lg'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Send Email',
    variant: 'primary',
    leftIcon: <Mail size={18} />
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Continue',
    variant: 'primary',
    rightIcon: <ArrowRight size={18} />
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Add Item',
    variant: 'outline',
    leftIcon: <Plus size={18} />,
    rightIcon: <Send size={16} />
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Submitting',
    isLoading: true,
    variant: 'primary'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Disabled Button',
    disabled: true,
    variant: 'primary'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Full Width Button',
    fullWidth: true,
    variant: 'primary'
  }
}`,...I.parameters?.docs?.source}}};var L=[`Default`,`Primary`,`Secondary`,`Outline`,`Ghost`,`Danger`,`Small`,`Medium`,`Large`,`WithLeftIcon`,`WithRightIcon`,`WithBothIcons`,`LoadingState`,`DisabledState`,`FullWidth`];export{D as Danger,S as Default,F as DisabledState,I as FullWidth,E as Ghost,A as Large,P as LoadingState,k as Medium,T as Outline,C as Primary,w as Secondary,O as Small,N as WithBothIcons,j as WithLeftIcon,M as WithRightIcon,L as __namedExportsOrder,x as default};