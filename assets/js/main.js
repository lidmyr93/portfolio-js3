
let app = {};

const burgerMenu = document.querySelector('.burger');
burgerMenu.addEventListener('click', burgerMenuHandler)

 function burgerMenuHandler (e) {
    e.preventDefault();
    const dropMenu = document.querySelector('.navigation');
    dropMenu.classList.toggle('hidden')

}


//Hover animation on menu

// 1. Hämta hem referense till elementen
//   Icons och text
// 2. Dölj icon visa text on hover / click
// eventliste hover/click
// 3. funktion som fixar

const menuAnimText = document.querySelectorAll('.menuHover-anim');
const menuAnimItem = document.querySelectorAll('.menuItem-wrap');

menuAnimItem.forEach(hej)

function hej(e){
    e.addEventListener('mouseenter', function(){
        let icon = e.children[0]
        let text = e.children[1]
        icon.classList.add('hide')
        text.classList.add('visible')
        
    })
    e.addEventListener('mouseleave', function (){
        let icon = e.children[0]
        let text = e.children[1]
        icon.classList.remove('hide')
        text.classList.remove('visible')
        
    })
}
