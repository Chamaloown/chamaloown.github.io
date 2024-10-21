<script setup>
    const colorMode = useColorMode()
    const { setLocale } = useI18n()
    const modeParams = ["system", "dark", "light"]
    const french = ref(false)
</script>

<template>
    <div class="flex flex-row justify-between text-3xl">
                <div><NuxtLink to="/">Malo Landemaine</NuxtLink></div>
                <div class="flex flex-row space-x-10">
                    <div><NuxtLink to="/contact">Contact</NuxtLink></div>
                    <div>•</div>
                    <div v-tooltip.bottom="$t('wip')">{{ $t('work') }}</div>
                    <div v-tooltip.bottom="$t('wip')">Blog</div>
                    <div>•</div>
                    <div class="-mt-2">
                        <!-- <Select v-model="colorMode.preference" :options="modeParams" class="text-black bg-grey" /> -->
                    </div>
                    <div class="space-x-6">
                        <Icon name="twemoji:flag-france" @click="setLocale('fr'); french = true" :class="{ active:!french }"/>
                        <Icon name="twemoji:flag-united-kingdom"@click="setLocale('en'); french = false"  :class="{ active: french }"/>
                    </div>
                </div>
            </div>
</template>