<template>
  <v-dialog max-width="1120">
  <template v-slot:activator="{ props: activatorProps }">
    <VBtn
        v-bind="activatorProps"
        class="text-none text-primary"
        color="primary"
        variant="outlined"
        size="large"
        prepend-icon="mdi-youtube"
        append-icon="mdi-arrow-right"
    >
      Открыть видео
    </VBtn>
  </template>

  <template v-slot:default="{ isActive }">
    <v-card class="rounded-0">
      <iframe width="1120" height="630" src="https://www.youtube.com/embed/U_LlX4t0A9I?si=dy4XlGvdKXcU0v9G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </v-card>
  </template>
  </v-dialog>
</template>

<script setup>
</script>
