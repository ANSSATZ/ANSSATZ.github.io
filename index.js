function onFocusin(ring) {
    ring.classList.add('text-input--focus-ring--active');
}

function onFocusout(ring) {
    ring.classList.remove('text-input--focus-ring--active');
}

function onOpenSideMenu(dialog) {
    ring.classList.remove('text-input--focus-ring--active');
}

document.addEventListener('DOMContentLoaded', () => {
    // Find text-inputs
    const inputFocusRingContainers = document.querySelectorAll('.text-input--focus-ring-container');
    


    inputFocusRingContainers.forEach((ringContainer) => {
        const ring = document.createElement('div');
        ring.classList.add('text-input--focus-ring');

        ringContainer.appendChild(ring);

        ringContainer.addEventListener('focusin', () => onFocusin(ring));
        ringContainer.addEventListener('focusout', () => onFocusout(ring));
    });

    const contactForm = document.querySelector('#contact-form');

    if (contactForm !== null) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
        });
    }

    const sideMenu = document.querySelector('.side-menu');
    const openSideMenu = document.querySelector('.navigation-menu-link');
    const closeSideMenu = document.querySelector('.side-menu--close');

    openSideMenu.addEventListener('click', () => sideMenu.setAttribute('open', ''));
    closeSideMenu.addEventListener('click', () => sideMenu.removeAttribute('open'));
});
