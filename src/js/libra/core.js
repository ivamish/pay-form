const init = function(selector){
    if(!selector){
        return this;
    }

    if(selector.tagName){
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;

    return this;
};

const $ = function(selector){
    return new init(selector);
};

init.prototype = $.prototype;

window.$ = $;
export {$};