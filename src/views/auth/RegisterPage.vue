<template>
  <div>
      <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-9">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h1 class="fs-4 card-title fw-bold mb-4">Register</h1>
                            <form @submit.prevent="handleSubmit()">
                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="name">Nama</label>
                                    <input id="name" v-model="form.name" type="name" :class="validation.name ? 'is-invalid form-control' : 'form-control'">
                                    <small v-if="theErrors?.name" class="text-danger mt-2">
                                        {{ theErrors?.name[0] }}
                                    </small>
                                </div>

                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="email">E-Mail</label>
                                    <input id="email" v-model="form.email" type="email" :class="validation.email ? 'is-invalid form-control' : 'form-control' ">
                                    <small class="text-danger mt-2">
                                        {{ validation.email[0] }}
                                    </small>
                                </div>

                                <div class="mb-3">
                                    <div class="mb-2 w-100">
                                        <label class="text-muted" for="password">Password</label>
                                    </div>
                                    <input id="password" v-model="form.password" type="password" :class="validation.password ? 'is-invalid form-control' : 'form-control' "/>
                                    <small class="text-danger mt-2">
                                        {{ validation.password[0] }}
                                    </small>
                                </div>

                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="role">Role</label>
                                    <select v-model="form.role" id="role" :class="validation.role ? 'is-invalid form-control' : 'form-control' ">
                                      <option value="">--Pilih Role--</option>
                                      <option value="User">User</option>
                                      <option value="Admin">Admin</option>
                                    </select>
                                    <small class="text-danger mt-2">
                                        {{ validation.role[0] }}
                                    </small>
                                </div>

                                <div class="d-flex align-items-center">
                                    <div class="form-check">
                                        <router-link to="/forgot-password" class="float-end">
                                            Lupa Password?
                                        </router-link>
                                    </div>
                                    <button type="submit" class="btn btn-primary ms-auto">
                                        Register
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer py-3 border-0">
                            <div class="text-center">
                                Sudah punya akun? <router-link to="/login" class="text-dark">Login</router-link>
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
    name: 'RegisterPage', 
    data() {
      return {
        form: {
          name : '',
          email: '',
          password: '',
          role: '',
        },
        theErrors: [],
        validation: {
            name : '',
            email: '',
            password: '',
            role: '',
        },
        is_loading: false
      }
    },
    methods : {
      async handleSubmit(){
          try {
            this.is_loading = true
            const response = await axios.post('http://127.0.0.1:8000/api/register', this.form)
            if(response.status == 201) {
              this.form.name = '',
              this.form.email = '',
              this.form.password = '',
              this.form.role = ''
              this.$swal({
                icon: 'success',
                title: 'Berhasil',
                text: 'Berhasil register',
                showConfirmButton: false,
                timer: 3000
              }),
              this.$router.push('/login')
            }
          } catch (e) {
            console.log(e.response.data);
          }
      }
    }
}
</script>

<style>

</style>