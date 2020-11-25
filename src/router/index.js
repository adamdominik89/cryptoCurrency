import Vue from 'vue'
import Router from 'vue-router'

import CurrenciesList from '../components/pages/Currencies-list'
import CryptoDataPreview from '../components/pages/Crypto-data-preview'
import Contact from '../components/pages/Contact-page'
import ErrorPage from '../components/pages/Error'

export const routes = [
    {
        path: '/',
        name: 'CurrenciesList',
        component: CurrenciesList,
        label: 'Main Page'
    },
    {
        path: '/cryptoPreview/:id',
        name: 'CryptoDataPreview',
        component: CryptoDataPreview,
        label: 'Crypto Preview'
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        label: 'Contact'
    },
    {
        path: '*',
        name: 'ErrorPage',
        component: ErrorPage,
        label: 'Error Page'
    }
]

Vue.use(Router)

const router = new Router({
    routes
})

export default router
