interface Developer {
  name: string;
  skill: string;
}

interface Person5{
  name: string;
  age: number;
}

function introduce(): Developer | Person5 {
  return {name : 'Tony', age : 33, skill : 'iron making'}
}

var tony = introduce();
console.log(tony.name);

if((tony as Developer).skill){
  var tonyskill = (tony as Developer).skill;
}
else if ((tony as Person5).age){
  var tonyage = (tony as Person5).age;
}

// 코드 가독성이 떨어짐. 

// 타입가드 정의
// is 해당타입
function isDeveloper(target : Developer | Person5): target is Developer{
  return (target as Developer).skill !== undefined;
}

if(isDeveloper(tony)){
  console.log(tony.skill);
}else{
  console.log(tony.age);
}