<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-7">
              <h4 class="text-center">All Users</h4>
              <div class="d-flex justify-content-end">
                  <button class="btn btn-secondary" v-if="user.role == 'Admin'">Add User</button>
              </div>
              <table class="table table-bordered mt-3">
                  <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th v-if="user.role == 'Admin'">Aksi</th>
                        </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(item, index) in dataUsers" :key="index">
                          <td>{{ item.name}}</td>
                          <td>{{ item.email }}</td>
                          <td>{{ item.role }}</td>
                          <td v-if="user.role == 'Admin'">
                              <button type="button" class="btn btn-primary">Edit</button>
                              <button type="button" class="btn btn-danger ms-3">Delete</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'HomePage',
    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'));
        }
    },
    data() {
        return {
            dataUsers: []
        }
    },
    mounted() {
        this.showUser()
    },
    methods: {
        async showUser(){
            let {data} =await axios.get('http://127.0.0.1:8000/api/users', {
               headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
            })
            this.dataUsers = data.data
        }
    }    
}
</script>

<style>

</style>