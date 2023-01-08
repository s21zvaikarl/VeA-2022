function ddButton() {
    const button = document.querySelector("#dd-button");
    const bonesy = document.querySelector("#bonesy-svg");
    const mouth = document.querySelector("#mouth");
    const menu  = document.querySelector("#dd-menu");
    let check = false;

    button.addEventListener("click", function() {
        menu.style.transition = "transform 0.5s ease";
        if(check == false) {
            mouth.style.transform = "scale(1)";
            bonesy.style.transform = "rotate(10deg)";
            menu.style.transform = "translateY(0vh)";
            check = true;
        } else {
            mouth.style.transform = "scale(0.3)";
            bonesy.style.transform = "rotate(0deg)";
            menu.style.transform = "translateY(-90vh)";
            check = false;
        }
    });

    window.addEventListener("resize", function() {
        let sar = (getComputedStyle(document.documentElement).getPropertyValue("--sar"));
        let str = "calc(2vh + " + sar + ")";
        button.style.right = str;
    });

    let offClick = document.addEventListener("click", function(offClick) {
        if (offClick.target.className.baseVal != "bonesy-click") {
            mouth.style.transform = "scale(0.3)";
            bonesy.style.transform = "rotate(0deg)";
            menu.style.transform = "translateY(-90vh)";
            check = false;
        } 
    });
}

ddButton();