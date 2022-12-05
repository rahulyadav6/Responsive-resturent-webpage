const toggleButton = document.querySelector(".togglerButton")
const links = document.getElementsByClassName("links")
const navLinks = document.querySelectorAll(".nav-links")

toggleButton.addEventListener("click", ()=> {
    links[0].classList.toggle("on")
})



