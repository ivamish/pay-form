import { $ } from '../core.js';

$.prototype.hide = function(){
    for(let i = 0; i < this.length; i++){
        this[i].style.display = 'none';
    }

    return this;
};

$.prototype.show = function(){
    for(let i = 0; i < this.length; i++){
        this[i].style.display = '';
    }

    return this;
};