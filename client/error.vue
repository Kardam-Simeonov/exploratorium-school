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
                    Начало
                  </span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/about-us')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 1">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 1 }">За Нас</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/school-life')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 2">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 2 }">Училищен
                    Живот</span>
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
                    Блог
                  </span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/events')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 4">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 4 }">Събития</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/contact')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 5">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 5 }">Контакти</span>
                </a>
              </NuxtLink>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <NuxtLink :to="localePath('/admission')">
                <a class="cursor-pointer" @mouseover="highlightIndex = 6">
                  <span class="bg-opacity-40 p-2 px-3 rounded-full drop-shadow-lg"
                    :class="{ 'bg-explo-lightblue': highlightIndex == 6 }">Прием</span>
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
                  Начало
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/about-us')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  За Нас
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/school-life')">
              <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                Училищен Живот
              </li>
              </NuxtLink>
              <NuxtLink to="/blog">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Блог
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/events')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Събития
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/contact')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Контакти
                </li>
              </NuxtLink>
              <NuxtLink :to="localePath('/admission')">
                <li class="py-8 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                  Прием
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
            <div class="relative pt-64">
                <header class="relative px-12">
                    <div
                        class="min-h-[20rem] 1xl:max-w-[38rem] max-w-[30rem] relative mx-auto text-center">
                        <h1
                            class="1xl:text-[6rem] text-[4.5rem] text-explo-darkgreen xl:mb-2 drop-shadow-text">
                            {{ error.statusCode }}
                        </h1>
                        <p class="text-xl text-explo-whiteblue font-medium leading-7">
                            Опа, възникна проблем! <span v-if="error.statusCode == 404">Изглежда, че сте въвели грешен адрес или страницата не съществува!</span> Може да се върнете обратно към <NuxtLink to="/"><span class="font-semibold text-explo-darkgreen hover:underline">началната страница</span></NuxtLink>.
                        </p>
                    </div>
                </header>
            </div>
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
              Въпроси
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
              <Icon name="material-symbols:phone-iphone" class="2xl:text-4xl text-3xl" />
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
              <span class="text-2xl text-explo-whiteblue">Работно Време</span>
              <span class="text-lg font-normal text-explo-whiteblue mt-2 mb-6">Понеделник - Петък<br>8:30 - 17:50</span>
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
              Навигация
            </p>
            <div class="grid grid-cols-2 gap-5">
              <div class="text-xl text-explo-whiteblue">
                <NuxtLink to="/"><p class="mb-2 cursor-pointer hover:underline">Начало</p></NuxtLink>
                <NuxtLink to="/about-us"><p class="mb-2 cursor-pointer hover:underline">За нас</p></NuxtLink>
                <NuxtLink to="/school-life"><p class="mb-2 cursor-pointer leading-tight hover:underline">Училищен Живот</p></NuxtLink>
                <NuxtLink to="/blog"><p class="cursor-pointer hover:underline">Блог</p></NuxtLink>
              </div>
              <div class="text-xl text-explo-whiteblue">
                <NuxtLink to="/events"><p class="mb-2 cursor-pointer hover:underline">Събития</p></NuxtLink>
                <NuxtLink to="/contact"><p class="mb-2 cursor-pointer hover:underline">Контакти</p></NuxtLink>
                <NuxtLink to="/admission"><p class="cursor-pointer hover:underline">Прием</p></NuxtLink>
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
const { error } = defineProps(['error'])

console.log(error)
const isMenuOpen = ref(false)
</script>
  