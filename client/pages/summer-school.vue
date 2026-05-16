<template>
  <div class="font-inter text-[#2A2A40] bg-[#EEF4F9]">
    <!-- HERO -->
    <section class="bg-gradient-to-br from-[#6368AC] to-[#9A99CC] text-white pt-[250px] pb-[80px] relative overflow-hidden lg:pt-[270px] lg:pb-[100px]">
      <div class="absolute bottom-[-60px] left-[-60px] right-[-60px] h-[120px] bg-[#EEF4F9] rounded-[50%] z-[1]"></div>
      <div class="container mx-auto px-6 relative z-[2] max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div>
            <h1 class="text-[clamp(30px,4.5vw,52px)] leading-[1.1] font-bold text-[#CADA2B] mb-[22px]">
              <span class="block text-[clamp(16px,1.8vw,20px)] text-white font-medium uppercase tracking-[2px] mb-[12px] opacity-85">Лято за откриватели</span>
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
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">15 юни – 28 август<br>пон–пет, 8:30–17:30</div>
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

    <!-- WEEKS -->
    <section id="weeks" class="py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">11 тематични седмици</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Всяка седмица е нова лаборатория</h2>
          <p class="max-w-[640px] mx-auto mt-[18px] text-[#555569] text-[17px]">Записванията са на седмична база - детето може да дойде за една седмица, за пет или за цялото лято. Темите не се повтарят.</p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">01</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Биологична машина</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Тялото и сетивата</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">15 – 19 юни</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">02</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Химия на чувствата</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Емоционална интелигентност</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">22 – 26 юни</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">03</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Зелени детективи</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Растения и почва</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">29 юни – 03 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">04</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Нашите съседи</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Животните на Витоша</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">06 – 10 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">05</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Архитекти на общността</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Хората и занаятите</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">13 – 17 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">06</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Етно-лаборатория</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Културите по света</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">20 – 24 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">07</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Лаборатория за илюзии</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Мозък и въображение</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">27 – 31 юли</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">08</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Еко-пазители</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Грижа за планетата</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">03 – 07 август</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">09</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Геометрия на красотата</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Цветове и форми</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">10 – 14 август</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">10</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Физика на звука</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Музика и вълни</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">17 – 21 август</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">11</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Картографи на неизвестното</h3>
            <div class="text-[#555569] text-[14px] mb-[12px] italic">Ориентиране и откривателство</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">24 – 28 август</div>
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

    <!-- PROMISE -->
    <section class="bg-[#6368AC] text-white py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <blockquote class="max-w-[800px] mx-auto text-[clamp(22px,3vw,32px)] leading-[1.4] font-medium relative px-[30px]">
          Дете, което в края на лятото не е <span class="line-through opacity-50">„гледано"</span>,
          а е <span class="text-[#CADA2B] font-bold">пораснало с увереност</span>, че може да задава правилните въпроси.
          <span class="absolute left-[-10px] top-[-20px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
          <span class="absolute right-[-10px] bottom-[-40px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
        </blockquote>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="bg-[#EEF4F9] py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-8 max-w-[1200px]">
        <div class="bg-white p-[40px_24px] rounded-[28px] shadow-[0_12px_40px_rgba(99,104,172,0.15)] max-w-[760px] mx-auto lg:p-[56px_40px]">
          <h2 class="text-[#6368AC] text-[clamp(26px,3.5vw,36px)] mb-[12px] font-bold">Запазеше място за дете</h2>
          <p class="text-[#555569] mb-[32px] text-[17px]">Местата са ограничени - записванията са на седмична база. Свържеше се с нас да заявите коя седмица желаете.</p>
          <div class="grid grid-cols-1 gap-[16px] mb-[32px] lg:grid-cols-3">
            <a href="tel:+359879180700" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📞</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Телефон</div>
              <div class="font-semibold text-[#6368AC] text-[14px] break-words">0879 180 700</div>
            </a>
            <a href="mailto:explotatorium.camp@abv.bg" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">📩</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Имейл</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">explotatorium.camp@abv.bg</div>
            </a>
            <a href="https://www.facebook.com/exploratoriumsummer" target="_blank" rel="noopener" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">👍</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Facebook</div>
              <div class="font-semibold text-[#6368AC] text-[14px] break-words">@exploratoriumsummer</div>
            </a>
          </div>
          <a href="mailto:explotatorium.camp@abv.bg?subject=Записване%20за%20летен%20лагер%20Експлораториум" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Изпрати запитване</a>
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
