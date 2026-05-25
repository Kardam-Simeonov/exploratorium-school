<template>
  <div>
    <!-- Navigation -->
    <div
      class="hidden xl:block absolute top-0 z-10 bg-gradient-to-b from-explo-darkpurple via-explo-darkpurple to-transparent h-72 w-full" />
    <nav ref="nav" class="lg:h-48 h-36 animate-fade-in absolute z-50 top-0 left-0 right-0 ">
      <!-- Default Variant -->
      <div class="hidden xl:flex flex-col 2xl:max-w-[86rem] max-w-7xl mx-auto px-6 relative">
        <div class="opacity-10 bg-[#9a99cc] h-28 w-full absolute left-0 z-0 rounded-b-[3rem] shadow-lg" />
        <div class="grid grid-cols-[1fr_auto_1fr] items-center relative">
          <ul
            class="relative flex flex-row justify-end items-center py-6 pr-6 min-w-0 text-white text-lg font-medium whitespace-nowrap">
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 0">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 0 }">
                    Начало
                  </span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/about-us')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 1">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 1 }">За нас</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/one-day')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 2">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 2 }">Един ден при нас</span>
                </a>
              </NuxtLink>
            </li>
          </ul>
          <div class="h-fit bg-white p-1 mt-3 rounded-md shadow-lg">
            <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.625rem]" />
            <div class="p-2">
              <NuxtLink :to="localePath('/')">
                <img class="focus:outline-none h-16 w-auto" src="@/assets/artwork/logoWhite.png">
              </NuxtLink>
            </div>
          </div>
          <ul
            class="relative flex flex-row justify-start items-center py-6 pl-6 min-w-0 text-white text-lg font-medium whitespace-nowrap">
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/contact')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 3">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 3 }">
                    Контакти
                  </span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/admission')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 4">
                  <span class="bg-opacity-40 py-[6px] px-4 rounded-xl drop-shadow-lg flex flex-col items-center gap-[2px]"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 4 }">
                    <span>Прием</span>
                    <span class="text-xs font-normal opacity-60 tracking-wide">2026/2027</span>
                  </span>
                </a>
              </NuxtLink>
            </li>
            <li class="group relative" @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/summer-activities')" class="cursor-pointer" @mouseover="highlightIndex = 5">
                <span class="bg-opacity-40 py-[6px] px-4 rounded-xl drop-shadow-lg flex flex-col items-center gap-[2px]"
                  :class="{ 'bg-explo-lightblue': highlightIndex == 5 }">
                  <span class="inline-flex items-center gap-1">
                    Летни активности
                    <svg class="w-3 h-3 opacity-75" fill="none" viewBox="0 0 10 6"><path d="M1 1l4 4 4-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                  </span>
                  <span class="text-xs font-normal opacity-60 tracking-wide">2026</span>
                </span>
              </NuxtLink>
              <div class="absolute top-full left-1/2 -translate-x-1/2 pt-2 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-150 z-50">
                <div class="bg-[rgba(99,104,172,0.82)] backdrop-blur-md border border-[rgba(255,255,255,0.18)] rounded-xl shadow-2xl py-1 min-w-[230px]">
                  <NuxtLink :to="localePath('/summer-activities/summer-school')" class="block px-4 py-3 text-white text-base font-normal hover:bg-explo-lightblue hover:bg-opacity-20 transition-colors duration-150 rounded-t-xl">
                    Лято в Експлораториум
                  </NuxtLink>
                  <NuxtLink :to="localePath('/summer-activities/scout-school')" class="block px-4 py-3 text-white text-base font-normal hover:bg-explo-lightblue hover:bg-opacity-20 transition-colors duration-150">
                    Скаутско училище
                  </NuxtLink>
                  <NuxtLink :to="localePath('/summer-activities/writers-workshop')" class="block px-4 py-3 text-white text-base font-normal hover:bg-explo-lightblue hover:bg-opacity-20 transition-colors duration-150 rounded-b-xl">
                    Работилница за писатели
                  </NuxtLink>
                </div>
              </div>
            </li>
            <!-- <li @mouseleave="highlightIndex = -1">
              <NuxtLink @mouseover="highlightIndex = 6" v-for="locale in availableLocales" :key="locale.code"
                :to="switchLocalePath(locale.code)" class="p-2 px-3 rounded-full text-xl">
                <Icon v-if="locale.code != 'bg'" name="flag:gb-4x3" class="text-white text-2xl" />
                <Icon v-if="locale.code == 'bg'" name="flag:bg-4x3" class="text-white text-2xl" />
              </NuxtLink>
            </li> -->
          </ul>
        </div>
      </div>
      <!-- Mobile Variant -->
      <div
        class="xl:hidden block absolute top-2 left-0 right-0 sm:w-[15rem] w-[13rem] mx-auto h-fit bg-white p-1 rounded-md shadow-lg">
        <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.400rem]" />
        <div class="p-2">
          <NuxtLink to="/">
            <img class="focus:outline-none" src="@/assets/artwork/logoWhite.png">
          </NuxtLink>
        </div>
      </div>
      <transition name="fade">
        <div v-show="isMenuOpen" class="fixed xl:hidden inset-0 z-50 overflow-y-auto">
          <div class="bg-gradient-to-b from-[rgba(87,93,170,0.82)] to-[rgba(99,104,172,0.82)] backdrop-blur-md min-h-full w-full mx-auto shadow-2xl">
            <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] h-[5px]" />
            <ul class="flex flex-col text-center text-white text-xl py-20">
              <NuxtLink to="/">
                <li class="py-5 px-4 border-b border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">
                  Начало
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/about-us')">
                <li class="py-5 px-4 border-b border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">
                  За нас
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/one-day')">
                <li class="py-5 px-4 border-b border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">
                  Един ден при нас
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')">
                <li class="py-5 px-4 border-b border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">
                  Контакти
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/admission')">
                <li class="py-5 px-4 border-b border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">
                  <span class="block">Прием</span>
                  <span class="text-sm font-normal opacity-60 tracking-wide">2026/2027</span>
                </li>
              </NuxtLink>
              <li class="border-b border-[rgba(255,255,255,0.12)]">
                <NuxtLink :to="localePath('/summer-activities')" @click="isMenuOpen = !isMenuOpen">
                  <div class="py-5 px-4 hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150">
                    <span class="block">Летни активности</span>
                    <span class="text-sm font-normal opacity-60 tracking-wide">2026</span>
                  </div>
                </NuxtLink>
                <div class="bg-[rgba(0,0,0,0.12)] mx-4 mb-4 rounded-xl overflow-hidden border border-[rgba(255,255,255,0.08)]">
                  <NuxtLink :to="localePath('/summer-activities/summer-school')">
                    <div class="py-4 px-6 border-b border-[rgba(255,255,255,0.08)] text-white text-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">Лято в Експлораториум</div>
                  </NuxtLink>
                  <NuxtLink :to="localePath('/summer-activities/scout-school')">
                    <div class="py-4 px-6 border-b border-[rgba(255,255,255,0.08)] text-white text-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">Скаутско училище</div>
                  </NuxtLink>
                  <NuxtLink :to="localePath('/summer-activities/writers-workshop')">
                    <div class="py-4 px-6 text-white text-lg hover:bg-[rgba(255,255,255,0.08)] transition-colors duration-150" @click="isMenuOpen = !isMenuOpen">Работилница за писатели</div>
                  </NuxtLink>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
      <div
        class="focus:outline-none xl:hidden fixed top-4 left-auto right-2 bottom-0 cursor-pointer h-fit w-fit p-2 rounded-2xl transition-transform duration-500 z-50 shadow-2xl"
        :class="{ 'bg-[rgba(255,255,255,0.2)]': isMenuOpen, 'bg-explo-lightblue': !isMenuOpen }"
        @click="isMenuOpen = !isMenuOpen">
        <Icon v-show="!isMenuOpen" name="pepicons-pop:menu" class="text-white text-4xl" />
        <Icon v-show="isMenuOpen" name="pepicons-pop:times" class="text-white text-4xl" />
      </div>
    </nav>
    <!-- Page Content -->
    <main>
      <slot />
    </main>
    <!-- Footer -->
    <footer class="[&_p]:drop-shadow [&_span]:drop-shadow">
      <div class="pt-24 pb-12 flex flex-row flex-wrap justify-center gap-14">
        <NuxtLink to="/summer-activities">
          <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
            <div
              class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
              <Icon name="mdi:white-balance-sunny" class="2xl:text-4xl text-3xl" />
            </div>
            <p class="text-xl text-center font-medium">
              Летни<br>активности
            </p>
          </div>
        </NuxtLink>
        <div class="md:block hidden h-14 w-[0.20rem] bg-explo-lightblue bg-opacity-50 my-auto rounded-2xl" />
        <NuxtLink to="/admission">
          <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
            <div
              class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
              <Icon name="pepicons-pop:pinpoint-filled" class="2xl:text-4xl text-3xl" />
            </div>
            <p class="text-xl font-medium">
              Прием
            </p>
          </div>
        </NuxtLink>
        <div class="md:block hidden h-14 w-[0.20rem] bg-explo-lightblue bg-opacity-50 my-auto rounded-2xl" />
        <NuxtLink to="/contact">
          <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
            <div
              class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
              <Icon name="material-symbols:phone-android-rounded" class="2xl:text-4xl text-3xl" />
            </div>
            <p class="text-xl font-medium">
              Контакти
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="bg-explo-darkcard border-explo-darkgreen border-t-16 min-h-[14rem] rounded-t-2xl shadow-2xl">
        <div class="flex lg:flex-row flex-col gap-y-8 1xl:gap-x-5 max-w-[90rem] mx-auto py-8 lg:px-8 md:px-16 px-8">
          <div class="flex md:flex-row flex-col gap-5 justify-end w-full">
            <div class="flex flex-col mr-auto w-auto font-medium">
              <span class="text-2xl text-explo-whiteblue">Работно време</span>
              <span class="text-lg font-normal text-explo-whiteblue mt-2 mb-6">Понеделник - Петък<br>8:30 - 17:50</span>
              <span class="text-xl text-explo-whiteblue">+359 87 918 0700</span>
              <span class="text-sm text-explo-whiteblue">exploratorium.school<wbr>@abv.bg</span>
              <a href="https://www.facebook.com/ExploratoriumBG" target="_blank" rel="noopener" class="text-sm drop-shadow text-explo-whiteblue mt-2 hover:underline">facebook.com/ExploratoriumBG</a>
            </div>
            <div class="flex flex-col gap-2 1xl:w-[55%] md:w-[50%] w-full">
              <iframe class="1xl:h-40 lg:h-36 h-40 w-full mb-2 border-0 rounded-xl" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5230.205417478834!2d23.30200026206169!3d42.63266613532392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83c18f1997c1%3A0xdfabcd8416421bfb!2sExploratorium%20School!5e0!3m2!1sen!2sbg!4v1779725354508!5m2!1sen!2sbg" />
              <span class="text-md drop-shadow text-explo-whiteblue">Адрес: кв. Драгалевци, ул. Мавровец 3</span>
            </div>
          </div>
          <div class="lg:block hidden h-48 w-[0.50rem] mx-12 bg-explo-darklitecard" />
          <div class="flex flex-col items-start w-full">
            <p class="text-2xl font-medium text-explo-whiteblue mb-4">Навигация</p>
            <div class="grid grid-cols-2 gap-x-8 gap-y-0">
              <div class="text-lg text-explo-whiteblue">
                <NuxtLink to="/"><p class="mb-2 cursor-pointer hover:underline">Начало</p></NuxtLink>
                <NuxtLink to="/about-us"><p class="mb-2 cursor-pointer hover:underline">За нас</p></NuxtLink>
                <NuxtLink to="/one-day"><p class="mb-2 cursor-pointer leading-tight hover:underline">Един ден при нас</p></NuxtLink>
                <NuxtLink to="/contact"><p class="cursor-pointer hover:underline">Контакти</p></NuxtLink>
              </div>
              <div class="text-lg text-explo-whiteblue">
                <NuxtLink to="/admission"><p class="mb-2 cursor-pointer hover:underline">Прием 2026/2027</p></NuxtLink>
                <NuxtLink to="/summer-activities"><p class="mb-2 cursor-pointer hover:underline">Летни активности</p></NuxtLink>
                <div class="pl-3 border-l border-[rgba(255,255,255,0.2)] flex flex-col gap-2">
                  <NuxtLink to="/summer-activities/summer-school"><p class="cursor-pointer hover:underline leading-tight text-base opacity-80">Лято в Експлораториум</p></NuxtLink>
                  <NuxtLink to="/summer-activities/scout-school"><p class="cursor-pointer hover:underline leading-tight text-base opacity-80">Скаутско училище</p></NuxtLink>
                  <NuxtLink to="/summer-activities/writers-workshop"><p class="cursor-pointer hover:underline leading-tight text-base opacity-80">Работилница за писатели</p></NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-explo-darkercard min-h-[2rem] text-center">
        <p class="text-explo-whiteblue pt-1">
          © Експлораториум - алтернативно училище в Драгалевци, от 2014 г. 
        </p>
      </div>
    </footer>
  </div>
</template>

<script setup>
const localePath = useLocalePath()
const { locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()

const availableLocales = computed(() => {
  return (locales.value).filter(i => i.code !== locale.value)
})

const isMenuOpen = ref(false)
const highlightIndex = ref(-1)

let savedScrollY = 0

watch(isMenuOpen, (open) => {
  if (!import.meta.client) return
  if (open) {
    savedScrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${savedScrollY}px`
    document.body.style.width = '100%'
  } else {
    document.body.style.position = ''
    document.body.style.top = ''
    document.body.style.width = ''
    window.scrollTo(0, savedScrollY)
  }
})

onUnmounted(() => {
  if (!import.meta.client) return
  document.body.style.position = ''
  document.body.style.top = ''
  document.body.style.width = ''
})

const route = useRoute()
const nav = ref(null)

function animateNav() {
  nav.value.classList.remove('animate-fade-in')
  setTimeout(() => {
    nav.value.classList.add('animate-fade-in')
  }, 0.3)
}

onMounted(() => {
  watch(() => route.path, () => {
    console.log('route changed')
    highlightIndex.value = -1
    animateNav()
  })
})

</script>
