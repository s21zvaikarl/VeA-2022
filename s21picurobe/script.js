function animateLoader() {
    const loaderWrap = document.getElementById("loader-wrap");
    const loader = document.getElementById("loader");
    const greenRect = document.getElementById("green-rec");
    const svg = document.querySelector('#loader');
    const layer = document.querySelector('#loader-g');
    const width = layer.getBBox().width;
    const height = layer.getBBox().height;
    const x = layer.getBBox().x;
    const y = layer.getBBox().y;
    const viewbox = `${0} ${0} ${width} ${height}`;
    svg.setAttribute('viewBox', viewbox);
    loader.style.opacity = "1";

    greenRect.animate([
        { transform: 'scale(1,0)' },
        { transform: 'scale(1,1)' },
        ], {
        duration: 1000,
        iterations: Infinity,
    });
    setTimeout(() => {
    window.addEventListener('load', function() {
        loaderWrap.remove();
    });
    if (document.readyState == "complete") {
        loaderWrap.remove();
    }}, 1000);
}

function animateLogo() {
    const svg = document.getElementById("logo");
    const div =  document.getElementById("test");
    const topTreeBorder =  document.getElementById("top-tree-border");
    const midTreeBorder =  document.getElementById("mid-tree-border");
    const botTreeBorder =  document.getElementById("bot-tree-border");
    const topTreeFill =  document.getElementById("top-tree-fill");
    const midTreeFill =  document.getElementById("mid-tree-fill");
    const botTreeFill =  document.getElementById("bot-tree-fill");

    svg.addEventListener('mouseenter',() => {

        //TOP
        topTreeBorder.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-20deg) translate(-6px)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(5deg)' },
            { transform: 'rotate(0deg)' },
            ], {
            duration: 700,
            easing: "cubic-bezier(1, 0, 1.0, 1.0)",
        });
        topTreeFill.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-20deg) translate(-6px)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(5deg)' },
            { transform: 'rotate(0deg)' },
            ], {
            duration: 700,
            easing: "cubic-bezier(1, 0, 1.0, 1.0)",
        });

        //MID
        midTreeBorder.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-8deg) translate(-1.5px)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(0deg)' },
            ], {
            duration: 700,
            easing: "cubic-bezier(1, 0, 1.0, 1.0)",
        });
        midTreeFill.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-8deg) translate(-1.5px)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(2deg)' },
            { transform: 'rotate(0deg)' },
            ], {
            duration: 700,
            easing: "cubic-bezier(1, 0, 1.0, 1.0)",
        });

        //BOT
        botTreeBorder.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-4deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(1deg)' },
            { transform: 'rotate(0deg)' },
            ], {
            duration: 700,
            easing: "cubic-bezier(1, 0, 1.0, 1.0)",
        });
        botTreeFill.animate([
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(-4deg)' },
            { transform: 'rotate(0deg)' },
            { transform: 'rotate(1deg)' },
            { transform: 'rotate(0deg)' },
            ], {
            duration: 700,
            easing: "cubic-bezier(1, 0, 1.0, 1.0)",
        });
    })
}

function burger() {
    const ballOne = document.getElementById("ball1");
    const ballTwo =  document.getElementById("ball2");
    const ballThree =  document.getElementById("ball3");
    const metaWrap =  document.getElementById("meta-wrap");
    const burger = document.querySelectorAll(".burger");
    var navMobile =  document.getElementById("mobile-nav");
    const closeAfter = document.querySelectorAll(".close-after-click");
    var check = 1;

    metaWrap.addEventListener('click', function() {
        ballOne.classList.toggle("meta-wrap-click-ball1");
        ballTwo.classList.toggle("meta-wrap-click-ball2");
        ballThree.classList.toggle("meta-wrap-click-ball3");
        
        if (check % 2 == 1) {
            burger.forEach(element => {
                element.style.backgroundColor = "red";
            });
            navMobile.style.transform = 'translateY(0vh)';
        } else {
            burger.forEach(element => {
                element.style.backgroundColor = "black";
            });
            navMobile.style.transform = 'translateY(-90vh)';
        }
        check++;
    })
    window.addEventListener('resize', function() {
        ballOne.classList.remove("meta-wrap-click-ball1");
        ballTwo.classList.remove("meta-wrap-click-ball2");
        ballThree.classList.remove("meta-wrap-click-ball3");
        burger.forEach(element => {
            element.style.backgroundColor = "black";
        });
        navMobile.style.transform = 'translateY(-90vh)';
        check = 1;
        console.log(check);
    })
    window.addEventListener('scroll', function() {
        ballOne.classList.remove("meta-wrap-click-ball1");
        ballTwo.classList.remove("meta-wrap-click-ball2");
        ballThree.classList.remove("meta-wrap-click-ball3");
        burger.forEach(element => {
            element.style.backgroundColor = "black";
        });
        navMobile.style.transform = 'translateY(-90vh)';
        check = 1;
        console.log(check);
    })
    for (let i = 0; i < closeAfter.length; i++) {
        closeAfter[i].addEventListener("click", function() {
            ballOne.classList.remove("meta-wrap-click-ball1");
            ballTwo.classList.remove("meta-wrap-click-ball2");
            ballThree.classList.remove("meta-wrap-click-ball3");
            burger.forEach(element => {
                element.style.backgroundColor = "black";
            });
            navMobile.style.transform = 'translateY(-90vh)';
            check = 1;
        });
    }

}

const copyToClipboard = () => {
    const copyButton = document.querySelectorAll('.copy-button');

    copyButton.forEach(function(copyButton) {
        copyButton.addEventListener('click', () => {
            navigator.clipboard.writeText("talsutakas@gmail.com");
            alert("talsutakas@gmail.com - copied to clipboard");
        }); 
    }); 
}

function logo() {
    const svg = document.querySelector('#logo');
    const layer = document.querySelector('#logo-g');
    const width = layer.getBBox().width;
    const height = layer.getBBox().height;
    const x = layer.getBBox().x;
    const y = layer.getBBox().y;
    const viewbox = `${0} ${0} ${width + 2} ${height + 1}`;
    svg.setAttribute('viewBox', viewbox);
}

function nav() {
    const icon = document.querySelectorAll(".mobile-nav-icon");
    const dropdown = document.querySelectorAll(".dropdown-wrap");

    for (let i = 0; i < 3; i++) {
        icon[i].addEventListener('click', function() {
            if (icon[i].style.transform == "scale(1)" || icon[i].style.transform == "") {
                dropdown[i].style.display = "block";
                icon[i].style.transform = "scale(-1)";
                for (let j = 0; j < 3; j++) {
                    if (j != i) {
                        icon[j].style.transform = "scale(1)";
                        dropdown[j].style.display = "none";
                    }
                }
            } else {
                dropdown[i].style.display= "none";
                icon[i].style.transform = "scale(1)";
            }
        })
    }

    offClick = document.addEventListener('click', function(offClick) {
        console.log(offClick.target.className);
        if (offClick.target.className != "mobile-nav-icon") {
            for (let i = 0; i < 3; i++) {
                icon[i].style.transform = "scale(1)";
                dropdown[i].style.display = "none";
            }
        }
    })
}

function routesInfo() {
    let scale = [1,1,1,1];
    let colors = ["#6ebadc","#6ebadc","#00e475","#ff9500"];

    container = document.querySelectorAll(".route-wrap");
    dropdownButton = document.querySelectorAll(".route-wrap-dropdown");
    info = document.querySelectorAll(".route-wrap-info");
    sport = document.querySelectorAll(".route-sport-type");

    for (let i = 0; i < 4; i++) {
        dropdownButton[i].addEventListener("click", function() {
            if (scale[i] == 1) {
                dropdownButton[i].style.transform = "scale(-1)";
                scale[i] = -1;
                info[i].style.transform = "scale(1)";
                sport[i].style.transform = "scale(0)";
                info[i].style.backgroundColor = colors[i];
            } else {
                dropdownButton[i].style.transform = "scale(1)";
                scale[i] = 1;
                info[i].style.transform = "scale(0)";
                sport[i].style.transform = "scale(1)";
            }
        })
        container[i].addEventListener("mouseleave", function(){
            dropdownButton[i].style.transform = "scale(1)";
            scale[i] = 1;
            info[i].style.transform = "scale(0)";
            sport[i].style.transform = "scale(1)";
        })
    }
}

animateLoader();
animateLogo();
burger();
copyToClipboard();
logo();
nav();
routesInfo();