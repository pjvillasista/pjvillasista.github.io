document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.querySelector(".menu-icon");
    const closeBtn = document.querySelector(".close-btn");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function() {
        navbar.style.transform = "translateX(0)";
    });

    closeBtn.addEventListener("click", function() {
        navbar.style.transform = "translateX(-250px)";
    });
});
