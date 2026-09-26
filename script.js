const shareBtn = document.getElementById("Share");
const shareMenu = document.getElementById("shareMenu");

shareBtn.addEventListener("click", showMenu);

function showMenu(){
    shareMenu.classList.toggle("active");
}