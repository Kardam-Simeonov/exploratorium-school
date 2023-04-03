<template>
  <div class="grid">
    <SlideItem v-for="(slide, index) in props.carouselSlides" :key="index" :transition-duration="0.3" class="row-start-1 col-start-1 col-span-full">
      <article v-show="currentSlide == index" class="relative lg:pt-52 lg:mx-32">
        <div class="overflow-hidden lg:absolute left-0 top-0 1xl:w-1/2 lg:w-[53%] lg:aspect-[7/5] aspect-[7/5] lg:rounded-md rounded-t-2xl lg:drop-shadow-offcenter shadow-2xl">
          <img :src="runtimeConfig.public.strapiUrl + slide.attributes.image.data.attributes.url">
        </div>
        <div class="relative z-10 lg:w-2/3 lg:ml-auto p-8 bg-explo-darkpurple shadow-lg lg:rounded-md rounded-b-2xl lg:rounded-br-[4rem] border-b-12  border-explo-lightblue">
          <div class="sm:min-h-[10rem]">
            <h1 class="text-left 1xl:text-2xl lg:text-xl text-2xl font-bold text-explo-darkgreen mb-2 max-h-28 overflow-y-hidden">
              {{ truncate(slide.attributes.title, 50, '...') }}
            </h1>
            <p
              class="text-left 2xl:text-xl 1xl:text-lg lg:text-base text-lg 2xl:leading-8 leading-7 font-light text-explo-whiteblue mb-6"
            >
              {{ truncate(slide.attributes.description, 200, '...') }}
            </p>
          </div>
          <button class="bg-explo-darkcard text-explo-whiteblue text-base rounded-md border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-2 shadow-lg">
            Научете Повече <Icon name="fa6-solid:chevron-right" />
          </button>
        </div>
      </article>
    </SlideItem>
    <div class="col-span-full flex flex-row gap-5 lg:my-0 my-4 mr-auto ml-8 lg:absolute 2xl:top-[32rem] top-[30rem] 2xl:left-64 left-48 lg:text-5xl text-4xl">
      <button @click="previousSlide()">
        <Icon name="fa6-solid:arrow-left-long" class="lg:mr-5 mr-8 text-explo-lightgreen cursor-pointer hover:-translate-x-1 transition-transform duration-200" />
      </button>
      <button @click="nextSlide()">
        <Icon name="fa6-solid:arrow-right-long" class="text-explo-lightgreen cursor-pointer hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
    <ul class="col-span-full lg:w-80 w-64 lg:flex hidden flex-row gap-5 justify-self-center lg:mt-14">
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 0, 'bg-explo-lightblue' : currentSlide != 0}" @click="currentSlide = 0" />
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 1, 'bg-explo-lightblue' : currentSlide != 1}" @click="currentSlide = 1" />
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 2, 'bg-explo-lightblue' : currentSlide != 2}" @click="currentSlide = 2" />
    </ul>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

const props = defineProps({
  carouselSlides: {
    type: Array,
    default: () => []
  }
})

const currentSlide = ref(0)

function nextSlide () {
  currentSlide.value = currentSlide.value === 2 ? 0 : currentSlide.value + 1
}
function previousSlide () {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}
</script>
