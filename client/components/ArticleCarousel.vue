<template>
  <div class="grid">
    <SlideItem v-for="(slide, index) in visibleSlides" :key="index" :transition-duration="0.3" class="row-start-1 col-start-1 col-span-full">
      <article v-show="currentSlide == index" class="relative lg:pt-52 lg:mx-32">
        <div class="overflow-hidden lg:absolute relative left-0 top-0 1xl:w-1/2 lg:w-[53%] lg:aspect-[7/5] aspect-[7/5] lg:rounded-md rounded-t-2xl lg:drop-shadow-offcenter shadow-2xl">
          <nuxt-img class="object-cover h-full w-full" :src="runtimeConfig.public.strapiUrl + slide.attributes.banner.data.attributes.formats.medium.url" />
          <button class="lg:hidden block absolute left-2 bottom-2 px-2 bg-explo-lightblue bg-opacity-20 h-fit w-fit rounded-xl" @click="previousSlide()">
            <Icon name="pepicons-pop:angle-left" class="text-white text-5xl" />
          </button>
          <button class="lg:hidden block absolute right-2 bottom-2 px-2 bg-explo-lightblue bg-opacity-20 h-fit w-fit rounded-xl" @click="nextSlide()">
            <Icon name="pepicons-pop:angle-right" class="text-white text-5xl" />
          </button>
        </div>
        <div class="relative z-10 lg:w-2/3 lg:ml-auto p-8 bg-explo-darkpurple shadow-lg lg:rounded-md rounded-b-2xl lg:rounded-br-[4rem] border-b-12  border-explo-lightblue">
          <div class="sm:min-h-[10rem] mb-4">
            <h1 class="text-left 1xl:text-2xl lg:text-xl text-2xl font-medium text-explo-darkgreen mb-2 max-h-28 overflow-y-hidden">
              {{ truncate(slide.attributes.title, 50, '...') }}
            </h1>
            <p
              class="text-left 2xl:text-lg 1xl:text-lg lg:text-base text-lg text-explo-whiteblue"
            >
              {{ truncate(slide.attributes.preview, 200, '...') }}
            </p>
          </div>
          <NuxtLink :to="localPath(`/${slide.attributes.slug}`)">
            <button class="bg-explo-darkcard text-explo-whiteblue text-base rounded-md border-b-4 border-explo-darkercard hover:border-explo-darkgreen p-2 shadow-lg">
              Научете Повече <Icon name="fa6-solid:chevron-right" />
            </button>
          </NuxtLink>
        </div>
      </article>
    </SlideItem>
    <div class="hidden absolute lg:flex flex-row gap-5 mr-auto ml-8 2xl:top-[32rem] top-[30rem] 2xl:left-64 left-48 text-5xl">
      <button @click="previousSlide()">
        <Icon name="fa6-solid:arrow-left-long" class="lg:mr-5 mr-8 text-explo-darkgreen cursor-pointer hover:-translate-x-1 transition-transform duration-200" />
      </button>
      <button @click="nextSlide()">
        <Icon name="fa6-solid:arrow-right-long" class="text-explo-darkgreen cursor-pointer hover:translate-x-1 transition-transform duration-200" />
      </button>
    </div>
    <ul class="col-span-full lg:w-80 w-64 flex flex-row gap-5 justify-self-center mt-14">
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 0, 'bg-explo-lightblue' : currentSlide != 0}" @click="currentSlide = 0" />
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 1, 'bg-explo-lightblue' : currentSlide != 1}" @click="currentSlide = 1" />
      <li class="w-1/3 h-2 cursor-pointer" :class="{ 'bg-explo-whiteblue' : currentSlide == 2, 'bg-explo-lightblue' : currentSlide != 2}" @click="currentSlide = 2" />
    </ul>
  </div>
</template>

<script setup>
const localPath = useLocalePath()
const runtimeConfig = useRuntimeConfig()

const props = defineProps({
  carouselSlides: {
    type: Array,
    default: () => []
  }
})

const currentSlide = ref(0)

const visibleSlides = computed(() => props.carouselSlides.filter(slide => slide !== null && typeof slide === 'object'))

function nextSlide () {
  currentSlide.value = currentSlide.value === 2 ? 0 : currentSlide.value + 1
}
function previousSlide () {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}
</script>
