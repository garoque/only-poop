import type { User } from '@/modules/users/entities/User/User'

interface UseGistReportOptions {
  user: Ref<User | undefined | null>
  isMyself: boolean
}

export function useGistsReport({ user, isMyself }: UseGistReportOptions) {
  const services = useServices()
  const { logAndTrack } = useLogger()

  const loading = ref<boolean>(true)
  const userId = ref<string>()

  const totalGists = ref<number>(0)
  const totalFreeGists = ref<number>(0)
  const totalPaidGists = ref<number>(0)
  const totalSoldGists = ref<number>(0)

  const fetchGistsReport = async () => {
    if (!userId.value) {
      return
    }

    loading.value = true

    try {
      const requests = [
        services.reports.totalGistsPublished(userId.value),
        services.reports.totalFreeGistsPublished(userId.value),
      ]

      if (isMyself) {
        requests.push(services.reports.totalSoldGistsPublished(userId.value))
      }

      const [total, free, sold] = await Promise.all(requests)
      totalGists.value = total ?? 0
      totalFreeGists.value = free ?? 0
      totalSoldGists.value = sold ?? 0

      if (total && free) totalPaidGists.value = total - free
    } catch (error) {
      logAndTrack(error)
    } finally {
      loading.value = false
    }
  }

  watchEffect(() => {
    if (!user.value) {
      return
    }

    userId.value = user.value.id
    fetchGistsReport()
  })

  return {
    loading,
    totalGists,
    totalFreeGists,
    totalPaidGists,
    totalSoldGists,
  }
}
