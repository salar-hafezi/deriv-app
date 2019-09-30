(window.webpackJsonp=window.webpackJsonp||[]).push([["account-info"],{768:function(e,t,n){"use strict";n.r(t);var a=n(4),c=n.n(a),o=n(1),r=n.n(o),i=n(0),s=n.n(i),l=n(46),u=n(13),p=n.n(u),_=n(3),d=n(40),g=n(20),f=n.n(g),h=(n(50),function(e){var t=e.children,n=e.onClick,a=e.outlined;return s.a.createElement("div",{className:c()("acc-switcher__new-account",{"acc-switcher__new-account--outlined":a})},s.a.createElement(f.a,{id:"upgrade-account",onClick:n,className:"acc-switcher__new-account-link"},t))});h.propTypes={onClick:r.a.func,outlined:r.a.bool,text:r.a.string};var m=h,w=n(7),v=n(10),b=n(9),y=n(12);function E(e){return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function k(e,t,n,a,c,o,r){try{var i=e[o](r),s=i.value}catch(e){return void n(e)}i.done?t(s):Promise.resolve(s).then(a,c)}function N(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function O(e,t){return!t||"object"!==E(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function C(e){return(C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var S=function(e){function t(){var e,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(n=O(this,(e=C(t)).call.apply(e,[this].concat(c)))).setWrapperRef=function(e){n.wrapper_ref=e},n.handleClickOutside=function(e){var t=!e.target.classList.contains("acc-info");n.wrapper_ref&&!n.wrapper_ref.contains(e.target)&&n.props.is_visible&&t&&n.props.toggle()},n.handleLogout=function(){n.props.toggle(),n.props.is_positions_drawer_on&&n.props.togglePositionsDrawer(),Object(v.c)().then(n.props.cleanUp)},n}var n,a,o,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){document.addEventListener("mousedown",this.handleClickOutside)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("mousedown",this.handleClickOutside)}},{key:"doSwitch",value:(r=regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.props.toggle(),this.props.account_loginid!==t){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,this.props.switchAccount(t);case 5:this.props.has_error&&this.props.clearError();case 6:case"end":return e.stop()}}),e,this)})),i=function(){var e=this,t=arguments;return new Promise((function(n,a){var c=r.apply(e,t);function o(e){k(c,n,a,o,i,"next",e)}function i(e){k(c,n,a,o,i,"throw",e)}o(void 0)}))},function(e){return i.apply(this,arguments)})},{key:"render",value:function(){var e=this;if(!this.props.is_logged_in)return!1;var t=this.props.account_list.filter((function(e){return!e.is_virtual})),n=this.props.account_list.find((function(e){return e.is_virtual})),a=t.length>1?Object(_.localize)("Real accounts"):Object(_.localize)("Real account");return s.a.createElement("div",{className:"acc-switcher__list",ref:this.setWrapperRef},!(!this.props.account_list.length||!t.length)&&s.a.createElement("div",{className:"acc-switcher__list-group"},s.a.createElement("span",{className:"acc-switcher__list-title"},a),s.a.createElement("div",{className:"acc-switcher__accounts"},t.map((function(t){return s.a.createElement("div",{id:"dt_".concat(t.loginid),key:t.loginid,className:c()("acc-switcher__account",{"acc-switcher__account--selected":t.loginid===e.props.account_loginid}),onClick:e.doSwitch.bind(e,t.loginid)},s.a.createElement("span",{className:"acc-switcher__id"},s.a.createElement(w.a,{icon:"IconAccountsCurrency",className:"acc-switcher__id-icon acc-switcher__id-icon--".concat(t.icon),type:t.icon}),t.loginid))}))),this.can_manage_currency&&s.a.createElement(m,{onClick:this.props.openRealAccountSignup,outlined:!0},s.a.createElement(w.a,{icon:"IconAdd"}),s.a.createElement("div",{className:"btn__text"},s.a.createElement(y.a,{i18n_default_text:"Add/manage account"})))),!p.a.isEmptyObject(n)&&s.a.createElement("div",{className:"acc-switcher__list--virtual"},s.a.createElement("span",{className:"acc-switcher__list-title"},Object(_.localize)("Demo account")),s.a.createElement("div",{className:"acc-switcher__accounts"},s.a.createElement("div",{id:"dt_".concat(this.props.virtual_loginid),className:c()("acc-switcher__account",{"acc-switcher__account--selected":this.props.virtual_loginid===this.props.account_loginid}),onClick:this.doSwitch.bind(this,this.props.virtual_loginid)},s.a.createElement("span",{className:c()("acc-switcher__id","acc-switcher__id--virtual")},this.props.virtual_loginid)))),!!(this.props.is_upgrade_enabled&&this.props.is_virtual&&this.props.can_upgrade_to)&&s.a.createElement(m,{onClick:function(){"svg"===e.props.can_upgrade_to?e.props.openRealAccountSignup():window.open(Object(d.urlFor)("new_account/maltainvestws",void 0,void 0,!0))},outlined:!0},s.a.createElement(w.a,{icon:"IconAdd"}),s.a.createElement("div",{className:"btn__text"},s.a.createElement(y.a,{i18n_default_text:"Add a real account"}))),s.a.createElement("div",{id:"dt_logout_button",className:"acc-switcher__logout",onClick:this.handleLogout},s.a.createElement("span",{className:"acc-switcher__logout-text"},Object(_.localize)("Log out")),s.a.createElement(w.a,{icon:"IconLogout",className:"acc-switcher__logout-icon drawer__icon"})))}},{key:"can_manage_currency",get:function(){return this.props.can_change_currency||!this.props.is_virtual&&!this.props.has_fiat&&this.props.can_upgrade_to}}])&&N(n.prototype,a),o&&N(n,o),t}(s.a.Component);S.propTypes={account_list:r.a.array,account_loginid:r.a.string,cleanUp:r.a.func,clearError:r.a.func,has_error:r.a.bool,has_fiat:r.a.bool,is_logged_in:r.a.bool,is_positions_drawer_on:r.a.bool,is_upgrade_enabled:r.a.bool,is_virtual:r.a.bool,is_visible:r.a.bool,onClickUpgrade:r.a.func,toggle:r.a.func,togglePositionsDrawer:r.a.func,upgrade_info:r.a.object,virtual_loginid:r.a.string};var x=Object(b.b)((function(e){var t=e.client,n=e.ui,a=e.modules;return{has_fiat:t.has_fiat,can_change_currency:t.can_change_currency,account_list:t.account_list,can_upgrade:t.can_upgrade,can_upgrade_to:t.can_upgrade_to,account_loginid:t.loginid,is_logged_in:t.is_logged_in,is_virtual:t.is_virtual,switchAccount:t.switchAccount,upgrade_info:t.upgrade_info,cleanUp:t.cleanUp,virtual_loginid:t.virtual_account_loginid,clearError:a.contract_trade.clearError,has_error:a.contract_trade.has_error,is_positions_drawer_on:n.is_positions_drawer_on,openRealAccountSignup:n.openRealAccountSignup,togglePositionsDrawer:n.togglePositionsDrawer}}))(S);var A=function(e){var t,n,a,o=e.balance,r=e.currency,i=e.loginid,u=e.is_dialog_on,p=e.is_upgrade_enabled,_=e.is_virtual,d=e.onClickUpgrade,g=e.toggleDialog;return s.a.createElement("div",{className:"acc-info__wrapper"},s.a.createElement("div",{className:c()("acc-info",{"acc-info--show":u,"acc-info--is-virtual":_}),onClick:g},s.a.createElement("p",{className:"acc-info__id",title:i},i," "),void 0!==o&&s.a.createElement("p",{className:"acc-info__balance"},s.a.createElement("span",{className:c()("symbols",(t={},n="symbols--".concat((r||"").toLowerCase()),a=r,n in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t))}),o),s.a.createElement(w.a,{icon:"IconArrowBold",className:"acc-info__select-arrow"})),s.a.createElement(l.CSSTransition,{in:u,timeout:200,classNames:{enter:"acc-switcher__wrapper--enter",enterDone:"acc-switcher__wrapper--enter-done",exit:"acc-switcher__wrapper--exit"},unmountOnExit:!0},s.a.createElement("div",{className:"acc-switcher__wrapper"},s.a.createElement(x,{is_visible:u,toggle:g,is_upgrade_enabled:p,onClickUpgrade:d}))))};A.propTypes={account_type:r.a.string,balance:r.a.string,currency:r.a.string,is_dialog_on:r.a.bool,is_upgrade_enabled:r.a.bool,is_virtual:r.a.bool,loginid:r.a.string,onClickUpgrade:r.a.func,toggleDialog:r.a.func};t.default=A}}]);
//# sourceMappingURL=account-info.bfeb899ff5f4099daf0b.js.map