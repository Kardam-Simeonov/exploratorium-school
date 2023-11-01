<template>
  <div class="relative 1xl:pt-[21rem] pt-64">
    <nuxt-img width="700px" :placeholder="[4, 3]" format="webp"
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/house.jpg" />
    <header class="relative lg:pl-12 px-4">
      <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <nuxt-img width="1000px" :placeholder="[4, 3]" format="webp"
        class="xl:block hidden aspect-[5/4] w-[48%] ml-auto absolute left-0 -right-1 bottom-0 object-cover object-center mask-header"
        src="/stock/house.jpg" />
      <img class="2xl:w-[28rem] w-[23rem] absolute -left-[12rem] 2xl:top-[45%] top-[60%] opacity-[0.03]"
        src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="xl:min-h-[28rem] min-h-[20rem] max-w-7xl mx-auto">
        <div class="max-w-[35rem] relative">
          <h1
            class="font-lobster text-left lg:text-[4rem] text-4xl leading-none text-explo-darkgreen mb-5 drop-shadow-text">
            Често Задавани Въпроси
          </h1>
          <div class="w-10 h-2 mb-16 bg-explo-darkgreen drop-shadow-text" />
          <p class="text-xl text-explo-whiteblue leading-7">
            Благодарим Ви, че посетихте страницата на нашия блог! В него ще откриете статии и мнения за образованието и
            нашата методика на работа.
          </p>
        </div>
      </div>
    </header>
    <div class="mx-auto my-24 w-56 h-2 bg-explo-lightblue rounded-2xl" />
    <!-- Content -->
    <section class="mx-auto mt-28 mb-28 px-6 lg:max-w-5xl md:max-w-4xl max-w-lg">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-explo-lightblue bg-opacity-20 rounded-xl mb-4">
        <div
          class="bg-explo-darkpurple bg-opacity-60 p-6 text-white rounded-xl w-full flex flex-row justify-between cursor-pointer"
          @click="toggleAnswer(index)">
          <p class="text-explo-darkgreen font-medium text-xl drop-shadow-md">{{ faq.question }}</p>
          <Icon class="text-3xl transition-transform duration-300" :class="{'rotate-180': faq.isAnswerVisible}" name="fa6-solid:chevron-down" />
        </div>
        <div class="px-10 text-white grid transition-[grid-template-rows] duration-300"
          :class="{ 'grid-rows-[1fr]': faq.isAnswerVisible, 'grid-rows-[0fr]': !faq.isAnswerVisible }">
          <div class="overflow-hidden">
            <p class="py-8">{{ faq.answer }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const faqs = ref([
  {
    question: 'Какво е Експлораториум Скул?',
    answer: 'It is a place where children',
    isAnswerVisible: false,
  },
  {
    question: 'Какво е Експлораториум Скул?',
    answer: 'Отговор на първия въпрос.',
    isAnswerVisible: false,
  },
  {
    question: 'Какво е Експлораториум Скул?',
    answer: 'Отговор на първия въпрос.',
    isAnswerVisible: false,
  },
]);

const toggleAnswer = (i) => {
  const faq = faqs.value[i];
  if (faq) {
    faq.isAnswerVisible = !faq.isAnswerVisible;
  }
};
</script>
  