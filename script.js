const menuicon = document.querySelector(".menuicon");
const croix = document.querySelector("#croix");
const menu = document.querySelector(".menu");

menuicon.addEventListener("click", () => {
  console.log("es");
  menu.classList.toggle("menuback");
});

croix.addEventListener("click", () => {
  console.log("es");
  menu.classList.toggle("menuback");
});
