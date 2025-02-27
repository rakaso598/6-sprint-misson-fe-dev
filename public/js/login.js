const inputEmail = document.getElementById('input-email');
const emailError = document.getElementById('email-error');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // 이메일 검증 정규표현식
let isEmailOK = false; // 이메일 검증 상태 변수

const inputPw = document.getElementById('input-pw');
const pwError = document.getElementById('pw-error');
let isPwOK = false; // 비밀번호 검증 상태 변수

const btnSubmit = document.getElementById('btn-submit');

updateButtonState(); // 로드 시 최초 호출


// 포커스인 시 테두리
inputEmail.addEventListener('focusin', (event) => {
  inputEmail.style.borderColor = '#f3f4f6';
});

// 이메일 유효성 검증
inputEmail.addEventListener('focusout', (event) => {
  event.preventDefault();

  if (inputEmail.value === '') {
    // 입력값이 없는 경우
    emailError.textContent = '이메일을 입력해주세요.'; // 에러 메시지

    emailError.style.color = 'red';
    inputEmail.style.borderColor = 'red';
    inputEmail.style.borderWidth = '2px';

    isEmailOK = false;

  } else if (emailRegex.test(inputEmail.value) === false) {
    // 이메일 형식이 아닌 경우
    emailError.textContent = '잘못된 이메일 형식입니다.'; // 에러 메시지

    emailError.style.color = 'red';
    inputEmail.style.borderColor = 'red';
    inputEmail.style.borderWidth = '2px';

    isEmailOK = false;

  } else {
    inputEmail.style.borderColor = '#f3f4f6';

    isEmailOK = true; // 상태값 변경 true
  }

  updateButtonState() // 버튼 상태 업데이트
});


inputPw.addEventListener('focusin', (event) => {
  inputPw.style.borderColor = '#f3f4f6'; // 포커스인 시 테두리
});

// 비밀번호 유효성 검증
inputPw.addEventListener('focusout', (event) => {
  event.preventDefault();

  if (inputPw.value === '') {
    // 비밀번호가 없는 경우
    pwError.textContent = '비밀번호를 입력해주세요.'; // 에러 메시지

    pwError.style.color = 'red';
    inputPw.style.borderColor = 'red';
    inputPw.style.borderWidth = '2px';

    isPwOK = false;

  } else if ((inputPw.value.length < 8) === true) {
    // 값이 8자 미만인 경우
    pwError.textContent = '비밀번호를 8자 이상 입력해주세요.'; // 에러 메시지

    pwError.style.color = 'red';
    inputPw.style.borderColor = 'red';
    inputPw.style.borderWidth = '2px';

    isPwOK = false;

  } else {
    inputPw.style.borderColor = '#f3f4f6'; // 포커스인 기본색

    isPwOK = true; // 상태값 변경 true
  }

  updateButtonState() // 버튼 상태 업데이트
});


// 로그인버튼 클릭 시 폼 제출
btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();
  const userForm = document.getElementById('user-form'); // 유저 폼 객체
  const email = document.getElementById('input-email').value; // 이메일 인풋 값
  const password = document.getElementById('input-pw').value; // 비밀번호 인풋 값

  const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
  ];

  // 입력값과 일치하는 유저가 있는지 탐색
  const findUser = USER_DATA.find(user => (user.email === email) && (user.password === password));

  if (findUser) {
    userForm.submit(); // 폼 제출

  } else {
    alert('비밀번호가 일치하지 않습니다.');
    isPwOK = false; // 비밀번호 상태 변수를 기본값 false로 되돌림.
    userForm.reset(); // 폼 초기화

    updateButtonState(); // 버튼 상태 업데이트
  };
});


// 버튼 상태 업데이트 함수
function updateButtonState() {
  btnSubmit.disabled = true; // 기본값: 비활성
  
  if ((isEmailOK && isPwOK) === false) {
    btnSubmit.style.backgroundColor = 'gray';
    btnSubmit.style.cursor = 'default';
    btnSubmit.disabled = true; // 버튼 비활성화
  } else {
    btnSubmit.style.backgroundColor = '#3691FF';
    btnSubmit.style.cursor = 'pointer';
    btnSubmit.disabled = false; // 버튼 활성화
  }
}