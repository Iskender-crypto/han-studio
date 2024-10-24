
  <script setup lang="ts">
    import 'swiper/css';
    import 'swiper/css/navigation';
    import {Mousewheel, Pagination} from 'swiper/modules';
    import {Swiper, SwiperSlide} from 'swiper/vue';
    import { ref, onMounted } from "vue";
    import { Navigation } from 'swiper/modules';
    const  modules = ref([Mousewheel, Pagination,Navigation])

    const images = ref();
    const responsiveOptions = ref([
      {
        breakpoint: '560px',
        numVisible: 1
      } ,
      {
        breakpoint: '768px',
        numVisible: 2
      },
      {
        breakpoint: '1024px',
        numVisible: 3
      },
      {
        breakpoint: '1500px',
        numVisible: 5
      },



    ]);
    const displayBasic = ref(false);

    onMounted(() => {
      PhotoService.getImages().then((data) => (images.value = data));
    })

  </script>

  <template>
    <div class="container">
      <h2>EXPLORE MY PHOTOGRAFY WORK.</h2>
      <div style="display: flex;" class="">
        <swiper
            ref="{swiperRef}"
            :slidesPerView="3"
            :centeredSlides="true"
            :spaceBetween="30"
            :navigation="true"
            :modules="modules"
            :pagination="{
             clickable: true,
                }"
            class="mySwiper"
        >
          <swiper-slide>
            <div class="col">
              <img src="/public/img/Rectangle%20307.png" alt="">
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
                <Button label="Show" icon="pi pi-external-link" @click="displayBasic = true" />
              </div>
            </div>
            <P>JANUARY 2022</P>
          </swiper-slide>
          <swiper-slide>
            <div class="col">
              <img src="/public/img/Rectangle%20307.png" alt="">
              <div class="">
                <h5>A Wedding Tale</h5>
                <h5>VIEW PROJECT</h5>
              </div>
              <P>JANUARY 2022</P>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col">
              <img src="/public/img/Rectangle%20307.png" alt="">
              <div class="">
                <h5>Product Elegance</h5>
                <h5>VIEW PROJECT</h5>
              </div>
              <P>JANUARY 2022</P>
            </div>
          </swiper-slide>
          <swiper-slide>
            <div class="col">
              <img src="/public/img/Rectangle%20307.png" alt="">
              <div class="">
                <h5>Faces of Resilince</h5>
                <h5>VIEW PROJECT</h5>
              </div>
              <P>JANUARY 2022</P>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <router-view></router-view>
  </template>

  <style scoped>


  .col{
      width: 100%;
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
      .col{
        width: 33.333%;
        flex-wrap: nowrap;
      }
    }
    @media screen and (max-width: 992px) {
      .container{
        width: 776px;
      }
      .col{
        width: 50%;
        flex-wrap: wrap;
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
