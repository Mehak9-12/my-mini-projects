const container = document.querySelector('.main-container');
const navAnchorEl = document.querySelectorAll('a');
const contents = document.querySelectorAll('.content');
container.addEventListener('click', (e) => {
  const link = e.target.closest('.tab');
  if (!link) return;
  navAnchorEl.forEach((lk) => {
    lk.classList.remove('active-tab');
  });
  contents.forEach((c) => {
    c.classList.remove('active-content');
  });
  link.classList.add('active-tab');
  document
    .querySelector(`.content-${link.dataset.tab}`)
    .classList.add('active-content');
});
