
const menuBtn = document.getElementsByClassName("menu-btn")[0]
const navLinks = document.getElementsByClassName("nav-link")
const menu = document.getElementsByClassName("menu-items")[0]
const emailBtn = document.getElementById("copy-button")
const email = document.getElementById("email-copied")
const form = document.querySelector(".form")
const clientEmail = document.getElementById("email")
const clientMessage = document.getElementById("message")

const navLinksarr = [...navLinks]


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

// remove loader when all files have been sent to client browser
$(window).on("load", function () {
    $(".preloader-wrapper").fadeOut("slow")
})

// copy text on clipboard using clipboard api
const textToCopy = email.textContent

emailBtn.addEventListener("click",() =>{
    navigator.clipboard.writeText(textToCopy)
.then(() => { emailBtn.textContent ="copied!!!" })
.catch((error) => { alert(`Copy failed! ${error}`) })
})
 
// scroll reveal animations
// ========HEADER SECTION===================
// logo
ScrollReveal().reveal(".logo", {delay:500});
ScrollReveal().reveal(".menu-btn", {delay:500});
// menu-items

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
ScrollReveal().reveal(".current-stack", {delay:300,easing:"ease-in"});
ScrollReveal().reveal(".currently-learning", {delay:400,easing:"ease-in"});

// skills
ScrollReveal().reveal(".services >span", {delay:300,easing:"ease-in"});
ScrollReveal().reveal(".service-item:nth-child(1),.service-item:nth-child(2)", {delay:400,easing:"ease-in"});
ScrollReveal().reveal(".service-item:nth-child(3),.service-item:nth-child(4)", {delay:500,easing:"ease-in"});




// ========PROJECTS SECTION===================
ScrollReveal().reveal(".projects-title", {delay:500,easing:"ease-in"});

ScrollReveal().reveal(".project-item:nth-child(1),.project-item:nth-child(2)", {delay:550,easing:"ease-in"});
ScrollReveal().reveal(".project-item:nth-child(3),.project-item:nth-child(4)", {delay:600,easing:"ease-in"});


// ========CONTACT SECTION===================

ScrollReveal().reveal("#contact >span", {delay:500,easing:"ease-in"});
ScrollReveal().reveal("form", {delay:600,easing:"ease-in"});
ScrollReveal().reveal(".footer-left >.logo", {delay:700,easing:"ease-in"});

ScrollReveal().reveal(".copyright", {delay:800,easing:"ease-in"});
ScrollReveal().reveal(".address", {delay:900,easing:"ease-in"});
ScrollReveal().reveal(".socials", {delay:1000,easing:"ease-in"});


// form

form.addEventListener("submit", (e) => {
    e.preventDefault()

    let formData = {
        email : clientEmail.value,
        message : clientMessage.value
    }

    let xhr = new XMLHttpRequest()
    xhr.open("POST", "/email")
    xhr.setRequestHeader('content-type', 'application/json')
    xhr.onload = () =>{
        console.log(xhr.responseText)
        if(xhr.responseText === 'success'){
            alert("Email sent. Thank you!")
            
        }else{
            alert("something went wrong . please try again")
        }
    }
    
    xhr.send(JSON.stringify(formData))

    // clear form values after submitting
    clientEmail.value = '',
    clientMessage.value = ''


})