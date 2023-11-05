<template>
   <div class="relative 1xl:pt-72 pt-64">
    <nuxt-img width="1000px" :placeholder="[4, 3]" format="webp"
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/groupCloseup5.jpg" />
    <header class="relative px-4">
      <img class="xl:block hidden 2xl:w-[22rem] w-[15rem] absolute top-[8rem] -right-[2rem] opacity-[0.025] -rotate-[150deg]"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img class="xl:block hidden 2xl:w-[40rem] w-[38rem] absolute -top-[40rem] -right-[6rem] opacity-[0.025] -rotate-[150deg]"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img class="xl:block hidden 2xl:w-[23rem] w-[20rem] absolute -left-[12rem] top-[6rem] opacity-[0.025]"
        src="@/assets/artwork/svg/blobL-layer2.svg">
      <img class="xl:block hidden 2xl:w-[10rem] w-[8rem] absolute left-[5rem] -top-[7rem] opacity-[0.025]"
        src="@/assets/artwork/svg/blob-small1.svg">
      <img class="xl:block hidden 2xl:w-[10rem] w-[8rem] absolute left-[20rem] top-[12rem] opacity-[0.025]"
        src="@/assets/artwork/svg/blob-small2.svg">
      <h1
        class="w-fit py-14 px-12 mx-auto 2xl:text-5xl sm:text-4xl text-3xl text-center mb-6 text-explo-darkgreen font-medium rounded-3xl bg-explo-lightblue bg-opacity-20 animate-fade-down drop-shadow-text">
        Връзка с нас
      </h1>
    </header>
    <div class="mx-auto sm:my-24 my-20 w-56 h-2 bg-explo-lightblue rounded-2xl" />
    <!-- Content -->
    <section
      class="mx-auto mb-28 sm:px-8 px-2 md:max-w-4xl max-w-lg bg-explo-darkpurple bg-opacity-70 py-12 rounded-2xl">
      <div class="bg-explo-lightblue bg-opacity-20 rounded-xl mb-4 sm:p-6 p-5 text-white">
        <h1 class="text-explo-darkgreen text-2xl drop-shadow-md mb-4 font-medium">Контакти</h1>
        <div class="p-2">
          <p class="text-xl"><Icon name="fa-solid:phone-alt" class="mr-2 text-explo-lightblue mb-2" /> +359 87 918 0700</p>
          <p class="text-lg"><Icon name="fa-solid:envelope" class="mr-2 text-explo-lightblue text-xl" /> exploratorium.school@abv.bg</p>
        </div>
      </div>
      <div class="bg-explo-lightblue bg-opacity-20 rounded-xl mb-4 sm:p-6 p-5 text-white">
        <h1 class="text-explo-darkgreen text-2xl drop-shadow-md font-medium mb-4">Банкова сметка</h1>
        <div class="sm:ml-4 ml-2">
          <p class="text-xl">Експлораториум Скул ЕООД</p>
          <p class="text-lg">IBAN: BGXXXXXXXXXXXXXXXXXX</p>
          <p class="text-lg">BIC: XXXXXXX</p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
</script>
  