$(document).ready(function() {
    nav_AC(); //메뉴
    nav2_AC(); //메뉴2
    tab_AC(); //탭메뉴1
    acco_AC(); //아코디언
    acco2_AC(); //아코디언2
    scroll_AC(); //section scroll
    
});
$(document).scroll(function(){
    scrollT_AC(); //section index
});

function nav_AC(){ //메뉴
    var nav = $("nav");
    $(".mbtn").on("click", function(){
        if(!nav.hasClass("on")){
            $(this).addClass("on");
            nav.addClass("on");
        }else{
            $(".mbtn").removeClass("on");
            nav.removeClass("on");
        }
    });
}

function nav2_AC(){ //메뉴2

    var mopen = $(".menu-open a");
    mopen.click(function(){
        $("nav").toggleClass("on");
        $(this).parents(".menu-open").toggleClass("on");
        $(".logo").toggleClass("on");

        $("body").toggleClass("on");
    });

    $(".deth01").on("mouseover", function(){
        $(this).addClass("on");
    });
    $(".deth01").on("mouseleave", function(){
        $(this).removeClass("on");
    });

    //모바일
    $(".mobileBtn").click(function(){
        $("nav").removeClass("on");
        $(".logo").removeClass("on");
        $(".menu-open").removeClass("on");
        $("body").removeClass("on");
    });


}

function tab_AC(){ //탭메뉴1
    var tab = $(".tab-box");
        tab_ul = tab.find(".nav-tab");
        tab_btn = tab_ul.find("li a");

    tab_btn.click(function(){
        $(this).parents("li").addClass("on").siblings().removeClass("on");
        $("#"+$(this).parents("li").data("id")).addClass("on").siblings().removeClass("on");
    });
}

function acco_AC(){ //아코디언
    $(".acbox").hide();
    $(".acco ul li .acbtn").click(function(){
        $(this).parents("li").toggleClass("on").find(".acbox").slideToggle(300);
        $(".acco ul li .acbtn").not(this).parents("li").removeClass("on").find(".acbox").slideUp(300);
        return false;
    });
}

function acco2_AC(){ //아코디언2
    $(".acco2 .cont").hide();
    $(".acco2 ul li .title").click(function(){
        $(this).next().slideToggle(300);
        $(".acco2 ul li .title").not(this).next().slideUp(300);
        $(this).parents("li").toggleClass("on").siblings().removeClass("on");
    });
}


function scroll_AC(){ //section scroll
    $(".scroll-bar li a").each(function(){
        var thisoffset = $("."+$(this).parents("li").data("id")).offset().top;

        $(this).click(function(){
            $("html,body").animate({scrollTop : thisoffset},500);
            $(this).parents("li").addClass("on").siblings().removeClass("on");
        });
    });   
}

function scrollT_AC(){ //section index
    var windowTop = $(window).scrollTop();

    $("header, section, footer").each(function(){
        if(windowTop >= $(this).offset().top - 200){
            $(".scroll-bar li[data-id="+$(this).attr("class")+"]").addClass("on").siblings().removeClass("on");
        }
        
    });
    
}
