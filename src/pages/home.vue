
<template>
  <div>
    <h1>hello</h1>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
const images = ref();
const responsiveOptions = ref([
  {
    breakpoint: '1500px',
    numVisible: 5
  },
  {
    breakpoint: '1024px',
    numVisible: 3
  },
  {
    breakpoint: '768px',
    numVisible: 2
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);
const displayBasic = ref(false);

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
})
</script>


