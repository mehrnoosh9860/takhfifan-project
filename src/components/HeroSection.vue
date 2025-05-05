<template>
  <section class="pt-6 bg-gray-100">
    <!-- Top Banner Row -->
    <div class="flex flex-col lg:flex-row gap-4 items-start mx-auto" style="max-width: 1383px">
      <!-- Main banner -->
      <div class="w-full max-w-[1095px] aspect-[1095/376]">
        <swiper
          :modules="modules"
          :autoplay="{ delay: 3000, disableOnInteraction: false }"
          :pagination="{ clickable: true }"
          navigation
          class="rounded-xl overflow-hidden h-full"
        >
          <swiper-slide v-for="(slide, index) in carouselSlides" :key="index">
            <router-link :to="slide.link" class="block h-full">
              <img :src="slide.image" :alt="slide.title" class="w-full h-full object-cover" />
            </router-link>
          </swiper-slide>
        </swiper>
      </div>

      <!-- Side banners -->
      <aside class="flex flex-wrap gap-4 w-full justify-between lg:flex-col lg:w-[263px]">
        <router-link
          v-for="promo in leftBanners"
          :key="promo.title"
          :to="promo.link"
          class="rounded-xl overflow-hidden shadow-md w-full sm:w-[calc(50%-0.5rem)] lg:w-full aspect-[263/180]"
        >
          <img :src="promo.image" :alt="promo.title" class="w-full h-full object-cover" />
        </router-link>
      </aside>
    </div>

    <!-- Bottom banners -->
    <div class="mt-4 flex justify-between flex-wrap mx-auto" style="max-width: 1383px">
      <router-link
        v-for="(promo, idx) in bottomBanners"
        :key="idx"
        :to="promo.link"
        class="rounded-xl overflow-hidden shadow-md mb-4"
        style="width: 263px"
      >
        <img :src="promo.image" :alt="promo.title" class="w-full h-full object-cover" />
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const modules = [Autoplay, Pagination, Navigation]

const leftBanners = [
  {
    title: 'پیشنهاد ویژه',
    image: '/images/hero-side-banners/bank-card.jpg',
    link: '/promotions/special-offer',
  },
  {
    title: 'تخفیف‌های فصلی',
    image: '/images/hero-side-banners/alo-peyk.jpg',
    link: '/promotions/seasonal',
  },
]

const carouselSlides = [
  {
    title: 'تخفیف‌های رستوران',
    image: '/images/hero-main-banners/10.jpg',
    link: '/restaurants',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/9.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/8.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/7.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/6.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/5.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/4.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/3.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/2.jpg',
    link: '/travel',
  },
  {
    title: 'گردشگری و سفر',
    image: '/images/hero-main-banners/1.jpg',
    link: '/travel',
  },
]

const bottomBanners = [
  {
    title: 'رستوران های برتر',
    image: '/images/hero-bottom-banners/1.jpg',
    link: '/top-restaurants',
  },
  {
    title: 'استخرهای تهران',
    image: '/images/hero-bottom-banners/2.jpg',
    link: '/tehran-pools',
  },
  {
    title: 'تئاترهای منتخب',
    image: '/images/hero-bottom-banners/3.jpg',
    link: '/tehran-pools',
  },
  {
    title: 'تکنولایف ',
    image: '/images/hero-bottom-banners/4.jpg',
    link: '/tehran-pools',
  },
  {
    title: 'پرپروک ',
    image: '/images/hero-bottom-banners/5.jpg',
    link: '/tehran-pools',
  },
]
</script>

<style>
.swiper {
  --swiper-navigation-color: white;
  --swiper-pagination-color: white;
}

.swiper-button-next,
.swiper-button-prev {
  width: 36px;
  height: 36px;
  background-color: rgba(255, 255, 255, 0.5); /* white, 50% opacity */
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #000;
  z-index: 10;
}

.swiper-button-next::after,
.swiper-button-prev::after {
  font-size: 16px;
}

.swiper-slide {
  height: 100%;
}

/* Ensure side banners match main banner height */
.aside {
  height: 100%;
}
</style>
