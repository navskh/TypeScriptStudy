// 함수의 파라미터에 타입을 정의하는 방식
function sum3(a: number, b: number) {
  return a + b;
}
sum3(10, 20);

// 함수의 반환 값에 타입을 정의하는 방식
function add2(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식
function sum4(a: number, b: number): number {
  return a + b;
}

// 30, 40, 50은 에러가 뜸.(불필요한 인자를 넣었다.)
sum4(10, 20, 30, 40, 50);
// 인자의 갯수가 안맞아도 에러
sum4(10);

// 함수의 옵셔널 파라미터
function log(a: string, b?: string, c?: string) {}

// 물음표 뒤에 넣으면 이씅면 넣고 없으면 넣지 말아라
log('hello world');
log('hello ts', 'abc');
