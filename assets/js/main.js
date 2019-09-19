let app = {};

const burgerMenu = document.querySelector(".burger");
const cardAnim = document.querySelector('.card');
burgerMenu.addEventListener("click", burgerMenuHandler);

function burgerMenuHandler(e) {
  e.preventDefault();
  const dropMenu = document.querySelector(".navigation");
  dropMenu.classList.toggle('hidden');
  /* cardAnim.classList.toggle('hide'); */
}



const menuAnimText = document.querySelectorAll(".menuHover-anim");
const menuAnimItem = document.querySelectorAll(".menuItem-wrap");

menuAnimItem.forEach(hoverEventMenu);

function hoverEventMenu(e) {
  e.addEventListener("mouseenter", function() {
    let icon = e.children[0].children[0];
    let text = e.children[0].children[1];
    icon.classList.add("hide");
    text.classList.add("visible");
  });
  e.addEventListener("mouseleave", function() {
    let icon = e.children[0].children[0];
    let text = e.children[0].children[1];
    icon.classList.remove("hide");
    text.classList.remove("visible");
  });
}
