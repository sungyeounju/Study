
$(function() {
    
    var taskList = $("li");

    taskList.hide().each(function (index){
        $(this).delay(700 * index).fadeIn(1700);
    });

    //할일 갯수 표시
    function updateCount(){
        var taskNum = $("li[class!=comp]").length;
        $("#counter").text(taskNum);
    }
    updateCount();

    //할일 추가
    var newTaskForm = $("#newTaskForm");
    var textInput = $("input:text");

    newTaskForm.on("submit", function(e){
        e.preventDefault();
        var newText = $("input:text").val();
        $("li:last").after('<li class="new">' + newText + '</li>');
        textInput.val('');
        updateCount();
    });

    var item = '';
    var task = $('.task ul');
    task.on('click','li', function(){
        var $this = $(this);
        var complete = $this.hasClass('comp');
        if(complete === true){
            $this.animate({opacity:0},500, function(){
                $this.remove();
            });
        }else{
            item = $this.text();
            $this.remove();
            task.append('<li class=\"comp\">' + item + '</li>').hide().fadeIn(300);
            updateCount();
        }
    });

});

