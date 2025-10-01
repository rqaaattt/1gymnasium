const currentLangBtn2 = document.getElementById('current-lang');
const dropdown2 = document.getElementById('lang-dropdown');

// Карта языков
const langMap2 = {
  'index.html': 'RU <span class="material-symbols-outlined arrow">arrow_back_ios</span>',
  'kz/index.html': 'KZ <span class="material-symbols-outlined arrow">arrow_back_ios</span>',
  'en/index.html': 'EN <span class="material-symbols-outlined arrow">arrow_back_ios</span>'
};

// Показ / скрытие меню
currentLangBtn2.addEventListener('click', (e) => {
  e.stopPropagation(); // чтобы клик не улетал в document
  dropdown2.classList.toggle('hidden');
  currentLangBtn2.classList.toggle('open');
});

// Выбор языка
dropdown2.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    const file2 = e.target.dataset.file;
    window.location.href = file2;
  }
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

