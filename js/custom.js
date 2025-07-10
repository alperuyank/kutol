window.addEventListener("load", function () {
    window.addEventListener("scroll", function () {
        let navbar = document.getElementById("navbarCustom");
        let menuItems = navbar.getElementsByClassName("menu-item");
        let btnMain = document.querySelectorAll('.btn-main');
        let hamburger = document.querySelector('#menu-btn');

        let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

        // Scroll sırasında hamburger stilini sıfırla (mobil bug fix)
        if (hamburger) {
            hamburger.style.backgroundColor = "transparent";
            hamburger.style.borderRadius = "0";
        }

        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "white";

            for (let item of menuItems) {
                item.style.color = primaryColor;
            }

            btnMain.forEach(function (button) {
                button.style.backgroundColor = "white";
                button.style.color = primaryColor;
                button.style.border = "1px solid " + primaryColor;

                button.onmouseover = function () {
                    button.style.backgroundColor = primaryColor;
                    button.style.color = "white";
                };

                button.onmouseout = function () {
                    button.style.backgroundColor = "white";
                    button.style.color = primaryColor;
                };
            });

            if (hamburger) {
                hamburger.style.color = primaryColor;
                hamburger.onmouseover = function () {
                    hamburger.style.color = "white";
                    hamburger.style.backgroundColor = primaryColor;
                    hamburger.style.borderRadius = '50%';
                };
                hamburger.onmouseout = function () {
                    hamburger.style.color = primaryColor;
                    hamburger.style.backgroundColor = "transparent";
                    hamburger.style.borderRadius = '0';
                };
            }

        } else {
            navbar.style.backgroundColor = primaryColor;

            for (let item of menuItems) {
                item.style.color = "white";
            }

            btnMain.forEach(function (button) {
                button.style.backgroundColor = primaryColor;
                button.style.color = "white";
                button.style.border = "none";

                button.onmouseover = function () {
                    button.style.backgroundColor = "white";
                    button.style.color = primaryColor;
                };

                button.onmouseout = function () {
                    button.style.backgroundColor = primaryColor;
                    button.style.color = "white";
                };
            });

            if (hamburger) {
                hamburger.style.color = "white";
                hamburger.onmouseover = function () {
                    hamburger.style.color = primaryColor;
                    hamburger.style.backgroundColor = "white";
                    hamburger.style.borderRadius = '50%';
                };
                hamburger.onmouseout = function () {
                    hamburger.style.color = "white";
                    hamburger.style.backgroundColor = "transparent";
                    hamburger.style.borderRadius = '0';
                };
            }
        }
    });
});
