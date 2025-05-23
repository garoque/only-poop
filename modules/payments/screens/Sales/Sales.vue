<script setup lang="ts">
import WidgetGroup from '@/modules/reports/components/Widget/Group/Group.vue'
import WidgetGroupLoader from '@/modules/reports/components/Widget/Group/Loader.vue'
import WidgetCondensed from '@/modules/reports/components/Widget/Condensed/Condensed.vue'
import SalesTableLoader from '@/modules/payments/components/Table/Sales/Loader.vue'
import SalesTable from '@/modules/payments/components/Table/Sales/Sales.vue'

import { useSalesList } from '@/modules/payments/composables/useSalesList/useSalesList'
import { useSalesReport } from '@/modules/reports/composables/useSalesReport/useSalesReport'
import type { MyselfContextProvider } from '@/modules/users/composables/useMyself/types'
import { myselfKey } from '@/modules/users/composables/useMyself/useMyself'
import { currencyFormatBRL } from '@/libs/currency/format'

const { user } = inject(myselfKey) as MyselfContextProvider

const {
  loading: reportLoading,
  grossRevenue,
  netRevenue,
} = useSalesReport({
  userId: user.value?.id!,
})

const { loading: salesLoading, sales } = useSalesList({
  userId: user.value?.id!,
})

const localeGrossRevenue = computed(() => {
  if (!grossRevenue.value) {
    return 'R$ 0,00'
  }

  return currencyFormatBRL(grossRevenue.value)
})

const localeNetRevenue = computed(() => {
  if (!netRevenue.value) {
    return 'R$ 0,00'
  }

  return currencyFormatBRL(netRevenue.value)
})
</script>

<template>
  <WidgetGroup v-if="user">
    <WidgetGroupLoader :loading="reportLoading" :amount="3">
      <WidgetCondensed :value="localeGrossRevenue" label="Valor bruto" />
      <WidgetCondensed :value="localeNetRevenue" label="Valor para saque" />
    </WidgetGroupLoader>
  </WidgetGroup>

  <WidgetDefault v-if="sales.length > 0" title="Listagem de vendas">
    <SalesTableLoader :loading="salesLoading">
      <SalesTable :sales="sales" />
    </SalesTableLoader>
  </WidgetDefault>
</template>
