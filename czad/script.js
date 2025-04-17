function toggleContrast() {
  document.body.classList.toggle('high-contrast');
}

function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

function changeFontSize(action) {
  document.body.classList.remove('small-font', 'large-font');
  if (action === 'increase') {
    document.body.classList.add('large-font');
  } else if (action === 'decrease') {
    document.body.classList.add('small-font');
  }
}
