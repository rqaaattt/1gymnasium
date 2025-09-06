// const currentLangBtn = document.getElementById('current-lang');
// const dropdown = document.getElementById('lang-dropdown');

// // Карта языков
// const langMap = {
//   'index.html': 'RU <span class="material-symbols-outlined arrow">arrow_back_ios</span>',
//   'kz/index.html': 'KZ <span class="material-symbols-outlined arrow">arrow_back_ios</span>',
//   'en/index.html': 'EN <span class="material-symbols-outlined arrow">arrow_back_ios</span>'
// };

// // Показ / скрытие меню
// currentLangBtn.addEventListener('click', (e) => {
//   e.stopPropagation(); // чтобы клик не улетал в document
//   dropdown.classList.toggle('hidden');
//   currentLangBtn.classList.toggle('open');
// });

// // Выбор языка
// dropdown.addEventListener('click', (e) => {
//   if (e.target.tagName === 'LI') {
//     const file = e.target.dataset.file;
//     window.location.href = file;
//   }
// });

// // Закрытие при клике вне меню
// document.addEventListener('click', (e) => {
//   if (!e.target.closest('.language-selector')) {
//     dropdown.classList.add('hidden');
//     currentLangBtn.classList.remove('open');
//   }
// });

// // Установка текущего языка
// const currentFile = location.pathname;

// const current = Object.entries(langMap).find(([file]) =>
//   currentFile.endsWith(file)
// );

// if (current) {
//   const [filename, label] = current;
//   currentLangBtn.innerHTML = label;

//   // Удаляем текущий язык из списка
//   document.querySelectorAll('#lang-dropdown li').forEach((li) => {
//     if (li.dataset.file === filename) {
//       li.remove();
//     }
//   });
// }

