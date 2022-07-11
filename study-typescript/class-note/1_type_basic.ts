// JS 방식
// var str = 'hello';

// TS 문자열 선언
let str: string = 'hello';

// TS 숫자
let num: number = 10;

// TS 배열
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ['Capt', 'Thor', 'Hulk', 10]; // 10에서 에러
let items: number[] = [1, 2, 3];

// TS 튜플 배열의 순서의 타입까지 정의
let address1: [string, number] = ['gangnam', 10];

// TS 객체
let obj: object = {};
let person: object = {
  name: 'capt',
  age: 100,
};

// 일단 object면 그 안에 뭐가 들어오든 그렇게 신경 안씀.

let person2: { name: string; age: number } = {
  name: 'thor',
  age: 1000,
};

// 이런식으로 객체의 요소의 타입도 정할 수 있음.

// TS 진위값
let show: boolean = true;
