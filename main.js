// Поява фото при прокручуванні
function onScrollFadeIn() {
  document.querySelectorAll('.fade-photo').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', onScrollFadeIn);
window.addEventListener('load', onScrollFadeIn);
// Плавна поява елементів .fade-photo при прокрутці
function fadeInPhotos() {
  document.querySelectorAll('.fade-photo').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', fadeInPhotos);
window.addEventListener('load', fadeInPhotos);
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
