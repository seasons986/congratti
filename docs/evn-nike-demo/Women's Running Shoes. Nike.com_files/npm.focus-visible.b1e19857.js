(window.webpackJsonp=window.webpackJsonp||[]).push([["npm.focus-visible"],{1180:function(e,t,n){!function(){"use strict";function e(e){function t(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function n(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function o(e){s=!1}function i(){document.addEventListener("mousemove",d),document.addEventListener("mousedown",d),document.addEventListener("mouseup",d),document.addEventListener("pointermove",d),document.addEventListener("pointerdown",d),document.addEventListener("pointerup",d),document.addEventListener("touchmove",d),document.addEventListener("touchstart",d),document.addEventListener("touchend",d)}function d(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(s=!1,document.removeEventListener("mousemove",d),document.removeEventListener("mousedown",d),document.removeEventListener("mouseup",d),document.removeEventListener("pointermove",d),document.removeEventListener("pointerdown",d),document.removeEventListener("pointerup",d),document.removeEventListener("touchmove",d),document.removeEventListener("touchstart",d),document.removeEventListener("touchend",d))}var s=!0,u=!1,a=null,c={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};document.addEventListener("keydown",function(o){o.metaKey||o.altKey||o.ctrlKey||(t(e.activeElement)&&n(e.activeElement),s=!0)},!0),document.addEventListener("mousedown",o,!0),document.addEventListener("pointerdown",o,!0),document.addEventListener("touchstart",o,!0),document.addEventListener("visibilitychange",function(e){"hidden"==document.visibilityState&&(u&&(s=!0),i())},!0),i(),e.addEventListener("focus",function(e){var o,i,d;t(e.target)&&(s||(i=(o=e.target).type,"INPUT"==(d=o.tagName)&&c[i]&&!o.readOnly||"TEXTAREA"==d&&!o.readOnly||o.isContentEditable))&&n(e.target)},!0),e.addEventListener("blur",function(e){var n;t(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(u=!0,window.clearTimeout(a),a=window.setTimeout(function(){u=!1,window.clearTimeout(a)},100),(n=e.target).hasAttribute("data-focus-visible-added")&&(n.classList.remove("focus-visible"),n.removeAttribute("data-focus-visible-added")))},!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&document.documentElement.classList.add("js-focus-visible")}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}()}}]);
//# sourceMappingURL=npm.focus-visible.b1e19857.js.map