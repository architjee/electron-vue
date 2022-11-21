<script setup lang="ts">
import Home from './components/Home.vue'
</script>

<template>
  <router-link to="/">Home</router-link>
  <router-link to="/about">About</router-link>
  <router-view></router-view>
</template>


