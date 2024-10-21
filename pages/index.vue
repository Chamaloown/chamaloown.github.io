<script setup>
const colorMode = useColorMode()
const { locale, setLocale } = useI18n()
const modeParams = ["system", "dark", "light"]
const french = ref(false)

</script>


<template>
    <div class="flex flex-col h-full w-full text-xl">
        <div class="m-24 space-y-16">
            <div class="flex">   
                <div class="flex flex-auto flex-col justify-center text-left text-3xl space-y-10 w-1/2">
                    <div class="text-9xl">Hello,</div>
                    <div>{{ $t('me') }}</div>
                    <div>{{ $t('man') }}</div>
                </div>
                <div class="flex flex-col items-end w-1/3">
                    <img src="/me.jpg" />
                    <div class="flex flex-row space-x-6">
                        <Icon name="uil:github" style="color: black" />
                        <Icon name="uil:linkedin" style="color: black" />
                    </div>
            </div>
            </div>
            <hr>
            <div>
                <div class="space-y-10">
                    <div>{{  $t('developer') }}</div>
                    <div>{{  $t('computer') }}</div>
                    <div>{{  $t('founder') }}</div>
                </div>
            </div>
            <hr>
            <div class="flex flex-col items-center justify-center space-y-28">
                <div class="text-3xl">{{  $t('technologies') }}</div>
                <div class="flex flex-col justify-center items-center space-y-28">
                    <div class="flex">
                        Backend
                    </div>
                    <div class="flex space-x-32 text-9xl">
                        <Icon name="devicon:typescript" />
                        <Icon name="devicon:nodejs" />
                        <Icon name="devicon:postgresql" />
                        <Icon name="devicon-plain:jest" />
                        <Icon name="logos:aws-lambda" />
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center space-y-10">
                    <div class="flex">
                        Frontend
                    </div>
                    <div class="flex space-x-32 text-9xl">
                        <Icon name="devicon:angular" />
                        <Icon name="devicon:react" />
                        <Icon name="devicon:vuejs" />
                        <Icon name="devicon:tailwindcss" />
                        <Icon name="devicon:playwright" />
                    </div>
                </div><div class="flex flex-col justify-center items-center space-y-10">
                    <div class="flex">
                        DevOps
                    </div>
                    <div class="flex space-x-32 text-9xl">
                            <Icon name="skill-icons:aws-dark" />
                            <Icon name="devicon:terraform" />
                            <Icon name="devicon:docker" />
                            <Icon name="devicon:githubactions" />
                            <Icon name="devicon:gitlab-wordmark" />
                    </div>
                </div>
            </div>
            <hr>
            <div>{{ $t('whywithme') }}</div>
            <div>{{ $t('background') }}</div>
            <div>{{ $t('independently') }}</div>
            <div>{{ $t('softskill') }}</div>
            <hr>
            <div>{{ $t('chat') }}</div>
            <div class="flex flex-row">
                <div>
                    <div>{{ $t('need') }} <a class="underline" href="mailto:malo.landemaine@gmail.com">{{ $t('mail') }}</a></div>
                    <div>{{ $t('connect') }}</div>
                </div>
                <div class="flex flex-row justify-end items-end ml-10">
                    <div class="space-x-10">
                        <a href="https://github.com/Chamaloown" target="_blank">
                            <Icon name="uil:github" class="dark:text-white" size="50"/>
                        </a>
                        <a href="https://www.linkedin.com/in/malo-landemaine/" target="_blank">
                            <Icon name="uil:linkedin" class="dark:text-white" size="50" />
                        </a>
                        <a href="https://x.com/MaloLdm" target="_blank">
                            <Icon name="pajamas:twitter" class="dark:text-white" size="50" />
                        </a>
                    </div>
                </div>
            </div>
            <div></div>
                </div>
        </div>
</template>

<style lang="postcss">
body {
  @apply bg-white text-black dark:bg-deepblue dark:text-white;
}

.active {
  opacity: 0.5;
}
</style>
