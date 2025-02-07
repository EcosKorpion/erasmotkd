// Ham Menu Functionality
let hammenu = document.querySelector('.ham_menu');
let hambutton = document.querySelector('.ham');
let hamprofbutton = document.querySelector('.prof');
let hamtkdbutton = document.querySelector('.tkd');
let hamexit = document.querySelector('.exit_icon');

function toggleMenu() {

    if (hammenu.classList.contains('disabled')) {
        hammenu.classList.remove('disabled');
    } else {
        hammenu.classList.add('disabled');
    }
}

hamprofbutton.addEventListener('click', toggleMenu);
hamtkdbutton.addEventListener('click', toggleMenu);

hambutton.addEventListener('click', toggleMenu);
hamexit.addEventListener("click", toggleMenu);


// Image Gallery Functionality

let gallery = document.querySelector('.image_gallery');

let images = ["img/tkd1.png", "img/tkd2.png", "img/tkd3.png"]

let preloadedimages = []

images.forEach((src, index) => {
    preloadedimages[index] = new Image();
    preloadedimages[index].src = src;
})

let slider = document.querySelector('.slider');

let previous = document.querySelector('.previous');
let active = document.querySelector('.show');
let next = document.querySelector('.next');

let fowardbutton = document.querySelector('.arrow_foward');
let backbutton = document.querySelector('.arrow_back');

let previousimage = 0;
let selectedimage = 1;
let nextimage = 2;

let cooldown = false;

function ChangePicture(direction) {

    console.log(previousimage, selectedimage, nextimage);

    if (cooldown === false) {
        cooldown = true;
        if (direction === 'foward') {
            previousimage++;
            selectedimage++;
            nextimage++;
            slider.classList.add('move_next');
        }

        if (direction === 'back') {
            previousimage--;
            selectedimage--;
            nextimage--;
            slider.classList.add('move_back');
        }

        if (previousimage < 0) {
            previousimage = images.length - 1;
        } else if (previousimage > images.length - 1) {
            previousimage = 0;
        }

        if (selectedimage < 0) {
            selectedimage = images.length - 1;
        } else if (selectedimage > images.length - 1) {
            selectedimage = 0;
        }

        if (nextimage < 0) {
            nextimage = images.length - 1;
        } else if (nextimage > images.length - 1) {
            nextimage = 0;
        }

        console.log(previousimage, selectedimage, nextimage);

        setTimeout(() => {
            slider.classList.remove('move_next');
            slider.classList.remove('move_back');
            cooldown = false;
            previous.src = images[previousimage];
            active.src = images[selectedimage];
            next.src = images[nextimage];
        }, 500);
    }
}

fowardbutton.addEventListener('click', () => ChangePicture('foward'));
backbutton.addEventListener('click', () => ChangePicture('back'));