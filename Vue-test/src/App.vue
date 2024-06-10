<template>
  <header :class="$style.header">
    <VContainer>
      <div :class="$style.header__inner">
        <nav :class="$style.header__list">
          <RouterLink to="/">
              <img alt="logo" class="d-block" src="./assets/logo.svg">
          </RouterLink>
          <RouterLink to="/tariffs"> Тарифы </RouterLink>
          <RouterLink to="/contacts"> Контакты </RouterLink>
        </nav>
        <div :class="$style.header__list">
          <a href='tel:74951184422'> +7 495 118-44-22</a>
          <a href="#"> Вход </a>
          <VBtn
              class="text-none text-white"
              color="primary"
          >
            Регистрация
          </VBtn>
        </div>
      </div>
    </VContainer>
  </header>
  <VContainer>
    <RouterView />
  </VContainer>

</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style module lang="scss">
.header {
  background: linear-gradient(90deg, #000000 30%, #1C2734 73%);
}

.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header__list {
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
