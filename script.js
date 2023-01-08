// variabler som definerer vores "menu" knap og vores tre links i toppen
const btn = document.querySelector(".toggle-btn");
const menu = document.querySelector(".header_kategori");
const musContainer = document.querySelector("#mus_container");

window.addEventListener("load", sidenVises);

function sidenVises() {
  console.log("sidenVises");

  musContainer.classList.add("flyv");

}

function toggleMenu() {
  menu.classList.toggle("shown");

  const menuShown = menu.classList.contains("shown");

  if (menuShown) {
    console.log(menuShown);
    btn.textContent = "LUK";
  } else {
    console.log(menuShown);
    btn.textContent = "MENU";
  }
}

btn.addEventListener("click", toggleMenu);

