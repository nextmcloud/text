(self.webpackChunktext=self.webpackChunktext||[]).push([["editor-collab"],{61029:(e,o,a)=>{"use strict";Object.defineProperty(o,"X",{value:!0}),o.Z=void 0;var s=l(a(28017)),r=l(a(27028)),i=l(a(15168)),A=l(a(13815));function l(n){return n&&n.__esModule?n:{default:n}}var u={name:"SessionList",components:{Avatar:s.default,Popover:r.default},directives:{tooltip:i.default},mixins:[A.default],props:{sessions:{type:Object,default:function(){return{}}}},data:function(){return{myName:""}},computed:{showAuthorAnnotations:{get:function(){return this.$store.state.showAuthorAnnotations},set:function(n){this.$store.dispatch("setShowAuthorAnnotations",n)}},editorsTooltip:function(){var e=t("text","Currently active users:")+" ";if(this.sessionPopoverList.length>0){var o=this.activeSessions.slice(0,3).map((function(n){return n.guestName?n.guestName:n.displayName})).join(", "),a=this.activeSessions.slice(3).length;return e+o+" "+n("text","and %n other editor","and %n other editors",a)}return e+this.activeSessions.slice(0,3).map((function(n){return n.guestName?n.guestName:n.displayName})).join(", ")},activeSessions:function(){return Object.values(this.sessions).filter((function(n){return n.lastContact>Date.now()/1e3-90&&!n.isCurrent&&(null!==n.userId||null!==n.guestName)})).sort((function(n,t){return n.lastContact<t.lastContact}))},currentSession:function(){return Object.values(this.sessions).find((function(n){return n.isCurrent}))},sessionStyle:function(){return function(n){return{"border-color":n.color,"background-color":n.color+" !important"}}},avatarStyle:function(){return function(n){return{opacity:n.lastContact>Date.now()/1e3-60?1:.5}}},sessionsVisible:function(){return this.activeSessions.slice(0,3)},sessionPopoverList:function(){return this.activeSessions.slice(3)}}};o.Z=u},91395:(n,t,e)=>{"use strict";e.d(t,{Z:()=>s});var o=e(23645),a=e.n(o)()(!0);a.push([n.id,".avatar-list[data-v-2443e786]{border:none;background-color:var(--color-main-background);padding:0;margin:0;padding-left:6px;display:inline-flex;flex-direction:row-reverse}.avatar-list[data-v-2443e786]:focus{background-color:#eee}.avatar-list .avatar-wrapper[data-v-2443e786]{margin:6px;margin-right:-8px;margin-left:0}.avatar-list .icon-more[data-v-2443e786],.avatar-list .icon-group[data-v-2443e786],.avatar-list .icon-settings-dark[data-v-2443e786]{background-color:var(--color-background-dark);width:36px;height:36px;margin:6px 6px 6px 0px}.avatar-wrapper[data-v-2443e786]{width:32px;height:32px;z-index:1;border-radius:50%;overflow:hidden;border:2px solid var(--color-main-background);box-sizing:content-box !important}.session-menu[data-v-2443e786]{max-width:280px;padding-top:6px;padding-bottom:6px}.session-menu ul li[data-v-2443e786]{align-items:center;display:flex;padding:6px}.session-menu ul li .avatar-wrapper[data-v-2443e786]{margin-right:6px}label[data-v-2443e786]{display:block;margin:8px}.hint[data-v-2443e786]{margin:8px;color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://src/components/SessionList.vue"],names:[],mappings:"AA8JA,8BACC,WAAA,CACA,6CAAA,CACA,SAAA,CACA,QAAA,CACA,gBAAA,CACA,mBAAA,CACA,0BAAA,CAEA,oCACC,qBAAA,CAGD,8CACC,UAAA,CACA,iBAAA,CACA,aAAA,CAGD,qIACC,6CAAA,CACA,UAAA,CACA,WAAA,CACA,sBAAA,CAIF,iCACC,UAAA,CACA,WAAA,CACA,SAAA,CACA,iBAAA,CACA,eAAA,CACA,6CAAA,CACA,iCAAA,CAGD,+BACC,eAAA,CACA,eAAA,CACA,kBAAA,CAEA,qCACC,kBAAA,CACA,YAAA,CACA,WAAA,CAEA,qDACC,gBAAA,CAKH,uBACC,aAAA,CACA,UAAA,CAGD,uBACC,UAAA,CACA,mCAAA",sourcesContent:["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.avatar-list {\n\tborder: none;\n\tbackground-color: var(--color-main-background);\n\tpadding: 0;\n\tmargin: 0;\n\tpadding-left: 6px;\n\tdisplay: inline-flex;\n\tflex-direction: row-reverse;\n\n\t&:focus {\n\t\tbackground-color: #eee;\n\t}\n\n\t.avatar-wrapper {\n\t\tmargin: 6px;\n\t\tmargin-right: -8px;\n\t\tmargin-left: 0;\n\t}\n\n\t.icon-more, .icon-group, .icon-settings-dark {\n\t\tbackground-color: var(--color-background-dark);\n\t\twidth: 36px;\n\t\theight: 36px;\n\t\tmargin: 6px 6px 6px 0px;\n\t}\n}\n\n.avatar-wrapper {\n\twidth: 32px;\n\theight: 32px;\n\tz-index: 1;\n\tborder-radius: 50%;\n\toverflow: hidden;\n\tborder: 2px solid var(--color-main-background);\n\tbox-sizing: content-box !important;\n}\n\n.session-menu {\n\tmax-width: 280px;\n\tpadding-top: 6px;\n\tpadding-bottom: 6px;\n\n\tul li {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tpadding: 6px;\n\n\t\t.avatar-wrapper {\n\t\t\tmargin-right: 6px;\n\t\t}\n\t}\n}\n\nlabel {\n\tdisplay: block;\n\tmargin: 8px;\n}\n\n.hint {\n\tmargin: 8px;\n\tcolor: var(--color-text-maxcontrast);\n}\n"],sourceRoot:""}]);const s=a},70206:(n,t,e)=>{"use strict";e.r(t),e.d(t,{__esModule:()=>o.X,default:()=>l});var o=e(61029);const a=o.Z;var s=e(93379),r=e.n(s),i=e(91395),A={insert:"head",singleton:!1};r()(i.Z,A);i.Z.locals;const l=(0,e(51900).Z)(a,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("Popover",{staticClass:"session-list",attrs:{placement:"top"},scopedSlots:n._u([{key:"default",fn:function(){return[e("div",{staticClass:"session-menu"},[e("ul",[n._t("default"),n._v(" "),n._l(n.sessionPopoverList,(function(t){return e("li",{key:t.id,style:n.avatarStyle(t)},[e("div",{staticClass:"avatar-wrapper",style:n.sessionStyle(t)},[e("Avatar",{attrs:{user:t.userId?t.userId:t.guestName,"is-guest":null===t.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:32}})],1),n._v("\n\t\t\t\t\t"+n._s(t.guestName?t.guestName:t.displayName)+"\n\t\t\t\t")])}))],2),n._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:n.showAuthorAnnotations,expression:"showAuthorAnnotations"}],staticClass:"checkbox",attrs:{id:"toggle-color-annotations",type:"checkbox"},domProps:{checked:Array.isArray(n.showAuthorAnnotations)?n._i(n.showAuthorAnnotations,null)>-1:n.showAuthorAnnotations},on:{change:function(t){var e=n.showAuthorAnnotations,o=t.target,a=!!o.checked;if(Array.isArray(e)){var s=n._i(e,null);o.checked?s<0&&(n.showAuthorAnnotations=e.concat([null])):s>-1&&(n.showAuthorAnnotations=e.slice(0,s).concat(e.slice(s+1)))}else n.showAuthorAnnotations=a}}}),n._v(" "),e("label",{attrs:{for:"toggle-color-annotations"}},[n._v(n._s(n.t("text","Show author colors")))]),n._v(" "),e("p",{staticClass:"hint"},[n._v("\n\t\t\t\t"+n._s(n.t("text","Author colors are only shown until everyone has closed the document."))+"\n\t\t\t")])])]},proxy:!0}],null,!0)},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:n.editorsTooltip,expression:"editorsTooltip",modifiers:{bottom:!0}}],staticClass:"avatar-list",attrs:{slot:"trigger"},slot:"trigger"},[e("div",{staticClass:"avatardiv icon-group"}),n._v(" "),n._l(n.sessionsVisible,(function(t){return e("div",{key:t.id,staticClass:"avatar-wrapper",style:n.sessionStyle(t)},[e("Avatar",{style:n.avatarStyle(t),attrs:{user:t.userId?t.userId:t.guestName,"is-guest":null===t.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:32}})],1)}))],2)])}),[],!1,null,"2443e786",null).exports}}]);
//# sourceMappingURL=editor-collab.js.map?v=14fe9431cdb7fd9e9211