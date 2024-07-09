function frm() {
    const userId = document.getElementById('userId');
    const pw = document.getElementById('pw');
    const pwCheck = document.getElementById('pwCheck');
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const hobby = document.getElementById('hobby');



    // if(!(/^[a-zA-Z][a-zA-Z0-9]{3,11}$/.test(userId))){
    //     alert('아이디의 첫글자는 반드시 영문자이고 영문자, 숫자 포함 총 4~12자로 입력하시오.')
    //     return;
    // }
    // if (!/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[\W_]).{8,15}$/.test(pw)) {
    //     alert("비밀번호는 영문자, 숫자, 특수문자로 8자 이상 15자 이하로 입력해야 합니다.");
    //     return;
    // }
    // if(pw !== pwCheck){
    //     alert('위의 비밀번호와 일차하게 입력하시오.')
    //     return;
    // }
    // if(!/^[가-힣]{2,}$/.test(name)){
    //     alert('이름은 한글로만 2글자 이상 입력하시오.')
    //     return;
    // }
    // if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    //     alert("이메일 형식이 올바르지 않습니다.");
    //     return;
    // }
 
    // alert("회원가입이 완료되었습니다!");


    // 교수님 풀이
    //아이디
    let reg = /^[a-z][a-z\d]{3,11}$/i;
    if(!reg.test(userId.value)){
        alert('유효한 아이디가 아닙니다.');
        userId.value = '';
        userId.focus();
        return false;
    }

    //비밀번호
    let pwReg = /^[a-z\d!@#$%^&*]{8,15}$/i;
    if(!pwReg.test(pw.value)){
        alert('유효한 비밀번호가 아닙니다.')
        pw.value = '';
        pw.focus();
        return false;
    }

    // 비밀번호 일치 여부
    if(pw.value != pwCheck.value){
        alert('동일한 비밀번호가 아닙니다.');
        pwCheck.value = '';
        pwCheck.focus();
        return false;
    }

    // 이름
    let nameReg = /^[가-힣]{2,}$/;
    if(!nameReg.test(name.value)){
        alert('유효한 이름이 아닙니다')
        name.value = '';
        name.focus();
        return false;
    }

    let emailReg = /^[a-zA-Z0-9_]+@[a-zA-Z_]+\.[a-zA-Z_]{2,3}$/;
    emailReg = /^\w+@\w+\.\w+(\.\w+)?$/;
    if(!emailRdg.test(email.value)){
        alert('유효한 이메일 형식이 아닙니다.')
        email.value='';
        email.focus();
        return;
    }
    alert("회원가입이 완료되었습니다!");

    frm.submit();


}

function resetForm() {
    userId.value = '';
    pw.value = '';
    pwCheck.value = '';
    name.value = '';
    email.value = '';
    hobby.value = '';
    adress.value = '서울';

}