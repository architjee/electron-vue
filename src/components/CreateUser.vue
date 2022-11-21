<script lang="ts">
import { defineComponent } from 'vue'
import { useUserAuthStore } from '../store/UserAuthenticationStore';
export default defineComponent({
  // type inference enabled
  data() {
    return {
    userAuthStore: useUserAuthStore(),
      new_username: '',
      new_password: '',
        master_password: ''
    }
  }, 
  methods: {
    validateDataAndCreateUser() {
      if(!this.userAuthStore.checkIfUserExists(this.new_username)){
        if(this.new_password.length>=8){
            this.userAuthStore.createANewUser(this.new_username, this.new_password, this.master_password)
            console.log(this.userAuthStore.getStoreState())
            return true
        }
      }
      return false;
    },
    getStateBack(){
      console.log(this.userAuthStore.getStoreState())
      console.log(this.userAuthStore.getElectronDbItself())
    }
  },
})
</script>

<template>
    <div>
        <div>
            <label> New User's Username</label><input v-model="new_username" type="text">
        </div>
        <div>
            <label> New User's Password</label><input v-model="new_password" type="password">
        </div>
        <div>
            <label> Master User's Password</label><input v-model="master_password" type="password">
        </div>
        <div>
            <button class="button" @click="validateDataAndCreateUser()">Create User</button>
        </div>
        <div>
            <button class="button" @click="getStateBack()">Get State Back</button>
        </div>
    </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
