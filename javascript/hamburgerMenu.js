var hamburger = document.getElementById("menu-button");
var menu = document.getElementById("main-menu");
var close = document.getElementById("close-menu");
hamburger.onclick = openMenu;
close.onclick = closeMenu;


function openMenu(){
    menu.style.display = "block";
    hamburger.style.display = "none";
    close.style.display = "inline-block";
}

function closeMenu(){
	menu.style.display = "none";
	close.style.display = "none";
	hamburger.style.display = "inline-block";
}