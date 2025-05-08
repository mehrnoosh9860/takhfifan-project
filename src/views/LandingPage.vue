<template>
  <div class="w-full">
    <!-- Full-width components go here -->
    <div class="w-full bg-white shadow-sm sticky top-0 z-50 pt-2">
      <Header />
    </div>
    <div class="w-full bg-gray-100">
      <MainMenu />
    </div>
    <div class="w-full px-5 py-4 bg-gray-200">
      <HeroSection />
    </div>

    <!-- Main constrained content -->
    <div class="px-5 xl:px-8 py-4 mx-auto" style="max-width: 1440px">
      <!-- Offers sections -->
      <OffersSection title="پیشنهاد شگفت‌انگیز" :items="shockingOffers" />
      <OffersSection title="نمایش‌های کمدی" :items="shockingOffers" />
      <OffersSection title="رعدآسا" :items="shockingOffers" />
      <OffersSection title="تازه‌های تخفیفان" :items="shockingOffers" />
      <OffersSection title="استخرهای خفن" :items="shockingOffers" />
      <OffersSection title="رسنتوران‌های محبوب" :items="shockingOffers" />
      <OffersSection title="با 100 هزار تومان تفریح کن" :items="shockingOffers" />
    </div>

    <!-- Offline cashback should be full-width -->
    <div class="w-full flex justify-center bg-gray-200 py-4">
      <div class="w-full px-5" style="max-width: 1376px">
        <OfflineCashback />
      </div>
    </div>

    <!-- Remaining offers -->
    <div class="px-5 xl:px-8 py-4 mx-auto" style="max-width: 1440px">
      <OffersSection title="بهترین مراکز دندون پزشکی" :items="shockingOffers" />
      <OffersSection title="بوفه‌های صبحانه" :items="shockingOffers" />
    </div>

    <div class="bg-gray-200 p-5"></div>

    <!-- Footer (can stay inside container if desired) -->
    <div class="w-full flex justify-center py-4">
      <div class="w-full px-4" style="max-width: 1376px">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import OffersSection from '../components/OffersSection.vue'
import OfflineCashback from '@/components/OfflineCashback.vue'
import Footer from '@/components/Footer.vue'
import MainMenu from '@/components/MainMenu.vue'

const shockingOffers = [
  {
    image: '/images/spacial-offer/1.jpg',
    location: 'تهران',
    discount: 25,
    title: 'تخفیف ویژه 1',
  },
  {
    image: '/images/spacial-offer/2.jpg',
    location: 'تهران',
    discount: 30,
    title: 'تخفیف ویژه 2',
  },
  {
    image: '/images/spacial-offer/3.jpg',
    location: 'تهران',
    discount: 30,
    title: 'تخفیف ویژه 2',
  },
  {
    image: '/images/spacial-offer/4.jpg',
    location: 'تهران',
    discount: 30,
    title: 'تخفیف ویژه 2',
  },
  {
    image: '/images/spacial-offer/5.jpg',
    location: 'تهران',
    discount: 30,
    title: 'تخفیف ویژه 2',
  },
]

const restaurantOffers = [{ image: 'res1.jpg', discount: 15, title: 'رستوران عالی' }]
</script>
