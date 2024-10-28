<script setup lang="ts">
import { useForm } from "vee-validate";
import { z } from "zod";
import { toTypedSchema } from "@vee-validate/zod";

const { t } = useI18n();

const toast = useToast();

const schema = toTypedSchema(
  z.object({
    email: z.string().email(),
    subject: z.string(),
    message: z.string(),
  }),
);

const { errors, defineField, handleSubmit } = useForm({
  validationSchema: schema,
});
const [email, emailAttrs] = defineField("email");
const [subject, subjectAttrs] = defineField("subject");
const [message, messageAttrs] = defineField("message");

const onSubmit = handleSubmit(async () => {
  const result = await new Promise((resolve) => {
    setTimeout(() => resolve(true), 600);
  });

  if (!result) {
    toast.add({
      severity: "error",
      summary: "Error",
      detail: "Please try later",
    });
  }

  toast.add({
    severity: "success",
    summary: t("sended"),
    detail: t("message"),
    life: 5000,
  });
});
</script>

<template>
  <div class="flex flex-row justify-between">
    <Toast />
    <div class="flex flex-col space-y-4 w-2/3">
      <div>
        {{ $t("intouch") }}
      </div>
      <form class="space-y-4" @submit="onSubmit">
        <div>
          <InputText
            v-model="email"
            v-bind="emailAttrs"
            placeholder="Email"
            aria-label="Email"
            type="email"
            class="w-1/2"
          />
          <div class="text-red">{{ errors.email }}</div>
        </div>
        <div>
          <InputText
            v-model="subject"
            v-bind="subjectAttrs"
            :placeholder="t('subject')"
            :aria-label="t('subject')"
            type="text"
            class="w-1/2"
          />
          <div class="text-red">{{ errors.subject }}</div>
        </div>
        <div>
          <Textarea
            v-model="message"
            v-bind="messageAttrs"
            rows="5"
            cols="30"
            class="w-2/3 h-96"
            placeholder="Message"
          />
        </div>
        <div class="text-red">{{ errors.message }}</div>
        <div>
          <button class="border-2 rounded-md p-2">{{ $t("submit") }}</button>
        </div>
      </form>
    </div>
  </div>
</template>
