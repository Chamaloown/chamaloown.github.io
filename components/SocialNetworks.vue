<script setup lang="ts">
defineProps<{
  size: number | undefined;
}>();
</script>

<template>
  <div class="space-x-10">
    <a href="https://github.com/Chamaloown" target="_blank">
      <Icon name="uil:github" class="dark:text-white" :size="size" />
    </a>
    <a href="https://www.linkedin.com/in/malo-landemaine/" target="_blank">
      <Icon name="uil:linkedin" class="dark:text-white" :size="size" />
    </a>
    <a href="https://x.com/MaloLdm" target="_blank">
      <Icon name="pajamas:twitter" class="dark:text-white" :size="size" />
    </a>
  </div>
</template>
