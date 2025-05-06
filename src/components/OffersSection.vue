<template>
  <section class="mt-5">
    <!-- Section title -->
    <div class="flex justify-between">
      <h2 class="text-xl text-right mb-4">{{ title }}</h2>
      <a href="#">مشاهده همه <i class="fas fa-chevron-left mr-2 text-sm"></i></a>
    </div>

    <!-- Scrollable row of cards -->
    <div class="relative">
      <!-- Left Chevron (Visible only on small screens) -->
      <button
        @click="scrollLeft()"
        class="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-md"
      >
        <i class="fas fa-chevron-left text-gray-600"></i>
      </button>

      <!-- Scrollable Container -->
      <div
        ref="scrollContainer"
        class="flex gap-4 overflow-x-auto pb-2 hide-scrollbar scroll-smooth"
      >
        <ProductCard
          v-for="(item, idx) in items"
          :key="idx"
          :image="item.image"
          :title="item.title"
          :location="item.location"
          :discount="item.discount"
          :link="item.link"
          class="min-w-[160px] max-w-[180px] flex-shrink-0"
        />
      </div>

      <!-- Right Chevron (Visible only on small screens) -->
      <button
        @click="scrollRight()"
        class="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow-md"
      >
        <i class="fas fa-chevron-right text-gray-600"></i>
      </button>
    </div>
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'
import { ref } from 'vue'

// Props passed into OffersSection
defineProps({
  title: String,
  items: Array,
})

const scrollContainer = ref(null)

const scrollLeft = () => {
  scrollContainer.value.scrollBy({ left: -200, behavior: 'smooth' })
}

const scrollRight = () => {
  scrollContainer.value.scrollBy({ left: 200, behavior: 'smooth' })
}
</script>

<style scoped>
/* Hide scroll bar across modern browsers */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
