(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"./src/actions/fetch-cart.js":function(e,t,r){"use strict";r.r(t);var n=r("../../node_modules/@babel/runtime/helpers/defineProperty.js"),o=r.n(n),c=r("../../node_modules/@nike/ux-tread-cart-redux/es/actions/fetch-cart.js"),i=r("../../node_modules/@nike/ux-tread-cart-redux/es/selectors.js"),s=r("../ux-tread-dotcom-utils/es/index.js"),u=r("./src/get-shell-locale.js"),a=r("./src/selectors/get-current-user.js");function ownKeys(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}t.default=function(e){return function(t,n){var l,d,p,f,b,j=Object(u.default)(),v=(null===(l=window)||void 0===l?void 0:null===(d=l.NikeShop)||void 0===d?void 0:null===(p=d.internalStore)||void 0===p?void 0:p.getState())||{},O=Object(a.default)(v),g=O.token,w=O.visitorId,y=O.visitId;return t(Object(c.default)(function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(r,!0).forEach((function(t){o()(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e,{localeForCurrency:null==j?void 0:j.hreflang,langLocale:null==j?void 0:null===(f=j.langRegion)||void 0===f?void 0:f.toLowerCase().replace("-","_"),country:null===(b=j.country)||void 0===b?void 0:b.toUpperCase(),token:g,visitorId:w,visitId:y}))).then((function(e){var o=Object(s.getDocumentLocation)().pathname,c=Object(s.stripDarkFromRoute)(Object(s.getPageRouteFromPathname)(o));return"cart"===c||"favorites"===c?r.e(29).then(r.bind(null,"./src/actions/fetch-skus-product-info.js")).then((function(e){var r=e.default,o=Object(i.getCartItems)(n()).map((function(e){return e.skuId})),c=Object(i.getNikeIdAndJerseyIdDesignViewIds)(n());return t(r(o,c))})):e}))}}}}]);
//# sourceMappingURL=fetchCart.chunk.9982d2.js.map