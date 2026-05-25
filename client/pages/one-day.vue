<template>
  <div class="relative 1xl:pt-[21rem] pt-64">
    <img
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/groupcloseup6.jpeg" />
    <header class="relative lg:pl-12 px-4">
      <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]" src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img
        class="xl:block hidden aspect-[5/4] w-[48%] ml-auto absolute left-0 -right-1 bottom-0 object-cover object-center mask-header" src="/stock/groupcloseup6.jpeg" />
      <img class="xl:block hidden 2xl:w-[28rem] w-[23rem] absolute -left-[12rem] 2xl:top-[45%] top-[60%] opacity-[0.03]" src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="xl:min-h-[28rem] min-h-[20rem] max-w-7xl mx-auto animate-fade-down">
        <div class="max-w-[35rem] relative">
          <h1 class="text-[clamp(40px,4.5vw,65px)] leading-[1.1] font-lobster drop-shadow-text text-[#CADA2B] mb-[22px]">
            Един ден при нас
          </h1>
          <p class="text-[clamp(16px,1.5vw,19px)] opacity-95 mb-[32px] text-white">
            Денят в Експлораториум е динамичен баланс между ума, общността и природата.
          </p>
          <div class="flex flex-wrap gap-[14px]">
            <a href="#morning" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Сутринта</a>
            <a href="#afternoon" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Следобедите</a>
            <a href="#nature" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Природата</a>
          </div>
        </div>
      </div>
    </header>
    <div class="mx-auto my-24 w-56 h-2 bg-explo-lightblue rounded-2xl" />

    <!-- MORNING — editorial split with embedded pull-quote -->
    <section id="morning" class="relative px-4 lg:px-12 mb-32">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div class="text-[#CADA2B] font-semibold text-[clamp(14px,1.3vw,16px)] uppercase tracking-[2px] mb-[12px]">Сутринта</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-[24px]">
              Дълбока работа по глобални теми
            </h2>
            <p class="text-white text-[clamp(16px,1.5vw,19px)] leading-[1.6] opacity-90 mb-[28px]">
              Сутрините са посветени на „дълбока работа" по нашите глобални теми. Чрез световете на числата, думите и науките, децата не просто търсят готови отговори, а се учат да задават правилните въпроси. Това е време за изграждане на фокус, критично мислене и самостоятелно изследване.
            </p>
            <div class="border-l-[4px] border-[#CADA2B] pl-[20px] py-[2px]">
              <p class="text-[#CADA2B] font-medium text-[clamp(16px,1.6vw,20px)] leading-[1.5] italic">
                „Тук не бързаме към отговорите - учим как да задаваме правилните въпроси."
              </p>
            </div>
          </div>
          <div class="relative">
            <img src="/stock/photo_2026-05-14_15-00-32.jpg" alt="Дете работи с микроскоп" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.25)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <!-- <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">Фокус и изследване</div> -->
          </div>
        </div>
      </div>
    </section>

    <!-- AFTERNOON — dark band, staggered image pair left / text right -->
    <section id="afternoon" class="bg-explo-darkblue py-[60px] lg:py-[80px]">
      <div class="max-w-7xl mx-auto px-4 lg:px-12">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1.1fr_1fr]">
          <div class="grid grid-cols-2 gap-[14px] items-start order-2 lg:order-1">
            <img src="/stock/photo_2026-05-14_15-00-48.jpg" alt="Деца готвят заедно" class="w-full aspect-[3/4] object-cover rounded-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.3)]">
            <img src="/stock/photo_2026-05-14_15-00-40.jpg" alt="Деца рисуват и творят" class="w-full aspect-[3/4] object-cover rounded-[18px] shadow-[0_12px_32px_rgba(0,0,0,0.3)] mt-[40px]">
          </div>
          <div class="order-1 lg:order-2">
            <div class="text-[#CADA2B] font-semibold text-[clamp(14px,1.3vw,16px)] uppercase tracking-[2px] mb-[12px]">Следобедите</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-[24px]">
              Творчество, проекти и пряка демокрация
            </h2>
            <p class="text-white text-[clamp(16px,1.5vw,19px)] leading-[1.6] opacity-90">
              Следобедите ни превеждат през контекста на творчеството и практиката. Проектите, изграждането на макети и творческите задачи се преплитат с живота на нашата общност. Тук практикуваме пряка демокрация – децата сами вземат решения за ежедневните предизвикателства, учат се да аргументират мнението си и поемат реална отговорност за резултатите.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- NATURE — wide cinematic image, editorial two-column text below -->
    <section id="nature" class="relative px-4 lg:px-12 pt-[60px] lg:pt-[80px] mb-32">
      <div class="max-w-7xl mx-auto">
        <div class="relative mb-[56px]">
          <img src="/stock/natureCloseup3.jpeg" class="w-full aspect-[21/9] object-cover object-center rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.25)] border-[6px] border-[rgba(255,255,255,0.18)]">
          <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">Витоша - нашата класна стая</div>
        </div>
        <div class="grid grid-cols-1 gap-[40px] lg:grid-cols-[1fr_1.6fr] items-start mt-[32px]">
          <div>
            <div class="text-[#CADA2B] font-semibold text-[clamp(14px,1.3vw,16px)] uppercase tracking-[2px] mb-[12px]">Природата</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold">
              Най-голямата ни класна стая
            </h2>
          </div>
          <div class="lg:pt-[12px]">
            <p class="text-white text-[clamp(16px,1.5vw,19px)] leading-[1.6] opacity-90">
              Природата е най-голямата ни класна стая. Без значение дали изследваме екосистемите на Витоша, тренираме физическата си издръжливост или играем в прекрасния ни двор, ние възпитаваме уважение към света и себе си.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CLOSING QUOTE -->
    <section class="bg-explo-darkblue text-white py-[60px] text-center lg:py-[80px] mb-32">
      <div class="max-w-7xl mx-auto px-6">
        <blockquote class="max-w-[800px] mx-auto text-[clamp(22px,3vw,32px)] leading-[1.4] font-medium relative px-[30px]">
          Тук няма звънци, които прекъсват потока на мисълта.
          Има <span class="text-[#CADA2B] font-bold">общност, която подкрепя</span>, и изследователски дух, който води процеса.
          <span class="absolute left-[-10px] top-[-20px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
          <span class="absolute right-[-10px] bottom-[-40px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
        </blockquote>
      </div>
    </section>
  </div>
</template>

<script setup>
useHead({ title: 'Един ден при нас' })
const localePath = useLocalePath()
</script>
