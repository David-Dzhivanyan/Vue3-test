<template>
  <Information class="mt-16" />
  <h2 class="text-h2 text-center my-16 font-weight-bold">Карточки</h2>
  <Cards class="mb-16"/>
  <Slider class="my-16"/>
</template>

<script setup>
import Information from '@/components/Information/Information.vue';
import Cards from '@/components/Cards/Cards.vue'
import Slider from "@/components/Slider/Slider.vue";

</script>

<style module lang="scss">
.root {
  .card {
    display: flex;
  }
  .img {
    flex: 50% 0 1;
  }
}
</style>
