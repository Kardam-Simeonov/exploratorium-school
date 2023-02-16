<template>
  <div class="grid">
    <SlideItem v-for="(slide, index) in carouselSlides" :key="index" :transition-duration="0.3" class="row-start-1 col-start-1 col-span-full">
      <article v-show="currentSlide == index" class="relative lg:pt-52 lg:mx-24">
        <div class="overflow-hidden lg:absolute left-0 top-0 lg:w-[50%] aspect-[7/5] rounded-md lg:drop-shadow-offcenter shadow-2xl">
          <img :src="`http://localhost:1337${slide.attributes.image.data.attributes.formats.medium.url}`">
        </div>
        <div class="relative z-10 1xl:ml-96 lg:ml-72 p-8 bg-explo-darkpurple shadow-lg rounded-md rounded-br-[4rem] border-b-12  border-explo-lightblue">
          <div class="sm:min-h-[10rem]">
            <h1 class="text-left text-2xl font-bold text-explo-darkgreen mb-2 max-h-28 overflow-y-hidden">
              {{ truncate(slide.attributes.title, 50, '...') }}
            </h1>
            <p
              class="text-left 2xl:text-xl text-lg leading-8 font-light text-explo-whiteblue mb-6">
              {{ truncate(slide.attributes.description, 200, '...') }}
            </p>
          </div>
          <button class="bg-explo-darkcard text-explo-whiteblue text-lg rounded-md border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-2 shadow-lg">Научете Повече <fa icon="fa-solid fa-chevron-right " /></button>
        </div>
      </article>
    </SlideItem>
    <div class="col-span-full flex flex-row gap-5 lg:my-0 my-8 lg:absolute mx-auto 1xl:top-[32rem] top-[29rem] 1xl:left-64 left-48">
      <button @click="previousSlide()">
        <fa icon="fa-solid fa-arrow-left-long" class="lg:mr-5 mr-14 fa-3x text-explo-lightgreen cursor-pointer hover:-translate-x-1 transition-transform duration-200" />
      </button>
      <button @click="nextSlide()">
        <fa icon="fa-solid fa-arrow-right-long" class="fa-3x text-explo-lightgreen cursor-pointer hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
    <ul class="col-span-full lg:w-80 w-64 flex flex-row gap-5 justify-self-center lg:mt-14">
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 0, 'bg-explo-lightblue' : currentSlide != 0}" @click="currentSlide = 0" />
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 1, 'bg-explo-lightblue' : currentSlide != 1}" @click="currentSlide = 1" />
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 2, 'bg-explo-lightblue' : currentSlide != 2}" @click="currentSlide = 2" />
    </ul>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'ArticleCarousel',
  props: {
    carouselSlides: {
      type: Array,
      default: () => []
    }
  },
  setup () {
    const currentSlide = ref(0)

    function truncate (text, length, suffix) {
      if (text.length > length) {
        const trimmedString = text.substring(0, length)
        return trimmedString.substring(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(' '))) + suffix
      } else {
        return text
      }
    }
    function nextSlide () {
      currentSlide.value = currentSlide.value === Object.keys(this.carouselSlides).length - 1 ? 0 : currentSlide.value + 1
    }
    function previousSlide () {
      currentSlide.value = currentSlide.value === 0 ? Object.keys(this.carouselSlides).length - 1 : currentSlide.value - 1
    }

    return {
      currentSlide,
      truncate,
      nextSlide,
      previousSlide
    }
  }
}
</script>
