import $ from "jQuery";

$('li').each((i, el) => {
    console.log($(el).html());
});