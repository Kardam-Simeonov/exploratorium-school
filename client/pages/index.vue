<template>
  <div class="relative">
    <nuxt-img
      class="lg:hidden block h-[28rem] w-full absolute top-0 left-0 mask-fadeoff object-cover object-right opacity-80" 
      format="webp"
      width="1000"
      alt="Kids sitting on stairs"
      :placeholder="[8, 6]" src="/stock/kids-stairs.jpg" />
    <section class="lg:max-h-[55rem] lg:min-h-[40rem] xl:h-[90vh] lg:h-[40vh] lg:pt-32 pt-56 mb-12 relative flex">
      <nuxt-img
        class="hidden lg:block w-[60%] relative 1xl:-left-20 -left-20 mask-hero object-cover object-right opacity-90"
        format="webp"
        width="1920px" alt="Kids sitting on stairs" :placeholder="[8, 6]" src="/stock/kids-stairs.jpg" />
      <img class="lg:block hidden 2xl:w-[28rem] w-[23rem] absolute -right-4 top-[25rem] opacity-[0.04]"
        src="@/assets/artwork/svg/blobL-layer2.svg">
      <div
        class="relative lg:right-8 z-10 xl:w-[35%] lg:w-[40%] flex flex-col justify-center p-2 pl-4 lg:text-left text-left max-w-4xl mx-auto">
        <h1 class="text-explo-darkgreen font-medium 2xl:text-5xl text-4xl mt-56 mb-8 drop-shadow-text">{{ $t("hero_title")
        }}</h1>
        <h2 class="text-explo-whiteblue 2xl:text-xl lg:text-base text-base">{{ $t("hero_subtitle") }}</h2>
        <div class="flex flex-wrap justify-center gap-8 mt-10 font-medium">
          <NuxtLink to="/faq">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
              <div
                class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
                <Icon name="fa6-solid:comments" class="2xl:text-4xl text-3xl" />
              </div>
              <p>
                Въпроси
              </p>
            </div>
          </NuxtLink>
          <NuxtLink to="/admission">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
              <div
                class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
                <Icon name="pepicons-pop:pinpoint-filled" class="2xl:text-4xl text-3xl" />
              </div>
              <p>
                Прием
              </p>
            </div>
          </NuxtLink>
          <NuxtLink to="/give">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
              <div
                class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
                <Icon name="fa6-solid:hand-holding-heart" class="2xl:text-4xl text-3xl" />
              </div>
              <p>
                Подкрепа
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- Tiles -->
    <section class="relative lg:mt-16 mt-4" @mousemove="parallaxMove">
      <div class="relative z-40 flex justify-center gap-5">
        <div class="relative z-30 1xl:mt-36 mt-28 w-[25rem] shrink-0">
          <img src="@/assets/artwork/svg/blobL-layer1.svg"
            class="absolute right-[10%] 2xl:w-[98%] 1xl:w-[85%] w-[80%] opacity-60 z-10">
          <img src="@/assets/artwork/svg/blobL-layer2.svg"
            class="absolute top-[11%] 2xl:left-[13%] 1xl:left-[28%] left-[40%] 2xl:w-[85%] 1xl:w-[70%] w-[62%] opacity-70 z-10 drop-shadow-xl">
          <nuxt-img src="/stock/blobL-image.png" width="400px"
            class="absolute top-[19%] 2xl:left-[18%] 1xl:left-[32%] left-[44%] 2xl:w-[73%] 1xl:w-[60%] w-[52%] z-10" />
          <img src="@/assets/artwork/svg/scribble-1.svg"
            class="absolute top-[60%] 2xl:left-0 1xl:left-[15%] left-[35%] 2xl:w-[60%] 1xl:w-[50%] w-[40%] z-10">
        </div>
        <div class="flex flex-col gap-5 relative z-30 mt-8">
          <div
            class="p-1 2xl:w-[15rem] 1xl:w-52 w-[11rem] ml-auto rounded-md rounded-br-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl">
            <div
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold">
              Игра
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel class="relative" :carousel-slides="['bonfire.jpg', 'woodensign.jpg', 'treebridge.jpg']"
                :initial-delay="2000" :is-round-bottom-right="true" :image-width="'500px'" />
              <div class="2xl:h-[162px] 1xl:h-[138px] h-[114px]" />
            </div>
          </div>
          <div
            class="p-1 2xl:w-[17rem] 1xl:w-56 w-48 ml-auto rounded-md rounded-br-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl">
            <div
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold">
              <div>Групова работа</div>
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel class="relative" :carousel-slides="['group4.jpg', 'kayak.jpg', 'group2.jpg']"
                :initial-delay="6000" :is-round-bottom-right="true" :image-width="'700px'" />
              <div class="2xl:h-[330px] 1xl:h-[267px] h-[224px]" />
            </div>
          </div>
        </div>

        <div class="relative">
          <!-- style="box-shadow: -400px 0px 300px rgba(80,26,232,.2), 400px 0px 300px rgba(36,161,252,.2)" -->
          <div class="shrink-0 h-fit 2xl:w-[21rem] 1xl:w-80 w-72 bg-white p-1 rounded-md shadow-2xl"
            style="box-shadow: -400px 0px 300px rgba(238, 244, 249,.3), 400px 0px 300px rgba(238, 244, 249,.3)">
            <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.625rem]" />
            <div class="relative m-2">
              <nuxt-img width="400px" src="/stock/IconBaseTransparentTop.png" />
              <nuxt-img class="relative z-50" width="400px" src="/stock/IconBaseTransparentBottom.png" />
              <nuxt-img class="absolute top-[6%] left-[47%] w-[65%] parallax transition-transform ease-linear z-40"
                width="250px" src="/stock/girlPainter.png" data-speed="1" style="transform: translateX(6px)" />
              <nuxt-img
                class="absolute top-[13%] 1xl:-left-12 -left-10 w-[50%] parallax transition-transform ease-linear z-40"
                width="200px" src="/stock/boyPainter.png" data-speed="-1"
                style="transform: translateX(22px) translateY(7px);" />
            </div>
          </div>
          <!-- <div class="cursor-pointer" @click="isNewsOpen = true">
            <div
              class="aspect-video w-20 h-[3.5rem] absolute 2xl:top-[110%] 1xl:top-[112%] top-[113%] left-0 right-0 p-4 pt-7 mx-auto bg-explo-lightblue rounded-3xl shadow-md text-center text-white"
            >
              <Icon name="fa6-solid:chevron-down" class="text-2xl" />
            </div>
            <h1
              class="2xl:w-[24rem] 1xl:w-[21rem] w-[19rem] absolute top-[99%] bg-explo-lightblue p-5 rounded-3xl shadow-md border-b-8 border-explo-darkpurple text-xl text-center font-bold text-explo-whiteblue"
            >
              Записването за новата учебна година отвори!
            </h1>
          </div> -->
        </div>

        <div class="flex flex-col gap-5 mt-8">
          <div
            class="p-1 2xl:w-[17rem] 1xl:w-56 w-48 mr-auto rounded-md rounded-bl-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl">
            <div
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold">
              Откривателство
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel class="relative" :carousel-slides="['group2.jpg', 'kayak.jpg', 'group4.jpg',]"
                :initial-delay="8000" :is-round-bottom-left="true" :image-width="'500px'" />
              <div class="2xl:h-[330px] 1xl:h-[267px] h-[224px]" />
            </div>
          </div>
          <div
            class="p-1 2xl:w-[15rem] 1xl:w-52 w-[11rem] mr-auto rounded-md rounded-bl-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl">
            <div
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold">
              Природа
            </div>
            <div class="p-2 overflow-hidden">
              <ImageCarousel class="relative" :carousel-slides="['treebridge.jpg', 'bonfire.jpg', 'drawingonterrace.jpg']"
                :initial-delay="4000" :is-round-bottom-left="true" :image-width="'700px'" />
              <div class="2xl:h-[162px] 1xl:h-[138px] h-[114px]" />
            </div>
          </div>
        </div>
        <div class="relative z-30 mt-36 w-[25rem] shrink-0">
          <img src="@/assets/artwork/svg/blobR-layer1.svg"
            class="absolute left-[5%] 2xl:w-full 1xl:w-[90%] w-[80%] opacity-60 z-10">
          <img src="@/assets/artwork/svg/blobR-layer2.svg"
            class="absolute top-[13%] 2xl:right-[11%] 1xl:right-[28%] right-[38%] 2xl:w-[88%] 1xl:w-[72%] w-[65%] opacity-70 z-10 drop-shadow-xl">
          <nuxt-img src="/stock/blobR-image.png" width="350px"
            class="absolute top-[21%] 2xl:right-[20%] 1xl:right-[37%] right-[46%] 2xl:w-[68%] 1xl:w-[55%] w-[50%] z-10" />
          <img src="@/assets/artwork/svg/scribble-1.svg"
            class="absolute top-[65%] 1xl:left-[45\%] left-[30%] 1xl:w-[55%] w-[45%] z-10 rotate-12">
        </div>
      </div>
      <div class="relative flex justify-center">
        <div class="z-0 min-w-[105rem] w-full h-24">
          <img class="h-full w-full shrink-0" src="@/assets/artwork/svg/waveDivider.svg">
        </div>
      </div>
    </section>
    <!-- News -->
    <!-- <section class="fixed left-0 right-0 top-0 bottom-0 w-full h-full z-50 overflow-y-auto overflow-x-hidden"
      :class="{ 'pointer-events-all': isNewsOpen, 'pointer-events-none': !isNewsOpen }">
      <transition enter-from-class="all opacity-0" enter-active-class="duration-300 ease-in"
        leave-active-class="duration-300 ease-out" leave-to-class="all opacity-0">
        <div v-show="isNewsOpen" class="fixed h-screen w-screen bg-black bg-opacity-30"
          @click="isNewsOpen = !isNewsOpen" />
      </transition>
      <transition enter-from-class="transform translate-x-full" enter-active-class="duration-300 ease-out"
        leave-active-class="duration-300 ease-out" leave-to-class="transform translate-x-full">
        <aside v-show="isNewsOpen"
          class="flex flex-col gap-10 absolute left-0 right-0 ml-auto 2xl:w-[38rem] md:w-[33rem] w-full min-h-screen 1xl:py-16 py-12 md:pl-16 md:pr-16 px-8 rounded-l-3xl bg-explo-background bg-opacity-[0.95] overflow-x-hidden">
          <Icon name="fa6-solid:circle-xmark"
            class="absolute left-auto right-12 top-8 bottom-0 text-4xl text-explo-lightblue hover:text-explo-darkcard cursor-pointer"
            @click="isNewsOpen = !isNewsOpen" />
          <h1 class="text-4xl font-bold text-explo-darkgreen drop-shadow-xl">
            Новини и Събития
          </h1>
          <div class="relative p-8 rounded-md rounded-bl-[4rem] border-b-8 border-explo-darkgreen bg-explo-darklitecard">
            <img class="rounded-md" src="/stock/group3.jpg">
            <h2 class="2xl:text-2xl text-xl text-white text-left font-bold mt-8 mb-4">
              Записването за новата учебна година отвори!
            </h2>
            <button
              class="bg-transparent text-white hover:text-explo-lightgreen 2xl:text-lg text-md border-l-4 border-explo-lightgreen p-1 pl-2 mb-4">
              Научете Повече
              <Icon name="fa6-solid:chevron-right" />
            </button>
          </div>
          <div
            class="md:block hidden absolute top-0 left-[96%] bg-explo-darkcard border-explo-darkgreen border-l-12 h-full w-10 rounded-l-2xl shadow-2xl" />
        </aside>
      </transition>
    </section> -->
    <!-- About Us -->
    <section
      class="relative z-10 grid grid-cols-12 bg-gradient-to-b from-explo-darkpurple to-explo-lightblue lg:px-6 sm:px-12 px-4 md:pb-48 pb-16 pt-14 rounded-b-3xl shadow-md">
      <img
        class="absolute lg:top-44 sm:top-24 top-28 lg:-left-56 sm:-left-96 -left-32 1xl:w-[38rem] lg:w-[35rem] sm:w-[40rem] w-[30rem] opacity-50"
        src="@/assets/artwork/svg/blobHouse-layer1.svg">
      <img
        class="absolute lg:top-96 sm:top-72 top-64 lg:left-16 -left-4 1xl:w-72 lg:w-64 sm:w-56 w-36 opacity-10 -rotate-90"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <nuxt-img
        class="1xl:col-span-7 lg:col-span-6 col-span-full relative 1xl:max-w-lg max-w-[27rem] w-full rounded-xl rounded-br-[3rem] self-center lg:justify-self-center sm:justify-self-start justify-self-center my-12 1xl:mr-32 lg:mr-12 shadow-xl"
        src="/stock/house.jpg" format="webp" loading="lazy" :placeholder="[4, 3]" width="800px" />
      <img class="w-[14rem] absolute z-10 lg:top-[30rem] top-[22rem] 1xl:left-8 -left-8"
        src="@/assets/artwork/svg/scribble-1.svg">
      <!-- <img class="absolute top-[31rem] bottom-0 left-[31.5rem] w-[14rem] opacity-60" src="@/assets/artwork/svg/blobHouse-layer3.svg"> -->
      <!-- <img class="absolute top-[33rem] bottom-0 left-[36rem] w-[5rem] opacity-90" src="@/assets/artwork/svg/scribble-star.svg"> -->
      <div
        class="1xl:col-span-5 lg:col-span-6 col-span-full self-start lg:justify-self-center sm:justify-self-end justify-self-center relative z-10 my-8 sm:mt-8 mt-20">
        <h1 class="font-lobster text-left 2xl:text-6xl text-5xl text-explo-darkgreen drop-shadow-text">
          {{ $t("about_title") }}
        </h1>
        <p
          class="2xl:max-w-xl max-w-lg p-6 my-8 rounded-md rounded-br-[4rem] border-b-12 border-explo-darkercard text-center 2xl:text-xl text-lg leading-normal text-explo-whiteblue bg-[#b4bd51]">
          {{ $t("about_text") }}
          <!-- <div class="hidden 2xl:block absolute left-auto right-12 bottom-6 w-10 h-10 rounded-full bg-explo-lightblue border-b-12 border-explo-darkpurple"></div>  -->
        </p>
        <button
          class="bg-explo-darkcard text-explo-whiteblue text-lg rounded-lg border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-3 shadow-lg">
          Научете повече
          <Icon name="fa6-solid:chevron-right" />
        </button>
      </div>
    </section>
    <!-- Latest Publications -->
    <!-- <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 my-28 mx-auto px-12 2xl:max-w-6xl max-w-5xl">
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
    </section> -->
    <!-- What's new -->
    <section class="relative">
      <nuxt-img src="/stock/playground.jpg" width="700px" format="webp"
        class="lg:hidden block absolute z-0 w-full min-h-[20rem] -top-[9rem] opacity-10 object-cover object-center mask-fadeoff" />
      <div class="relative grid gap-5 sm:mt-36 mb-12 mt-28 mx-auto 2xl:max-w-7xl lg:max-w-6xl max-w-2xl">
        <nuxt-img src="/stock/playground.png" width="1000px"
          class="lg:block hidden absolute z-0 w-[50rem] -top-[12.5rem] left-[55%]" />
        <!-- <div class="lg:block hidden absolute z-10 -top-8 left-[65%] 2xl:w-[25rem] 1xl:w-[23rem] w-[21rem] aspect-[8/6]">
          <img src="@/assets/artwork/svg/blobBlog-layer2.svg" class="absolute w-full drop-shadow-lg">
          <img src="@/assets/artwork/svg/logoBase.svg" class="absolute top-[35%] left-[10%] w-[80%]">
          <h1 class="absolute top-[13%] left-[25%] -rotate-12 font-lobster 2xl:text-5xl text-[2.5rem] text-explo-darkgreen">
            Блог
          </h1>
          <button
            class="absolute z-50 top-[60%] left-[10%] bg-transparent text-explo-darklitecard hover:text-explo-darkgreen 2xl:text-lg text-md border-l-4 border-explo-darkgreen p-1 pl-3 mb-4"
          >
            <NuxtLink to="/blog">
              Вижте всички статии <Icon name="fa6-solid:chevron-right" />
            </NuxtLink>
          </button>
        </div> -->
        <div class="col-span-full mb-8 pl-6">
          <h1
            class="font-lobster text-left 1xl:text-5xl text-4xl text-explo-darkgreen md:mb-2 mb-4 w-fit drop-shadow-text">
            {{ $t("publications_title") }}
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen drop-shadow-text" />
        </div>
        <ArticleCarousel :carousel-slides="articles ? articles.data : []" />
        <NuxtLink to="/blog"
          class="w-fit bg-explo-darkcard text-explo-whiteblue text-lg rounded-md border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-3 mx-auto mt-16 shadow-lg">
          {{ $t("publications_button") }}
        </NuxtLink>
      </div>
    </section>
    <!-- Facebook Feed -->
    <section class="bg-explo-darkpurple bg-opacity-40 pb-28 py-12 sm:px-12 px-6">
      <div class="grid gap-3 mx-auto 2xl:max-w-6xl max-w-5xl">
        <div class="col-span-full mb-8">
          <h1 class="font-lobster text-left 2xl:text-5xl text-4xl text-explo-darkgreen md:mb-2 mb-4 drop-shadow-xl">
            <Icon name="fa6-brands:facebook" /> @ExploratoriumBG
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen ml-1" />
        </div>
        <div class="col-span-full">
          <!-- Place <div> tag where you want the feed to appear -->
          <CuratorFeed />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const isNewsOpen = ref(false)
const feedIndex = ref(-1)
const mockFacebookPost = ref('Представям ви първите два броя на ръкописен вестник " Щастливи новини" създаден в  клуб " Щастие". А ето и темите предложени и изписани от клуб " Щастие" за първите два броя на в за първите два броя на в за първите два броя на в за първите два броя на в')

const { find } = useStrapi()
const { data: articles } = await useAsyncData(
  'articles',
  () => find('articles', { fields: ['title', 'preview', 'slug'], populate: ['banner'] }))

  
</script>
