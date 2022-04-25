<template>
  <div class="resultCard">
    <div class="lineItemsContainer">
      <LineItem
        conceptName="Tip Amount"
        divisor="person"
        :quantity="tipPerPerson"
      />
      <LineItem
        conceptName="Total"
        divisor="person"
        :quantity="totalPerPerson"
      />
    </div>
    <button
      :class="{ disabled: !totalPerPerson && !tipPerPerson }"
      :disabled="!totalPerPerson && !tipPerPerson"
      @click="location.reload()"
    >
      RESET
    </button>
  </div>
</template>

<script setup>
import LineItem from './LineItem.vue'
import { toRefs, defineProps } from 'vue'

const props = defineProps({
  totalPerPerson: Number,
  tipPerPerson: Number,
})

const { totalPerPerson, tipPerPerson } = toRefs(props)
</script>

<style scoped>
.resultCard {
  width: 100%;
  height: 233px;
  padding: 24px;
  border-radius: 15px;
  background-color: #00474b;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

button {
  width: 281px;
  height: 48px;
  border-radius: 5px;
  border: none;
  outline: none;
  background-color: #26c2ae;
  color: #00474b;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

button:hover:not([disabled]) {
  background-color: #9fe8df;
}

.disabled {
  background-color: #0d686d;
  color: #00474b;
  cursor: not-allowed;
}

@media screen and (min-width: 1024px) {
  .resultCard {
    width: 413px;
    height: 417px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .lineItemsContainer {
    width: 100%;
  }

  button {
    width: 100%;
  }
}
</style>
