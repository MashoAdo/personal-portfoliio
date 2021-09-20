
const menuBtn = document.getElementsByClassName("menu-btn")[0]
const navLinks = document.getElementsByClassName("nav-link")

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
