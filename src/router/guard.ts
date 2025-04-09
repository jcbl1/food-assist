import { useValidateToken } from "@/api/auth"
import type { NavigationGuardNext, RouteLocationNormalizedGeneric, Router } from "vue-router"

const doRedirect = (to: RouteLocationNormalizedGeneric, next: NavigationGuardNext) => {
    console.log('redirecting. original to.path: ' + to.path)
    sessionStorage.clear()
    if (to.path == '/login') {
        next()
    } else {
        next({ name: 'login' })
    }
}

const guard = (router: Router) => {
    router.beforeEach(async (to, from, next) => {
        console.log('to.path: ', to.path)
        console.log('redirected from: ', to.redirectedFrom)
        const token = sessionStorage.getItem('token')
        const unauthorized = sessionStorage.getItem('unauthorized')
        if (token && !unauthorized) {
            const valid: boolean = await useValidateToken(token)
            // const valid = true
            if (!valid) {
                doRedirect(to, next)
            }

            if (to.path == '/login') {
                if (to.redirectedFrom) next({ path: to.redirectedFrom.path })
                else next({ name: 'home' })
            } else {
                next()
            }
        } else {
            doRedirect(to, next)
        }
    })
}

export default guard
