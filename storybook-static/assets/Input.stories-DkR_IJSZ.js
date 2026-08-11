import{o as e}from"./iframe-D-_Pwyzg.js";import{t}from"./react-Dg-GQA8u.js";import{t as n}from"./jsx-runtime-BaslELNX.js";var r=e(t(),1),i=n(),a=(0,r.forwardRef)(({label:e,size:t=`md`,className:n=``,...r},a)=>{let o=[`input-container`,n].filter(Boolean).join(` `),s=[`input-field-wrapper`,`input-field-wrapper--${t}`].filter(Boolean).join(` `);return(0,i.jsxs)(`div`,{className:o,children:[(0,i.jsx)(`label`,{children:e}),(0,i.jsx)(`div`,{className:s,children:(0,i.jsx)(`input`,{ref:a,className:`input-element`,...r})})]})});a.displayName=`Input`,a.__docgenInfo={description:``,methods:[],displayName:`Input`,props:{label:{required:!1,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'sm' | 'md' | 'lg'`,elements:[{name:`literal`,value:`'sm'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`}]},description:``,defaultValue:{value:`'md'`,computed:!1}},className:{defaultValue:{value:`''`,computed:!1},required:!1}},composes:[`Omit`]};var o={title:`Atoms/Input`,component:a,tags:[`autodocs`],argTypes:{label:{control:`text`,description:`Label text rendered above the input tag.`},size:{control:`radio`,options:[`sm`,`md`,`lg`],description:`Controls size variant (sm, md, lg).`},type:{control:`select`,options:[`text`,`password`,`email`,`number`,`search`,`tel`,`url`],description:`Standard HTML input type attribute.`},placeholder:{control:`text`,description:`Placeholder text inside native input tag.`},disabled:{control:`boolean`,description:`Disables the input tag.`},required:{control:`boolean`,description:`Marks input tag as required.`}}},s={args:{placeholder:`Type something here...`,size:`md`}},c={args:{label:`Username`,placeholder:`enter_username`}},l={args:{label:`Email Address`,type:`email`,required:!0,placeholder:`user@example.com`}},u={args:{label:`Small Input`,size:`sm`,placeholder:`Small size...`}},d={args:{label:`Medium Input`,size:`md`,placeholder:`Medium size...`}},f={args:{label:`Large Input`,size:`lg`,placeholder:`Large size...`}},p={args:{label:`Password`,type:`password`,placeholder:`••••••••••••`}},m={args:{label:`Email Address`,type:`email`,placeholder:`name@company.com`}},h={args:{label:`Quantity`,type:`number`,placeholder:`0`}},g={args:{label:`Search`,type:`search`,placeholder:`Search items...`}},_={args:{label:`Account ID`,defaultValue:`ACC-987654321`,disabled:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'Type something here...',
    size: 'md'
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'enter_username'
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    type: 'email',
    required: true,
    placeholder: 'user@example.com'
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Small Input',
    size: 'sm',
    placeholder: 'Small size...'
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Medium Input',
    size: 'md',
    placeholder: 'Medium size...'
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Large Input',
    size: 'lg',
    placeholder: 'Large size...'
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    type: 'password',
    placeholder: '••••••••••••'
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email Address',
    type: 'email',
    placeholder: 'name@company.com'
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Quantity',
    type: 'number',
    placeholder: '0'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search items...'
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Account ID',
    defaultValue: 'ACC-987654321',
    disabled: true
  }
}`,..._.parameters?.docs?.source}}};var v=[`Default`,`WithLabel`,`Required`,`Small`,`Medium`,`Large`,`Password`,`Email`,`NumberInput`,`SearchInput`,`Disabled`];export{s as Default,_ as Disabled,m as Email,f as Large,d as Medium,h as NumberInput,p as Password,l as Required,g as SearchInput,u as Small,c as WithLabel,v as __namedExportsOrder,o as default};