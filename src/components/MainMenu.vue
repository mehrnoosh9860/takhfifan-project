<template>
  <nav class="border-t py-4">
    <!-- Menu for large screens -->
    <section class="hidden lg:block w-full">
      <div class="flex justify-center">
        <div class="w-full px-4" style="max-width: 1376px">
          <div class="flex flex-wrap items-center justify-between gap-4 text-sm">
            <!-- Right menu -->
            <ul class="flex flex-wrap items-center gap-6 md:gap-10 relative cursor-pointer">
              <li class="flex items-center cursor-pointer relative group">
                <i class="fas fa-bars ml-2"></i>
                <span>همه دسته‌بندی‌ها</span>

                <!-- Dropdown -->
                <div
                  class="absolute right-0 top-full mt-0 hidden group-hover:flex z-40 bg-white border rounded shadow-md w-64"
                >
                  <ul class="w-full text-sm text-gray-700">
                    <li
                      v-for="(category, idx) in categories"
                      :key="idx"
                      class="relative group/item"
                    >
                      <a href="#" class="flex items-center w-full px-4 py-2 hover:bg-gray-100">
                        <span class="flex-grow text-right">{{ category.name }}</span>
                        <i class="fas fa-caret-left text-gray-500 text-lg mr-auto ml-0"></i>
                      </a>

                      <!-- Submenu -->
                      <ul
                        class="absolute top-0 right-full hidden group-hover/item:flex flex-col bg-white border rounded shadow-md min-w-[160px]"
                      >
                        <li v-for="(sub, subIdx) in category.subcategories" :key="subIdx">
                          <a href="#" class="block px-4 py-2 hover:bg-gray-100">
                            {{ sub }}
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </li>

              <li>برگشت پول خرید اینترنتی</li>
              <li>برگشت پول خرید حضوری</li>
              <li>کارت تخفیف</li>
              <li>تخفیفان سازمانی</li>
            </ul>

            <!-- Left menu -->
            <ul class="hidden sm:flex items-center gap-8 cursor-pointer">
              <li>کسب و کار من</li>
              <li class="flex items-center">
                <i class="fas fa-mobile-alt ml-2 text-sm"></i>
                <span>دانلود اپلیکیشن</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Menu for SMALL and MEDIUM screens -->
    <section class="w-full flex justify-center lg:hidden bg-white">
      <div class="flex gap-[50px] w-full px-4 max-w-[1376px]">
        <!-- Categories -->
        <div>
          <ul class="flex flex-wrap items-center gap-6 md:gap-10 relative">
            <li class="flex items-center cursor-pointer relative group">
              <i class="fas fa-bars ml-2 text-gray-600"></i>
              <span class="text-sm">همه دسته‌بندی‌ها</span>

              <!-- Dropdown -->
              <div
                class="absolute right-0 top-full mt-0 hidden group-hover:flex z-40 bg-white border rounded shadow-md w-48"
              >
                <ul class="w-full text-sm text-gray-700">
                  <li v-for="(category, idx) in categories" :key="idx" class="relative group/item">
                    <a href="#" class="flex items-center px-4 py-2">
                      <span class="flex-grow text-right">{{ category.name }}</span>
                      <i class="fas fa-caret-left text-gray-500 text-lg mr-auto ml-0"></i>
                    </a>

                    <!-- Submenu -->
                    <ul
                      class="absolute top-0 right-full hidden group-hover/item:flex flex-col bg-white border rounded shadow-md min-w-[160px]"
                    >
                      <li v-for="(sub, subIdx) in category.subcategories" :key="subIdx">
                        <a href="#" class="block px-4 py-2">
                          {{ sub }}
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>

        <!-- Other items -->
        <div class="relative">
          <button
            @click="toggleDropdown"
            class="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span class="text-sm">تخفیف و برگشت پول</span>
            <i
              class="fas fa-chevron-down text-xs transition-transform duration-200"
              :class="{ 'rotate-180': isOpen }"
            ></i>
          </button>

          <div
            v-if="isOpen"
            class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200"
          >
            <ul class="py-1 text-right text-xs">
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">برگشت پول خرید اینترنتی</a>
              </li>
              <li>
                <a href="#" class="block px-4 py-2 hover:bg-gray-100">برگشت پول خرید حضوری</a>
              </li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">کارت تخفیف</a></li>
              <li><a href="#" class="block px-4 py-2 hover:bg-gray-100">تخفیفان سازمانی</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)

const categories = [
  {
    name: 'تفریح و ورزش',
    subcategories: ['استخر', 'شهربازی', 'بازی های گروهی', 'ورزش های هوایی'],
  },
  {
    name: 'رستوران و کافه',
    subcategories: ['فست فود', 'کافه', 'بوفه و سلف سرویس', 'بین الملل', 'ایرانی و سنتی', 'صبحانه'],
  },
  {
    name: 'تئاتر و هنر',
    subcategories: ['تئاتر', 'کنسرت', 'سینما', 'تئاتر کودک و نوجوان'],
  },
]

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Close dropdown when clicking outside
const handleClickOutside = (event) => {
  if (!event.target.closest('.relative')) {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.group:hover > ul {
  display: block;
}

.fa-caret-left {
  font-size: 0.7em;
  margin-left: 8px;
  opacity: 0.7;
}
</style>
