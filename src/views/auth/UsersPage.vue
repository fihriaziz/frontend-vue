<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-10">
              <h4 class="text-center">All Users</h4>
              <div class="d-flex justify-content-end">
                <button @click="showModal = true" class="btn btn-sm btn-primary">Tambah User</button>
              </div>
              <table class="table table-striped table-bordered mt-3">
                  <thead>
                        <tr>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th v-if="user?.role == 'Admin'">Aksi</th>
                        </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(item, index) in dataUsers" :key="index">
                          <td>{{ item.name}}</td>
                          <td>{{ item.email }}</td>
                          <td>{{ item.role }}</td>
                          <td v-if="user?.role == 'Admin'">
                              <router-link to="{name: 'EditPage', params:{id: item.id }}" class="btn btn-primary">Edit</router-link>
                              <button @click="deleteUser(item.id)" class="btn btn-danger ms-3">Delete</button>
                          </td>
                      </tr>
                  </tbody>
              </table>
          </div>
      </div>

      <!-- modal -->
      <transition name="modal" v-if="showModal">
          <div class="modal-mask">
            <div class="modal d-flex modal-lg" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content w-500">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                        <button type="button" class="btn-close" @click="showModal = false"></button>
                    </div>
                    <div class="modal-body">
                        <section>
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="name">Nama</label>
                                <input id="name" v-model="form.name" type="name" class="form-control" required>
                            </div>

                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="email">E-Mail</label>
                                <input id="email" v-model="form.email" type="email" class="form-control" required>
                            </div>

                            <div class="mb-3">
                                <div class="mb-2 w-100">
                                    <label class="text-muted" for="password">Password</label>
                                </div>
                                <input id="password" v-model="form.password" type="password" class="form-control" required/>
                            </div>

                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="role">Role</label>
                                <select v-model="form.role" id="role" class="form-control">
                                    <option value="">--Pilih Role--</option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                        </section>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="showModal = false">Close</button>
                        <button type="button" class="btn btn-primary" @click="handleSubmit">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
        <!-- end moda; -->
  </div>
</template>

<script>
import client from '../../Interceptor'

export default {
    name: 'UsersPage',
    computed: {
        user() {
            return JSON.parse(localStorage.getItem('user'));
        },
    },
    data() {
        return {
            form: {
                name : '',
                email: '',
                password: '',
                role: ''
            },
            dataUsers: [],
            isModalVisible: false,
            showModal: false
        }
    },
    mounted() {
        this.showUser();
        const user = JSON.parse(localStorage.getItem('user'));
        if(!user){
            this.$router.push('/login')
        }
    },
    methods: {
        async handleSubmit() {
            try {
                await client.post('add-user/', this.form)
                this.showUser();
                this.showModal = false;
            } catch (err) {
                console.log(err.response.data.errors);
            }
        },
        async showUser(){
            let {data} = await client.get('users')
            this.dataUsers = data.data
        },
        async deleteUser(id) {
            await client.delete(`delete-user/${id}`)
                .then(response => {
                    if(response.status == 200) {
                        this.$swal({
                            icon: 'success',
                            title: 'Berhasil',
                            text: 'Data user berhasil di hapus',
                            showConfirmButton: false,
                            timer: 3000
                        });            
                    }
            })
            this.showUser();
        }
    }    
}
</script>

<style scoped>
.modal-mask {
  position: absolute;
  z-index: 9998;
  margin:0 auto;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
  display: flex;
    justify-content: center;
align-items: center;
}
</style>