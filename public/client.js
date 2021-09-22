
const menuBtn = document.getElementsByClassName("menu-btn")[0]
const navLinks = document.getElementsByClassName("nav-link")
 console.log(navLinks)

const navLinksarr = [...navLinks]

const menu = document.getElementsByClassName("menu-items")[0]

// Add or remove menu on clicking menu button
menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("active")
   })

// remove menu when nav link is clicked
navLinksarr.forEach(link =>{
    link.addEventListener("click", () =>{
    menu.classList.remove("active")
    })
})


// scroll reveal animations
// ========HEADER SECTION===================
// logo
ScrollReveal().reveal(".logo", {delay:500});
ScrollReveal().reveal(".menu-btn", {delay:500});
// menu-items
ScrollReveal().reveal(".menu-items", {delay:500,easing:"ease-in"});
greetings
ScrollReveal().reveal("#greetings", {delay:300,easing:"ease-in"});
// profession
ScrollReveal().reveal("#profession", {delay:350,easing:"ease-in"});
// profession description
ScrollReveal().reveal("#profession-description", {delay:400,easing:"ease-in"});
// lets talk
ScrollReveal().reveal(".chat-button", {delay:800,easing:"ease-in"});
// header image
ScrollReveal().reveal(".header-image", {delay:800,easing:"ease-in"});


// ========SKILLS SECTION===================
ScrollReveal().reveal(".current-stack", {delay:500,easing:"ease-in"});
ScrollReveal().reveal(".currently-learning", {delay:500,easing:"ease-in"});

// skills
ScrollReveal().reveal(".services >span", {delay:500,easing:"ease-in"});
ScrollReveal().reveal(".service-item:nth-child(1),.service-item:nth-child(2)", {delay:500,easing:"ease-in"});
ScrollReveal().reveal(".service-item:nth-child(3),.service-item:nth-child(4)", {delay:550,easing:"ease-in"});




// ========PROJECTS SECTION===================
ScrollReveal().reveal(".projects-title", {delay:500,easing:"ease-in"});

ScrollReveal().reveal(".project-item:nth-child(1),.project-item:nth-child(2)", {delay:600,easing:"ease-in"});
ScrollReveal().reveal(".project-item:nth-child(3),.project-item:nth-child(4)", {delay:650,easing:"ease-in"});


// ========CONTACT SECTION===================

ScrollReveal().reveal("#contact >span", {delay:500,easing:"ease-in"});
ScrollReveal().reveal("form", {delay:600,easing:"ease-in"});
ScrollReveal().reveal(".footer-left >.logo", {delay:700,easing:"ease-in"});

ScrollReveal().reveal(".copyright", {delay:800,easing:"ease-in"});
ScrollReveal().reveal(".address", {delay:900,easing:"ease-in"});
ScrollReveal().reveal(".socials", {delay:1000,easing:"ease-in"});

