<script setup lang="ts">

import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import {Mousewheel, Pagination} from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/vue';
const  modules = ref([Mousewheel, Pagination])
import { ref } from "vue";
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
</script>
<template>
<!--  <div class="container">-->
<!--    <h2>EXPLORE MY PHOTOGRAFY WORK.</h2>-->
<!--    <div style="display: flex;flex-wrap: nowrap" class="">-->
<!--    <swiper-->
<!--        ref="{swiperRef}"-->
<!--        :slidesPerView="3"-->
<!--        :centeredSlides="true"-->
<!--        :spaceBetween="30"-->
<!--        :navigation="true"-->
<!--        :modules="modules"-->
<!--        class="mySwiper"-->
<!--    >-->
<!--      <swiper-slide>-->
<!--        <div class="col">-->
<!--        <img src="/public/img/Rectangle%20307.png" alt="">-->
<!--          <h5>Faces of Resilince</h5>-->
<!--              <div class="card flex justify-center">-->
<!--                <Galleria v-model:visible="displayBasic" :value="images" :responsiveOptions="responsiveOptions" :numVisible="9" containerStyle="max-width: 50%" :circular="true" :fullScreen="true" :showItemNavigators="true">-->
<!--                  <template #item="slotProps">-->
<!--                    <img src="/public/img/Rectangle%20308.png" :alt="slotProps.item.alt" style="width: 100%; display: block" />-->
<!--                  </template>-->
<!--                  <template #thumbnail="slotProps">-->
<!--                    <img :src="slotProps.item.thumbnailImageSrc" :alt="slotProps.item.alt" style="display: block" />-->
<!--                  </template>-->
<!--                </Galleria>-->
<!--                <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />-->
<!--              </div>-->
<!--            </div>-->
<!--        <P>JANUARY 2022</P>-->
<!--      </swiper-slide>-->
<!--      <swiper-slide>-->
<!--        <div class="col">-->
<!--        <img src="/public/img/Rectangle%20307.png" alt="">-->
<!--        <div class="">-->
<!--          <h5>A Wedding Tale</h5>-->
<!--          <h5>VIEW PROJECT</h5>-->
<!--        </div>-->
<!--        <P>JANUARY 2022</P>-->
<!--        </div>-->
<!--      </swiper-slide>-->
<!--      <swiper-slide>-->
<!--        <div class="col">-->
<!--        <img src="/public/img/Rectangle%20307.png" alt="">-->
<!--        <div class="">-->
<!--          <h5>Product Elegance</h5>-->
<!--          <h5>VIEW PROJECT</h5>-->
<!--        </div>-->
<!--        <P>JANUARY 2022</P>-->
<!--    </div>-->
<!--      </swiper-slide>-->
<!--      <swiper-slide>-->
<!--        <div class="col">-->
<!--        <img src="/public/img/Rectangle%20307.png" alt="">-->
<!--        <div class="">-->
<!--          <h5>Faces of Resilince</h5>-->
<!--          <h5>VIEW PROJECT</h5>-->
<!--        </div>-->
<!--        <P>JANUARY 2022</P>-->
<!--        </div>-->
<!--      </swiper-slide>-->
<!--    </swiper>-->
<!--    </div>-->
<!--<div class="banner">-->
<!--  <div class="container">-->
<!--    <div class="menu">-->
<!--      <div class="layout"></div>-->
<!--      <div class="menu_lab">-->
<!--        <div class="logo">-->
<!--          <img src="/src/assets/Damien.svg" alt="">-->
<!--        </div>-->
<!--        <div class="menu_bar">-->
<!--          <div class="menu_card">-->
<!--            <div @click="router.push('')" class="">-->
<!--              About Me-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="menu_card">-->
<!--            <div @click="router.push('')" class="">-->
<!--              Portfolio-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="menu_card">-->
<!--            <div @click="router.push('')" class="">-->
<!--              Services-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div class="menu_button">-->
<!--          <a href="" class="button_a">-->
<!--            Contact Me-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="layout"></div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="layout2"></div>-->
<!--  <div class="container">-->
<!--    <div class="card-1">-->
<!--      <div class="logo_img1">-->
<!--        <img src="/src/assets/Vector%20(15).svg" alt="">-->
<!--      </div>-->
<!--    </div>-->
<!--    <div class="grid">-->
<!--      <div class="card">-->
<!--        <div class="logo_img2">-->
<!--          <img src="/src/assets/Group%207%20(1).svg" alt="">-->
<!--        </div>-->
<!--      </div>-->
<!--      <div class="card">-->
<!--        <div class="logo_img2 ml">-->
<!--          <img src="/src/assets/Group%208%20(1).svg" alt="">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--  <div class="layout2 mt"></div>-->
<!--  <div class="container">-->
<!--    <div class="text_end">-->
<!--      <h1>Terms & Conditions | Privacy Policy</h1>-->
<!--      <div class="contact_button">-->
<!--        <button>-->
<!--          <a href="https://www.facebook.com/HHanStudio">-->
<!--            <img src="/src/assets/Vector%20(16).svg" alt="">-->
<!--          </a>-->
<!--        </button>-->

<!--        <button>-->
<!--          <a href="https://x.com/hanstudio_trt">-->
<!--            <img src="/src/assets/Vector%20(17).svg" alt="">-->
<!--          </a>-->
<!--        </button>-->

<!--        <button>-->
<!--          <a href="https://www.instagram.com/hanstudio.osh/">-->
<!--            <img src="/src/assets/Vector%20(18).svg" alt="">-->
<!--          </a>-->
<!--        </button>-->
<!--      </div>-->
<!--      <h1>© 2024 Damien Braun Photography. All rights reserved.</h1>-->
<!--    </div>-->
<!--  </div>-->

<!--</div>-->
<!--  </div>-->


<div class="container">
  <div class="banner">
    <div class="flex">
      <div class="logo2">
        <div class="log_txt">
          <p class="log_p">About</p>
          <h1 class="log_h">About damien braun</h1>
        </div>
        <div class="log_img">
          <img  style="object-fit: cover" class="img" src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
        </div>
      </div>
    </div>

    <div class="grid">
      <div class="card">
        <div class="cub">
          <div class="txt">
            <h4 class="text1">15+</h4>
            <p class="text2">Years in Business</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="cub">
          <div class="txt">
            <h4 class="text1">15+</h4>
            <p class="text2">Years in Business</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="cub">
          <div class="txt">
            <h4 class="text1">15+</h4>
            <p class="text2">Years in Business</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="cub">
          <div class="txt">
            <h4 class="text1">15+</h4>
            <p class="text2">Years in Business</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="cub">
          <div class="txt">
            <h4 class="text1">15+</h4>
            <p class="text2">Years in Business</p>
          </div>
        </div>
      </div>
      <div class="card">
        <div class="cub">
          <div class="txt">
            <h4 class="text1">15+</h4>
            <p class="text2">Years in Business</p>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img  style="object-fit: cover" class="h-20rem w-full" src="https://images.unsplash.com/photo-1709884735626-63e92727d8b6?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="">
      <img style=""  src="../public/img/Subtract.png" alt="" class="h-full w-full absolute top-0 left-0">
    </div>
    <h3 class="bio">My Biography</h3>
    <p class="pbio">
      Damien Braun's love affair with photography began at a young age, nurtured by the captivating landscapes and vibrant cultures surrounding her in the heart of the USA. Her passion for storytelling through imagery led her to embark on a photography journey that has spanned over 15 years.
      Driven by an insatiable curiosity to explore the beauty in everyday moments, Damien has honed her craft meticulously. Her background in digital media provided her with a solid foundation, but it's her keen eye for detail and an innate ability to capture raw emotions that truly set her apart.
      Damien's journey is more than just taking pictures; it's about capturing the essence of the human spirit, the fleeting magic of nature, and the emotions that define our lives. With each click of her camera, she weaves stories that transcend time and space.
    </p>
  </div>
</div>

</template>


<style scoped>
.bio{
  font-family: Manrope;
  font-size: 44px;
  font-weight: 600;
  line-height: 10px;
  text-align: left;
  color: #797C86;
  margin-top: 110px;
}
.pbio{
  font-family: Manrope;
  font-size: 14px;
  font-weight: 600;
  line-height: 25px;
  text-align: left;
  color: #797C86;
}
.text1{
  font-family: Manrope;
  font-size: 38px;
  font-weight: 600;
  line-height: 1px;
  text-align: left;
  color: white;
}
.text2{
  font-family: Manrope;
  font-size: 12px;
  font-weight: 400;
  line-height: 1px;
  text-align: left;
  color: #797C86;
}
.cub{
  width: 180px;
  height: 120px;
  border-radius: 12px;
  background-color: #1C1C21;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}
.logo2{
  display: flex;
  justify-content: space-between;
  margin-top: 70px;
}
.relative{
  margin-top: 60px;
}
.log_p{
  font-family: Manrope;
  font-size: 20px;
  font-weight: 600;
  line-height: 27.32px;
  text-align: left;
  color: #797C86;
}
.log_h{
  font-family: Manrope;
  font-size: 58px;
  font-weight: 600;
  line-height: 20.23px;
  text-align: left;
  color: white;
}
.img{
  width: 550px;
  height: 80px;
  border-radius: 12px;
  margin-top: 55px;
  margin-left: 55px;
}
.grid{
  display: flex;
  flex-wrap: wrap;
}
.card{
  width: 15%;
  margin-left: 15px;
}





@media screen and (max-width: 1116px){
  .container{
    width: 1025px;
  }
  .img{
    width: 470px;
  }
  .log_h{
    font-size: 48px;
  }
  .log_p{
    font-size: 18px;
  }
  .cub{
    width: 150px;
    height: 110px;
  }
  .text1{
    font-size: 28px;
  }
  .bio{
    margin-top: 100px;
  }
}
@media screen and (max-width: 1055px){
  .container{
    width: 780px;
  }
  .img{
    width: 380px;
    height: 70px;
  }
  .log_h{
    font-size: 38px;
  }
  .log_p{
    font-size: 15px;
  }
  .grid{
    display: flex;
    justify-content: center;
  }
  .card{
    width: 20%;
  }
  .bio{
    font-size: 38px;
    margin-top: 80px;
  }
  .pbio{
    font-size: 12px;
  }
}
@media screen and (max-width: 801px){
  .container{
    width: 676px;
  }
  .img{
    width: 500px;
    margin-top: 35px;
    margin-left: 1px;
  }
  .log_h{
    font-size: 28px;
  }
  .grid{
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .card{
    width: 25%;
  }
  .cub{
    margin-top: 20px;
  }
  .logo2{
    display: flex;
    flex-direction: column;
  }
  .flex{
    display: flex;
    justify-content: center;
  }
}
@media screen and (max-width: 701px){
  .container{
    width: 580px;
  }

}
@media screen and (max-width: 414px){
  .container{
    width: 320px;
  }
}
@media screen and (max-width: 320px){
  .container{
    width: 100%;
    padding-left: 5px;
  }
}
</style>












<!--<style scoped>-->
<!--.banner{-->
<!--  width: 100%;-->
<!--  height: 633px;-->
<!--  background-color: #070708;-->
<!--  position: relative;-->
<!--  overflow: hidden;-->
<!--}-->
<!--.menu{-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--}-->
<!--.layout{-->
<!--  width: 1px;-->
<!--  height: 100px;-->
<!--  background-color: #1C1C21;-->
<!--}-->
<!--.layout2{-->
<!--  width: 100%;-->
<!--  height: 1px;-->
<!--  background-color: #1C1C21;-->
<!--  margin-top: -1px;-->
<!--}-->
<!--.menu_lab{-->
<!--  display: flex;-->
<!--  align-items: center;-->
<!--  justify-content: space-between;-->
<!--}-->
<!--.menu_card{-->
<!--  width: 150px;-->
<!--  height: 75px;-->
<!--  border: 1px solid #1C1C21;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  margin-top: 22px;-->
<!--  color: white;-->
<!--}-->
<!--.menu_bar{-->
<!--  display: flex;-->
<!--}-->
<!--.menu_button{-->
<!--  width: 125px;-->
<!--  height: 45px;-->
<!--  border-radius: 10px;-->
<!--  background-color: #2F2F37;-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--}-->
<!--.button_a{-->
<!--  color: white;-->
<!--  text-decoration: none;-->
<!--  font-size: 18px;-->
<!--}-->
<!--.logo_img2 img{-->
<!--  width: 70%;-->
<!--}-->
<!--.grid{-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  margin-top: -200px;-->
<!--  z-index: 3;-->
<!--}-->
<!--.ml{-->
<!--  width: 70%;-->
<!--  margin-left: 325px;-->
<!--}-->
<!--.mt{-->
<!--  margin-top: 80px;-->
<!--}-->
<!--.card-1{-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  z-index: 1;-->
<!--}-->
<!--h1{-->
<!--  font-family: Manrope;-->
<!--  font-size: 14px;-->
<!--  font-weight: 400;-->
<!--  line-height: 27px;-->
<!--  text-align: left;-->
<!--  color: #797C86;-->
<!--}-->
<!--.contact_button{-->
<!--  width: 185px;-->
<!--  height: 70px;-->
<!--  border: 1px solid #1C1C21;-->
<!--  border-radius: 70px;-->
<!--  margin-left: 120px;-->
<!--}-->
<!--button{-->
<!--  width: 48px;-->
<!--  height: 48px;-->
<!--  border-radius: 100%;-->
<!--  background-color: #1C1C21;-->
<!--  margin-left: 10px;-->
<!--}-->
<!--.contact_button{-->
<!--  display: flex;-->
<!--  justify-content: center;-->
<!--  align-items: center;-->
<!--  padding-left: -10px;-->
<!--}-->
<!--.text_end{-->
<!--  display: flex;-->
<!--  justify-content: space-between;-->
<!--  align-items: center;-->
<!--  margin-top: 90px;-->
<!--}-->





<!--</style>-->



<!--<style>-->
<!--.p-menu.p-menu-overlay {-->
<!--  border: 0 none;background: linear-gradient(0deg, #020E1B, #020E1B),-->
<!--linear-gradient(0deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.08)),-->
<!--linear-gradient(304.29deg, rgba(51, 123, 190, 0.2) 0%, rgba(51, 123, 190, 0) 100%);-->
<!--  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);-->
<!--  height: 110px;-->
<!--}-->
<!--.p-menu .p-submenu-header {-->
<!--  width: 180px;-->
<!--  margin: 0;-->
<!--  padding: 0.75rem 1.25rem;-->
<!--  color: white;-->
<!--  background: #031222;-->
<!--  font-weight: 700;-->
<!--  border-top-right-radius: 0;-->
<!--  border-top-left-radius: 0;-->
<!--  margin-left: 10px;-->
<!--  border-radius:16px;-->
<!--  margin-top: 5px;-->
<!--}-->
<!--.p-menu .p-menuitem > .p-menuitem-content .p-menuitem-link {-->
<!--  padding: 0.75rem 1.25rem;-->
<!--  user-select: none;-->
<!--}-->
<!--</style>-->




<style>
html{
  margin: 0;
  padding: 0;
}
body{
  margin: 0;
  background-color: #070708;
}
</style>
