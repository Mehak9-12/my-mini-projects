const openBtn = document.querySelector('#open');
const closeBtn = document.querySelector('#close');
const modal = document.querySelector('.modals');
const overlaying = document.querySelector('.overlays');
function opens() {
  modal.classList.remove('hidden');
  overlaying.classList.remove('hidden');
}
function remove() {
  modal.classList.add('hidden');
  overlaying.classList.add('hidden');
}
openBtn.addEventListener('click', opens);
closeBtn.addEventListener('click', remove);
overlaying.addEventListener('click', remove);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    remove();
  }
});
