import { $ } from '../core.js';

/*=================={Получить или редактировать содержимое ноды}====================*/

$.prototype.html = function(textContent){
    if(textContent){
        for(let i = 0; i < this.length; i++){
            this[i].innerHTML = textContent;
        }
    }else{
        return this[0].innerHTML;
    }

    return this;
};

/*=================={Получить определенный элемент из коллекции}====================*/

$.prototype.eq = function(i){
    for (let el in this) {
        if(el != i){
            delete this[el];
        }else if(el == i && i == 0){
            continue;
        }else{
            this[0] = this[el];
            delete this[el];
        }
    }

    if(Object.keys(this).length){
        this.length = 1;
    }else{
        this.length = 0;
    }
    return this;
};

/*=================={Получить индекс элемента в родительской ноде}====================*/

$.prototype.index = function(){
    const parent = this[0].parentNode,
          childs = [...parent.children];
    
    for (const el in childs) {
        if(this[0] === childs[el]){
            return el;
        }
    }

    return false;
};

/*=================={Поиск в элементах по селектору}====================*/

$.prototype.find = function(selector){
    let countOfElem = 0;

    const copyObj = Object.assign({}, this);

    for(let i = 0; i < this.length; i++){
        let objContainer = copyObj[i].querySelectorAll(selector);

        if(objContainer.length > 0){
            for(let j = 0; j < objContainer.length; j++){
                this[countOfElem] = objContainer[j];
                countOfElem++;
            }
        }
    }

    this.length = countOfElem;

    for(; countOfElem < copyObj.length; countOfElem++){
        delete this[countOfElem];
    }
    return this;
};

/*=================={Поиск ближайшего верхнего элемента}====================*/

$.prototype.closest = function(selector){
    let countOfElem = 0;

    const copyObj = Object.assign({}, this);

    for(let i = 0; i < this.length; i++){
        if(copyObj[i].closest(selector)){
            this[i] = copyObj[i].closest(selector);
            countOfElem++;
        }
    }

    this.length = countOfElem;

    for(; countOfElem < copyObj.length; countOfElem++){
        delete this[countOfElem];
    }
    return this;
};

/*=================={Поиск ближайшего верхнего элемента}====================*/

$.prototype.siblings = function(){
    let countOfElem = 0;

    const copyObj = Object.assign({}, this);

    for(let i = 0; i < copyObj.length; i++){
        let children = copyObj[i].parentNode.children;
        for (const el of children) {
            if(el !== this[i]){
                this[countOfElem] = el;
                countOfElem++;
            }
        }
    }

    this.length = countOfElem;

    for(; countOfElem < copyObj.length; countOfElem++){
        delete this[countOfElem];
    }
    return this;
};