<template>
    <div class="relative 1xl:pt-[21rem] pt-64">
      <nuxt-img
        width="1400px"
        :placeholder="[4, 3]"
        format="webp"
        class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
        src="/stock/groupCloseup2.jpg" />
      <header class="relative lg:pl-12 px-4">
        <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]" src="@/assets/artwork/svg/blobHouse-layer2.svg">
        <nuxt-img 
          width="1900px"
          format="webp"
          :placeholder="[4, 3]"
          class="xl:block hidden aspect-[5/4] w-[48%] ml-auto absolute left-0 -right-1 bottom-0 object-cover object-center mask-header" src="/stock/groupCloseup2.jpg" />
        <img class="xl:block hidden 2xl:w-[28rem] w-[23rem] absolute -left-[12rem] 2xl:top-[45%] top-[60%] opacity-[0.03]" src="@/assets/artwork/svg/blobL-layer2.svg">
        <div class="xl:min-h-[28rem] min-h-[20rem] max-w-7xl mx-auto animate-fade-down">
          <div class="max-w-[35rem] relative">
            <h1 class="font-lobster text-left 1xl:text-[4.5rem] text-[3.5rem] leading-none text-explo-darkgreen mb-5 drop-shadow-text">
              Събития
            </h1>
            <div class="w-10 h-2 mb-16 bg-explo-darkgreen drop-shadow-text" />
            <p class="text-xl text-explo-whiteblue leading-7">
              Благодарим Ви, че посетихте страницата на нашия блог! В него ще откриете статии и мнения за образованието и нашата методика на работа.
            </p>
          </div>
        </div>
      </header>
      <div class="mx-auto my-24 w-56 h-2 bg-explo-lightblue rounded-2xl" />
      <!-- Content -->
      <section class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 1xl:gap-8 gap-6 mx-auto mb-18 sm:px-12 px-6 max-w-[75rem]">
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
          <div class="group flex flex-col place-items-center gap-3 text-explo-darkgreen py-12 bg-[url('/stock/groupCloseup1.JPG')] bg-cover mb-6 rounded-lg">
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
      </section>
      <section class="grid grid-cols-12 mx-auto mt-28 mb-16 sm:px-12 px-6 max-w-[75rem]">
        <div class="lg:col-span-6 col-span-full flex flex-col lg:order-1 order-2">
          <h1 class="text-3xl font-medium text-explo-darkgreen mb-4">
            Такси
          </h1>
          <p class="text-base text-white mb-3">
            Annual tuition: For the first child in the family: $12,000<br>
            For the second child: $11,000<br>
            For additional children: $9,500<br>
          </p>
          <p class="text-base text-white mb-3">
            Enrollment may take place at any time during the school year as long as there are openings available, and is for
            a full year from the date of entry.
          </p>
          <p class="text-base text-white">
            The School does not discriminate on the basis of race, color, gender, or national or ethnic origin.
          </p>
        </div>
        <div class="flex justify-center lg:col-span-6 col-span-full lg:order-2 order-1">
          <nuxt-img src="/stock/drawingonterrace.jpg"
            class="w-[35rem] mask-circle lg:mb-0 mb-8" />
        </div>
      </section>
    </div>
  </template>
  <script setup>
  </script>
    