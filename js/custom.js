window.addEventListener("load", function() {
    window.addEventListener("scroll", function() {
        let navbar = document.getElementById("navbarCustom");
        let menuItems = navbar.getElementsByClassName("menu-item");
        let btnMain = document.querySelectorAll('.btn-main');

        let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary-color').trim();

        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "white";

            for (let item of menuItems) {
                item.style.color = primaryColor;
            }

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
        } else {
            navbar.style.backgroundColor = primaryColor;

            for (let item of menuItems) {
                item.style.color = "white";
            }

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
        }
    });
});
