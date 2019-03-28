<template>
    <div id = 'box'>
        <div><img src="@/assets/keytopLogo.jpg" id = 'logo'/></div>
        <table id = 'userStatus'>
            <tr>
                <td class = 'UserItem'>
                    <img src="@/assets/userImg.jpg" class="circleSquare"/>
                    {{username}}
                </td>
                <!-- <td class = 'reportManage'>
                    <a href="#"  @click="changeCss(1)">{{reportManage}}</a>
                </td> -->
                <td class = 'reportShow'>
                    <a @click="loginOff"> {{reportShow}}</a>
                </td>
            </tr>
        </table>
        <!-- <tools></tools> -->
    </div>
</template>

<script>
import tools from './toolBar'
import axios from 'axios'
import qs from 'qs'


export default {
    components:{
        tools
        },
    methods:{
        loginOff:function(){
            var myToken = window.localStorage.getItem('token')
            console.log(myToken)
            this.axios.defaults.headers.common['kt-token'] = myToken;
            this.axios.post('http://10.1.9.54:9200/daily/userinfo/logOut')
            
            .then(res => {
                console.log(res)
                if(res.data.resultCode == '200'){
                    alert("操作成功！")
                    this.$router.push('/')
                    window.localStorage.clear()
                }
            })
            .catch(err => {
                console.error(err); 
            })
        }
    },
    data(){
        return{
         username:window.localStorage.getItem('username'),
         reportShow: '退出登录',
        }
    },
   
   

    
}
</script>

<style>
    /* tr{
        padding-bottom: 8px
    }    */
    #box{
        height: 60px;
        text-align: center;
        background-color: #fff
    }
    .circleSquare{
        height: 20px;
        width: 20px;
        border-radius: 10px
    }
    #userStatus{
        margin-top: 12px;
        float: right;
        font-size: 15px;
        font-weight: normal
    }
    .UserItem{
        padding-bottom: 6px;
        padding-right: 4px;
        border-right: rgb(140, 148, 156) 2px solid;
    }
    /* .reportShow{
        border-left: rgb(140, 148, 156) 2px solid;
    } */
    a{
        color: black;
        text-decoration: none;
    }
    .black{
        color: rgb(100, 127, 199);
    }
    .blue{
        color: black;
    }
    #logo{
        float: left;
        height: 60px;
    }
    /* a:active{
        color:black
    }
    a:visited{
        color:black
    }
    a:hover{
         color: rgb(101, 163, 221);
    } */
</style>
