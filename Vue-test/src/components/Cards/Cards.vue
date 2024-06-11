<template>
  <VRow :class="$style.root">
    <VCol v-for="i in 6" class="v-col-4">
      <VCard :class="$style.card">
        <div :class="$style.img">
          <VImg :src="cards.src"/>
        </div>
        <VCardText>some text</VCardText>
      </VCard>
    </VCol>
  </VRow>
</template>
<script setup>

const cards = {
  src: 'https://placehold.co/200',
  description: ''
};


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
