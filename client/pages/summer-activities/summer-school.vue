<template>
  <div class="font-inter text-[#2A2A40] bg-[#EEF4F9]">

    <!-- HERO -->
    <section class="bg-gradient-to-br from-[#6368AC] to-[#9A99CC] text-white pt-[250px] pb-[100px] relative overflow-hidden lg:pt-[270px]">
      <div class="absolute bottom-[-60px] left-[-60px] right-[-60px] h-[120px] bg-[#EEF4F9] rounded-[50%] z-[1]"></div>
      <div class="container mx-auto px-6 relative z-[2] max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[60px] items-center lg:grid-cols-[1.2fr_1fr]">
          <div class="animate-fade-down">
            <p class="text-[14px] font-semibold tracking-[2px] text-[#CADA2B] mb-[16px] uppercase">Лято в Експлораториум · 2026</p>
            <h1 class="text-[clamp(36px,4.5vw,56px)] font-black leading-[1.1] mb-[20px]">
              От микроскопа до <span class="text-[#CADA2B]">огъня в планината</span>
            </h1>
            <p class="text-[clamp(17px,1.5vw,20px)] opacity-90 mb-[36px]">
              Докато светът спори за оценки, ние експериментираме, готвим и изследваме Витоша. 11 тематични седмици за деца 5-10 г.
            </p>
            <div class="flex flex-wrap gap-[16px]">
              <a href="#zapis" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s]">Запази място за дете</a>
              <a href="#sedmici" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200">Виж 11-те седмици</a>
            </div>
          </div>
          <div class="relative h-[480px] lg:h-[420px]">
            <img src="/stock/summerhero.jpg" alt="Деца изследват през лятото в Експлораториум" class="w-full h-full object-cover rounded-[24px] shadow-[0_24px_64px_rgba(0,0,0,0.3)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <div class="absolute bottom-[-18px] left-1/2 -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">15 юни – 28 август · 150 €/седмица</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PILLARS -->
    <section class="bg-[#EEF4F9] py-[30px] pb-[60px] relative z-[3]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-2 gap-[16px] bg-white p-[32px_20px] rounded-[24px] shadow-[0_12px_48px_rgba(94,96,206,0.12)] lg:grid-cols-4 lg:p-[40px]">
          <div class="text-center">
            <div class="text-[32px] mb-[12px]">📅</div>
            <div class="text-[12px] font-semibold uppercase tracking-[2px] text-[#555569] mb-[8px]">Кога</div>
            <div class="text-[18px] font-bold text-[#6368AC]">15 юни – 28 август<small class="block text-[13px] font-medium text-[#555569] mt-[4px]">пон–пет, 8:30–17:30</small></div>
          </div>
          <div class="text-center">
            <div class="text-[32px] mb-[12px]">👧🧒</div>
            <div class="text-[12px] font-semibold uppercase tracking-[2px] text-[#555569] mb-[8px]">Възраст</div>
            <div class="text-[18px] font-bold text-[#6368AC]">5 – 10 години</div>
          </div>
          <div class="text-center">
            <div class="text-[32px] mb-[12px]">📍</div>
            <div class="text-[12px] font-semibold uppercase tracking-[2px] text-[#555569] mb-[8px]">Къде</div>
            <div class="text-[18px] font-bold text-[#6368AC]">Драгалевци<small class="block text-[13px] font-medium text-[#555569] mt-[4px]">ул. Мавровец 3</small></div>
          </div>
          <div class="text-center">
            <div class="text-[32px] mb-[12px]">💶</div>
            <div class="text-[12px] font-semibold uppercase tracking-[2px] text-[#555569] mb-[8px]">Цена</div>
            <div class="text-[18px] font-bold text-[#6368AC]">150 €/седмица<small class="block text-[13px] font-medium text-[#555569] mt-[4px]">-10% за второ дете</small></div>
          </div>
        </div>
      </div>
    </section>

    <!-- ABOUT -->
    <section class="py-[80px] bg-[#FFF9E6]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">За кого е лагерът</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-[#6368AC]">Идеално за откривателите</h2>
        <div class="w-14 h-1 bg-[#CADA2B] rounded-full mb-[28px]" />
        <p class="text-[18px] leading-[1.7] text-[#555569] max-w-[800px] mb-[32px]">На децата, които искат да съчетават изследователския дух с незабравими летни приключения. Всеки ден е различно приключение:</p>
        <div class="grid grid-cols-1 gap-[20px] lg:grid-cols-2">
          <div class="p-[20px] bg-[#e7e8f9] rounded-[16px] border-l-[4px] border-[#6368AC]">
            <strong class="block text-[#6368AC] font-bold mb-[6px]">Изследователски подход и наука чрез игра</strong>
            Пътешествия из знанието, водени от детското любопитство.
          </div>
          <div class="p-[20px] bg-[#e7e8f9] rounded-[16px] border-l-[4px] border-[#6368AC]">
            <strong class="block text-[#6368AC] font-bold mb-[6px]">Ежедневни излизания сред природата</strong>
            Планината като най-голямата ни и вдъхновяваща класна стая.
          </div>
          <div class="p-[20px] bg-[#e7e8f9] rounded-[16px] border-l-[4px] border-[#6368AC]">
            <strong class="block text-[#6368AC] font-bold mb-[6px]">Творчески ателиета и отборни мисии</strong>
            Време за изразяване на личността, изграждане на общност и екипна работа.
          </div>
          <div class="p-[20px] bg-[#e7e8f9] rounded-[16px] border-l-[4px] border-[#6368AC]">
            <strong class="block text-[#6368AC] font-bold mb-[6px]">Свобода, движение и смях</strong>
            Истински летни игри в двора ни и споделени мигове на чист въздух.
          </div>
        </div>
      </div>
    </section>

    <!-- WEEKS -->
    <section id="sedmici" class="py-[80px] bg-[#e7e8f9] relative overflow-hidden">
      <div class="absolute top-[-60px] right-[-60px] w-[320px] h-[320px] rounded-full bg-[rgba(99,104,172,0.06)] pointer-events-none"></div>
      <div class="absolute bottom-[-80px] left-[-40px] w-[260px] h-[260px] rounded-full bg-[rgba(202,218,43,0.07)] pointer-events-none"></div>
      <div class="container mx-auto px-6 max-w-[1200px] relative z-[1]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">11 тематични седмици</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-[#6368AC]">Всяка седмица е нова лаборатория</h2>
        <div class="w-14 h-1 bg-[#CADA2B] rounded-full mb-[16px]"></div>
        <p class="text-[18px] text-[#555569] max-w-[720px] mb-[52px] leading-[1.7]">Записванията са на седмична база – детето може да дойде за една, за пет или за всички 11 седмици. Темите не се повтарят.</p>
        <div class="grid grid-cols-1 gap-[16px] sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="week in weeks" :key="week.num"
            class="group bg-white rounded-[22px] p-[28px_24px] relative overflow-hidden hover:translate-y-[-4px] hover:shadow-[0_16px_48px_rgba(99,104,172,0.18)] transition-all duration-200 shadow-[0_4px_16px_rgba(99,104,172,0.08)] border border-[#ecedf8]">
            <!-- Faded watermark number -->
            <div class="absolute top-[-10px] right-[10px] font-black text-[#6368AC] opacity-[0.055] text-[88px] leading-none select-none pointer-events-none">{{ week.num }}</div>
            <!-- Icon + date pill -->
            <div class="flex items-start justify-between mb-[18px]">
              <div class="w-[48px] h-[48px] bg-[#e7e8f9] group-hover:bg-[#d8daf5] rounded-[14px] flex items-center justify-center text-[24px] transition-colors duration-200 shrink-0">{{ week.icon }}</div>
              <div class="bg-[#f0f4e6] text-[#5a7020] text-[11px] font-bold px-[10px] py-[4px] rounded-full tracking-[0.3px] mt-[2px]">{{ week.dates }}</div>
            </div>
            <!-- Title -->
            <div class="text-[18px] font-extrabold text-[#2A2A40] mb-[10px] leading-[1.3]">{{ week.title }}</div>
            <!-- Theme pill -->
            <div class="inline-block bg-[#e7e8f9] text-[#6368AC] text-[12px] font-semibold px-[10px] py-[3px] rounded-full">{{ week.theme }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- INCLUDES -->
    <section class="py-[80px] bg-[#f0f4e6]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Цената включва</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-[#6368AC]">Какво получавате за 150 €/седмица</h2>
        <div class="w-14 h-1 bg-[#CADA2B] rounded-full mb-[48px]" />
        <div class="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">👨‍🏫</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Опитни ментори</h3>
            <p class="text-[14px] text-[#555569]">На децата ще се грижат учители от екипа на Експлораториум – тези, които работят с деца от години.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🎨</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Лабораторни материали</h3>
            <p class="text-[14px] text-[#555569]">Всички консумативи за експерименти, занаяти и творчески ателиета.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🧪</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Кулинарна лаборатория</h3>
            <p class="text-[14px] text-[#555569]">Продукти за готварските дни в четвъртък – приложна химия с детски ръце.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">⛰️</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Излизания на Витоша</h3>
            <p class="text-[14px] text-[#555569]">Ежедневен излет с придружители, разрешителни за резерватите включени.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT TO BRING -->
    <section class="py-[80px] bg-[#e7e8f9]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Практическа информация</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[24px] text-[#6368AC]">Какво да носи детето</h2>
        <p class="text-[18px] text-[#555569] max-w-[720px] mb-[48px]">Малка раница, удобни обувки и любопитство – това е всичко. Подробният списък по дни идва при записване.</p>
        <div class="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🥪</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Храна за деня</h3>
            <p class="text-[14px] text-[#555569]">Сандвич за обяд, плодове или сладко за следобед, бутилка вода. Подготвени от вкъщи.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🎒</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Малка раница</h3>
            <p class="text-[14px] text-[#555569]">Удобна за носене през деня. Резервна тениска, шапка с козирка, слънцезащитен крем.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">👟</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Здрави обувки</h3>
            <p class="text-[14px] text-[#555569]">Маратонки за горските пътеки. На водните партита в петък – бански костюм и хавлия.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🔍</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Любопитство</h3>
            <p class="text-[14px] text-[#555569]">Без телефони и таблети – само готовност за приключение и въпроси „Защо?".</p>
          </div>
        </div>
      </div>
    </section>

    <!-- RITUALS -->
    <section class="py-[80px] bg-gradient-to-br from-[#6368AC] to-[#4a4ca3] text-white relative overflow-hidden">
      <!-- Decorative blobs -->
      <div class="absolute top-[-80px] left-[-60px] w-[340px] h-[340px] rounded-full bg-[rgba(255,255,255,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full bg-[rgba(202,218,43,0.07)] pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-[1200px] relative z-[1]">
        <div class="text-[#CADA2B] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Всяка седмица</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-white">Два ритуала, които децата чакат</h2>
        <p class="text-[18px] text-[rgba(255,255,255,0.8)] max-w-[680px] mb-[52px] leading-[1.7]">Освен тематичните експерименти и излизанията на Витоша, всяка седмица има два постоянни момента, които станаха традиция.</p>

        <div class="grid grid-cols-1 gap-[24px] lg:grid-cols-2">

          <!-- Кулинарна лаборатория -->
          <div class="group relative rounded-[24px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.3)] cursor-default">
            <img src="/stock/ritual-cooking.jpg" alt="Кулинарна лаборатория в Експлораториум – деца около маса с продукти"
              class="w-full h-[380px] object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out">
            <!-- Gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(25,22,65,0.95)] via-[rgba(25,22,65,0.35)] to-transparent"></div>
            <!-- Day badge -->
            <div class="absolute top-[20px] left-[20px] flex items-center gap-[8px]">
              <div class="bg-[#CADA2B] text-[#3a3f70] text-[11px] font-black uppercase tracking-[1.5px] px-[13px] py-[5px] rounded-full shadow-[0_4px_12px_rgba(202,218,43,0.4)]">Четвъртък</div>
            </div>
            <!-- Emoji badge top-right -->
            <div class="absolute top-[18px] right-[20px] w-[40px] h-[40px] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-full flex items-center justify-center text-[20px] border border-[rgba(255,255,255,0.2)]">🍳</div>
            <!-- Text content -->
            <div class="absolute bottom-0 left-0 right-0 p-[28px_28px_32px]">
              <div class="text-[24px] font-extrabold text-white mb-[8px] leading-[1.2]">Кулинарна лаборатория</div>
              <div class="text-[15px] text-[rgba(255,255,255,0.85)] leading-[1.6]">Не просто готвене — приложна химия. Децата разбират защо тестото бухва, защо карамелът кафенее, защо лимонът пощипва. После го изяждат.</div>
            </div>
          </div>

          <!-- Водно парти -->
          <div class="group relative rounded-[24px] overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.3)] cursor-default">
            <img src="/stock/ritual-water.jpg" alt="Водно парти в края на седмицата"
              class="w-full h-[380px] object-cover group-hover:scale-[1.04] transition-transform duration-500 ease-out">
            <div class="absolute inset-0 bg-gradient-to-t from-[rgba(25,22,65,0.95)] via-[rgba(25,22,65,0.35)] to-transparent"></div>
            <div class="absolute top-[20px] left-[20px]">
              <div class="bg-[#CADA2B] text-[#3a3f70] text-[11px] font-black uppercase tracking-[1.5px] px-[13px] py-[5px] rounded-full shadow-[0_4px_12px_rgba(202,218,43,0.4)]">Петък</div>
            </div>
            <div class="absolute top-[18px] right-[20px] w-[40px] h-[40px] bg-[rgba(255,255,255,0.15)] backdrop-blur-sm rounded-full flex items-center justify-center text-[20px] border border-[rgba(255,255,255,0.2)]">💧</div>
            <div class="absolute bottom-0 left-0 right-0 p-[28px_28px_32px]">
              <div class="text-[24px] font-extrabold text-white mb-[8px] leading-[1.2]">Водно парти</div>
              <div class="text-[15px] text-[rgba(255,255,255,0.85)] leading-[1.6]">Водни предизвикателства, експерименти с плаване и потъване, и чиста радост. Седмицата завършва мокро и щастливо.</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- TESTIMONIALS -->
    <section class="py-[80px] bg-[#fdf8ec]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Мнения на семейства</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[48px] text-[#6368AC]">Какво казват нашите родители</h2>
        <div class="max-w-[780px] mx-auto flex flex-col gap-[24px]">
          <div class="bg-white p-[40px_36px] rounded-[24px] border-l-[6px] border-[#6368AC] shadow-[0_12px_40px_rgba(94,96,206,0.08)]">
            <div class="font-lobster text-[56px] leading-none text-[#6368AC] opacity-25 mb-[-8px]">"</div>
            <p class="text-[18px] leading-[1.65] italic text-[#2A2A40] mb-[22px]">Бъдете все така всеотдайни! Когато преди две години моите момичета бяха за кратко през лятото при вас, сутринта нямаха търпение за следващите приключения!</p>
            <div class="flex items-center gap-[14px] border-t border-[#e7e8f9] pt-[18px]">
              <div class="w-[44px] h-[44px] bg-[#e7e8f9] rounded-full flex items-center justify-center text-[16px] font-bold text-[#6368AC]">СУ</div>
              <div>
                <div class="font-bold text-[15px] text-[#2A2A40]">Савина Урдева</div>
                <div class="text-[13px] text-[#555569]">майка на две момичета</div>
              </div>
            </div>
          </div>
          <div class="bg-white p-[40px_36px] rounded-[24px] border-l-[6px] border-[#6368AC] shadow-[0_12px_40px_rgba(94,96,206,0.08)]">
            <div class="font-lobster text-[56px] leading-none text-[#6368AC] opacity-25 mb-[-8px]">"</div>
            <p class="text-[18px] leading-[1.65] italic text-[#2A2A40] mb-[22px]">Избрах Лятната програма на Експлораториум и за двете ми деца заради приятелската атмосфера и възможността децата да изкарват повече време на чист въздух в полите на Витоша. Учителите успяха да стимулират любопитството на децата с научни експерименти, разходки сред природата и много други интересни активности, за което им благодаря от сърце.</p>
            <div class="flex items-center gap-[14px] border-t border-[#e7e8f9] pt-[18px]">
              <div class="w-[44px] h-[44px] bg-[#e7e8f9] rounded-full flex items-center justify-center text-[16px] font-bold text-[#6368AC]">М</div>
              <div>
                <div class="font-bold text-[15px] text-[#2A2A40]">Михаела</div>
                <div class="text-[13px] text-[#555569]">майка на Андерс (9 г.) и Линнеа (6 г.)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FORM -->
    <section id="zapis" class="py-[80px] bg-gradient-to-br from-[#6368AC] to-[#4a4ca3] text-white">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#CADA2B] font-semibold text-[14px] uppercase tracking-[2px] mb-[12px]">Запишете място</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[24px] text-white">Запазете място за вашето дете</h2>
        <p class="text-[18px] text-[rgba(255,255,255,0.85)] max-w-[720px] mb-[40px]">Местата са ограничени. Попълнете формуляра и ще се свържем с вас в рамките на 24 часа.</p>
        <div class="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-[28px] items-start">

          <!-- Form card -->
          <div class="bg-[rgba(255,255,255,0.11)] backdrop-blur-sm border border-[rgba(255,255,255,0.22)] p-[36px_28px] rounded-[28px] shadow-[0_12px_40px_rgba(0,0,0,0.15)] lg:p-[48px_40px]">
            <div v-if="submitted" class="flex flex-col items-center text-center py-8 gap-4">
              <div class="w-[108px] h-[108px] rounded-full bg-[rgba(202,218,43,0.15)] flex items-center justify-center">
                <svg class="w-[60px] h-[60px] text-[#CADA2B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 class="text-white text-[22px] font-bold">Изпратено успешно!</h3>
              <p class="text-[rgba(255,255,255,0.75)] text-[16px]">Ще се свържем с вас в рамките на 24 часа.</p>
            </div>
            <form v-else @submit.prevent="submitForm" class="flex flex-col gap-[16px]">
              <div class="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                <div>
                  <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Вашето име <span class="text-[#CADA2B]">*</span></label>
                  <input v-model="form.parentName" type="text" required placeholder="Име и фамилия"
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150 font-inter" />
                </div>
                <div>
                  <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Телефон <span class="text-[#CADA2B]">*</span></label>
                  <input v-model="form.phone" type="tel" required placeholder="0888 123 456"
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150 font-inter" />
                </div>
              </div>
              <div class="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                <div>
                  <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Възраст на детето <span class="text-[#CADA2B]">*</span></label>
                  <select v-model="form.childAge" required
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150 font-inter">
                    <option value="" class="text-[#2A2A40]">Избери възраст</option>
                    <option value="5" class="text-[#2A2A40]">5 години</option>
                    <option value="6" class="text-[#2A2A40]">6 години</option>
                    <option value="7" class="text-[#2A2A40]">7 години</option>
                    <option value="8" class="text-[#2A2A40]">8 години</option>
                    <option value="9" class="text-[#2A2A40]">9 години</option>
                    <option value="10" class="text-[#2A2A40]">10 години</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Желана седмица</label>
                  <select v-model="form.week"
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150 font-inter">
                    <option value="" class="text-[#2A2A40]">Още не съм решил/а</option>
                    <option value="1" class="text-[#2A2A40]">01: Биологична машина (15-19.06)</option>
                    <option value="2" class="text-[#2A2A40]">02: Химия на чувствата (22-26.06)</option>
                    <option value="3" class="text-[#2A2A40]">03: Зелени детективи (29.06-03.07)</option>
                    <option value="4" class="text-[#2A2A40]">04: Нашите съседи (06-10.07)</option>
                    <option value="5" class="text-[#2A2A40]">05: Архитекти на общността (13-17.07)</option>
                    <option value="6" class="text-[#2A2A40]">06: Етно-лаборатория (20-24.07)</option>
                    <option value="7" class="text-[#2A2A40]">07: Лаборатория за илюзии (27-31.07)</option>
                    <option value="8" class="text-[#2A2A40]">08: Еко-пазители (03-07.08)</option>
                    <option value="9" class="text-[#2A2A40]">09: Геометрия на красотата (10-14.08)</option>
                    <option value="10" class="text-[#2A2A40]">10: Физика на звука (17-21.08)</option>
                    <option value="11" class="text-[#2A2A40]">11: Картографи на неизвестното (24-28.08)</option>
                    <option value="multiple" class="text-[#2A2A40]">Повече от една седмица</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Съобщение (по желание)</label>
                <textarea v-model="form.message" rows="3" placeholder="Въпроси, специфики на детето, или нещо което да знаем..."
                  class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150 resize-none font-inter" />
              </div>
              <p v-if="formError" class="text-red-400 text-[14px]">{{ formError }}</p>
              <button type="submit" :disabled="submitting"
                class="w-full py-[14px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0 font-inter">
                {{ submitting ? 'Изпращане...' : 'Изпрати заявка' }}
              </button>
              <p class="text-center text-[13px] text-[rgba(255,255,255,0.6)]">Ще се свържем в рамките на 24 часа на посочения телефон.</p>
            </form>
          </div>

          <!-- Contact cards -->
          <div class="flex flex-col gap-[14px]">
            <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-1">Или директно</div>
            <h3 class="text-white font-extrabold text-[clamp(1.6rem,2.5vw,2.2rem)] leading-[1.15] mb-4">Свържете се с нас</h3>
            <a href="tel:+359879180700" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">📞</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-white opacity-60 uppercase tracking-[1px] mb-[3px]">Телефон</div>
                <div class="font-bold text-[#CADA2B] text-[18px]">0879 180 700</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
            <a href="mailto:exploratorium.camp@abv.bg" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">📧</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-white opacity-60 uppercase tracking-[1px] mb-[3px]">Имейл</div>
                <div class="font-bold text-[#CADA2B] text-[15px] sm:text-[17px]">exploratorium.camp<br class="sm:hidden">@abv.bg</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
            <a href="https://www.facebook.com/exploratoriumsummer" target="_blank" rel="noopener" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">👍</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-white opacity-60 uppercase tracking-[1px] mb-[3px]">Facebook</div>
                <div class="font-bold text-[#CADA2B] text-[16px] sm:text-[18px]">@exploratorium<br class="sm:hidden">summer</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
            <a href="https://maps.app.goo.gl/LwYPiCAErdjCQ9RA7" target="_blank" rel="noopener" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">📍</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-white opacity-60 uppercase tracking-[1px] mb-[3px]">Адрес</div>
                <div class="font-bold text-[#CADA2B] text-[18px] leading-[1.4]">кв. Драгалевци, ул. Мавровец 3</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
useHead({
  title: 'Лятно училище | Exploratorium School',
  meta: [
    { name: 'description', content: 'Лято в Експлораториум – научна лаборатория и приключения на Витоша за деца 5-10 г. 11 тематични седмици. 150€/седмица.' },
    { property: 'og:title', content: 'Лято в Експлораториум · 5-10 г. · Драгалевци' },
    { property: 'og:description', content: 'Лято в Експлораториум – научна лаборатория и приключения на Витоша за деца 5-10 г. 11 тематични седмици. 150€/седмица.' },
    { property: 'og:image', content: 'https://exploratorium.bg/stock/summerhero.jpg' },
    { property: 'og:url', content: 'https://exploratorium.bg/summer-activities/summer-school' },
  ],
  link: [{ rel: 'canonical', href: 'https://exploratorium.bg/summer-activities/summer-school' }],
})

const weeks = [
  { num: '01', icon: '🧬', title: 'Биологична машина', theme: 'Тялото и сетивата', dates: '15 – 19 юни' },
  { num: '02', icon: '🧪', title: 'Химия на чувствата', theme: 'Емоционална интелигентност', dates: '22 – 26 юни' },
  { num: '03', icon: '🌿', title: 'Зелени детективи', theme: 'Растения и почва', dates: '29 юни – 3 юли' },
  { num: '04', icon: '🐾', title: 'Нашите съседи', theme: 'Животните на Витоша', dates: '6 – 10 юли' },
  { num: '05', icon: '🏗️', title: 'Архитекти на общността', theme: 'Хората и занаятите', dates: '13 – 17 юли' },
  { num: '06', icon: '🌍', title: 'Етно-лаборатория', theme: 'Културите по света', dates: '20 – 24 юли' },
  { num: '07', icon: '🧠', title: 'Лаборатория за илюзии', theme: 'Мозък и въображение', dates: '27 – 31 юли' },
  { num: '08', icon: '♻️', title: 'Еко-пазители', theme: 'Грижа за планетата', dates: '3 – 7 август' },
  { num: '09', icon: '🎨', title: 'Геометрия на красотата', theme: 'Цветове и форми', dates: '10 – 14 август' },
  { num: '10', icon: '🎵', title: 'Физика на звука', theme: 'Музика и вълни', dates: '17 – 21 август' },
  { num: '11', icon: '🗺️', title: 'Картографи на неизвестното', theme: 'Ориентиране и откривателство', dates: '24 – 28 август' },
]

const form = reactive({ parentName: '', phone: '', childAge: '', week: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)
const formError = ref(null)

async function submitForm() {
  submitting.value = true
  formError.value = null
  try {
    const res = await fetch('https://formspree.io/f/mvznogbb', {
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
