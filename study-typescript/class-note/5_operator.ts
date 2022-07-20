// function logMessage (value : any){
//   console.log(value);
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);
// 타입의 장점을 사용할 수 없음.

var seho3: string | number | boolean;

function logMessage (value : string | number){
  if(typeof value === 'number'){
    value.toLocaleString();
  }
  if(typeof value === 'string'){
    value.toString();
  }

  throw new TypeError('value must be string or number');
}

// 두개 이상의 타입을 지정 가능함.
logMessage('hello');
logMessage(100);

interface Developer3{
  name: string;
  skill : string;
}

interface Person3 {
  name : string;
  age: number;
}

function askSomeone(someone: Developer3 | Person3){
  
}

askSomeone({name : '디벨로퍼', skill : '웹개발'});
askSomeone({name : '캡틴', age: 100});

// never 불가능
var capt2 : string & number & boolean;

function askSomeone2(someone: Developer3 & Person3){
  // someone.
  // someone.name
  // someone.skill
  // someone.age
}

askSomeone2({name : '디벨로퍼', skill : '개발', age: 130});
