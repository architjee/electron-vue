<script lang="ts">
import Navbar from './core-components/Navbar.vue'
export default {
  components: {
   'Navbar': Navbar
  },
  data()  {
 return {
   navbarburger_isactive: false

 }
  }
  }
</script>

<template>
<Navbar></Navbar>
<section class="hero is-white is-fullheight-with-navbar">
  <div class="hero-body">
    <router-view></router-view>
  </div>
</section>
 

  
</template>