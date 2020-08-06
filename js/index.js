$(window).load(function () {

    "use strict";
    $(".loading-overlay .spinner").fadeOut(2500, function () {

        $("body").css("overflow", "auto"); //Showing scroll
        $(this).parent().fadeOut(1000, function () {

            $(this).remove();
        });

    });

});