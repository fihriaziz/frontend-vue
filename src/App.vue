<template>  
	<div>
		<NavBar :user="user" v-if="user"/>
		<div class="p-5">
			<router-view :user="user"/>
		</div>
	</div>
</template>

<script>
import client from './Interceptor'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar,
  },
  data() {
        return {
            user: null,
        }
    },
    async created() {
        const response = await client.get('profile')
        
        this.user = response.data
    },

}
</script>

<style>
</style>
