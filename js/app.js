// nav bar black animation

$(window).scroll(function() {
    if ($(this).scrollTop() > 150){  
        $('nav').addClass("black");
    }
    else{
        $('nav').removeClass("black");
    }
});

//Preloader
window.addEventListener("load", ()=>{
    const preload=document.querySelector(".preload");
    preload.classList.add("preload-finish");
});

//
    