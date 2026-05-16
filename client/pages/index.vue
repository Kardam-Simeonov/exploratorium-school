<template>
  <div class="relative">
    <img
      class="lg:hidden block h-[28rem] w-full absolute top-0 left-0 mask-fadeoff object-cover object-top opacity-80"
      alt="Kids sitting on stairs"
      src="/stock/kids-stairs.jpg"
    />
    <div
      class="hidden xl:hidden lg:block absolute top-0 z-10 bg-gradient-to-b from-explo-darkpurple via-explo-darkpurple to-transparent h-80 w-full" />
    <section
      class="lg:max-h-[55rem] lg:min-h-[40rem] xl:h-[90vh] lg:h-[40vh] xl:pt-36 lg:pt-28 pt-56 mb-12 relative flex">
      <img
        class="hidden lg:block w-[60%] relative 1xl:-left-20 -left-20 mask-hero object-cover object-right opacity-90"
        alt="Kids sitting on stairs"
        src="/stock/kids-stairs.jpg"
      />

      <img class="lg:block hidden 2xl:w-[28rem] w-[23rem] absolute -right-4 top-[25rem] opacity-[0.04]"
        src="../assets/artwork/svg/blobL-layer2.svg">
      <div
        class="relative animate-fade-down lg:right-8 z-10 xl:w-[35%] lg:w-[40%] flex flex-col justify-center p-2 pl-4 lg:text-left text-left max-w-xl mx-auto">
        <h1 class="text-explo-darkgreen font-medium 2xl:text-5xl text-4xl mt-56 mb-8 drop-shadow-text">{{ $t("hero_title")
        }}</h1>
        <h2 class="text-explo-whiteblue 2xl:text-xl lg:text-base text-base">{{ $t("hero_subtitle") }}</h2>
        <div class="flex flex-wrap justify-center gap-8 mt-10 font-medium">
          <NuxtLink to="/summer-school">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
              <div
                class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
                <Icon name="mdi:white-balance-sunny" class="1xl:text-4xl text-3xl" />
              </div>
              <p class="text-center">
                Лятно<br>училище
              </p>
            </div>
          </NuxtLink>
          <NuxtLink to="/admission">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
              <div
                class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
                <Icon name="pepicons-pop:pinpoint-filled" class="1xl:text-4xl text-3xl" />
              </div>
              <p>
                Прием
              </p>
            </div>
          </NuxtLink>
          <NuxtLink to="/contact">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
              <div
                class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
                <Icon name="material-symbols:phone-android-rounded" class="1xl:text-4xl text-3xl" />
              </div>
              <p>
                Контакти
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
    <!-- Tiles -->
    <section class="relative lg:mt-20 mt-4" @mousemove="parallaxMove">
      <div class="relative z-40 flex justify-center gap-5">
        <div class="relative z-30 1xl:mt-36 mt-28 w-[25rem] shrink-0">
          <img src="@/assets/artwork/svg/blobL-layer1.svg"
            class="absolute right-[10%] 2xl:w-[98%] 1xl:w-[85%] w-[80%] opacity-60 z-10">
          <img src="@/assets/artwork/svg/blobL-layer2.svg"
            class="absolute top-[11%] 2xl:left-[13%] 1xl:left-[28%] left-[40%] 2xl:w-[85%] 1xl:w-[70%] w-[62%] opacity-70 z-10 drop-shadow-xl">
          <img src="/stock/blobL-image.png"
            class="absolute top-[19%] 2xl:left-[18%] 1xl:left-[32%] left-[44%] 2xl:w-[73%] 1xl:w-[60%] w-[52%] z-10" />
          <img src="@/assets/artwork/svg/scribble-1.svg"
            class="absolute top-[60%] 2xl:left-0 1xl:left-[15%] left-[35%] 2xl:w-[60%] 1xl:w-[50%] w-[40%] z-10">
        </div>
        <div class="flex flex-col gap-5 relative z-30 mt-8">
          <div
            class="p-1 2xl:w-[15rem] 1xl:w-52 w-[11rem] ml-auto rounded-md rounded-br-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl">
            <div
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold h-[1.500rem]">
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
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold h-[1.500rem]">
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
          <div class="shrink-0 aspect-[0.6125/1] 2xl:w-[21rem] 1xl:w-80 w-72 bg-white p-1 rounded-md shadow-2xl"
            style="box-shadow: -400px 0px 300px rgba(238, 244, 249,.3), 400px 0px 300px rgba(238, 244, 249,.3)">
            <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.625rem]" />
            <div class="relative m-2">
              <img src="/stock/IconBaseTransparentTop.png" />
              <img src="/stock/IconBaseTransparentBottom.png" class="relative z-50" />
              <img class="absolute top-[6%] left-[47%] w-[65%] parallax transition-transform ease-linear z-40"
                src="/stock/girlPainter.png" data-speed="1.5" style="transform: translateX(6px)" />
              <img
                class="absolute top-[13%] 1xl:-left-12 -left-10 w-[50%] parallax transition-transform ease-linear z-40"
                src="/stock/boyPainter.png" data-speed="-1.5"
                style="transform: translateX(22px) translateY(7px);" />
            </div>
          </div>
        </div>

        <div class="flex flex-col gap-5 mt-8">
          <div
            class="p-1 2xl:w-[17rem] 1xl:w-56 w-48 mr-auto rounded-md rounded-bl-[4rem] border-b-8 border-explo-darkpurple bg-explo-whiteblue shadow-2xl">
            <div
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold h-[1.500rem]">
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
              class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] text-white text-sm font-semibold h-[1.500rem]">
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
          <img src="/stock/blobR-image.png"
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
    <!-- About Us -->
    <section
      class="relative z-10 grid grid-cols-12 bg-gradient-to-b from-explo-darkpurple via-[#7e7eba] to-[#9A99CC] lg:pl-6 px-4 md:pb-48 pb-16 pt-14 rounded-b-3xl shadow-md">
      <img
        class="absolute lg:top-44 sm:top-24 top-28 lg:-left-56 sm:-left-96 -left-32 1xl:w-[38rem] lg:w-[35rem] sm:w-[40rem] w-[30rem] opacity-50"
        src="@/assets/artwork/svg/blobHouse-layer1.svg">
      <img
        class="absolute lg:top-96 sm:top-72 top-64 lg:left-16 -left-4 1xl:w-72 lg:w-64 sm:w-56 w-36 opacity-10 -rotate-90"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img
        class="lg:col-span-6 col-span-full relative 1xl:max-w-lg max-w-[27rem] w-full rounded-xl rounded-br-[3rem] self-center lg:justify-self-end sm:justify-self-start justify-self-center my-12 1xl:mr-32 lg:mr-12 shadow-xl"
        src="/stock/house.jpg" />
      <img class="w-[14rem] absolute z-10 lg:top-[30rem] top-[22rem] 1xl:left-8 -left-8"
        src="@/assets/artwork/svg/scribble-1.svg">
      <div
        class="lg:col-span-6 col-span-full justify-self-center relative z-10 my-8 sm:mt-8 mt-20">
        <h1 class="text-[clamp(2.25rem,4.5vw,2.5rem)] leading-[1.1] font-bold text-[#CADA2B] mb-12 max-w-2xl w-fit">
          <span class="block text-[clamp(1.125rem,1.5vw,1.25rem)] text-white font-medium uppercase tracking-[2px] mb-[12px] opacity-85">За нас</span>
          Ние не просто преподаваме. Ние създаваме среда за мислене.
        </h1>
        <p class="max-w-xl text-[clamp(1rem,2vw,1.20rem)] opacity-95 mb-[32px] text-white drop-shadow-sm">
          „Експлораториум“ се роди от един прост въпрос: Възможно ли е училището да бъде мястото, където детето се чувства най-разбрано и най-силно? Ние сме общност от изследователи, за които образованието не е заучаване на факти, а изграждане на характер. В нашата база в полите на Витоша децата не са „ученици“ в класическия смисъл – те са архитекти на собственото си знание. Тук грешката не се наказва с двойка, а се насърчава като първа стъпка към откритието.
        </p>
        <!-- <p
          class="2xl:max-w-xl max-w-lg p-6 my-8 rounded-md rounded-br-[4rem] border-b-12 border-explo-darkercard text-center 2xl:text-xl text-lg leading-normal text-explo-whiteblue bg-[#b4bd51]">
          {{ $t("about_text") }}
        </p> -->
        <NuxtLink to="/about-us">
          <!-- <button
            class="bg-explo-darkcard text-explo-whiteblue text-lg rounded-lg border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-3 shadow-lg">
            Learn more
            <Icon name="fa6-solid:chevron-right" />
          </button> -->
          <a href="#cta" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">
            Научете повече</a>
        </NuxtLink>
      </div>
    </section>
    <!-- What's new -->
    <section class="relative">
      <img src="/stock/playground.jpg" 
        class="lg:hidden block absolute z-0 w-full min-h-[20rem] -top-[9rem] opacity-10 object-cover object-center mask-fadeoff" />
      <div class="relative grid gap-5 sm:mt-36 mb-12 mt-28 mx-auto 2xl:max-w-7xl lg:max-w-6xl max-w-2xl">
        <img src="/stock/playground.png" 
          class="lg:block hidden absolute z-0 w-[50rem] -top-[12.5rem] left-[55%]" />
        <div class="col-span-full mb-8 sm:pl-6 pl-3">
          <h1
            class="text-left 1xl:text-5xl text-4xl font-bold text-[#CADA2B] mb-12 w-fit">
            Летни Активности 2026
          </h1>
          <p class="text-lg opacity-95 mb-[32px] text-white max-w-xl">
            Докато светът спори за оценки, ние експериментираме, готвим и изследваме Витоша.
            Всяка седмица е различна научна и емоционална лаборатория за деца от 5 до 10 години.
          </p>
          <!-- <div class="w-10 h-2 bg-explo-darkgreen drop-shadow-text" /> -->
        </div>
        <!-- <ArticleCarousel :carousel-slides="articles ? articles.data : []" /> -->
         <!-- Content -->
        <!-- <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 1xl:gap-8 gap-6 mx-auto mt-24 mb-18 sm:px-12 px-6 max-w-[75rem]">
          <article class="relative h-full w-full rounded-md rounded-br-3xl p-3 pb-4 bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-xl">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen py-12 bg-[url('/stock/smallgroup.jpg')] bg-cover mb-6 rounded-lg">
              <div
                class="w-fit p-6 aspect-square flex items-center justify-center bg-explo-background bg-opacity-90 rounded-full text-6xl drop-shadow-sm">
                1
              </div>
            </div>
            <div class="mx-auto w-16 h-[0.20rem] bg-explo-lightblue rounded-2xl opacity-50" />
            <h1 class="text-xl text-explo-darkgreen font-medium my-5">
              Среща
            </h1>
            <p class="text-white mb-6">
              Организираме среща с детето и родителите. По време на срещата ще Ви представим нашата методика на работа и ще отговорим на всички Ваши въпроси.
            </p>
          </article>
          <article class="relative h-full w-full rounded-md rounded-br-3xl p-3 pb-4 bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-xl">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen py-12  bg-cover mb-6 rounded-lg">
              <div
                class="w-fit p-6 aspect-square flex items-center justify-center bg-explo-background bg-opacity-90 rounded-full text-6xl drop-shadow-sm">
                2
              </div>
            </div>
            <div class="mx-auto w-16 h-[0.20rem] bg-explo-lightblue rounded-2xl opacity-50" />
            <h1 class="text-xl text-explo-darkgreen font-medium my-5">
              Пробна седмица
            </h1>
            <p class="text-white mb-6">
              Повреме на пробната седмица, детето ще има възможност да се запознае с учителите и другите деца, както и да се присъедини към ежедневните занимания.
            </p>
          </article>
          <article class="relative h-full w-full rounded-md rounded-br-3xl p-3 pb-4 bg-explo-darkpurple border-b-8 border-explo-lightblue shadow-xl">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen py-12 bg-[url('/stock/woodensign.jpg')] bg-cover mb-6 rounded-lg">
              <div
                class="w-fit p-6 aspect-square flex items-center justify-center bg-explo-background bg-opacity-90 rounded-full text-6xl drop-shadow-sm">
                3
              </div>
            </div>
            <div class="mx-auto w-16 h-[0.20rem] bg-explo-lightblue rounded-2xl opacity-50" />
            <h1 class="text-xl text-explo-darkgreen font-medium my-5">
              Записване
            </h1>
            <p class="text-white mb-6">
              След пробната седмица, детето може да бъде записано в училището.
            </p>
          </article>
        </section> -->
        <!-- <NuxtLink to="/blog"
          class="w-fit bg-explo-darkcard text-explo-whiteblue text-lg rounded-md border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-3 mx-auto mt-16 shadow-lg">
          {{ $t("publications_button") }}
        </NuxtLink> -->
      </div>
    </section>
    <!-- Facebook Feed -->
    <!-- <section class="bg-explo-darkpurple bg-opacity-40 pb-28 py-12 sm:px-12 px-6">
      <div class="grid gap-3 mx-auto 2xl:max-w-6xl max-w-5xl">
        <div class="col-span-full mb-8">
          <h1 class="font-lobster text-left 2xl:text-5xl text-4xl text-explo-darkgreen md:mb-2 mb-4 drop-shadow-xl">
            <Icon name="fa6-brands:facebook" /> @ExploratoriumBG
          </h1>
          <div class="w-10 h-2 bg-explo-darkgreen ml-1" />
        </div>
        <div class="col-span-full">
          <CuratorFeed />
        </div>
      </div>
    </section> -->
  </div>
</template>

<script setup>
// import { ref, onMounted } from 'vue'
// const { find } = useStrapi()

// const articles = ref([])

// onMounted(async () => {
//   const res = await find('articles', {
//     fields: ['title', 'preview', 'slug'],
//     populate: ['banner']
//   })
//   articles.value = res
// })
</script>
