let hammenu = document.querySelector('.ham_menu');
let hambutton = document.querySelector('.ham');
let hamexit = document.querySelector('.exit_icon');

function toggleMenu() {
    
    if (hammenu.classList.contains('disabled')) {
        hammenu.classList.remove('disabled');
    } else {
        hammenu.classList.add('disabled');
    }
}

const images = ["./img.tkd1.png"];

let fowardbutton = document.querySelector('.arrow_foward');
let backbutton = document.querySelector('.arrow_back');

function ChangePicture() {  
    
}

hambutton.addEventListener('click', toggleMenu);
hamexit.addEventListener('click', toggleMenu);