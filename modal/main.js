function qs(el) {
  return document.querySelector(el);
}

const openBtn = qs('#open-modal');
const modalContainer = qs('.modal-container');
const closeBtn = qs('#close-modal');
const body = qs('body');

let scrollPosition = 0;
// scrollPosition = window.pageYOffset;
// console.log(scrollPosition)

openBtn.addEventListener('click', () => {
  modalContainer.classList.add('show-modal');
  // 스크롤방지
  scrollPosition = window.pageYOffset;
  body.style.overflow = 'hidden';
  body.style.position = 'fixed';
  body.style.top = `-${scrollPosition}px`;
  body.style.width = '100%';
  body.style.overflowY = 'scroll'
});

closeBtn.addEventListener('click', () => {
  modalContainer.classList.remove('show-modal')
  // 스크롤방지
  body.style.removeProperty('overflow');
  body.style.removeProperty('position');
  body.style.removeProperty('top');
  body.style.removeProperty('width');
  window.scrollTo(0, scrollPosition);
});

modalContainer.addEventListener('click', (e) => {
  const eventTarget = e.target;
  if (eventTarget.classList.contains("modal-container") ) {
    modalContainer.classList.remove('show-modal');
    // 스크롤방지
    body.style.removeProperty('overflow');
    body.style.removeProperty('position');
    body.style.removeProperty('top');
    body.style.removeProperty('width');
    window.scrollTo(0, scrollPosition);
  }
});