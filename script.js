document.addEventListener('DOMContentLoaded', function() {
    const headerLinks = document.querySelectorAll('.header--link');
    const sections = document.querySelectorAll('section');
    
    headerLinks.forEach((link, index) => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            sections[index].scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Existing autotyper code
    var typed = new Typed('#sectionOneAutotyperAutotyper', {
        strings: ['Inspire', 'Empower', 'Build'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true
    });
});
