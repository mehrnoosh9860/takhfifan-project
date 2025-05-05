<template>
  <nav class="bg-gray-50 border-t py-4">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap items-center justify-between gap-4 text-sm">
        <!-- right menu (categories) -->
        <ul class="flex flex-wrap items-center gap-6 md:gap-10 relative group">
          <li class="flex items-center cursor-pointer relative">
            <i class="fas fa-bars ml-2 text-gray-600"></i>
            <span>همه دسته‌بندی‌ها</span>

            <!-- Categories -->
            <div
              class="absolute right-0 top-full mt-0 group-hover:flex hover:flex hidden z-40 bg-white border rounded shadow-md w-64"
            >
              <ul class="w-full text-sm text-gray-700">
                <li v-for="(category, idx) in categories" :key="idx" class="relative group/item">
                  <a href="#" class="flex items-center w-full px-4 py-2 hover:bg-gray-100">
                    <span class="flex-grow text-right">{{ category.name }}</span>
                    <i class="fas fa-caret-left text-gray-500 text-lg mr-auto ml-0"></i>
                  </a>

                  <ul
                    class="absolute top-0 right-full mt-0 ml-0 hidden group-hover/item:flex flex-col bg-white border rounded shadow-md min-w-[160px]"
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

        <!-- left menu -->
        <ul class="flex items-center gap-8">
          <li>کسب و کار من</li>
          <li class="flex items-center">
            <i class="fas fa-mobile-alt ml-2 text-sm"></i>
            <span>دانلود اپلیکیشن</span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
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
