<template>
  <div class="lineItem">
    <span class="concept">
      <p class="conceptName">{{ conceptName }}</p>
      <p class="conceptDivisor">{{ formatedDivisor }}</p>
    </span>
    <span class="quantity">{{ formatedQuantity }}</span>
  </div>
</template>

<script setup>
import { computed, defineProps, toRefs } from 'vue'

const props = defineProps({
  conceptName: String,
  divisor: String,
  quantity: Number,
})

const { conceptName, divisor, quantity } = toRefs(props)

const formatedQuantity = computed(() => {
  return '$' + ' ' + parseFloat(quantity.value).toFixed(2)
})

const formatedDivisor = computed(() => {
  return `/ ${divisor.value}`
})
</script>

<style scoped>
.lineItem {
  width: 281px;
  height: 48px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.concept {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.conceptName {
  font-weight: bold;
  font-size: 16px;
  color: #ffffff;
}

.conceptDivisor {
  font-weight: bold;
  font-size: 13px;
  color: #7f9d9f;
}

.quantity {
  font-weight: bold;
  font-size: 32px;
  color: #26c2ae;
}

@media screen and (min-width: 1024px) {
  .lineItem {
    width: 100%;
  }
}
</style>
