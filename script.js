function toggleMenu() {
    const menu = document.querySelector(".mobileLinks")
    const icon = document.querySelector(".mobileIcon")

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}