window.addEventListener("load", function() {
    window.addEventListener("scroll", function() {
        let navbar = document.getElementById("navbarCustom");
        let menuItems = navbar.getElementsByClassName("menu-item");
        let btnMain = document.querySelectorAll('.btn-main');
        let hamburger = document.querySelector('#menu-btn');

        let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

        if (window.scrollY > 50) {
            // Navbar background
            navbar.style.backgroundColor = "white";

            // Menu items text color
            for (let item of menuItems) {
                item.style.color = primaryColor;
            }

            // Buttons
            btnMain.forEach(function(button) {
                button.style.backgroundColor = "white";
                button.style.color = primaryColor;
                button.style.border = "1px solid " + primaryColor;

                button.onmouseover = function() {
                    button.style.backgroundColor = primaryColor;
                    button.style.color = "white";
                };

                button.onmouseout = function() {
                    button.style.backgroundColor = "white";
                    button.style.color = primaryColor;
                };
            });

            // Hamburger menu button
            if (hamburger) {
                hamburger.style.color = primaryColor;
                hamburger.onmouseover = function() {
                    hamburger.style.color = "white";
                    hamburger.style.backgroundColor = primaryColor;
                };
                hamburger.onmouseout = function() {
                    hamburger.style.color = primaryColor;
                    hamburger.style.backgroundColor = "transparent";
                };
            }

        } else {
            // Navbar background
            navbar.style.backgroundColor = primaryColor;

            // Menu items text color
            for (let item of menuItems) {
                item.style.color = "white";
            }

            // Buttons
            btnMain.forEach(function(button) {
                button.style.backgroundColor = primaryColor;
                button.style.color = "white";
                button.style.border = "none";

                button.onmouseover = function() {
                    button.style.backgroundColor = "white";
                    button.style.color = primaryColor;
                };

                button.onmouseout = function() {
                    button.style.backgroundColor = primaryColor;
                    button.style.color = "white";
                };
            });

            // Hamburger menu button
            if (hamburger) {
                hamburger.style.color = "white";
                hamburger.onmouseover = function() {
                    hamburger.style.color = primaryColor;
                    hamburger.style.backgroundColor = "white";
                };
                hamburger.onmouseout = function() {
                    hamburger.style.color = "white";
                    hamburger.style.backgroundColor = "transparent";
                };
            }
        }
    });
});
