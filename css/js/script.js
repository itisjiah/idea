$(document).ready(function(){

    $("#rotateBox").click(function(){
        $(this).toggleClass('rotate360');
    });

    $(".column").click(function(){
        $(".column").removeClass('grow');
        $(this).toggleClass('grow');
    })

});