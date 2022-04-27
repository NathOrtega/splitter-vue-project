<template>
  <div class="tipSelector">
    <h2 class="title">Select Tip %</h2>
    <div class="options">
      <VToggle
        v-for="(tipPercentage, index) in tipPercentages"
        :tipPercentage="tipPercentage"
        :key="index"
        @toggle="toggle"
        :isSelected="tipPercentage === modelValue"
      />
      <!-- Fix input -->
      <input
        type="number"
        placeholder="Custom"
        :value="modelValue === null ? null : input"
        @input="handleInputChange($event.target.value)"
        :style="modelValue < 0 ? 'border: 2px solid #e17457' : 'none'"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, ref, defineEmits } from 'vue'

import VToggle from './V-Toggle.vue'

const props = defineProps({
  modelValue: String,
})

const { modelValue } = toRefs(props)

const tipPercentages = ['5', '10', '15', '25', '50']

const input = ref(null)

const emit = defineEmits(['update:modelValue'])

const handleInputChange = (newValue) => {
  input.value = newValue
  emit('update:modelValue', newValue)
}

const toggle = (tipPercentage) => {
  if (tipPercentage.value === modelValue.value) {
    emit('update:modelValue', null)
  } else {
    emit('update:modelValue', tipPercentage.value)
    input.value = null
  }
}
</script>

<style scoped>
.title {
  font-size: 16px;
  font-weight: bold;
  color: #5e7a7d;
  margin-bottom: 16px;
}

.options {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}

input {
  width: 148px;
  height: 48px;
  background-color: #f3f9fa;
  border-radius: 5px;
  padding: 0 16px;
  margin-bottom: 16px;
  text-align: right;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  color: #00474b;
  cursor: pointer;
  border: none;
}

input::placeholder {
  color: #547878;
}

input:focus-within {
  border: 2px solid #26c2ae;
}

@media screen and (min-width: 768px) {
  .options {
    width: 480px;
    justify-content: space-between;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1024px) {
  .tipSelector {
    height: fit-content;
  }

  .options {
    width: 379px;
    justify-content: space-around;
  }
}
</style>
