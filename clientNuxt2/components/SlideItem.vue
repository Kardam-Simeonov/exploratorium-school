<template>
  <div class="slide">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    transitionDuration: {
      type: Number,
      default: 1
    }
  },
  computed: {
    transitionStyle () {
      return 'opacity ' + this.transitionDuration + 's ease-in-out'
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
