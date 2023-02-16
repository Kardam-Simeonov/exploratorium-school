<template>
  <div>
    <SlideItem v-for="(slide, index) in carouselSlides" :key="index">
      <img
        v-show="currentSlide === index + 1"
        :src="useAsset(slide)"
        :class="{ 'rounded-bl-[3rem]': isRoundBottomLeft, 'rounded-br-[3rem]': isRoundBottomRight }"
        class="absolute rounded-md"
      >
    </SlideItem>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ImageCarousel',
  props: {
    carouselSlides: {
      type: Array,
      default: () => []
    },
    duration: {
      type: Number,
      default: 8000
    },
    initialDelay: {
      type: Number,
      default: 0
    },
    isRoundBottomLeft: {
      type: Boolean,
      default: false
    },
    isRoundBottomRight: {
      type: Boolean,
      default: false
    }
  },
  setup (props) {
    const currentSlide = ref(1)

    function nextSlide () {
      currentSlide.value = currentSlide.value === props.carouselSlides.length ? 1 : currentSlide.value + 1
    }
    function autoplay () {
      setInterval(() => {
        nextSlide()
      }, props.duration)
    }
    function useAsset (path) {
      const assets = import.meta.glob('~/assets/**/*', {
        eager: true,
        import: 'default'
      })
      return assets['/assets/stock/' + path]
    }

    return {
      currentSlide,
      nextSlide,
      autoplay,
      useAsset
    }
  },
  mounted () {
    setTimeout(() => {
      this.nextSlide()
      this.autoplay()
    }, this.initialDelay)
  }
}
</script>
