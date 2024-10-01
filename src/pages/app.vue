<script setup lang="ts">

// import required modules

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
console.log(displayBasic)


</script>

<template>
<div>
  <h1>hello</h1>
</div>
</template>

<style scoped>
.big{
  flex-wrap: wrap;
}
.container{
  width: 1140px;
  margin: 0 auto;
  padding: 0;
}

@media screen and (max-width: 1140px) {
  .container{
    width: 992px;
  }
}
@media screen and (max-width: 992px) {
  .container{
    width: 776px;
  }
}
@media screen and (max-width: 776px) {
  .container{
    width: 576px;
  }
}
@media screen and (max-width: 576px) {
  .container{
    width: 414px;
  }
}
@media screen and (max-width: 414px) {
  .container{
    width: 320px;
  }
}
@media screen and (max-width: 320px) {
  .container{
    width: 100%;
    padding: 5px 10px;
  }
}
</style>
