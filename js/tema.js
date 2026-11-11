(function () {
    'use strict';

    const STORAGE_KEY = 'biblioweb_theme';

    function getPreferredTheme() {
        const storedTheme = localStorage.getItem(STORAGE_KEY);
        if (storedTheme) {
            return storedTheme;
        }
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function setTheme(theme) {
        document.documentElement.setAttribute('data-bs-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        updateThemeButton(theme);
    }

    function updateThemeButton(theme) {
        const toggleBtn = document.getElementById('theme-toggle');
        if (!toggleBtn) return;

        if (theme === 'dark') {
            toggleBtn.innerHTML = '🌙';
            toggleBtn.setAttribute('title', 'Cambiar a modo claro');
            toggleBtn.setAttribute('aria-label', 'Cambiar a modo claro');
        } else {
            toggleBtn.innerHTML = '☀️';
            toggleBtn.setAttribute('title', 'Cambiar a modo oscuro');
            toggleBtn.setAttribute('aria-label', 'Cambiar a modo oscuro');
        }
    }

    const initialTheme = getPreferredTheme();
    document.documentElement.setAttribute('data-bs-theme', initialTheme);

    document.addEventListener('DOMContentLoaded', () => {
        updateThemeButton(initialTheme);

        const toggleBtn = document.getElementById('theme-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => {
                const currentTheme = document.documentElement.getAttribute('data-bs-theme');
                const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
                setTheme(nextTheme);
            });
        }
    });
})();
