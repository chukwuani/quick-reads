const menu = document.querySelector("#mobile-menu")
const close = document.querySelector("#close")
const modal = document.querySelector(".nav-bar")
const navBar = document.querySelector(".nav-links")
const body = document.querySelector("body")

function openMenu() {
    modal.classList.add("open")
    navBar.classList.add("open")

    body.style.cssText = "overflow: hidden"
}

function closeMenu() {
    modal.classList.remove("open")
    navBar.classList.remove("open")

    body.style.cssText = "overflow: visible"
}

menu.addEventListener("click", openMenu)
close.addEventListener("click", closeMenu)