<template>
  <div class="font-inter text-[#2A2A40] bg-[#EEF4F9]">
    <!-- HERO -->
    <section class="bg-gradient-to-br from-[#6368AC] to-[#9A99CC] text-white pt-[250px] pb-[80px] relative overflow-hidden lg:pt-[270px] lg:pb-[100px]">
      <div class="absolute bottom-[-60px] left-[-60px] right-[-60px] h-[120px] bg-[#EEF4F9] rounded-[50%] z-[1]"></div>
      <div class="container mx-auto px-6 relative z-[2] max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div class="animate-fade-down">
            <h1 class="text-[clamp(30px,4.5vw,52px)] leading-[1.1] font-bold text-[#CADA2B] mb-[22px]">
              <span class="block text-[clamp(16px,1.8vw,20px)] text-white font-medium uppercase tracking-[2px] mb-[12px] opacity-85">Работилница за писатели</span>
              Твоята история започва тук
            </h1>
            <p class="text-[clamp(16px,1.5vw,19px)] opacity-95 mb-[32px]">
              Наднича ли в теб душата на творец? Превърни света в история и думите в приключение. Лятна работилница за писатели — пътешествие из жанровете.
            </p>
            <div class="flex flex-wrap gap-[14px]">
              <a href="#cta" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Кандидатствай</a>
              <a href="#program" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[rgba(255,255,255,0.12)] text-white border-2 border-[rgba(255,255,255,0.4)] hover:bg-[rgba(255,255,255,0.22)] transition-all duration-200 cursor-pointer text-center">Виж програмата</a>
            </div>
          </div>
          <div class="relative">
            <img src="/stock/drawing.jpg" alt="Дете пише и твори" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_24px_60px_rgba(0,0,0,0.3)] border-[6px] border-[rgba(255,255,255,0.18)]">
            <div class="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 bg-[#CADA2B] text-[#575DAA] py-[12px] px-[24px] rounded-full font-bold text-[14px] uppercase tracking-[1px] whitespace-nowrap shadow-[0_8px_24px_rgba(202,218,43,0.5)]">Пилотен проект 2026</div>
          </div>
        </div>
      </div>
    </section>

    <!-- FACTS -->
    <section class="bg-[#EEF4F9] py-[30px] pb-[60px] relative z-[3]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-2 gap-[16px] bg-white p-[32px] rounded-[24px] shadow-[0_8px_32px_rgba(99,104,172,0.12)] lg:grid-cols-3">
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">🧒</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">За кого</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">Момичета и момчета<br>13 – 17 години</div>
          </div>
          <div class="text-center p-[12px]">
            <div class="text-[30px] mb-[8px]">📍</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Къде</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">Градски пространства,<br>музеи и парков в София</div>
          </div>
          <div class="text-center p-[12px] col-span-2 lg:col-span-1">
            <div class="text-[30px] mb-[8px]">🕒</div>
            <div class="text-[13px] uppercase tracking-[0.8px] text-[#555569] mb-[6px]">Формат</div>
            <div class="font-semibold text-[#6368AC] text-[16px] leading-[1.4]">Веднъж седмично (2–3 ч.)<br>или интензивни модули</div>
          </div>
        </div>
      </div>
    </section>

    <!-- INTRO -->
    <section class="bg-white py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="grid grid-cols-1 gap-[50px] items-center lg:grid-cols-[1fr_1.1fr]">
          <div>
            <img src="/stock/pencils.jpg" alt="Молив и тетрадка" class="w-full aspect-[4/3] object-cover rounded-[24px] shadow-[0_16px_48px_rgba(99,104,172,0.18)]">
          </div>
          <div>
            <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Работилница за писатели</div>
            <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold mb-[24px]">Малка, бутикова група с индивидуален подход</h2>
            <p class="text-[#555569] text-[clamp(16px,1.5vw,18px)] leading-[1.7] mb-[24px]">
              Обичаш ли да измисляш истории? Крие ли се в теб душата на творец? Това лято те каним на писателско приключение — ще открием богатствата на книгите, ще творим заедно и ще търсим вдъхновение из природата и града.
            </p>
            <p class="text-[#555569] text-[clamp(16px,1.5vw,18px)] leading-[1.7]">
              Заниманията ни ще имат за цел не само да опознаем литературата по достъпен и забавен начин, но и английски език, който ще упражняваме чрез игри и творчество. Ако имаш въображение, любопитство и желание да твориш — това е мястото за теб.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- PROGRAM -->
    <section id="program" class="py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">4 тематични модула</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Пътешествие из жанровете</h2>
          <p class="max-w-[640px] mx-auto mt-[18px] text-[#555569] text-[17px]">Всеки модул е свят за себе си — различен жанр, различно приключение, различен начин да кажеш нещо свое.</p>
        </div>
        <div class="grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-[22px]">
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">01</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Хайку и стихотворения</h3>
            <div class="text-[#555569] text-[14px] mb-[12px]">По стъпките на Яворов — посещение на къща-музей и литературна разходка. Работилница за лирика на български и английски.</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Мисия: лирика</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">02</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Манга и комикси</h3>
            <div class="text-[#555569] text-[14px] mb-[12px]">История на жанра и посещение в галерия за визуално вдъхновение. Как се разказва история чрез изобразително изкуство? Мисия „Манга".</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Мисия: визуален разказ</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">03</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Пътеписи</h3>
            <div class="text-[#555569] text-[14px] mb-[12px]">Пикник и разходка сред природата — търсене на сюжети извън града. Превръщане на приключенията в завладяващ текст.</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Мисия: завладяващ текст</div>
          </div>
          <div class="bg-white p-[26px_22px] rounded-[18px] border-2 border-transparent hover:translate-y-[-4px] hover:border-[#CADA2B] hover:shadow-[0_12px_28px_rgba(99,104,172,0.14)] transition-all duration-200 relative overflow-hidden">
            <div class="absolute top-0 left-0 w-[6px] h-full bg-[#CADA2B]"></div>
            <div class="font-lobster text-[#9A99CC] text-[34px] leading-none mb-[6px]">04</div>
            <h3 class="text-[18px] text-[#6368AC] leading-[1.3] mb-[6px] font-bold">Киносценарии</h3>
            <div class="text-[#555569] text-[14px] mb-[12px]">Гледане на филм и дискусия върху структурата на историята. Умението да „виждаш" думите като кадри на екрана.</div>
            <div class="text-[#B8C24E] font-semibold text-[13px] tracking-[0.5px]">Мисия: думи като кадри</div>
          </div>
        </div>
      </div>
    </section>

    <!-- WHY JOIN -->
    <section class="bg-white py-[60px] lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <div class="text-center mb-[56px]">
          <div class="text-[#B8C24E] font-semibold text-[14px] uppercase tracking-[2px] mb-[10px]">Защо да се присъединиш?</div>
          <h2 class="text-[clamp(28px,4vw,42px)] text-[#6368AC] leading-[1.2] font-bold">Какво получава всеки автор</h2>
        </div>
        <div class="grid grid-cols-1 gap-[28px] lg:grid-cols-2">
          <div class="rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(99,104,172,0.12)] hover:translate-y-[-4px] hover:shadow-[0_18px_40px_rgba(99,104,172,0.18)] transition-all duration-200">
            <img src="/stock/drawingonterrace.jpg" alt="Деца рисуват на терасата" class="w-full aspect-[4/3] object-cover">
            <div class="p-[30px_28px] text-white bg-gradient-to-br from-[#6368AC] to-[#575DAA]">
              <h3 class="text-[24px] font-bold mb-[10px] leading-[1.2]">Менторство и реален продукт</h3>
              <p class="opacity-92 text-[16px]">Срещи с утвърдени писатели и практически уъркшопи. В края на лятото всеки участник ще види своя текст публикуван в общия летен сборник.</p>
            </div>
          </div>
          <div class="rounded-[24px] overflow-hidden shadow-[0_10px_30px_rgba(99,104,172,0.12)] hover:translate-y-[-4px] hover:shadow-[0_18px_40px_rgba(99,104,172,0.18)] transition-all duration-200">
            <img src="/stock/group3.jpg" alt="Група деца работят заедно" class="w-full aspect-[4/3] object-cover">
            <div class="p-[30px_28px] text-[#575DAA] bg-gradient-to-br from-[#CADA2B] to-[#B8C24E]">
              <h3 class="text-[24px] font-bold mb-[10px] leading-[1.2]">Творчески английски и национално ниво</h3>
              <p class="opacity-92 text-[16px]">Упражняваме езика чрез игри и писане — без учебници и натиск. Целта е да подготвим текстове за участие в конкурса „Братя Мормареви".</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- PROMISE -->
    <section class="bg-[#6368AC] text-white py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-6 max-w-[1200px]">
        <blockquote class="max-w-[800px] mx-auto text-[clamp(22px,3vw,32px)] leading-[1.4] font-medium relative px-[30px]">
          Това е пространството, в което мисълта среща белия лист,
          за да помогне на всяко дете да открие и изрази своя <span class="text-[#CADA2B] font-bold">автентичен вътрешен глас</span>.
          <span class="absolute left-[-10px] top-[-20px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
          <span class="absolute right-[-10px] bottom-[-40px] font-lobster text-[#CADA2B] text-[70px] leading-none">"</span>
        </blockquote>
      </div>
    </section>

    <!-- CTA -->
    <section id="cta" class="bg-[#EEF4F9] py-[60px] text-center lg:py-[80px]">
      <div class="container mx-auto px-8 max-w-[1200px]">
        <div class="bg-white p-[40px_24px] rounded-[28px] shadow-[0_12px_40px_rgba(99,104,172,0.15)] max-w-[760px] mx-auto lg:p-[56px_40px]">
          <h2 class="text-[#6368AC] text-[clamp(26px,3.5vw,36px)] mb-[12px] font-bold">Търсим автори със смели идеи</h2>
          <p class="text-[#555569] mb-[32px] text-[17px]">Първоначалният прием е силно ограничен, за да запазим бутиковия характер на групата. Свържи се с нас и ни разкажи за теб.</p>
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
            <a href="https://www.facebook.com/ExploratoriumBG" target="_blank" rel="noopener" class="bg-[#EEF4F9] p-[18px_14px] rounded-[14px] hover:bg-[rgba(202,218,43,0.18)] transition-colors duration-200">
              <div class="text-[24px] mb-[6px]">👍</div>
              <div class="text-[12px] text-[#555569] uppercase tracking-[0.8px] mb-[4px]">Facebook</div>
              <div class="font-semibold text-[#6368AC] text-[14px]">ExploratoriumBG</div>
            </a>
          </div>
          <a href="mailto:exploratorium.school@abv.bg?subject=Кандидатура%20Работилница%20за%20писатели%202026" class="inline-block py-[16px] px-[32px] rounded-full font-semibold text-[16px] bg-[#CADA2B] text-[#575DAA] shadow-[0_4px_14px_rgba(202,218,43,0.4)] hover:translate-y-[-2px] hover:shadow-[0_6px_20px_rgba(202,218,43,0.55)] transition-all duration-[0.15s] cursor-pointer border-none text-center">Изпратете запитване</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>
