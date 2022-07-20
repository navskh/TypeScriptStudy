class Person1 {
  name : string; // 변수를 선언해줘야 함. (public, private 등등을 설정할 수 있음)
  age : number; 

  constructor(name: string, age: number){ // 형도 지정해야 함.
    this.name = name;
    this.age = age;
  }
}

// 리액트 예전 문법 - 클래스 기반 코드 
// class App extends React.Component {}

// 리액트 최신 문법 - 훅 기반의 함수형 코드 
// function App() {
//   return <div> Hello World </div>
// }