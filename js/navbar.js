document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        // Ajusta el valor '100' si necesitas que el cambio ocurra después de un scroll más largo
        if (window.scrollY > 100) { 
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 100) { // Puedes ajustar este valor
        document.querySelector('.nav-desvanecible').style.opacity = "0";
    } else {
        document.querySelector('.nav-desvanecible').style.opacity = "1";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        // Alternar la visibilidad del menú
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
        }
    });
});