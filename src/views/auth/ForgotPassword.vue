<template>
  <div>
      <div class="container">
          <div class="row justify-content-center">
              <div class="col-md-6">
                  
                  <div class="card">
                      <div class="card-header">Forgot Password</div>
                        <form @submit.prevent="handleClick()">
                            <div class="card-body">
                                <div class="mb-3">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" v-model="email" class="form-control">
                                </div>
                                <div class="mb-3">
                                    <button type="submit" :disabled="is_loading" class="btn btn-primary">Send Email</button>
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
import axios from 'axios'

export default {
    name: 'ForgotPassword',
    data() {
        return {
            is_loading : false,
            email: '',
        }
    },
    methods: {
        async handleClick(){
            this.is_loading = true
            await axios.post('http://127.0.0.1:8000/api/forgot-password', {
                email: this.email
            }).then(() => {
                this.email = '',
                this.$swal({
                    icon: 'success',
                    title: 'Berhasil',
                    text: 'Password berhasil di reset, Cek email anda',
                    showConfirmButton: false,
                    timer: 3000
                });
            })
        }
    }
}
</script>

<style>

</style>