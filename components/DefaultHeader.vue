<script setup>
const colorMode = useColorMode();
const { setLocale } = useI18n();
const modeParams = ["system", "dark", "light"];
const french = ref(false);
</script>

<template>
  <div class="flex flex-row justify-between text-3xl">
    <div><NuxtLink to="/">Malo Landemaine</NuxtLink></div>
    <div class="flex flex-row space-x-10">
      <div><NuxtLink to="/contact">Contact</NuxtLink></div>
      <div>•</div>
      <div v-tooltip.bottom="$t('wip')">{{ $t("work") }}</div>
      <div v-tooltip.bottom="$t('wip')">Blog</div>
      <div>•</div>
      <select v-model="colorMode.preference">
        allo
        <option v-for="mode in modeParams" :key="mode">{{ mode }}</option>
      </select>
      <div class="space-x-6">
        <Icon
          name="twemoji:flag-france"
          :class="{ active: !french }"
          @click="
            setLocale('fr');
            french = true;
          "
        />
        <Icon
          name="twemoji:flag-united-kingdom"
          :class="{ active: french }"
          @click="
            setLocale('en');
            french = false;
          "
        />
      </div>
    </div>
  </div>
</template>
