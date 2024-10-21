<script setup lang="ts">

import { z } from 'zod'

const schema = z.object({
    email: z.string().email("Invalid email"),
    message: z.string()
})

type Schema = z.output<typeof schema>

</script>

<template>
    <div class="flex flex-row justify-between ">
        <div class="w-1/3">{{ $t('intouch') }}</div>
        <div class="space-y-4 w-2/3"></div>
    </div>
</template>