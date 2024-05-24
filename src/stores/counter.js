import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment(value) {
    if (typeof value === 'undefined') {
      count.value++;
    } else {
      count.value += value;
    }

  }

  return { count, doubleCount, increment }
})
