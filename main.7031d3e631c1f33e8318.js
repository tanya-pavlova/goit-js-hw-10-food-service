(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(e,t,c){},QfWi:function(e,t,c){"use strict";c.r(t);c("L1EO");var o={bodyRef:document.querySelector("body"),themeSwitchRef:document.querySelector("#theme-switch-toggle")},s="light-theme",d="dark-theme";localStorage.getItem("current-theme")===d&&(o.themeSwitchRef.checked=!0,o.bodyRef.classList.add(d),o.bodyRef.classList.remove(s)),o.themeSwitchRef.addEventListener("change",(function(){o.themeSwitchRef.checked?(o.bodyRef.classList.add(d),o.bodyRef.classList.remove(s),localStorage.setItem("current-theme",d)):(o.bodyRef.classList.add(s),o.bodyRef.classList.remove(d),localStorage.setItem("current-theme",s))})),console.log("ПроВерка")}},[["QfWi",1]]]);
//# sourceMappingURL=main.7031d3e631c1f33e8318.js.map