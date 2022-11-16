<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <form @submit.prevent="handleSubmit()">
            <div class="card-header">Login</div>
              <div class="card-body">
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" id="email" v-model="email" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="password">Password</label>
                    <input type="password" id="password" v-model="password" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="submit" class="btn btn-primary d-block">Log In</button>
                </div>
                <router-link to="/forgot-password">Forgot Password?</router-link>
              </div>
            </form>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'CardItem',
    data() {
      return {
        email : '',
        password: '',
      }
    },
    methods : {
      async handleSubmit() {
        const response = await axios.post('http://127.0.0.1:8000/api/login', {
          email: this.email, 
          password: this.password
        })

        localStorage.setItem('token', response.data.access_token)
        localStorage.setItem('user', JSON.stringify(response.data.data))
        window.location.href = '/'
      }
    }
}
</script>

<style>

</style>