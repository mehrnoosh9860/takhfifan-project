<template>
  <div class="w-full">
    <div class="px-5 xl:px-8 py-4 mx-auto" style="max-width: 1440px">
      <Header></Header>
      <HeroSection></HeroSection>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import HeroSection from '../components/HeroSection.vue'

export default {
  components: {
    Header,
    HeroSection,
  },
}
</script>
