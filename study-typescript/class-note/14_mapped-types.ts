type Heroes = 'Hulk' | 'Capt' | 'Thor'
type HeroAges = { [ K in Heroes ] : number } 


// 아래와 같이 뜬다.
// type HeroAges = {
//   Hulk: number;
//   Capt: number;
//   Thor: number;
// }

const ages: HeroAges = {
  Hulk: 33,
  Capt : 100,
  Thor : 1000
}

// for in 반복문 코드
// var arr = ['a', 'b', 'c'];
// for(var key in arr){
//   console.log(arr[key]);
// }