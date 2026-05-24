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
          <NuxtLink to="/summer-activities">
            <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer">
              <div
                class="w-fit p-3 aspect-square flex items-center justify-center bg-explo-darkblue rounded-full group-hover:bg-explo-darkercard group-hover:-translate-y-2 transition-all duration-200">
                <Icon name="mdi:white-balance-sunny" class="1xl:text-4xl text-3xl" />
              </div>
              <p class="text-center">
                Летни<br>активности
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
        class="lg:col-span-6 col-span-full relative 1xl:max-w-lg max-w-[27rem] w-full rounded-xl rounded-br-[3rem] self-center lg:justify-self-end justify-self-center my-12 1xl:mr-32 lg:mr-12 shadow-xl"
        src="/stock/house.jpg" />
      <img class="w-[14rem] absolute z-10 lg:top-[30rem] top-[22rem] 1xl:left-8 -left-8"
        src="@/assets/artwork/svg/scribble-1.svg">
      <div
        class="lg:col-span-6 col-span-full justify-self-center relative z-10 my-8 sm:mt-8 mt-20 max-w-xl lg:max-w-[28rem] 2xl:max-w-xl">
        <h1 class="text-[clamp(1.75rem,3.2vw,1.90rem)] 2xl:text-[clamp(2.10rem,4.5vw,2.25rem)] leading-[1.1] font-bold text-[#CADA2B] mb-12 w-fit">
          <span class="block text-[clamp(0.75rem,1.1vw,0.875rem)] 2xl:text-[clamp(1.125rem,1.5vw,1.25rem)] text-white font-medium uppercase tracking-[2px] mb-[12px] opacity-85">За нас</span>
          Ние не просто преподаваме. Ние създаваме среда за мислене.
        </h1>
        <p class="text-[clamp(1rem,1.4vw,1.05rem)] 2xl:text-[clamp(0.90rem,2vw,1.10rem)] opacity-95 mb-[32px] text-white drop-shadow-sm">
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
    <!-- Summer Activities -->
    <section class="relative">
      <img src="/stock/playground.jpg"
        class="lg:hidden block absolute z-0 w-full min-h-[20rem] -top-[9rem] opacity-10 object-cover object-center mask-fadeoff" />
      <div class="relative sm:mt-36 mb-12 mt-28 mx-auto 2xl:max-w-7xl lg:max-w-6xl max-w-2xl sm:px-6 px-4">
        <img src="/stock/playground.png"
          class="lg:block hidden absolute z-0 w-[50rem] -top-[12.5rem] left-[55%]" />
        <div class="mb-10">
          <h2 class="text-left 1xl:text-5xl text-4xl font-bold text-[#CADA2B] mb-4 w-fit">Летни активности 2026</h2>
          <p class="text-lg text-white font-medium italic opacity-90 mb-6">Лятото като приключение, в което откриваме себе си.</p>
          <p class="text-base text-white max-w-xl leading-relaxed">За лятото на 2026 година нашият екип подготви три напълно различни концептуални
              предложения, създадени да отговорят на специфичните търсения, интереси и възраст
              на децата. Всяко от тях е проектирано в синхрон с нашите ценности — изграждане на
              общност, критично мислене, автономия и дълбока връзка с природата.</p>
        </div>
        <div class="grid grid-cols-1 gap-7 lg:grid-cols-3 mt-32">
          <NuxtLink to="/summer-activities/summer-school" class="flex flex-col bg-explo-darkblue rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-200">
            <div class="relative h-[200px]">
              <img src="/stock/kayak.jpg" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(87,93,170,0.7)] to-transparent" />
              <div class="absolute bottom-4 left-5">
                <span class="bg-[#CADA2B] text-[#575DAA] text-xs font-bold uppercase tracking-[1.5px] py-1 px-3 rounded-full">5–10 юли &amp; 14–18 юли</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="w-10 h-1 bg-[#CADA2B] mb-4 rounded-full" />
              <h3 class="text-lg font-bold text-white mb-3 leading-tight">Лято в Експлораториум</h3>
              <p class="text-explo-whiteblue text-sm leading-relaxed mb-6 flex-1 opacity-80">Динамично лято за деца от 5 до 10 години. Наука, природа, готвене и творчество — всичко на едно място, в полите на Витоша.</p>
              <span class="inline-block text-center py-3 px-6 rounded-full font-semibold text-sm bg-[#CADA2B] text-[#575DAA]">Научи повече</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/summer-activities/scout-school" class="flex flex-col bg-explo-darkblue rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-200">
            <div class="relative h-[200px]">
              <img src="/stock/climbingthetree.jpg" class="w-full h-full object-cover object-center" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(87,93,170,0.7)] to-transparent" />
              <div class="absolute bottom-4 left-5">
                <span class="bg-[#CADA2B] text-[#575DAA] text-xs font-bold uppercase tracking-[1.5px] py-1 px-3 rounded-full">6–10 юли &amp; 13–17 юли</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="w-10 h-1 bg-[#CADA2B] mb-4 rounded-full" />
              <h3 class="text-lg font-bold text-white mb-3 leading-tight">Скаутско училище</h3>
              <p class="text-explo-whiteblue text-sm leading-relaxed mb-6 flex-1 opacity-80">За деца от 8 до 11 години. Оцеляване сред природата, работа в екип и незабравими лагерни вечери под небето на Витоша.</p>
              <span class="inline-block text-center py-3 px-6 rounded-full font-semibold text-sm bg-[#CADA2B] text-[#575DAA]">Научи повече</span>
            </div>
          </NuxtLink>
          <NuxtLink to="/summer-activities/writers-workshop" class="flex flex-col bg-explo-darkblue rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.25)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.35)] hover:-translate-y-1 transition-all duration-200">
            <div class="relative h-[200px]">
              <img src="/stock/drawing.jpg" class="w-full h-full object-cover object-center" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(87,93,170,0.7)] to-transparent" />
              <div class="absolute bottom-4 left-5">
                <span class="bg-[#CADA2B] text-[#575DAA] text-xs font-bold uppercase tracking-[1.5px] py-1 px-3 rounded-full">13–17 години</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="w-10 h-1 bg-[#CADA2B] mb-4 rounded-full" />
              <h3 class="text-lg font-bold text-white mb-3 leading-tight">Работилница за писатели</h3>
              <p class="text-explo-whiteblue text-sm leading-relaxed mb-6 flex-1 opacity-80">За тийнейджъри с влечение към писането. Хайку, манга, пътеписи и киносценарии — пространство, в което мисълта среща белия лист.</p>
              <span class="inline-block text-center py-3 px-6 rounded-full font-semibold text-sm bg-[#CADA2B] text-[#575DAA]">Научи повече</span>
            </div>
          </NuxtLink>
        </div>
        <div class="text-center mt-10">
          <NuxtLink to="/summer-activities" class="inline-block py-4 px-8 rounded-full font-semibold text-base bg-[rgba(255,255,255,0.1)] text-white border-2 border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.18)] transition-all duration-200">Научете повече →</NuxtLink>
        </div>
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
