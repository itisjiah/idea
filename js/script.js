$(document).ready(function(){
$("#lines").click(function(){
$(".menu").toggle();
});

$(".tea-btn").click(function(){
	$(".tea-container").toggle();
	$(".fa-chevron-down").toggleClass('rotate180');
});


$(".product-btn").click(function(){
$(".oolong-container").toggle();
});


});
