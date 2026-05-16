<template>
  <div class="relative 1xl:pt-[21rem] pt-64">
    <img
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/natureCloseup1.jpeg" />
    <header class="relative lg:pl-12 px-4">
      <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]" src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img 
        class="xl:block hidden aspect-[5/4] w-[48%] ml-auto absolute left-0 -right-1 bottom-0 object-cover object-center mask-header" src="/stock/natureCloseup1.jpeg" />
      <img class="xl:block hidden 2xl:w-[28rem] w-[23rem] absolute -left-[12rem] 2xl:top-[45%] top-[60%] opacity-[0.03]" src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="xl:min-h-[28rem] min-h-[20rem] max-w-7xl mx-auto animate-fade-down">
        <div class="max-w-[35rem] relative">
          <h1 class="text-[clamp(30px,4.5vw,52px)] leading-[1.1] font-bold text-[#CADA2B] mb-[22px]">
            <span class="block text-[clamp(16px,1.8vw,20px)] text-white font-medium uppercase tracking-[2px] mb-[12px] opacity-85">Прием 2026/2027</span>
            Търсим следващите 10 малки изследователи
          </h1>
          <p class="text-[clamp(16px,1.5vw,19px)] opacity-95 mb-[32px] text-white">
            Приемът за новата учебна година е отворен за деца от 4 до 14 години.
            Търсим семейства, които вярват, че детето им е повече от „набор от оценки".
          </p>
          <div class="flex flex-wrap gap-[14px]">
            <a href="#form" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Запази час за среща</a>
            <a href="#values" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">За кого е училището</a>
          </div>
        </div>
      </div>
    </header>
    <div class="mx-auto my-24 w-56 h-2 bg-explo-lightblue rounded-2xl" />
      <!-- Content -->
 
     <!-- VALUES / FOR WHOM -->
    <section id="values" class="relative px-4 lg:px-12 mb-32">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-16">
          <div class="text-[#CADA2B] font-bold text-[clamp(30px,4.5vw,45px)] mb-[12px]">За кого е училището?</div>
          <p class="text-white text-[clamp(16px,1.5vw,19px)] leading-[1.6] opacity-90">
            Експлораториум не е училище за всеки – и това е добре. Ние търсим семейства, които споделят нашите ценности.
          </p>
        </div>
        <h2 class="text-[clamp(20px,4.5vw,30px)] leading-[1.1] font-bold text-white mb-[22px] text-left">Ако искате детето ви...</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[22px]">
          <div class="bg-white p-[32px_28px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[10px]">01</div>
            <h3 class="text-[clamp(18px,1.6vw,20px)] text-[#6368AC] leading-[1.3] mb-[10px] font-bold">Да задава въпроси</h3>
            <p class="text-[#555569] text-[clamp(14px,1.2vw,15px)] leading-[1.5]">Вместо да чака готови отговори. Любопитството е двигателят – ние го пазим, не го изключваме в 8:00 сутринта.</p>
          </div>
          <div class="bg-white p-[32px_28px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[10px]">02</div>
            <h3 class="text-[clamp(18px,1.6vw,20px)] text-[#6368AC] leading-[1.3] mb-[10px] font-bold">Да мисли критично</h3>
            <p class="text-[#555569] text-[clamp(14px,1.2vw,15px)] leading-[1.5]">Да проверява информацията, да не приема нещата за дадени, да отличава факт от мнение. Това е умение за цял живот.</p>
          </div>
          <div class="bg-white p-[32px_28px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[10px]">03</div>
            <h3 class="text-[clamp(18px,1.6vw,20px)] text-[#6368AC] leading-[1.3] mb-[10px] font-bold">Да расте в общност</h3>
            <p class="text-[#555569] text-[clamp(14px,1.2vw,15px)] leading-[1.5]">Където е прието такова, каквото е. Без сравнения, без етикети, без „трябва да си като другите".</p>
          </div>
        </div>
        <p class="max-w-2xl mt-12 text-white text-[clamp(16px,1.5vw,19px)] leading-[1.6] opacity-90">
          Заповядайте на лична среща в нашата база, за да усетите атмосферата на Експлораториум.
          <strong class="text-white opacity-100">Ние не правим кастинги за деца</strong> – търсим съмишленици сред родителите.
        </p>
      </div>
    </section>
 
    <!-- CTA / FORM -->
    <section id="form" class="relative px-4 lg:px-12 py-32 mt-12 bg-explo-darkblue">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-[40px] items-start">
          <div class="bg-white p-[40px_28px] lg:p-[48px_40px] rounded-[28px] shadow-[0_12px_40px_rgba(99,104,172,0.15)]">
            <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Запазете час за среща</div>
            <h2 class="text-[#6368AC] text-[clamp(26px,3.5vw,36px)] leading-[1.2] mb-[16px] font-bold">Попълнете формата за регистрация</h2>
            <p class="text-[#555569] mb-[32px] text-[clamp(15px,1.3vw,17px)] leading-[1.6]">
              Попълнете запитване към нас и ние ще се свържем, за да уговорим удобно време за лична среща и посещение на базата.
            </p>
            <a href="/admissions/register" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">
              Изпратете запитване
            </a>
          </div>
 
          <div>
            <div class="text-[#CADA2B]  font-bold text-[clamp(14px,1.3vw,16px)] uppercase tracking-[2px] mb-[12px]">Или директно</div>
            <h3 class="text-white text-[clamp(26px,3.5vw,36px)] leading-[1.2] mb-[24px] font-bold">Свържете се с нас</h3>
            <div class="flex flex-col gap-[14px]">
              <a href="tel:+359879180700" class="bg-white p-[18px_22px] rounded-[14px] flex items-center gap-[16px] hover:translate-x-[4px] hover:shadow-[0_8px_20px_rgba(99,104,172,0.12)] transition-all duration-200">
                <div class="text-[26px]">📞</div>
                <div class="flex-1 min-w-0">
                  <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[2px]">Телефон</div>
                  <div class="font-semibold text-[#6368AC] text-[15px]">0879 180 700</div>
                  <div class="text-[12px] text-[#555569]">Роси Панайотова</div>
                </div>
              </a>
              <a href="mailto:exploratorium.school@abv.bg" class="bg-white p-[18px_22px] rounded-[14px] flex items-center gap-[16px] hover:translate-x-[4px] hover:shadow-[0_8px_20px_rgba(99,104,172,0.12)] transition-all duration-200">
                <div class="text-[26px]">📧</div>
                <div class="flex-1 min-w-0">
                  <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[2px]">Имейл</div>
                  <div class="font-semibold text-[#6368AC] text-[15px] break-words">exploratorium.school@abv.bg</div>
                </div>
              </a>
              <div class="bg-white p-[18px_22px] rounded-[14px] flex items-center gap-[16px]">
                <div class="text-[26px]">📍</div>
                <div class="flex-1 min-w-0">
                  <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[2px]">Адрес</div>
                  <div class="font-semibold text-[#6368AC] text-[15px] leading-[1.4]">кв. Драгалевци, ул. Мавровец 3</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
</script>
  