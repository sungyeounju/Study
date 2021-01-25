$(function(){
    //txt_list_AC();
    profile_slide_AC();
});



function txt_list_AC(){
	var obj = $(".banner");//전체
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
	var obj = $(".banner");;
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

