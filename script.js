//hiding navbar
let prevScrollPos = window.scrollY;

window.onscroll = () => {
    let navBar = document.querySelector('.nav-bar');
    let currentScrollPos = window.scrollY;
    if(prevScrollPos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-100px"
    }
    prevScrollPos = currentScrollPos;
}