<template>
  <div class="font-inter text-[#2A2A40] bg-[#EEF4F9]">

    <!-- HERO -->
    <section class="bg-gradient-to-br from-[#6368AC] to-[#9A99CC] text-white pt-[250px] pb-[80px] relative overflow-hidden lg:pt-[270px] lg:pb-[120px]">
      <div class="absolute bottom-[-60px] left-[-60px] right-[-60px] h-[120px] bg-[#EEF4F9] rounded-[50%] z-[1]" />
      <div class="container mx-auto px-6 relative z-[2] max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[60px] items-center lg:grid-cols-[1.1fr_1fr]">
          <div class="animate-fade-down">
            <span class="block text-[clamp(13px,1.2vw,15px)] text-white font-semibold uppercase tracking-[3px] mb-[16px] opacity-75">Експлораториум · Лято 2026</span>
            <h1 class="text-[clamp(36px,5vw,64px)] leading-[1.05] font-bold text-white mb-[10px]">
              Летни<br>активности
              <span class="block text-[#CADA2B]">2026</span>
            </h1>
            <p class="text-[clamp(17px,1.6vw,21px)] opacity-90 mb-[12px] font-medium italic">
              Лятото като приключение, в което откриваме себе си.
            </p>
            <p class="text-[clamp(15px,1.4vw,18px)] opacity-80 mb-[36px] max-w-[480px] leading-[1.6]">
              Три напълно различни концептуални предложения — едно за всяко дете, едно за всяко търсене.
            </p>
            <div class="flex flex-wrap gap-[14px]">
              <a href="#programs" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none">Разгледай програмите</a>
              <a href="#contact" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer">Запиши се</a>
            </div>
          </div>
          <!-- Staggered image mosaic — signals multiple programs -->
          <div class="hidden lg:grid grid-cols-2 gap-[14px] items-start">
            <div class="space-y-[14px]">
              <img src="/stock/kayak.jpg" alt="" class="w-full aspect-[3/4] object-cover rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.25)] border-[4px] border-[rgba(255,255,255,0.18)]">
              <img src="/stock/drawing.jpg" alt="" class="w-full aspect-[4/3] object-cover rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.25)] border-[4px] border-[rgba(255,255,255,0.18)]">
            </div>
            <div class="mt-[40px]">
              <img src="/stock/climbingthetree.jpg" alt="" class="w-full aspect-[3/4] object-cover rounded-[18px] shadow-[0_16px_40px_rgba(0,0,0,0.25)] border-[4px] border-[rgba(255,255,255,0.18)]">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="bg-[#EEF4F9] py-[72px] lg:py-[96px] relative z-[3]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[56px] items-start lg:grid-cols-[1fr_1fr]">
          <div>
            <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Нашият подход</div>
            <h2 class="text-[clamp(28px,4vw,44px)] text-[#6368AC] leading-[1.15] font-bold mb-[28px]">
              Лятото не е пауза от ученето. Това е <em class="not-italic text-[#CADA2B]">най-доброто му</em> време.
            </h2>
            <div class="w-14 h-1 bg-[#CADA2B] rounded-full mb-[28px]" />
            <p class="text-[#555569] text-[clamp(16px,1.4vw,18px)] leading-[1.7]">
              В Експлораториум вярваме, че лятото не е просто пауза от ученето, а най-доброто
              време за него — когато то се случва без бързане, сред природата и водено изцяло от
              любопитството. Превръщаме топлите месеци в пространство, където децата почиват
              активно, развиват социалните си умения и изследват света през собствения си опит.
            </p>
          </div>
          <div class="lg:pt-[56px]">
            <p class="text-[#555569] text-[clamp(16px,1.4vw,18px)] leading-[1.7] mb-[32px]">
              За лятото на 2026 година нашият екип подготви три напълно различни концептуални
              предложения, създадени да отговорят на специфичните търсения, интереси и възраст
              на децата. Всяко от тях е проектирано в синхрон с нашите ценности — изграждане на
              общност, критично мислене, автономия и дълбока връзка с природата.
            </p>
            <div class="grid grid-cols-3 gap-[12px]">
              <div class="bg-white rounded-[16px] p-[18px_14px] text-center shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
                <div class="text-[28px] mb-[6px]">🌿</div>
                <div class="text-[#6368AC] font-bold text-[13px] leading-[1.3]">Връзка с природата</div>
              </div>
              <div class="bg-white rounded-[16px] p-[18px_14px] text-center shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
                <div class="text-[28px] mb-[6px]">🔍</div>
                <div class="text-[#6368AC] font-bold text-[13px] leading-[1.3]">Критично мислене</div>
              </div>
              <div class="bg-white rounded-[16px] p-[18px_14px] text-center shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
                <div class="text-[28px] mb-[6px]">🤝</div>
                <div class="text-[#6368AC] font-bold text-[13px] leading-[1.3]">Изграждане на общност</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAMS -->
    <section id="programs" class="bg-white py-[72px] lg:py-[96px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[60px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Три програми</div>
          <h2 class="text-[clamp(28px,4vw,44px)] text-[#6368AC] leading-[1.2] font-bold mb-[16px]">Изберете посоката на вашето лятно приключение</h2>
          <p class="max-w-[640px] mx-auto text-[#555569] text-[17px] leading-[1.6]">
            Разгледайте детайлите, датите и условията за всяка програма и намерете точното място за вашето дете.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-[28px] lg:grid-cols-3">

          <NuxtLink :to="localePath('/summer-activities/summer-school')" class="flex flex-col bg-[#EEF4F9] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(99,104,172,0.12)] hover:shadow-[0_16px_48px_rgba(99,104,172,0.22)] hover:-translate-y-1 transition-all duration-200">
            <div class="relative h-[220px]">
              <img src="/stock/kayak.jpg" alt="Лято в Експлораториум" class="w-full h-full object-cover" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(87,93,170,0.6)] to-transparent" />
              <div class="absolute bottom-4 left-5">
                <span class="bg-[#CADA2B] text-[#575DAA] text-xs font-bold uppercase tracking-[1.5px] py-1 px-3 rounded-full">5–10 юли &amp; 14–18 юли</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="w-10 h-1 bg-[#CADA2B] mb-4 rounded-full" />
              <h3 class="text-[clamp(20px,2vw,24px)] font-bold text-[#3d4270] mb-3 leading-[1.2]">Лято в Експлораториум</h3>
              <p class="text-[#555569] text-[15px] leading-[1.65] mb-6 flex-1">Динамично лято за деца от 5 до 10 години. Наука, природа, готвене и творчество — всичко на едно място, в полите на Витоша.</p>
              <span class="inline-block text-center py-[12px] px-[24px] rounded-full font-semibold text-[14px] bg-[#575DAA] text-white hover:bg-[#6368AC] transition-colors duration-150">Научи повече</span>
            </div>
          </NuxtLink>

          <NuxtLink :to="localePath('/summer-activities/scout-school')" class="flex flex-col bg-[#EEF4F9] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(99,104,172,0.12)] hover:shadow-[0_16px_48px_rgba(99,104,172,0.22)] hover:-translate-y-1 transition-all duration-200">
            <div class="relative h-[220px]">
              <img src="/stock/climbingthetree.jpg" alt="Скаутско училище" class="w-full h-full object-cover object-center" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(87,93,170,0.6)] to-transparent" />
              <div class="absolute bottom-4 left-5">
                <span class="bg-[#CADA2B] text-[#575DAA] text-xs font-bold uppercase tracking-[1.5px] py-1 px-3 rounded-full">6–10 юли &amp; 13–17 юли</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="w-10 h-1 bg-[#CADA2B] mb-4 rounded-full" />
              <h3 class="text-[clamp(20px,2vw,24px)] font-bold text-[#3d4270] mb-3 leading-[1.2]">Скаутско училище</h3>
              <p class="text-[#555569] text-[15px] leading-[1.65] mb-6 flex-1">За деца от 8 до 11 години. Оцеляване сред природата, работа в екип и незабравими лагерни вечери под небето на Витоша.</p>
              <span class="inline-block text-center py-[12px] px-[24px] rounded-full font-semibold text-[14px] bg-[#575DAA] text-white hover:bg-[#6368AC] transition-colors duration-150">Научи повече</span>
            </div>
          </NuxtLink>

          <NuxtLink :to="localePath('/summer-activities/writers-workshop')" class="flex flex-col bg-[#EEF4F9] rounded-[20px] overflow-hidden shadow-[0_8px_32px_rgba(99,104,172,0.12)] hover:shadow-[0_16px_48px_rgba(99,104,172,0.22)] hover:-translate-y-1 transition-all duration-200">
            <div class="relative h-[220px]">
              <img src="/stock/drawing.jpg" alt="Работилница за писатели" class="w-full h-full object-cover object-center" />
              <div class="absolute inset-0 bg-gradient-to-t from-[rgba(87,93,170,0.6)] to-transparent" />
              <div class="absolute bottom-4 left-5">
                <span class="bg-[#CADA2B] text-[#575DAA] text-xs font-bold uppercase tracking-[1.5px] py-1 px-3 rounded-full">13–17 години</span>
              </div>
            </div>
            <div class="p-6 flex flex-col flex-1">
              <div class="w-10 h-1 bg-[#CADA2B] mb-4 rounded-full" />
              <h3 class="text-[clamp(20px,2vw,24px)] font-bold text-[#3d4270] mb-3 leading-[1.2]">Работилница за писатели</h3>
              <p class="text-[#555569] text-[15px] leading-[1.65] mb-6 flex-1">За тийнейджъри с влечение към писането. Хайку, манга, пътеписи и киносценарии — пространство, в което мисълта среща белия лист.</p>
              <span class="inline-block text-center py-[12px] px-[24px] rounded-full font-semibold text-[14px] bg-[#575DAA] text-white hover:bg-[#6368AC] transition-colors duration-150">Научи повече</span>
            </div>
          </NuxtLink>

        </div>
      </div>
    </section>

    <!-- WHY EXPLO SUMMER — editorial image split, unique to this page -->
    <section class="bg-[#EEF4F9] py-[72px] lg:py-[96px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[56px] items-center lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Три програми, едни ценности</div>
            <h2 class="text-[clamp(26px,3.5vw,40px)] text-[#6368AC] leading-[1.2] font-bold mb-[28px]">
              Независимо кое приключение изберете
            </h2>
            <p class="text-[#555569] text-[clamp(16px,1.4vw,18px)] leading-[1.7] mb-[28px]">
              Всяка от трите програми е проектирана в синхрон с нашата философия — децата не
              чакат готови отговори, а задават въпросите и водят изследването. Тук не се бърза.
              Тук се мисли.
            </p>
            <ul class="space-y-[16px]">
              <li class="flex items-start gap-[14px]">
                <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[10px] shrink-0" />
                <p class="text-[#555569] text-[clamp(15px,1.3vw,17px)] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Малки групи</span> — максимум 16–20 деца за реално внимание към всяко дете.</p>
              </li>
              <li class="flex items-start gap-[14px]">
                <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[10px] shrink-0" />
                <p class="text-[#555569] text-[clamp(15px,1.3vw,17px)] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Природна база</span> — в полите на Витоша, с двор, гора и чист въздух.</p>
              </li>
              <li class="flex items-start gap-[14px]">
                <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[10px] shrink-0" />
                <p class="text-[#555569] text-[clamp(15px,1.3vw,17px)] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Опитен екип</span> — педагози и фасилитатори с над 10 години доказан подход.</p>
              </li>
              <li class="flex items-start gap-[14px]">
                <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[10px] shrink-0" />
                <p class="text-[#555569] text-[clamp(15px,1.3vw,17px)] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Автентично преживяване</span> — не шаблонна програма, а жива общност.</p>
              </li>
            </ul>
          </div>
          <div class="relative">
            <img src="/stock/group2.jpg" alt="Деца заедно на открито" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(99,104,172,0.2)] border-[6px] border-white">
            <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">В полите на Витоша</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMISE -->
    <section class="bg-[#6368AC] text-white py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <blockquote class="max-w-[800px] mx-auto text-[clamp(22px,3vw,32px)] leading-[1.4] font-medium relative px-[30px]">
          Лятото не е просто пауза от ученето, а <span class="text-[#CADA2B] font-bold">най-доброто му
          време</span> — когато то се случва без бързане, сред природата и водено изцяло от любопитството.
          <span class="absolute left-[-10px] top-[-20px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
          <span class="absolute right-[-10px] bottom-[-40px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
        </blockquote>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="bg-[#EEF4F9] py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-8 max-w-[1200px]">
        <div class="bg-white p-[40px_24px] rounded-[28px] shadow-[0_12px_40px_rgba(99,104,172,0.15)] max-w-[760px] mx-auto lg:p-[56px_40px]">
          <h2 class="text-[#6368AC] text-[clamp(26px,3.5vw,36px)] mb-[12px] font-bold">Включете се в приключението</h2>
          <p class="text-[#555569] mb-[32px] text-[17px]">Пишете ни или се обадете — ще ви помогнем да намерите точното място за вашето дете.</p>
          <div class="grid grid-cols-1 gap-[16px] mb-[32px] lg:grid-cols-3">
            <a href="tel:+359879180700" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📞</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Телефон</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">0879 180 700</div>
            </a>
            <a href="mailto:exploratorium.school@abv.bg" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📩</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Имейл</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">exploratorium.school@abv.bg</div>
            </a>
            <div class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px]">
              <div class="text-[24px] mb-[6px]">📍</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Адрес</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">кв. Драгалевци, ул. Мавровец 3</div>
            </div>
          </div>
          <a href="mailto:exploratorium.school@abv.bg" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none">Изпрати запитване</a>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const localePath = useLocalePath()
</script>
