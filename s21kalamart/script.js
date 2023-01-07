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

function logoLink() {
    const main = document.querySelector("main");
    const logo = document.querySelector("#main-logo");
    
    logo.addEventListener("click", function() {
        window.scrollTo(0,0);
    });
}

function loader() {
    const dropDown = document.querySelector("#dd-menu");
    const body = document.querySelector("body");
    const header = document.querySelector("header");
    const ddButton = document.querySelector("#dd-button");
    const logos = document.querySelectorAll(".logo");
    const html = document.querySelector("html");
    const landing = document.querySelector("#landing");
    const main = document.querySelector("main");
    let complete = false;

    if (!complete) {
        html.style.backgroundColor = "black";
        logos[3].style.filter = "invert(100%)";
        header.style.transform = "translateY(46vh)";
        
        

        logos[0].style.filter = "invert(61%) sepia(40%) saturate(5118%) hue-rotate(83deg) brightness(115%) contrast(127%)";
        logos[1].style.filter = "invert(7%) sepia(100%) saturate(7470%) hue-rotate(248deg) brightness(105%) contrast(140%)";
        logos[2].style.filter = "invert(34%) sepia(98%) saturate(7477%) hue-rotate(357deg) brightness(98%) contrast(123%)";

        logos[0].animate([
            {transform: "translateY(0vh)"},
            {transform: "translateY(0.5vh)"},
            {transform: "translateY(0vh)"},
            {transform: "translateY(-0.2vh)"},
            {transform: "translateY(0vh)"}
        ],{
            duration: 1000,
            iterations: Infinity
        })
        logos[1].animate([
            {transform: "translateY(0vh)"},
            {transform: "translateY(-0.5vh)"},
            {transform: "translateY(0vh)"},
            {transform: "translateY(0.5vh)"},
            {transform: "translateY(0vh)"}
        ],{
            duration: 1000,
            iterations: Infinity
        })
        logos[2].animate([
            {transform: "translateX(0.5vh)"},
            {transform: "translateX(0vh)"},
            {transform: "translateX(-0.5vh)"},
            {transform: "translateX(0vh)"},
            {transform: "translateX(0.5vh)"}
        ],{
            duration: 1000,
            iterations: Infinity
        })

        setTimeout(function() {
            if (document.readyState == "complete") {
                for (let i = 0; i < 3; i++) {
                    logos[i].style.display = "none";
                    logos[i].remove();
                }
                header.style.transform = "translateY(0vh)";
                logos[3].animate([
                    {transform: "scale(1)"},
                    {transform: "scale(1.2)"},
                    {transform: "scale(1)"}
                ],{
                    easing: "ease",
                    duration: 500,
                })
                setTimeout(function() {
                    html.style.backgroundColor = "white";
                    logos[3].style.filter = "invert(0%)";
                    logos[3].style.position = "relative";
                    header.style.backgroundColor = "white";
                    ddButton.style.display = "flex";
                    landing.style.display = "flex";
                    main.style.display = "flex";
                    dropDown.style.display = "flex";
                }, 500)
            } else {
                window.addEventListener("load", function() {
                    for (let i = 0; i < 3; i++) {
                        logos[i].style.display = "none";
                        logos[i].remove();
                    }
                    header.style.transform = "translateY(0vh)";
                    logos[3].animate([
                        {transform: "scale(1)"},
                        {transform: "scale(1.2)"},
                        {transform: "scale(1)"}
                    ],{
                        easing: "ease",
                        duration: 500,
                    })
                    setTimeout(function() {
                        html.style.backgroundColor = "white";
                        logos[3].style.filter = "invert(0%)";
                        logos[3].style.position = "relative";
                        header.style.backgroundColor = "white";
                        ddButton.style.display = "flex";
                        landing.style.display = "flex";
                        main.style.display = "flex";
                        dropDown.style.display = "flex";
                    }, 500)
                })
                
            }

        }, 2000);
    }

}

function clickLogo() {
    const logo = document.querySelector("#main-logo");
    logo.addEventListener("click", function() {
        location.href = "";
    })
}

loader();
logoLink();
ddButton();
clickLogo();