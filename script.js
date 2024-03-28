const menu = document.querySelector(".burger-menu");
const sideBar = document.querySelector(".side-menu");
const overlay = document.querySelector(".overlay");
const list = document.querySelectorAll(".list");

const open = () => {
  sideBar.classList.add("active");
  overlay.classList.add("active");
};

const close = () => {
  sideBar.classList.remove("active");
  overlay.classList.remove("active");
};

menu.addEventListener("click", open);
overlay.addEventListener("click", close);
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", close);
}
