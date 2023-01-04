import { $ } from '../core.js';

$.prototype.timeOver = function(dur, cb, fin){
    let timestart;

    function _timeOver(time){
        if(!timestart){
            timestart = time;
        }

        let elepsed = time - timestart,
            complection = Math.min((elepsed / dur).toFixed(1), 1);

        cb(complection);

        if(elepsed < dur){            
            requestAnimationFrame(_timeOver);
        }else{
            if(typeof(fin) === 'function'){
                fin();
            }
        }
    }

    return _timeOver;
};

$.prototype.fadeIn = function(dur, display){
    for(let i = 0; i < this.length; i++){
        const changeOpacity = (complection) => {
            this[i].style.display = display || 'block';
            this[i].style.opacity = 0 + complection;
        };

        const ani = this.timeOver(dur, changeOpacity, () => {});
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeOut = function(dur){
    for(let i = 0; i < this.length; i++){
        const changeOpacity = (complection) => {
            this[i].style.opacity = 1 - complection;
        };

        const ani = this.timeOver(dur, changeOpacity, () => {
            this[i].style.display = 'none';
        });
        requestAnimationFrame(ani);
    }

    return this;
};

$.prototype.fadeToggle = function(dur){
    for(let i = 0; i < this.length; i++){
        if(window.getComputedStyle(this[i]).getPropertyValue('display') != 'none'){
            $(this[i]).fadeOut(dur);
        }else{
            $(this[i]).fadeIn(dur);
        }
    }
};