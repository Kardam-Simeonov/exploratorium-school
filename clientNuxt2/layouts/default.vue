<template>
  <div>
    <!-- Navigation -->
    <nav class="h-48">
      <!-- Default Variant -->
      <div class="hidden lg:flex flex-col 2xl:max-w-6xl max-w-5xl mx-auto">
        <div class="bg-explo-darkcard border-explo-darkgreen border-b-16 h-6 w-full rounded-b-2xl shadow-2xl" />
        <div class="flex flex-row">
          <ul class="relative flex flex-row justify-end pt-8 pr-8 pb-4 w-full text-explo-whiteblue 2xl:text-xl text-lg font-semibold">
            <li @mouseleave="highlightIndex = -1">
              <a class="cursor-pointer px-2" @mouseover="highlightIndex = 0">
                <span class="border-explo-darkgreen pb-1" :class="{'border-b-6': highlightIndex == 0}">
                  <NuxtLink to="/">Начало</NuxtLink>
                </span>
              </a>
              <transition name="fade">
                <div v-show="highlightIndex == 0" class="absolute top-20 left-0 z-50 flex flex-row gap-10 w-[160%] bg-explo-darklitecard bg-opacity-[97%] border-b-8 border-explo-darkercard p-8 rounded-md">
                  <div class="w-2/3 flex flex-col gap-5">
                    <div class="h-56 bg-[url('@/assets/stock/house.jpg')] bg-cover bg-no-repeat rounded-md" />
                    <h1 class="text-white font-thin text-lg">
                      Следете всичко ново в Експлораториум от нашата начална страница!
                    </h1>
                  </div>
                  <ul class="w-1/3 flex flex-col content-center text-explo-whiteblue">
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Последни Публикации
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Какво е ново в Експлораториум?
                    </li>
                    <li class="h-fit py-2 cursor-pointer text-lg hover:text-explo-lightgreen">
                      Публикации от Фейсбук
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <a class="cursor-pointer px-2" @mouseover="highlightIndex = 1">
                <span class="border-explo-darkgreen pb-1" :class="{'border-b-6': highlightIndex == 1}">За Нас</span>
              </a>
              <transition name="fade">
                <div v-show="highlightIndex == 1" class="absolute top-20 left-0 z-50 flex flex-row gap-10 w-[160%] bg-explo-darklitecard bg-opacity-[97%] border-b-8 border-explo-darkercard p-8 rounded-md">
                  <div class="w-2/3 flex flex-col gap-5">
                    <div class="h-56 bg-[url('@/assets/stock/woodensign.jpg')] bg-cover bg-no-repeat rounded-md" />
                    <h1 class="text-white font-thin text-lg">
                      Експлораториум е място отвъд догми, празни слова или формули
                    </h1>
                  </div>
                  <ul class="w-1/3 flex flex-col content-center text-explo-whiteblue">
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Последни Публикации
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Какво е ново в Експлораториум?
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <a class="cursor-pointer px-2" @mouseover="highlightIndex = 2">
                <span class="border-explo-darkgreen pb-1" :class="{'border-b-6': highlightIndex == 2}">Училищен Живот</span>
              </a>
              <transition name="fade">
                <div v-show="highlightIndex == 2" class="absolute top-20 left-0 z-50 flex flex-row gap-10 w-[160%] bg-explo-darklitecard bg-opacity-[97%] border-b-8 border-explo-darkercard p-8 rounded-md">
                  <div class="w-2/3 flex flex-col gap-5">
                    <div class="h-56 bg-[url('@/assets/stock/drawingonterrace.jpg')] bg-cover bg-no-repeat rounded-md" />
                    <h1 class="text-white font-thin text-lg">
                      Един ден в Експлораториум протича според собствения часовник на детето
                    </h1>
                  </div>
                  <ul class="w-1/3 flex flex-col content-center text-explo-whiteblue">
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Последни Публикации
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Какво е ново в Експлораториум?
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 cursor-pointer text-lg hover:text-explo-lightgreen">
                      Публикации от Фейсбук
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </ul>
          <div class="2xl:w-[48rem] xl:w-[44rem] w-[40rem] h-fit bg-white p-1 rounded-md shadow-lg">
            <div class="title-bar">
              <div class="title-bar-text">
                ⠀
              </div>
            </div>
            <div class="p-2">
              <NuxtLink to="/">
                <img class="focus:outline-none" src="@/assets/artwork/logoWhite.png">
              </NuxtLink>
            </div>
          </div>
          <ul class="relative flex flex-row justify-start pt-8 pl-8 pb-4 w-full text-explo-whiteblue 2xl:text-xl text-lg font-semibold">
            <li @mouseleave="highlightIndex = -1">
              <a class="cursor-pointer px-2" @mouseover="highlightIndex = 3">
                <span class="border-explo-darkgreen pb-1" :class="{'border-b-6': highlightIndex == 3}">
                  <nuxt-link to="/blog">Блог</nuxt-link>
                </span>
              </a>
              <transition name="fade">
                <div v-show="highlightIndex == 3" class="absolute top-20 -left-[60%] z-50 flex flex-row gap-10 w-[160%] bg-explo-darklitecard bg-opacity-[97%] border-b-8 border-explo-darkercard p-8 rounded-md">
                  <div class="w-2/3 flex flex-col gap-5">
                    <div class="h-56 bg-[url('@/assets/stock/treebridge.jpg')] bg-cover bg-no-repeat rounded-md" />
                    <h1 class="text-white font-thin text-lg">
                      Следете всичко ново в Експлораториум от нашата начална страница!
                    </h1>
                  </div>
                  <ul class="w-1/3 flex flex-col content-center text-explo-whiteblue">
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Последни Публикации
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Какво е ново в Експлораториум?
                    </li>
                    <li class="h-fit py-2 cursor-pointer text-lg hover:text-explo-lightgreen">
                      Публикации от Фейсбук
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <a class="cursor-pointer px-2" @mouseover="highlightIndex = 4">
                <span class="border-explo-darkgreen pb-1" :class="{'border-b-6': highlightIndex == 4}">Галерия</span>
              </a>
              <transition name="fade">
                <div v-show="highlightIndex == 4" class="absolute top-20 -left-[60%] z-50 flex flex-row gap-10 w-[160%] bg-explo-darklitecard bg-opacity-[97%] border-b-8 border-explo-darkercard p-8 rounded-md">
                  <div class="w-2/3 flex flex-col gap-5">
                    <div class="h-56 bg-[url('@/assets/stock/undertree.jpg')] bg-cover bg-no-repeat rounded-md" />
                    <h1 class="text-white font-thin text-lg">
                      Експлораториум е място отвъд догми, празни слова или формули
                    </h1>
                  </div>
                  <ul class="w-1/3 flex flex-col content-center text-explo-whiteblue">
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Последни Публикации
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Какво е ново в Експлораториум?
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <a class="cursor-pointer px-2" @mouseover="highlightIndex = 5">
                <span class="border-explo-darkgreen pb-1" :class="{'border-b-6': highlightIndex == 5}">Събития</span>
              </a>
              <transition name="fade">
                <div v-show="highlightIndex == 5" class="absolute top-20 -left-[60%] z-50 flex flex-row gap-10 w-[160%] bg-explo-darklitecard bg-opacity-[97%] border-b-8 border-explo-darkercard p-8 rounded-md">
                  <div class="w-2/3 flex flex-col gap-5">
                    <div class="h-56 bg-[url('@/assets/stock/bonfire.jpg')] bg-cover bg-no-repeat rounded-md" />
                    <h1 class="text-white font-thin text-lg">
                      Един ден в Експлораториум протича според собствения часовник на детето
                    </h1>
                  </div>
                  <ul class="w-1/3 flex flex-col content-center text-explo-whiteblue">
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      Последни Публикации
                    </li>
                    <li class="h-fit py-2 cursor-pointer text-lg hover:text-explo-lightgreen">
                      Какво е ново в Експлораториум?
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
            <li @mouseleave="highlightIndex = -1">
              <a class="cursor-pointer px-2" @mouseover="highlightIndex = 6">
                <span class="border-explo-darkgreen pb-1" :class="{'border-b-6': highlightIndex == 6}">Прием</span>
              </a>
              <transition name="fade">
                <div v-show="highlightIndex == 6" class="absolute top-20 -left-[60%] z-50 flex flex-row gap-10 w-[160%] bg-explo-darklitecard bg-opacity-[97%] border-b-8 border-explo-darkercard p-8 rounded-md">
                  <div class="w-2/3 flex flex-col gap-5">
                    <div class="h-56 bg-[url('@/assets/stock/group1.jpg')] bg-cover bg-no-repeat rounded-md" />
                    <h1 class="text-white font-thin text-lg">
                      Един ден в Експлораториум протича според собствения часовник на детето
                    </h1>
                  </div>
                  <ul class="w-1/3 flex flex-col content-center text-explo-whiteblue">
                    <li class="h-fit py-2 border-b-2 border-explo-darkcard cursor-pointer text-lg hover:text-explo-lightgreen">
                      За Нас
                    </li>
                    <li class="h-fit py-2 cursor-pointer text-lg hover:text-explo-lightgreen">
                      Последни Публикации
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </ul>
        </div>
      </div>
      <!-- Mobile Variant -->
      <div
        class="lg:hidden left-0 right-0 transition-transform duration-500 z-50"
        :class="{ '-translate-y-[100vh]': !isNavVisible, 'fixed': isNavVisible, 'absolute': !isNavVisible }"
      >
        <div class="bg-explo-darkcard border-explo-darkgreen border-b-16 min-h-screen w-full mx-auto rounded-b-2xl shadow-2xl">
          <ul class="flex flex-col text-left text-white text-2xl h-screen py-16 mb-[15%]">
            <li class="py-6 px-4 border-y-2 border-explo-darklitecard">
              Начало
            </li>
            <li class="py-6 px-4 border-b-2 border-explo-darklitecard">
              За Нас
            </li>
            <li class="py-6 px-4 border-b-2 border-explo-darklitecard">
              Училищен Живот
            </li>
            <li class="py-6 px-4 border-b-2 border-explo-darklitecard">
              Блог
            </li>
            <li class="py-6 px-4 border-b-2 border-explo-darklitecard">
              Галерия
            </li>
            <li class="py-6 px-4 border-b-2 border-explo-darklitecard">
              Събития
            </li>
          </ul>
        </div>
        <div class="w-fit mx-auto bg-white p-1 rounded-md shadow-2xl">
          <div class="title-bar">
            <div class="title-bar-text">
              ⠀
            </div>
          </div>
          <div class="p-2">
            <router-link class="focus:outline-none" to="/" @click="isNavVisible = false">
              <img class="w-52" src="@/assets/artwork/logoWhite.png">
            </router-link>
          </div>
        </div>
      </div>
      <div
        class="focus:outline-none lg:hidden  top-2 left-auto right-8 bottom-0 cursor-pointer h-fit w-fit transition-transform duration-500 z-50"
        :class="{ 'rotate-180': isNavVisible, 'fixed' : isNavVisible, 'absolute' : !isNavVisible }"
        @click="isNavVisible = !isNavVisible"
      >
        <fa icon="fa-solid fa-bars" class="fa-3x text-white" />
      </div>
    </nav>
    <!-- Page Content -->
    <Nuxt />
    <!-- Footer -->
    <footer>
      <div class="pt-32 pb-12 flex flex-row flex-wrap justify-center gap-14">
        <div class="flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer hover:-translate-y-1 transition-transform duration-200">
          <fa icon="fa-solid fa-comments" class="fa-2x" />
          <p class="text-xl font-bold">
            Питайте ни
          </p>
        </div>
        <div class="md:block hidden h-14 w-[0.10rem] bg-explo-darkercard my-auto" />
        <div class="flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer hover:-translate-y-1 transition-transform duration-200">
          <fa icon="fa-solid fa-envelope-open-text" class="fa-2x" />
          <p class="text-xl font-bold">
            Запишете се
          </p>
        </div>
        <div class="md:block hidden h-14 w-[0.10rem] bg-explo-darkercard my-auto" />
        <div class="flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer hover:-translate-y-1 transition-transform duration-200">
          <fa icon="fa-solid fa-location-dot" class="fa-2x" />
          <p class="text-xl font-bold">
            Посетете ни
          </p>
        </div>
      </div>
      <div class="bg-explo-darkcard border-explo-darkgreen border-t-16 min-h-[14rem] rounded-t-2xl shadow-2xl">
        <div
          class="grid lg:grid-cols-11 grid-cols-6 gap-y-8 1xl:gap-x-5 max-w-[90rem] mx-auto py-8 lg:px-8 md:px-16 px-8"
        >
          <div class="1xl:col-span-2 lg:col-span-3 md:col-span-3 col-span-full flex break-words">
            <div class="flex flex-col mr-6 w-full">
              <span class="text-2xl font-bold text-explo-whiteblue">Работно Време</span>
              <span class="text-lg font-normal text-explo-whiteblue mt-2 mb-6">Понеделник - Петък<br>8:30 - 17:50</span>
              <span class="text-xl font-bold text-explo-whiteblue">+359 87 918 0700</span>
              <span class="text-sm font-bold text-explo-whiteblue">exploratorium.school<wbr>@abv.bg</span>
            </div>
          </div>
          <div class="1xl:col-span-3 lg:col-span-2 md:col-span-3 col-span-full">
            <iframe
              class="1xl:h-52 lg:h-48 h-52 w-full border-0 rounded-xl"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.558937295701!2d23.301890451243047!3d42.62830932600874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8392257b0c7d%3A0xf3516e3590e5ea7b!2sul.%20%22Mavrovets%22%203%D0%90%2C%201415%20Kinotsentar%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1672673142690!5m2!1sen!2sbg"
            />
          </div>
          <div class="col-span-1 mx-auto lg:block hidden">
            <div class="h-48 w-[0.20rem] bg-explo-darklitecard" />
          </div>
          <div class="lg:col-span-5 col-span-full flex flex-col">
            <p class="text-2xl font-bold text-explo-whiteblue mb-4">
              Навигация
            </p>
            <div class="grid grid-cols-2">
              <div class="text-xl font-normal text-explo-whiteblue">
                <p>Начало</p>
                <p>За нас</p>
                <p>Училищен Живот</p>
              </div>
              <div class="text-xl font-normal text-explo-whiteblue">
                <p>Блог</p>
                <p>Галерия</p>
                <p>Прием</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-explo-darkercard h-8 text-center">
        <p class="text-explo-whiteblue pt-1">
          © 2023 – Експлораториум ЕООД
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      isNavVisible: false,
      highlightIndex: -1
    }
  }
}
</script>
