// // 인터페이스

// interface Developer {
//   name : string;
//   skill : string;
// }

// interface Person{
//   name : string;
// } 

// var developer: Developer;
// var person : Person;


// 오른쪽의 변수의 타입이 더 많아야 타입 호환이 된다.
// developer = person;// 에러
// person = developer;

// class Person {
//   name: string;
//   skill : string;
// }

// developer = new Person();

//함수
var add = function(a: number){
  // console.log(a);
}

var sum = function(a: number, b:number){
  // return a + b;
}

// sum이 add의 함수의 구조보다 더 크다라고 한다.

// add = sum; // 당연히 안됨.
sum = add;

// 제네릭
interface Empty<T>{

}
var empty1 : Empty<string>;
var empty2:  Empty<number>;

empty1 = empty2;

interface NotEmpty<T>{
  data: T;
}

var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>

notempty1 = notempty2;