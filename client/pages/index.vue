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
          „Експлораториум“ се роди от един прост въпрос: Възможно ли е училището да бъде мястото, където детето се чувства най-разбрано и най-силно? За нас образованието не е заучаване на факти, а изграждане на характер. В нашата база в полите на Витоша децата не са „ученици“ в класическия смисъл – те са архитекти на собственото си знание. Тук грешката не се наказва с двойка, а се насърчава като първа стъпка към откритието.
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
            Научи повече</a>
        </NuxtLink>
      </div>
    </section>
    <!-- Testimonials -->
    <section class="relative overflow-hidden">
      <img src="/stock/playground.jpg"
        class="absolute z-0 w-full h-full top-0 left-0 object-cover object-center opacity-[0.06]" />
      <div class="relative z-10 sm:mt-36 mb-12 mt-28 mx-auto 2xl:max-w-7xl lg:max-w-6xl max-w-2xl sm:px-6 px-4">
        <div class="mb-24">
          <p class="text-white font-semibold text-[14px] uppercase tracking-[2px] mb-[14px]">Обратна връзка</p>
          <h2 class="text-left 1xl:text-5xl text-4xl font-bold text-[#CADA2B] mb-4">Какво казват родителите</h2>
          <p class="text-lg text-white font-medium italic opacity-80">Най-добрата оценка за нас са думите на хората, които ни познават отвътре.</p>
        </div>
        <div class="relative max-w-2xl mx-auto">
          <!-- All cards share one grid cell — height = tallest card, opacity crossfade between them -->
          <div class="grid [grid-template-areas:'stack']">
            <div
              v-for="(t, i) in testimonials"
              :key="i"
              class="[grid-area:stack] transition-opacity duration-300 h-full"
              :class="i !== testimonialIndex ? 'opacity-0 pointer-events-none select-none' : 'opacity-100'"
              :aria-hidden="i !== testimonialIndex ? 'true' : 'false'"
            >
              <div class="bg-explo-whiteblue p-[5px] rounded-[10px] border-b-8 border-explo-darkpurple shadow-2xl flex flex-col overflow-hidden h-full">
                <!-- Browser chrome bar -->
                <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] rounded-[4px] h-8 flex items-center px-3 gap-2 mb-[5px] shrink-0">
                  <span class="w-3 h-3 rounded-full bg-[#ff5f56] shrink-0"></span>
                  <span class="w-3 h-3 rounded-full bg-[#ffbd2e] shrink-0"></span>
                  <span class="w-3 h-3 rounded-full bg-[#27c93f] shrink-0"></span>
                  <div class="ml-2 flex-1 bg-[rgba(255,255,255,0.22)] rounded-full h-[18px] max-w-[55%] mx-auto flex items-center justify-center px-3">
                    <span class="text-[rgba(255,255,255,0.85)] text-[10px] font-medium truncate">exploratorium.bg</span>
                  </div>
                </div>
                <!-- Content -->
                <div class="relative rounded-[4px] flex-1 overflow-hidden flex flex-col">
                  <img :src="t.image" class="absolute inset-0 w-full h-full object-cover object-center" />
                  <div class="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,60,0.97)] via-[rgba(20,12,60,0.7)] to-[rgba(20,12,60,0.25)]" />
                  <div class="relative z-10 px-7 pt-5 pb-6 flex flex-col flex-1 drop-shadow">
                    <div class="font-lobster text-[#CADA2B] text-[48px] leading-none mb-[-4px]">"</div>
                    <p class="text-white text-[15px] font-medium leading-[1.75] mb-[20px] flex-grow">{{ t.quote }}</p>
                    <div class="flex items-center gap-[12px] border-t border-[rgba(255,255,255,0.2)] pt-[16px]">
                      <div class="w-[42px] h-[42px] bg-[rgba(202,218,43,0.18)] rounded-full flex items-center justify-center text-[13px] font-bold text-[#CADA2B] shrink-0">{{ t.initials }}</div>
                      <div>
                        <div class="font-semibold text-[14px] text-white">{{ t.name }}</div>
                        <div class="text-[12px] text-explo-whiteblue opacity-70">{{ t.meta }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between mt-6">
            <button
              @click="prevTestimonial"
              class="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white text-2xl hover:bg-[rgba(255,255,255,0.2)] transition-all duration-150"
              aria-label="Предишно"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="15 18 9 12 15 6"/></svg>
            </button>
            <div class="flex items-center gap-2">
              <button
                v-for="(_, i) in testimonials"
                :key="i"
                @click="testimonialIndex = i"
                class="h-2 rounded-full transition-all duration-200"
                :class="i === testimonialIndex ? 'bg-[#CADA2B] w-6' : 'bg-[rgba(255,255,255,0.3)] w-2'"
                :aria-label="`Отзив ${i + 1}`"
              />
            </div>
            <button
              @click="nextTestimonial"
              class="w-14 h-14 rounded-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.2)] flex items-center justify-center text-white text-2xl hover:bg-[rgba(255,255,255,0.2)] transition-all duration-150"
              aria-label="Следващо"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="w-5 h-5"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- What's New -->
    <section class="px-4 sm:px-6 py-24 bg-explo-darkpurple">
      <div class="max-w-5xl mx-auto">
        <div class="mb-12 text-center">
          <p class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.14em] mb-3">Актуално</p>
          <h2 class="text-white font-extrabold text-[clamp(1.8rem,4vw,2.8rem)] leading-[1.1]">Не пропускайте</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

          <!-- Admission card -->
          <NuxtLink to="/admission" class="group relative rounded-[24px] overflow-hidden min-h-[420px] flex flex-col justify-end shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-all duration-300">
            <img src="/stock/hero.jpg" alt="Прием 2026/2027" class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,60,0.96)] via-[rgba(20,12,60,0.6)] to-[rgba(20,12,60,0.15)]" />
            <div class="relative z-10 p-8">
              <span class="inline-flex items-center gap-2 bg-[#CADA2B] text-[#3a3f70] text-[11px] font-extrabold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-4">
                <span class="w-1.5 h-1.5 rounded-full bg-[#3a3f70] animate-pulse inline-block"></span>
                Прием отворен · 10 места
              </span>
              <h3 class="text-white font-extrabold text-[1.6rem] leading-[1.15] mb-3">Учебна година<br>2026/2027</h3>
              <p class="text-explo-whiteblue opacity-95 text-[0.95rem] leading-[1.6] mb-6">Приемът е отворен за деца от 4 до 14 години. Запазете час за лична среща и посещение на базата.</p>
              <span class="inline-flex items-center gap-2 bg-[#CADA2B] text-[#4a4f8f] font-bold text-[0.95rem] px-5 py-2.5 rounded-full group-hover:gap-3 transition-all duration-150">Разгледайте приема →</span>
            </div>
          </NuxtLink>

          <!-- Summer activities card -->
          <NuxtLink to="/summer-activities" class="group relative rounded-[24px] overflow-hidden min-h-[420px] flex flex-col justify-end shadow-[0_20px_60px_rgba(0,0,0,0.4)] hover:shadow-[0_28px_70px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-all duration-300">
            <img src="/stock/summerhero.jpg" alt="Летни активности 2026" class="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(20,12,60,0.96)] via-[rgba(20,12,60,0.6)] to-[rgba(20,12,60,0.15)]" />
            <div class="relative z-10 p-8">
              <span class="inline-flex items-center gap-2 bg-[#CADA2B] text-[#3a3f70] text-[11px] font-extrabold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-4">
                <span class="w-1.5 h-1.5 rounded-full bg-[#3a3f70] animate-pulse inline-block"></span>
                Лято 2026 · Записването е отворено
              </span>
              <h3 class="text-white font-extrabold text-[1.6rem] leading-[1.15] mb-3">Летни активности<br>в полите на Витоша</h3>
              <p class="text-explo-whiteblue opacity-95 text-[0.95rem] leading-[1.6] mb-6">Лагери, уъркшопи и приключения сред природата за деца от 6 до 14 години.</p>
              <span class="inline-flex items-center gap-2 bg-[#CADA2B] text-[#4a4f8f] font-bold text-[0.95rem] px-5 py-2.5 rounded-full group-hover:gap-3 transition-all duration-150">Вижте програмата →</span>
            </div>
          </NuxtLink>

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
useHead({
  title: 'Exploratorium School',
  meta: [
    { name: 'description', content: 'Експлораториум Скул е алтернативно училище в Драгалевци за деца от 4 до 14 години, в което образованието не е заучаване на факти, а изграждане на личност.' },
    { property: 'og:title', content: 'Exploratorium School - където стъпките се превръщат в следи.' },
    { property: 'og:description', content: 'Експлораториум Скул е алтернативно училище в Драгалевци за деца от 4 до 14 години, в което образованието не е заучаване на факти, а изграждане на личност.' },
    { property: 'og:image', content: 'https://exploratorium.bg/stock/hero.jpg' },
    { property: 'og:url', content: 'https://exploratorium.bg/' },
  ],
  link: [{ rel: 'canonical', href: 'https://exploratorium.bg/' }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'EducationalOrganization',
      'name': 'Експлораториум Скул',
      'alternateName': 'Exploratorium School',
      'url': 'https://exploratorium.bg',
      'description': 'Алтернативно училище в Драгалевци за деца от 4 до 14 години. Образование, което не е заучаване на факти, а изграждане на личност.',
      'address': {
        '@type': 'PostalAddress',
        'streetAddress': 'ул. Мавровец 3',
        'addressLocality': 'Драгалевци',
        'addressRegion': 'София',
        'postalCode': '1415',
        'addressCountry': 'BG'
      },
      'telephone': '+359879180700',
      'email': 'exploratorium.school@abv.bg',
      'foundingDate': '2014',
      'audience': { '@type': 'EducationalAudience', 'educationalRole': 'student' },
    })
  }]
})

const testimonials = [
  {
    initials: 'БП',
    quote: 'Като родител на дете, което учи тук трета година не съм си представяла, че ще мога да споделя, че дъщеря ми обожава да ходи на училище. Така че към описанието бих добавила и фактора „желая детето ми да е щастливо".',
    name: 'Боряна Пеева',
    meta: 'майка на Анна, 13 г.',
    image: '/stock/groupcloseup2.jpeg'
  },
  {
    initials: 'М',
    quote: 'Избрах Експлораториум за училище на децата ми, защото това е място, където можеш да мислиш свободно, без някой да ти слага рамки за правилно и грешно, където разбираш, че да учиш е всъщност забавно, където да не знаеш отговора и да задаваш „тъпи" въпроси е нормално – място, където се чувстваш равен с учителите и ценен.',
    name: 'Мария',
    meta: 'майка на Ани, 13 г. и Боби, 11 г.',
    image: '/stock/summerhero.jpg'
  },
  {
    initials: 'МП',
    quote: 'Образованието може да бъде не просто подготовка за бъдещето, а пространство, в което детето запазва себе си. Радвам се, че дъщеря ми е част от тази среда, защото днес виждам дете, което учи с интерес, изразява емоциите си, споделя, задава въпроси и не се страхува да бъде себе си.',
    name: 'Мая Пенева',
    meta: 'майка на Теа, 6 г.',
    image: '/stock/teaching1.jpeg'
  },
  {
    initials: 'М',
    quote: 'Избрах Експлораториум и за двете ми деца заради милите и ентусиазирани учители, приятелската атмосфера и възможността да учат и играят на чист въздух в полите на Витоша. Учителите успяват да съхранят и стимулират любопитството на децата с научни експерименти, разходки сред природата и много интересни активности.',
    name: 'Михаела',
    meta: 'майка на Андерс, 9 г. и Линнеа, 6 г.',
    image: '/stock/groupcloseup4.jpeg'
  }
]

const testimonialIndex = ref(0)

function prevTestimonial() {
  testimonialIndex.value = (testimonialIndex.value - 1 + testimonials.length) % testimonials.length
}
function nextTestimonial() {
  testimonialIndex.value = (testimonialIndex.value + 1) % testimonials.length
}
</script>

<style scoped>
.t-card-enter-active,
.t-card-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.t-card-enter-from {
  opacity: 0;
  transform: translateX(24px);
}
.t-card-leave-to {
  opacity: 0;
  transform: translateX(-24px);
}
</style>
