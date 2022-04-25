<template>
  <button @click.prevent="handleOnClick" :class="{ selected: isSelected }">
    {{ tipPercentage + '%' }}
  </button>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  tipPercentage: String,
  onToggle: Function,
  isSelected: Boolean,
})

const { tipPercentage, isSelected, onToggle } = toRefs(props)

const handleOnClick = () => {
  onToggle.value(tipPercentage)
}
</script>

<style scoped>
button {
  width: 148px;
  height: 48px;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 24px;
  font-weight: bold;
  background-color: #00474b;
  margin-bottom: 16px;
  cursor: pointer;
}

button:hover {
  color: #00474b;
  background-color: #9fe8df;
}

.selected {
  color: #00474b;
  background-color: #26c2ae;
}
</style>
