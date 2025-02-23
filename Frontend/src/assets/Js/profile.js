console.log("profile js")


document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".vm-menu");
    const dropdownMenu = document.querySelector(".vm-dropdown");

    if (menuButton && dropdownMenu) {
        menuButton.addEventListener("click", function() {
            dropdownMenu.classList.toggle("show-menu");
        });
    }

    // Use event delegation for dynamically added elements
    document.body.addEventListener("click", function(event) {
        if (event.target.classList.contains("toggle-submenu")) {
            let submenu = event.target.nextElementSibling;
            if (submenu) {
                submenu.classList.toggle("show-menu");
            }
        }
    });
});
