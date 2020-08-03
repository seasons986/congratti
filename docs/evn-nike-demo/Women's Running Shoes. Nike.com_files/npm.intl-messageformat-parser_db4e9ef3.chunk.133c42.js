(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"../../node_modules/intl-messageformat-parser/index.js":function(e,t,r){"use strict";(t=e.exports=r("../../node_modules/intl-messageformat-parser/lib/parser.js").default).default=t},"../../node_modules/intl-messageformat-parser/lib/parser.js":function(e,t,r){"use strict";t.default=function(){function peg$SyntaxError(e,t,r,n){this.message=e,this.expected=t,this.found=r,this.location=n,this.name="SyntaxError","function"==typeof Error.captureStackTrace&&Error.captureStackTrace(this,peg$SyntaxError)}return function peg$subclass(e,t){function ctor(){this.constructor=e}ctor.prototype=t.prototype,e.prototype=new ctor}(peg$SyntaxError,Error),{SyntaxError:peg$SyntaxError,parse:function peg$parse(e){var t,r=arguments.length>1?arguments[1]:{},n={},a={start:peg$parsestart},p=peg$parsestart,peg$c0=function(e){return{type:"messageFormatPattern",elements:e,location:location()}},peg$c1=function(e){var t,r,n,a,p,s="";for(t=0,n=e.length;t<n;t+=1)for(r=0,p=(a=e[t]).length;r<p;r+=1)s+=a[r];return s},peg$c2=function(e){return{type:"messageTextElement",value:e,location:location()}},s=/^[^ \t\n\r,.+={}#]/,i={type:"class",value:"[^ \\t\\n\\r,.+={}#]",description:"[^ \\t\\n\\r,.+={}#]"},o="{",l={type:"literal",value:"{",description:'"{"'},u=",",c={type:"literal",value:",",description:'","'},g="}",f={type:"literal",value:"}",description:'"}"'},peg$c11=function(e,t){return{type:"argumentElement",id:e,format:t&&t[2],location:location()}},$="number",h={type:"literal",value:"number",description:'"number"'},m="date",d={type:"literal",value:"date",description:'"date"'},v="time",y={type:"literal",value:"time",description:'"time"'},peg$c18=function(e,t){return{type:e+"Format",style:t&&t[2],location:location()}},x="plural",b={type:"literal",value:"plural",description:'"plural"'},peg$c21=function(e){return{type:e.type,ordinal:!1,offset:e.offset||0,options:e.options,location:location()}},F="selectordinal",A={type:"literal",value:"selectordinal",description:'"selectordinal"'},peg$c24=function(e){return{type:e.type,ordinal:!0,offset:e.offset||0,options:e.options,location:location()}},_="select",E={type:"literal",value:"select",description:'"select"'},peg$c27=function(e){return{type:"selectFormat",options:e,location:location()}},C="=",w={type:"literal",value:"=",description:'"="'},peg$c30=function(e,t){return{type:"optionalFormatPattern",selector:e,value:t,location:location()}},S="offset:",P={type:"literal",value:"offset:",description:'"offset:"'},peg$c33=function(e){return e},peg$c34=function(e,t){return{type:"pluralFormat",offset:e,options:t,location:location()}},R={type:"other",description:"whitespace"},D=/^[ \t\n\r]/,j={type:"class",value:"[ \\t\\n\\r]",description:"[ \\t\\n\\r]"},T={type:"other",description:"optionalWhitespace"},k=/^[0-9]/,L={type:"class",value:"[0-9]",description:"[0-9]"},I=/^[0-9a-f]/i,J={type:"class",value:"[0-9a-f]i",description:"[0-9a-f]i"},B="0",M={type:"literal",value:"0",description:'"0"'},O=/^[1-9]/,U={type:"class",value:"[1-9]",description:"[1-9]"},peg$c47=function(e){return parseInt(e,10)},W=/^[^{}\\\0-\x1F \t\n\r]/,q={type:"class",value:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]",description:"[^{}\\\\\\0-\\x1F\\x7f \\t\\n\\r]"},z="\\\\",G={type:"literal",value:"\\\\",description:'"\\\\\\\\"'},peg$c52=function(){return"\\"},H="\\#",K={type:"literal",value:"\\#",description:'"\\\\#"'},peg$c55=function(){return"\\#"},N="\\{",Q={type:"literal",value:"\\{",description:'"\\\\{"'},peg$c58=function(){return"{"},V="\\}",X={type:"literal",value:"\\}",description:'"\\\\}"'},peg$c61=function(){return"}"},Y="\\u",Z={type:"literal",value:"\\u",description:'"\\\\u"'},peg$c64=function(e){return String.fromCharCode(parseInt(e,16))},peg$c65=function(e){return e.join("")},ee=0,te=0,re=[{line:1,column:1,seenCR:!1}],ne=0,ae=[],pe=0;if("startRule"in r){if(!(r.startRule in a))throw new Error("Can't start parsing from rule \""+r.startRule+'".');p=a[r.startRule]}function location(){return peg$computeLocation(te,ee)}function peg$computePosDetails(t){var r,n,a=re[t];if(a)return a;for(r=t-1;!re[r];)r--;for(a={line:(a=re[r]).line,column:a.column,seenCR:a.seenCR};r<t;)"\n"===(n=e.charAt(r))?(a.seenCR||a.line++,a.column=1,a.seenCR=!1):"\r"===n||"\u2028"===n||"\u2029"===n?(a.line++,a.column=1,a.seenCR=!0):(a.column++,a.seenCR=!1),r++;return re[t]=a,a}function peg$computeLocation(e,t){var r=peg$computePosDetails(e),n=peg$computePosDetails(t);return{start:{offset:e,line:r.line,column:r.column},end:{offset:t,line:n.line,column:n.column}}}function peg$fail(e){ee<ne||(ee>ne&&(ne=ee,ae=[]),ae.push(e))}function peg$buildException(e,t,r,n){return null!==t&&function cleanupExpected(e){var t=1;for(e.sort((function(e,t){return e.description<t.description?-1:e.description>t.description?1:0}));t<e.length;)e[t-1]===e[t]?e.splice(t,1):t++}(t),new peg$SyntaxError(null!==e?e:function buildMessage(e,t){var r,n=new Array(e.length);for(r=0;r<e.length;r++)n[r]=e[r].description;return"Expected "+(e.length>1?n.slice(0,-1).join(", ")+" or "+n[e.length-1]:n[0])+" but "+(t?'"'+function stringEscape(e){function hex(e){return e.charCodeAt(0).toString(16).toUpperCase()}return e.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\x08/g,"\\b").replace(/\t/g,"\\t").replace(/\n/g,"\\n").replace(/\f/g,"\\f").replace(/\r/g,"\\r").replace(/[\x00-\x07\x0B\x0E\x0F]/g,(function(e){return"\\x0"+hex(e)})).replace(/[\x10-\x1F\x80-\xFF]/g,(function(e){return"\\x"+hex(e)})).replace(/[\u0100-\u0FFF]/g,(function(e){return"\\u0"+hex(e)})).replace(/[\u1000-\uFFFF]/g,(function(e){return"\\u"+hex(e)}))}(t)+'"':"end of input")+" found."}(t,r),t,r,n)}function peg$parsestart(){return peg$parsemessageFormatPattern()}function peg$parsemessageFormatPattern(){var e,t,r;for(e=ee,t=[],r=peg$parsemessageFormatElement();r!==n;)t.push(r),r=peg$parsemessageFormatElement();return t!==n&&(te=e,t=peg$c0(t)),e=t}function peg$parsemessageFormatElement(){var t;return(t=function peg$parsemessageTextElement(){var t,r;t=ee,(r=function peg$parsemessageText(){var t,r,a,p,s,i;t=ee,r=[],a=ee,(p=peg$parse_())!==n&&(s=peg$parsechars())!==n&&(i=peg$parse_())!==n?a=p=[p,s,i]:(ee=a,a=n);if(a!==n)for(;a!==n;)r.push(a),a=ee,(p=peg$parse_())!==n&&(s=peg$parsechars())!==n&&(i=peg$parse_())!==n?a=p=[p,s,i]:(ee=a,a=n);else r=n;r!==n&&(te=t,r=peg$c1(r));(t=r)===n&&(t=ee,r=peg$parsews(),t=r!==n?e.substring(t,ee):r);return t}())!==n&&(te=t,r=peg$c2(r));return t=r}())===n&&(t=function peg$parseargumentElement(){var t,r,a,p,C,w,S;t=ee,123===e.charCodeAt(ee)?(r=o,ee++):(r=n,0===pe&&peg$fail(l));r!==n&&peg$parse_()!==n&&(a=function peg$parseargument(){var t,r,a;if((t=peg$parsenumber())===n){if(t=ee,r=[],s.test(e.charAt(ee))?(a=e.charAt(ee),ee++):(a=n,0===pe&&peg$fail(i)),a!==n)for(;a!==n;)r.push(a),s.test(e.charAt(ee))?(a=e.charAt(ee),ee++):(a=n,0===pe&&peg$fail(i));else r=n;t=r!==n?e.substring(t,ee):r}return t}())!==n&&peg$parse_()!==n?(p=ee,44===e.charCodeAt(ee)?(C=u,ee++):(C=n,0===pe&&peg$fail(c)),C!==n&&(w=peg$parse_())!==n&&(S=function peg$parseelementFormat(){var t;(t=function peg$parsesimpleFormat(){var t,r,a,p,s,i;t=ee,e.substr(ee,6)===$?(r=$,ee+=6):(r=n,0===pe&&peg$fail(h));r===n&&(e.substr(ee,4)===m?(r=m,ee+=4):(r=n,0===pe&&peg$fail(d)),r===n&&(e.substr(ee,4)===v?(r=v,ee+=4):(r=n,0===pe&&peg$fail(y))));r!==n&&peg$parse_()!==n?(a=ee,44===e.charCodeAt(ee)?(p=u,ee++):(p=n,0===pe&&peg$fail(c)),p!==n&&(s=peg$parse_())!==n&&(i=peg$parsechars())!==n?a=p=[p,s,i]:(ee=a,a=n),a===n&&(a=null),a!==n?(te=t,r=peg$c18(r,a),t=r):(ee=t,t=n)):(ee=t,t=n);return t}())===n&&(t=function peg$parsepluralFormat(){var t,r,a,p;t=ee,e.substr(ee,6)===x?(r=x,ee+=6):(r=n,0===pe&&peg$fail(b));r!==n&&peg$parse_()!==n?(44===e.charCodeAt(ee)?(a=u,ee++):(a=n,0===pe&&peg$fail(c)),a!==n&&peg$parse_()!==n&&(p=peg$parsepluralStyle())!==n?(te=t,r=peg$c21(p),t=r):(ee=t,t=n)):(ee=t,t=n);return t}())===n&&(t=function peg$parseselectOrdinalFormat(){var t,r,a,p;t=ee,e.substr(ee,13)===F?(r=F,ee+=13):(r=n,0===pe&&peg$fail(A));r!==n&&peg$parse_()!==n?(44===e.charCodeAt(ee)?(a=u,ee++):(a=n,0===pe&&peg$fail(c)),a!==n&&peg$parse_()!==n&&(p=peg$parsepluralStyle())!==n?(te=t,r=peg$c24(p),t=r):(ee=t,t=n)):(ee=t,t=n);return t}())===n&&(t=function peg$parseselectFormat(){var t,r,a,p,s;t=ee,e.substr(ee,6)===_?(r=_,ee+=6):(r=n,0===pe&&peg$fail(E));if(r!==n)if(peg$parse_()!==n)if(44===e.charCodeAt(ee)?(a=u,ee++):(a=n,0===pe&&peg$fail(c)),a!==n)if(peg$parse_()!==n){if(p=[],(s=peg$parseoptionalFormatPattern())!==n)for(;s!==n;)p.push(s),s=peg$parseoptionalFormatPattern();else p=n;p!==n?(te=t,r=peg$c27(p),t=r):(ee=t,t=n)}else ee=t,t=n;else ee=t,t=n;else ee=t,t=n;else ee=t,t=n;return t}());return t}())!==n?p=C=[C,w,S]:(ee=p,p=n),p===n&&(p=null),p!==n&&(C=peg$parse_())!==n?(125===e.charCodeAt(ee)?(w=g,ee++):(w=n,0===pe&&peg$fail(f)),w!==n?(te=t,r=peg$c11(a,p),t=r):(ee=t,t=n)):(ee=t,t=n)):(ee=t,t=n);return t}()),t}function peg$parseoptionalFormatPattern(){var t,r,a,p,s;return t=ee,peg$parse_()!==n&&(r=function peg$parseselector(){var t,r,a,p;return t=ee,r=ee,61===e.charCodeAt(ee)?(a=C,ee++):(a=n,0===pe&&peg$fail(w)),a!==n&&(p=peg$parsenumber())!==n?r=a=[a,p]:(ee=r,r=n),(t=r!==n?e.substring(t,ee):r)===n&&(t=peg$parsechars()),t}())!==n&&peg$parse_()!==n?(123===e.charCodeAt(ee)?(a=o,ee++):(a=n,0===pe&&peg$fail(l)),a!==n&&peg$parse_()!==n&&(p=peg$parsemessageFormatPattern())!==n&&peg$parse_()!==n?(125===e.charCodeAt(ee)?(s=g,ee++):(s=n,0===pe&&peg$fail(f)),s!==n?(te=t,t=peg$c30(r,p)):(ee=t,t=n)):(ee=t,t=n)):(ee=t,t=n),t}function peg$parsepluralStyle(){var t,r,a,p;if(t=ee,(r=function peg$parseoffset(){var t,r,a;return t=ee,e.substr(ee,7)===S?(r=S,ee+=7):(r=n,0===pe&&peg$fail(P)),r!==n&&peg$parse_()!==n&&(a=peg$parsenumber())!==n?(te=t,t=r=peg$c33(a)):(ee=t,t=n),t}())===n&&(r=null),r!==n)if(peg$parse_()!==n){if(a=[],(p=peg$parseoptionalFormatPattern())!==n)for(;p!==n;)a.push(p),p=peg$parseoptionalFormatPattern();else a=n;a!==n?(te=t,t=r=peg$c34(r,a)):(ee=t,t=n)}else ee=t,t=n;else ee=t,t=n;return t}function peg$parsews(){var t,r;if(pe++,t=[],D.test(e.charAt(ee))?(r=e.charAt(ee),ee++):(r=n,0===pe&&peg$fail(j)),r!==n)for(;r!==n;)t.push(r),D.test(e.charAt(ee))?(r=e.charAt(ee),ee++):(r=n,0===pe&&peg$fail(j));else t=n;return pe--,t===n&&(r=n,0===pe&&peg$fail(R)),t}function peg$parse_(){var t,r,a;for(pe++,t=ee,r=[],a=peg$parsews();a!==n;)r.push(a),a=peg$parsews();return t=r!==n?e.substring(t,ee):r,pe--,t===n&&(r=n,0===pe&&peg$fail(T)),t}function peg$parsedigit(){var t;return k.test(e.charAt(ee))?(t=e.charAt(ee),ee++):(t=n,0===pe&&peg$fail(L)),t}function peg$parsehexDigit(){var t;return I.test(e.charAt(ee))?(t=e.charAt(ee),ee++):(t=n,0===pe&&peg$fail(J)),t}function peg$parsenumber(){var t,r,a,p,s,i;if(t=ee,48===e.charCodeAt(ee)?(r=B,ee++):(r=n,0===pe&&peg$fail(M)),r===n){if(r=ee,a=ee,O.test(e.charAt(ee))?(p=e.charAt(ee),ee++):(p=n,0===pe&&peg$fail(U)),p!==n){for(s=[],i=peg$parsedigit();i!==n;)s.push(i),i=peg$parsedigit();s!==n?a=p=[p,s]:(ee=a,a=n)}else ee=a,a=n;r=a!==n?e.substring(r,ee):a}return r!==n&&(te=t,r=peg$c47(r)),t=r}function peg$parsechar(){var t,r,a,p,s,i,o,l;return W.test(e.charAt(ee))?(t=e.charAt(ee),ee++):(t=n,0===pe&&peg$fail(q)),t===n&&(t=ee,e.substr(ee,2)===z?(r=z,ee+=2):(r=n,0===pe&&peg$fail(G)),r!==n&&(te=t,r=peg$c52()),(t=r)===n&&(t=ee,e.substr(ee,2)===H?(r=H,ee+=2):(r=n,0===pe&&peg$fail(K)),r!==n&&(te=t,r=peg$c55()),(t=r)===n&&(t=ee,e.substr(ee,2)===N?(r=N,ee+=2):(r=n,0===pe&&peg$fail(Q)),r!==n&&(te=t,r=peg$c58()),(t=r)===n&&(t=ee,e.substr(ee,2)===V?(r=V,ee+=2):(r=n,0===pe&&peg$fail(X)),r!==n&&(te=t,r=peg$c61()),(t=r)===n&&(t=ee,e.substr(ee,2)===Y?(r=Y,ee+=2):(r=n,0===pe&&peg$fail(Z)),r!==n?(a=ee,p=ee,(s=peg$parsehexDigit())!==n&&(i=peg$parsehexDigit())!==n&&(o=peg$parsehexDigit())!==n&&(l=peg$parsehexDigit())!==n?p=s=[s,i,o,l]:(ee=p,p=n),(a=p!==n?e.substring(a,ee):p)!==n?(te=t,t=r=peg$c64(a)):(ee=t,t=n)):(ee=t,t=n)))))),t}function peg$parsechars(){var e,t,r;if(e=ee,t=[],(r=peg$parsechar())!==n)for(;r!==n;)t.push(r),r=peg$parsechar();else t=n;return t!==n&&(te=e,t=peg$c65(t)),e=t}if((t=p())!==n&&ee===e.length)return t;throw t!==n&&ee<e.length&&peg$fail({type:"end",description:"end of input"}),peg$buildException(null,ae,ne<e.length?e.charAt(ne):null,ne<e.length?peg$computeLocation(ne,ne+1):peg$computeLocation(ne,ne))}}}()}}]);
//# sourceMappingURL=npm.intl-messageformat-parser~db4e9ef3.chunk.133c42.js.map