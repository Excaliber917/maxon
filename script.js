const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_list_sm")


hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navMenu.classList.toggle("active")
})

