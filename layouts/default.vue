<template>
  <div
    v-motion
    class="m-24 space-y-16"
    :initial="{ opacity: 0, y: 100 }"
    :enter="{ opacity: 1, y: 0, scale: 1 }"
    :variants="{ custom: { scale: 2 } }"
    :delay="200"
    :duration="1200"
  >
    <DefaultHeader />
    <div>
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>
