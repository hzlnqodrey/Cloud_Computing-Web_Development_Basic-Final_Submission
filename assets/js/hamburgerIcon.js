$(".menu-icon").click(function(){
    $(this).toggleClass("active");
    $(".hamburger-nav-menu").toggleClass("active");
    $(".menu-icon i").toggleClass("fa-times")
})