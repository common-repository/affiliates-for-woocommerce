(()=>{var e={482:()=>{}},t={};function n(a){var c=t[a];if(void 0!==c)return c.exports;var r=t[a]={exports:{}};return e[a](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";n.r(a);n(482);var e=jQuery.noConflict();document.addEventListener("DOMContentLoaded",(function(){e(".ddwcaf-products").length&&e(".ddwcaf-products").select2({ajax:{method:"post",url:ddwcafAdminObject.ajax.ajaxUrl,dataType:"json",delay:250,data:function(e){return{query:e.term,action:"ddwcaf_get_products_list",nonce:ddwcafAdminObject.ajax.ajaxNonce}},processResults:function(e){var t=[];return null!=e&&null!=e&&e.forEach((function(e){t.push({id:e.ID,text:e.title})})),{results:t}},cache:!0},multiple:e(void 0).attr("multiple"),minimumInputLength:1,language:{inputTooShort:function(e){return"".concat(ddwcafAdminObject.i18n.pleaseEnter," ").concat(e.minimum-e.input.length," ").concat(ddwcafAdminObject.i18n.moreCharacter)},noResults:function(){return ddwcafAdminObject.i18n.noResult}}}),e(".ddwcaf-categories").length&&e(".ddwcaf-categories").select2({ajax:{method:"post",url:ddwcafAdminObject.ajax.ajaxUrl,dataType:"json",delay:250,data:function(e){return{query:e.term,action:"ddwcaf_get_categories_list",nonce:ddwcafAdminObject.ajax.ajaxNonce}},processResults:function(e){var t=[],n=e.categories;return null!=n&&null!=n&&n.forEach((function(e){t.push({id:e.term_id,text:e.name})})),{results:t}},cache:!0},multiple:e(void 0).attr("multiple"),minimumInputLength:1,language:{inputTooShort:function(e){return"".concat(ddwcafAdminObject.i18n.pleaseEnter," ").concat(e.minimum-e.input.length," ").concat(ddwcafAdminObject.i18n.moreCharacter)},noResults:function(){return ddwcafAdminObject.i18n.noResult}}}),e(".ddwcaf-select2").length&&e(".ddwcaf-select2").select2(),e(".ddwcaf-affiliate").length&&e(".ddwcaf-affiliate").select2({ajax:{method:"post",url:ddwcafAdminObject.ajax.ajaxUrl,dataType:"json",delay:250,data:function(e){return{query:e.term,action:"ddwcaf_get_affiliates_list",nonce:ddwcafAdminObject.ajax.ajaxNonce}},processResults:function(e){var t=[];return e.success&&null!=e.users&&null!=e.users&&e.users.length&&e.users.forEach((function(e){t.push({id:e.ID,text:"(#".concat(e.ID,") ").concat(e.user_login," <").concat(e.user_email,">")})})),{results:t}},cache:!0},width:e("#from-date").length?"25%":"50%",multiple:e(void 0).attr("multiple"),minimumInputLength:1,language:{inputTooShort:function(e){return"".concat(ddwcafAdminObject.i18n.pleaseEnter," ").concat(e.minimum-e.input.length," ").concat(ddwcafAdminObject.i18n.moreCharacter)},noResults:function(){return ddwcafAdminObject.i18n.noResult}}});var t=e("#ddwcaf-type");if(t.length){var n=function(e){document.querySelector("#ddwcaf-options").closest("tr").style.display="select"===e||"radio"===e?"table-row":"none"};n(t.val()),t.on("change",(function(e){n(e.target.value)}))}document.querySelectorAll(".ddwcaf-editor").length&&tinymce.init({selector:".ddwcaf-editor",height:160,menubar:!1,plugins:["textcolor","colorpicker","link","lists","hr","media","charmap","image"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter | alignright alignjustify | bullist numlist outdent indent | hr |  styleselect | link forecolor | charmap removeformat | image",content_style:"body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",urlconverter_callback:function(e,t,n,a){return e}});var a=e("#ddwcaf-withdrawal-type");if(a.length){var c=function(e){document.querySelector("#ddwcaf-withdrawal-day").closest("tr").style.display="automatically_on_day"===e?"table-row":"none"};c(a.val()),a.on("change",(function(e){c(e.target.value)}))}}))})();for(var c in a)this[c]=a[c];a.__esModule&&Object.defineProperty(this,"__esModule",{value:!0})})();