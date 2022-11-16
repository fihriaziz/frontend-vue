<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="card">
              <form @submit.prevent="handleSubmit()">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <div class="mb-3">
                        <label for="name">Name</label>
                        <input type="text" id="name" v-model="name" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="email">Email</label>
                        <input type="email" id="email" v-model="email" class="form-control">
                    </div>
                    <div class="mb-3">
                        <label for="password">Password</label>
                        <input type="password" id="password" v-model="password" class="form-control">
                    </div>
                    <div class="mb-3">
                      <label for="role">Role</label>
                      <select id="role" v-model="role" class="form-control">
                        <option value="">--Pilih Role--</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                      </select>
                    </div>
                    <div class="mb-3">
                        <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                </div>
              </form>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'RegisterPage', 
    data() {
      return {
        name : '',
        email: '',
        password: '',
        role: ''
      }
    },
    methods : {
      async handleSubmit(){
        const response = await axios.post('http://127.0.0.1:8000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          role: this.role
        });

        console.log(response);
        this.$router.push('/');
      }
    }
}
</script>

<style>

</style>