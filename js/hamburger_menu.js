document.getElementById("trigger").onclick = function() {open()};

function open() {
    document.getElementById("menu").classList.toggle("show");
    document.getElementById("header-navigation-right").classList.toggle("header-navigation-hamburger");
    document.getElementById("trigger").classList.toggle("cross");
}

