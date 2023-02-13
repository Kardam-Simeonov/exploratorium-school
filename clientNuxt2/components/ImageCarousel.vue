<template>
  <div class="carousel">
    <SlideItem v-for="(slide, index) in carouselSlides" :key="index">
      <img v-show="currentSlide === index + 1" :src="require(`@/assets/stock/${slide}`)" :class="{ 'rounded-bl-[3rem]' : isRoundBottomLeft, 'rounded-br-[3rem]' : isRoundBottomRight}" class="absolute rounded-md">
    </SlideItem>
  </div>
</template>

<script>
import SlideItem from '~/components/SlideItem.vue'
export default {
  components: {
    SlideItem
  },
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
  data () {
    return {
      currentSlide: 1
    }
  },
  mounted () {
    setTimeout(() => {
      this.nextSlide()
      this.autoplay()
    }, this.initialDelay)
  },
  methods: {
    nextSlide () {
      this.currentSlide = this.currentSlide === this.carouselSlides.length ? 1 : this.currentSlide + 1
    },
    autoplay () {
      setInterval(() => {
        this.nextSlide()
      }, this.duration)
    }
  }
}
</script>
