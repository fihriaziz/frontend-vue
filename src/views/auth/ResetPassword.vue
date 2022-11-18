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
                                <label class="mb-2 text-muted" for="password">New Password</label>
                                <input id="password" v-model="password" type="password" :class="theErrors.password ? 'is-invalid form-control' : 'form-control'">
                                <div v-if="theErrors?.password" class="invalid-feedback">
                                    {{ theErrors?.password[0] }}
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
import client from '../../Interceptor';

export default {
    name: 'ResetPassword',
    data() {
        return {
            password : '',
            loading :false,
            theErrors: []
        }
    },
    methods: {
        async handleSubmit(){
            this.loading = true
             await client.post('reset-password', {
                token: this.$route.query.token,
                password: this.password
            })
            .then(() => {
                this.password = ''
                this.$swal({
                    icon: 'success',
                    title: 'Password berhasil di reset',
                    showConfirmButton: false,
                    timer: 1500
                    });
                this.$router.push('/login');
            })
            .catch((error)=> {
                this.theErrors = error.response?.data?.errors
            })
        }
    },
}
</script>

<style>

</style>