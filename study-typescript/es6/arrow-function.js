// 함수 선언문
function sum(a,b){
  return a+b;
}

// 함수 표현식
var sum = function (a,b){
  return a+b;
}

// ES6+ - 함수 표현 식
var sum = (a,b) => {
  return a+b;
}

// funciton 이라는 8글자를 => 문자 두개로 대치한다.


// 이렇게도 할 수 있음.
var sum = (a,b) => a+b;

// 타입스크립트의 화살표 함수
var sum = (a: number,b: number): number => {
  return a+b;
}
