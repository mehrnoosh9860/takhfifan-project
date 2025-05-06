<template>
  <div class="w-full">
    <div class="px-5 xl:px-8 py-4 mx-auto" style="max-width: 1440px">
      <Header></Header>
      <HeroSection />

      <!-- Dynamic Offers Sections -->
      <OffersSection title="پیشنهاد شگفت‌انگیز" :items="shockingOffers" />
      <OffersSection title="نمایش‌های کمدی" :items="shockingOffers" />
      <OffersSection title="رعدآسا" :items="shockingOffers" />
      <OffersSection title="تازه‌های تخفیفان" :items="shockingOffers" />
      <OffersSection title="استخرهای خفن" :items="shockingOffers" />
      <OffersSection title="رسنتوران‌های محبوب" :items="shockingOffers" />
      <OffersSection title="با 100 هزار تومان تفریح کن" :items="shockingOffers" />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'
import OffersSection from '../components/OffersSection.vue'

export default {
  components: {
    Header,
    HeroSection,
    OffersSection,
  },
  data() {
    return {
      shockingOffers: [
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
      ],
      restaurantOffers: [{ image: 'res1.jpg', discount: 15, title: 'رستوران عالی' }],
    }
  },
}
</script>
