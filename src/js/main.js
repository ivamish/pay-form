import $ from './libra/lib.js';

$('.btn').on('click', (e)=>{
    e.preventDefault();
    $('.title').fadeToggle(500);
});