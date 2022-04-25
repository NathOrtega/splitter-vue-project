<template>
  <div v-if="!variant" class="inputContainer">
    <div class="inputHeader">
      <label v-if="customLabel" :for="id">
        {{ customLabel }}
      </label>
      <span v-show="value < 0 || value === 0" class="warning">
        Can't be {{ value === 0 ? 'zero' : 'negative' }}
      </span>
    </div>
    <div
      class="customInput"
      :style="value < 0 || value === 0 ? 'border: 2px solid #e17457' : 'none'"
    >
      <label v-if="iconPath" :for="id">
        <img :src="iconPath" />
      </label>
      <input
        :id="id"
        type="number"
        :placeholder="placeholder"
        v-model="value"
        @change="inputChange"
      />
    </div>
  </div>
  <input
    v-else
    type="number"
    :placeholder="placeholder"
    class="smallInput"
    v-model="value"
    :style="value < 0 || value === 0 ? 'border: 2px solid #e17457' : 'none'"
  />
</template>

<script setup>
import { defineProps, toRefs, ref, defineEmits, watchEffect } from 'vue'

const props = defineProps({
  customLabel: String,
  iconPath: String,
  placeholder: String,
  variant: String,
  id: String,
})

const { customLabel, iconPath, placeholder, variant, id } = toRefs(props)

const value = ref(null)

const emit = defineEmits(['inputChange'])

watchEffect(() => {
  emit('inputChange', value)
})
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

.customInput:focus-within,
.smallInput:focus-within {
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

.smallInput {
  width: 148px;
  height: 48px;
  background-color: #f3f9fa;
  border-radius: 5px;
  padding: 0 16px;
  margin-bottom: 16px;
}

.smallInput::placeholder {
  color: #547878;
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
