<template>
  <div class="relative w-full max-w-[150px] text-center overflow-visible mt-6 mb-4">
    <!-- Floating Image in rectangle -->
    <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
      <div class="w-[75px] h-[75px] bg-white rounded-xl shadow flex items-center justify-center">
        <img :src="logo" :alt="name" class="w-[65px] h-[65px] object-contain" />
      </div>
    </div>

    <!-- Card -->
    <div class="pt-[45px] bg-white rounded-xl shadow-md overflow-hidden">
      <div class="p-2 text-sm text-black truncate">
        {{ name }}
      </div>

      <div class="text-lg text-red-500 mb-2">
        {{ cashbackPercent }} <span class="text-red-500 text-xs">برگشت‌پول</span>
      </div>

      <div class="text-sm text-[#8754AF] bg-gray-100 py-2">{{ branches }} شعبه</div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  logo: String,
  name: String,
  cashbackPercent: [Number, String],
  branches: [Number, String],
})
</script>
