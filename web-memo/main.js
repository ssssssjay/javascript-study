// const $inpTextarea = document.querySelector('#textarea-memo');
const $formMemo = qs('#form-memo');
const $inpTextarea = qs('#textarea-memo');
const $btnSubmit = qs('#btn-memo');
const $ul = qs('ul');
const savedMemos = localStorage.getItem('memos')

let memoList = [];

if (savedMemos !== null) {
  const parsedMemos = JSON.parse(savedMemos);
  memoList = parsedMemos;
  parsedMemos.forEach(paintMemo);
}

function qs(selector) {
  return document.querySelector(selector);
}

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
  $btnSubmit.setAttribute('disabled', true);
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

$inpTextarea.addEventListener('input', activateBtn);
$formMemo.addEventListener('submit', submitMemo);
