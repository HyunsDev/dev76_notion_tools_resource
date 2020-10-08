var content = document.getElementById('header');
document.body.insertBefore(content, document.body.firstChild);

$(function() {
    $(".listed_mob").hide();
})

$(".dropdowndtn").click(function() {
    $(".listed_mob").toggle();
})