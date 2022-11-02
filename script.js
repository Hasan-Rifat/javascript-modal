'use strict';

// code start

//modal element
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal');

//open modal function
const openModule = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
//close modal function
const closeModule = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// open modal
btnOpenModal.forEach(i => {
  i.addEventListener('click', openModule);
});

//close modal

btnCloseModal.addEventListener('click', closeModule);
overlay.addEventListener('click', closeModule);

// keypress
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModule();
  }
  if (e.key === 'f' && modal.classList.contains('hidden')) {
    openModule();
  }
});
