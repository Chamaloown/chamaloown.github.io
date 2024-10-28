<template>
  <hr />
  <div class="flex flex-row justify-between">
    <div>
      <div>Malo Landemaine</div>
      <div>{{ $t("me") }}</div>
    </div>
    <div>
      <SocialNetworks :size="30" />
    </div>
  </div>
</template>
