import { $ } from '../core.js';

$.prototype.addClasses = function(...classNames){
    for(let i = 0; i < this.length; i++){
        this[i].classList.add(...classNames);
    }

    return this;
};

$.prototype.removeClasses = function(...classNames){
    for(let i = 0; i < this.length; i++){
        this[i].classList.remove(...classNames);
    }

    return this;
};

$.prototype.toggleClasses = function(...classNames){
    classNames.forEach(className => {
            for(let i = 0; i < this.length; i++){
                this[i].classList.toggle(className);
        }
    });

    return this;
};