<template>
  <div>
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script setup>
const props = defineProps({
  transitionDuration: {
    type: Number,
    default: 1
  }
})

const transitionStyle = computed(() => {
  return 'opacity ' + props.transitionDuration + 's ease-in-out'
})
</script>

<style>

.slide-enter-active,
.slide-leave-active {
    transition: v-bind(transitionStyle);
}

.slide-enter-from,
.slide-leave-to {
    opacity: 0;
}

</style>
