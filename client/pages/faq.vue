<template>
  <div class="relative 1xl:pt-72 pt-64">
    <nuxt-img width="1000px" :placeholder="[4, 3]" format="webp"
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/englishTeacher.jpg" />
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
        Често Задавани Въпроси
      </h1>
    </header>
    <div class="mx-auto sm:my-24 my-20 w-56 h-2 bg-explo-lightblue rounded-2xl" />
    <!-- Content -->
    <section
      class="mx-auto mb-28 px-8 lg:max-w-5xl md:max-w-4xl max-w-lg bg-explo-darkpurple bg-opacity-70 py-12 rounded-2xl">
      <div v-for="(faq, index) in faqs" :key="index" class="bg-explo-lightblue bg-opacity-20 rounded-xl mb-4">
        <div
          class="relative bg-explo-lightblue hover:bg-opacity-30 bg-opacity-20 p-6 text-white rounded-xl w-full flex flex-row justify-between cursor-pointer"
          @click="toggleAnswer(index)">
          <p class="text-explo-darkgreen font-medium sm:text-xl text-lg drop-shadow-md w-[80%]">{{ faq.question }}</p>
          <Icon class="text-3xl transition-transform duration-300" :class="{ 'rotate-180': faq.isAnswerVisible }"
            name="fa6-solid:chevron-down" />
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
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu.',
    isAnswerVisible: false,
  },
  {
    question: 'Какво представлява учебния процес?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu.',
    isAnswerVisible: false,
  },
  {
    question: 'С каква учебна база разполагате?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. ',
    isAnswerVisible: false,
  },
  {
    question: '"По МОН ли сте?"',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. ',
    isAnswerVisible: false,
  },
  {
    question: 'Как валидират учениците на края на учебната година?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae diam eget risu aliquam aliqu. ',
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
  