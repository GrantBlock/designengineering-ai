/* Prototype only: which paid extensions this person has. Design and Builder rows are hidden in the sidebar until bought.
   State is kept in localStorage under de-ext; Settings, Billing, Extensions changes it. */
(function(){
 var K='de-ext';
 function get(){try{var v=JSON.parse(localStorage.getItem(K));if(v&&typeof v==='object')return v}catch(e){}return {design:true,builder:true}}
 function apply(){var s=get();[].forEach.call(document.querySelectorAll('.sbnav .sbrow'),function(r){var l=r.querySelector('.sblab');if(!l)return;var t=l.textContent.trim();if(t==='Design')r.style.display=s.design?'':'none';if(t==='Builder')r.style.display=s.builder?'':'none'})}
 window.DEExt={get:get,set:function(k,v){var s=get();s[k]=v;try{localStorage.setItem(K,JSON.stringify(s))}catch(e){}apply()}};
 apply();document.addEventListener('DOMContentLoaded',apply);
 if(window.MutationObserver){var t=0;new MutationObserver(function(){clearTimeout(t);t=setTimeout(apply,30)}).observe(document.documentElement,{childList:true,subtree:true})}
})();
