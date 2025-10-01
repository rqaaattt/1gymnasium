// window.addEventListener('load', function () {
//   const preloader = document.getElementById('preloader');
//   if (preloader) {
//     preloader.style.display = 'none';
//   }
// });
  

// document.body.classList.add('no-scroll');

// window.addEventListener('load', function () {
//   const preloader = document.getElementById('preloader');
//   if (preloader) {
//     setTimeout(() => {
//       preloader.style.display = 'none';
//       document.body.classList.remove('no-scroll'); // возвращаем скролл
//     }, 0); // для теста задержка
//   }
// });


document.body.classList.add('no-scroll');

window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    // сначала плавное исчезновение
    preloader.classList.add('hidden');

    // потом полное удаление из потока
    setTimeout(() => {
      preloader.style.display = 'none';
      document.body.classList.remove('no-scroll');
    }, 100); // должно совпадать с transition в CSS
  }
});
