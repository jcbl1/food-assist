<script setup lang="ts">
import { ref } from 'vue'
import { RouterView } from 'vue-router'

const cachedComponents = ref(['HomeView'])
</script>

<template>
  <RouterView v-slot="{ Component }">
    <KeepAlive :include="cachedComponents">
      <component :is="Component" />
    </KeepAlive>
  </RouterView>
</template>

<style scoped></style>
