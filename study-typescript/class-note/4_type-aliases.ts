interface Person {
  name : string;
  age : number;
}

type Person1 = {
  name : string,
  age :number
}

// 인터페이스를 사용한 예
var seho1: Person = {
  name : '세호',
  age: 30
}

// 타입별칭을 사용한 예
var seho2: Person1 = {
  name : '세호',
  age: 30
}

type MyString = string;
var str2: MyString = 'hello';

type Todo = {id: string; title: string; done: boolean};
function getTodo(todo: Todo){

}