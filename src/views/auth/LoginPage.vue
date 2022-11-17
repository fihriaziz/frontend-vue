<template>
  <div>
      <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h1 class="fs-4 card-title fw-bold mb-4">Login</h1>
                            <form @submit.prevent="handleSubmit()">
                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="email">E-Mail Address</label>
                                    <input id="email" v-model="form.email" type="email" class="form-control" required>
                                    <div class="invalid-feedback">
                                        Email is invalid
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <div class="mb-2 w-100">
                                        <label class="text-muted" for="password">Password</label>
                                    </div>
                                    <input id="password" v-model="form.password" type="password" class="form-control" required/>
                                    <div class="invalid-feedback">
                                        Password is required
                                    </div>
                                </div>
                                <div class="d-flex align-items-center">
                                    <div class="form-check">
                                        <router-link to="/forgot-password" class="float-end">
                                            Lupa Password?
                                        </router-link>
                                    </div>
                                    <button type="submit" class="btn btn-primary ms-auto">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer py-3 border-0">
                            <div class="text-center">
                                Belum punya akun? <router-link to="/register" class="text-dark">Register</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'LoginPage',
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', this.form)
                if(response.status == 200){
                    this.form.email = '',
                    this.form.password = ''
                }
                localStorage.setItem('token', response.data.access_token)
                localStorage.setItem('user', JSON.stringify(response.data.data))
                window.location.href  = '/'
            } catch (error) {
                console.log(error);                
            }

        }
    }
}
</script>

<style>

</style>