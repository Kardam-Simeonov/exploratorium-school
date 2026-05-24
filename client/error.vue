<template>
  <div class="min-h-screen bg-explo-background flex flex-col relative overflow-hidden">

    <img class="hidden lg:block absolute -left-[14rem] top-[10%] w-[36rem] opacity-[0.04] pointer-events-none"
      src="@/assets/artwork/svg/blobL-layer2.svg">
    <img class="hidden lg:block absolute -right-[10rem] bottom-[10%] w-[30rem] opacity-[0.04] pointer-events-none rotate-180"
      src="@/assets/artwork/svg/blobL-layer2.svg">

    <!-- Logo -->
    <div class="absolute top-4 left-1/2 -translate-x-1/2 z-10">
      <div class="bg-white p-1 rounded-md shadow-lg">
        <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.625rem]" />
        <div class="p-2">
          <NuxtLink to="/" @click="clearError({ redirect: '/' })">
            <img class="h-12 w-auto focus:outline-none" src="@/assets/artwork/logoWhite.png">
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="flex-1 flex items-center justify-center px-6 pt-32 pb-20">
      <div class="text-center max-w-[560px] animate-fade-down">
        <div class="font-lobster text-[#CADA2B] text-[clamp(100px,20vw,160px)] leading-none drop-shadow-text mb-[-10px]">
          {{ error.statusCode }}
        </div>
        <h1 class="text-white text-[clamp(22px,3.5vw,32px)] font-bold leading-[1.2] mb-[16px]">
          {{ error.statusCode === 404 ? 'Страницата не е намерена' : 'Нещо се обърка' }}
        </h1>
        <p class="text-explo-whiteblue text-[clamp(15px,1.5vw,18px)] leading-[1.6] opacity-85 mb-[36px]">
          {{ error.statusCode === 404
            ? 'Изглежда, че сте въвели грешен адрес или страницата не съществува.'
            : 'Възникна неочаквана грешка. Моля, опитайте отново.' }}
        </p>
        <button
          class="inline-block py-[14px] px-[30px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer"
          @click="clearError({ redirect: '/' })"
        >
          Към началната страница
        </button>

        <!-- Quick links -->
        <div class="mt-[52px] border-t border-[rgba(255,255,255,0.12)] pt-[32px]">
          <p class="text-[rgba(255,255,255,0.45)] text-[13px] uppercase tracking-[2px] mb-[18px]">Или отидете на</p>
          <div class="flex flex-wrap justify-center gap-[10px]">
            <NuxtLink v-for="link in links" :key="link.to" :to="link.to"
              class="px-[16px] py-[8px] rounded-full text-[14px] font-medium text-explo-whiteblue bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.16)] transition-colors duration-150"
              @click="clearError({})"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['error'])
const { error } = toRefs(props)

const links = [
  { to: '/about-us', label: 'За нас' },
  { to: '/one-day', label: 'Един ден при нас' },
  { to: '/summer-activities', label: 'Летни активности' },
  { to: '/admission', label: 'Прием' },
  { to: '/contact', label: 'Контакти' },
]
</script>
