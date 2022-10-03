$("h3").click(function (){
    $('table').toggle();
})

$("h3").click(function (){
    $(this).next('table').toggle();
})