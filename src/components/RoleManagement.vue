<template>
<div>
    <Table border :columns="columns7" :data="role1"></Table>
     <Modal
        v-model="modal1"
        title="角色权限"
        @on-ok="ok"
        @on-cancel="cancel"
       
        >
        <transfer></transfer>
    </Modal>
</div>
</template>
<script>
import transfer from '@/components/Transfer'
import axios from 'axios'
import qs from 'qs'

var myId
    export default {
        components: {
             transfer,
            },
        data(){
            return {
                modal1:false,
                roleId:[],
                role1:[],
                perssionList:[],
                columns7: [
                    {
                        title: '角色',
                        key: 'role',
                        render: (h, params) => {
                            
                               let str=''
                                var id = params.row.role.roleId
                                
                                this.roleId.push(id)
                                str+=`${params.row.role.roleName},`
                            
                        
                            return h('div',  str);
                         
                    },
                    },
                    // {
                    //     title: '部门',
                    //     key: 'department'
                    // },
                    {
                        title: '权限',
                        key: 'powers',
                        render: (h, params) => {
                            let str=''
                            for( let i=0; i<params.row.powers.length;i++){
                                str+=`${params.row.powers[i].powerName},`
                            
                            }
                            return h('div',  str);
                        
                        }
                    },
                    {
                        title: '操作',
                        key: 'action',
                        width: 150,
                        align: 'center',
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.edit(params.index)
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.remove(params.index)
                                        }
                                    }
                                }, '删除')
                            ]);
                        }
                    }
                ],
            }
        },
        methods: {
            edit (data) {
                myId = this.$data.roleId[data]
                console.log(myId)
                this.modal1=true

            },
            remove (index) {
                this.data6.splice(index, 1);
            },
            ok(){
             console.log("OK")
             var params={
                 roleId:myId,
                 powerIds:this.$store.role
             }
            //  var params = new URLSearchParams();
            //   params.append('roleId',myId);
            //   params.append('powerIds',JSON.stringify(this.$store.role));
              console.log(params)
              var myToken = window.localStorage.getItem('token')
              this.axios.defaults.headers["Content-Type"]='application/json;charset=UTF-8'
              this.axios.defaults.headers.common['kt-token'] = 'e18xyzv1j7n25t98yp8aq4gib1eulkkxzn0sw3esu64k0rpv6hg4sr3gn9hv6kyruotflc6'
              this.axios.post("http://10.1.9.53:9200/daily/roleinfo/saveRoleAndPowers",params).then(res =>{
                  if(res.data.resultCode == '200'){
            //         // this.personel = res.data.data
                     console.log('保存成功')
                     this.load.push('/roleManagement')
                  }
              }).catch(err => {
                 console.error(err); 
             })
            // var myToken = window.localStorage.getItem('token')
            // this.axios.defaults.headers.common['kt-token'] = 'e18xyzv1j7n25t98yp8aq4gib1eulkkxzn0sw3esu64k0rpv6hg4sr3gn9hv6kyruotflc6'
            // this.axios.post('http://10.1.9.53:9200/daily/roleinfo/saveRoleAndPowers',
            // qs.stringify(
            //     {
            //         roleId:myId,
            //         powerIds:this.$store.role,
            //         },

                

            //         )
            // )
            // .then(res => {
            //     debugger
            //     console.log(res)
            //     if(res.data.resultCode == '200'){
            //         // this.personel = res.data.data
            //         console.log('保存成功')
            //     }
            // })
            // .catch(err => {
            //     console.error(err); 
            // })

            },
            cancel(){
            }
        },
    mounted(){
            var myToken = window.localStorage.getItem('token')
            this.axios.defaults.headers.common['kt-token'] ='e18xyzv1j7n25t98yp8aq4gib1eulkkxzn0sw3esu64k0rpv6hg4sr3gn9hv6kyruotflc6'
            this.axios.post('http://10.1.9.54:9200/daily/roleinfo/findAllRolesAndPowers')
            .then(res => {
                if(res.data.resultCode == '200'){
                    var index = res.data.data
                    for(let i=0;i<index.length;i++){
                        var powername = res.data.data[i].role.roleName
                        this.perssionList.push(powername)

                        }
                    this.role1 = res.data.data
                }
            })
            .catch(err => {
                console.error(err); 
            })
            // this.axios.post('http://10.1.9.50:9200/daily/deptinfo/findAll')
            // .then(res => {
            //     console.log(res)
            //     if(res.data.resultCode == '200'){
            //         this.department = res.data.data
            //     }
            // })
            // .catch(err => {
            //     console.error(err); 
            // })
    }
    }
</script>