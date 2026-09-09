(function () {
  let savedTheme;
  try { savedTheme = localStorage.getItem('cpe-theme'); } catch { /* Storage may be unavailable. */ }
  const theme = savedTheme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
