<script setup>
import HelloWorld from './components/HelloWorld.vue'
 
</script>

<template>

 
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
 
  <RouterLink to="/error">Login</RouterLink>
  <el-divider >
  <!-- <el-icon><star-filled /></el-icon> -->
  </el-divider >

  <RouterLink to="/about">About</RouterLink>
  <router-view />
 
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
