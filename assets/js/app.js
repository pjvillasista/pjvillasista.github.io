document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const closeBtn = document.querySelector(".close-btn");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.add("translate-x-0");
        navbar.classList.remove("-translate-x-full");
    });

    closeBtn.addEventListener("click", function() {
        navbar.classList.add("-translate-x-full");
        navbar.classList.remove("translate-x-0");
    });
});
