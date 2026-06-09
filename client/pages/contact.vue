<template>
   <div class="relative pt-56">
    <img
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/groupcloseup4.jpeg" />
    <header class="relative px-4">
      <img class="xl:block hidden 2xl:w-[22rem] w-[15rem] absolute top-[15rem] -right-[4rem] opacity-[0.03] -rotate-[150deg]"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img class="xl:block hidden 2xl:w-[40rem] w-[38rem] absolute -top-[32rem] -right-[8rem] opacity-[0.03] -rotate-[150deg]"
        src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img class="xl:block hidden 2xl:w-[23rem] w-[20rem] absolute -left-[12rem] top-[15rem] opacity-[0.03]"
        src="@/assets/artwork/svg/blobL-layer2.svg">
      <img class="xl:block hidden 2xl:w-[12rem] w-[8rem] absolute left-[0rem] -top-[4rem] opacity-[0.03]"
        src="@/assets/artwork/svg/blob-small1.svg">
      <img class="xl:block hidden 2xl:w-[10rem] w-[8rem] absolute left-[15rem] top-[14rem] opacity-[0.03]"
        src="@/assets/artwork/svg/blob-small2.svg">
      <div class="mx-auto w-fit mb-6 xl:p-32 rounded-3xl relative overflow-hidden">
        <h1
          class="relative z-10 w-fit py-14 sm:px-24 px-8 2xl:text-5xl sm:text-4xl text-3xl text-center text-explo-darkgreen font-medium rounded-3xl bg-[#7978ba] bg-opacity-80 animate-fade-down drop-shadow-text">
          Свържете се с нас
        </h1>
        <img class="xl:block hidden absolute inset-0 z-0 w-full h-full object-cover rounded-[24px] opacity-90 border-[12px] border-[rgba(255,255,255,0.18)]" src="/stock/groupcloseup4.jpeg" />
      </div>
    </header>
    <div class="mx-auto sm:my-24 my-20 w-56 h-2 bg-explo-lightblue rounded-2xl" />

    <!-- Content -->
    <section class="relative px-4 lg:px-8 mb-16">
      <div class="max-w-7xl mx-auto">

        <div class="max-w-2xl mb-[48px]">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-3">Форма за контакт</div>
          <h2 class="text-white text-[clamp(26px,3.5vw,36px)] leading-[1.2] mb-[12px] font-bold">Запазете час за среща</h2>
          <p class="text-explo-whiteblue text-[clamp(15px,1.3vw,17px)] leading-[1.6] opacity-75">
            Попълнете формуляра и ще се свържем с вас за удобно време за лична среща и посещение на базата.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[28px] items-start">

          <!-- Form card -->
          <div class="bg-[rgba(255,255,255,0.11)] backdrop-blur-sm border border-[rgba(255,255,255,0.22)] mb-6 rounded-[28px] p-[36px_28px] lg:p-[48px_40px] shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
            <div v-if="submitted" class="flex flex-col items-center text-center py-8 gap-4">
              <div class="w-[108px] h-[108px] rounded-full bg-[rgba(202,218,43,0.15)] flex items-center justify-center">
                <svg class="w-[60px] h-[60px] text-[#CADA2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="text-white text-[22px] font-bold">Изпратено успешно!</h3>
              <p class="text-explo-whiteblue opacity-75 text-[16px]">Ще се свържем с вас скоро за уговаряне на среща.</p>
            </div>
            <form v-else @submit.prevent="submitForm" class="flex flex-col gap-[18px]">
              <div>
                <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Вашето име <span class="text-[#CADA2B]">*</span></label>
                <input v-model="form.name" type="text" required placeholder="Иван Иванов"
                  class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150" />
              </div>
              <div>
                <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Имейл</label>
                <input v-model="form.email" type="email" placeholder="email@example.com"
                  class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150" />
              </div>
              <div>
                <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Телефон <span class="text-[#CADA2B]">*</span></label>
                <input v-model="form.phone" type="tel" required placeholder="0888 000 000"
                  class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150" />
              </div>
              <div>
                <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Възраст на детето <span class="text-[#CADA2B]">*</span></label>
                <input v-model="form.childAge" type="text" required placeholder="7 години"
                  class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150" />
              </div>
              <div>
                <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Съобщение (по желание)</label>
                <textarea v-model="form.message" rows="4" placeholder="Какво ви накара да се обърнете към нас?"
                  class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150 resize-none" />
              </div>
              <p v-if="formError" class="text-red-400 text-[14px]">{{ formError }}</p>
              <button type="submit" :disabled="submitting"
                class="w-full py-[14px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0">
                {{ submitting ? 'Изпращане...' : 'Изпрати запитване' }}
              </button>
            </form>
          </div>

          <!-- Contact cards -->
          <div class="flex flex-col gap-[14px]">
            <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-1">Или директно</div>
            <h3 class="text-white font-extrabold text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[1.15] mb-4">Свържете се с нас</h3>
            <div class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)]">
              <div class="text-[34px]">🕐</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-explo-whiteblue opacity-60 uppercase tracking-[1px] mb-[3px]">Работно време</div>
                <div class="font-bold text-white text-[18px]">Понеделник – Петък</div>
                <div class="text-[#CADA2B] font-medium text-[16px]">8:30 – 17:30</div>
              </div>
            </div>
            <a href="tel:+359879180700" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">📞</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-explo-whiteblue opacity-60 uppercase tracking-[1px] mb-[3px]">Телефон</div>
                <div class="font-bold text-[#CADA2B] text-[18px]">0879 180 700</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
            <a href="mailto:exploratorium.school@abv.bg" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">📧</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-explo-whiteblue opacity-60 uppercase tracking-[1px] mb-[3px]">Имейл</div>
                <div class="font-bold text-[#CADA2B] text-[15px] sm:text-[17px]">exploratorium.school<br class="sm:hidden">@abv.bg</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
            <a href="https://www.facebook.com/ExploratoriumBG" target="_blank" rel="noopener" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">👍</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-explo-whiteblue opacity-60 uppercase tracking-[1px] mb-[3px]">Facebook</div>
                <div class="font-bold text-[#CADA2B] text-[18px]">ExploratoriumBG</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
            <a href="https://maps.app.goo.gl/LwYPiCAErdjCQ9RA7" target="_blank" rel="noopener" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">📍</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-explo-whiteblue opacity-60 uppercase tracking-[1px] mb-[3px]">Адрес</div>
                <div class="font-bold text-[#CADA2B] text-[18px] leading-[1.4]">кв. Драгалевци, ул. Мавровец 3</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
          </div>

        </div>
      </div>
    </section>

    <!-- Map -->
    <section class="px-4 lg:px-8 mb-32">
      <div class="max-w-7xl mx-auto">
        <iframe
          class="w-full h-[420px] rounded-[20px] border-[6px] border-[rgba(255,255,255,0.12)] shadow-[0_16px_48px_rgba(0,0,0,0.3)]"
          allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5230.205417478834!2d23.30200026206169!3d42.63266613532392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa83c18f1997c1%3A0xdfabcd8416421bfb!2sExploratorium%20School!5e0!3m2!1sen!2sbg!4v1779725354508!5m2!1sen!2sbg" />
      </div>
    </section>
  </div>
</template>
<script setup>
useHead({
  title: 'Контакти | Exploratorium School',
  meta: [
    { name: 'description', content: 'Свържете се с Експлораториум Скул. Намерете ни в Драгалевци, пишете ни на имейл или ни открийте в социалните мрежи.' },
    { property: 'og:title', content: 'Контакти | Експлораториум Скул' },
    { property: 'og:description', content: 'Свържете се с Експлораториум Скул. Намерете ни в Драгалевци, пишете ни на имейл или ни открийте в социалните мрежи.' },
    { property: 'og:image', content: 'https://exploratorium.bg/stock/hero.jpg' },
    { property: 'og:url', content: 'https://exploratorium.bg/contact' },
  ],
  link: [{ rel: 'canonical', href: 'https://exploratorium.bg/contact' }],
})

const form = reactive({ name: '', email: '', phone: '', childAge: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)
const formError = ref(null)

async function submitForm() {
  submitting.value = true
  formError.value = null
  try {
    const res = await fetch('https://formspree.io/f/mwvjkobw', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(form),
    })
    if (res.ok) {
      submitted.value = true
    } else {
      formError.value = 'Грешка при изпращане. Моля, опитайте отново.'
    }
  } catch {
    formError.value = 'Грешка при изпращане. Моля, проверете връзката си.'
  } finally {
    submitting.value = false
  }
}
</script>
  