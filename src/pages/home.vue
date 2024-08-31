<script setup>
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
<template>
  <div class="card flex justify-center">
    <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true"  :showThumbnails="false">
      <template #item="slotProps">
        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt" style="width: 100%; display: block" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
      </template>
    </Galleria>

    <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />
  </div>
</template>


