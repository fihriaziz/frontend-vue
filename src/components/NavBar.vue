<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">Vue App</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto" v-if="user == null">
            <li class="nav-item">
              <router-link class="nav-link" to="/login">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/register">Register</router-link>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto" v-else>
          <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
            <li class="nav-item">
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/users">User</router-link>
            </li>
            <li class="nav-item">
              <router-link  @click="handleClick()" class="nav-link" to="/logout">Logout</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>

export default {
    name: 'NavBar',
    computed: {
        user() {
            return window.localStorage.getItem('token');
        }
    },
    methods: {
      handleClick() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login'
      }
    }
}
</script>

<style>

</style>