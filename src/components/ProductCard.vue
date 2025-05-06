<template>
  <router-link
    :to="link || '#'"
    class="block rounded-xl overflow-hidden shadow-md bg-white w-full max-w-[263px]"
  >
    <div class="relative w-full aspect-[5/3]">
      <!-- Added aspect ratio container -->
      <img :src="image" :alt="title" class="w-full h-full object-cover" />

      <!-- Sold number badge -->
      <span
        v-if="discount"
        class="absolute top-2 left-2 bg-white text-black text-xs px-2 py-1 rounded"
      >
        {{ discount }} خرید
      </span>
    </div>

    <div class="flex items-start justify-between py-2">
      <!-- Title and location and rating -->
      <div>
        <div class="p-2 text-sm text-gray-800 border-left leading-tight line-clamp-2 flex-grow">
          {{ title }}
        </div>
        <div class="flex items-center">
          <div class="text-xs text-gray-500 border-l-2 pl-2 ml-2 mr-2">{{ location }}</div>
          <div class="text-xs"><i class="fas fa-star text-yellow-400 text-xs pl-1"></i>4.2</div>
        </div>
      </div>
      <!-- Discount badge -->
      <div
        class="text-xs text-red-500 flex-shrink-0 ml-2 border-dashed pr-2 border-r-2 border-gray-200"
      >
        تا <span class="text-2xl">{{ discount }}%</span>
        <br />
        <span class="text-black block text-center">تخفیف</span>
      </div>
    </div>

    <!-- all suggestion link -->
    <router-link
      :to="link || '#'"
      class="flex items-center justify-end text-xs text-blue-400 border-dashed border-t-2 border-gray-200 px-2 py-3"
    >
      <span class="ml-2"> مشاهده پیشنهادها </span>
      <i class="fas fa-chevron-left pl-2"></i>
    </router-link>
  </router-link>
</template>

<script setup>
// Props passed into ProductCard
defineProps({
  image: String,
  title: String,
  location: String,
  discount: Number,
  link: String,
})
</script>

<style scoped>
/* Ensures multi-line ellipsis (tailwind's line-clamp also used) */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
