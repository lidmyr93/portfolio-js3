let app = {};

const burgerMenu = document.querySelector(".burger");
const cardAnim = document.querySelector(".card");
const card3D = document.querySelectorAll(".transform-3D");
const cardImg = card3D[0];
const cardText = card3D[1];
burgerMenu.addEventListener("click", burgerMenuHandler);

function burgerMenuHandler(e) {
  e.preventDefault();
  const dropMenu = document.querySelector(".navigation");
  dropMenu.classList.toggle("hidden");
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



const Utility = function(appTarget, appChildEl ) {
  this.appTarget = appTarget;
  this.appChildEl = appChildEl;

};

Utility.prototype.getID = function (){
  let x = document.getElementById(this.appTarget);
  return x;
}
Utility.prototype.getQuery = function(){
  let x = document.querySelector(`${this.appTarget}`);
  return x;
}
Utility.prototype.getQuerywithChild = function(){
  let x = document.querySelector(`${this.appTarget} ${this.appChildEl}`);
  return x;
}
Utility.prototype.getQueryAll = function(){
  let x = document.querySelectorAll(`${this.appTarget}`);
  return x;
}
Utility.prototype.getQueryAllwithChild = function(){
  let x = document.querySelectorAll(`${this.appTarget} ${this.appChildEl}`);
  return x;
}

