document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");

    if (menuIcon && mobileMenu) {
        menuIcon.addEventListener("click", function() {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Initialize highlight.js
    if (window.hljs) {
        hljs.highlightAll();
    }

    // Load the navbar — use absolute path so it works from both root and /projects/
    fetch('/navbar.html')
        .then(response => response.text())
        .then(data => {
            const navbarPlaceholder = document.getElementById('navbar-placeholder');
            if (navbarPlaceholder) {
                navbarPlaceholder.innerHTML = data;
            }
        })
        .catch(() => {
            // fallback: try relative path (local file open)
            const depth = window.location.pathname.split('/').length - 2;
            const prefix = depth > 0 ? '../'.repeat(depth) : './';
            fetch(prefix + 'navbar.html')
                .then(r => r.text())
                .then(data => {
                    const p = document.getElementById('navbar-placeholder');
                    if (p) p.innerHTML = data;
                });
        });
});
