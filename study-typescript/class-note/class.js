function Person(name, age){
  this.name = name;
  this.age = age;
}

var cpat = new Person('캡틴', 100);

// 위와 아래는 같다. Syntatic Sugar 라고 알아보기 쉽게 만든 것임. 
// prototype에 의한 상속이 이뤄지는 것이다. 

class Person{
  //  클래스 로직
  constructor(name, age){
    console.log('생성되었습니다.');  
    this.name = name;
    this.age = age;
  }
}

new Person('세호', 30); //생성되었습니다.
console.log(seho);


