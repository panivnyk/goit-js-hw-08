!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in t){var a=t[e];delete t[e];var l={id:e,exports:{}};return r[e]=l,a.call(l.exports,l,l.exports),l.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,r){t[e]=r},e.parcelRequired7c6=a);var l=a("1WSnx"),n=document.querySelector(".feedback-form"),o=document.querySelector('input[name="email"]'),s=document.querySelector("textarea"),i="feedback-form-state";n.addEventListener("input",(0,l.throttle)((function(e){var r={email:n.elements.email.value,message:n.elements.message.value};try{localStorage.setItem(i,JSON.stringify(r))}catch(e){console.error("error: ",e.message)}}),500)),n.addEventListener("submit",(function(e){e.preventDefault();var r=e.currentTarget.elements,t=r.email,a=r.message;if(""===t.value||""===a.value)return alert("Check the entered data - all fields must be filled! ");console.log({email:t.value,message:a.value}),e.currentTarget.reset(),localStorage.clear()})),function(){try{var e=JSON.parse(localStorage.getItem(i));null!==e&&(o.value=e.email,s.value=e.message)}catch(e){console.error("error: ",e.message)}}()}();
//# sourceMappingURL=03-feedback.dba72f8e.js.map