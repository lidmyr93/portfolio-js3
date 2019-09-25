window.addEventListener("resize", checkWindowSize);
window.addEventListener("load", checkWindowSize);

function checkWindowSize() {
  let clientWidth = window.innerWidth;
  if (clientWidth >= 768) {
    let card = document.querySelector(".card");
    document.addEventListener("mousemove", cardAnimation);

    function cardAnimation(e) {
      let xAxis = (window.innerWidth / 2 - e.pageX) / 200;
      let yAxis = (window.innerHeight / 2 - e.pageY) / 100;
      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    }
  } else {
    document.removeEventListener("mousemove", cardAnimation);
  }
}

  let quadimagesUtility = new Utility('#quad', 'figure');
  let quadimages = quadimagesUtility.getQueryAllwithChild();
  for (i = 0; i < quadimages.length; i++) {
    quadimages[i].addEventListener("click", function() {
      this.classList.toggle("expanded");
      quad.classList.toggle("full"); 
    });
  }

