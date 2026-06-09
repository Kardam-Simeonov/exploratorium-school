<template>
  <div class="relative 1xl:pt-[17rem] pt-[20rem]">
    <img
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-top mask-fadeoff opacity-80"
      src="/stock/admissionshero.jpg" />
    <header class="relative px-4 lg:px-12 pb-16 lg:pb-24 overflow-hidden">
      <img class="hidden xl:block w-[30rem] absolute top-[10%] right-[-6rem] opacity-[0.03] -rotate-[150deg]" src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img class="hidden xl:block 2xl:w-[28rem] w-[23rem] absolute -left-[12rem] bottom-[10%] opacity-[0.03]" src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="max-w-7xl mx-auto animate-fade-down">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          <!-- Text column -->
          <div>
            <div class="inline-block bg-[rgba(255,255,255,0.12)] border border-[rgba(255,255,255,0.25)] px-4 py-[7px] rounded-full text-sm font-bold tracking-[0.04em] mb-6 text-white">
              Прием <span class="text-[#CADA2B]">2026/2027</span> · 10 свободни места
            </div>
            <h1 class="text-[clamp(2.4rem,5vw,4.25rem)] leading-[1.05] font-black text-[#CADA2B] drop-shadow mb-[28px] tracking-[-0.02em]">
              Търсим следващите 10 малки изследователи
            </h1>
            <p class="text-[1.2rem] leading-[1.6] text-white mb-[36px] max-w-[520px]">
              Приемът за новата учебна година е отворен за деца от 4 до 14 години.
              Търсим семейства, които вярват, че детето им е повече от „набор от оценки".
            </p>
            <a href="#form" class="inline-flex items-center gap-2 py-[18px] px-[40px] rounded-full font-bold text-[1rem] bg-[#CADA2B] text-[#4a4f8f] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:bg-[#b8c24e] hover:translate-y-[-2px] hover:shadow-[0_8px_20px_rgba(202,218,43,0.35)] transition-all duration-200 cursor-pointer border-none">
              Запази час за среща →
            </a>
          </div>
          <!-- Image column -->
          <div
            class="hidden xl:block overflow-hidden aspect-[3/2] shadow-[0_20px_60px_rgba(0,0,0,0.25)]"
            style="border-radius: 48% 48% 14% 14% / 16% 16% 12% 12%"
          >
            <img src="/stock/admissionshero.jpg" alt="Деца от Експлораториум учат заедно навън в природата" class="w-full h-full object-cover object-center" />
          </div>
        </div>
      </div>
    </header>

    <!-- MANIFESTO STRIP -->
    <section class="manifesto-strip bg-explo-darkblue py-20 text-center px-4 relative">
      <div class="max-w-3xl mx-auto space-y-3">
        <p class="text-[clamp(1.4rem,2.5vw,2.25rem)] font-extrabold leading-snug text-white">
          Тук <span class="text-[#CADA2B]">не учим предмети</span>. Изследваме области.
        </p>
        <p class="text-[clamp(1.4rem,2.5vw,2.25rem)] font-extrabold leading-snug text-white">
          Тук <span class="text-[#CADA2B]">не пишем оценки</span>. Проследяваме напредък.
        </p>
        <p class="text-[clamp(1.4rem,2.5vw,2.25rem)] font-extrabold leading-snug text-white">
          Тук <span class="text-[#CADA2B]">свободата не е хаос</span>, а отговорност.
        </p>
      </div>
    </section>

    <!-- VALUES / FOR WHOM -->
    <section id="values" class="relative px-4 lg:px-12 py-24 overflow-hidden">
      <div class="absolute top-[-100px] right-[-120px] w-[480px] h-[480px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-80px] left-[-80px] w-[360px] h-[360px] rounded-full bg-[rgba(99,104,172,0.1)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-[1]">

        <!-- Header -->
        <div class="mb-16">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">За кого е училището</div>
          <h2 class="text-[clamp(30px,4.5vw,50px)] font-black text-white leading-[1.05] mb-4">
            Ако искате<br><span class="text-[#CADA2B]">детето ви…</span>
          </h2>
          <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full"></div>
        </div>

        <!-- Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-[20px]">

          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-[36px_28px] overflow-hidden hover:translate-y-[-6px] hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.28)] hover:shadow-[0_20px_56px_rgba(202,218,43,0.1)] transition-all duration-300">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-[10px] right-[14px] font-lobster text-[7rem] text-white opacity-[0.04] leading-none select-none pointer-events-none">01</div>
            <div class="w-[52px] h-[52px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.22)] rounded-[14px] flex items-center justify-center text-[24px] mb-[22px] group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-300">🔍</div>
            <h3 class="text-[clamp(18px,1.6vw,21px)] text-white leading-[1.3] mb-[10px] font-extrabold">Да задава въпроси</h3>
            <p class="text-explo-whiteblue text-[clamp(14px,1.2vw,15px)] leading-[1.65] opacity-68">Вместо да чака готови отговори. Любопитството е двигателят – ние го пазим, не го изключваме в 8:00 сутринта.</p>
          </div>

          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-[36px_28px] overflow-hidden hover:translate-y-[-6px] hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.28)] hover:shadow-[0_20px_56px_rgba(202,218,43,0.1)] transition-all duration-300 md:mt-[36px]">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-[10px] right-[14px] font-lobster text-[7rem] text-white opacity-[0.04] leading-none select-none pointer-events-none">02</div>
            <div class="w-[52px] h-[52px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.22)] rounded-[14px] flex items-center justify-center text-[24px] mb-[22px] group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-300">🧠</div>
            <h3 class="text-[clamp(18px,1.6vw,21px)] text-white leading-[1.3] mb-[10px] font-extrabold">Да мисли критично</h3>
            <p class="text-explo-whiteblue text-[clamp(14px,1.2vw,15px)] leading-[1.65] opacity-68">Да проверява информацията, да не приема нещата за дадени, да отличава факт от мнение. Това е умение за цял живот.</p>
          </div>

          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-[36px_28px] overflow-hidden hover:translate-y-[-6px] hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.28)] hover:shadow-[0_20px_56px_rgba(202,218,43,0.1)] transition-all duration-300">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute top-[10px] right-[14px] font-lobster text-[7rem] text-white opacity-[0.04] leading-none select-none pointer-events-none">03</div>
            <div class="w-[52px] h-[52px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.22)] rounded-[14px] flex items-center justify-center text-[24px] mb-[22px] group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-300">🌱</div>
            <h3 class="text-[clamp(18px,1.6vw,21px)] text-white leading-[1.3] mb-[10px] font-extrabold">Да расте в общност</h3>
            <p class="text-explo-whiteblue text-[clamp(14px,1.2vw,15px)] leading-[1.65] opacity-68">Където е прието такова, каквото е. Без сравнения, без етикети, без „трябва да си като другите".</p>
          </div>

        </div>

        <!-- Bottom callout -->
        <div class="mt-12 bg-[rgba(202,218,43,0.07)] border border-[rgba(202,218,43,0.18)] rounded-[20px] p-[26px_32px] max-w-2xl">
          <p class="text-white text-[clamp(15px,1.3vw,17px)] leading-[1.75]">
            Експлораториум не е училище за всеки – и това е добре. Ние търсим семейства, които споделят нашите ценности. Заповядайте на лична среща в нашата база, за да усетите атмосферата.
            <strong class="text-[#CADA2B]">Ние не правим кастинги за деца</strong> – търсим съмишленици сред родителите.
          </p>
        </div>

      </div>
    </section>

    <!-- DAY IN EXPLORATORIUM -->
    <section class="bg-explo-darkpurple px-4 lg:px-12 py-24 relative overflow-hidden">
      <div class="absolute top-[-80px] right-[-100px] w-[380px] h-[380px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="max-w-7xl mx-auto relative z-[1]">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 items-end mb-12">
          <div>
            <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-3">Как изглежда отвътре</div>
            <h2 class="text-[clamp(28px,4.5vw,44px)] font-extrabold text-white leading-[1.1] mb-4">Един ден в Експлораториум</h2>
            <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full"></div>
          </div>
          <p class="text-explo-whiteblue text-[clamp(15px,1.3vw,17px)] leading-[1.7] opacity-65 lg:pb-[4px]">
            Не учебен ден – изследователски. Всяко сутро носи нов въпрос, всяко следобед – нов отговор.
          </p>
        </div>

        <!-- Magazine grid: tall left column, 2 small top-right, 1 wide bottom-right -->
        <div class="grid grid-cols-2 gap-4 lg:grid-cols-[1.4fr_1fr_1fr] lg:grid-rows-2 lg:h-[580px]">

          <!-- Tile 1: tall, spans 2 rows -->
          <div class="relative rounded-[24px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:row-span-2 group cursor-default">
            <img src="/stock/tile1.jpg" alt="Деца изследват в час – концентрация без принуда" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,60,0.92)] via-[rgba(20,18,60,0.2)] to-transparent"></div>
            <div class="absolute top-[16px] left-[16px]">
              <div class="bg-[#CADA2B] text-[#3a3f70] text-[10px] font-black uppercase tracking-[1.5px] px-[11px] py-[4px] rounded-full shadow-[0_3px_10px_rgba(202,218,43,0.35)]">Сутринта</div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-[24px]">
              <div class="text-[15px] sm:text-[19px] font-extrabold text-white leading-[1.2] mb-[5px]">Концентрация без принуда.</div>
              <div class="text-[13px] text-[rgba(255,255,255,0.65)]">Децата избират задачите си.</div>
            </div>
          </div>

          <!-- Tile 2 -->
          <div class="relative rounded-[24px] overflow-hidden aspect-[4/5] lg:aspect-auto group cursor-default">
            <img src="/stock/tile2.jpg" alt="Малка група деца заедно навън" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,60,0.88)] via-[rgba(20,18,60,0.15)] to-transparent"></div>
            <div class="absolute top-[14px] left-[14px]">
              <div class="bg-[rgba(255,255,255,0.18)] backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[1.5px] px-[10px] py-[4px] rounded-full border border-[rgba(255,255,255,0.22)]">Общност</div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-[18px]">
              <div class="text-[16px] font-extrabold text-white leading-[1.2]">Малка общност.</div>
            </div>
          </div>

          <!-- Tile 3 -->
          <div class="relative rounded-[24px] overflow-hidden aspect-[4/5] lg:aspect-auto group cursor-default">
            <img src="/stock/tile3.jpg" alt="Дете навън сред природата" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,60,0.88)] via-[rgba(20,18,60,0.15)] to-transparent"></div>
            <div class="absolute top-[14px] left-[14px]">
              <div class="bg-[rgba(255,255,255,0.18)] backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-[1.5px] px-[10px] py-[4px] rounded-full border border-[rgba(255,255,255,0.22)]">Природата</div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-[18px]">
              <div class="text-[16px] font-extrabold text-white leading-[1.2]">Природа всеки ден.</div>
            </div>
          </div>

          <!-- Tile 4: wide, spans 2 cols on desktop -->
          <div class="relative rounded-[24px] overflow-hidden aspect-[4/5] lg:aspect-auto lg:col-span-2 group cursor-default">
            <img src="/stock/tile4.jpg" alt="Деца работят съсредоточено над карта" class="w-full h-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-[1.04]" />
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,60,0.88)] via-[rgba(20,18,60,0.1)] to-transparent"></div>
            <div class="absolute top-[14px] left-[14px]">
              <div class="bg-[#CADA2B] text-[#3a3f70] text-[10px] font-black uppercase tracking-[1.5px] px-[11px] py-[4px] rounded-full shadow-[0_3px_10px_rgba(202,218,43,0.35)]">Следобед</div>
            </div>
            <div class="absolute bottom-0 left-0 right-0 p-[20px] lg:p-[24px]">
              <div class="text-[17px] lg:text-[19px] font-extrabold text-white leading-[1.2] mb-[4px]">Дълбока работа.</div>
              <div class="text-[13px] text-[rgba(255,255,255,0.65)] hidden lg:block">Проекти, карти, въпроси без прост отговор.</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- BRAND BAND -->
    <section class="grid lg:grid-cols-[1.2fr_1fr] overflow-hidden">
      <!-- Photo side -->
      <div class="relative min-h-[300px] lg:min-h-[460px]">
        <img src="/stock/brand.jpg" alt="Сградата на Експлораториум с транспаранта със слогана" class="absolute inset-0 w-full h-full object-cover object-[30%_center]" />
        <!-- Gradient bleed into text panel on desktop -->
        <div class="hidden lg:block absolute inset-y-0 right-0 w-[35%] bg-gradient-to-l from-[#575DAA] to-transparent pointer-events-none"></div>
        <!-- Bottom gradient for mobile -->
        <div class="lg:hidden absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-[#575DAA] to-transparent pointer-events-none"></div>
        <!-- Floating badge -->
        <div class="absolute bottom-[28px] left-[28px] hidden lg:flex items-center gap-[8px] bg-[#CADA2B] text-[#3a3f70] text-[12px] font-black uppercase tracking-[1.2px] px-[16px] py-[8px] rounded-full shadow-[0_4px_16px_rgba(202,218,43,0.45)]">
          <span>✦</span><span>10+ години опит</span>
        </div>
      </div>

      <!-- Text side -->
      <div class="bg-explo-darkblue px-8 lg:px-14 py-16 lg:py-0 flex flex-col justify-center relative overflow-hidden">
        <div class="absolute top-[-80px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
        <div class="absolute bottom-[-60px] left-[-40px] w-[220px] h-[220px] rounded-full bg-[rgba(99,104,172,0.15)] pointer-events-none"></div>
        <div class="relative z-[1]">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Експлораториум</div>
          <div class="h-[3px] w-[48px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mb-6"></div>
          <p class="font-lobster text-[clamp(1.8rem,2.8vw,3rem)] leading-[1.25] text-white mb-6">
            …където стъпките<br>се превръщат в <span class="text-[#CADA2B]">следи</span>.
          </p>
          <p class="text-[1.05rem] text-explo-whiteblue leading-[1.7] opacity-78 max-w-[440px] mb-8">
            Едно място в полите на Витоша, в кв. Драгалевци, където всяко дете оставя своя отпечатък – а ние пазим неговото любопитство будно.
          </p>
          <div class="flex flex-wrap gap-[10px]">
            <div class="flex items-center gap-[7px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-full px-[14px] py-[7px]">
              <div class="w-[5px] h-[5px] rounded-full bg-[#CADA2B] shrink-0"></div>
              <span class="text-white text-[13px] font-semibold">10+ години</span>
            </div>
            <div class="flex items-center gap-[7px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-full px-[14px] py-[7px]">
              <div class="w-[5px] h-[5px] rounded-full bg-[#CADA2B] shrink-0"></div>
              <span class="text-white text-[13px] font-semibold">кв. Драгалевци</span>
            </div>
            <div class="flex items-center gap-[7px] bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.1)] rounded-full px-[14px] py-[7px]">
              <div class="w-[5px] h-[5px] rounded-full bg-[#CADA2B] shrink-0"></div>
              <span class="text-white text-[13px] font-semibold">4 – 14 години</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- TEN YEARS -->
    <section class="relative overflow-hidden px-4 lg:px-12 py-24">
      <img src="/stock/natureCloseup1.jpeg" class="absolute z-0 w-full h-full top-0 left-0 object-cover object-center opacity-[0.07]" aria-hidden="true" />
      <div class="relative z-10 max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">След 10 години</div>
            <h2 class="text-[clamp(24px,3.5vw,44px)] font-extrabold text-[#CADA2B] leading-[1.15] mb-6">Какво видяхме от нашите вече пораснали деца?</h2>
            <p class="text-white text-[1.15rem] leading-[1.7] mb-4 opacity-90">Зрели и самостоятелни тийнейджъри. Отговорни за изборите си.</p>
            <p class="text-white text-[1.15rem] leading-[1.7] opacity-90">Носят умения, които системата не дава. Емпатични и будни, те просто не са в матрицата.</p>
          </div>
          <div class="rounded-[14%_48%_14%_14%/14%_16%_14%_14%] overflow-hidden aspect-[4/5] shadow-[0_20px_60px_rgba(0,0,0,0.35)] max-w-sm lg:max-w-none mx-auto lg:mx-0 order-first lg:order-last border-[12px] border-[rgba(255,255,255,0.18)]">
            <img src="/stock/ten-years.jpg" alt="Пораснали деца от Експлораториум заедно" class="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="bg-explo-darkblue px-4 lg:px-12 py-24 relative overflow-hidden">
      <div class="absolute top-[-140px] left-[-120px] w-[520px] h-[520px] rounded-full bg-[rgba(202,218,43,0.03)] pointer-events-none"></div>
      <div class="absolute bottom-[-80px] right-[-100px] w-[420px] h-[420px] rounded-full bg-[rgba(99,104,172,0.12)] pointer-events-none"></div>
      <div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[rgba(202,218,43,0.015)] pointer-events-none"></div>

      <div class="max-w-7xl mx-auto relative z-[1]">
        <div class="mb-14 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-3">Мнения на родители</div>
            <h2 class="text-[clamp(28px,4.5vw,44px)] font-extrabold text-white leading-[1.1] mb-4">Какво казват семействата</h2>
            <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full"></div>
          </div>
          <p class="text-white text-[1.05rem] opacity-65 max-w-[340px] sm:text-right">Не нашите думи – думите на родители, чиито деца живеят в тази среда.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 xl:items-start">

          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-7 flex flex-col hover:translate-y-[-6px] hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-[-16px] right-[10px] font-lobster text-[9rem] text-white opacity-[0.04] leading-none select-none pointer-events-none">"</div>
            <div class="flex gap-[5px] items-center mb-5">
              <div class="w-[7px] h-[7px] rounded-full bg-[#CADA2B]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.45)]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.18)]"></div>
            </div>
            <p class="text-[0.95rem] leading-[1.72] text-white opacity-88 flex-grow mb-6">Като родител на дете, което учи тук трета година, не съм си представяла, че ще споделя: дъщеря ми обожава да ходи на училище. Към всички причини да изберете Експлораториум бих добавила и тази – просто да е щастливо.</p>
            <div class="flex items-center gap-3 border-t border-[rgba(255,255,255,0.1)] pt-4">
              <div class="w-11 h-11 rounded-full bg-[rgba(202,218,43,0.14)] border border-[rgba(202,218,43,0.28)] flex items-center justify-center font-extrabold text-[#CADA2B] text-[12px] flex-shrink-0">БП</div>
              <div>
                <div class="font-bold text-white text-sm">Боряна Пеева</div>
                <div class="text-xs text-explo-whiteblue opacity-55">Майка на Анна, 13 г.</div>
              </div>
            </div>
          </div>

          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-7 flex flex-col hover:translate-y-[-6px] hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden xl:mt-[44px]">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-[-16px] right-[10px] font-lobster text-[9rem] text-white opacity-[0.04] leading-none select-none pointer-events-none">"</div>
            <div class="flex gap-[5px] items-center mb-5">
              <div class="w-[7px] h-[7px] rounded-full bg-[#CADA2B]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.45)]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.18)]"></div>
            </div>
            <p class="text-[0.95rem] leading-[1.72] text-white opacity-88 flex-grow mb-6">Избрах Експлораториум, защото е място, където можеш да мислиш свободно. Детето да не знае отговора и да задаваш въпроси е нормално. Детето се чувства равен с учителите и ценен – и развива потенциала си по начина, по който го срещат.</p>
            <div class="flex items-center gap-3 border-t border-[rgba(255,255,255,0.1)] pt-4">
              <div class="w-11 h-11 rounded-full bg-[rgba(202,218,43,0.14)] border border-[rgba(202,218,43,0.28)] flex items-center justify-center font-extrabold text-[#CADA2B] text-[12px] flex-shrink-0">М</div>
              <div>
                <div class="font-bold text-white text-sm">Мария</div>
                <div class="text-xs text-explo-whiteblue opacity-55">Майка на Ани, 13 г. и Боби, 11 г.</div>
              </div>
            </div>
          </div>

          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-7 flex flex-col hover:translate-y-[-6px] hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-[-16px] right-[10px] font-lobster text-[9rem] text-white opacity-[0.04] leading-none select-none pointer-events-none">"</div>
            <div class="flex gap-[5px] items-center mb-5">
              <div class="w-[7px] h-[7px] rounded-full bg-[#CADA2B]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.45)]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.18)]"></div>
            </div>
            <p class="text-[0.95rem] leading-[1.72] text-white opacity-88 flex-grow mb-6">Образованието може да бъде не просто подготовка за бъдещето, а пространство, в което детето запазва себе си. Радвам се, че дъщеря ми е част от тази среда – дете, което учи с интерес, изразява емоциите си и не се страхува да бъде себе си.</p>
            <div class="flex items-center gap-3 border-t border-[rgba(255,255,255,0.1)] pt-4">
              <div class="w-11 h-11 rounded-full bg-[rgba(202,218,43,0.14)] border border-[rgba(202,218,43,0.28)] flex items-center justify-center font-extrabold text-[#CADA2B] text-[12px] flex-shrink-0">МП</div>
              <div>
                <div class="font-bold text-white text-sm">Мая Пенева</div>
                <div class="text-xs text-explo-whiteblue opacity-55">Майка на Теа, 6 г.</div>
              </div>
            </div>
          </div>

          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[24px] p-7 flex flex-col hover:translate-y-[-6px] hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.3)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.3)] transition-all duration-300 overflow-hidden xl:mt-[44px]">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute bottom-[-16px] right-[10px] font-lobster text-[9rem] text-white opacity-[0.04] leading-none select-none pointer-events-none">"</div>
            <div class="flex gap-[5px] items-center mb-5">
              <div class="w-[7px] h-[7px] rounded-full bg-[#CADA2B]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.45)]"></div>
              <div class="w-[7px] h-[7px] rounded-full bg-[rgba(202,218,43,0.18)]"></div>
            </div>
            <p class="text-[0.95rem] leading-[1.72] text-white opacity-88 flex-grow mb-6">Избрах Експлораториум за двете ми деца заради топлите и ентусиазирани учители, приятелската атмосфера и възможността да стоят на чист въздух в полите на Витоша. Учителите стимулират любопитството – с експерименти, разходки сред природата и интересни активности.</p>
            <div class="flex items-center gap-3 border-t border-[rgba(255,255,255,0.1)] pt-4">
              <div class="w-11 h-11 rounded-full bg-[rgba(202,218,43,0.14)] border border-[rgba(202,218,43,0.28)] flex items-center justify-center font-extrabold text-[#CADA2B] text-[12px] flex-shrink-0">Мх</div>
              <div>
                <div class="font-bold text-white text-sm">Михаела</div>
                <div class="text-xs text-explo-whiteblue opacity-55">Майка на Андерс, 9 г. и Линнеа, 6 г.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="bg-explo-darkpurple px-4 lg:px-12 py-24 relative overflow-hidden">
      <div class="absolute top-[-80px] right-[-100px] w-[380px] h-[380px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-60px] left-[-80px] w-[320px] h-[320px] rounded-full bg-[rgba(99,104,172,0.12)] pointer-events-none"></div>
      <div class="max-w-7xl mx-auto relative z-[1]">

        <div class="max-w-3xl mb-[52px]">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Как протича приемът</div>
          <h2 class="text-[clamp(28px,4vw,44px)] font-extrabold text-white leading-[1.1] mb-4">Решение без натиск</h2>
          <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mb-5"></div>
          <p class="text-white text-[clamp(16px,1.4vw,18px)] leading-[1.7] opacity-80">В повечето училища решавате под напрежение, че местата свършват. При нас първо опитвате – детето ви прекарва истински дни с нас, преди да решите каквото и да bilo.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:items-stretch gap-[20px] lg:gap-0">

          <!-- Step 01 -->
          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-[32px_28px] flex flex-col hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.3)] hover:translate-y-[-4px] transition-all duration-300 lg:flex-1 overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-25 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div class="mb-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" class="text-[rgba(202,218,43,0.55)]">
                <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2M12 12h4M12 16h4M8 12h.01M8 16h.01" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="font-lobster text-[#CADA2B] text-[3rem] leading-none mb-[14px]" style="filter:drop-shadow(0 0 10px rgba(202,218,43,0.3))">01</div>
            <h3 class="text-white font-extrabold text-[clamp(16px,1.5vw,18px)] mb-[10px]">Записване</h3>
            <p class="text-white opacity-60 text-[clamp(14px,1.2vw,15px)] leading-[1.65]">Попълвате формата по-долу и ние се свързваме с вас, за да уговорим удобно време.</p>
          </div>

          <!-- Connector 01→02 -->
          <div class="hidden lg:flex items-center justify-center w-[52px] shrink-0 self-center relative">
            <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[rgba(202,218,43,0.2)]"></div>
            <div class="relative z-[1] w-[30px] h-[30px] rounded-full bg-explo-darkpurple border border-[rgba(202,218,43,0.3)] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" class="text-[#CADA2B]">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Step 02 -->
          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-[32px_28px] flex flex-col hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.3)] hover:translate-y-[-4px] transition-all duration-300 lg:flex-1 overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-25 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div class="mb-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" class="text-[rgba(202,218,43,0.55)]">
                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="font-lobster text-[#CADA2B] text-[3rem] leading-none mb-[14px]" style="filter:drop-shadow(0 0 10px rgba(202,218,43,0.3))">02</div>
            <h3 class="text-white font-extrabold text-[clamp(16px,1.5vw,18px)] mb-[10px]">Лична среща и обиколка</h3>
            <p class="text-white opacity-60 text-[clamp(14px,1.2vw,15px)] leading-[1.65]">Опознаваме се, показваме базата и отговаряме на всичките ви въпроси без бързане.</p>
          </div>

          <!-- Connector 02→03 -->
          <div class="hidden lg:flex items-center justify-center w-[52px] shrink-0 self-center relative">
            <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[rgba(202,218,43,0.2)]"></div>
            <div class="relative z-[1] w-[30px] h-[30px] rounded-full bg-explo-darkpurple border border-[rgba(202,218,43,0.3)] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" class="text-[#CADA2B]">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Step 03 (featured) -->
          <div class="relative group bg-[rgba(202,218,43,0.08)] border border-[rgba(202,218,43,0.3)] rounded-[22px] p-[32px_28px] flex flex-col hover:bg-[rgba(202,218,43,0.14)] hover:translate-y-[-4px] transition-all duration-300 overflow-hidden lg:flex-1 shadow-[0_8px_48px_rgba(202,218,43,0.09)]">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent"></div>
            <div class="inline-block bg-[#CADA2B] text-[#3a3f70] text-[10px] font-black uppercase tracking-[1.5px] px-[10px] py-[4px] rounded-full mb-[14px] self-start">Сърцето на приема</div>
            <div class="mb-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" class="text-[rgba(202,218,43,0.8)]">
                <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364-.707-.707M6.343 6.343l-.707-.707m12.728 0-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="font-lobster text-[#CADA2B] text-[3rem] leading-none mb-[14px]" style="filter:drop-shadow(0 0 12px rgba(202,218,43,0.45))">03</div>
            <h3 class="text-white font-extrabold text-[clamp(16px,1.5vw,18px)] mb-[10px]">Пробни дни</h3>
            <p class="text-white opacity-80 text-[clamp(14px,1.2vw,15px)] leading-[1.65]">Детето идва и прекарва истински дни с нас. Защото не можете да усетите едно училище от брошура – а детето ви заслужава да види как се чувства само.</p>
          </div>

          <!-- Connector 03→04 -->
          <div class="hidden lg:flex items-center justify-center w-[52px] shrink-0 self-center relative">
            <div class="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[rgba(202,218,43,0.2)]"></div>
            <div class="relative z-[1] w-[30px] h-[30px] rounded-full bg-explo-darkpurple border border-[rgba(202,218,43,0.3)] flex items-center justify-center">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" class="text-[#CADA2B]">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>

          <!-- Step 04 -->
          <div class="group relative bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[22px] p-[32px_28px] flex flex-col hover:bg-[rgba(255,255,255,0.11)] hover:border-[rgba(202,218,43,0.3)] hover:translate-y-[-4px] transition-all duration-300 lg:flex-1 overflow-hidden">
            <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent opacity-25 group-hover:opacity-70 transition-opacity duration-300"></div>
            <div class="mb-[18px]">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" class="text-[rgba(202,218,43,0.55)]">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <div class="font-lobster text-[#CADA2B] text-[3rem] leading-none mb-[14px]" style="filter:drop-shadow(0 0 10px rgba(202,218,43,0.3))">04</div>
            <h3 class="text-white font-extrabold text-[clamp(16px,1.5vw,18px)] mb-[10px]">Решение</h3>
            <p class="text-white opacity-60 text-[clamp(14px,1.2vw,15px)] leading-[1.65]">Записвате се само ако и вие, и детето усетите, че мястото е за вас. Без натиск.</p>
          </div>

        </div>

        <div class="mt-[48px] bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] rounded-[20px] p-[24px_32px] max-w-2xl">
          <p class="text-white text-[clamp(15px,1.3vw,17px)] leading-[1.75] opacity-85">
            Това отнема време и от нас, и от вас – и точно това е идеята.
            <strong class="text-[#CADA2B]">Търсим семейства, които избират съзнателно, а не под натиск.</strong>
          </p>
        </div>

      </div>
    </section>

    <!-- PRICE -->
    <section class="px-4 py-24 relative overflow-hidden">
      <div class="absolute top-[-100px] left-[-80px] w-[420px] h-[420px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-80px] right-[-60px] w-[340px] h-[340px] rounded-full bg-[rgba(99,104,172,0.09)] pointer-events-none"></div>

      <div class="max-w-4xl mx-auto relative z-[1]">
        <div class="relative bg-[rgba(255,255,255,0.08)] border border-[rgba(255,255,255,0.13)] rounded-[28px] p-10 lg:p-14 text-center overflow-hidden">
          <!-- Top lime accent -->
          <div class="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#CADA2B] to-transparent"></div>
          <!-- Subtle inner glow at top -->
          <div class="absolute top-0 left-[50%] -translate-x-1/2 w-[55%] h-[140px] bg-gradient-to-b from-[rgba(202,218,43,0.05)] to-transparent pointer-events-none"></div>

          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Инвестиция</div>
          <h2 class="text-[clamp(1.3rem,2.2vw,1.9rem)] font-extrabold text-white leading-[1.2] mb-5">Месечните такси започват от</h2>

          <!-- Price hero badge -->
          <div class="inline-flex items-baseline gap-[8px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.22)] rounded-[18px] px-[32px] py-[14px] mb-5">
            <span class="font-black text-[#CADA2B] text-[clamp(2.2rem,4.5vw,3.2rem)] leading-none tracking-tight">510 €</span>
            <span class="text-white opacity-55 text-[1rem] font-semibold">/ месец</span>
          </div>

          <p class="text-explo-whiteblue opacity-72 text-[1rem] mb-10">Гъвкави варианти на плащане – месечно, на две вноски или еднократно.</p>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-left">
            <div class="bg-[rgba(255,255,255,0.07)] rounded-[16px] p-[20px] border border-[rgba(255,255,255,0.09)] hover:border-[rgba(202,218,43,0.3)] transition-colors duration-200">
              <div class="text-[22px] mb-3">🗓️</div>
              <strong class="block text-white text-[0.95rem] mb-[6px]">Ранно записване</strong>
              <span class="text-explo-whiteblue opacity-65 text-[13px] leading-[1.55]">Преференциални условия при записване до 30 юни 2026 г.</span>
            </div>
            <div class="bg-[rgba(255,255,255,0.07)] rounded-[16px] p-[20px] border border-[rgba(255,255,255,0.09)] hover:border-[rgba(202,218,43,0.3)] transition-colors duration-200">
              <div class="text-[22px] mb-3">💳</div>
              <strong class="block text-white text-[0.95rem] mb-[6px]">Отстъпки при плащане</strong>
              <span class="text-explo-whiteblue opacity-65 text-[13px] leading-[1.55]">5% при две вноски · 10% при еднократно плащане.</span>
            </div>
            <div class="bg-[rgba(255,255,255,0.07)] rounded-[16px] p-[20px] border border-[rgba(255,255,255,0.09)] hover:border-[rgba(202,218,43,0.3)] transition-colors duration-200">
              <div class="text-[22px] mb-3">👨‍👩‍👧</div>
              <strong class="block text-white text-[0.95rem] mb-[6px]">За повече деца</strong>
              <span class="text-explo-whiteblue opacity-65 text-[13px] leading-[1.55]">10% за второ дете · 20% за трето дете в семейството.</span>
            </div>
          </div>

          <p class="text-explo-whiteblue opacity-65 text-[0.9rem] leading-[1.65] max-w-xl mx-auto mb-8">Точните годишни такси се различават по възрастов етап и срок на записване. За да изберете най-подходящия за вашето семейство вариант, ги обсъждаме спокойно на личната среща.</p>
          <a href="#form" class="inline-flex items-center gap-2 py-[16px] px-[40px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-150">
            Запазете час – обсъдете вариантите
          </a>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="bg-explo-darkpurple px-4 lg:px-12 py-24">
      <div class="max-w-4xl mx-auto">
        <div class="mb-12">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-3">Чести въпроси</div>
          <h2 class="text-[clamp(28px,4.5vw,44px)] font-extrabold text-white leading-[1.1]">Отговори на въпросите, които вълнуват всеки родител</h2>
        </div>
        <div class="flex flex-col gap-3">
          <div v-for="(faq, i) in faqs" :key="i" class="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.12)] rounded-[18px] overflow-hidden">
            <button
              @click="openFaq = openFaq === i ? -1 : i"
              class="w-full text-left bg-transparent border-none cursor-pointer font-bold text-white text-[1.05rem] leading-snug px-6 py-5 pr-14 relative"
            >
              {{ faq.q }}
              <span
                class="absolute right-5 top-1/2 -translate-y-1/2 text-[1.6rem] font-light text-[#CADA2B] transition-transform duration-200 inline-block"
                :class="openFaq === i ? 'rotate-45' : ''"
              >+</span>
            </button>
            <div v-if="openFaq === i" class="px-6 pb-6 text-explo-whiteblue text-[0.95rem] leading-[1.7]" v-html="faq.a" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA / FORM -->
    <section id="form" class="relative px-4 lg:px-8 py-32 bg-explo-darkblue">
      <div class="max-w-7xl mx-auto">
        <div class="max-w-2xl mb-[48px]">
          <div class="text-[#CADA2B] font-semibold text-[13px] uppercase tracking-[2px] mb-[10px]">Записване на дете</div>
          <h2 class="text-white text-[clamp(29px,3.5vw,36px)] leading-[1.2] mb-[12px] font-bold">Запазете час за среща</h2>
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

    <!-- Sticky urgency CTA -->
    <Transition name="sticky-cta">
      <a
        v-if="showStickyBtn"
        href="#form"
        class="fixed top-[20px] left-0 z-40 xl:hidden group flex items-center gap-[12px] bg-[rgba(14,16,52,0.88)] backdrop-blur-md border border-[rgba(255,255,255,0.1)] border-l-0 pl-[18px] pr-[18px] py-[12px] rounded-r-[20px] shadow-[6px_4px_48px_rgba(0,0,0,0.55),0_0_24px_rgba(202,218,43,0.07)] hover:translate-x-[5px] hover:shadow-[8px_4px_56px_rgba(0,0,0,0.65),0_0_36px_rgba(202,218,43,0.18)] transition-all duration-300 ease-out no-underline select-none overflow-hidden"
      >
        <!-- Lime left accent bar -->
        <div class="absolute left-0 top-0 bottom-0 w-[3px] bg-[#CADA2B]"></div>

        <!-- Periodic shimmer sweep -->
        <div class="sticky-shimmer absolute inset-y-0 w-[55%] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.05)] to-transparent skew-x-[-15deg] pointer-events-none"></div>

        <!-- Hover glow -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-[rgba(202,218,43,0.06)] to-transparent pointer-events-none"></div>

        <!-- Phone icon -->
        <svg class="relative shrink-0 text-[#CADA2B]" width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.57a1 1 0 01-.25 1.02l-2.2 2.2z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

        <!-- Text -->
        <span class="relative text-white font-black text-[13px] leading-none tracking-[-0.01em]">Свържете се с нас</span>
      </a>
    </Transition>
  </div>
</template>

<script setup>
useHead({
  title: 'Прием | Exploratorium School',
  meta: [
    { name: 'description', content: 'Запишете детето си в Експлораториум Скул. Прием за деца от 4 до 14 години – разберете условията, цените и процеса на записване в нашето алтернативно училище.' },
    { property: 'og:title', content: 'Прием | Експлораториум Скул' },
    { property: 'og:description', content: 'Запишете детето си в Експлораториум Скул. Прием за деца от 4 до 14 години – разберете условията, цените и процеса на записване.' },
    { property: 'og:image', content: 'https://exploratorium.bg/stock/admissionshero.jpg' },
    { property: 'og:url', content: 'https://exploratorium.bg/admission' },
  ],
  link: [{ rel: 'canonical', href: 'https://exploratorium.bg/admission' }],
})

const form = reactive({ name: '', email: '', phone: '', childAge: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)
const formError = ref(null)
const openFaq = ref(-1)

const showStickyBtn = ref(false)
let _stickyScrollHandler = null

onMounted(() => {
  const hero = document.querySelector('header')
  const formSection = document.getElementById('form')
  _stickyScrollHandler = () => {
    const pastHero = window.scrollY > (hero ? hero.offsetTop + hero.offsetHeight + 300 : 700)
    const atForm = formSection ? window.scrollY + window.innerHeight >= formSection.offsetTop + 80 : false
    showStickyBtn.value = pastHero && !atForm
  }
  window.addEventListener('scroll', _stickyScrollHandler, { passive: true })
})

onUnmounted(() => {
  if (_stickyScrollHandler) window.removeEventListener('scroll', _stickyScrollHandler)
})

const faqs = [
  {
    q: 'Как са организирани децата по възраст?',
    a: `Не ги делим само по години – делим ги по <strong>етап на развитие</strong>. Разликата е важна.<br><br>
        <strong>Предучилищен етап (4–6 г.)</strong> – центърът е детето, не програмата. Учим се чрез игра, изграждаме социална интелигентност и емоционална устойчивост.<br><br>
        <strong>Начален етап (7–10 г.)</strong> – изграждаме функционална грамотност и фокус, не с диктовки, а с реални задачи и проекти.<br><br>
        <strong>Основен етап (10–14 г.)</strong> – дълбока изследователска работа, критично мислене, пряка демокрация. Децата участват в изграждането на общността си.<br><br>
        <span style="color:#CADA2B;font-weight:600;">Групите са малки по замисъл, не по необходимост. Видимостта на детето не е бонус – тя е условие за истинско образование.</span>`
  },
  {
    q: 'Дипломите и оценките – как работи официалната страна?',
    a: `Разбираме, че това е едно от първите неща, които питате – и с пълно право. Образователният път на децата ни е валиден по два признати начина:<br><br>
        <strong>СФО</strong> – детето полага годишни изпити и получава удостоверение, признато от МОН.<br><br>
        <strong>WRA</strong> – международно училище-мрежа; Експлораториум е официален представител за България на американската WRA. Пълна педагогическа автономия и международно признати дипломи.<br><br>
        <span style="color:#CADA2B;font-weight:600;">Двата пътя не се изключват. На срещата обсъждаме кой от тях пасва на вашето семейство.</span>`
  },
  {
    q: 'Ами ако се наложи да се върнем в държавното училище?',
    a: `Това е въпросът, който задава почти всяко семейство – и е напълно разумен. За над 10 години наблюдения имаме ясен отговор: децата ни се вливат в системата без затруднения – и по-добре подготвени от повечето им връстници.<br><br>
        <span style="color:#CADA2B;font-weight:600;">Ако тази тема ви притеснява, нека я обсъдим конкретно на срещата. Ще ви разкажем реални истории.</span>`
  },
  {
    q: 'Как се справят децата ви в гимназията и университета?',
    a: `Първите деца, завършили Експлораториум, вече са студенти – затова говорим не от теория, а от наблюдения. Справят се отлично с „чистите" – оценките не са проблем. Но по-важното: поемат отговорност, изграждат приятелства, запазват близостта с родителите си и – нещо рядко за възрастта им – знаят кои са и накъде вървят.<br><br>
        <span style="color:#CADA2B;font-weight:600;">Изградили сме деца, не само ученици. И тази разлика се вижда навсякъде след нас.</span>`
  }
]

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

<style scoped>
.manifesto-strip::before,
.manifesto-strip::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 24px;
  background: #6368AC;
  pointer-events: none;
}
.manifesto-strip::before {
  top: -1px;
  border-radius: 0 0 50% 50% / 0 0 100% 100%;
}
.manifesto-strip::after {
  bottom: -1px;
  border-radius: 50% 50% 0 0 / 100% 100% 0 0;
}

.sticky-cta-enter-active,
.sticky-cta-leave-active {
  transition: opacity 0.3s ease, transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.sticky-cta-enter-from,
.sticky-cta-leave-to {
  opacity: 0;
  transform: translateX(-130%) scale(0.85);
}

@keyframes shimmer-sweep {
  0%   { transform: translateX(-120%) skewX(-15deg); }
  100% { transform: translateX(320%) skewX(-15deg); }
}
.sticky-shimmer {
  animation: shimmer-sweep 3.5s ease-in-out infinite;
}
</style>
