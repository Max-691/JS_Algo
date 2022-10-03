$("h2");
$("h2").each(function () {
    $("ul.menu").append($("<li>").append($("<a>").text($(this).text()).attr('href', `#${$(this).attr('id')}`)));

});

// dès qu'on clique sur enfant de div le p apparait
$('div').on('click', 'p', function(){
 $(this).after('<p>Ce p a les mêmes caractéristiques que son parent</p>'); 
});

$("p").animate({opacity: '0.5'}, {easing})