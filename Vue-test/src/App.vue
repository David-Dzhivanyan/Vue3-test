<template>
  <Header/>
  <VContainer>
    <RouterView />
  </VContainer>

</template>

<script setup>
import { RouterView } from 'vue-router'
import Header from "@/components/Hrader/Header.vue";
</script>

<style module lang="scss">

</style>
