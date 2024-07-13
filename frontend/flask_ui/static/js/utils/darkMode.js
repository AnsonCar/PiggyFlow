const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
darkModeQuery.addEventListener('change', (e) =>  {
    document.body.setAttribute('data-theme', e.matches ? 'black' : 'lofi');
});