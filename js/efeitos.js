const animar = document.querySelectorAll('.animar');

function animateAnimar() {
const windowHeight = window.innerHeight;

    animar.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight) {
        element.classList.add('visible');
        } else {
        element.classList.remove('visible');
        }
    });
}

animateAnimar(); // Animar no carregamento da página

window.addEventListener('scroll', animateAnimar); // Animar quando o usuário rola a página

window.addEventListener('resize', animateAnimar); // Atualizar informações de posição dos elementos quando a janela é redimensionada

/* FUNÇÃO DROPDOWN MENU NAVBAR*/

function dropdown() {
    document.getElementById("dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.link-navbar')) {
    var myDropdown = document.getElementById("dropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-icon");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    menuIcon.classList.toggle('open');
});