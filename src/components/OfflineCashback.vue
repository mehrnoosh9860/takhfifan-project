<template>
  <section class="w-full bg-[#8754AF] mt-5 py-6 px-4 rounded-xl">
    <div class="max-w-screen-xl mx-auto">
      <!-- Heading -->
      <div class="flex flex-col lg:flex-row justify-between px-5 mx-10 gap-6 text-white">
        <!-- Text Section -->
        <div class="flex flex-col lg:flex-row items-center text-right pr-0 lg:pr-10 mb-6 flex-grow">
          <!-- Title -->
          <h2 class="text-4xl font-bold mb-4 lg:mb-0 lg:ml-8 text-center lg:text-right">
            <span>بازگشت</span><br />
            <span>پول</span>
          </h2>

          <!-- Description + Button -->
          <div class="flex flex-col justify-center text-right pt-3 text-center lg:text-right">
            <p class="mb-2">از فروشگاه‌های محلی بصورت حضوری خرید کن،</p>
            <div
              class="flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-1 gap-2"
            >
              <p class="mr-2">بخشی از مبلغ پرداختی رو پاداش نقدی بگیر</p>
              <button class="text-sm bg-gray-400 text-white mx-4 px-2 py-1 rounded-md">
                اطلاعات بیشتر
              </button>
            </div>
          </div>
        </div>

        <!-- Image Section -->
        <div class="flex-shrink-0 w-full sm:w-[380px] aspect-[19/11] hidden sm:block">
          <img
            src="/images/cashback/2.png"
            alt="POS icon"
            class="w-full h-full object-contain rounded-xl"
          />
        </div>
      </div>

      <!-- Cards List -->
      <div class="flex flex-wrap gap-2 justify-center sm:justify-start">
        <CashbackCard
          v-for="(item, index) in cashbackItems"
          :key="index"
          :logo="item.logo"
          :name="item.name"
          :cashback-percent="item.cashbackPercent"
          :branches="item.branches"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import CashbackCard from '@/components/CashbackCard.vue'

const cashbackItems = [
  { logo: '/images/logos/haniman.jpg', name: 'هانیمان', cashbackPercent: '3%', branches: 9 },
  { logo: '/images/logos/mante.png', name: 'چرم منط', cashbackPercent: '5%', branches: 14 },
  {
    logo: '/images/logos/yaran-daryan.png',
    name: 'یاران دریان',
    cashbackPercent: '2%',
    branches: 148,
  },
  { logo: '/images/logos/haft.png', name: 'هفت', cashbackPercent: '4%', branches: 694 },
  {
    logo: '/images/logos/whalemarket.png',
    name: 'وال مارکت',
    cashbackPercent: '10%',
    branches: 44,
  },
  {
    logo: '/images/logos/family.png',
    name: 'هایپر فامیلی',
    cashbackPercent: '15%',
    branches: 141,
  },
  {
    logo: '/images/logos/dailymarket.jpg',
    name: 'دیلی مارکت',
    cashbackPercent: '1%',
    branches: 103,
  },
  { logo: '/images/logos/perperook.png', name: 'پرپروک', cashbackPercent: '2.31%', branches: 16 },
]
</script>
