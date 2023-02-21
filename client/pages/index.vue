<template>
  <div class="relative">
    <!-- Tiles -->
    <section @mousemove="parallaxMove">
      <div class="flex justify-center 2xl:my-12 lg:my-10 mt-20 mb-16 px-8">
        <h1
          class="lg:max-w-3xl bg-explo-lightblue bg-opacity-80 p-6 rounded-md shadow-md border-b-8 border-[#5b61a8] 1xl:text-3xl text-2xl text-center font-bold text-explo-whiteblue"
        >
          Мястото, Където Стъпките се Превръщат в Следи
        </h1>
      </div>
      <div class="relative z-40 flex justify-center gap-5 md:mb-0 mb-8">
        <div class="flex flex-col gap-5 relative z-30 mt-8">
          <div
            class="p-1 2xl:w-60 1xl:w-52 w-[11rem] ml-auto rounded-md rounded-br-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl"
          >
            <div class="title-bar">
              Игра
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel
                class="relative"
                :carousel-slides="['bonfire.jpg', 'woodensign.jpg', 'treebridge.jpg']"
                :initial-delay="2000"
                :is-round-bottom-right="true"
              />
              <img class="invisible" src="@/assets/stock/treebridge.jpg">
            </div>
          </div>
          <div
            class="p-1 2xl:w-[17rem] 1xl:w-56 w-48 ml-auto rounded-md rounded-br-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl"
          >
            <div class="title-bar">
              <div>Групова работа</div>
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel
                class="relative"
                :carousel-slides="['group4.jpg', 'kayak.jpg', 'group2.jpg']"
                :initial-delay="6000"
                :is-round-bottom-right="true"
              />
              <img class="invisible" src="@/assets/stock/group4.jpg">
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- style="box-shadow: -400px 0px 300px rgba(80,26,232,.2), 400px 0px 300px rgba(36,161,252,.2)" -->
          <div
            class="shrink-0 h-fit 2xl:w-[23rem] 1xl:w-[20rem] w-[18rem] bg-white p-1 rounded-md shadow-2xl"
            style="box-shadow: -400px 0px 300px rgba(238, 244, 249,.2), 400px 0px 300px rgba(238, 244, 249,.2)"
          >
            <div class="title-bar">
              ⠀
            </div>
            <div class="relative m-2">
              <img src="@/assets/artwork/IconBaseTransparentTop.png">
              <img class="relative z-50" src="@/assets/artwork/IconBaseTransparentBottom.png">
              <img
                class="absolute top-[6%] left-[47%] w-[65%] parallax transition-transform ease-linear z-40"
                src="@/assets/artwork/girlPainter.png"
                data-speed="1"
                style="transform: translateX(6px)"
              >
              <img
                class="absolute top-[13%] 1xl:-left-12 -left-10 w-[50%] parallax transition-transform ease-linear z-40"
                src="@/assets/artwork/boyPainter.png"
                data-speed="-1"
                style="transform: translateX(22px) translateY(7px);"
              >
            </div>
          </div>
          <div class="cursor-pointer" @click="isNewsOpen = true">
            <div
              class="aspect-video w-20 h-[3.5rem] absolute 2xl:top-[110%] 1xl:top-[112%] top-[113%] left-0 right-0 p-4 pt-7 mx-auto bg-explo-lightblue rounded-3xl shadow-md text-center text-white"
            >
              <Icon name="fa6-solid:chevron-down" class="text-2xl" />
            </div>
            <h1
              class="2xl:w-[24rem] 1xl:w-[21rem] w-[19rem] absolute top-[99%] -left-2 bg-explo-lightblue p-5 rounded-3xl shadow-md border-b-8 border-explo-darkpurple text-xl text-center font-bold text-explo-whiteblue"
            >
              Записването за новата учебна година отвори!
            </h1>
          </div>
        </div>

        <div class="flex flex-col gap-5 mt-8">
          <div
            class="p-1 2xl:w-[17rem] 1xl:w-56 w-48 mr-auto rounded-md rounded-bl-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl"
          >
            <div class="title-bar">
              Откривателство
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel
                class="relative"
                :carousel-slides="['group2.jpg', 'kayak.jpg', 'group4.jpg',]"
                :initial-delay="8000"
                :is-round-bottom-left="true"
              />
              <img class="invisible rounded-md rounded-br-[3rem]" src="@/assets/stock/group4.jpg">
            </div>
          </div>
          <div
            class="p-1 2xl:w-60 1xl:w-52 w-[11rem] mr-auto rounded-md rounded-bl-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl"
          >
            <div class="title-bar">
              Природа
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel
                class="relative"
                :carousel-slides="['treebridge.jpg', 'bonfire.jpg', 'drawingonterrace.jpg']"
                :initial-delay="4000"
                :is-round-bottom-left="true"
              />
              <img class="invisible" src="@/assets/stock/treebridge.jpg">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- News -->
    <section
      class="fixed left-0 right-0 top-0 bottom-0 w-full h-full z-50 overflow-y-auto overflow-x-hidden"
      :class="{ 'pointer-events-all': isNewsOpen, 'pointer-events-none': !isNewsOpen }"
    >
      <transition
        enter-from-class="all opacity-0"
        enter-active-class="duration-300 ease-in"
        leave-active-class="duration-300 ease-out"
        leave-to-class="all opacity-0"
      >
        <div
          v-show="isNewsOpen"
          class="fixed h-screen w-screen bg-black bg-opacity-30"
          @click="isNewsOpen = !isNewsOpen"
        />
      </transition>
      <transition
        enter-from-class="transform translate-x-full"
        enter-active-class="duration-300 ease-out"
        leave-active-class="duration-300 ease-out"
        leave-to-class="transform translate-x-full"
      >
        <aside
          v-show="isNewsOpen"
          class="flex flex-col gap-10 absolute left-0 right-0 ml-auto 2xl:w-[38rem] md:w-[33rem] w-full min-h-screen 1xl:py-16 py-12 md:pl-16 md:pr-16 px-8 rounded-l-3xl bg-explo-background bg-opacity-[0.95] overflow-x-hidden"
        >
          <Icon
            name="fa6-solid:circle-xmark"
            class="absolute left-auto right-12 top-8 bottom-0 text-4xl text-explo-lightblue hover:text-explo-darkcard cursor-pointer"
            @click="isNewsOpen = !isNewsOpen"
          />
          <h1 class="text-4xl font-bold text-explo-darkgreen drop-shadow-xl">
            Новини и Събития
          </h1>
          <div class="relative p-8 rounded-md rounded-bl-[4rem] border-b-8 border-explo-darkgreen bg-explo-darklitecard">
            <img
              class="rounded-md"
              src="@/assets/stock/group3.jpg"
            >
            <h2 class="2xl:text-2xl text-xl text-white text-left font-bold mt-8 mb-4">
              Записването за новата учебна година отвори!
            </h2>
            <button class="bg-transparent text-white hover:text-explo-lightgreen 2xl:text-lg text-md border-l-4 border-explo-lightgreen p-1 pl-2 mb-4">
              Научете Повече <Icon name="fa6-solid:chevron-right" />
            </button>
          </div>
          <div class="md:block hidden absolute top-0 left-[96%] bg-explo-darkcard border-explo-darkgreen border-l-12 h-full w-10 rounded-l-2xl shadow-2xl" />
        </aside>
      </transition>
    </section>
    <!-- About Us -->
    <section class="relative grid grid-cols-12 sm:gap-10 bg-gradient-to-b from-explo-darkpurple to-explo-lightblue px-6 md:pb-32 pb-16 pt-32 rounded-b-3xl">
      <img src="@/assets/artwork/svg/wavesdivider.svg" class="absolute top-0 h-20 w-full">
      <img
        class="md:block hidden lg:col-span-7 col-span-full max-w-3xl w-full px-4 mb-8 self-center justify-self-center"
        src="@/assets/artwork/cardMap.png"
      >
      <img class="md:hidden col-span-full mt-9 mb-8 mx-auto max-w-md w-full" src="@/assets/artwork/cardMapHouse.png">
      <div class="lg:col-span-5 col-span-full self-start justify-self-center">
        <h1 class="font-lobster text-left 2xl:text-6xl text-5xl text-explo-darkgreen drop-shadow-xl">
          За нас
        </h1>
        <p
          class="max-w-xl p-6 xl:mt-12 my-8 rounded-md rounded-br-[4rem] border-b-12 border-explo-darkercard text-center 2xl:text-xl text-lg text-explo-whiteblue bg-explo-darkcard shadow-2xl"
        >
          Експлораториум е място отвъд формули, празни слова и догми - място, посветено към света на безграничната
          детска фантазия и въображение.
          Тук децата са свободни да се изразяват, да се развиват и да се научават, изцяло според собственото им темпо.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia earum deleniti expedita amet adipisci.
          <!-- <div class="hidden 2xl:block absolute left-auto right-12 bottom-6 w-10 h-10 rounded-full bg-explo-lightblue border-b-12 border-explo-darkpurple"></div>  -->
        </p>
        <button
          class="bg-explo-darkcard text-explo-whiteblue text-xl rounded-xl border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-3 shadow-lg"
        >
          Какво ни отличава? <Icon name="fa6-solid:chevron-right" />
        </button>
      </div>
    </section>
    <!-- Latest Publications -->
    <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-28 mx-auto px-12 2xl:max-w-6xl max-w-5xl">
      <div class="col-span-full mb-8">
        <h1 class="font-lobster text-left 2xl:text-5xl text-4xl text-explo-darkgreen md:mb-2 mb-4 drop-shadow-xl">
          Последни Публикации
        </h1>
        <div class="w-10 h-2 bg-explo-darkgreen" />
      </div>
      <article
        class="h-full max-w-md relative rounded-md p-4 cursor-pointer bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-lg"
      >
        <img
          class="w-full rotate-6 hover:rotate-0 rounded-md border-8 mx-auto my-2 transition-transform duration-200"
          src="@/assets/stock/group3.jpg"
        >
        <img class="absolute w-10 top-0 left-0 right-0 mx-auto" src="@/assets/artwork/bullet.png">
        <h2 class="text-2xl text-explo-darkgreen text-center font-bold mt-8 mb-4">
          Един ден в Експлораториум
        </h2>
      </article>
      <article
        class="h-full max-w-md relative rounded-md p-4 cursor-pointer bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-lg"
      >
        <img
          class="w-full rotate-6 hover:rotate-0 rounded-md border-8 mx-auto my-2 transition-transform duration-200"
          src="@/assets/stock/woodensign.jpg"
        >
        <img class="absolute w-10 top-0 left-0 right-0 mx-auto" src="@/assets/artwork/bullet.png">
        <h2 class="text-2xl text-explo-darkgreen text-center font-bold mt-8 mb-4">
          Защо нас?
        </h2>
      </article>
      <article
        class="h-full max-w-md relative rounded-md p-4 cursor-pointer bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-lg"
      >
        <img
          class="w-full rotate-6 hover:rotate-0 rounded-md border-8 mx-auto my-2 transition-transform duration-200"
          src="@/assets/stock/bonfire.jpg"
        >
        <img class="absolute w-10 top-0 left-0 right-0 mx-auto" src="@/assets/artwork/bullet.png">
        <h2 class="text-2xl text-explo-darkgreen text-center font-bold mt-8 mb-4">
          Природата и децата
        </h2>
      </article>
    </section>
    <!-- What's new -->
    <section class="relative grid gap-5 my-36 mx-auto sm:px-6 px-3 2xl:max-w-7xl lg:max-w-6xl max-w-2xl">
      <div class="col-span-full mb-8 sm:pl-0 pl-6">
        <h1 class="font-lobster text-left 2xl:text-5xl text-4xl text-explo-darkgreen md:mb-2 mb-4 drop-shadow-xl">
          Какво още е ново в Експлораториум?
        </h1>
        <div class="w-10 h-2 bg-explo-darkgreen" />
      </div>
      <ArticleCarousel :carousel-slides="carouselArticles.data" />
    </section>
    <!-- Facebook Feed -->
    <section class="bg-explo-darkpurple bg-opacity-40 mt-28 pb-28 py-12 sm:px-12 px-6">
      <div class="grid lg:grid-cols-4 grid-cols-2 gap-3 mx-auto 2xl:max-w-6xl max-w-5xl">
        <div class="col-span-full mb-8">
          <h1 class="font-lobster text-left 2xl:text-5xl text-4xl text-explo-darkgreen md:mb-2 mb-4 drop-shadow-xl">
            <Icon name="fa6-brands:facebook" /> @ExploratoriumBG
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen ml-1" />
        </div>
        <article class="relative aspect-square rounded-md cursor-pointer shadow-lg bg-[url('@/assets/stock/group3.jpg')] bg-cover" @mouseover="feedIndex = 0" @mouseleave="feedIndex = -1">
          <a href="https://www.facebook.com/ExploratoriumBG/posts/pfbid02rBDcApGH9SQdb1m84dHarGWfegp8LYmqQsM5Vj6CpwNtLnssHdE9sZTiaUu8QXZEl" target="_blank">
            <transition name="fade">
              <div v-show="feedIndex == 0" class="h-full w-full rounded-md p-6 text-center flex flex-col place-content-center bg-explo-darkercard bg-opacity-80">
                <p class="text-white text-sm break-words">Представям ви първите два броя на ръкописен вестник " Щастливи новини" създаден в  клуб " Щастие". А ето и темите предложени и изписани  от...</p>
                <p class="text-white mt-4"><Icon name="fa6-brands:facebook" /> ExploratoriumBG</p>
              </div>
            </transition>
          </a>
        </article>
        <article class="relative aspect-square rounded-md cursor-pointer shadow-lg bg-[url('@/assets/stock/drawingonterrace.jpg')] bg-cover" @mouseover="feedIndex = 1" @mouseleave="feedIndex = -1">
          <a href="https://www.facebook.com/ExploratoriumBG/posts/pfbid02rBDcApGH9SQdb1m84dHarGWfegp8LYmqQsM5Vj6CpwNtLnssHdE9sZTiaUu8QXZEl" target="_blank">
            <transition name="fade">
              <div v-show="feedIndex == 1" class="h-full w-full rounded-md p-6 text-center flex flex-col place-content-center bg-explo-darkercard bg-opacity-80">
                <p class="text-white text-sm break-words">Представям ви първите два броя на ръкописен вестник " Щастливи новини" създаден в  клуб " Щастие". А ето и темите предложени и изписани  от...</p>
                <p class="text-white mt-4"><Icon name="fa6-brands:facebook" /> ExploratoriumBG</p>
              </div>
            </transition>
          </a>
        </article>
        <article class="relative aspect-square rounded-md cursor-pointer shadow-lg bg-[url('@/assets/stock/group1.jpg')] bg-cover" @mouseover="feedIndex = 2" @mouseleave="feedIndex = -1">
          <a href="https://www.facebook.com/ExploratoriumBG/posts/pfbid02rBDcApGH9SQdb1m84dHarGWfegp8LYmqQsM5Vj6CpwNtLnssHdE9sZTiaUu8QXZEl" target="_blank">
            <transition name="fade">
              <div v-show="feedIndex == 2" class="h-full w-full rounded-md p-6 text-center flex flex-col place-content-center bg-explo-darkercard bg-opacity-80">
                <p class="text-white text-sm break-words">Представям ви първите два броя на ръкописен вестник " Щастливи новини" създаден в  клуб " Щастие". А ето и темите предложени и изписани  от...</p>
                <p class="text-white mt-4"><Icon name="fa6-brands:facebook" /> ExploratoriumBG</p>
              </div>
            </transition>
          </a>
        </article>
        <article class="relative aspect-square rounded-md cursor-pointer shadow-lg bg-[url('@/assets/stock/group2.jpg')] bg-cover" @mouseover="feedIndex = 3" @mouseleave="feedIndex = -1">
          <a href="https://www.facebook.com/ExploratoriumBG/posts/pfbid02rBDcApGH9SQdb1m84dHarGWfegp8LYmqQsM5Vj6CpwNtLnssHdE9sZTiaUu8QXZEl" target="_blank">
            <transition name="fade">
              <div v-show="feedIndex == 3" class="h-full w-full rounded-md p-6 text-center flex flex-col place-content-center bg-explo-darkercard bg-opacity-80">
                <p class="text-white text-sm break-words">Представям ви първите два броя на ръкописен вестник " Щастливи новини" създаден в  клуб " Щастие". А ето и темите предложени и изписани  от...</p>
                <p class="text-white mt-4"><Icon name="fa6-brands:facebook" /> ExploratoriumBG</p>
              </div>
            </transition>
          </a>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
const isNewsOpen = ref(false)
const feedIndex = ref(-1)

// carousel-articles?fields=title%2C%20description&populate=image'
// const { data: carouselArticles } = await useFetch('http://127.0.0.1:1337/api/carousel-articles')
const { find } = useStrapi()
const { data: carouselArticles } = await useAsyncData(
  'carousel-articles',
  () => find('carousel-articles', { fields: ['title', 'description'], populate: ['image'] }))
</script>
