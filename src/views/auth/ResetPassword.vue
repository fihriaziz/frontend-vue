<template>
  <div>
      <div class="contaienr">
          <div class="row justify-content-center">
              <div class="col-md-6">
                  <div class="card">
                      <div class="card-header">
                          Reset Password
                      </div>
                      <form @submit.prevent="handleSubmit()">
                          <div class="card-body">
                              <div class="mb-3">
                                  <label for="password">New Password</label>
                                  <input type="password" v-model="password" id="password" class="form-control">
                              </div>
                              <div class="mb-3">
                                  <button type="submit" class="btn btn-primary">Save</button>
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
    name: 'ResetPassword',
    data() {
        return {
            password : ''
        }
    },
    methods: {
        async handleSubmit(){
             await axios.post('http://127.0.0.1:8000/api/reset-password', {
                token: this.$route.query.token,
                password: this.password
            }).then(() => {
                this.password = ''
                this.$swal({
                    icon: 'success',
                    title: 'Password berhasil di reset',
                    showConfirmButton: false,
                    timer: 1500
                    });
                this.$router.push('/login');
            })
        }
    },
}
</script>

<style>

</style>