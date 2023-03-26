/*ajax 호출*/
const emailCheck = () => {
    const email = document.getElementById("memberEmail").value;
    console.log("입력값 : ", email);
    const checkResult = document.getElementById("check-result");
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
                console.log("사용가능한 이메일 입니다.");
                checkResult.innerHTML = "사용가능한 이메일 입니다";
            }else{
                console.log("이미 사용중인 이메일 입니다.");
                checkResult.innerHTML = "이미 사용중인 이메일 입니다.";
            }
        },
        error: function(err){
            console.log(err);
        }
    })
}
