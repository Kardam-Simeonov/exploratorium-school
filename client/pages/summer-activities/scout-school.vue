<template>
  <div class="font-inter text-[#2A2A40] bg-[#EEF4F9]">
    <!-- HERO -->
    <section class="bg-gradient-to-br from-[#6368AC] to-[#9A99CC] text-white pt-[250px] pb-[80px] relative overflow-hidden lg:pt-[270px] lg:pb-[100px]">
      <div class="absolute bottom-[-60px] left-[-60px] right-[-60px] h-[120px] bg-[#EEF4F9] rounded-[50%] z-[1]"></div>
      <div class="container mx-auto px-6 relative z-[2] max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div class="animate-fade-down">
            <h1 class="text-[clamp(30px,4.5vw,52px)] leading-[1.1] font-bold text-[#CADA2B] mb-[22px]">
              <span class="block text-[clamp(16px,1.8vw,20px)] text-white font-medium uppercase tracking-[2px] mb-[12px] opacity-85">Скаутско училище</span>
              Мисия: Оцеляване
            </h1>
            <p class="text-[clamp(16px,1.5vw,19px)] opacity-95 mb-[32px]">
              Когато дигиталният свят отстъпва пред истинските умения, а характерът се калява сред природата. Само за две седмици разкриваме тайните на Витоша.
            </p>
            <div class="flex flex-wrap gap-[14px]">
              <a href="#cta" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Запишете се</a>
              <a href="#program" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Виж програмата</a>
            </div>
          </div>
          <div class="relative">
            <img src="/stock/treebridge.jpg" alt="Деца преминават въжен мост в гората" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.3)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">6 – 17 юли</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FACTS -->
    <section class="bg-[#EEF4F9] py-[30px] pb-[60px] relative z-[3]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-2 gap-[16px] bg-white p-[32px] rounded-[24px] shadow-[0_8px_32px_rgba(99,104,172,0.12)] lg:grid-cols-4">
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">📅</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Кога</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">6–10 юли<br>13–17 юли</div>
          </div>
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">🧒</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">За кого</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">Деца 8 – 11 години<br>с приключенски дух</div>
          </div>
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">📍</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Локация</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">База Драгалевци<br>и дивата Витоша</div>
          </div>
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">🛡️</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Безопасност</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">До 20 деца<br>двама ментори</div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="bg-white py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Скаутско училище</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold mb-[24px]">Академия за самостоятелност под небето</h2>
            <p class="text-[#555569] text-[clamp(16px,1.5vw,18px)] leading-[1.7] mb-[24px]">
              Водени от нашата философия, че най-важните уроци не се учат между четири стени, лято организираме Скаутското училище. То е създадено за деца, които не се боят да изцапат ръцете си, за да открият възможностите си.
            </p>
            <p class="text-[#555569] text-[clamp(16px,1.5vw,18px)] leading-[1.7]">
              Тук не просто палим огън или връзваме възли — ние изграждаме увереност, учим се на екипност и развиваме психологическа устойчивост в непозната среда. Под ръководството на тандем от специалисти — биолог-изследовател и планински инструктор — „Не мога" се превръща в „Знам как".
            </p>
          </div>
          <div class="relative">
            <img src="/stock/climbingthetree.jpg" alt="Дете катери дърво в гората" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_16px_48px_rgba(99,104,172,0.18)]">
          </div>
        </div>
      </div>
    </section>

    <!-- WEEK 1 -->
    <section id="program" class="py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">6 – 10 юли</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Седмица 1: „Основи на следотърсача"</h2>
          <p class="max-w-[640px] mx-auto mt-[18px] text-[#555569] text-[17px]">Изграждане на лагера, екипна работа и познаване на гората.</p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">1</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Архитекти на бивака</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Избор на терен, заслони, хамаци, скаутски възли</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 1 — 6 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">2</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Тайният език на гората</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Следи от животни, ядливи растения, прогноза за времето</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 2 — 7 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">3</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Господари на огъня</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Безопасно огнище, добиване на огън, горски чай</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 3 — 8 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">4</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Ориентиране и картография</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Компас, карта, мисия „Търсене на съкровище"</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 4 — 9 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">5</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Въжено предизвикателство</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Въжена градина, тролей, баланс и доверие в екипа</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 5 — 10 юли</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WEEK 2 -->
    <section class="bg-white py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.2fr] mb-[56px]">
          <div>
            <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">13 – 17 юли</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold mb-[20px]">Седмица 2: „Герои на планината"</h2>
            <p class="text-[#555569] text-[17px] leading-[1.7]">Приложни умения за оцеляване, висока динамика и спасителни мисии. Децата прилагат наученото от първата седмица в реални, предизвикателни ситуации сред природата на Витоша.</p>
          </div>
          <div>
            <img src="/stock/bonfire.jpg" alt="Лагерен огън в планината" class="w-full aspect-[16/9] object-cover rounded-[24px] shadow-[0_16px_48px_rgba(99,104,172,0.18)]">
          </div>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          <div class="bg-[#EEF4F9] p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">1</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Живата вода</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Планински извори, филтър за пречистване на вода</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 1 — 13 юли</div>
          </div>
          <div class="bg-[#EEF4F9] p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">2</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Мисия „Планинско спасяване"</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Първа помощ, импровизирана носилка, транспорт</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 2 — 14 юли</div>
          </div>
          <div class="bg-[#EEF4F9] p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">3</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Оцеляване в екстремни условия</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">„Горска чорба" на огън, психология на оцеляването</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 3 — 15 юли</div>
          </div>
          <div class="bg-[#EEF4F9] p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">4</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Горски Ninja Warrior</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Трасе от препятствия, баланс, катерене, отборни щафети</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 4 — 16 юли</div>
          </div>
          <div class="bg-[#EEF4F9] p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">5</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Големият преход и Ритуалът</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Финален поход, отличителни знаци, приемане в общността</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Ден 5 — 17 юли</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Имате въпроси?</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Честo задавани въпроси</h2>
        </div>
        <div class="grid grid-cols-1 gap-[22px] lg:grid-cols-3">
          <div class="bg-white p-[32px] rounded-[20px] shadow-[0_8px_24px_rgba(99,104,172,0.10)]">
            <h3 class="text-[#6368AC] font-bold text-[18px] mb-[12px]">Трябва ли предишен опит?</h3>
            <p class="text-[#555569] text-[16px] leading-[1.7]">Не, но детето трябва да обича движението и да няма страх от природата.</p>
          </div>
          <div class="bg-white p-[32px] rounded-[20px] shadow-[0_8px_24px_rgba(99,104,172,0.10)]">
            <h3 class="text-[#6368AC] font-bold text-[18px] mb-[12px]">Какво трябва да носи?</h3>
            <p class="text-[#555569] text-[16px] leading-[1.7]">Раница, здрави обувки, резервни дрехи и много любопитство. Подробен списък изпращаме при записване.</p>
          </div>
          <div class="bg-white p-[32px] rounded-[20px] shadow-[0_8px_24px_rgba(99,104,172,0.10)]">
            <h3 class="text-[#6368AC] font-bold text-[18px] mb-[12px]">Какво получава накрая?</h3>
            <p class="text-[#555569] text-[16px] leading-[1.7]">Умения за цял живот и отличителния знак на „Експлораториум".</p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMISE -->
    <section class="bg-[#6368AC] text-white py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <blockquote class="max-w-[800px] mx-auto text-[clamp(22px,3vw,32px)] leading-[1.4] font-medium relative px-[30px]">
          Тук не просто палим огън.
          Ние изграждаме <span class="text-[#CADA2B] font-bold">увереност, екипност и психологическа устойчивост</span> в непозната среда.
          <span class="absolute left-[-10px] top-[-20px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
          <span class="absolute right-[-10px] bottom-[-40px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
        </blockquote>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="bg-[#EEF4F9] py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-8 max-w-[1200px]">
        <div class="bg-white p-[40px_24px] rounded-[28px] shadow-[0_12px_40px_rgba(99,104,172,0.15)] max-w-[760px] mx-auto lg:p-[56px_40px]">
          <h2 class="text-[#6368AC] text-[clamp(26px,3.5vw,36px)] mb-[12px] font-bold">Готови ли сте за голямото изпитание?</h2>
          <p class="text-[#555569] mb-[32px] text-[17px]">Местата са ограничени до 20 с цел максимална безопасност и внимание към всяко дете.</p>
          <div class="grid grid-cols-1 gap-[16px] mb-[32px] lg:grid-cols-3">
            <a href="tel:+359879180700" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📞</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Телефон</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">0879 180 700</div>
            </a>
            <a href="mailto:exploratorium.camp@abv.bg" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📩</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Имейл</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">exploratorium.camp@abv.bg</div>
            </a>
            <a href="https://www.facebook.com/exploratoriumsummer" target="_blank" rel="noopener" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">👍</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Facebook</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">@exploratoriumsummer</div>
            </a>
          </div>
          <a href="mailto:exploratorium.camp@abv.bg?subject=Записване%20Скаутско%20училище%202026" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Изпрати запитване</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
