// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText(10); // 숫자 10 
// logText('하이'); // 문자열 하이
// logText(true); // 진위값 true

// function logText<T>(text: T):T{
//   console.log(text);
//   return text;
// }

// T : string 매칭이 되어 string 형으로 결정 됨.
// logText<string>('하이');

// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number){
//   console.log(num);
//   return num;
// }

// logNumber(10);

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

// const a = logText('a');
// a.split('');//에러가 뜸. 보장된 형이 split이 제공되지 않기 때문임.
// logText(10);

function logText<T>(text: T):T{
  console.log(text);
  return text;
}

const str = logText<string>('abc');
str.split('') // 에러 안뜸. (string으로 지정이 됨!)
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// `interface Dropdown{
//   value: string;
//   selected: boolean;
// }

// const obj : Dropdown = {value: 'abc', selected: false};`

interface Dropdown<T>{
  value: T;
  selected : boolean
}

const obj: Dropdown<string> = {value: 'abc', selected: false}


// 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {
//   console.log(text.length);
//   text.forEach(function (text){
//     console.log(text);
//   });
//   return text;
// }

// logTextLength<string>(['hi', 'abc']);
// 'abc'.length;

// 제네릭 타입 제한 2 - 정의된 타입 이용하기.
interface LengthType {
  length: number;
}


function logTextLength<T extends LengthType>(text: T):T {
  text.length;
  return text;
}
// logTextLength(10); // 에러남.
logTextLength({length: 10});


// 제네릭 타입 제한 3 - keyof
interface ShoppingItem{
  name: string;
  price: number;
  stock: number;
}

// keyof : 인터페이스의 키 값중에 하나를 가져온다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T):T{
  return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name");