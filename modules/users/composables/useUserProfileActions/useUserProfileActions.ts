import { useClipboard } from '@vueuse/core'

export function useUserProfileActions() {
  const toast = useToast()
  const { copy } = useClipboard()

  const share = async (username: string) => {
    const url = `${window.location.origin}/${username}`

    await copy(url)

    toast.add({
      severity: 'info',
      summary: 'Sucesso!',
      detail: 'Link de perfil copiado!',
      life: 2000,
    })
  }

  return {
    share,
  }
}
