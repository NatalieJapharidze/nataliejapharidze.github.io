(function () {
    'use strict';

    const themeToggle = document.getElementById('theme-toggle');
    const themeStylesheet = document.getElementById('theme-style');

    const currentTheme = localStorage.getItem('theme') || 'dark';

    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-theme');
            if (themeStylesheet) themeStylesheet.setAttribute('href', 'styles/light-theme.css');
        } else {
            document.body.classList.remove('light-theme');
            if (themeStylesheet) themeStylesheet.setAttribute('href', 'styles/dark-theme.css');
        }
    }

    applyTheme(currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', function () {
            const isLight = document.body.classList.toggle('light-theme');
            const theme = isLight ? 'light' : 'dark';
            if (themeStylesheet) themeStylesheet.setAttribute('href', 'styles/' + theme + '-theme.css');
            localStorage.setItem('theme', theme);
        });
    }
})();
