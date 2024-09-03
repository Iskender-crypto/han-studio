

<template>
 <div style="width: 100%;height: 700px;background: black;color:#f9f9f9;display: flex;flex-direction: column;align-items: center;justify-content: center" class="big">
   <div class="container">
     <div class="col">
       <div style="position: relative;" class="block">
         <h2 style="margin: 10px;position: absolute;font-size: 40px;font-weight: 400;line-height: 54.23px;">ABOUT DAMIEN BRAUN</h2>
         <img class="w-full" src="/img/Image.png" alt="">
       </div>
     </div>
     <div style="position: absolute;top: 166px;display: flex;gap: 16.666px;flex-wrap: wrap" class="col">
       <div style="background: #213547;padding: 20px;border-radius: 5px;left: 20px" class="block">
         <h2>15+</h2>
         <p>Years in Business</p>
       </div>
       <div style="background: #213547;padding: 20px;border-radius: 5px;left: 20px" class="block">
         <h2>500+</h2>
         <p>Happy Clients</p>
       </div>
       <div style="background: #213547;padding: 20px;border-radius: 5px;left: 20px" class="block">
         <h2>10+</h2>
         <p>Photography Awards</p>
       </div>
       <div style="background: #213547;padding: 20px;border-radius: 5px;left: 20px" class="block">
         <h2>05+</h2>
         <p>International Shoots</p>
       </div>
       <div style="background: #213547;padding: 20px;border-radius: 5px;left: 20px" class="block">
         <h2>10,000+</h2>
         <p>Social Media Followers</p>
       </div>
       <div style="background: #213547;padding: 20px;border-radius: 5px" class="block">
         <h2>90%</h2>
         <p>Client Retention Rate</p>
       </div>
     </div>
        <p STYLE="position: absolute;left: 78%;top:83%">Scroll Down To See <br> My Journey</p>
     <img style="position: absolute;top: 80%;" src="/img/Abstract%20Design.svg" alt="">
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
</style>
<script >
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
