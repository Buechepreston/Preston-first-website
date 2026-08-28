const year = document.querySelector('#year');
const copyButton = document.querySelector('#copy-email');

year.textContent = new Date().getFullYear();

copyButton.addEventListener('click', async () => {
  const original = copyButton.textContent;
  try {
    await navigator.clipboard.writeText(copyButton.dataset.email);
    copyButton.textContent = 'Email copied';
  } catch {
    copyButton.textContent = 'buechepreston@gmail.com';
  }
  setTimeout(() => { copyButton.textContent = original; }, 2200);
});
