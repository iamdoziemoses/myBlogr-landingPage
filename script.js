// SHOW MENU
function showMenu() {
    const toggle = document.getElementById('navToggle');
    const myMenu = document.getElementById('nav-menu');
    const close = document.getElementById('navClose');

    toggle.addEventListener('click', ()=> {
        myMenu.classList.toggle('show-menu');
        toggle.style.display = 'none';
        close.style.display = 'block';
    })

    close.addEventListener('click', ()=> {
        myMenu.classList.toggle('show-menu');
        toggle.style.display = 'block';
        close.style.display = 'none';
    })
}

showMenu();

// SCROLL TO TOP
function scrollToTop() {
    const scrolltop = document.querySelector('#scrollTop');

    if(this.scrollY > 560) {
        scrolltop.classList.add('show-scroll');
    } else {
        scrolltop.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollToTop);

//Change Background header
function scrollHeader() {
    const nav = document.getElementById('nav-container');

    if (this.scrollY >= 200) {
        nav.classList.add('change-header');
    } else {
        nav.classList.remove('change-header');
    }
}

window.addEventListener('scroll', scrollHeader);

// Scroll Reveal Animation
ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});

ScrollReveal().reveal('.section-title-center', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.editor__img, .phones__img', { delay: 500, origin: 'bottom' });
ScrollReveal().reveal('.laptop__img', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.features__data', { delay: 500, origin: 'left' });
ScrollReveal().reveal('.features2__data', { delay: 500, origin: 'right' });
ScrollReveal().reveal(
    '.stateArt__data',
    {
        delay: 500, origin: 'right'
    });