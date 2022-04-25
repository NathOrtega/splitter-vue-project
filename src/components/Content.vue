<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'v-content',
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 83vh;
  padding: 25px;
  background-color: white;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

@media screen and (min-width: 768px) {
  .container {
    width: 80%;
    height: 645px;
    border-radius: 25px;
    margin: 0 auto 50px;
  }
}

@media screen and (min-width: 1024px) {
  .container {
    width: 920px;
    height: fit-content;
    border-radius: 25px;
    margin: 0 auto;
    padding: 32px;
  }
}
</style>
