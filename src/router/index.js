import Vue from 'vue'
import Router from 'vue-router'

import CurrenciesList from '../components/pages/Currencies-list'
import ErrorPage from '../components/pages/Error'

const routes = [
    {
        path: '/',
        name: 'CurrenciesList',
        component: CurrenciesList
    },
    {
        path: '/errorPage',
        name: 'ErrorPage',
        component: ErrorPage
    }
]

Vue.use(Router)

const router = new Router({
    routes
})
router.beforeEach((to, from, next) => {
    if ((routes.find(route => route.path === to.path) && to.path !== '/errorPage') || to.path === '/errorPage') {
        next()
    } else {
        next({name: 'ErrorPage'})
    }
})
export default router
