<template>
  <form>
    <div>
      <VInput
        customLabel="Bill"
        id="billInput"
        :iconPath="require('@/assets/dollarSign.svg')"
        placeholder="0"
        v-model="bill"
      />
      <TipSelector v-model="tipPercentage" />
      <VInput
        customLabel="Number of People"
        id="numberOfPeopleInput"
        :iconPath="require('@/assets/userIcon.svg')"
        placeholder="0"
        v-model="numberOfPeople"
      />
    </div>
    <ResultCard
      :totalPerPerson="totalPerPerson"
      :tipPerPerson="tipPerPerson"
      @reset="reset"
    />
  </form>
</template>

<script setup>
import VInput from './V-Input.vue'
import ResultCard from './ResultCard/Index.vue'
import TipSelector from './TipSelector/Index.vue'
import { ref, watchEffect } from 'vue'

const bill = ref(null)
const tipPercentage = ref(null)
const numberOfPeople = ref(null)
const totalPerPerson = ref(0)
const tipPerPerson = ref(0)

watchEffect(() => {
  const result = bill.value / numberOfPeople.value + tipPerPerson.value
  if (result === Infinity || result === -Infinity || !result) {
    totalPerPerson.value = 0
  } else {
    totalPerPerson.value = result
  }
})

watchEffect(() => {
  const result = (bill.value * tipPercentage.value) / 100 / numberOfPeople.value
  if (result === Infinity || result === -Infinity || !result || result < 0) {
    tipPerPerson.value = 0
  } else {
    tipPerPerson.value = result
  }
})

const reset = () => {
  bill.value = null
  tipPercentage.value = null
  numberOfPeople.value = null
  totalPerPerson.value = 0
  tipPerPerson.value = 0
}
</script>

<style scoped>
@media screen and (min-width: 1024px) {
  form {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  div {
    width: 379px;
    height: 388px;
  }
}
</style>
