<template>
  <header :style="headerStyles">
    <slot></slot>
  </header>
</template>

<script setup>
import { defineProps, toRefs } from 'vue'

const props = defineProps({
  width: String,
  height: String,
  padding: String,
  backgroundColor: String,
})

const { width, height, padding, backgroundColor } = toRefs(props)

const headerStyles = {
  width: width.value,
  height: height.value,
  padding: padding.value,
  backgroundColor: backgroundColor.value,
}
</script>

<style scoped>
header {
  width: 100%;
  height: 144px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #c5e4e7;
}
</style>
