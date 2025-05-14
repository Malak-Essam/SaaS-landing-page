
document.addEventListener("DOMContentLoaded", () => {
    // FAQ
    const faqContent = document.querySelector('.faq-content');
    faqContent.addEventListener('click', (e) => {
       const groupHeader = e.target.closest('.faq-group-header');
       if(!groupHeader) return;

       const group = groupHeader.parentElement;
       const groupBody = group.querySelector('.faq-group-body');
       const icon = groupHeader.querySelector('i');
        // toggle icon
        icon.classList.toggle('fa-plus')
        icon.classList.toggle('fa-minus')
        // toggle visability of body
        groupBody.classList.toggle('open')
    });
    // mobile menu
    const hamburgerButton = document.querySelector('.hamburger-button');
    hamburgerButton.addEventListener('click', (e) => {
        //toggle active mobile menu
        const hamburgerMenu = document.querySelector('.mobile-menu')
        hamburgerMenu.classList.toggle('active')
    });
});