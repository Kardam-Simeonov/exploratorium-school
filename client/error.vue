<template>
    <div>
        <!-- Navigation -->
        <div
            class="hidden lg:block absolute top-0 z-10 bg-gradient-to-b from-explo-darkpurple via-explo-darkpurple to-transparent h-56 w-full" />
        <nav ref="nav" class="lg:h-48 h-36 animate-fade-in absolute z-50 top-0 left-0 right-0">
            <!-- Default Variant -->
            <div class="hidden lg:flex flex-col 2xl:max-w-7xl max-w-6xl mx-auto px-6">
                <div class="bg-explo-darkercard border-explo-darkcard border-b-16 h-6 w-full rounded-b-2xl shadow-2xl" />
                <div class="flex flex-row">
                    <ul
                        class="relative flex flex-row justify-end pt-8 pr-6 pb-4 w-full text-white 2xl:text-xl text-lg font-semibold whitespace-nowrap">
                        <li @mouseleave="highlightIndex = -1">
                            <NuxtLink to="/">
                                <a class="cursor-pointer" @mouseover="highlightIndex = 0">
                                    <span class="bg-opacity-40 p-2 px-3 rounded-full"
                                        :class="{ 'bg-explo-lightblue': highlightIndex == 0 }">
                                        Начало
                                    </span>
                                </a>
                            </NuxtLink>
                        </li>
                        <li @mouseleave="highlightIndex = -1">
                            <a class="cursor-pointer" @mouseover="highlightIndex = 1">
                                <span class="bg-opacity-40 p-2 px-3 rounded-full"
                                    :class="{ 'bg-explo-lightblue': highlightIndex == 1 }">За Нас</span>
                            </a>
                        </li>
                        <li @mouseleave="highlightIndex = -1">
                            <a class="cursor-pointer" @mouseover="highlightIndex = 2">
                                <span class="bg-opacity-40 p-2 px-3 rounded-full"
                                    :class="{ 'bg-explo-lightblue': highlightIndex == 2 }">Училищен
                                    Живот</span>
                            </a>
                        </li>
                    </ul>
                    <div class="2xl:w-[48rem] 1xl:w-[44rem] w-[40rem] h-fit bg-white p-1 rounded-md shadow-lg">
                        <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.625rem]" />
                        <div class="p-2">
                            <NuxtLink to="/">
                                <img class="focus:outline-none" src="@/assets/artwork/logoWhite.png">
                            </NuxtLink>
                        </div>
                    </div>
                    <ul
                        class="relative flex flex-row justify-start pt-8 pl-6 pb-4 w-full text-white 2xl:text-xl text-lg font-semibold whitespace-nowrap">
                        <li @mouseleave="highlightIndex = -1">
                            <NuxtLink to="/blog">
                                <a class="cursor-pointer" @mouseover="highlightIndex = 3">
                                    <span class="bg-opacity-40 p-2 px-3 rounded-full"
                                        :class="{ 'bg-explo-lightblue': highlightIndex == 3 }">
                                        Блог
                                    </span>
                                </a>
                            </NuxtLink>
                        </li>
                        <li @mouseleave="highlightIndex = -1">
                            <a class="cursor-pointer" @mouseover="highlightIndex = 4">
                                <span class="bg-opacity-40 p-2 px-3 rounded-full"
                                    :class="{ 'bg-explo-lightblue': highlightIndex == 4 }">Галерия</span>
                            </a>
                        </li>
                        <li @mouseleave="highlightIndex = -1">
                            <a class="cursor-pointer" @mouseover="highlightIndex = 5">
                                <span class="bg-opacity-40 p-2 px-3 rounded-full"
                                    :class="{ 'bg-explo-lightblue': highlightIndex == 5 }">Събития</span>
                            </a>
                        </li>
                        <li @mouseleave="highlightIndex = -1">
                            <a class="cursor-pointer" @mouseover="highlightIndex = 6">
                                <span class="bg-opacity-40 p-2 px-3 rounded-full"
                                    :class="{ 'bg-explo-lightblue': highlightIndex == 6 }">Прием</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- Mobile Variant -->
            <div
                class="lg:hidden block absolute top-2 left-0 right-0 sm:w-[15rem] w-[13rem] mx-auto h-fit bg-white p-1 rounded-md shadow-lg">
                <div class="bg-gradient-to-r from-[#575DAA] to-[#9695C9] p-[3px] rounded-[0.175rem] h-[1.625rem]" />
                <div class="p-2">
                    <NuxtLink to="/">
                        <img class="focus:outline-none" src="@/assets/artwork/logoWhite.png">
                    </NuxtLink>
                </div>
            </div>
            <transition name="fade">
                <div v-show="isMenuOpen" class="fixed lg:hidden top-0 left-0 right-0 z-50">
                    <div class="bg-explo-darkcard bg-opacity-95 min-h-screen w-full mx-auto rounded-b-2xl shadow-2xl">
                        <ul class="flex flex-col text-left text-white text-2xl h-screen py-24 mb-[15%]">
                            <NuxtLink to="/">
                                <li class="py-6 px-4 border-y-2 border-explo-darklitecard"
                                    @click="isMenuOpen = !isMenuOpen">
                                    Начало
                                </li>
                            </NuxtLink>
                            <li class="py-6 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                                За Нас
                            </li>
                            <li class="py-6 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                                Училищен Живот
                            </li>
                            <NuxtLink to="/blog">
                                <li class="py-6 px-4 border-b-2 border-explo-darklitecard"
                                    @click="isMenuOpen = !isMenuOpen">
                                    Блог
                                </li>
                            </NuxtLink>
                            <li class="py-6 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                                Галерия
                            </li>
                            <li class="py-6 px-4 border-b-2 border-explo-darklitecard" @click="isMenuOpen = !isMenuOpen">
                                Събития
                            </li>
                        </ul>
                    </div>
                </div>
            </transition>
            <div class="focus:outline-none lg:hidden fixed top-4 left-auto right-2 bottom-0 cursor-pointer h-fit w-fit p-2 rounded-2xl transition-transform duration-500 z-50 shadow-2xl"
                :class="{ 'bg-explo-darkercard': isMenuOpen, 'bg-explo-lightblue': !isMenuOpen }"
                @click="isMenuOpen = !isMenuOpen">
                <Icon v-show="!isMenuOpen" name="pepicons-pop:menu" class="text-white text-4xl" />
                <Icon v-show="isMenuOpen" name="pepicons-pop:times" class="text-white text-4xl" />
            </div>
        </nav>
        <!-- Page Content -->
        <main>
            <div class="relative pt-72">
                <header class="relative px-12">
                    <div
                        class="min-h-[20rem] 1xl:max-w-[38rem] max-w-[30rem] relative mx-auto text-center">
                        <h1
                            class="1xl:text-[6rem] text-[4.5rem] text-explo-darkgreen xl:mb-2 drop-shadow-text">
                            {{ error.statusCode }}
                        </h1>
                        <p class="text-xl text-explo-whiteblue font-medium leading-7">
                            Опа, възникна проблем! <span v-if="error.statusCode == 404">Изглежда, че сте въвели грешен адрес или страницата не съществува!</span> Може да се върнете обратно към <NuxtLink to="/"><span class="font-semibold text-explo-darkgreen hover:underline">началната страница</span></NuxtLink>.
                        </p>
                    </div>
                </header>
            </div>
        </main>
        <!-- Footer -->
        <footer>
            <div class="pt-32 pb-12 flex flex-row flex-wrap justify-center gap-14">
                <div
                    class="flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer hover:-translate-y-1 transition-transform duration-200">
                    <Icon name="fa6-solid:comments" class="text-4xl" />
                    <p class="text-xl font-bold">
                        Питайте
                    </p>
                </div>
                <div class="md:block hidden h-14 w-[0.10rem] bg-explo-darkercard my-auto" />
                <NuxtLink to="/admission">
                    <div
                        class="flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer hover:-translate-y-1 transition-transform duration-200">
                        <Icon name="pepicons-pop:pinpoint-filled" class="text-4xl" />
                        <p class="text-xl font-bold">
                            Прием
                        </p>
                    </div>
                </NuxtLink>
                <div class="md:block hidden h-14 w-[0.10rem] bg-explo-darkercard my-auto" />
                <div
                    class="flex flex-col place-items-center gap-3 text-explo-darkgreen cursor-pointer hover:-translate-y-1 transition-transform duration-200">
                    <Icon name="fa6-solid:hand-holding-heart" class="text-4xl" />
                    <p class="text-xl font-bold">
                        Дарете
                    </p>
                </div>
            </div>
            <div class="bg-explo-darkcard border-explo-darkgreen border-t-16 min-h-[14rem] rounded-t-2xl shadow-2xl">
                <div
                    class="grid lg:grid-cols-11 grid-cols-6 gap-y-8 1xl:gap-x-5 max-w-[90rem] mx-auto py-8 lg:px-8 md:px-16 px-8">
                    <div class="1xl:col-span-2 lg:col-span-3 md:col-span-3 col-span-full flex break-words">
                        <div class="flex flex-col mr-6 w-full">
                            <span class="text-2xl font-bold text-explo-whiteblue">Работно Време</span>
                            <span class="text-lg font-normal text-explo-whiteblue mt-2 mb-6">Понеделник - Петък<br>8:30 -
                                17:50</span>
                            <span class="text-xl font-bold text-explo-whiteblue">+359 87 918 0700</span>
                            <span class="text-sm font-bold text-explo-whiteblue">exploratorium.school<wbr>@abv.bg</span>
                        </div>
                    </div>
                    <div class="1xl:col-span-3 lg:col-span-2 md:col-span-3 col-span-full">
                        <iframe class="1xl:h-52 lg:h-48 h-52 w-full border-0 rounded-xl" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2935.558937295701!2d23.301890451243047!3d42.62830932600874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa8392257b0c7d%3A0xf3516e3590e5ea7b!2sul.%20%22Mavrovets%22%203%D0%90%2C%201415%20Kinotsentar%2C%20Sofia!5e0!3m2!1sen!2sbg!4v1672673142690!5m2!1sen!2sbg" />
                    </div>
                    <div class="col-span-1 mx-auto lg:block hidden">
                        <div class="h-48 w-[0.20rem] bg-explo-darklitecard" />
                    </div>
                    <div class="lg:col-span-5 col-span-full flex flex-col">
                        <p class="text-2xl font-bold text-explo-whiteblue mb-4">
                            Навигация
                        </p>
                        <div class="grid grid-cols-2">
                            <div class="text-xl font-normal text-explo-whiteblue">
                                <p>Начало</p>
                                <p>За нас</p>
                                <p>Училищен Живот</p>
                            </div>
                            <div class="text-xl font-normal text-explo-whiteblue">
                                <p>Блог</p>
                                <p>Галерия</p>
                                <p>Прием</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-explo-darkercard h-8 text-center">
                <p class="text-explo-whiteblue pt-1">
                    © Експлораториум ЕООД
                </p>
            </div>
        </footer>
    </div>
</template>
  
<script setup>
const { error } = defineProps(['error'])

console.log(error)
const isMenuOpen = ref(false)
</script>
  