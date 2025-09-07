const currentLangBtn2 = document.getElementById('current-lang');
const dropdown2 = document.getElementById('lang-dropdown');

// Показ / скрытие меню
currentLangBtn2.addEventListener('click', (e) => {
  e.stopPropagation(); // чтобы клик не улетал в document
  dropdown2.classList.toggle('hidden');
  currentLangBtn2.classList.toggle('open');
});


// Закрытие при клике вне меню
document.addEventListener('click', (e) => {
  if (!e.target.closest('.language-selector')) {
    dropdown2.classList.add('hidden');
    currentLangBtn2.classList.remove('open');
  }
});

// Установка текущего языка
const currentFile2 = location.pathname;

const current2 = Object.entries(langMap2).find(([file]) =>
  currentFile2.endsWith(file)
);

if (current2) {
  const [filename, label] = current2;
  currentLangBtn2.innerHTML = label;

  // Удаляем текущий язык из списка
  document.querySelectorAll('#lang-dropdown li').forEach((li) => {
    if (li.dataset.file === filename) {
      li.remove();
    }
  });
}

