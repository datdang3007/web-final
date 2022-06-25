const menuCategoriesArrow = document.querySelector(".fa-angle-down")
const menuCategoriesDropDown = document.querySelector(".dropdown-categories")
const menuCategories = document.querySelector(".menu-categories")
const menuCategoriesDropDown2 = document.querySelector(".menu-categories-dropdown")
const electronicsDropdown = document.querySelector(".electronics-dropdown")

// bật tắt All Categories
let isToggleArrow = false
$(".dropdown-categories").fadeOut();
$(".menu-all-categories").click(function(e) {
    if (!isToggleArrow) {
        isToggleArrow = true
        menuCategoriesDropDown.classList.remove("outactive")
        menuCategoriesArrow.classList.add("active")
        menuCategoriesDropDown.classList.add("active")
    } else {
        isToggleArrow = false
        menuCategoriesArrow.classList.remove("active")
        menuCategoriesDropDown.classList.remove("active")
        menuCategoriesDropDown.classList.add("outactive")
    }
})

let isMenuCategoriesShowing = false
$(".menu-categories").click(function(e) {
    if (!isMenuCategoriesShowing) {
        isMenuCategoriesShowing = true
        menuCategoriesDropDown2.style = "display: block"
    } else {
        isMenuCategoriesShowing = false
        menuCategoriesDropDown2.style = ""
    }
})

let isElectronicsContentShowing = false
$(".categories-electronics").hover(function(e) {
    if (!isElectronicsContentShowing) {
        isElectronicsContentShowing = true
        electronicsDropdown.classList.remove("outactive")
        electronicsDropdown.classList.add("active")
    } else {
        isElectronicsContentShowing = false
        electronicsDropdown.classList.remove("active")
        electronicsDropdown.classList.add("outactive")
    }
})