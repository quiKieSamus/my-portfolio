//hiding navbar
let prevScrollPos = window.scrollY;
const navListItem = document.getElementsByClassName("nav-list-item");
const navlist = document.querySelector(".nav-list");
const hamburguerBtn = document.getElementById("hmbgrBtn");

this.addEventListener("scroll", () => {
    let navBar = document.querySelector('.nav-bar');
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        navBar.style.top = "0";
    } else {
        navBar.style.top = "-130px"
        if (navlist.classList[0] === "nav-list-active") {
            navlist.classList = "nav-list";
        }
    }
    prevScrollPos = currentScrollPos;
});



hamburguerBtn.addEventListener("click", () => {
    if (navlist.classList[0] === "nav-list-active") {
        navlist.classList = "nav-list";
    } else {
        navlist.classList = "nav-list-active";
    }

});

function createSkill(iconSrc, name) {
    const div = document.createElement("DIV");
    const icon = document.createElement("I");
    const title = document.createElement("H3");
    div.appendChild(icon);
    div.appendChild(title);
}