<template>
  <v-header>
    <img src="@/assets/SPLITTER.svg" alt="Logo" class="logo" />
  </v-header>
  <v-content>
    <v-form />
  </v-content>
</template>

<script setup>
import vContent from './components/Content.vue'
import vHeader from './components/Header.vue'
import vForm from './components/Form/Index.vue'
</script>

<style>
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  background-color: #c5e4e7;
}

#app {
  width: 100%;
  height: 100%;
  font-family: 'Space Mono', monospace;
}

.logo {
  margin: 0 auto;
}
</style>
