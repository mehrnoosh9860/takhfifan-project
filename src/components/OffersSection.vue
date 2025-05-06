<template>
  <section class="mt-5">
    <!-- Section title -->
    <h2 class="text-xl text-right mb-4">{{ title }}</h2>

    <!-- Scrollable row of cards -->
    <div class="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
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
  </section>
</template>

<script setup>
import ProductCard from './ProductCard.vue'

// Props passed into OffersSection
defineProps({
  title: String,
  items: Array,
})
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
