<script setup lang="ts">
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import GistCardGroup from '@/modules/gists/components/Card/Group/Group.vue'
import GistCardGroupLoader from '@/modules/gists/components/Card/Group/Loader.vue'
import GistCardItem from '@/modules/gists/components/Card/Item/Item.vue'

import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types'
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself'

import { useGistsReport } from '@/modules/reports/composables/useGistsReport/useGistsReport'
import { useGistList } from '@/modules/gists/composables/useGistList/useGistList'

import { useScroll } from '@vueuse/core'

const { user } = inject(myselfKey) as MyselfContextProvider
const router = useRouter()

const {
  loading: reportLoading,
  totalGists,
  totalFreeGists,
  totalPaidGists,
  totalSoldGists,
} = useGistsReport({ user, isMyself: true })

const { gists, fetchMoreGistsByUsername, loading } = useGistList({
  username: user.value?.username!,
})

const { arrivedState } = useScroll(window, {
  offset: { bottom: 100 },
})

watch(
  () => arrivedState.bottom,
  () => {
    if (!arrivedState.bottom) {
      return
    }

    fetchMoreGistsByUsername()
  },
)

const handleNavigateToDetail = (id: string) => {
  router.push(`/${user.value?.username!}/gist/${id}`)
}
</script>

<template>
  <WidgetGroup v-if="user">
    <WidgetGroupLoader :loading="reportLoading" :amount="3">
      <WidgetCondensed :value="totalGists" label="Gists do total" />
      <WidgetCondensed :value="totalFreeGists" label="Gists gratuitos" />
      <WidgetCondensed :value="totalPaidGists" label="Gists pagos" />
      <WidgetCondensed :value="totalSoldGists" label="Gists vendidos" />
    </WidgetGroupLoader>
  </WidgetGroup>

  <WidgetDefault v-if="gists.length > 0" title="Todos os gists">
    <GistCardGroup>
      <GistCardGroupLoader :loading="loading">
        <GistCardItem
          v-for="gist in gists"
          :key="gist.id"
          @click="handleNavigateToDetail"
          :id="gist.id"
          :title="gist.title"
          :description="gist.description"
          :price="gist.price"
          :lang="gist.lang"
        />
      </GistCardGroupLoader>
    </GistCardGroup>
  </WidgetDefault>
</template>
