var scrollButton = $("#scroll-top")
$(window).load(function () {

    "use strict";
    $(".loading-overlay .spinner").fadeOut(2000, function () {

        $("body").css("overflow", "auto"); //Showing scroll
        $("body").css("overflow-x", "hidden");
        $(this).parent().fadeOut(1000, function () {

            $(this).remove();
        });

    });
    
});

$(window).scroll(function () {
    if ($(this).scrollTop() >= 700) {
        scrollButton.show();
    } else {
        scrollButton.hide();
    }

});
scrollButton.click(function () {
    $("html,body").animate({
        scrollTop: 0
    }, 600);
});

