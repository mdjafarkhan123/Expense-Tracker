<script setup></script>

<template>
    <header class="header">
        <div class="container header__container">
            <nav class="header__nav">
                <div class="header__logo">
                    <router-link to="/">
                        <svg
                            enable-background="new 0 0 2459.5 2079.2"
                            viewBox="0 0 2459.5 2079.2"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="m2177.5 1535.7h-830.9c-13.4 0-26.4 4.5-36.9 12.9l-619.2 492.3c-16 12.7-7 38.3 13.5 38.3h1483c146.6 0 278.4-131.6 268.1-289.9-9.4-144.4-132.4-253.6-277.6-253.6"
                                fill="#00c9db"
                            />
                            <path
                                d="m1505.3 1021.8c0-.7-.1-1.4-.2-2.2-4.6-74.2-39.5-146.3-102.9-195.8l-964-766.4c-117.7-92-288-71.3-380.4 46.1-92.4 117.5-71.8 287.2 45.8 379.2l698.9 555.6-698.9 555.6c-117.6 91.9-138.2 261.7-45.8 379.1s262.7 138.1 380.4 46.1l964.1-766.5c63.4-49.5 98.3-121.6 102.9-195.8.1-.7.1-1.4.2-2.2.3-5.5.4-10.9.4-16.4 0-5.4-.2-10.9-.5-16.4"
                                fill="#0d55ff"
                            />
                            <path
                                d="m2459.5 1807.4c0 150.1-121.9 271.7-272.5 271.7-150.4 0-272.3-121.7-272.3-271.7s121.9-271.7 272.3-271.7c150.6 0 272.5 121.7 272.5 271.7"
                                fill="#7000f2"
                            />
                        </svg>
                    </router-link>
                </div>

                <ul class="header__nav-list">
                    <li class="header__nav-item">
                        <router-link to="/app">Applicaton</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    &__container {
        padding-block: 10px;
    }
    &__nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    svg {
        width: 40px;
        height: auto;
    }
}
</style>
