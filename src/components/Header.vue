<template>
  <div>
    <div class="flex flex-wrap items-center justify-between gap-4">
      <!-- Logo -->
      <a href="#" class="flex-shrink-0" style="width: 120px">
        <img src="@/assets/icons/main-logo.svg" alt="" class="h-10 w-auto" />
      </a>

      <!-- Search Section -->
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
          type="text"
          placeholder="جستجو: رستوران، باشگاه انقلاب..."
          class="flex-grow px-4 py-3 text-gray-700 focus:outline-none text-right placeholder-gray-400 text-xs"
          dir="rtl"
        />

        <!-- Search Button -->
        <button
          @click="performSearch"
          class="search-button hover:bg-blue-700 px-4 py-3 text-white flex-shrink-0"
        >
          <i class="fas fa-search"></i>
        </button>
      </section>

      <!-- Login and signup Section -->
      <div class="flex items-center gap-6 ml-4">
        <section id="login-section" class="flex items-center gap-2">
          <i class="far fa-user text-2xl"></i>
          <p class="text-sm hidden sm:inline">ورود / ثبت نام</p>
        </section>

        <div class="h-6 border-l border-gray-300 hidden sm:block"></div>

        <i class="fas fa-shopping-basket text-xl"></i>
      </div>
    </div>

    <MainMenu class="mt-6"></MainMenu>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MainMenu from './MainMenu.vue'

const cities = ref(['تهران', 'مشهد', 'اصفهان', 'شیراز', 'تبریز', 'کرج'])
const selectedCity = ref('تهران')
const searchQuery = ref('')

const performSearch = () => {
  console.log(`Searching in ${selectedCity.value} for: ${searchQuery.value}`)
}
</script>

<style>
:root {
  --primary-pink: #e54e63;
}

.search-nav {
  border-color: var(--primary-pink);
}

.search-button {
  background-color: var(--primary-pink);
}

@media (max-width: 768px) {
  #search-section {
    order: 3;
    width: 100%;
    margin: 1rem 0 0 0;
  }

  .flex-shrink-0 {
    width: auto;
  }
}
</style>
