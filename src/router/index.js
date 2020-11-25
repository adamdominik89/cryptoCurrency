import Vue from 'vue'
import Router from 'vue-router'

import CurrenciesList from '../components/pages/Currencies-list'
import CryptoDataPreview from '../components/pages/Crypto-data-preview'
import ErrorPage from '../components/pages/Error'

const routes = [
    {
        path: '/',
        name: 'CurrenciesList',
        component: CurrenciesList
    },
    {
        path: '/cryptoPreview/:id',
        name: 'CryptoDataPreview',
        component: CryptoDataPreview,
    },
    {
        path: '*',
        name: 'ErrorPage',
        component: ErrorPage
    }
]

Vue.use(Router)

const router = new Router({
    routes
})

export default router
