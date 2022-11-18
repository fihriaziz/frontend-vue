<template>
  <div class="container">
      <div class="row justify-content-center">
          <div class="col-md-10">
              <h4 class="text-center">All Users</h4>
              <div class="d-flex justify-content-end">
                <button v-if="user?.role == 'Admin'" @click="showModal = true" class="btn btn-sm btn-primary">Add User</button>
              </div>
              <table class="table table-striped table-bordered mt-3">
                  <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th v-if="user?.role == 'Admin'">Action</th>
                        </tr>
                  </thead>
                  <tbody>
                      <tr v-for="(item, index) in dataUsers" :key="index">
                          <td>{{ item.name}}</td>
                          <td>{{ item.email }}</td>
                          <td v-if="user?.role == 'Admin'">
                              <div class="form-check form-switch">
                                <input class="form-check-input" :checked="item.role == 'Admin' ? true : false" type="checkbox" role="switch" id="flexSwitchCheckChecked" @click.prevent="updateRole(item.id)">
                                <label :class="item.role == 'Admin' ?  'badge rounded-pill text-bg-danger' : 'badge rounded-pill text-bg-success'" for="flexSwitchCheckChecked">{{ item.role }}</label>
                             </div>
                          </td>
                          <td v-else>
                              <label :class="item.role == 'Admin' ?  'badge rounded-pill text-bg-danger' : 'badge rounded-pill text-bg-success'" for="flexSwitchCheckChecked">{{ item.role }}</label>
                          </td>
                          <td v-if="user?.role == 'Admin'">
                              <button @click.prevent="editUser(item)" class="btn btn-primary">Edit</button>
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
                        <h1 class="modal-title fs-5" id="exampleModalLabel">{{ dataSelected == "" ? 'Tambah' : 'Update' }} User</h1>
                        <button type="button" class="btn-close" @click="emptyState"></button>
                    </div>
                    <div class="modal-body">
                        <section>
                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="name">Name</label>
                                <input id="name" v-model="form.name" type="name" :class="theErrors.name ? 'is-invalid form-control' : 'form-control' ">
                            </div>
                            <small v-if="theErrors?.name" class="text-danger">
                                {{ theErrors?.name[0] }}
                            </small>

                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="email">E-Mail</label>
                                <input id="email" v-model="form.email" type="email" :class="theErrors.email ? 'is-invalid form-control' : 'form-control' ">
                            </div>
                            <small v-if="theErrors?.email" class="text-danger">
                                {{ theErrors?.email[0] }}
                            </small>

                            <div class="mb-3">
                                <div class="mb-2 w-100">
                                    <label class="text-muted" for="password">Password</label>
                                </div>
                                <input id="password" v-model="form.password" type="password" class="form-control"/>
                            </div>

                            <div class="mb-3">
                                <label class="mb-2 text-muted" for="role">Role</label>
                                <select v-model="form.role" id="role" :class="theErrors.role ? 'is-invalid form-control' : 'form-control' ">
                                    <option value="">--Choose Role--</option>
                                    <option value="User">User</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </div>
                            <small v-if="theErrors?.role" class="text-danger">
                                {{ theErrors?.role[0] }}
                            </small>
                        </section>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" @click="emptyState">Close</button>
                        <button type="button" class="btn btn-primary" @click="handleSubmit">Save</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </transition>
        <!-- end modal -->
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
                id:"",
                name : '',
                email: '',
                password: '',
                role: ''
            },
            theErrors: [],
            dataSelected: [],
            dataUsers: [],
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
        handleSubmit() {
            if(this.dataSelected == "") {
                this.createUser();
            } else {
                this.updateUser();
            }
        },
        async updateUser() {
            try {
                await client.put('update-user/'+this.form.id, this.form )
                    .then(() => {
                        this.$swal({
                            icon: 'success',
                            title: 'Success',
                            text: 'Success update user',
                            showConfirmButton: false,
                            timer: 3000
                        });
                        this.showModal = false;
                        this.showUser();
                    })
                    .catch((error) => {
                        this.theErrors = error.response?.data?.errors
                    });
                
            } catch (err) {
                console.log(err.response.data.errors);
            }
        },
        async createUser() {
            try {        
                await client.post('add-user/', this.form)
                .then(() => {
                    this.showModal = false;
                    this.showUser();
                    this.$swal({
                            icon: 'success',
                            title: 'Success',
                            text: 'Success create user',
                            showConfirmButton: false,
                            timer: 3000
                        });
                })
                    .catch((error) => {
                        this.theErrors = error.response?.data?.errors
                    });
            } catch (err) {
                // console.log(err.response.data.errors);
            }
        },
        async showUser(){
            let {data} = await client.get('users')
            this.dataUsers = data.data
        },
        async editUser(item) {
            this.showModal = true;
            this.dataSelected = item;
            
            this.form.id = this.dataSelected.id
            this.form.name = this.dataSelected.name
            this.form.email = this.dataSelected.email
            this.form.role = this.dataSelected.role
        },
        async deleteUser(id) {
            await this.$swal.fire({
                title: 'Do you want to delete user?',
                showCancelButton: true,
                confirmButtonColor: '#dc3545',
                confirmButtonText: 'Delete',
                }).then((response) => {
                if (response.isConfirmed) {
                client.delete(`delete-user/${id}`)
                .then(response => {
                    if(response.status == 200) {
                        this.$swal({
                            icon: 'success',
                            title: 'Success',
                            text: 'Success delete user',
                            showConfirmButton: false,
                            timer: 3000
                        });            
                    }
                    this.showUser();
            })
                } else if (response.isDenied) {
                    this.$swal.fire('Saved!', '', 'success')
                }
                })
            
        },

     async updateRole(id) {
        await client.put('change/'+id)
         .then(response => console.log(response))
         this.showUser()
     },

        emptyState() {
            this.showModal = false;
            this.form.name = ""
            this.form.email = ""
            this.form.password = ""
            this.form.role = ""
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