let toggleOpen = document.querySelector('.toggle-open');

let toggleClose = document.querySelector('.toggle-close');
let modalBg = document.querySelector('.modal-bg');

const mediaQueryTablet = '(min-width: 768px)';
const mediaQueryListTablet = window.matchMedia(mediaQueryTablet);

const mediaQueryMobile = '(max-width: 767px)';
const mediaQueryListMobile = window.matchMedia(mediaQueryMobile);

mediaQueryListTablet.addEventListener('change', event => {
  if (event.matches) {
    toggleOpen.style.display = "none";
    toggleClose.style.display = "none";
  } 
});

mediaQueryListMobile.addEventListener('change', event => {
    if (event.matches) {
      toggleOpen.addEventListener('click', function(){
    modalBg.classList.toggle("bg-show");

    toggleOpen.style.display = "none";
    toggleClose.style.display = "block";
    
});

toggleClose.addEventListener('click', function(){
    modalBg.classList.remove("bg-show");

    toggleOpen.style.display = "block";
    toggleClose.style.display = "none";
});
    } 
  });
  







    