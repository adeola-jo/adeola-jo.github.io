/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')



// document.addEventListener('DOMContentLoaded', () => {
//     const links = document.querySelectorAll('a');

//     links.forEach(link => {
//         link.addEventListener('click', (event) => {
//             event.preventDefault();
//             const href = link.getAttribute('href');

//             document.body.classList.add('fade-out');

//             setTimeout(() => {
//                 window.location.href = href;
//             }, 500); // Match the duration of the CSS transition
//         });
//     });

//     document.body.classList.add('fade-in');
// });


// document.querySelector('.smooth-transition').addEventListener('click', function(event) {
//     event.preventDefault();
//     document.body.classList.add('fade-out');
//     const targetUrl = this.getAttribute('href');
//     setTimeout(function() {
//         window.location.href = targetUrl;
//     }, 500);
// });

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className
    
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) => {
    el.addEventListener('click', toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)
        
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')
        
        tabs.forEach(tab => {
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
})




// --------------------- THE NEW PORTFOLIO DESIGN EDIT SECTION ------------------
/*==================== PORTFOLIO TABS ====================*/
// document.addEventListener('DOMContentLoaded', function () {
//     const tabs = document.querySelectorAll('.portfolio__tab');
//     const contents = document.querySelectorAll('.portfolio__content');
  
//     tabs.forEach(tab => {
//       tab.addEventListener('click', function () {
//         // Remove active class from all tabs
//         tabs.forEach(t => t.classList.remove('portfolio__tab--active'));
//         // Add active class to the clicked tab
//         tab.classList.add('portfolio__tab--active');
  
//         // Hide all contents
//         contents.forEach(content => content.classList.remove('active'));
//         contents.forEach(content => content.classList.add('hidden'));
  
//         // Show the targeted content
//         const target = document.querySelector(tab.getAttribute('data-target'));
//         target.classList.add('active');
//         target.classList.remove('hidden');
//       });
//     });
//   });
  


//   document.querySelectorAll('.tab').forEach(tab => {
//     tab.addEventListener('click', function() {
//       document.querySelector('.tab--active').classList.remove('tab--active');
//       this.classList.add('tab--active');
//     });
//   });


  function showContent(contentId) {
    // Hide all content divs
    document.querySelectorAll('.toggle-content').forEach(content => {
        content.classList.remove('tab--active');
    });

    // Show the selected content
    document.getElementById(contentId).classList.add('tab--active');
}

// Show the first content by default
document.addEventListener('DOMContentLoaded', function() {
    showContent('cv-projects');
});




// ======================  TRANSITION =========================


/*==================== PORTFOLIO TABS ====================*/
// const portfolioTabs = document.querySelectorAll('.portfolio__tab');
// const portfolioContents = document.querySelectorAll('.portfolio__content');

// portfolioTabs.forEach(tab => {
//     tab.addEventListener('click', () => {
//         const target = document.querySelector(tab.dataset.target);

//         portfolioContents.forEach(content => {
//             content.classList.remove('portfolio__content--active');
//         });

//         portfolioTabs.forEach(tab => {
//             tab.classList.remove('portfolio__tab--active');
//         });

//         target.classList.add('portfolio__content--active');
//         tab.classList.add('portfolio__tab--active');
//     });
// });


/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        568: {
            slidesPerView: 2,
        },
    }
})


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    let scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})