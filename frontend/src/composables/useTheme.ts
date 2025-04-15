import { onMounted, ref } from 'vue';

export function useTheme() {
  const theme = ref(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  onMounted(() => {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
      theme.value = event.matches ? 'dark' : 'light';
    });
  });

  return theme;
}
