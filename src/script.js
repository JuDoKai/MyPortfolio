const navToOpen = document.getElementById("nav-phone-to-open");
const navToClose = document.getElementById("nav-phone-to-close");

function openNav() {
    if (navToOpen.style.display === "none" || navToOpen.style.display === "") {
        navToOpen.style.display = "unset"; 
        navToClose.style.display = "none"; 
    } else {
        navToOpen.style.display = "none";  
        navToClose.style.display = "unset";
    }
}
navToOpen.addEventListener("click", openNav);
navToClose.addEventListener("click", openNav);