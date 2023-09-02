<template>
    <div class="mt-96">
        {{ locale }}
    </div>
</template>

<script setup>
const { locale } = useI18n()
</script>