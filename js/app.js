// nav bar black animation

$(window).scroll(function() {
    if ($(this).scrollTop() > 150){  
        $('nav').addClass("black");
    }
    else{
        $('nav').removeClass("black");
    }
});

//
    