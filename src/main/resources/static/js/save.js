/*ajax 호출*/
const emailCheck = () => {
    const email = document.getElementById("memberEmail").value;
    console.log("입력값 : ", email);
    const checkResult = document.getElementById("check-result");
    event.preventDefault();
    $.ajax({
        // 요청방식: post, url: "email-check", 데이터 : 이메일
        type: "post",
        url: "/member/email-check",
        data: {
            "memberEmail": email
        },
        success: function(result){
            console.log("요청성공", result);
            if(result == "ok"){
                alert("사용가능한 이메일 입니다.");
                checkResult.alert = "사용가능한 이메일 입니다";
            }else{
                alert("이미 사용중인 이메일 입니다.");
                checkResult.alert = "이미 사용중인 이메일 입니다.";
            }
        },
        error: function(err){
            console.log(err);
        }
    })
};
$(document).ready(function(){
    $('#join').click(function(){
        alert("환영합니다");
    })
})


