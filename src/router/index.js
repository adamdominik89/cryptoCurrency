import Vue from 'vue'
import Router from 'vue-router'

import CurrenciesList from '../components/pages/Currencies-list'


Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'CurrenciesList',
            component: CurrenciesList
        }
    ]
})
router.beforeEach((to, from, next) => {

    next()
})
export default router
