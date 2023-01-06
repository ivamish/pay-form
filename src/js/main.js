import $ from "jQuery";
import "inputmask/dist/inputmask.js";

const phoneMask = new Inputmask("+7 (999) 999 99-99");
phoneMask.mask("#modal-phone");

$('.btn-pay').on('click', () => {
    $('.modal').fadeIn().css('display', 'flex');
});

$('.modal').on('click', function(event){

    if($(event.target).hasClass('modal')){
        $('.modal').fadeOut();
    }
});

const checkData = () => {

    $(".modal__btn").prop('disabled', false);
    $(".modal__alert").removeClass("modal__alert--show");

    let ans = true;

    $("input").each((ind, el) => {
        if($(el).hasClass("modal__input--error")){
            $(".modal__btn").prop('disabled', true);
            $(".modal__alert").addClass("modal__alert--show");
            ans = false;
        }
    });

    console.log(ans);
    return ans;
};

$('#modal-phone').on('focusout', function(){
    const pattern = new RegExp(/\+7\s\(\d{3}\)\s\d{3}\s\d{2}-\d{2}/);

    if(!pattern.test($(this).val())) {
        $(this).addClass("modal__input--error");
    } else {
        $(this).removeClass("modal__input--error");
    }

    checkData();
});

$('.modal-name').on('focusout', function(){
    const pattern = new RegExp(/^[А-я]{3,16}$/g);

    if(!pattern.test($(this).val())) {
        $(this).addClass("modal__input--error");
    } else {
        $(this).removeClass("modal__input--error");
    }

    checkData();
});

$('#modal-mail').on('focusout', function(){
    const pattern = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if(!pattern.test($(this).val())) {
        $(this).addClass("modal__input--error");
    } else {
        $(this).removeClass("modal__input--error");
    }

    checkData();
});

$('.modal__btn').on('click', function(e){
    e.preventDefault();

    $('input').each(function(i, el){
        if(!$(el).val()) {
            $(el).addClass('modal__input--error');
        }
    });

    if(checkData()) {
        $('.modal').fadeOut();
        $('form').trigger('reset');
    }
});