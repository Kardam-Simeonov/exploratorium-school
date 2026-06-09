<template>
  <div class="relative 1xl:pt-[21rem] pt-64">
    <img
      class="xl:hidden block h-[22rem] w-full absolute top-0 left-0 object-cover object-center mask-fadeoff opacity-80"
      src="/stock/staff1.jpeg" />
    <header class="relative lg:pl-12 px-4">
      <img class="xl:block hidden w-[30rem] absolute 1xl:top-[17%] top-[25%] left-[80%] opacity-[0.03] -rotate-[150deg]" src="@/assets/artwork/svg/blobHouse-layer2.svg">
      <img
        class="xl:block hidden aspect-[5/4] w-[48%] ml-auto absolute left-0 -right-1 bottom-0 object-cover object-center mask-header" src="/stock/staff1.jpeg" />
      <img class="xl:block hidden 2xl:w-[28rem] w-[23rem] absolute -left-[12rem] 2xl:top-[45%] top-[60%] opacity-[0.03]" src="@/assets/artwork/svg/blobL-layer2.svg">
      <div class="xl:min-h-[28rem] min-h-[20rem] max-w-7xl mx-auto animate-fade-down">
        <div class="max-w-[35rem] relative">
          <h1 class="text-[clamp(40px,4.5vw,65px)] leading-[1.1] font-lobster drop-shadow-text text-[#CADA2B] mb-[22px]">
            За нас
          </h1>
          <p class="text-[clamp(16px,1.5vw,19px)] opacity-95 mb-[32px] text-white">
            Експлораториум Скул е алтернативно училище за деца от 4 до 14 годишна възраст. Тук ще намерите общност от изследователи, за които образованието не е заучаване на факти,
            а изграждане на характер.
          </p>
          <div class="flex flex-wrap gap-[14px]">
            <a href="#welcome" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Кои сме ние</a>
            <a href="#vision" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Нашата визия</a>
            <a href="#philosophy" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Философията ни</a>
            <a href="#history" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">История</a>
            <a href="#organization" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Организация</a>
          </div>
        </div>
      </div>
    </header>

    <!-- Decorative separator -->
    <div class="flex items-center gap-4 max-w-xs mx-auto my-24 px-4">
      <div class="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[rgba(255,255,255,0.15)]"></div>
      <div class="flex gap-[7px] items-center">
        <div class="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.2)]"></div>
        <div class="w-[8px] h-[8px] rounded-full bg-[#CADA2B] shadow-[0_0_8px_rgba(202,218,43,0.6)]"></div>
        <div class="w-[6px] h-[6px] rounded-full bg-[rgba(255,255,255,0.2)]"></div>
      </div>
      <div class="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[rgba(255,255,255,0.15)]"></div>
    </div>

    <!-- WELCOME -->
    <section id="welcome" class="relative px-4 lg:px-12 mb-32 overflow-hidden">
      <div class="absolute top-[-80px] right-[-100px] w-[420px] h-[420px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[rgba(99,104,172,0.08)] pointer-events-none"></div>
      <div class="max-w-7xl mx-auto relative z-[1]">
        <div class="max-w-3xl mx-auto text-center mb-[48px]">
          <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-[14px]">
            Добре дошли в Експлораториум
          </h2>
          <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mx-auto mb-[20px]"></div>
          <p class="text-[#CADA2B] font-semibold text-[clamp(17px,1.8vw,21px)] leading-[1.4] mb-[28px]">
            Пространство за личности, които променят света – започвайки от своя собствен.
          </p>
          <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.7] opacity-90 mb-[16px]">
            В Експлораториум вярваме, че образованието не е наливане на знания, а запалване на изследователски искри. Нашата мисия не е да създадем учени, а да подкрепим изграждането на автентични, мислещи и отговорни личности.
          </p>
          <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.7] opacity-90">
            Науките, изкуствата и технологиите при нас не са самоцел – те са вълнуващият контекст, в който децата практикуват най-важните умения за бъдещето:
          </p>
        </div>
        <div class="grid grid-cols-1 gap-[16px] lg:grid-cols-2 max-w-5xl mx-auto">
          <div class="group flex gap-[18px] bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[24px_28px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[44px] h-[44px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.2)] rounded-[12px] flex items-center justify-center text-[20px] shrink-0 group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">🔍</div>
            <div>
              <h3 class="text-white font-bold text-[clamp(15px,1.4vw,17px)] mb-[6px]">Умението да мислиш критично</h3>
              <p class="text-white opacity-65 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">Да не приемаш нищо за даденост, да анализираш и да търсиш смисъла.</p>
            </div>
          </div>
          <div class="group flex gap-[18px] bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[24px_28px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[44px] h-[44px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.2)] rounded-[12px] flex items-center justify-center text-[20px] shrink-0 group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">🧭</div>
            <div>
              <h3 class="text-white font-bold text-[clamp(15px,1.4vw,17px)] mb-[6px]">Изследователски подход</h3>
              <p class="text-white opacity-65 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">Учим децата не как да помнят факти, а как да стигат до правилния въпрос – този, който отваря нови врати.</p>
            </div>
          </div>
          <div class="group flex gap-[18px] bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[24px_28px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[44px] h-[44px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.2)] rounded-[12px] flex items-center justify-center text-[20px] shrink-0 group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">🎯</div>
            <div>
              <h3 class="text-white font-bold text-[clamp(15px,1.4vw,17px)] mb-[6px]">Фокус и автентичност</h3>
              <p class="text-white opacity-65 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">Създаваме среда, която развива способността за дълбока работа и себепознание в свят, пълен с разсейвания.</p>
            </div>
          </div>
          <div class="group flex gap-[18px] bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[24px_28px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200">
            <div class="w-[44px] h-[44px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.2)] rounded-[12px] flex items-center justify-center text-[20px] shrink-0 group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">🌱</div>
            <div>
              <h3 class="text-white font-bold text-[clamp(15px,1.4vw,17px)] mb-[6px]">Лична отговорност и автономия</h3>
              <p class="text-white opacity-65 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">Стъпка по стъпка, чрез ежедневни избори, децата се учат да извоюват своята автономия и да поемат реална отговорност за себе си и за групата.</p>
            </div>
          </div>
          <div class="group flex gap-[18px] bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[24px_28px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200 lg:col-span-2">
            <div class="w-[44px] h-[44px] bg-[rgba(202,218,43,0.1)] border border-[rgba(202,218,43,0.2)] rounded-[12px] flex items-center justify-center text-[20px] shrink-0 group-hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">🤝</div>
            <div>
              <h3 class="text-white font-bold text-[clamp(15px,1.4vw,17px)] mb-[6px]">Работеща общност</h3>
              <p class="text-white opacity-65 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">Ние не просто съжителстваме – ние създаваме мини-общество, базирано на уважение, споделеност и зачитане на чуждия глас.</p>
            </div>
          </div>
        </div>
        <div class="mt-[48px] bg-[rgba(202,218,43,0.07)] border border-[rgba(202,218,43,0.18)] rounded-[20px] p-[24px_32px] max-w-3xl mx-auto text-center">
          <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.7] opacity-85">
            Ние не подготвяме децата за изпити. Ние ги подкрепяме в пътешествието към тях самите и към света, с очите на откриватели.
          </p>
        </div>
      </div>
    </section>

    <!-- VISION -->
    <section id="vision" class="relative px-4 lg:px-12 mb-32">
      <div class="absolute top-[-60px] left-[-80px] w-[360px] h-[360px] rounded-full bg-[rgba(99,104,172,0.08)] pointer-events-none overflow-hidden"></div>
      <div class="max-w-7xl mx-auto relative z-[1]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div>
            <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Нашата визия</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-4">
              Да вдъхновим ново поколение от будни, свободни и отговорни откриватели
            </h2>
            <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mb-6"></div>
            <p class="text-white text-[clamp(16px,1.5vw,19px)] leading-[1.7] opacity-85">
              Откриватели, които подхождат към света с любопитство, задават правилните въпроси и имат смелостта да оставят положителен отпечатък след себе си.
            </p>
          </div>
          <div class="relative pb-[32px]">
            <img src="/stock/playground.jpg" alt="Експлораториум в полите на Витоша" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.25)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <div class="absolute bottom-[14px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">Училището - вдъхновител</div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMISE -->
    <section class="bg-explo-darkblue text-white py-[80px] lg:py-[100px] mb-32 relative overflow-hidden">
      <div class="absolute top-[-80px] right-[-80px] w-[380px] h-[380px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-60px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[rgba(99,104,172,0.15)] pointer-events-none"></div>
      <div class="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[rgba(202,218,43,0.02)] pointer-events-none"></div>
      <div class="max-w-4xl mx-auto px-6 relative z-[1] text-center">
        <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mx-auto mb-10"></div>
        <blockquote class="text-[clamp(22px,3vw,36px)] leading-[1.45] font-medium relative px-[48px]">
          Тук ние не просто учим.<br>Ние създаваме среда за мислене.
          <span class="absolute left-[-4px] top-[-28px] font-lobster text-[#CADA2B] text-[80px] leading-none opacity-80">"</span>
          <span class="absolute right-[-4px] bottom-[-52px] font-lobster text-[#CADA2B] text-[80px] leading-none opacity-80">"</span>
        </blockquote>
        <div class="h-[3px] w-[56px] bg-gradient-to-r from-[rgba(202,218,43,0.2)] to-[#CADA2B] rounded-full mx-auto mt-12"></div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section id="philosophy" class="relative px-4 lg:px-12 pb-32">
      <div class="absolute top-[-60px] right-[-80px] w-[340px] h-[340px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none overflow-hidden"></div>
      <div class="max-w-7xl mx-auto relative z-[1]">
        <div class="max-w-3xl mb-16">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Философията ни</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-4">
            Образование за свят, който още не съществува
          </h2>
          <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mb-6"></div>
          <p class="text-white text-[clamp(16px,1.5vw,19px)] leading-[1.6] opacity-85">
            Нашата методология не цели просто предаване на знания, а изграждане на характер. Тя се опира на три ключови стълба, които подкрепят развитието на цялостната личност.
          </p>
        </div>
        <div class="grid grid-cols-1 gap-[28px] lg:grid-cols-3 lg:items-start">
          <div class="group rounded-[24px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:translate-y-[-6px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
            <div class="relative overflow-hidden">
              <img src="/stock/photo_2026-05-14_15-00-23.jpg" alt="Деца работят заедно в общност" class="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#5957AA] via-[rgba(89,87,170,0.3)] to-transparent"></div>
            </div>
            <div class="p-[30px_28px] text-white bg-explo-darkpurple flex-1 drop-shadow">
              <div class="inline-block bg-[rgba(202,218,43,0.2)] border border-[rgba(202,218,43,0.3)] text-[#CADA2B] text-[11px] font-black uppercase tracking-[1.5px] px-[10px] py-[4px] rounded-full mb-[12px]">Стълб 01</div>
              <h3 class="text-[clamp(19px,2vw,23px)] font-bold mb-[10px] leading-[1.2] text-[#CADA2B]">Емоционална интелигентност и общност</h3>
              <p class="opacity-88 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">
                Знанието без емпатия и себепознание е непълно. Ние инвестираме толкова време в развиването на емоционална зрялост и екипната работа, колкото и в академичната подготовка. Учим децата да разбират себе си, за да могат да разбират и света около тях.
              </p>
            </div>
          </div>
          <div class="group rounded-[24px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:translate-y-[-6px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 lg:mt-[40px]">
            <div class="relative overflow-hidden">
              <img src="/stock/photo_2026-05-14_15-00-40.jpg" alt="Деца обсъждат и вземат решения заедно" class="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#5957AA] via-[rgba(89,87,170,0.3)] to-transparent"></div>
            </div>
            <div class="p-[30px_28px] text-white bg-explo-darkpurple flex-1 drop-shadow">
              <div class="inline-block bg-[rgba(202,218,43,0.2)] border border-[rgba(202,218,43,0.3)] text-[#CADA2B] text-[11px] font-black uppercase tracking-[1.5px] px-[10px] py-[4px] rounded-full mb-[12px]">Стълб 02</div>
              <h3 class="text-[clamp(19px,2vw,23px)] font-bold mb-[10px] leading-[1.2] text-[#CADA2B]">Демократичност и отговорност</h3>
              <p class="opacity-88 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">
                Нашата работеща общност се управлява с участието на самите деца. Чрез практиката на пряката демокрация те участват в създаването на правилата и решаването на ежедневните предизвикателства - учейки се да поемат реална отговорност.
              </p>
            </div>
          </div>
          <div class="group rounded-[24px] overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.22)] hover:translate-y-[-6px] hover:shadow-[0_12px_32px_rgba(0,0,0,0.35)] transition-all duration-300 flex flex-col">
            <div class="relative overflow-hidden">
              <img src="/stock/photo_2026-05-14_13-31-22.jpg" alt="Деца експериментират в природна среда" class="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-500">
              <div class="absolute inset-0 bg-gradient-to-t from-[#5957AA] via-[rgba(89,87,170,0.3)] to-transparent"></div>
            </div>
            <div class="p-[30px_28px] text-white bg-explo-darkpurple flex-1 drop-shadow">
              <div class="inline-block bg-[rgba(202,218,43,0.2)] border border-[rgba(202,218,43,0.3)] text-[#CADA2B] text-[11px] font-black uppercase tracking-[1.5px] px-[10px] py-[4px] rounded-full mb-[12px]">Стълб 03</div>
              <h3 class="text-[clamp(19px,2vw,23px)] font-bold mb-[10px] leading-[1.2] text-[#CADA2B]">Изследователски подход и смисъл</h3>
              <p class="opacity-88 text-[clamp(14px,1.2vw,15px)] leading-[1.6]">
                Провокираме децата да забавят темпото, да изследват в дълбочина и да се научат да задават правилните въпроси. Когато детето открие личния смисъл и знае защо изследва нещо, то развива учене за цял живот.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- GIVES / DOES NOT GIVE -->
    <section class="bg-explo-darkblue py-[60px] lg:py-[80px] relative overflow-hidden">
      <div class="absolute top-[-60px] right-[-60px] w-[300px] h-[300px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-[1]">
        <div class="max-w-3xl mb-[48px]">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Какво ДАВА и какво НЕ дава</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-4">
            Честен поглед към нашия подход
          </h2>
          <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full"></div>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-[20px]">

          <!-- YES column -->
          <div class="rounded-[20px] overflow-hidden border border-[rgba(202,218,43,0.25)]">
            <div class="bg-[#CADA2B] text-[#3a3f70] py-[14px] px-[24px] font-extrabold text-[13px] uppercase tracking-[1.5px] flex items-center gap-[10px]">
              <span class="w-[22px] h-[22px] rounded-full bg-[#3a3f70] flex items-center justify-center text-[#CADA2B] text-[13px] font-black shrink-0">✓</span>
              Какво ще намерите при нас
            </div>
            <div class="divide-y divide-[rgba(202,218,43,0.1)]">
              <div class="bg-[rgba(202,218,43,0.06)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[#CADA2B] shrink-0 font-bold text-[16px] mt-[1px]">✓</div>
                <p class="text-white text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="text-[#CADA2B] font-semibold">Индивидуални образователни пътеки</span> през тематични области на познанието, вместо сухи и изолирани предмети.</p>
              </div>
              <div class="bg-[rgba(202,218,43,0.06)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[#CADA2B] shrink-0 font-bold text-[16px] mt-[1px]">✓</div>
                <p class="text-white text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="text-[#CADA2B] font-semibold">Подход на проучване и проекти</span>, в които идеите и въпросите идват от самите деца.</p>
              </div>
              <div class="bg-[rgba(202,218,43,0.06)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[#CADA2B] shrink-0 font-bold text-[16px] mt-[1px]">✓</div>
                <p class="text-white text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="text-[#CADA2B] font-semibold">Съхраняване на детското любопитство</span> и развиване на учене за цял живот.</p>
              </div>
              <div class="bg-[rgba(202,218,43,0.06)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[#CADA2B] shrink-0 font-bold text-[16px] mt-[1px]">✓</div>
                <p class="text-white text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="text-[#CADA2B] font-semibold">Играта като основен елемент</span> – както свободна за социализация, така и насочена в контекста на ученето.</p>
              </div>
            </div>
          </div>

          <!-- NO column -->
          <div class="rounded-[20px] overflow-hidden border border-[rgba(255,255,255,0.1)]">
            <div class="bg-[rgba(255,255,255,0.1)] text-white py-[14px] px-[24px] font-extrabold text-[13px] uppercase tracking-[1.5px] flex items-center gap-[10px]">
              <span class="w-[22px] h-[22px] rounded-full bg-[rgba(255,255,255,0.15)] flex items-center justify-center text-[rgba(255,255,255,0.7)] text-[13px] font-black shrink-0">✗</span>
              Какво НЯМА да намерите
            </div>
            <div class="divide-y divide-[rgba(255,255,255,0.06)]">
              <div class="bg-[rgba(255,255,255,0.04)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[rgba(255,255,255,0.35)] shrink-0 font-bold text-[16px] mt-[1px]">✗</div>
                <p class="text-white opacity-68 text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="font-semibold opacity-100">Механично съдържание</span> и фиксирани учебни програми, които трябва да се „вземат" по задължение.</p>
              </div>
              <div class="bg-[rgba(255,255,255,0.04)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[rgba(255,255,255,0.35)] shrink-0 font-bold text-[16px] mt-[1px]">✗</div>
                <p class="text-white opacity-68 text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="font-semibold opacity-100">Самоцелна бързина и състезание</span>, целящи просто бързото налучкване на верния отговор.</p>
              </div>
              <div class="bg-[rgba(255,255,255,0.04)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[rgba(255,255,255,0.35)] shrink-0 font-bold text-[16px] mt-[1px]">✗</div>
                <p class="text-white opacity-68 text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="font-semibold opacity-100">Външна мотивация</span> чрез санкциониращи оценки, страх от грешки или изкуствено стимулиране.</p>
              </div>
              <div class="bg-[rgba(255,255,255,0.04)] py-[18px] px-[24px] flex gap-[14px] items-start">
                <div class="text-[rgba(255,255,255,0.35)] shrink-0 font-bold text-[16px] mt-[1px]">✗</div>
                <p class="text-white opacity-68 text-[clamp(14px,1.2vw,15px)] leading-[1.65]"><span class="font-semibold opacity-100">Пасивно слушане</span> – децата при нас не са зрители, а архитекти на своя ден.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- HISTORY -->
    <section id="history" class="relative px-4 lg:px-12 py-[80px] lg:py-[100px] overflow-hidden">
      <div class="absolute top-[-60px] right-[-80px] w-[360px] h-[360px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="max-w-7xl mx-auto relative z-[1]">
        <div class="grid grid-cols-1 gap-[50px] items-start lg:grid-cols-[1.1fr_1fr]">
          <div>
            <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">История</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-4">
              От 2014 година — жива реалност всеки ден
            </h2>
            <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mb-8"></div>
            <div class="space-y-[20px]">
              <div class="bg-[rgba(202,218,43,0.07)] border-l-[3px] border-[#CADA2B] rounded-r-[14px] p-[18px_22px]">
                <p class="text-white text-[clamp(15px,1.4vw,17px)] leading-[1.7] italic opacity-90">
                  „Възможно ли е училището да бъде мястото, където детето се чувства най-разбрано и най-силно?"
                </p>
              </div>
              <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.7] opacity-85">
                „Експлораториум" се роди от един прост, но повратен въпрос. През годините извървяхме дълъг път, за да докажем, че отговорът е „Да".
              </p>
              <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.7] opacity-85">
                Изградихме работеща общност от откриватели, за които образованието не е механично заучаване на факти, а цялостно изграждане на личността и характера.
              </p>
              <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.7] opacity-85">
                В нашата база в полите на Витоша децата не са просто пасивни слушатели – те са архитекти на собственото си знание, мислене и ценности. Тук те практикуват автономия, учат се да вземат решения и да поемат отговорност за тях, а грешката никога не се наказва с двойка – тя се насърчава като първата и най-важна стъпка към откритието.
              </p>
              <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.7] opacity-85">
                От 2014 година насам ние не просто следваме тази философия, а я превръщаме в жива реалност всеки ден. Приключението да откриваме света през очите на децата продължава.
              </p>
            </div>
          </div>
          <div class="relative lg:sticky lg:top-8">
            <img src="/stock/woodensign.jpg" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.25)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">От 2014 година</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ORGANIZATION -->
    <section id="organization" class="bg-explo-darkblue py-[60px] lg:py-[80px] relative overflow-hidden">
      <div class="absolute top-[-80px] left-[-60px] w-[360px] h-[360px] rounded-full bg-[rgba(202,218,43,0.04)] pointer-events-none"></div>
      <div class="absolute bottom-[-60px] right-[-80px] w-[300px] h-[300px] rounded-full bg-[rgba(99,104,172,0.15)] pointer-events-none"></div>
      <div class="max-w-7xl mx-auto px-4 lg:px-12 relative z-[1]">
        <div class="max-w-3xl mb-[48px]">
          <div class="text-[#CADA2B] font-bold text-[11px] uppercase tracking-[0.12em] mb-4">Организация</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-white leading-[1.15] font-bold mb-4">
            Практическа информация
          </h2>
          <div class="h-[3px] w-[56px] bg-gradient-to-r from-[#CADA2B] to-[rgba(202,218,43,0.2)] rounded-full mb-5"></div>
          <p class="text-white text-[clamp(16px,1.5vw,18px)] leading-[1.6] opacity-80">
            Всичко, което трябва да знаете, преди да се присъедините към общността ни.
          </p>
        </div>

        <div class="mb-[52px]">
          <h3 class="text-[#CADA2B] font-bold text-[clamp(18px,2vw,22px)] mb-[8px]">Възрастови групи и етапи</h3>
          <div class="h-[2px] w-[40px] bg-[rgba(202,218,43,0.4)] rounded-full mb-[20px]"></div>
          <p class="text-white opacity-80 text-[clamp(15px,1.4vw,17px)] mb-[24px]">В Експлораториум посрещаме деца на възраст от <strong class="text-white opacity-100">4 до 14 години</strong>, разпределени в малки, гъвкави общности според техния етап на развитие:</p>
          <div class="grid grid-cols-1 gap-[16px] lg:grid-cols-3">
            <div class="group bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[28px_26px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200">
              <div class="text-[32px] mb-[14px]">🧸</div>
              <div class="text-[#CADA2B] font-lobster text-[26px] mb-[6px]">4 – 6 години</div>
              <div class="text-white font-semibold text-[15px] mb-[8px]">Предучилищен етап</div>
              <p class="text-white opacity-65 text-[14px] leading-[1.6]">Фокус върху социализацията, емоционалната интелигентност и ученето чрез насочена игра.</p>
            </div>
            <div class="group bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[28px_26px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200">
              <div class="text-[32px] mb-[14px]">📚</div>
              <div class="text-[#CADA2B] font-lobster text-[26px] mb-[6px]">7 – 10 години</div>
              <div class="text-white font-semibold text-[15px] mb-[8px]">Начален училищен етап</div>
              <p class="text-white opacity-65 text-[14px] leading-[1.6]">Изграждане на базова функционална грамотност, фокус, самостоятелност и първи стъпки в проектната работа.</p>
            </div>
            <div class="group bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[28px_26px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] hover:translate-y-[-3px] transition-all duration-200">
              <div class="text-[32px] mb-[14px]">🔬</div>
              <div class="text-[#CADA2B] font-lobster text-[26px] mb-[6px]">10 – 14 години</div>
              <div class="text-white font-semibold text-[15px] mb-[8px]">Основен училищен етап</div>
              <p class="text-white opacity-65 text-[14px] leading-[1.6]">Дълбока изследователска работа, критично мислене, активно практикуване на пряка демокрация и поемане на лична отговорност.</p>
            </div>
          </div>
        </div>

        <div class="mb-[52px]">
          <h3 class="text-[#CADA2B] font-bold text-[clamp(18px,2vw,22px)] mb-[8px]">Правен статут и валидиране на образованието</h3>
          <div class="h-[2px] w-[40px] bg-[rgba(202,218,43,0.4)] rounded-full mb-[20px]"></div>
          <p class="text-white opacity-80 text-[clamp(15px,1.4vw,17px)] mb-[24px]">Ние сме свободно, алтернативно образователно пространство. Валидирането на образователния път на децата се случва по два утвърдени и международно признати начина:</p>
          <div class="grid grid-cols-1 gap-[16px] lg:grid-cols-2">
            <div class="group flex gap-[20px] bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[26px_28px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] transition-all duration-200">
              <div class="text-[#CADA2B] font-lobster text-[34px] leading-none mt-[2px] shrink-0">01</div>
              <div>
                <h4 class="text-white font-bold text-[15px] mb-[6px]">Самостоятелна форма на обучение (СФО)</h4>
                <p class="text-white opacity-65 text-[14px] leading-[1.6]">Към българско лицензирано училище, с полагане на годишни изпити по националната програма.</p>
              </div>
            </div>
            <div class="group flex gap-[20px] bg-[rgba(255,255,255,0.06)] rounded-[20px] p-[26px_28px] border border-[rgba(255,255,255,0.09)] hover:bg-[rgba(255,255,255,0.1)] hover:border-[rgba(202,218,43,0.25)] transition-all duration-200">
              <div class="text-[#CADA2B] font-lobster text-[34px] leading-none mt-[2px] shrink-0">02</div>
              <div>
                <h4 class="text-white font-bold text-[15px] mb-[6px]">Международни „училища-чадъри"</h4>
                <p class="text-white opacity-65 text-[14px] leading-[1.6]">Експлораториум е представител за България на американската WRA, което дава на семействата пълна педагогическа автономия и международно признати дипломи, включително от МОН.</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-[rgba(202,218,43,0.08)] rounded-[20px] p-[28px_32px] border border-[rgba(202,218,43,0.22)]">
          <div class="flex items-center gap-3 mb-[12px]">
            <div class="text-[24px]">🔄</div>
            <h3 class="text-[#CADA2B] font-bold text-[clamp(18px,2vw,22px)]">Проводимост</h3>
          </div>
          <p class="text-white text-[clamp(15px,1.4vw,17px)] leading-[1.7] opacity-85">
            Натрупаният ни над 10-годишен опит показва, че децата ни имат <strong class="text-white opacity-100">пълна хоризонтална проводимост</strong> – те могат лесно и без стрес да се вливат или да преминават към официалната държавна образователна система във всеки един момент, благодарение на силно развитото си критично мислене, функционална грамотност и адаптивност.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
useHead({
  title: 'За нас | Exploratorium School',
  meta: [
    { name: 'description', content: 'Запознайте се с философията и историята на Експлораториум Скул – алтернативно училище, което изгражда критично мислещи, отговорни и любопитни личности от 2014 г.' },
    { property: 'og:title', content: 'За нас | Експлораториум Скул' },
    { property: 'og:description', content: 'Запознайте се с философията и историята на Експлораториум Скул – алтернативно училище, което изгражда критично мислещи, отговорни и любопитни личности от 2014 г.' },
    { property: 'og:image', content: 'https://exploratorium.bg/stock/brand.jpg' },
    { property: 'og:url', content: 'https://exploratorium.bg/about-us' },
  ],
  link: [{ rel: 'canonical', href: 'https://exploratorium.bg/about-us' }],
})
</script>
