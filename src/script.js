const buttonCloseMenu = document.querySelector(".menu-logo-menu-li-button")

let count = 0;

const sidebarContainerTopLogo = document.querySelector(".sidebar-container-top .logo")
const sidebarMenuListInput = document.querySelector(".sidebar-menu-list input")
const sidebarMenuListName = document.querySelectorAll(".sidebar-menu-list-name")
const sidebarContainerBottomPerson = document.querySelector(".sidebar-container-bottom-person")

const sidebar = document.querySelector(".sidebar")

const sidebarContainerTop = document.querySelector(".sidebar-container-top")
const sidebarMenuList = document.querySelector(".sidebar-menu-list")
const sidebarContainerBottom = document.querySelector(".sidebar-container-bottom")

const sidebarMenuIcons = document.querySelector(".sidebar-menu-icons")

function closeMenu() {
    sidebarContainerTopLogo.classList.add("display")
    sidebarMenuListInput.classList.add("display")
    sidebarMenuListName.forEach(element => {
        element.classList.add("display")
    });
    sidebarContainerBottomPerson.classList.add("display")

    sidebar.classList.add("new-sidebar")

    sidebarContainerTop.classList.add("menu-icons-new")
    sidebarMenuList.classList.add("menu-icons-new")
    sidebarContainerBottom.classList.add("menu-icons-new")

    sidebarMenuIcons.classList.add("new-sidebar-menu-icons")

    count++
}

function openMenu() {
    sidebarContainerTopLogo.classList.remove("display")
    sidebarMenuListInput.classList.remove("display")
    sidebarMenuListName.forEach(element => {
        element.classList.remove("display")
    });
    sidebarContainerBottomPerson.classList.remove("display")

    sidebar.classList.remove("new-sidebar")

    sidebarContainerTop.classList.remove("menu-icons-new")
    sidebarMenuList.classList.remove("menu-icons-new")
    sidebarContainerBottom.classList.remove("menu-icons-new")

    sidebarMenuIcons.classList.remove("new-sidebar-menu-icons")

    count = 0
}

buttonCloseMenu.addEventListener("click", () => {
    if (count == 0) {
        closeMenu()
    } else {
        openMenu()
    }
});