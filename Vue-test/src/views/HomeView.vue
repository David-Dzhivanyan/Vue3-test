<template>
  <Information class="mt-16" />
  <h2 class="text-h2 text-center my-16 font-weight-bold">Карточки</h2>
  <Cards/>
</template>

<script setup>
import Information from '@/components/Information/Information.vue';
import Cards from '@/components/Cards/Cards.vue'

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
