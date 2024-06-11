<template>
  <div>
    <label>{{ label }}</label>
    <VTextField
        v-model="inputData"
        :rules="required ? [rules.required] : []"
    >
    </VTextField>
  </div>

</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  name: {type: String, required: true},
  label: {type: String, default: ''},
  required: Boolean,
  modelValue: { type: String, default: '' }
    });

const rules = {
  required: value => {
    if (value) return true;

    return "required"
  },
}

const emit = defineEmits(['update:modelValue'])

const inputData = computed({
  get: () => props.modelValue,
  set: value => emit('update:modelValue', value),
})

</script>

<style module lang="scss">
.root {
  display: flex;
  gap: 40px;
}
</style>
