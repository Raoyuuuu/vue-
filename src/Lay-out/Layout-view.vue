<template>
    <div class="layout">
        <statusBar></statusBar>
        <Layout>
            <Header>
                <Menu mode="horizontal" theme="dark" active-name="1">
                    <div class="layout-logo">
                        <div class="title">
                            工作报表
                        </div>
                        </div>
                    <div class="layout-nav">
                        <MenuItem name="1" class="item">
                            <Icon type="ios-navigate"></Icon>
                            日工作汇报
                        </MenuItem>
                        <MenuItem name="2" class="item">
                            <Icon type="ios-keypad"></Icon>
                            周工作汇报
                        </MenuItem>
                        <MenuItem name="3" class="item">
                            <Icon type="ios-analytics"></Icon>
                            人员查看
                        </MenuItem>
                        <!-- <MenuItem name="4">
                            <Icon type="ios-paper"></Icon>
                            Item 4
                        </MenuItem> -->
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1-2" theme="light" width="auto" :open-names="['1']">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                部门
                            </template>
                            <MenuItem name="1-1">软件部</MenuItem>
                            <MenuItem name="1-2">财务部</MenuItem>
                            <MenuItem name="1-3">人力资源部</MenuItem>
                        </Submenu>
                        <!-- <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu> -->
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}" class="">
                        <BreadcrumbItem>standing by</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                        <Table></Table>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
        
    </div>
</template>
<script>
import statusBar from '@/head/StatusBar'
import Table from '@/components/Table'


    export default {
         components:{
             statusBar,
             Table
         },
         data(){
             return{
                 username: this.$route.query.username
             }
         },
         mounted(){
            //  this.data.username = ;
         }
    }
</script>
<style scoped>
.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
    color: #fff;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}
.ivu-menu-dark {
    width: 100%;
    background: #515a6e;
}
.item{
    float: right
}
.title{
    position: relative;
    top: -15px;
}
</style>