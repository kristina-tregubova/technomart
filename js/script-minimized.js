var isStorageSupport=!0,storage="";try{storage=localStorage.getItem("login")}catch(a){isStorageSupport=!1}var popup=document.querySelector(".pop-up"),form=popup.querySelector("form");document.body.addEventListener("click",a=>{var b=a.target.closest(".open-modal");if(b){a.preventDefault();var c=b.dataset.modal;openModal(c)}}),document.body.addEventListener("click",a=>{var b=a.target.closest(".pop-up__close");if(b){a.preventDefault();var c=a.target.closest(".pop-up");closeModal(c)}}),window.addEventListener("keydown",function(a){27===a.keyCode&&(a.preventDefault(),popup.classList.contains("modal-bounce-open")&&(popup.classList.remove("modal-bounce-open"),popup.classList.remove("modal-shake-error")))}),form&&form.addEventListener("submit",function(a){var b=popup.querySelector("[name='name']"),c=popup.querySelector("[name='email']"),d=popup.querySelector("[name='email-text']");b.value&&c.value&&d.value?isStorageSupport&&(localStorage.setItem("email",c.value),localStorage.setItem("name",b.value)):(a.preventDefault(),popup.classList.remove("modal-shake-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-shake-error"))});var openModal=a=>{document.querySelector(`.${a}`).classList.add("modal-bounce-open")},closeModal=a=>{a.classList.remove("modal-bounce-open"),a.classList.remove("modal-shake-error")};document.querySelectorAll(".tab-slider__tab-controls-btn").forEach(function(a){a.addEventListener("mouseover",a=>{var b=a.currentTarget;if(b){var c=b.dataset.tabContent;openService(a,c)}})});var openService=(a,b)=>{var c,d,e;for(d=document.querySelectorAll(".tab-slider__tabs li"),c=0;c<d.length;c++)d[c].style.display="none";for(e=document.querySelectorAll(".tab-slider__tab-controls-btn"),c=0;c<e.length;c++)e[c].className=e[c].className.replace(" active","");document.querySelector("."+b).style.display="block",a.currentTarget.className+=" active"};
