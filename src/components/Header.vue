<template>
  <div class="w-full flex justify-center px-4 py-2">
    <div class="flex flex-wrap items-center justify-between gap-4 w-full max-w-[1376px]">
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
        class="hidden md:flex max-w-[600px]"
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
  </div>

  <!-- Searchbar only for SMALL SCREENS -->
  <div class="py-2 shadow-sm">
    <SearchBar placeholder="جستجو ..." buttonText="" class="mx-5 md:hidden" />
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
