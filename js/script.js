let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.nav__navbar')
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
  }
  // let headerLinks = document.querySelector('header')
  let section = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll(' .nav__list-link ');
  window.onscroll = () =>{
  
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
  
    section.forEach(sec =>{
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');
  
      if(top >= offset && top < offset + height){
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('.nav__list-link[href*='+id+']').classList.add('active');
        });
      };
  
    });
  
  };

let swiperPortfolio = new Swiper(".portfolio__blocks " , {
    cssMode: true,
    loop: true,
    
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

//   console.log(section);
// console.log(navLinks);

  // console.log(navbar);
  // console.log(menu);