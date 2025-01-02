document.addEventListener('DOMContentLoaded', function() {

    // Smooth scrolling for navbar links
    const navbarLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navbarLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70, // offset for navbar height
                behavior: 'smooth'
            });
        });
    });

    // Image hover effect for ministries images
    const ministryImages = document.querySelectorAll('.ministries-section .card-img-top');
    ministryImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });
        image.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Image flip effect for hero images
    const flipImages = document.querySelectorAll('.flip-image');
    flipImages.forEach(image => {
        image.addEventListener('mouseover', function() {
            image.style.animation = 'flip 12s infinite';
        });
        image.addEventListener('mouseout', function() {
            image.style.animation = ''; // Reset flip animation
        });
    });

    // Optional: Add fade-in effect for sections when scrolled into view
    const sections = document.querySelectorAll('section');
    const options = {
        root: null, // viewport
        threshold: 0.1 // When 10% of the section is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});
