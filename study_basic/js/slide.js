$(document).ready(function() {
    slide01_AC(); //slide01
    slide02_AC(); //slide02
    slide03_AC(); //swiper01
    slide04_AC(); //swiper02
});



function slide01_AC(){ //slide01
    $(".slide01 .btn-next").click(function(){
        if(!$(".slide01 .image-slide li").last().is(":visible")){
            $(".slide01 .image-slide li:visible").hide().next("li").fadeIn(1500);
            $(".slide01 .btn-prev").removeClass("off");
        }
        if($(".slide01 .image-slide li").last().is(":visible")){
            $(".slide01 .btn-next").addClass("off");
        }
        return false;
    });

    $(".slide01 .btn-prev").click(function(){
        if(!$(".slide01 .image-slide li").first().is(":visible")){
            $(".slide01 .image-slide li:visible").hide().prev("li").fadeIn(1500);
            $(".slide01 .btn-next").removeClass("off");
        }
        if($(".slide01 .image-slide li").first().is(":visible")){
            $(".slide01 .btn-prev").addClass("off");
        }
        return false;
    });
}

function slide02_AC(){ //slide02
    $(".paging li a").click(function(){        
        var imgleft = $(this).parents("li").index() * -2000;
        $(".slide02 .image-slide").animate({left:imgleft},300);
        $(this).parents("li").addClass("on").siblings().removeClass("on");   
    });
}

function slide03_AC(){ //swiper01
    var swiper = new Swiper('.slide03 .swiper-container', {
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
}

function slide04_AC(){
    var swiper = new Swiper('.slide04 .swiper-container', {
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
}