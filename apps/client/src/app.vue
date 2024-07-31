<script setup lang="ts">
import { getString as getStringX } from '~/getString';
import { getString as getStringY } from '@packages/ui/getString';
import Message from '@packages/ui/components/message.vue';

defineProps<{
  num?: number;
}>();

getStringX();
getStringY();
</script>

<template>
  <Message bg-color="#008C73">Client</Message>
</template>

