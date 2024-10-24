

<template>
 <div style="width: 100%;height: 700px;background: black;color:#f9f9f9;display: flex;flex-direction: column;align-items: center;justify-content: center" class="big">
   <div class="container">
     <div style="position: relative;" class="col">
       <div  class="block1">
         <h2 style="margin: 10px;position: absolute;font-size: 40px;font-weight: 400;line-height: 54.23px;">ABOUT DAMIEN BRAUN</h2>
         <img class="w-full" src="/img/Image.png" alt="">
       </div>
     </div>
     <div style="width: 85%;top: 29%;display: flex;position: absolute;justify-content: space-around" class="col1">
       <div style="background: #213547;border-radius: 5px;" class="block">
         <h2>15+</h2>
         <p>Years in Business</p>
       </div>
       <div style="background: #213547;border-radius: 5px;" class="block">
         <h2>500+</h2>
         <p>Happy Clients</p>
       </div>
       <div style="background: #213547;border-radius: 5px;" class="block">
         <h2>10+</h2>
         <p>Photography Awards</p>
       </div>
       <div style="background: #213547;border-radius: 5px;" class="block">
         <h2>05+</h2>
         <p>International Shoots</p>
       </div>
       <div style="background: #213547;border-radius: 5px;" class="block">
         <h2>10,000+</h2>
         <p>Social Media Followers</p>
       </div>
       <div style="background: #213547;border-radius: 5px" class="block">
         <h2>90%</h2>
         <p>Client Retention Rate</p>
       </div>
     </div>
        <p STYLE="position: absolute;left: 78%;top:90%">Scroll Down To See <br> My Journey</p>
     <img style="position: absolute;top: 85%;right: 83%;" src="/img/Abstract%20Design.svg" alt="">
   </div>
   </div>
</template>

<style>
p{
  color:#888888;
}
.container{
  width: 1140px;
  margin: 0 auto;
  padding: 0;
}
body{
  background: black;
}
.block{
  width: 16%;
  margin: 10px;
}
@media screen and (max-width: 1140px){
  .container{
    width: 992px;
  }
}
@media screen and (max-width: 992px){
  .container{
    width: 768px;
  }
}
@media screen and (max-width: 768px){
  .container{
    width: 576px;
  }
}
@media screen and (max-width: 576px){
  .container{
    width: 414px;
  }
}
@media screen and (max-width: 320px){
  .container{
    width: 100%;
    padding-left: 10px;
  }
}
</style>
<script setup lang="ts">
import { ref, onMounted } from "vue";

onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 9)));
})

const products = ref();
const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);

const getSeverity = (status) => {
  switch (status) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warn';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};

</script>
