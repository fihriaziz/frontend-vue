<template>
  <div class="container bg-primary text-light p-5">
        <div class="container bg-secondary p-5">
            <h1 class="display-4" v-if="user">Welcome {{ user.name }}</h1>
            <h1 class="display-4" v-if="!user">You are not log in!</h1>
            <hr>
            <p>Go to My Website</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HomePage',
    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'));
        }
    }
}
</script>

<style>

</style>