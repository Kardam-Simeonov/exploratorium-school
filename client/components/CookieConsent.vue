<template>
  <Transition name="cookie-banner">
    <div v-if="show"
      class="fixed bottom-0 left-0 right-0 z-[999] px-4 py-4 sm:py-5 bg-[rgba(30,28,72,0.97)] backdrop-blur-md border-t border-[rgba(255,255,255,0.1)] shadow-[0_-8px_32px_rgba(0,0,0,0.4)]">
      <div class="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
        <div class="flex-1 min-w-0">
          <p class="text-white text-[14px] leading-[1.6]">
            Използваме <span class="text-[#CADA2B] font-semibold">Meta Pixel</span> за анализ на посещенията и рекламно таргетиране.
            С натискането на „Приемам" се съгласявате с това съгласно GDPR чл. 6(1)(а).
            <NuxtLink to="/privacy-policy" class="text-[#CADA2B] underline underline-offset-2 hover:text-white transition-colors duration-150">Политика за поверителност</NuxtLink>
          </p>
        </div>
        <div class="flex items-center gap-3 shrink-0">
          <button @click="decline"
            class="px-5 py-[10px] rounded-full text-[14px] font-semibold text-[rgba(255,255,255,0.7)] border border-[rgba(255,255,255,0.2)] hover:border-[rgba(255,255,255,0.4)] hover:text-white transition-all duration-150">
            Отказвам
          </button>
          <button @click="accept"
            class="px-5 py-[10px] rounded-full text-[14px] font-bold bg-[#CADA2B] text-[#3a3f70] hover:bg-[#b8c24e] hover:translate-y-[-1px] shadow-[0_4px_12px_rgba(202,218,43,0.35)] transition-all duration-150">
            Приемам
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
const CONSENT_KEY = 'cookie_consent'
const { showBanner: show } = useCookieConsent()

onMounted(() => {
  const consent = localStorage.getItem(CONSENT_KEY)
  if (consent === 'accepted') {
    loadPixel()
  } else if (!consent) {
    show.value = true
  }
})

function accept() {
  localStorage.setItem(CONSENT_KEY, 'accepted')
  show.value = false
  loadPixel()
}

function decline() {
  localStorage.setItem(CONSENT_KEY, 'declined')
  show.value = false
}

function loadPixel() {
  if (window.fbq) return
  const s = document.createElement('script')
  s.innerHTML = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1339735351627559');fbq('track','PageView');`
  document.head.appendChild(s)
}
</script>

<style scoped>
.cookie-banner-enter-active,
.cookie-banner-leave-active {
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.cookie-banner-enter-from,
.cookie-banner-leave-to {
  transform: translateY(100%);
  opacity: 0;
}
</style>
