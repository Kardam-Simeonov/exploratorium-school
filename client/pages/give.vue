<template>
    <div class="relative 1xl:pt-[21rem] pt-64">
    <nuxt-img width="700px"
      :placeholder="[4, 3]"
      format="webp"
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/drawing.jpg" />
    <header class="relative lg:pl-12 px-4">
      <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <nuxt-img width="1000px"
        :placeholder="[4, 3]"
        format="webp"
        class="xl:block hidden aspect-[5/4] w-[48%] ml-auto absolute left-0 -right-1 bottom-0 object-cover object-center mask-header"
        src="/stock/drawing.jpg" />
      <img class="2xl:w-[28rem] w-[23rem] absolute -left-[12rem] 2xl:top-[45%] top-[60%] opacity-[0.03]"
        src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="xl:min-h-[28rem] min-h-[20rem] max-w-7xl mx-auto">
        <div class="max-w-[35rem] relative">
          <h1 class="font-lobster text-left text-6xl leading-none text-explo-darkgreen mb-5 drop-shadow-text">
            Подкрепете ни
          </h1>
          <div class="w-10 h-2 mb-16 bg-explo-darkgreen drop-shadow-text" />
          <p class="text-xl text-explo-whiteblue leading-7">
            Благодарим Ви, че посетихте страницата на нашия блог! В него ще откриете статии и мнения за образованието и
            нашата методика на работа.
          </p>
        </div>
      </div>
    </header>
      <!-- Content -->
        <section class="mx-auto mt-28 mb-28 px-6 lg:max-w-[75rem] md:max-w-4xl max-w-lg">
            <div class="flex flex-col max-w-lg mb-8">
                <h1 class="text-3xl font-medium text-explo-darkgreen mb-2">
                    Процесът на прием
                </h1>
            </div>
            <div class="flex flex-col max-w-lg mb-8">
                <h1 class="text-3xl font-medium text-explo-darkgreen mb-4">
                    Такси
                </h1>
                <p class="text-base text-white mb-3">
                    Annual tuition: For the first child in the family: $12,000<br>
                    For the second child: $11,000<br>
                    For additional children: $9,500<br>
                </p>
                <p class="text-base text-white mb-3">
                    Enrollment may take place at any time during the school year as long as there are openings available, and is for a full year from the date of entry.
                </p>
                <p class="text-base text-white">
                    The School does not discriminate on the basis of race, color, gender, or national or ethnic origin.
                </p>
            </div>
        </section>
    </div>
  </template>
  <script setup>
  </script>
  