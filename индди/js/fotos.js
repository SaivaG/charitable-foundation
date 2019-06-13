const current = document.querySelector('#current');
const imgs = document.querySelector('.imgs');
const img = document.querySelectorAll('.imgs img');
const opacity = 0.6;

// непрозрачность  1 фото
img[0].style.opacity = opacity;

imgs.addEventListener('click', imgClick);

function imgClick(e) {
  // сбросить непрозрачность
  img.forEach(img => (img.style.opacity = 1));

  // изменение с текущего фото на другое
  current.src = e.target.src;

  // исчезание
  current.classList.add('fade-in');

  // удаление через 5сек
  setTimeout(() => current.classList.remove('fade-in'), 500);

  e.target.style.opacity = opacity;
}
