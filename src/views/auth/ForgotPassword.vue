<template>
  <div>
      <section class="h-100">
        <div class="container h-100">
            <div class="row justify-content-sm-center h-100">
                <div class="col-xxl-4 col-xl-5 col-lg-5 col-md-7 col-sm-9">
                    <div class="card shadow-lg">
                        <div class="card-body p-5">
                            <h1 class="fs-4 card-title fw-bold mb-4">Forgot password</h1>
                            <form @submit.prevent="handleSubmit()">
                                <div class="mb-3">
                                    <label class="mb-2 text-muted" for="email">E-Mail Address</label>
                                    <input id="email" v-model="email" type="email" :class="theErrors.email ? 'is-invalid form-control' : 'form-control'">
                                    <div v-if="theErrors?.email" class="invalid-feedback">
                                        {{ theErrors?.email[0] }}
                                    </div>
                                </div>

                                <div class="d-flex align-items-center">
                                    <button type="submit" class="btn btn-primary">Send Email</button>
                                    <template v-if="loading">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="30px" height="30px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                    <g transform="rotate(0 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.9166666666666666s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(30 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.8333333333333334s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(60 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(90 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.6666666666666666s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(120 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5833333333333334s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(150 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(180 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.4166666666666667s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(210 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.3333333333333333s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(240 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(270 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.16666666666666666s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(300 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="-0.08333333333333333s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g><g transform="rotate(330 50 50)">
                                    <rect x="47" y="24" rx="3" ry="6" width="6" height="12" fill="#7185fe">
                                        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animate>
                                    </rect>
                                    </g>
                                    <!-- [ldio] generated by https://loading.io/ --></svg>
                                </template>
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
import client from '../../Interceptor'

export default {
    name: 'ForgotPassword',
    data() {
        return {
            loading : false,
            email: '',
            theErrors: []
        }
    },
    methods: {
        async handleSubmit(){
            this.loading = true
            await client.post('forgot-password', {
                email: this.email
            })
            .then((response) => {
                if(response.status == 200) {
                    this.$swal({
                        icon: 'success',
                        title: 'Berhasil',
                        text: 'Password berhasil di reset, Cek email anda',
                        showConfirmButton: false,
                        timer: 3000
                    });
                }
                this.email = '',
                this.loading = false
            })
            .catch((error)=> {
                this.theErrors = error.response?.data?.errors,
                this.loading = false
            })
        }
    }
}
</script>

<style>

</style>