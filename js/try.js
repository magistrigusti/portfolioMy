const btnDarkMode = document.querySelector('.dark-mode-btn');

if (windows.matchMedia && windows.matchMedia("(preers-color-scheme: 'dark')").matches) {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
}

if (localstorage.getItem('darkMode') === 'dark') {
  btnDarkMode.classList.add('dark-mode-btn--active');
  document.body.classList.add('dark');
} else if ()