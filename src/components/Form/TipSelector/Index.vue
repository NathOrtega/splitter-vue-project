<template>
  <div class="tipSelector">
    <h2 class="title">Select Tip %</h2>
    <div class="options">
      <VToggle
        v-for="(tipPercentage, index) in tipPercentages"
        :tipPercentage="tipPercentage"
        :key="index"
        @toggle="toggle"
        :isSelected="tipPercentage === selectedPercentage"
      />
      <!-- Fix input -->
      <VInput
        placeholder="Custom"
        variant="small"
        @inputChange="(value) => (selectedPercentage = value.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, watchEffect } from 'vue'

import VToggle from './V-Toggle.vue'
import VInput from '../V-Input.vue'

const tipPercentages = ['5', '10', '15', '25', '50']

const selectedPercentage = ref(0)

const emit = defineEmits(['tipChange'])

const toggle = (tipPercentage) => {
  if (tipPercentage.value === selectedPercentage.value) {
    selectedPercentage.value = '0'
  } else {
    selectedPercentage.value = tipPercentage.value
  }
}

watchEffect(() => {
  emit('tipChange', selectedPercentage)
})
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
