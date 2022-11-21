import {defineStore } from 'pinia';

export const useUserAuthStore = defineStore('userAuthStore', {
    state: () => ({
        is_authenticated: false,
        username: ''
      }),
      actions: {
        // since we rely on `this`, we cannot use an arrow function
        logout() {
          this.is_authenticated=false
        }}
})