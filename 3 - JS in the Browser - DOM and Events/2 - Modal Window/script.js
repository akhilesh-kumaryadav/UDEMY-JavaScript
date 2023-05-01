'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const showModel = document.querySelectorAll('.show-modal');
const closeModel = document.querySelector('.close-modal');

const closeModelFunction = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const showModelFunction = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener('click', showModelFunction);
}

closeModel.addEventListener('click', closeModelFunction);
overlay.addEventListener('click', closeModelFunction);

document.addEventListener('keydown', function (keyEvent) {
  if (keyEvent.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModelFunction();
    }
  }
});
