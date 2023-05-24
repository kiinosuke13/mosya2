'use strict';

const hamburger = document.getElementById('hamburger');
const modal = document.getElementById('modal');
const mask = document.getElementById('mask');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mask.classList.toggle('active');
    modal.classList.toggle('active');
});


