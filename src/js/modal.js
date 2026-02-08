const form = document.querySelector('.subscr-form');
const modal = document.querySelector('.modal-overlay');
const modalContent = document.querySelector('.modal');
const closeBtns = document.querySelectorAll('.modal-cross, .modal-close-btn');

function openModal() {
  modal.classList.add('subscription-open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('subscription-open');
  document.body.style.overflow = '';
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (!form.checkValidity()) return;

  openModal();
  form.reset();
});

// закрытие по кнопкам
closeBtns.forEach(btn => {
  btn.addEventListener('click', closeModal);
});

// закрытие по клику вне модалки
modal.addEventListener('click', e => {
  if (!modalContent.contains(e.target)) {
    closeModal();
  }
});

// (опционально) закрытие по Esc
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && modal.classList.contains('subscription-open')) {
    closeModal();
  }
});
