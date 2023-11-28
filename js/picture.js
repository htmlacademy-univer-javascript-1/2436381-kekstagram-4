function openModal() {
  const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

function closeModal() {
const bigPicture = document.querySelector('.big-picture');
  bigPicture.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

const thumbnail = document.querySelector('.thumbnail');
thumbnail.addEventListener('click', openModal);

const closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', closeModal);

const escape = document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeModal();
  }
});

export {openModal, closeModal, thumbnail, closeButton, escape}
