<script setup lang="ts">
import userDataExample from '~~/examples/user.json';
import { getString as getStringX } from '@apps/client/getString';
import { getString as getStringY } from '@packages/ui/getString';
import Message from '@packages/ui/components/message.vue';

defineProps<{
  num?: number;
}>();

getStringX();
getStringY();
</script>

<template>
  <div>{{ userDataExample.value.name }}</div>
  <Message bg-color="#008C73">Client</Message>
</template>

