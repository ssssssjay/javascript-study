// const $inpTextarea = document.querySelector('#textarea-memo');
const $formMemo = qs('#form-memo');
const $inpTextarea = qs('#textarea-memo');
const $btnSubmit = qs('#btn-memo');
const $ul = qs('ul');
const savedMemos = localStorage.getItem('memos')


let memoList = [];

function qs(selector) {
  return document.querySelector(selector);
}

/*
로컬스토리지에는 스트링으로 값이 들어간다.

넣을때는 스트링지파이로, 빼낼때는 팔스로 빼내온다.

시나리오 
빈배열에 값을 하나씩 푸쉬로 넣음.
그 배열을 로컬스토리지에 저장
저장된 값을 빼내면서 뿌려줌(반복문 필요)

createElement 는 해봤으니까 innerHTML을 써볼까?
대충 백틱으로 하면 되지 않을까

필요한 함수가 뭐가 있을까?
저장하는거, 화면에 보여주는거(리스트태그삽입), 삭제하는거

memos [
  {
    id: Date,
    memo: memo
  },
  {
    id: Date,
    memo: memo
  },
  {
    id: Date,
    memo: memo
  },
]


*/

// textarea는 크기조절이 가능한게 기본값 => css로 못하게하기

$inpTextarea.addEventListener('input', activateBtn);
$formMemo.addEventListener('submit', submitMemo)

function activateBtn() {
  $btnSubmit.removeAttribute('disabled')
}

function saveMemo() {
  localStorage.setItem('memos', JSON.stringify(memoList))
}

function deleteMemo(e) {
  const li = e.target.parentElement;
  li.remove();
  memoList = memoList.filter((memo) => memo.id !== li.id);
  saveMemo();
}

function paintMemo(memo) {
  const li = document.createElement("li");
  li.id = memo.id;
  const h2 = document.createElement('h2');
  h2.innerText = memo.id;
  const p = document.createElement('p')
  p.innerText = memo.memo
  const button = document.createElement('button');
  button.innerText = '🗑';
  button.addEventListener('click', deleteMemo);
  li.appendChild(h2);
  li.appendChild(p);
  li.appendChild(button);
  $ul.appendChild(li);
}

function submitMemo(e) {
  e.preventDefault();
  const memo = $inpTextarea.value;
  $inpTextarea.value = '';
  const date = new Date().toLocaleString();
  const newMemo = {
    id: date,
    memo: memo
  };
  memoList.push(newMemo);
  paintMemo(newMemo);
  saveMemo();
}

if (savedMemos !== null) {
  const parsedMemos = JSON.parse(savedMemos);
  memoList = parsedMemos;
  parsedMemos.forEach(paintMemo);
}


// localstorage, setItem, getItem, removeItem, clear. JSON.stringify, JSON.parse