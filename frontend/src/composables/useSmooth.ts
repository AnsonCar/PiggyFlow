import { onMounted } from 'vue';

export function useSmooth() {
  onMounted(() => {
    // 为所有带有 href 属性的 <a> 标签添加点击事件
    document.querySelectorAll('a[href^="#"]').forEach((anchor: Element) => {
      if (anchor instanceof HTMLAnchorElement) {
        anchor.addEventListener('click', (e: Event) => {
          e.preventDefault(); // 阻止默认跳转行为

          // 平滑滚动到目标部分
          const target = anchor.getAttribute('href');
          if (target) {
            document.querySelector(target)?.scrollIntoView({
              behavior: 'smooth',
            });
          }
        });
      }
    });
  });
}
