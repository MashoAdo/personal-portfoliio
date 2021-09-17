
const menuBtn = document.getElementsByClassName("menu-btn")[0]

console.log(menuBtn)
const menu = document.getElementsByClassName("menu-items")[0]

// Add or remove menu on clicking menu button
menuBtn.addEventListener("click", () =>{
    menu.classList.toggle("active")
})