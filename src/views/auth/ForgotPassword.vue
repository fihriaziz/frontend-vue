<template>
  <div>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-6">
                  <div class="card">
                      <div class="card-header">Forgot Password</div>
                        <form @submit.prevent="handleSubmit()">
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" v-model="email" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary">Send Email</button>
                                </div>
                            </div>
                        </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ForgotPassword',
    data() {
        return {
            email: ''
        }
    },
    methods: {
        async handleSubmit(){
             await axios.post('http://127.0.0.1:8000/api/forgot-password', {
                email: this.email
            })
        }
    }
}
</script>

<style>

</style>