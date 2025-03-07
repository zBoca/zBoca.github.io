function toggleMenu() 
{
    const menu = document.querySelector(".menuLinks");
    const icon = document.querySelector(".hamburgerIcon");

    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function toggleProjects()
{
    const twod = document.querySelector(".twod")
    const twodcontainer = document.querySelector(".twod-container")
    const threed = document.querySelector(".threed")
    const threedcontainer = document.querySelector(".threed-container")

    twod.classList.toggle("selected")
    twodcontainer.classList.toggle("selected")
    threed.classList.toggle("selected")
    threedcontainer.classList.toggle("selected")
}