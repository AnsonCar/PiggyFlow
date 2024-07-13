import { killToken } from "/static/js/utils/logout.js";

(() => {
  document.body.setAttribute('data-theme', matchMedia('(prefers-color-scheme: dark)').matches ? 'black' : 'lofi');
  matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) =>  {
    document.body.setAttribute('data-theme', e.matches ? 'black' : 'lofi');
  });

  document.addEventListener('DOMContentLoaded', async () => {
    const saveButton = document.getElementById('logoutBtn');
    saveButton.addEventListener('click', killToken);
  });
})()