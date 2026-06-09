<template>
  <div class="font-inter text-[#2A2A40] bg-[#EEF4F9]">

    <!-- HERO -->
    <section class="bg-gradient-to-br from-[#6368AC] to-[#9A99CC] text-white pt-[250px] pb-[80px] relative overflow-hidden lg:pt-[270px] lg:pb-[100px]">
      <div class="absolute bottom-[-60px] left-[-60px] right-[-60px] h-[120px] bg-[#EEF4F9] rounded-[50%] z-[1]"></div>
      <div class="container mx-auto px-6 relative z-[2] max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div class="animate-fade-down">
            <p class="text-[14px] font-semibold tracking-[2px] text-[#CADA2B] mb-[16px] uppercase">Скаутско училище · Юли 2026</p>
            <h1 class="text-[clamp(30px,4.5vw,52px)] leading-[1.1] font-black text-[#CADA2B] mb-[22px]">
              <span class="text-white">На 9 г. учи това, което</span> на 14 г. ще му трябва
            </h1>
            <p class="text-[clamp(16px,1.5vw,19px)] opacity-95 mb-[36px]">
              Палене на огън. Ориентиране без GPS. Възли. Първа помощ. Реални умения, водени от планински инструктор и биолог.
            </p>
            <div class="flex flex-wrap gap-[16px]">
              <a href="#cta" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s]">Запишете се</a>
              <a href="#program" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200">Виж програмата</a>
            </div>
          </div>
          <div class="relative">
            <img src="/stock/hero.jpg" alt="Деца в природата по време на скаутско училище на Витоша" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.3)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">6 – 17 юли · 200 €/седмица</div>
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
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">Деца 8–12 години<br>с приключенски дух</div>
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

    <!-- 5 SKILLS -->
    <section class="bg-[#FFF9E6] py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[12px]">5 дни · 5 умения</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-[#6368AC]">Които не се учат в училище</h2>
        <div class="w-14 h-1 bg-[#CADA2B] rounded-full mb-[12px]" />
        <p class="text-[18px] text-[#555569] max-w-[720px] mb-[48px] leading-[1.7]">Реални умения, водени от планински инструктор и биолог-изследовател. От 8:30 до 17:30, без нощувки. Прибира се вечер у дома с приятна умора, нови истории и спомени, които пази с години.</p>
        <div class="grid grid-cols-1 gap-[20px] sm:grid-cols-2 lg:grid-cols-5">
          <div v-for="skill in skills" :key="skill.day" class="bg-white p-[24px_20px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="inline-block bg-[#6368AC] text-white text-[11px] font-bold py-[3px] px-[10px] rounded-full mb-[14px] tracking-[1px] uppercase">{{ skill.day }}</div>
            <div class="text-[18px] font-bold text-[#2A2A40] mb-[8px]">{{ skill.title }}</div>
            <div class="text-[14px] text-[#555569] leading-[1.5]">{{ skill.text }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WEEKS -->
    <section id="program" class="py-[80px] bg-gradient-to-br from-[#6368AC] to-[#4a4ca3] text-white relative overflow-hidden">
      <!-- Decorative background blobs -->
      <div class="absolute top-[-80px] right-[-80px] w-[360px] h-[360px] rounded-full bg-[rgba(255,255,255,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-60px] left-[-60px] w-[280px] h-[280px] rounded-full bg-[rgba(202,218,43,0.06)] pointer-events-none"></div>

      <div class="container mx-auto px-6 max-w-[1200px] relative z-[1]">
        <div class="text-[#CADA2B] font-semibold text-[14px] uppercase tracking-[2px] mb-[12px]">Две седмици · Две теми</div>
        <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.2] font-bold mb-[16px]">Можеш да избереш едната или и двете</h2>
        <p class="text-[rgba(255,255,255,0.8)] text-[17px] max-w-[680px] mb-[52px] leading-[1.7]">Първата седмица слага основите. Втората ги прилага в реални предизвикателни ситуации. Темите не се припокриват — много деца идват и за двете.</p>

        <!-- Week 1 block -->
        <div class="rounded-[24px] p-[28px_24px] mb-[20px] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-sm lg:p-[36px]">
          <div class="flex flex-wrap justify-between items-center gap-3 mb-[6px]">
            <div class="flex items-center gap-3">
              <div class="w-[8px] h-[8px] rounded-full bg-[#CADA2B] shadow-[0_0_8px_rgba(202,218,43,0.7)]"></div>
              <div class="text-[21px] font-extrabold lg:text-[24px]">Седмица 1 — Основи на следотърсача</div>
            </div>
            <div class="bg-[rgba(202,218,43,0.15)] text-[#CADA2B] border border-[rgba(202,218,43,0.3)] text-[13px] font-bold tracking-[1px] uppercase px-[14px] py-[5px] rounded-full whitespace-nowrap">6 – 10 Юли</div>
          </div>
          <div class="text-[rgba(255,255,255,0.65)] text-[14px] mb-[24px] ml-[20px]">Изграждане на лагера, екипна работа и познаване на гората.</div>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[10px]">
            <div v-for="day in week1" :key="day.num"
              class="group bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.11)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(202,218,43,0.4)] p-[16px] rounded-[14px] transition-all duration-200 cursor-default">
              <div class="flex items-center gap-[8px] mb-[10px]">
                <div class="w-[26px] h-[26px] rounded-full bg-[rgba(202,218,43,0.15)] border border-[rgba(202,218,43,0.3)] flex items-center justify-center text-[#CADA2B] text-[11px] font-black shrink-0">{{ day.num }}</div>
                <div class="text-[10px] text-[rgba(255,255,255,0.45)] font-semibold uppercase tracking-[0.8px]">{{ day.date.split('—')[1]?.trim() || day.date }}</div>
              </div>
              <div class="text-[14px] font-bold text-white leading-[1.3] mb-[6px]">{{ day.title }}</div>
              <div class="text-[12px] text-[rgba(255,255,255,0.6)] leading-[1.45]">{{ day.desc }}</div>
            </div>
          </div>
        </div>

        <!-- Connector -->
        <div class="flex items-center gap-4 my-[4px] px-[4px]">
          <div class="flex-1 h-px bg-[rgba(255,255,255,0.1)]"></div>
          <div class="flex items-center gap-2 text-[12px] font-semibold text-[rgba(255,255,255,0.45)] uppercase tracking-[1px]">
            <span>↓</span><span>Надгражда</span><span>↓</span>
          </div>
          <div class="flex-1 h-px bg-[rgba(255,255,255,0.1)]"></div>
        </div>

        <!-- Week 2 block -->
        <div class="rounded-[24px] p-[28px_24px] mt-[20px] bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.12)] shadow-[inset_0_1px_0_rgba(255,255,255,0.15)] backdrop-blur-sm lg:p-[36px]">
          <div class="flex flex-wrap justify-between items-center gap-3 mb-[6px]">
            <div class="flex items-center gap-3">
              <div class="w-[8px] h-[8px] rounded-full bg-[#CADA2B] shadow-[0_0_8px_rgba(202,218,43,0.7)]"></div>
              <div class="text-[21px] font-extrabold lg:text-[24px]">Седмица 2 — Герои на планината</div>
            </div>
            <div class="bg-[rgba(202,218,43,0.15)] text-[#CADA2B] border border-[rgba(202,218,43,0.3)] text-[13px] font-bold tracking-[1px] uppercase px-[14px] py-[5px] rounded-full whitespace-nowrap">13 – 17 Юли</div>
          </div>
          <div class="text-[rgba(255,255,255,0.65)] text-[14px] mb-[24px] ml-[20px]">Приложни умения за оцеляване, висока динамика и спасителни мисии.</div>
          <div class="grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-[10px]">
            <div v-for="day in week2" :key="day.num"
              class="group bg-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.11)] border border-[rgba(255,255,255,0.08)] hover:border-[rgba(202,218,43,0.4)] p-[16px] rounded-[14px] transition-all duration-200 cursor-default">
              <div class="flex items-center gap-[8px] mb-[10px]">
                <div class="w-[26px] h-[26px] rounded-full bg-[rgba(202,218,43,0.15)] border border-[rgba(202,218,43,0.3)] flex items-center justify-center text-[#CADA2B] text-[11px] font-black shrink-0">{{ day.num }}</div>
                <div class="text-[10px] text-[rgba(255,255,255,0.45)] font-semibold uppercase tracking-[0.8px]">{{ day.date.split('—')[1]?.trim() || day.date }}</div>
              </div>
              <div class="text-[14px] font-bold text-white leading-[1.3] mb-[6px]">{{ day.title }}</div>
              <div class="text-[12px] text-[rgba(255,255,255,0.6)] leading-[1.45]">{{ day.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- INCLUDES -->
    <section class="py-[80px] bg-[#f0f4e6]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Цената включва</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-[#6368AC]">Какво получавате за 200 €/седмица</h2>
        <div class="w-14 h-1 bg-[#CADA2B] rounded-full mb-[48px]" />
        <div class="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🧭</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Двама ментори</h3>
            <p class="text-[14px] text-[#555569]">Биолог-изследовател и планински инструктор с професионален опит на терен.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">⛺️</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Цялата екипировка</h3>
            <p class="text-[14px] text-[#555569]">Въжета, компаси, карти, инструменти за палене на огън, материали за първа помощ.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🧪</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Кулинарна лаборатория</h3>
            <p class="text-[14px] text-[#555569]">Продукти за дните с готвене на жив огън — „горски чай", „горска чорба".</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">⛰️</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Достъп до резервата</h3>
            <p class="text-[14px] text-[#555569]">Разрешителни за движение в Природен парк Витоша включени.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- WHAT TO BRING -->
    <section class="py-[80px] bg-[#e7e8f9]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[16px]">Практическа информация</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[24px] text-[#6368AC]">Какво да носи детето</h2>
        <p class="text-[18px] text-[#555569] max-w-[720px] mb-[48px]">Раница, здрави обувки, удобни дрехи. Подробен списък изпращаме при записване.</p>
        <div class="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🥪</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Храна за деня</h3>
            <p class="text-[14px] text-[#555569]">Сандвич за обяд, плодове или сладко за следобед, бутилка вода. Подготвени от вкъщи.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🎒</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Раница и облекло</h3>
            <p class="text-[14px] text-[#555569]">Дълъг панталон, дъждобран/яке, резервна тениска, шапка с козирка, слънцезащитен крем.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">👟</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Здрави обувки</h3>
            <p class="text-[14px] text-[#555569]">Маратонки или ниски планински обувки. Не сандали — теренът е на места каменист.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🔍</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Готовност</h3>
            <p class="text-[14px] text-[#555569]">Без телефони и таблети. Само приключенски дух и желание да изцапат ръцете си.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- TEAM -->
    <section class="py-[80px] bg-white">
      <div class="container mx-auto px-6 max-w-[1200px] text-center">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[12px]">Менторите</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-[#6368AC]">Кой ще води детето в гората</h2>
        <p class="text-[18px] text-[#555569] max-w-[580px] mx-auto mb-[56px] leading-[1.7]">Тандем от двама специалисти — биолог-изследовател и планински инструктор. „Не мога" се превръща в „Знам как".</p>

        <div class="flex flex-col gap-[28px] items-center sm:flex-row sm:justify-center sm:items-stretch sm:gap-[28px] max-w-[760px] mx-auto">

          <!-- Буки -->
          <div class="group relative flex flex-col items-center bg-white rounded-[28px] p-[40px_32px_36px] border border-[#e8eaf6] shadow-[0_8px_32px_rgba(99,104,172,0.10)] hover:shadow-[0_16px_48px_rgba(99,104,172,0.18)] hover:translate-y-[-4px] transition-all duration-300 w-full sm:max-w-[340px] overflow-hidden">
            <!-- Accent blob behind photo -->
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[120px] bg-gradient-to-b from-[#e7e8f9] to-transparent rounded-b-full opacity-60 pointer-events-none"></div>
            <!-- Photo -->
            <div class="relative mb-[20px] z-[1]">
              <div class="w-[148px] h-[148px] rounded-full overflow-hidden ring-[4px] ring-white shadow-[0_8px_28px_rgba(99,104,172,0.22)]">
                <img src="/stock/buki-final.jpg" alt="Буки – биолог-изследовател" class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500">
              </div>
              <div class="absolute bottom-[-2px] right-[-2px] w-[36px] h-[36px] bg-[#CADA2B] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(202,218,43,0.45)] text-[18px]">🌿</div>
            </div>
            <div class="text-[22px] font-extrabold text-[#2A2A40] mb-[4px] z-[1]">Буки</div>
            <div class="inline-block bg-[#e7e8f9] text-[#6368AC] text-[12px] font-semibold uppercase tracking-[1px] px-[12px] py-[4px] rounded-full mb-[16px] z-[1]">Биолог-изследовател</div>
            <p class="text-[14px] text-[#555569] leading-[1.7] z-[1]">Дългогодишен преподавател в Експлораториум. Познава Витоша като ръката си — скалите, растенията, животните, правилата на планината. Запалва интереса към откривателството.</p>
          </div>

          <!-- Иво -->
          <div class="group relative flex flex-col items-center bg-white rounded-[28px] p-[40px_32px_36px] border border-[#e8eaf6] shadow-[0_8px_32px_rgba(99,104,172,0.10)] hover:shadow-[0_16px_48px_rgba(99,104,172,0.18)] hover:translate-y-[-4px] transition-all duration-300 w-full sm:max-w-[340px] overflow-hidden">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[200px] h-[120px] bg-gradient-to-b from-[#e7e8f9] to-transparent rounded-b-full opacity-60 pointer-events-none"></div>
            <div class="relative mb-[20px] z-[1]">
              <div class="w-[148px] h-[148px] rounded-full overflow-hidden ring-[4px] ring-white shadow-[0_8px_28px_rgba(99,104,172,0.22)]">
                <img src="/stock/ivo.jpg" alt="Иво – планински инструктор" class="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500">
              </div>
              <div class="absolute bottom-[-2px] right-[-2px] w-[36px] h-[36px] bg-[#CADA2B] rounded-full flex items-center justify-center shadow-[0_4px_12px_rgba(202,218,43,0.45)] text-[18px]">⛰️</div>
            </div>
            <div class="text-[22px] font-extrabold text-[#2A2A40] mb-[4px] z-[1]">Иво</div>
            <div class="inline-block bg-[#e7e8f9] text-[#6368AC] text-[12px] font-semibold uppercase tracking-[1px] px-[12px] py-[4px] rounded-full mb-[16px] z-[1]">Планински инструктор</div>
            <p class="text-[14px] text-[#555569] leading-[1.7] z-[1]">Сертифициран планински водач с дългогодишен опит в работа с деца. Специалист по въжени техники, ориентиране и безопасност в планинска среда.</p>
          </div>

        </div>
      </div>
    </section>

    <!-- OUTCOMES -->
    <section class="py-[80px] bg-[#fdf8ec]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[12px]">После от седмицата</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[16px] text-[#6368AC]">Не сувенири. Умения, които остават.</h2>
        <p class="text-[18px] text-[#555569] max-w-[720px] mb-[48px] leading-[1.7]">Лагерът свършва в петък. Но това, което детето вече знае — остава с него.</p>
        <div class="grid grid-cols-1 gap-[24px] sm:grid-cols-2 lg:grid-cols-4">
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🧭</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Увереност в природата</h3>
            <p class="text-[14px] text-[#555569]">Детето знае какво да прави, ако се изгуби в гората. Кой поток да хване. Как да си построи заслон. Как да оцелее до сутринта.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🔥</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Реални умения</h3>
            <p class="text-[14px] text-[#555569]">Палене на огън без запалка. Скаутски възли. Първа помощ при наранявне. Ориентиране без телефон. Неща, които повечето възрастни не знаят.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🤝</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Връзка с екипа</h3>
            <p class="text-[14px] text-[#555569]">Пет дни в гора с други деца изграждат различен тип приятелство. Не виртуално. Не през игра. Реално, проверено в практика.</p>
          </div>
          <div class="p-[24px] bg-white rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <div class="w-[48px] h-[48px] bg-[#e7e8f9] rounded-[12px] flex items-center justify-center text-[24px] mb-[16px]">🏕️</div>
            <h3 class="text-[17px] font-bold mb-[6px]">Различни истории</h3>
            <p class="text-[14px] text-[#555569]">Когато училището попита „Как мина лятото?" — детето има какво да разказва. Не „гледах телефон". А „преминах въжен тролей и паля огън на Витоша".</p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-[80px] bg-[#EEF4F9]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Имате въпроси?</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Честo задавани въпроси</h2>
        </div>
        <div class="max-w-[880px] mx-auto grid grid-cols-1 gap-[16px] sm:grid-cols-2">
          <div v-for="faq in faqs" :key="faq.q" class="bg-white p-[28px_24px] rounded-[20px] shadow-[0_4px_16px_rgba(99,104,172,0.1)]">
            <h3 class="text-[#6368AC] font-bold text-[16px] mb-[10px]">{{ faq.q }}</h3>
            <p class="text-[#555569] text-[15px] leading-[1.7]">{{ faq.a }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA FORM -->
    <section id="cta" class="py-[80px] bg-gradient-to-br from-[#6368AC] to-[#4a4ca3] text-white">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-[#CADA2B] font-semibold text-[14px] uppercase tracking-[2px] mb-[12px]">Запишете място</div>
        <h2 class="text-[clamp(30px,4vw,40px)] font-extrabold leading-[1.2] mb-[24px] text-white">Запазете място за вашето дете</h2>
        <p class="text-[18px] text-[rgba(255,255,255,0.85)] max-w-[720px] mb-[40px]">20 места за всяка седмица. Попълнете формуляра и ще се свържем с вас в рамките на 24 часа.</p>
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
                  <input v-model="form.parentName" type="text" required placeholder="Иван Иванов"
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150" />
                </div>
                <div>
                  <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Телефон <span class="text-[#CADA2B]">*</span></label>
                  <input v-model="form.phone" type="tel" required placeholder="0888 123 456"
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150" />
                </div>
              </div>
              <div class="grid grid-cols-1 gap-[16px] sm:grid-cols-2">
                <div>
                  <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Възраст на детето <span class="text-[#CADA2B]">*</span></label>
                  <select v-model="form.childAge" required
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150">
                    <option value="" class="text-[#2A2A40]">Избери възраст</option>
                    <option value="8" class="text-[#2A2A40]">8 години</option>
                    <option value="9" class="text-[#2A2A40]">9 години</option>
                    <option value="10" class="text-[#2A2A40]">10 години</option>
                    <option value="11" class="text-[#2A2A40]">11 години</option>
                    <option value="12" class="text-[#2A2A40]">12 години</option>
                  </select>
                </div>
                <div>
                  <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Желана седмица</label>
                  <select v-model="form.week"
                    class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150">
                    <option value="" class="text-[#2A2A40]">Още не съм решил/а</option>
                    <option value="1" class="text-[#2A2A40]">Седмица 1 – Основи на следотърсача (6-10 юли)</option>
                    <option value="2" class="text-[#2A2A40]">Седмица 2 – Герои на планината (13-17 юли)</option>
                    <option value="both" class="text-[#2A2A40]">И двете седмици</option>
                  </select>
                </div>
              </div>
              <div>
                <label class="block text-[11px] text-white font-medium uppercase tracking-[1px] mb-[8px]">Съобщение (по желание)</label>
                <textarea v-model="form.message" rows="3" placeholder="Въпроси, специфики на детето, здравословни особености..."
                  class="w-full bg-[rgba(255,255,255,0.1)] border border-[rgba(255,255,255,0.18)] rounded-[12px] px-[16px] py-[12px] text-white placeholder-[rgba(255,255,255,0.5)] text-[15px] focus:outline-none focus:border-[rgba(202,218,43,0.7)] transition-colors duration-150 resize-none" />
              </div>
              <p v-if="formError" class="text-red-400 text-[14px]">{{ formError }}</p>
              <button type="submit" :disabled="submitting"
                class="w-full py-[14px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-150 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0">
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
            <a href="mailto:exploratorium.school@abv.bg" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">📧</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-white opacity-60 uppercase tracking-[1px] mb-[3px]">Имейл</div>
                <div class="font-bold text-[#CADA2B] text-[15px] sm:text-[17px]">exploratorium.school<br class="sm:hidden">@abv.bg</div>
              </div>
              <div class="text-[#CADA2B] text-[24px] shrink-0">↗</div>
            </a>
            <a href="https://www.facebook.com/ExploratoriumBG" target="_blank" rel="noopener" class="bg-[rgba(255,255,255,0.07)] p-[22px_28px] rounded-[16px] flex items-center gap-[20px] border border-[rgba(255,255,255,0.1)] hover:translate-x-[4px] hover:bg-[rgba(255,255,255,0.12)] transition-all duration-200">
              <div class="text-[34px]">👍</div>
              <div class="flex-1 min-w-0">
                <div class="text-[12px] text-white opacity-60 uppercase tracking-[1px] mb-[3px]">Facebook</div>
                <div class="font-bold text-[#CADA2B] text-[18px]">ExploratoriumBG</div>
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
  title: 'Скаутско училище | Exploratorium School',
  meta: [
    { name: 'description', content: 'Скаутско училище Експлораториум – палене на огън, ориентиране, въжен тролей, първа помощ. Деца 8-12 г. 6-17 юли. Драгалевци. 200€/седмица.' },
    { property: 'og:title', content: 'Скаутско училище · 8-12 г. · Юли · Драгалевци' },
    { property: 'og:description', content: 'Скаутско училище Експлораториум – палене на огън, ориентиране, въжен тролей, първа помощ. Деца 8-12 г. 6-17 юли. Драгалевци. 200€/седмица.' },
    { property: 'og:image', content: 'https://exploratorium.bg/stock/summerhero.jpg' },
    { property: 'og:url', content: 'https://exploratorium.bg/summer-activities/scout-school' },
  ],
  link: [{ rel: 'canonical', href: 'https://exploratorium.bg/summer-activities/scout-school' }],
})

const skills = [
  { day: 'Понеделник', title: 'Палене на огън', text: 'Без запалка. Огниво, праган, безопасно огнище, горски чай.' },
  { day: 'Вторник', title: 'Ориентиране', text: 'Компас, карта, знаците на природата. Мисия „Търсене на съкровищата".' },
  { day: 'Сряда', title: 'Възли и въже', text: 'Скаутски възли, въжен тролей, баланс и доверие в екипа.' },
  { day: 'Четвъртък', title: 'Първа помощ', text: 'Реакция при наранявне, импровизирана носилка, транспорт на „пострадал".' },
  { day: 'Петък', title: 'Голям преход', text: 'Прилагане на всички умения в реална мисия на Витоша.' },
]

const week1 = [
  { num: '1', title: 'Архитекти на бивака', desc: 'Избор на терен, заслони, хамаци, скаутски възли', date: 'Ден 1 — 6 юли' },
  { num: '2', title: 'Тайният език на гората', desc: 'Следи от животни, ядливи растения, прогноза за времето', date: 'Ден 2 — 7 юли' },
  { num: '3', title: 'Господари на огъня', desc: 'Безопасно огнище, добиване на огън, горски чай', date: 'Ден 3 — 8 юли' },
  { num: '4', title: 'Ориентиране и картография', desc: 'Компас, карта, мисия „Търсене на съкровище"', date: 'Ден 4 — 9 юли' },
  { num: '5', title: 'Въжено предизвикателство', desc: 'Въжена градина, тролей, баланс и доверие в екипа', date: 'Ден 5 — 10 юли' },
]

const week2 = [
  { num: '1', title: 'Живата вода', desc: 'Планински извори, филтър за пречистване на вода', date: 'Ден 1 — 13 юли' },
  { num: '2', title: 'Планинско спасяване', desc: 'Първа помощ, импровизирана носилка, транспорт', date: 'Ден 2 — 14 юли' },
  { num: '3', title: 'Оцеляване в екстремни условия', desc: '„Горска чорба" на огън, психология на оцеляването', date: 'Ден 3 — 15 юли' },
  { num: '4', title: 'Горски Ninja Warrior', desc: 'Трасе от препятствия, баланс, катерене, отборни щафети', date: 'Ден 4 — 16 юли' },
  { num: '5', title: 'Големият преход и Ритуалът', desc: 'Финален поход, отличителни знаци, приемане в общността', date: 'Ден 5 — 17 юли' },
]

const faqs = [
  { q: 'Трябва ли предишен скаутски опит?', a: 'Не. Програмата е адаптирана както за начинаещи, така и за деца с опит. Важно е детето да обича движението и да няма страх от природата.' },
  { q: 'Има ли нощувки?', a: 'Не. Скаутското училище е дневен формат — от 8:30 до 17:30, понеделник до петък. Детето се прибира всяка вечер у дома.' },
  { q: 'Може ли детето да дойде само за една седмица?', a: 'Да. Можете да изберете една от двете седмици или и двете. Те не се припокриват — втората надгражда първата, но може и да се идва само втората.' },
  { q: 'Какво се случва при лошо време?', a: 'Програмата продължава — учим се да оцеляваме при дъжд, мъгла и буря. При екстремни условия (гръмотевична буря) преминаваме в закрита база.' },
  { q: 'Какво ако детето иска да си тръгне в средата?', a: 'Свързваме се с родителите веднага. Дневният формат позволява лесна реакция — детето може да остане у дома следващия ден без да губите всичко.' },
  { q: 'Какво получава детето накрая?', a: 'Реални умения за цял живот плюс отличителния знак на „Експлораториум". И най-важното — спомени, които се разказва години напред.' },
]

const form = reactive({ parentName: '', phone: '', childAge: '', week: '', message: '' })
const submitted = ref(false)
const submitting = ref(false)
const formError = ref(null)

async function submitForm() {
  submitting.value = true
  formError.value = null
  try {
    const res = await fetch('https://formspree.io/f/xjgdvkpz', {
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
