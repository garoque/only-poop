import { useSession } from '@/modules/auth/composables/useSession/useSession'

export default defineNuxtRouteMiddleware(async (to) => {
  const session = useSession()
  const isLogged = await session.isLogged()

  if (!isLogged) {
    console.log('User is not authenticated')

    if (to.path === '/auth/login') {
      return
    }

    return navigateTo({ path: '/auth/login' })
  }
})
