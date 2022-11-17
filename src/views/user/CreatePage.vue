<template>
  <div>
      <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-6 col-md-6 col-sm-9">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h1 class="fs-4 card-title fw-bold mb-4">Form Tambah User</h1>
                            <form @submit.prevent="handleSubmit()">
                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="name">Nama</label>
                                    <input id="name" v-model="form.name" type="name" class="form-control" required>
                                    <div class="invalid-feedback">
                                        Name is invalid
                                    </div>
                                </div>

                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="email">E-Mail</label>
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

                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="role">Role</label>
                                    <select v-model="form.role" id="role" class="form-control">
                                      <option value="">--Pilih Role--</option>
                                      <option value="User">User</option>
                                      <option value="Admin">Admin</option>
                                    </select>
                                    <div class="invalid-feedback">
                                        Email is invalid
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <button type="submit" class="btn btn-primary ms-auto">
                                        Register
                                    </button>
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
import axios from 'axios'

export default {
    name: 'CreatePage',
    data() {
        return {
            form: {
                name : '',
                email: '',
                password: '',
                role: ''
            }
        }
    }, 
    methods: {
        async handleSubmit() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/add-user', this.form)

            console.log(response);
            } catch (err) {
                console.log(err.response.data.errors);
            }
        }
    }
}
</script>

<style>

</style>