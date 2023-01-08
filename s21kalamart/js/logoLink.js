function logoLink() {
    const main = document.querySelector("main");
    const logo = document.querySelector("#main-logo");
    
    logo.addEventListener("click", function() {
        window.scrollTo(0,0);
    });
}

logoLink();