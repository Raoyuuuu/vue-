import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/HelloWorld'
import tableList from '@/components/Table'
import statusBar from '@/head/StatusBar'
import layOut from '@/Lay-out/Layout-view'
import layOutCom from '@/Lay-out/Layout-commen'
import login from'@/components/Login'
import reportOperation from '@/components/reportOperation'
import selfDailyReport from '@/components/selfDailyReport'
import personelContent from '@/components/personelContent'
import welcomePage from '@/components/welcomePage'
import dailyReport from '@/components/daywork'
import weekyReport from '@/components/weekwork'
import menuControl from '@/components/menuControl'
import uriControl from '@/components/interfaceControl'
import menuOperation from '@/components/menuOperation'
import interfaceOperation from '@/components/interfaceOperation'
import addUri from '@/components/addUri'
import addMenu from '@/components/addMenu'
import addReport from '@/components/addReport'
import roleManagement from '@/components/RoleManagement'
import powerAndMenu from '@/components/PowerAndMenu'
import powerAndUrl from '@/components/PowerAndUrl'



Vue.use(Router)

export default new Router({
    routes:[
        {
            path: '/',
            name: 'login',
            component: login,

        },{
            path: '/hello',
            name: 'HelloWorld',
            component: Hello,
            children: [{
                path: '/week',
                name: 'weekReport',
                component:tableList
            }
        ]
        },{
            path: '/index',
            name: 'statusBar',
            component:statusBar,
        },{
            path: '/layout',
            name: 'managePage',
            component:layOut,
        },
        
        {
            path: '/layoutCom',
            name: 'commenPage',
            component:layOutCom,
            children: [{
                path: '/welcome',
                name: 'welcome',
                component:welcomePage
            },{
            path: '/personelContent',
            name: 'personelContent',
            component:personelContent
        },{
            path: '/reportOperation',
            name: 'reportOperation',
            component:reportOperation
        },{
            path: '/selfDailyReport',
            name: 'selfDailyReport',
            component:selfDailyReport
        },{
            path: '/dailyReport',
            name: 'dailyReport',
            component:dailyReport
        },{
            path: '/weekyReport',
            name: 'weekyReport',
            component:weekyReport
        },{
            path:'/menuControl',
            name: 'menuControl',
            component: menuControl
        },{
            path:'/uriControl',
            name: 'uriControl',
            component: uriControl
        },{
            path: '/menuOperation',
            name: 'menuOperation',
            component:menuOperation
        },{
            path: '/interfaceOperation',
            name: 'interfaceOperation',
            component:interfaceOperation
        },{
            path: '/addUri',
            name: 'addUri',
            component:addUri
        },{
            path: '/addMenu',
            name: 'addMenu',
            component:addMenu
        },{
            path: '/addReport',
            name: 'addReport',
            component:addReport
        }]
        },
        
        {
            path: '/roleManagement',
            name: 'roleManagement',
            component:roleManagement
        },
        {
            path: '/powerAndMenu',
            name: 'powerAndMenu',
            component:powerAndMenu
        },
        {
            path: '/powerAndUrl',
            name: 'powerAndUrl',
            component:powerAndUrl
        },
        
    ]
})