//타입 단언 (type assertion)

var any ;
any = 20;
any = 'a';
var best = any as string;



// Dom API 조작
// <div id="app"> hi </div>
// HTMLDivElement
var div = document.querySelector('div');
div?.innerText