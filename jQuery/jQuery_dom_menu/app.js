$("h2");
$("h2").each(function () {
    $("ul.menu").append($("<li></li>").append($("<a></a>").text($(this).text()).attr('href', `#${$(this).attr('id')}`)));

});
    