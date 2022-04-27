<template>
  <div class="inputContainer">
    <div class="inputHeader">
      <label v-if="customLabel" :for="id">
        {{ customLabel }}
      </label>
      <span v-show="modelValue < 0 || modelValue == 0" class="warning">
        Can't be {{ modelValue == 0 ? 'zero' : 'negative' }}
      </span>
    </div>
    <div
      class="customInput"
      :style="
        modelValue < 0 || modelValue == 0 ? 'border: 2px solid #e17457' : 'none'
      "
    >
      <label v-if="iconPath" :for="id">
        <img :src="iconPath" />
      </label>
      <input
        :id="id"
        type="number"
        :placeholder="placeholder"
        :value="modelValue"
        @input="emit('update:modelValue', $event.target.value)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps, toRefs, defineEmits } from 'vue'

const props = defineProps({
  customLabel: String,
  iconPath: String,
  placeholder: String,
  id: String,
  modelValue: String,
})

const { customLabel, iconPath, placeholder, id, modelValue } = toRefs(props)

const emit = defineEmits(['update:modelValue'])
</script>

<style scoped>
.inputContainer {
  margin-bottom: 16px;
}

label {
  font-size: 16px;
  font-weight: bold;
  color: #5e7a7d;
}

.customInput {
  width: 100%;
  height: 48px;
  background-color: #f3f9fa;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 6px;
}

.customInput:focus-within {
  border: 2px solid #26c2ae;
}

img {
  width: 16px;
  height: 16px;
  margin-right: 15px;
}

input {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 5px;
  background-color: transparent;
  text-align: right;
  outline: none;
  font-size: 24px;
  font-weight: bold;
  color: #00474b;
  cursor: pointer;
}

input::placeholder {
  color: #9ebbbd;
}

.inputHeader {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.warning {
  font-size: 16px;
  font-weight: bold;
  color: #e17457;
}

@media screen and (min-width: 1024px) {
  .inputContainer {
    height: fit-content;
    margin-bottom: 16px;
  }
}
</style>
