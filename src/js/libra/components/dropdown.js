import { $ } from '../core.js';

$.prototype.dropdown = function(listSelector){
    for(let i = 0; i < this.length; i++){
    
        $(listSelector).hide();

        $(this[i]).click(() => {
            $(listSelector).fadeToggle(200);
        });
    }
};

$('.dropdown-btn').dropdown('.dropdown-list');