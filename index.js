const esButton = document.getElementById('ese');
const enButton = document.getElementById('ene');


esButton.addEventListener('click', () => {
  document.documentElement.setAttribute("lang", 'es');
});
enButton.addEventListener('click', () => {
  document.documentElement.setAttribute("lang", 'en');
});
