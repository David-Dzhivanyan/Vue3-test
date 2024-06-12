<template>
  <div :class="$style.root">
    <VForm :class="$style.form" @submit.prevent="submit">
      <h1 :class="$style.title">Введите персональные данные</h1>
      <VAlert
          :class="[$style.alert, ...classes]"
          :text="alertText"
          title="Успешно!"
          type="success"
      />
      <div :class="[$style.row, 'mb-2']">
        <UITextField :class="$style.input" name="firstName" v-model="data.firstName" label="First Name" required/>
        <UITextField :class="$style.input" name="lastName" v-model="data.lastName" label="Fast Name" required/>
      </div>
      <UITextField class="mb-2" name="description" v-model="data.description" label="Description" required/>
      <div :class="$style.btns">
        <VBtn
            class="text-none text-white"
            color="primary"
            type="Submit"
            size="large"
            append-icon="mdi-arrow-right"
        >
          Отправить
        </VBtn>
        <ModalVideo/>
      </div>
    </VForm>

    <div :class="$style.imgWrapper">
      <VImg :class="$style.img" src="https://placehold.co/600x400"/>
    </div>
  </div>
</template>

<script setup>
import UITextField from '@/components/ui/UITextField/UITextField.vue'
import { ref, computed } from 'vue'
import ModalVideo from '@/components/ModalVideo/ModalVideo.vue'

let data = ref(
    {
      firstName: '',
      lastName: '',
      description: '',
    }
)
const submit = () => {
  if (data.value.firstName) {
    classes.value.pop()
    setTimeout(() => {
      classes.value.push('hidden')
    }, 2000)
  }
}
const classes = ref(['hidden']);
const alertText = computed(() => `Письмо ${JSON.stringify(data.value)} успешно отправлено`)
</script>

<style module lang="scss">

</style>
