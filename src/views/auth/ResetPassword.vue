<template>
  <div>
    <section class="h-100">
    <div class="container h-100">
        <div class="row justify-content-sm-center h-100">
            <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                <div class="card shadow-lg">
                    <div class="card-body p-5">
                        <h1 class="fs-4 card-title fw-bold mb-4">Reset password</h1>
                        <form @submit.prevent="handleSubmit()">
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="password">Password Baru</label>
                                <input id="password" v-model="password" type="password" class="form-control" required>
                                <div class="invalid-feedback">
                                    Password is required
                                </div>
                            </div>

                            <div class="d-flex align-items-center">
                                <button type="submit" class="btn btn-primary d-flex align-items-center">Reset Password</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ResetPassword',
    data() {
        return {
            password : '',
            loading :false
        }
    },
    methods: {
        async handleSubmit(){
            this.loading = true
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