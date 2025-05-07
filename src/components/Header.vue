<template>
  <div>
    <div class="flex flex-wrap items-center justify-between gap-4">
      <!-- Logo -->
      <a href="#" class="flex-shrink-0">
        <img
          src="@/assets/icons/main-logo.svg"
          alt="لوگو"
          class="w-24 sm:w-28 md:w-32 lg:w-36 h-auto object-contain"
        />
      </a>

      <!-- Search Section for large screens -->
      <SearchBar
        placeholder="جستجو: رستوران، باشگاه انقلاب ..."
        buttonText=""
        class="hidden md:flex"
      ></SearchBar>

      <!-- Login and signup Section -->
      <div class="flex items-center gap-6 ml-4">
        <section id="login-section" class="flex items-center gap-2">
          <i class="far fa-user text-2xl"></i>
          <p class="text-sm hidden sm:inline">ورود / ثبت نام</p>
        </section>

        <div class="h-6 border-l border-gray-300"></div>

        <i class="fas fa-shopping-basket text-xl"></i>
      </div>
    </div>

    <!-- Searchbar only for SMALL SCREENS -->
    <SearchBar placeholder="جستجو ..." buttonText="" class="md:hidden mt-3"></SearchBar>
  </div>
</template>

<script setup>
import SearchBar from './SearchBar.vue'
</script>

<style>
:root {
  --primary-pink: #e54e63;
}

.search-nav {
  border-color: var(--primary-pink);
}
</style>
