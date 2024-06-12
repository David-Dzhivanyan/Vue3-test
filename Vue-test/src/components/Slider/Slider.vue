<template>
<div :class="$style.root">
  <Swiper
      :modules="modules"
      :slides-per-view="3"
      :space-between="50"
      navigation
      class="py-10"
  >
    <SwiperSlide v-for="i in 8" >
      <RouterLink :class="$style.link" :to="`/detail/${i}`">
        <VCard>
          <div :class="$style.img">
            <VImg :src="'https://placehold.co/200'"/>
          </div>
          <VCardText>
            some text
          </VCardText>
        </VCard>
      </RouterLink>
    </SwiperSlide>
  </Swiper>
</div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const modules = [Navigation];
</script>

<style module lang="scss">
.root {
  .link {
    color: black;
  }
}
</style>