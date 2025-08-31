<template>
  <section>
    <!-- Subscribe and awards -->
    <div
      class="flex flex-col lg:flex-row py-10 justify-between items-center gap-6 lg:gap-0 text-center lg:text-right"
    >
      <!-- Title and Subtitle -->
      <div class="lg:text-right">
        <h3>از آخرین تخفیف‌ها مطلع باشید.</h3>
        <p class="text-xs">بار وارد کردن ایمیل خود آخرین تخفیف‌های شهرتان را دریافت کنید</p>
      </div>

      <!-- Email input -->
      <SearchBar
        placeholder="example@gmail.com"
        buttonText="اشتراک"
        buttonClass="bg-blue-500"
        :hideIcon="true"
        class="max-w-[400px] max-h-[40px] mx-6 w-full sm:w-auto"
      ></SearchBar>

      <!-- Awards images -->
      <div class="flex gap-4 h-10 flex-shrink-0">
        <div class="border border-gray-300 rounded-md w-10"></div>
        <div class="border border-gray-300 rounded-md w-10"></div>
        <div class="border border-gray-300 rounded-md w-10"></div>
      </div>
    </div>

    <!-- links and apps -->
    <div
      class="flex flex-wrap justify-between items-start gap-8 py-10 w-full rtl:flex-row-reverse border-t-2"
    >
      <!-- Links Section -->
      <div class="flex flex-wrap gap-12">
        <div class="ml-10">
          <h3 class="font-bold mb-2">درباره تخفیفان</h3>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>درباره ما</li>
            <li>تماس با ما</li>
            <li>قوانین و مقررات</li>
          </ul>
        </div>
        <div class="ml-10">
          <h3 class="font-bold mb-2">همکاری با تخفیفان</h3>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>فرصت‌های شغلی</li>
            <li>کسب و کار خود را تبلیغ کنید</li>
            <li>خدمات سازمانی</li>
          </ul>
        </div>
        <div class="ml-10">
          <h3 class="font-bold mb-2">بیشتر بخوانید</h3>
          <ul class="space-y-1 text-sm text-gray-700">
            <li>تخفیفان چگونه کار می‌کند</li>
            <li>مجله تخفیفان</li>
          </ul>
        </div>
      </div>

      <!-- App Download Section -->
      <div class="flex items-start gap-6">
        <div>
          <h2 class="font-bold mb-3">دریافت اپلیکیشن</h2>
          <div class="flex flex-col gap-4">
            <div class="flex items-center gap-2">
              <img src="/images/logos/android@2x.webp" alt="android" class="w-6 h-6" />
              <p class="text-sm text-gray-700">دانلود نسخه اندروید</p>
            </div>
            <div class="flex items-center gap-2">
              <img src="/images/logos/ios@2x.webp" alt="ios" class="w-6 h-6" />
              <p class="text-sm text-gray-700">دانلود نسخه ios</p>
            </div>
          </div>
        </div>
        <div>
          <img src="/images/footer/mobile-app.png" alt="mobile app" class="w-24 md:w-32" />
        </div>
      </div>
    </div>

    <!-- contact and social media -->
    <div
      class="flex flex-col md:flex-row py-10 border-t-2 justify-end items-center md:items-start text-center md:text-right gap-4 md:gap-0"
    >
      <!-- Email -->
      <div class="px-5">
        <p>SUPPORT@TAKHFIFAN.COM</p>
      </div>

      <!-- Phone Number -->
      <div class="px-5 lg:border-r-2">
        <p>98-21-11-12425+</p>
      </div>

      <!-- Social Media -->
      <div class="pr-5 lg:border-r-2 flex justify-center md:justify-start">
        <a
          href="https://www.linkedin.com/"
          class="text-gray-500 hover:text-blue-600 transition-colors duration-200 mx-2"
        >
          <i class="fab fa-linkedin-in text-xl"></i>
        </a>
        <a
          href="https://x.com/"
          class="text-gray-500 hover:text-blue-400 transition-colors duration-200 mx-2"
        >
          <i class="fab fa-x-twitter text-xl"></i>
        </a>
        <a
          href="https://facebook.com/"
          class="text-gray-500 hover:text-blue-600 transition-colors duration-200 mx-2"
        >
          <i class="fab fa-facebook-f text-xl"></i>
        </a>
        <a
          href="https://instagram.com/"
          class="text-gray-500 hover:text-pink-600 transition-colors duration-200 mx-2"
        >
          <i class="fab fa-instagram text-xl"></i>
        </a>
        <a
          href="https://t.me/"
          class="text-gray-500 hover:text-blue-500 transition-colors duration-200 mx-2"
        >
          <i class="fab fa-telegram text-xl"></i>
        </a>
      </div>
       <!-- Design By -->
      <div class="px-5 lg:border-r-2">
        <p class="text-gray-500 text-sm">
          Design by <span class="font-semibold">Mahan Intelligent Solution Holding</span>
        </p>
      </div>
    </div>

    <!-- Discription -->
    <div class="flex flex-col lg:flex-row justify-between py-10 border-t-2 items-start gap-6">
      <div class="flex-1 max-w-[800px]">
        <h3 class="font-bold">حس خوب هیجان، با تخفیف‌های روزانه تخفیفان</h3>
        <p class="text-xs mt-2 leading-6 text-gray-700">
          تخفیفان پلتفرمی برای ارتباط بین مراکز خدماتی و فروشندگان با مشتریان است. تخفیفان به
          مشتریان خود تجربه‌ای جدید و هوشمندانه در خرید کردن ارائه می‌کند و باعث رونق کسب‌وکار شرکای
          تجاری خود می‌شود. شما چه به دنبال یک خرید آنلاین یا خرید از مغازه‌های نزدیک محل سکونت خود
          باشید و چه به دنبال یک تجربه خاص، چشیدن یک طعم متفاوت یا یادگیری چیزاهای جدید باشید، با
          تخفیفان یک خرید هوشمندانه و با قیمت مناسب را تجربه خواهید کرد. امروز تخفیفان در نقطه‌ای
          قرار گرفته که می‌تواند روی تفریح و خرید شما تاثیر گذار باشد. با تخفیفان حتی می‌توانید خرید
          از میوه فروشی‌ها و داروخانه‌های سطح شهر را هم به خریدی هوشمندانه تبدیل کنید! تخفیفان
          پلفترمی گسترده در ارائه انواع پیشنهادها است که خدمات خود را در چندین شهر بزرگ ایران ارائه
          می‌دهد. با نصب سوپر اَپ تخفیفان می‌توانید از همه پیشنهادهای جذاب و جدید اطراف خود و
          فروشگاه‌های اینترنتی با خبر باشید. تخفیفان در روز ده‌ها تخفیف ویژه و جذاب برایتان دارد و
          شما می‌توانید از تخفیف های چهل تا صد درصدی استفاده کنید. برخی از دسته‌های محبوب تخفیفان،
          رستوران های تهران، هتل، تور مسافرتی، کافی‌شاپ، آرایشگاه، کلینیک زیبایی، آتلیه، بلیط تئاتر
          بازی اتاق فرار و کد تخفیف هستند. از محبوب ترین کد های تخفیفی که در تخفیفان ارائه می شود می
          توان به کد تخفیف دیجی کالا، کد تخفیف اسنپ فود، کد تخفیف فیلیمو و کد تخفیف نماوا اشاره کرد.
          همچنین برای ارائه خدمات بهتر هر یک از قسمت‌های تخفیفان به دسته‌بندی‌های کوچک‌تری همچون
          تخفیف رستوران سنتی و ایرانی، رستوران با موسیقی زنده ، کافی‌شاپ، صبحانه، بوفه نهار و شام،
          بلیط استخر، باشگاه بدن‌سازی، شهربازی، توچال، تئاتر کودک، تئاتر کمدی، پینت بال، برج میلاد،
          لیزر موهای زائد، تور و هتل مشهد، هتل شمال و سایر هتل‌ها تقسیم شده است. تخفیفان علاوه بر
          تهران در شهرهای مشهد، تبریز، اصفهان، کرج، شیراز و استان مازندران نیز فعالیت دارد.
        </p>
      </div>

      <!-- Left Boxes -->
      <div class="flex flex-row md:flex-col gap-4 justify-center md:items-start h-20 md:h-auto">
        <div class="border border-gray-300 rounded-md w-20 h-20"></div>
        <div class="border border-gray-300 rounded-md w-20 h-20"></div>
        <div class="border border-gray-300 rounded-md w-20 h-20"></div>
      </div>
    </div>
    <h2 class="flex justify-center align-center text-sm text-gray-600">
      Designed By Mahan Intelligent Solution Holding @2025
    </h2>
  </section>
</template>

<script setup>
import SearchBar from './SearchBar.vue'
</script>

<style scoped>
.search-nav {
  border-color: #459efa;
}

.search-icon {
  display: none !important;
}
</style>
