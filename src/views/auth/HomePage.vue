<template>
    <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                <!-- Masthead Avatar Image-->
                <img class="masthead-avatar mb-5" src="../../assets/logo.png" alt="..." />
                <!-- Masthead Heading-->
                <h1 class="masthead-heading text-uppercase mb-0" v-if="user">Selamat datang, {{ user.name }}</h1>
                <h1 class="masthead-heading text-uppercase mb-0" v-if="!user">Kamu belum login</h1>
                <!-- Icon Divider-->
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                <!-- Masthead Subheading-->
            </div>
        </header>
</template>

<script>

export default {
    name: 'HomePage',
    data() {
        
    },
    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'));
        }
    },
    mounted() {
      if(!this.user) {
          window.location.href='/login'
      }
    }
}
</script>

<style>

</style>