<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28">
      </a>

      <a role="button" class="navbar-burger" :class="{ 'is-active': navbarburger_isactive }" aria-label="menu"
        aria-expanded="false" data-target="navbarBasicExample" @click="navbarburger_isactive = !navbarburger_isactive">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': navbarburger_isactive }">
      <div class="navbar-start">
        <router-link class="navbar-item" to="/">Home</router-link>
        <router-link class="navbar-item" to="/about">About</router-link>
        <router-link class="navbar-item" to="/createuser">Create User</router-link>

      </div>

      <div class="navbar-end">

      </div>
    </div>
  </nav>

</template>

<script lang="ts">
import { useUserAuthStore } from 'src/store/UserAuthenticationStore';
export default {
  data() {
    return {
      navbarburger_isactive: false

    }
  }
}

</script>