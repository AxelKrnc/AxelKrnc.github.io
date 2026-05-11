
const buttons = document.querySelectorAll('[data-lang-button]');
const blocks = document.querySelectorAll('[data-lang]');

function setLanguage(lang) {
    localStorage.setItem('language', lang);

    blocks.forEach(block => {
        block.classList.toggle('hidden', block.dataset.lang !== lang);
    });

    buttons.forEach(button => {
        button.classList.toggle('active', button.dataset.langButton === lang);
    });
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        setLanguage(button.dataset.langButton);
    });
});

setLanguage(localStorage.getItem('language') || 'en');
