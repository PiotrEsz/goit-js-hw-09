const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let r=null;e.setAttribute("disabled",""),t.addEventListener("click",(()=>{r=setInterval((()=>{document.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3),btnStart.setAttribute("disabled",""),btnStop.removeAttribute("disabled")})),e.addEventListener("click",(()=>{clearInterval(r),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));
//# sourceMappingURL=01-color-switcher.075ef156.js.map