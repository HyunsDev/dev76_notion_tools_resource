var content = document.getElementById('header');
var parent = content.parentNode;
document.body.insertBefore(content, document.body.firstChild);
$(".listed").hide();

$(".dropdowndtn").click(function() {
    $(".listed").toggle();
})