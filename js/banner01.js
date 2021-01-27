


$(function(){

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

});

// $(document).ready(function(){
// 	var obj = $(".banner");;
// 		obj.ul = obj.find(" .list_wrap ul");
// 		obj.li = obj.ul.find(">li");
// 		obj.btn_prev = obj.find(" .control .prev");
// 		obj.btn_next = obj.find(" .control .next");
// 	    obj.width = obj.li.width();

	
// 	obj.btn_next.on("click", function(){
// 		obj.width.css("left",obj.width+"px");		
// 	});
	
// });