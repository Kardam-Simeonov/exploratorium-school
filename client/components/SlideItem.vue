<template>
  <div>
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'SlideItem',
  props: {
    transitionDuration: {
      type: Number,
      default: 1
    }
  },
  setup (props) {
    const transitionStyle = computed(() => {
      return 'opacity ' + props.transitionDuration + 's ease-in-out'
    })
    return {
      transitionStyle
    }
  }
}
</script>

<style>

.slide-enter-active,
.slide-leave-active {
    transition: v-bind(transitionStyle);
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
}

</style>
