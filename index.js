const asdf = document.querySelector('.burger');
const zxcv = document.querySelector('.menu__burger');
const qwer = document.querySelector('.punct1');
const qwe = document.querySelector('.punct2');

const list = document.querySelector('.menu__list');
const d = document.querySelector('.menu');
const h = document.querySelector('.text__punct1');
const j = document.querySelector('.text__punct2');


asdf.onclick = function (){

    j.classList.toggle('active');
    h.classList.toggle('active');
    d.classList.toggle('active');
    list.classList.toggle('active');

    qwe.classList.toggle('active');
    qwer.classList.toggle('active');
    zxcv.classList.toggle('active');
    console.log('Clack!');
}
