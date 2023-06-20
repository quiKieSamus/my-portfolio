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

function fillSkillContainer () {
    function createSkill(iconSrc, name) {
        const div = document.createElement("DIV");
        const icon = document.createElement("I");
        const title = document.createElement("H3");
        if (Array.isArray(iconSrc.match(/.\/icons\//g))) {
            const image = document.createElement("img");
            image.classList.add("icon")
            image.src = iconSrc;
            div.appendChild(image);
    
        } else {
            icon.classList.add("icon", `fa-brands`, `${iconSrc}`);
            div.appendChild(icon);
        }
        title.textContent = name;
        div.appendChild(title);
        return div;
    }    
    const container = document.querySelector(".skills-container");
    const skills = [
        {
            iconSrc: "fa-html5",
            name: "HTML5" 
        }, 
        {
            iconSrc: "fa-css3",
            name: "CSS" 
        },
        {
            iconSrc: "fa-js",
            name: "Javascript" 
        },
        {
            iconSrc: "fa-php",
            name: "PHP" 
        },
        {
            iconSrc: "./icons/mysql.svg",
            name: "MYSQL" 
        },
        {
            iconSrc: "fa-bootstrap",
            name: "Bootstrap" 
        },
        {
            iconSrc: "fa-node-js",
            name: "NodeJS" 
        },
        {
            iconSrc: "fa-linux",
            name: "LINUX" 
        },
        {
            iconSrc: "fa-git-alt",
            name: "GIT" 
        },
        {
            iconSrc: "fa-laravel",
            name: "Laravel" 
        },
        {
            iconSrc: "./icons/typescript.svg",
            name: "Typescript" 
        },
        {
            iconSrc: "./icons/aurelia.svg",
            name: "Aurelia" 
        },

    ]

    skills.map((item) => container.appendChild(createSkill(item.iconSrc, item.name)));
}


function fillProjectContainer() {
    function createProject(repoLink, title, usedTechnologies, overview) {
        const link = document.createElement("a");
        const div = document.createElement("DIV");
        const titleEl = document.createElement("H3");
        const technologiesList = document.createElement("OL");
        const overviewEl = document.createElement("P");
    
        link.href = repoLink;
        link.target = "_blank"
        link.classList.add("pro-link");
        link.appendChild(div);
        div.classList.add("pro-item");
        div.appendChild(titleEl);
        div.appendChild(technologiesList);
        div.appendChild(overviewEl);
        titleEl.textContent = title;
        usedTechnologies.map((item) => {
            const listItem = document.createElement("LI");
            listItem.textContent = item;
            technologiesList.appendChild(listItem);
        });
        overviewEl.textContent = overview;
        return link;
    }
    const projects = [
        {
            link: "https://github.com/Landbios/Tesis",
            title: "Animal Adoption System",
            usedTechnologies: ["NodeJS", "Bootstrap", "HTTP", "MYSQL"],
            overview: "A system for the adoption of animals. User creation, Animal registering, notifications."
        },
        {
            link: "https://github.com/quiKieSamus/poke-searcher",
            title: "poke-searcher",
            usedTechnologies: ["NodeJS", "CLI", "PokeApi"],
            overview: "A CLI tool to gather pokemon information from the pokeapi rest api."
        },
        {
            link: "https://github.com/quiKieSamus/grinding-code",
            title: "Codewars kata solutions",
            usedTechnologies: ["Javascript"],
            overview: "These are my solutions to several katas in codewars."
        },
    ];
    const container = document.querySelector(".project-container");
    projects.map((item) => {
        container.appendChild(createProject(item.link, item.title, item.usedTechnologies, item.overview));
    })
}

fillSkillContainer();
fillProjectContainer();