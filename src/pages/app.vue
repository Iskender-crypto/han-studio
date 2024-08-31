<script setup lang="ts">

import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Mousewheel, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
const  modules = ref([Mousewheel, Pagination])
const  modulesSlide = ref([ Pagination])
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

onMounted(() => {
  PhotoService.getImages().then((data) => (images.value = data));
})
</script>

<template>
  <div class="container">
    <h2>EXPLORE MY PHOTOGRAFY WORK.</h2>
    <div style="display: flex;flex-wrap: nowrap" class="big">
      <swiper
          ref="{swiperRef}"
          :slidesPerView="3"
          :centeredSlides="true"
          :spaceBetween="30"
          :navigation="true"
          :modules="modules"
          class="mySwiper"
      >
        <swiper-slide>
          <div class="col-md-4 col-sm-12 mb-5">
            <img class="w-full" src="/public/img/Rectangle%20307.png" alt="">
            <div style="display:flex;align-items: center;justify-content: space-between" class="">
              <h5>Faces of Resilince</h5>
              <div class="card flex justify-center">
                <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">
                  <template #item="slotProps">
                    <img src="/public/img/Rectangle%20308.png" :alt="slotProps.item.alt" style="width: 100%; display: block" />
                  </template>
                  <template #thumbnail="slotProps">
                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />
                  </template>
                </Galleria>
                <Button label="New" @click="displayBasic = true"/>
              </div>
            </div>
            <P>JANUARY 2022</P>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="col-md-4 col-sm-12 mb-5">
            <img class="w-full" src="/public/img/Rectangle%20307.png" alt="">
            <div style="display: flex;align-items: center;justify-content: space-between" class="">
              <h5>A Wedding Tale</h5>
              <h5>VIEW PROJECT</h5>
            </div>
            <P>JANUARY 2022</P>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="col-md-4 col-sm-12 mb-5">
            <img class="w-full" src="/public/img/Rectangle%20307.png" alt="">
            <div style="display: flex;align-items: center;justify-content: space-between" class="">
              <h5>Product Elegance</h5>
              <h5>VIEW PROJECT</h5>
            </div>
            <P>JANUARY 2022</P>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="col-md-4 col-sm-12 mb-5">
            <img class="w-full" src="/public/img/Rectangle%20307.png" alt="">
            <div style="display: flex;align-items: center;justify-content: space-between" class="">
              <h5>Faces of Resilince</h5>
              <h5>VIEW PROJECT</h5>
            </div>
            <P>JANUARY 2022</P>
          </div>
        </swiper-slide>
      </swiper>
    </div>
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
