function l(){window._selectHandlerInitialized||(document.addEventListener("click",n=>{const t=n.target.closest(".tailuno-select");if(!t){document.querySelectorAll('.tailuno-select[data-open="true"]').forEach(e=>e.dataset.open="false");return}const a=n.target.closest("button"),o=n.target.closest(".option-item");if(a){const e=t.dataset.open==="true";t.dataset.open=!e}else o&&(t.querySelectorAll(".option-item").forEach(e=>{e.removeAttribute("data-selected")}),o.setAttribute("data-selected","true"),t.querySelector("button span").textContent=o.textContent,t.dataset.open="false")}),window._selectHandlerInitialized=!0)}l();
