<template>  
	<div>
		<NavBar :user="user" v-if="user"/>
        <ModalComponent :user="user" v-if="user"/>
		<div class="p-5">
			<router-view :user="user"/>
		</div>
	</div>
</template>

<script>
import axios from 'axios'
import NavBar from './components/NavBar'
import ModalComponent from './components/ModalComponent.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    ModalComponent
  },
  data() {
        return {
            user: null,
        }
    },
    async created() {
        const response = await axios.get('http://127.0.0.1:8000/api/profile', {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        
        this.user = response.data
    },

}
</script>

<style>
</style>
