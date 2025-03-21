document.addEventListener("DOMContentLoaded", function () {
    // Анимация кнопки при наведении
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('mouseenter', () => {
        ctaButton.style.transform = 'scale(1.1)';
    });
    ctaButton.addEventListener('mouseleave', () => {
        ctaButton.style.transform = 'scale(1)';
    });

    // Плавная прокрутка к элементам страницы
    const links = document.querySelectorAll('a[href^="#"]');
    for (let link of links) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // Анимация появления элементов на экране (когда они появляются в поле зрения)
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', () => {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            if (sectionTop < window.innerHeight && sectionBottom > 0) {
                section.classList.add('in-view');
            } else {
                section.classList.remove('in-view');
            }
        });
    });
});
