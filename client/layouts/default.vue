<template>
  <div>
    <!-- Navigation -->
    <div
      class="hidden xl:block absolute top-0 z-10 bg-gradient-to-b from-explo-darkpurple via-explo-darkpurple to-transparent h-72 w-full" />
    <nav ref="nav" class="lg:h-48 h-36 animate-fade-in absolute z-50 top-0 left-0 right-0 ">
      <!-- Default Variant -->
      <div class="hidden xl:flex flex-col 2xl:max-w-[86rem] max-w-7xl mx-auto px-6 relative">
        <div class="opacity-10 bg-[#9a99cc] h-28 w-full absolute left-0 z-0 rounded-b-[3rem] shadow-lg" />
        <div class="flex flex-row pt-3 relative">
          <ul
            class="relative flex flex-row justify-end pt-8 pr-6 pb-4 w-full text-white 2xl:text-xl text-lg font-medium whitespace-nowrap">
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 0">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 0 }">
                    Home
                  </span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/about-us')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 1">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 1 }">About us</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/school-life')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 2">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 2 }">School Life</span>
                </a>
              </NuxtLink>
            </li>
          </ul>
          <div class="2xl:w-[48rem] 1xl:w-[44rem] w-[40rem] h-fit bg-white p-1 rounded-md shadow-lg">
            <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.625rem]" />
            <div class="p-2">
              <NuxtLink :to="localePath('/')">
                <img class="focus:outline-none" src="@/assets/artwork/logoWhite.png">
              </NuxtLink>
            </div>
          </div>
          <ul
            class="relative flex flex-row justify-start pt-8 pl-6 pb-4 w-full text-white 2xl:text-xl text-lg font-medium whitespace-nowrap">
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/blog')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 3">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 3 }">
                    Blog
                  </span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/events')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 4">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 4 }">Events</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/contact')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 5">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 5 }">Contact</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/admission')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 6">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 6 }">Admissions</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink @mouseover="highlightIndex = 7" v-for="locale in availableLocales" :key="locale.code"
                :to="switchLocalePath(locale.code)" class="p-2 px-3 rounded-full text-xl">
                <Icon v-if="locale.code != 'bg'" name="flag:gb-4x3" class="text-white text-2xl" />
                <Icon v-if="locale.code == 'bg'" name="flag:bg-4x3" class="text-white text-2xl" />
              </NuxtLink>
            </li>
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
        <div v-show="isMenuOpen" class="fixed xl:hidden top-0 left-0 right-0 z-50">
          <div class="bg-explo-darkcard bg-opacity-[0.98] min-h-screen w-full mx-auto rounded-b-2xl shadow-2xl">
            <ul class="flex flex-col text-center text-white text-2xl h-screen py-24 mb-[15%]">
              <NuxtLink to="/">
                <li class="py-8 px-4 border-y-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Home
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/about-us')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  About Us
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/school-life')">
              <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                School Life
              </li>
              </NuxtLink>
              <NuxtLink to="/blog">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Blog
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/events')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Events
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Contact
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/admission')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Admissions
                </li>
              </NuxtLink>
            </ul>
          </div>
        </div>
      </transition>
      <div
        class="focus:outline-none xl:hidden fixed top-4 left-auto right-2 bottom-0 cursor-pointer h-fit w-fit p-2 rounded-2xl transition-transform duration-500 z-50 shadow-2xl"
        :class="{ 'bg-explo-darkercard': isMenuOpen, 'bg-explo-lightblue': !isMenuOpen }"
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
    <footer>
      <div class="pt-24 pb-12 flex flex-row flex-wrap justify-center gap-14">
        <NuxtLink to="/faq">
          <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
            <div
              class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
              <Icon name="fa6-solid:comments" class="2xl:text-4xl text-3xl" />
            </div>
            <p class="text-xl font-medium">
              Questions
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
              Admissions
            </p>
          </div>
        </NuxtLink>
        <div class="md:block hidden h-14 w-[0.20rem] bg-explo-lightblue bg-opacity-50 my-auto rounded-2xl" />
        <NuxtLink to="/contact">
          <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
            <div
              class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
              <Icon name="material-symbols:phone-iphone" class="2xl:text-4xl text-3xl" />
            </div>
            <p class="text-xl font-medium">
              Contact
            </p>
          </div>
        </NuxtLink>
      </div>
      <div class="bg-explo-darkcard border-explo-darkgreen border-t-16 min-h-[14rem] rounded-t-2xl shadow-2xl">
        <div class="flex lg:flex-row flex-col gap-y-8 1xl:gap-x-5 max-w-[90rem] mx-auto py-8 lg:px-8 md:px-16 px-8">
          <div class="flex md:flex-row flex-col gap-5 justify-end w-full">
            <div class="flex flex-col mr-auto w-auto font-medium">
              <span class="text-2xl text-explo-whiteblue">Work Days</span>
              <span class="text-lg font-normal text-explo-whiteblue mt-2 mb-6">Monday - Friday<br>8:30 - 17:50</span>
              <span class="text-xl text-explo-whiteblue">+359 87 918 0700</span>
              <span class="text-sm text-explo-whiteblue">exploratorium.school<wbr>@abv.bg</span>
            </div>
            <iframe class="1xl:h-52 lg:h-48 h-52 1xl:w-[55%] md:w-[50%] w-full border-0 rounded-xl" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.558937295701!2d23.301890451243047!3d42.62830932600874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8392257b0c7d%3A0xf3516e3590e5ea7b!2sul.%20%22Mavrovets%22%203%D0%90%2C%201415%20Kinotsentar%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1672673142690!5m2!1sen!2sbg" />
          </div>
          <div class="lg:block hidden h-48 w-[0.50rem] mx-12 bg-explo-darklitecard" />
          <div class="flex flex-col items-start w-full">
            <p class="text-2xl font-medium text-explo-whiteblue mb-4">
              Navigation
            </p>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-xl text-explo-whiteblue">
                <NuxtLink to="/"><p class="mb-2 cursor-pointer hover:underline">Home</p></NuxtLink>
                <NuxtLink to="/about-us"><p class="mb-2 cursor-pointer hover:underline">About Us</p></NuxtLink>
                <NuxtLink to="/school-life"><p class="mb-2 cursor-pointer leading-tight hover:underline">School Life</p></NuxtLink>
                <NuxtLink to="/blog"><p class="cursor-pointer hover:underline">Blog</p></NuxtLink>
              </div>
              <div class="text-xl text-explo-whiteblue">
                <NuxtLink to="/events"><p class="mb-2 cursor-pointer hover:underline">Events</p></NuxtLink>
                <NuxtLink to="/contact"><p class="mb-2 cursor-pointer hover:underline">Contact</p></NuxtLink>
                <NuxtLink to="/admission"><p class="cursor-pointer hover:underline">Admissions</p></NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-explo-darkercard h-8 text-center">
        <p class="text-explo-whiteblue pt-1">
          © Експлораториум ЕООД
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
