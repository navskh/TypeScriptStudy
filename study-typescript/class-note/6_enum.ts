enum Shoes {
  Nike = '나이키',
  Adidas = '아디다스',
}

var myShoes = Shoes.Nike;
console.log(myShoes);// 나이키 

// 예제
enum Answer {
  Yes = 'Y',
  No = 'N',
}
function askQuestion(answer: Answer){
  if(answer === Answer.Yes){
    console.log('정답입니다.');
  }
  if(answer === Answer.No){
    console.log('오답입니다.');
  }
}

// askQuestion('예스');
// askQuestion('y');
// askQuestion('Yes');
askQuestion(Answer.Yes);

// 이래 봤자 똑같자나.. 뭐 쓸 이유가 있나...
// Dropdown에서 쓴다는데... 잘 모르겠음.


