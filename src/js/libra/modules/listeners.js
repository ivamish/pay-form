import { $ } from '../core.js';

$.prototype.on = function(event, callback){
    for(let i = 0; i < this.length; i++){
        this[i].addEventListener(event, callback);
    }

    return this;
};

$.prototype.off = function(event, callback){
    for(let i = 0; i < this.length; i++){
        this[i].removeEventListener(event, callback);
    }

    return this;
};

$.prototype.click = function(callback){
    if(callback){
        for(let i = 0; i < this.length; i++){
            this[i].addEventListener('click', callback);
        }
    }else{
        for(let i = 0; i < this.length; i++){
            this[i].click();
        }
    }

    return this;
};