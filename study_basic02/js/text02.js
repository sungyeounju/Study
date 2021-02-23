
//01.정렬하기 1-1
(function(){
    const userDataList = [
        {id:2, name:"곰", age:21},
        {id:5, name:"여우", age:30},
        {id:10, name:"사자", age:51},
        {id:9, name:"호랑이", age:10},
        {id:13, name:"강아지", age:5}
    ];

    //오름차순/내림차순
    //데이터표시업데이트
    function updateList() {
        let listHtml = "";
        for(const data of userDataList){
            listHtml += `<li>계정 ${data.id}, 이름:${data.name}</li>`;
        }
        document.querySelector(".userList").innerHTML = listHtml;
    }   
    updateList(); 

    //오름차순 정렬
    function sortByAscending(){
        userDataList.sort((a,b) => a.id - b.id);
        updateList();
    }

    //내림차순 정렬
    function sortByDescending(){
        userDataList.sort((a,b) => b.id - a.id);
        updateList();
    }

    document.querySelector(".ascending").addEventListener("click", () => sortByAscending());
    document.querySelector(".descending").addEventListener("click", () => sortByDescending());
    
})();

//01.정렬하기 1-2
(function(){
    const userDataList = [
        {id:2, name:"곰", age:21},
        {id:5, name:"여우", age:30},
        {id:10, name:"사자", age:51},
        {id:9, name:"호랑이", age:10},
        {id:13, name:"강아지", age:5}
    ];

    //조건별 정렬
    //초기 리스트 화면
    function basicList(){
        let listHtml = "";
        for(const data of userDataList){
            listHtml += `<li>${data.name} : ${data.age}세</li>`;
        }
        document.querySelector(".user_list2").innerHTML = listHtml;
    }
    basicList();

    //클릭 이벤트
    const sortBtn = document.querySelectorAll(".optionSort button");
    sortBtn.forEach((element) => {
        element.addEventListener("click", (e) => onClickButton(e));
    });
    function onClickButton(e){
        const btn = e.target;
        const targetAge = btn.dataset.age; //클릭한 버튼 data-age요소 가져오기
        const filterdList = userDataList.filter((data) => data.age >= targetAge);
        updateList(filterdList);
    }

    //필터 리스트
    function updateList(filterdList){
        let listHtml = "";
        for(const data of filterdList) {
            listHtml += `<li>${data.name} : ${data.age}세</li>`;
        }
        document.querySelector(".user_list2").innerHTML = listHtml;
    }
    
})();

//02.내용출력하기
(function(){
    const mytxt = document.querySelector("#mytxt");
    mytxt.addEventListener("input",(e) => {
        const value = e.target.value;
        document.querySelector("#mytxtlog").textContent = value;
    });

    const mypw = document.querySelector("#mypw");
    mypw.addEventListener("input",(e) => {
        const value = e.target.value;
        document.querySelector("#mypwlog").textContent = value;
    });

    const myColor = document.querySelector("#mycolor");
    myColor.addEventListener("change", (e) => {
        const colorvalue = e.target.value;
        const log = `${colorvalue} 색상이 선택되었습니다.`;
        const myColorlog = document.querySelector("#myColorlog");
        myColorlog.textContent = log;
        myColorlog.style.backgroundColor = colorvalue;
    });

    const mySelect = document.querySelector("#mySelect");
    mySelect.addEventListener("change", (e) => {
        const selectvalue = mySelect.value;
        const mySelectlog = `선택된 값은 ${selectvalue}입니다.`;
        document.querySelector("#mySelectlog").textContent = mySelectlog;
    });

    const PREF_LIST = [
        { value: 1100, name: '서울' },
        { value: 3611, name: '세종' },
        { value: 2600, name: '부산' },
        { value: 2700, name: '대구' },
        { value: 2800, name: '인천' },
        { value: 2900, name: '광주' },
        { value: 3000, name: '대전' }
    ];
    const myPref = document.querySelector("#myPref");
    let optionString = '<option value = ""> 선택하세요</option>';
    PREF_LIST.forEach((item) => {
        optionString += `<option value="${item.value}">${item.name}</option>`;
    });
    myPref.innerHTML = optionString;
    myPref.addEventListener("change", (e) =>{
        let prefvalue = e.target.value;
        const myPreflog = prefvalue === "" ? `지역이 선택되지 않았습니다.`:`행정표준코드는 ${prefvalue}입니다.` ;
        document.querySelector("#myPreflog").textContent = myPreflog;
    });

    const myFile = document.querySelector("#myFile");
    myFile.addEventListener("change",(e) => {
        const target = e.target;
        const files = target.files;
        const file = files[0];
    });

    const myPhoto = document.querySelector("#myPhoto");
    const myPhotoImg = document.querySelector(".myPhotolog img");
    myPhoto.addEventListener("input", (e) => {
        const target = e.target;
        const files = target.files;
        const file = files[0];

        const reader = new FileReader();
        reader.addEventListener("load", () => {
            myPhotoImg.src = reader.result;
        });
        reader.readAsDataURL(file);
    });
})();

//03.필터출력
$(function(){
    var $imgs = $("#gallery img");
    var $buttons = $("#buttons");
    var tagged = {};

    $.each($imgs, function(){
        var imgobj = this;
        var tags = $(this).data("tags");

        if(tags){
            tags.split(",").forEach(function(tagName){
                if(tagged[tagName] == null){ //객체에 태그가 설정되어있지 않으면,
                    tagged[tagName] = [];//객체에 빈 배열을 추가한다
                }
                tagged[tagName].push(imgobj);//배열에 이미지를 추가한다
            });
        }
    });

    $("<button/>",{
        text: "모든작품",
        class: "on all",
        click: function(){
            $(this).siblings().removeClass("on");
            $imgs.show();
        }
    }).appendTo($buttons);

    $.each(tagged, function(tagName){
        $("<button/>",{
            text : tagName + "(" + tagged[tagName].length + ")",
            click: function(){
                $(this).addClass("on").siblings().removeClass("on");
                $imgs.hide().filter(tagged[tagName]).show();
            }
        }).appendTo($buttons);
    });
    

});

//04.폼출력
var id = RegExp(/^[a-zA-Z0-9]{4,12}$/);
var pass = RegExp(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/);
var email = RegExp(/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i);
var named = RegExp(/^[가-힣]+$/);

$(function(){

    
    //아이디 유효성 검사
    $("#id").keyup(function(){        
        //아이디를 정규식을 테스트
        if(!id.test($("#id").val())){
            $("#idlog").addClass("on").text("형식에 맞게 입력해주세요");
            return false;
        }else{
            $("#idlog").removeClass("on").text("");
        }
    });

    //비밀번호 유효성 검사
    $("#pw").keyup(function(){
        //아이디와 비밀번호를 동일하게 쓴 경우
        if($("#id").val() == $("#pw").val()){
            $("#pwlog").addClass("on").text("아이디와 비밀번호가 같습니다.");
            return false;
        }
        //아이디를 정규식을 테스트
        if(!pass.test($("#pw").val())){
            $("#pwlog").addClass("on").text("형식에 맞게 입력해주세요");
            return false;
        }else{
            $("#pwlog").removeClass("on").text("");
        }
    });

    //비밀번호 확인란 유효성 검사
    $("#checkpw").keyup(function(){
        //비밀번호 서로확인
        if($("#pw").val() != $("#checkpw").val()){
            $("#checkpwlog").addClass("on").text("비밀번호가 다릅니다");    
            return false;       
        }else{
            $("#checkpwlog").removeClass("on").text("");
        }
    });

    //이메일 유효성 검사
    $("#email").keyup(function(){
        if(!email.test($("#email").val())){
            $("#emaillog").addClass("on").text("형식에 맞게 입력하세요");
            return false;
        }else{
            $("#emaillog").removeClass("on").text("");
        }
    }); 

    //이름 유효성 검사
    $("#name").keyup(function(){
        if(!named.test($("#name").val())){
            $("#namelog").addClass("on").text("형식에 맞게 입력하세요");
            return false;
        }else{
            $("#namelog").removeClass("on").text("");
        }
    });
    //공백확인 
    var inputId = $("#join .inputid");
    inputId.keyup(function(){
        if($(this).val() == ""){
            $(this).siblings(".alert").addClass("on").text($(this).attr('name') + "를 입력해주세요");
            return false;
        }
    });

    //주민등록 번호 유효성 검사
    $("#num2").keyup(function(){
        //공백확인 
        if($("#num2").val() == "" || $("#num1").val() == ""){
            $("#numlog").addClass("on").text("주민등록번호를 입력해주세요");
            return false;
        }else{
            $("#numlog").removeClass("on").text("");
        }


        $(function fmtCheck(){
            var jumin = $("#num1").val() + $("#num2").val();
            var fmt = RegExp(/^\d{6}[1234]\d{6}$/);
            var buf = new Array(13);

            //주민번호 형식검사
            if(!fmt.test(jumin)){
                $("#numlog").addClass("on").text("주민등록번호 형식에 맞게 입력해주세요");
                return false;
            }

            //주민번호 존재검사
            for(var i=0; i<buf.length; i++){
                buf[i] = parseInt(jumin.charAt(i));
            }
            var multipliers = [2,3,4,5,6,7,8,9,2,3,4,5];
            var sum = 0;
            for(var i=0; i<12; i++){
                sum += (buf[i] *= multipliers[i]);
            }
            if((11 - (sum%11)) % 10 != buf[12]){
                $("#numlog").addClass("on").text("존재하지 않는 주민등록번호입니다.");
                return false;
            }

            //생일추출 
            var birthYear = (jumin.charAt(6) <= "2")? "19":"20";
            birthYear += $("#num1").val().substr(0,2);
            var birthMonth = $("#num1").val().substr(2,2);
            var birthDate = $("#num1").val().substr(4,2);

            $("#years").val(birthYear);
            $("#month").val(birthMonth);
            $("#day").val(birthDate);

        });
        
    }); //주민등록 번호 유효성 검사 end

});

//책 정보 검색하기

$(function(){
    $("#bookSearch").click(function(){

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: {query:$("#bookName").val()},
            headers: {Authorization: "KakaoAK ec09a4c04e2976aa9453f620d4371837"}
        })

        .done(function(msg){
            console.log(msg);
            $(".boxitem").append("<strong>" + msg.documents[0].title + "</strong>");
            $(".boxitem").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            //$(".result").append("<b>"+msg.documents[0].title+"<b>");
        })
    });
});

$(function(){
    $("#loadTxtBtn").click(function(){
        $("#localTxt").load("../loacal.txt");
    });
});

$(function(){
    $(".topbtn a").click(function(){
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	    return false;
    });
});