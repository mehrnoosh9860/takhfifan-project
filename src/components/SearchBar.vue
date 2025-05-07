<template>
  <section
    id="search-section"
    class="search-nav flex items-center border rounded-lg overflow-hidden flex-1 max-w-2xl ml-6"
  >
    <!-- City Selector -->
    <div class="relative flex-shrink-0 border-l border-gray-300">
      <select
        v-model="selectedCity"
        class="appearance-none bg-white pl-3 pr-8 py-3 text-gray-700 focus:outline-none w-28 text-sm"
      >
        <option v-for="city in cities" :key="city" :value="city">
          {{ city }}
        </option>
      </select>
      <i
        class="fas fa-map-marker-alt absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm"
      ></i>
      <i
        class="fas fa-chevron-down absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs"
      ></i>
    </div>

    <!-- Search Input -->
    <input
      v-model="searchQuery"
      :placeholder="placeholder"
      class="flex-grow px-4 py-3 text-gray-700 focus:outline-none text-right placeholder-gray-400 text-xs"
      dir="rtl"
    />

    <!-- Search Button -->
    <button @click="performSearch" :class="['px-4 py-3 text-white flex-shrink-0', buttonClass]">
      <i class="fas fa-search mr-1"></i>
      <span class="text-xs hidden sm:inline">{{ buttonText }}</span>
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

const props = defineProps({
  placeholder: {
    type: String,
    default: 'جستجو: رستوران، باشگاه انقلاب...',
  },
  buttonText: {
    type: String,
    default: 'جستجو',
  },
  buttonClass: {
    type: String,
    default: 'bg-pink-500 hover:bg-pink-600',
  },
})

const selectedCity = ref('تهران')
const cities = ref(['تهران', 'مشهد', 'اصفهان', 'شیراز', 'تبریز', 'کرج'])
const searchQuery = ref('')

const performSearch = () => {
  console.log(`Searching in ${selectedCity.value} for: ${searchQuery.value}`)
}
</script>
