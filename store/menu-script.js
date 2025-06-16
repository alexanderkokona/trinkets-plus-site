document.addEventListener("DOMContentLoaded", () => {
    // Optional: dynamically build menu
    const navLinks = [
        { text: "Home", href: "home/index.html" },
        { text: "Shop", href: "shop/index.html" },
        { text: "About", href: "about/index.html" },
        { text: "Contact", href: "contact/index.html" }
    ];

    const menuContainer = document.getElementById("menu");
    if (menuContainer && navLinks.length > 0) {
        navLinks.forEach(link => {
            const a = document.createElement("a");
            a.textContent = link.text;
            a.href = link.href;
            menuContainer.appendChild(a);
        });
    }

    // Menu toggle logic
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    if (menuButton && menu) {
        menuButton.addEventListener("click", () => {
            menu.classList.toggle("menu-visible");
        });
    }
});