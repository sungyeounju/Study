$(function(){
	//navi_AC(); //네비게이션
	photobox_AC();//이미지 모션
	layer_profile_AC();//조직도 프로필 클릭시 레이어 팝업창
	txt_list_AC();//역대총장 프로필 클릭시 이동
});

function navi_AC(){
	var obj = $('#sub_visual .lnb_wrap > ul > li:not([class*="home"])');
		obj.btn = obj.find(">a");
		obj.box = obj.find(">.lnb02");
	obj.btn.on('click', function () {
		var _this = $(this).stop().siblings('.lnb02');
	    obj.box.stop().slideUp(200);
	    if(_this.is(":hidden")) _this.slideDown(200);
	    return false;
	});

	$(document).click(function(){
		for(var i=0; i<obj.size(); i++){
			obj.eq(i).find(" .lnb02:not(:hidden)").slideUp(200);
		}
	});
}

function photobox_AC(){
	var _photo = $(".photos");

	function fn_set(_this){
		_this.src = _this.attr("data-src");
		if(_this.attr("data-type") == "1"){
			//type 1
			if(_this.src.indexOf(".mp4") < 0){
				$('<span data-cnt="1" style="background-image:url('+_this.src+');"></span>\
				   <span data-cnt="2" style="background-image:url('+_this.src+');"></span>\
				   <span data-cnt="3" style="background-image:url('+_this.src+');"></span>').appendTo(_this);
			} else {
				$('<div class="videobox"><div class="cover"><video src="'+_this.src+'" autoplay loop muted></video></div></div>').appendTo(_this);
			}
		} else if(_this.attr("data-type") == "2"){
			//type 2
			$('<span data-cnt="1" style="background-image:url('+_this.src+');"></span>').appendTo(_this);
		} else if(_this.attr("data-type") == "3"){
			//type 3
			$('<span data-cnt="1" style="background-image:url('+_this.src+');"></span>').appendTo(_this);
		}
	}

	for(var i=0; i<_photo.size(); i++){
		fn_set(_photo.eq(i));
	}
}

function layer_profile_AC(){
	var obj = $(".org ul li a.org_btn");
	var c_btn = $(".org .layer_profile a.close")

	obj.on('click', function(){
		$(".layer_profile").hide();
		$(this).siblings(".layer_profile").show();
		$(".org").addClass("blind");
		return false;
	});

	c_btn.on('click', function(){
		$(this).parent().hide();
		$(".org").removeClass("blind");
		return false;
	});

	$(document).click(function(e){
		if($(e.target).hasClass("org") && $(e.target).hasClass("blind")){
			c_btn.click();
		}
	});
}


function txt_list_AC(){
	var obj = $(".president_h");//전체
		obj.btn = obj.find(" .tab-ul a");//상단탭
		obj.box = obj.find(" .mid .item");//컨텐츠
		obj.box.btn = obj.box.find(" .profile_tab a");//컨텐츠안 탭
		obj.txt = obj.box.find(" .txt_box");//컨텐츠 안 텍스트박스
		obj.cnt = 0;

	for(var i=0; i<obj.btn.size(); i++){
		for(var r=0; r<obj.box.eq(i).find(" .profile_tab .list_wrap>ul>li").size(); r++){
			obj.box.eq(i).find(" .profile_tab .list_wrap>ul>li").eq(r).attr("data-cnt",(r+1));
		}
	}

	function fn_set(idx){
		obj.box.hide().eq(idx).show();
		obj.txt.hide();

		obj.btn.parent().removeClass("on");
		obj.btn.eq(idx).parent().addClass("on");

		obj.cnt = idx;
		fn_set_small(0);
	}
	fn_set(0);

	function fn_set_small(idx){
		obj.box.eq(obj.cnt).find(" .txt_box").hide().eq(idx).show();

		obj.box.btn.parent().removeClass("on");
		obj.box.eq(obj.cnt).find(" .profile_tab li[data-cnt='"+(idx+1)+"']").addClass("on");
	}

	obj.btn.click(function(){
		var idx = obj.btn.index($(this));
		fn_set(idx);
		return false;
	});

	obj.box.btn.click(function(){
		var idx = $(this).parent().data("cnt") - 1;
		console.log(idx);
		fn_set_small(idx);
		return false;
	});

	for(var i=0; i<$(".profile_tab").size(); i++){
		profile_slide_AC($(".profile_tab").eq(i));//역대총장 프로필 슬라이드
	}
}


function profile_slide_AC(obj){
	var obj = obj;
		obj.ul = obj.find(" .list_wrap ul");
		obj.li = obj.ul.find(">li");
		obj.btn_prev = obj.find(" .control .prev");
		obj.btn_next = obj.find(" .control .next");

	function fn_move(str){
		if(obj.ul.is(":animated")) return false;
		obj.li = obj.ul.find(">li");
		var l = obj.li.width() * -1;

		if(str == "prev"){
			obj.li.last().prependTo(obj.ul);
			obj.ul.css("left",l+"px");
			l = 0;
		}

		obj.ul.stop().animate({"left":l+"px"},500,function(){
			if(str == "next"){
				obj.li.eq(0).appendTo(obj.ul);
				obj.ul.css("left","0");
			}
		});
	}
	obj.btn_prev.click(function(){
		fn_move("prev");
		return false;
	});

	obj.btn_next.click(function(){
		fn_move("next");
		return false;
	});
}



/*
function profile_slide_AC(){
	var obj = $(".profile_tab");
	var obj.ul = obj.find(" .list_wrap ul");
	var obj.li = obj.ul.find(" li");
	var obj.btn_next = obj.find(" control .next");
	var obj.btn_prev = obj.find(" control .prev");

	obj.btn_next.click(function(){
		var l = obj.li.width();
		obj.ul.animate({"left": l+"px"},500);
	});
}
*/

/*
for(var i=0; i<10; i++){
	console.log(i);
}
for(var i=9; i>=0; i--){
	console.log(i);
}


*/

