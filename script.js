//hiding navbar
let prevScrollPos = window.scrollY;
const navListItem = document.getElementsByClassName("nav-list-item");
const navlist = document.querySelector(".nav-list");
const hamburguerBtn = document.getElementById("hmbgrBtn");
const navListItemArr = Array.from(document.querySelectorAll(".nav-list-item"));

navListItemArr.map((item) => {
    item.addEventListener("mouseover", (e) => {
        e.target.childNodes[0].parentElement.style.color = "black";
    });
});

navListItemArr.map((item) => {
    item.addEventListener("mouseout", (e) => {
        e.target.childNodes[0].parentElement.style.color = "white";
    });
});

addEventListener("scroll", () => {
    let navBar = document.querySelector('.nav-bar');
    let currentScrollPos = window.scrollY;
    if (prevScrollPos > currentScrollPos) {
        prevScrollPos = currentScrollPos;
        return navBar.style.top = "0";
    }
    navBar.style.top = "-130px";
    if (navlist.classList.contains("nav-list-active")) {
        navlist.classList = "nav-list";
    }
    prevScrollPos = currentScrollPos;
});



hamburguerBtn.addEventListener("click", (e) => {
    if (!navlist.classList.contains("nav-list-active")) {
        navlist.classList.add("nav-list-active");
    } else {
        navlist.classList.remove("nav-list-active");
    }
});

function fillSkillContainer() {
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
        div.classList.add("skill-item");
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
            usedTechnologies: ["NodeJS", "Bootstrap", "HTTP", "MySQL"],
            overview: "A system for the adoption of animals. User creation, Animal registering, notifications."
        },
        {
            link: "https://www.npmjs.com/package/poke-searcher",
            title: "poke-search",
            usedTechnologies: ["NodeJS", "HTTP", "CLI", "PokeApi"],
            overview: "A CLI tool to gather pokemon information from the pokeapi rest api using built-in https nodejs module."
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

function fillFindMeContainer() {
    const contactInfo = [
        {
            imgSrc: "icons/logo_github_icon_143196.ico",
            alt: "Ruben's github profile",
            width: "20",
            height: "20",
            link: "https://github.com/quiKieSamus",
            profileName: "Github"
        },
        {
            imgSrc: "icons/logo_linkedin_icon_143191.png",
            alt: "Ruben's linkedin profile",
            width: "20",
            height: "20",
            link: "https://www.linkedin.com/in/rub%C3%A9n-gonz%C3%A1lez-godoy-a093a31a7/",
            profileName: "Linkedin"
        },
        {
            imgSrc: "icons/discord.png",
            alt: "Ruben's discord profile",
            width: "20",
            height: "20",
            link: "https://discord.com/users/944392232029552730",
            profileName: "Discord"
        },
        {
            imgSrc: "icons/twitter.png",
            alt: "Ruben's twitter profile",
            width: "20",
            height: "20",
            link: "https://twitter.com/quiKieSamus",
            profileName: "Twitter"
        },
        {
            imgSrc: "icons/gmail.ico",
            alt: "Ruben's gmail address",
            width: "20",
            height: "20",
            link: "",
            profileName: "Gmail"
        },
        {
            imgSrc: "icons/tlg.png",
            alt: "Ruben's telegram",
            width: "20",
            height: "20",
            link: "https://t.me/reyarepa",
            profileName: "Telegram"
        },
    ];

    function createContactInfo(imgSrc, alt, width, height, link, profileName) {
        const div = document.createElement("DIV");
        const img = document.createElement("IMG");
        const linkEl = document.createElement("A");

        img.src = `./${imgSrc}`;
        img.alt = alt;
        img.width = width;
        img.height = height;
        linkEl.href = link;
        linkEl.textContent = profileName;
        linkEl.style.textDecoration = "none";
        linkEl.style.color = "white";

        div.appendChild(img);
        div.appendChild(linkEl);
        return div;
    }

    const container = document.querySelector(".contact-container");
    contactInfo.map((item) => {
        container.appendChild(createContactInfo(item.imgSrc, item.alt, item.width, item.height, item.link, item.profileName));
    });
}

fillSkillContainer();
fillProjectContainer();
fillFindMeContainer();