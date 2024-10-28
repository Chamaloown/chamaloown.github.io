<script setup lang="ts">
const sendMessage = async (fields: Record<string, string>) => {
  await new Promise((r) => setTimeout(r, 1000));
  alert(JSON.stringify(fields));
};
</script>

<template>
  <div class="flex flex-row justify-between">
    <div class="space-y-4 w-2/3">
      {{ $t("intouch") }}
      <FormKit type="form" @submit="sendMessage">
        <FormKit
          id="email"
          type="email"
          name="email"
          placeholder="jean.dupont@example.com"
          validation="require|email"
          label-class="block mb-1 font-bold text-sm"
          outer-class=""
          inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
          input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
          help-class="text-xs text-gray-500"
        />
        <FormKit
          id="subject"
          type="text"
          name="subject"
          placeholder="Let's get in touch"
          validation="required"
          label-class="block mb-1 font-bold text-sm"
          outer-class=""
          inner-class="max-w-md border border-gray-400 rounded-lg mb-1 overflow-hidden focus-within:border-blue-500"
          input-class="w-full h-10 px-3 border-none text-base text-gray-700 placeholder-gray-400"
          help-class="text-xs text-gray-500"
        />
        <FormKit
          id="message"
          type="textarea"
          name="message"
          placeholder="Your message"
          validation="required"
        />
      </FormKit>
    </div>
  </div>
</template>

<style></style>
