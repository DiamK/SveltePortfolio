import{a as i,c,y as _,b as m,z as p}from"./ksq3ZuxP.js";function u(e){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}function b(e){c===null&&u(),_&&c.l!==null?d(c).m.push(e):i(()=>{const t=m(e);if(typeof t=="function")return t})}function v(e,t,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(e,{detail:t,bubbles:o,cancelable:s})}function h(){const e=c;return e===null&&u(),(t,o,s)=>{var a;const n=(a=e.s.$$events)==null?void 0:a[t];if(n){const l=p(n)?n.slice():[n],r=v(t,o,s);for(const f of l)f.call(e.x,r);return!r.defaultPrevented}return!0}}function d(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}export{h as c,b as o};
