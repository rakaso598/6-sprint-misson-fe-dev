// 유저 데이터
const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
];

// 회원가입 버튼 객체화
const signupBtn = document.getElementById('btn-submit');

// 1. 회원가입 버튼 클릭.
signupBtn.addEventListener('click', (event) => {
    event.preventDefault(); // 기본 이벤트 차단
    
    // 2. 이메일 인풋 요소 객체화
    const inputEmail = document.getElementById('input-email');

    // 3. 입력값이 데이터베이스에 존재하는지 대조.
    const findedUser = USER_DATA.find(user => user['email'] === inputEmail.value);
    if(findedUser) {
        // 3-1. 입력값이 데이터베이스에 있으면, 중복 알림 표시.
        alert('사용 중인 이메일입니다.');
    } else {
        // 3-2. 입력값이 데이터베이스에 없으면, 로그인 화면으로 이동.
        alert('회원가입 성공! 로그인 페이지로 이동합니다.');
        window.location.href = "/login";
    }
});