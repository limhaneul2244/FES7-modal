const modal = document.getElementById('modal');
const dimmed = document.getElementById('dimmed');
/**
 * 로그인 클릭시 모달 생성
 */
const modalShow = () => {
  modal.classList.add('show');
  dimmed.classList.add('show');
};

/**
 * 모달 닫기 버튼 클릭시 모달창 사라짐
 */
const closeBtn = () => {
  modal.classList.remove('show');
  dimmed.classList.remove('show');
};

/**
 * input 값 체크
 */
function changeValue (event) {
  const eventTarget = event.target;
  const inputVal = eventTarget.value;
  console.log(inputVal.length)
  const inputElement = eventTarget.parentElement; //.input-form 가리킴
  const requiredValue = eventTarget.nextElementSibling;
  // console.log(inputElement, requiredValue)

  if(inputVal.length === 0) { //아무것도 입력하지 않았을 때
    requiredValue.classList.add('show');
  } else {
    requiredValue.classList.remove('show');
  }
}