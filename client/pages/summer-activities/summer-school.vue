<template>
  <div class="font-inter text-[#2A2A40] bg-[#EEF4F9]">
    <!-- HERO -->
    <section class="bg-gradient-to-br from-[#6368AC] to-[#9A99CC] text-white pt-[250px] pb-[80px] relative overflow-hidden lg:pt-[270px] lg:pb-[100px]">
      <div class="absolute bottom-[-60px] left-[-60px] right-[-60px] h-[120px] bg-[#EEF4F9] rounded-[50%] z-[1]"></div>
      <div class="container mx-auto px-6 relative z-[2] max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div class="animate-fade-down">
            <h1 class="text-[clamp(30px,4.5vw,52px)] leading-[1.1] font-bold text-[#CADA2B] mb-[22px]">
              <span class="block text-[clamp(16px,1.8vw,20px)] text-white font-medium uppercase tracking-[2px] mb-[12px] opacity-85">Лято в Експлораториум</span>
              От микроскопа до огъня в планината
            </h1>
            <p class="text-[clamp(16px,1.5vw,19px)] opacity-95 mb-[32px]">
              Докато светът спори за оценки, ние експериментираме, готвим и изследваме Витоша.
              Всяка седмица е различна научна и емоционална лаборатория за деца от 5 до 10 години.
            </p>
            <div class="flex flex-wrap gap-[14px]">
              <a href="#cta" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Запази място за дете</a>
              <a href="#weeks" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Виж 11-те седмици</a>
            </div>
          </div>
          <div class="relative">
            <img src="/stock/photo_2026-05-14_15-00-45.jpg" alt="Деца изследват поток на Витоша" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.3)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">15 юни – 28 август</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FACTS -->
    <section class="bg-[#EEF4F9] py-[30px] pb-[60px] relative z-[3]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-2 gap-[16px] bg-white p-[32px] rounded-[24px] shadow-[0_8px_32px_rgba(99,104,172,0.12)] lg:grid-cols-4">
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">📍</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Къде</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">Учебна база, кв. Драгалевци<br>ул. Мавровец 3</div>
          </div>
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">📅</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Кога</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">15 юни – 28 август<br>пон–пет, 9:00–18:00</div>
          </div>
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">👧🧒</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Възраст</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">5 – 10 години</div>
          </div>
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">💶</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Цена</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">150 €/седмица<br>-10% за второ дете</div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="bg-[#EEF4F9] pt-[16px] pb-[48px] relative z-[3]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[32px]">
          <h2 class="text-[clamp(22px,3.5vw,32px)] text-[#6368AC] font-bold leading-[1.2] mb-[16px]">Лято в Експлораториум: „Пътешествие към себе си и света"</h2>
          <p class="text-[#555569] text-[clamp(15px,1.4vw,17px)] leading-[1.7] max-w-[760px] mx-auto mb-[20px]">
            Ние вярваме, че всяко дете носи в себе си естествен изследователски дух. Нашата мисия е да подкрепим това любопитство, като превърнем лятото в едно вълнуващо пътуване. От микроскопа в лабораторията до лагерния огън в планината – децата в Експлораториум откриват как работи светът и кои са те самите в него.
          </p>
          <p class="text-[#555569] text-[clamp(14px,1.3vw,16px)] italic opacity-80 max-w-[640px] mx-auto">Идеално за откриватели, които искат да съчетават изследователския дух с незабравими летни приключения.</p>
        </div>
        <div class="bg-white rounded-[20px] p-[28px_32px] shadow-[0_8px_24px_rgba(99,104,172,0.1)]">
          <div class="text-[#6368AC] font-bold text-[16px] mb-[16px]">Всеки ден е различно приключение:</div>
          <div class="grid grid-cols-1 gap-[12px] lg:grid-cols-2">
            <div class="flex items-start gap-[12px]">
              <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[9px] shrink-0"></div>
              <p class="text-[#555569] text-[15px] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Изследователски подход и наука чрез игра:</span> Пътешествия из знанието, водени от детското любопитство.</p>
            </div>
            <div class="flex items-start gap-[12px]">
              <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[9px] shrink-0"></div>
              <p class="text-[#555569] text-[15px] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Ежедневни излизания сред природата:</span> Планината като най-голямата ни и вдъхновяваща класна стая.</p>
            </div>
            <div class="flex items-start gap-[12px]">
              <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[9px] shrink-0"></div>
              <p class="text-[#555569] text-[15px] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Творчески ателиета и отборни мисии:</span> Време за изразяване на личността, изграждане на общност и екипна работа.</p>
            </div>
            <div class="flex items-start gap-[12px]">
              <div class="w-[6px] h-[6px] rounded-full bg-[#CADA2B] mt-[9px] shrink-0"></div>
              <p class="text-[#555569] text-[15px] leading-[1.6]"><span class="font-semibold text-[#6368AC]">Свобода, движение и смях:</span> Истински летни игри в двора ни и споделени мигове на чист въздух.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- WEEKS -->
    <section id="weeks" class="py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">11 тематични седмици</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Всяка седмица е нова лаборатория</h2>
          <p class="max-w-[640px] mx-auto mt-[18px] text-[#555569] text-[17px]">Записванията са на седмична база - детето може да дойде за една седмица, за пет или за цялото лято. Темите не се повтарят.</p>
        </div>
        <div class="grid grid-cols-1 gap-[14px] items-start sm:grid-cols-2 lg:grid-cols-2">
          <div
            v-for="(week, i) in weeks"
            :key="i"
            class="bg-white rounded-[18px] border-2 overflow-hidden transition-all duration-200 cursor-pointer select-none relative"
            :class="openWeeks.has(i) ? 'border-[#CADA2B] shadow-[0_12px_28px_rgba(99,104,172,0.14)]' : 'border-transparent shadow-[0_2px_8px_rgba(99,104,172,0.07)] hover:border-[#CADA2B] hover:shadow-[0_8px_20px_rgba(99,104,172,0.11)]'"
            @click="toggleWeek(i)"
          >
            <div class="absolute top-0 left-0 w-[5px] h-full bg-[#CADA2B]"></div>
            <div class="pl-[24px] pr-[20px] py-[22px] flex items-center gap-[16px]">
              <div class="font-lobster text-[#9A99CC] text-[42px] leading-none shrink-0 lg:text-[52px]">{{ week.num }}</div>
              <div class="flex-1 min-w-0">
                <h3 class="text-[18px] text-[#6368AC] leading-[1.3] font-bold lg:text-[21px]">{{ week.title }}</h3>
                <div class="text-[#555569] text-[14px] italic mt-[3px] opacity-80 lg:text-[16px]">{{ week.subtitle }}</div>
                <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.3px] mt-[6px] lg:text-[15px]">{{ week.dates }}</div>
              </div>
              <svg
                class="w-[18px] h-[18px] text-[#9A99CC] shrink-0 transition-transform duration-200"
                :class="{ 'rotate-180 text-[#6368AC]': openWeeks.has(i) }"
                fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </div>
            <Transition
              @enter="onWeekEnter"
              @after-enter="onWeekAfterEnter"
              @leave="onWeekLeave"
            >
              <div v-if="openWeeks.has(i)" class="pl-[24px] pr-[20px] pb-[22px]">
                <div class="border-t border-[#EEF4F9] pt-[14px] space-y-[10px]">
                  <div class="text-[15px] text-[#555569] leading-[1.6] lg:text-[16px]"><span class="font-semibold text-[#6368AC]">Изследване:</span> {{ week.research }}</div>
                  <div class="text-[15px] text-[#555569] leading-[1.6] lg:text-[16px]"><span class="font-semibold text-[#6368AC]">Опит:</span> {{ week.experiment }}</div>
                  <div class="text-[15px] text-[#555569] leading-[1.6] lg:text-[16px]"><span class="font-semibold text-[#6368AC]">Готвене:</span> {{ week.cooking }}</div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </section>

    <!-- RITUALS -->
    <section class="bg-white py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Всяка седмица</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Два ритуала, които децата чакат</h2>
          <p class="max-w-[640px] mx-auto mt-[18px] text-[#555569] text-[17px]">Освен тематичните експерименти и излизанията на Витоша, всяка седмица има два постоянни момента, които станаха традиция в Експлораториум.</p>
        </div>
        <div class="grid grid-cols-1 gap-[28px] lg:grid-cols-2">
          <div class="rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(99,104,172,0.12)] hover:translate-y-[-4px] hover:shadow-[0_18px_40px_rgba(99,104,172,0.18)] transition-all duration-200">
            <img src="/stock/photo_2026-05-14_15-00-48.jpg" alt="Деца с готварски шапки приготвят домати" class="w-full aspect-[4/3] object-cover">
            <div class="p-[30px_28px] text-white bg-gradient-to-br from-[#6368AC] to-[#575DAA]">
              <div class="font-lobster text-[26px] leading-none mb-[8px] opacity-95">Четвъртък</div>
              <h3 class="text-[24px] font-bold mb-[10px] leading-[1.2]">Кулинарна лаборатория</h3>
              <p class="opacity-92 text-[16px]">Не просто готвене - приложна химия. Децата разбират защо тестото бухва, защо карамелът кафенее, защо лимонът пощипва. После го изяждат.</p>
            </div>
          </div>
          <div class="rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(99,104,172,0.12)] hover:translate-y-[-4px] hover:shadow-[0_18px_40px_rgba(99,104,172,0.18)] transition-all duration-200">
            <img src="/stock/photo_2026-05-14_15-01-01.jpg" alt="Деца изследват каньон с водопад" class="w-full aspect-[4/3] object-cover">
            <div class="p-[30px_28px] text-[#575DAA] bg-gradient-to-br from-[#CADA2B] to-[#B8C24E]">
              <div class="font-lobster text-[26px] leading-none mb-[8px] opacity-95">Петък</div>
              <h3 class="text-[24px] font-bold mb-[10px] leading-[1.2]">Водно парти</h3>
              <p class="opacity-92 text-[16px]">Водни предизвикателства, експерименти с плаване и потъване, и чиста радост. Седмицата завършва мокро и щастливо.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GALLERY -->
    <section class="bg-[#EEF4F9] py-[60px] pb-[100px] lg:py-[80px] lg:pb-[100px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Моменти от лагера</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Така изглежда едно лято в Експлораториум</h2>
          <p class="max-w-[640px] mx-auto mt-[18px] text-[#555569] text-[17px]">Снимки от предишни сезони - експерименти, занаяти, кулинария, излизания на Витоша.</p>
        </div>
        <div class="grid grid-cols-2 auto-rows-[110px] gap-[14px] lg:grid-cols-12 lg:auto-rows-[140px]">
          <div class="col-span-1 row-span-2 rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(99,104,172,0.12)] hover:translate-y-[-3px] hover:shadow-[0_14px_30px_rgba(99,104,172,0.22)] transition-all duration-[0.25s] cursor-zoom-in lg:col-span-7 lg:row-span-2">
            <img src="/stock/photo_2026-05-14_15-00-32.jpg" alt="Момче гледа в микроскоп" class="w-full h-full object-cover hover:scale-106 transition-transform duration-[0.4s]">
          </div>
          <div class="col-span-1 rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(99,104,172,0.12)] hover:translate-y-[-3px] hover:shadow-[0_14px_30px_rgba(99,104,172,0.22)] transition-all duration-[0.25s] cursor-zoom-in lg:col-span-5">
            <img src="/stock/photo_2026-05-14_15-01-07.jpg" alt="Деца правят експеримент с цветно вещество" class="w-full h-full object-cover hover:scale-106 transition-transform duration-[0.4s]">
          </div>
          <div class="col-span-1 rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(99,104,172,0.12)] hover:translate-y-[-3px] hover:shadow-[0_14px_30px_rgba(99,104,172,0.22)] transition-all duration-[0.25s] cursor-zoom-in lg:col-span-5">
            <img src="/stock/photo_2026-05-14_13-31-22.jpg" alt="Експеримент с буркан и светлина" class="w-full h-full object-cover hover:scale-106 transition-transform duration-[0.4s]">
          </div>
          <div class="col-span-1 rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(99,104,172,0.12)] hover:translate-y-[-3px] hover:shadow-[0_14px_30px_rgba(99,104,172,0.22)] transition-all duration-[0.25s] cursor-zoom-in lg:col-span-4">
            <img src="/stock/photo_2026-05-14_15-00-23.jpg" alt="Деца в кухнята-лаборатория" class="w-full h-full object-cover hover:scale-106 transition-transform duration-[0.4s]">
          </div>
          <div class="col-span-1 rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(99,104,172,0.12)] hover:translate-y-[-3px] hover:shadow-[0_14px_30px_rgba(99,104,172,0.22)] transition-all duration-[0.25s] cursor-zoom-in lg:col-span-4">
            <img src="/stock/photo_2026-05-14_15-00-40.jpg" alt="Деца рисуват и творят" class="w-full h-full object-cover hover:scale-106 transition-transform duration-[0.4s]">
          </div>
          <div class="col-span-1 rounded-[14px] overflow-hidden shadow-[0_6px_18px_rgba(99,104,172,0.12)] hover:translate-y-[-3px] hover:shadow-[0_14px_30px_rgba(99,104,172,0.22)] transition-all duration-[0.25s] cursor-zoom-in lg:col-span-4">
            <img src="/stock/photo_2026-05-14_15-00-45.jpg" alt="Деца на излет на Витоша" class="w-full h-full object-cover hover:scale-106 transition-transform duration-[0.4s]">
          </div>
        </div>
      </div>
    </section>

    <!-- PROMISE + WHAT YOUR CHILD GETS -->
    <section class="bg-[#6368AC] text-white py-[70px] lg:py-[90px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <blockquote class="max-w-[800px] mx-auto text-[clamp(20px,2.8vw,30px)] leading-[1.5] font-medium relative px-[40px] text-center mb-[60px]">
          Дете, което в края на лятото не е <span class="line-through opacity-40">„гледано"</span>,
          а е <span class="text-[#CADA2B] font-bold">пораснало с увереност</span>, че може да задава правилните въпроси.
          <span class="absolute left-0 top-[-10px] font-lobster text-[#CADA2B] text-[72px] leading-none opacity-70">"</span>
          <span class="absolute right-0 bottom-[-36px] font-lobster text-[#CADA2B] text-[72px] leading-none opacity-70">"</span>
        </blockquote>

        <div class="flex items-center gap-[20px] max-w-[480px] mx-auto mb-[52px]">
          <div class="flex-1 h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
          <div class="text-[rgba(255,255,255,0.4)] text-[20px]">✦</div>
          <div class="flex-1 h-[1px] bg-[rgba(255,255,255,0.18)]"></div>
        </div>

        <div class="text-center mb-[36px]">
          <div class="text-[#CADA2B] font-semibold text-[13px] uppercase tracking-[2.5px] mb-[10px]">В края на лятото</div>
          <h2 class="text-white text-[clamp(24px,3.2vw,34px)] font-bold leading-[1.2]">Какво получава вашето дете?</h2>
        </div>

        <div class="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-4">
          <div class="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.12)] rounded-[18px] p-[28px_22px] text-center hover:bg-[rgba(255,255,255,0.16)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[48px] h-[48px] rounded-full bg-[#CADA2B] flex items-center justify-center mb-[16px] mx-auto">
              <svg class="w-[20px] h-[20px] text-[#575DAA]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <h3 class="font-bold text-white text-[17px] mb-[8px]">Увереност</h3>
            <p class="text-[rgba(255,255,255,0.7)] text-[14px] leading-[1.5]">Че може да се справя с практически задачи.</p>
          </div>
          <div class="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.12)] rounded-[18px] p-[28px_22px] text-center hover:bg-[rgba(255,255,255,0.16)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[48px] h-[48px] rounded-full bg-[#CADA2B] flex items-center justify-center mb-[16px] mx-auto">
              <svg class="w-[20px] h-[20px] text-[#575DAA]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/></svg>
            </div>
            <h3 class="font-bold text-white text-[17px] mb-[8px]">Знание</h3>
            <p class="text-[rgba(255,255,255,0.7)] text-[14px] leading-[1.5]">Придобито чрез преживяване, а не чрез заучаване.</p>
          </div>
          <div class="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.12)] rounded-[18px] p-[28px_22px] text-center hover:bg-[rgba(255,255,255,0.16)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[48px] h-[48px] rounded-full bg-[#CADA2B] flex items-center justify-center mb-[16px] mx-auto">
              <svg class="w-[20px] h-[20px] text-[#575DAA]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <h3 class="font-bold text-white text-[17px] mb-[8px]">Общност</h3>
            <p class="text-[rgba(255,255,255,0.7)] text-[14px] leading-[1.5]">Среда на уважение, в която всяко дете е прието.</p>
          </div>
          <div class="bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.12)] rounded-[18px] p-[28px_22px] text-center hover:bg-[rgba(255,255,255,0.16)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[48px] h-[48px] rounded-full bg-[#CADA2B] flex items-center justify-center mb-[16px] mx-auto">
              <svg class="w-[20px] h-[20px] text-[#575DAA]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
            </div>
            <h3 class="font-bold text-white text-[17px] mb-[8px]">Спомени</h3>
            <p class="text-[rgba(255,255,255,0.7)] text-[14px] leading-[1.5]">Изцапани колена, широки усмивки и нови приятелства.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="bg-[#EEF4F9] py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-8 max-w-[1200px]">
        <div class="bg-white p-[40px_24px] rounded-[28px] shadow-[0_12px_40px_rgba(99,104,172,0.15)] max-w-[760px] mx-auto lg:p-[56px_40px]">
          <h2 class="text-[#6368AC] text-[clamp(26px,3.5vw,36px)] mb-[12px] font-bold">Запазете място за дете</h2>
          <p class="text-[#555569] mb-[32px] text-[17px]">Можете да запишете детето си за една, няколко или за всички 11 седмици. Местата са ограничени — свържете се с нас, за да заявите коя седмица желаете.</p>
          <div class="grid grid-cols-1 gap-[16px] mb-[32px] lg:grid-cols-3">
            <a href="tel:+359879180700" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📞</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Телефон</div>
              <div class="font-semibold text-[#6368AC] text-[14px] break-words">0879 180 700</div>
            </a>
            <a href="mailto:exploratorium.camp@abv.bg" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📩</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Имейл</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">exploratorium.camp@abv.bg</div>
            </a>
            <a href="https://www.facebook.com/exploratoriumsummer" target="_blank" rel="noopener" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">👍</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Facebook</div>
              <div class="font-semibold text-[#6368AC] text-[14px] break-words">@exploratoriumsummer</div>
            </a>
          </div>
          <a href="mailto:exploratorium.camp@abv.bg?subject=Записване%20за%20летен%20лагер%20Експлораториум" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Изпрати запитване</a>
        </div>
      </div>
    </section>

    <!-- FOOTER -->
    <!-- <footer class="bg-[#575DAA] text-[rgba(255,255,255,0.85)] py-[40px] pb-[28px] text-center">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="font-lobster text-[#CADA2B] text-[22px] mb-[8px]">school EXPLORATORIUM</div>
        <p>Учебна база, кв. Драгалевци, ул. Мавровец 3, София</p>
        <p class="mt-[14px] opacity-70">
          Виж снимки и моменти от предишни лагери:
          <a href="https://www.facebook.com/exploratoriumsummer" target="_blank" class="text-[#CADA2B]">facebook.com/exploratoriumsummer</a>
        </p>
        <p class="mt-[14px] opacity-70">© 2026 Експлораториум · Лято в Драгалевци</p>
      </div>
    </footer> -->
  </div>
</template>

<script setup>
const weeks = [
  { num: '01', title: 'Биологична машина', subtitle: 'Тялото и сетивата', dates: '15 – 19 юни', research: 'Измерване на пулс; клетки от кожа на лук под микроскоп', experiment: '„Модел на белия дроб" (бутилка и балони)', cooking: 'Енергийни бонбони за силни мускули' },
  { num: '02', title: 'Химия на чувствата', subtitle: 'Емоционална интелигентност', dates: '22 – 26 юни', research: '„Карта на емоциите" в тялото; реакции при страх и радост', experiment: '„Вулкан от чувства" – контролирана химична реакция', cooking: '„Пица-емотикон" – настроения чрез продукти' },
  { num: '03', title: 'Зелени детективи', subtitle: 'Растения и почва', dates: '29 юни – 03 юли', research: 'Хербарий; микро-светът в почвата с лупа', experiment: '„Дишането на листата" – кислородни мехурчета на слънце', cooking: 'Свежа салата от билки, които познаваме' },
  { num: '04', title: 'Нашите съседи', subtitle: 'Животните на Витоша', dates: '06 – 10 юли', research: 'Следотърсачество на Витоша – стъпки и следи от диви животни', experiment: '„Защо птиците не потъват?" – плаваемост на перата', cooking: 'Печене на бисквитки във форми на животни' },
  { num: '05', title: 'Архитекти на общността', subtitle: 'Хората и занаятите', dates: '13 – 17 юли', research: 'Интервюиране на квартала (Драгалевци); проучване на стари занаяти', experiment: '„Здравият мост" от клечки – тестване на издръжливостта', cooking: 'Обща „Племенна трапеза" – всеки отговаря за различен елемент' },
  { num: '06', title: 'Етно-лаборатория', subtitle: 'Културите по света', dates: '20 – 24 юли', research: 'Музикални инструменти и писмености от различни континенти', experiment: '„Как се прави папирус?" или естествени багрила от куркума и цвекло', cooking: 'Ден на световната кухня – гуакамоле или азиатски пролетни рулца' },
  { num: '07', title: 'Лаборатория за илюзии', subtitle: 'Мозък и въображение', dates: '27 – 31 юли', research: 'Оптични илюзии и тауматроп; как мозъкът ни „мами"', experiment: '„Невидимо мастило" – писане с лимонов сок, видимо при нагряване', cooking: '„Вълшебна лимонада" – сменя цвета с чай от синя пеперуда' },
  { num: '08', title: 'Еко-пазители', subtitle: 'Грижа за планетата', dates: '03 – 07 август', research: 'Филтриране на „мръсна" вода през пясък, въглен и камъни', experiment: 'Разграждане на материали – пластмаса vs. хартия в почвата', cooking: '„Нулев отпадък" – готвим с всичко налично, без да изхвърляме' },
  { num: '09', title: 'Геометрия на красотата', subtitle: 'Цветове и форми', dates: '10 – 14 август', research: 'Хроматография – разделяне на цветовете на черния флумастер', experiment: '„Танцуващи цветове" в мляко (с веро и бои)', cooking: '„Дъга в чинията" – плодове наредени по цветове и форми' },
  { num: '10', title: 'Физика на звука', subtitle: 'Музика и вълни', dates: '17 – 21 август', research: 'Визуализиране на звукови вълни върху опънато фолио със захар/ориз', experiment: '„Стъклено пиано" с чаши с различна височина на водата', cooking: '„Хрупкави ритми" – храна, която издава интересен звук при ядене' },
  { num: '11', title: 'Картографи на неизвестното', subtitle: 'Ориентиране и откривателство', dates: '24 – 28 август', research: 'Ориентиране с компас и слънце; „състарена" карта на Драгалевци', experiment: '„Реактивен двигател" с балон и сламка (как се движат ракетите)', cooking: '„Храна за изследователи" – сушене на плодове или домашно мюсли' },
]

const openWeeks = ref(new Set())

function toggleWeek(i) {
  const next = new Set(openWeeks.value)
  next.has(i) ? next.delete(i) : next.add(i)
  openWeeks.value = next
}

function onWeekEnter(el) {
  el.style.height = '0'
  el.style.opacity = '0'
  el.style.overflow = 'hidden'
  el.offsetHeight
  el.style.transition = 'height 0.25s ease, opacity 0.25s ease'
  el.style.height = el.scrollHeight + 'px'
  el.style.opacity = '1'
}

function onWeekAfterEnter(el) {
  el.style.height = 'auto'
  el.style.overflow = ''
  el.style.transition = ''
}

function onWeekLeave(el) {
  el.style.height = el.scrollHeight + 'px'
  el.style.overflow = 'hidden'
  el.offsetHeight
  el.style.transition = 'height 0.25s ease, opacity 0.25s ease'
  el.style.height = '0'
  el.style.opacity = '0'
}
</script>

