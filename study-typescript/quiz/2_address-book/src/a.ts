// function fetchItems(): string[] {
//   let items = ['a', 'b', 'c'];
//   return items;
// }

function fetchItems(): Promise<string[]> {
  let items = ['a', 'b', 'c'];

  return new Promise(function (resolve) {
    resolve(items);
  });
}

let result = fetchItems();
console.log(result);
