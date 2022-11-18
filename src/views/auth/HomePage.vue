<template>
    <div class="px-5">
        <header class="masthead bg-primary text-white text-center">
                <div class="container d-flex align-items-center flex-column">
                    <!-- Masthead Avatar Image-->
                    <img v-if="user.role == 'Admin' " class="masthead-avatar mb-5" src="../../assets/admin.jpg" alt="..." />
                    <img v-else class="masthead-avatar mb-5" src="../../assets/guest.jpg" alt="..." />
                    <!-- Masthead Heading-->
                    <h1 class="masthead-heading text-uppercase mb-0" v-if="user">Welcome, {{ user.name }}</h1>
                    <h1 class="masthead-heading text-uppercase mb-0" v-if="!user">You are not log in!</h1>
                    <!-- Icon Divider-->
                    <div class="divider-custom divider-light">
                        <div class="divider-custom-line"></div>
                        <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                        <div class="divider-custom-line"></div>
                    </div>
                    <!-- Masthead Subheading-->
                </div>
        </header>
    </div>
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
.masthead {
  padding-top: calc(6rem + 74px);
  padding-bottom: 6rem;
}
.masthead .masthead-heading {
  font-size: 2.75rem;
  line-height: 2.75rem;
}
.masthead .masthead-subheading {
  font-size: 1.25rem;
}
.masthead .masthead-avatar {
  width: 15rem;
}

@media (min-width: 992px) {
  .masthead {
    padding-top: calc(6rem + 104px);
    padding-bottom: 6rem;
  }
  .masthead .masthead-heading {
    font-size: 4rem;
    line-height: 3.5rem;
  }
  .masthead .masthead-subheading {
    font-size: 1.5rem;
  }
}

.divider-custom {
  margin: 1.25rem 0 1.5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.divider-custom .divider-custom-line {
  width: 100%;
  max-width: 7rem;
  height: 0.25rem;
  background-color: #2c3e50;
  border-radius: 1rem;
  border-color: #2c3e50;
}
.divider-custom .divider-custom-line:first-child {
  margin-right: 1rem;
}
.divider-custom .divider-custom-line:last-child {
  margin-left: 1rem;
}
.divider-custom .divider-custom-icon {
  color: #2c3e50;
  font-size: 2rem;
}
.divider-custom.divider-light .divider-custom-line {
  background-color: #fff;
}
.divider-custom.divider-light .divider-custom-icon {
  color: #fff;
}
</style>