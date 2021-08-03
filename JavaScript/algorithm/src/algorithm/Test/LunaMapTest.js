// 1. 체크값을 담을 리스트를 만든다
// 2. 체크값을 넣는다 (기본값 false로 누르면 변환)
// 3. 값을 넣는 로우 값들만 true로 만든다

let checkArray = new Array();
console.log('checkArray : ', checkArray);
let checkBtn = false;
console.log('checkBtn : ', checkBtn);

<form>
    <input type='checkbox' name='fruits' value='apple' />사과
    <input type='checkbox' name='fruits' value='banana' />바나나
    <input type='checkbox' name='fruits' value='orange' />오렌지
</form>