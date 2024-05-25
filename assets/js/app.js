document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const navbar = document.querySelector(".navbar");

    if (menuIcon && navbar) {
        menuIcon.addEventListener("click", function() {
            navbar.classList.toggle("translate-x-0");
            navbar.classList.toggle("-translate-x-full");
        });
    }

    const closeBtn = document.querySelector(".close-btn");
    if (closeBtn) {
        closeBtn.addEventListener("click", function() {
            navbar.classList.toggle("translate-x-0");
            navbar.classList.toggle("-translate-x-full");
        });
    }

    // Initialize highlight.js
    if (window.hljs) {
        hljs.highlightAll();
    }

    // Load the navbar dynamically
    fetch('../navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;
            }
        });
});
