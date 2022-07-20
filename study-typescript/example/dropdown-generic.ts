interface DropdownItem<T> {
  value: T;
  selected: boolean; 
}

// 위의 제네릭을 사용하여 선언하면 아래의 인터페이스들이 필요없어진다.
// interface Email {
//   value : string;
//   selected : boolean;
// }

// interface ProductNubmer {
//   value : number;
//   selected : boolean;
// }

// interface TrueFalse{
//   value : boolean;
//   selected: boolean;
// }

const emails:DropdownItem<string>[] = [
  { value: 'naver.com', selected: true },
  { value: 'gmail.com', selected: false },
  { value: 'hanmail.net', selected: false },
];



const numberOfProducts: DropdownItem<number>[] = [
  { value: 1, selected: true },
  { value: 2, selected: false },
  { value: 3, selected: false },
];

function createDropdownItem(item: DropdownItem<T> | DropdownItem<number>) {
  const option = document.createElement('option');
  option.value = item.value.toString();
  option.innerText = item.value.toString();
  option.selected = item.selected;
  return option;
}

// NOTE: 이메일 드롭 다운 아이템 추가
emails.forEach(function (email) {
  const item = createDropdownItem(email);
  const selectTag = document.querySelector('#email-dropdown');
  selectTag.appendChild(item);
});
