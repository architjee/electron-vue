import {defineStore } from 'pinia';

export const useUserAuthStore = defineStore('userAuthStore', {
    state: () => ({
        is_authenticated: false,
        username: ''
      }),

})