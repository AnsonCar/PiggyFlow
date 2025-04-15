import { onMounted, ref } from 'vue';

export function useAnimation(idName: string) {
  onMounted(() => {
    const threshold = ref(0.1);
    if (window.matchMedia('(max-width: 768px)').matches) {
      threshold.value = 0.05; // 手机设备阈值
    } else {
      threshold.value = 0.4; // 其他设备阈值
    }
    const animatedDiv: HTMLElement = document.getElementById(idName) as HTMLElement;
    animatedDiv.classList.add('combined-animation');
    // 為animatedDiv的所有子元素加入 class item
    animatedDiv.querySelectorAll('*').forEach((child) => {
      child.classList.add('item');
    });
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 當元素進入視口時，添加動畫類
            animatedDiv.classList.add('animate');
            // 停止觀察，避免重複觸發
            observer.unobserve(animatedDiv);
          }
        });
      },
      {
        threshold: threshold.value, // 當元素進入視口時觸發
      }
    );
    // 開始觀察元素
    observer.observe(animatedDiv);
  });
}
