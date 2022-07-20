interface User {
  age: number;
  name: string;
}


// 변수에 활용한 인터페이스
var seho : User = {
  age : 33,
  name : '세호'
}

// 함수에 인터페이스 활용
function getUser(user: User){
  console.log(user);
}

const capt = {
  name : '캡틴',
  age: 30,
}

getUser(capt);


// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction{
  (a: number, b: number): number;
}

// 함수의 규칙 정의 가능
var sum : SumFunction;

sum = function (a: number, b: number):number{
  return a + b;
}


// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr1:StringArray = ['a','b','c'];
// arr1[0] = 10; 오류남.

// 딕셔너리
interface StringRegexDictionary {
  [key: string]: RegExp // 정규표현식 생성자가 있음
}

var obj1: StringRegexDictionary = {
  sth: /abc/,
  cssFile : /\.css$/,
  jsFile : /\.js$/,
}

obj1['cssFile'] = 'a';

Object.keys(obj).forEach(function(value) {})

// 인터페이스 확장
interface Person{
  name : string;
  age: number;
}

interface Developer extends Person{
  langauge : string;
}

var capt1 : Developer = {
  langauge : 'ts',
  name : '캡틴',
  age : 100
}

