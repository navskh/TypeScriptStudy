// 타입추론 기본 1
var a = 10; // number
var b = 'abc' // string


function getB(b){ // any
  return b; // any
}

function getC(c = 10){ // number
  var d = 'hi'; // stirng

  return d + c; // number + string : string
}

// 타입 추론 기본2
// interface Dropdown1<T> {
//   value : T;
//   title : string;
// }

// // 변수 형에 따라서 초기화 
// var shoppingItem: Dropdown1<string> = {
//   value : 'item 1',
//   title : 'title 1'
// }

// 타입추론 기본3
  interface Dropdown1<T> {
    value : T;
    title : string;
  }
  
  interface DetailedDropdown<K> extends Dropdown1<K>{
    description: string;
    tag: K;
  }

  // 변수 형에 따라서 초기화 
  var shoppingItem: DetailedDropdown<string> = { 
    title : 'title 1',
    description : 'ab',
    value: 'yes!',
    tag:'t'
  }

  // Best Common Type : 지가 알아서 찾아간ㄷ.
  var arr = [1,2,true, 'a'];