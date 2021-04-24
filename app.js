const slides = [...document.querySelectorAll('.slide')];
slides.reverse();

const nxtBtn = document.querySelector('.nxt');
const preBtn = document.querySelector('.pre');

let current_slide_index = 0;

const nxtSlide = () => {
    if(current_slide_index < 3){
        let left = slides[current_slide_index].children[0];
        let right = slides[current_slide_index].children[1];

        left.style.left = `-120%`;
        right.style.left = `120%`;
        current_slide_index++;
    }
}

nxtBtn.addEventListener('click', () => {
    nxtSlide();
})

const preSlide = () => {
    if(current_slide_index > 0){
        current_slide_index--;

        let left = slides[current_slide_index].children[0];
        let right = slides[current_slide_index].children[1];

        left.style.left = null;
        right.style.left = null;
    }
}

preBtn.addEventListener('click', () => {
    preSlide();
})